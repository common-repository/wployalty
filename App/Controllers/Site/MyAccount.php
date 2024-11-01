<?php
/**
 * @author      Wployalty (Alagesan)
 * @license     http://www.gnu.org/licenses/gpl-2.0.html
 * @link        https://www.wployalty.net
 * */

namespace Wlr\App\Controllers\Site;

use Wlr\App\Controllers\Base;
use Wlr\App\Helpers\Rewards;
use Wlr\App\Helpers\Validation;
use Wlr\App\Helpers\Woocommerce;

defined( 'ABSPATH' ) or die;

class MyAccount extends Base {
	function includes() {
		if ( self::$woocommerce->isBannedUser() || ! apply_filters( 'wlr_before_adding_menu', true ) ) {
			return;
		}
		add_action( 'woocommerce_account_menu_items', array( $this, 'addMenuItems' ) );
		$options                = self::$woocommerce->getOptions( 'wlr_settings' );
		$my_account_icon_enable = ( isset( $options['my_account_icon_enable'] ) && ! empty( $options['my_account_icon_enable'] ) ? $options['my_account_icon_enable'] : 'no' );
		if ( $my_account_icon_enable == 'yes' ) {
			add_filter( 'woocommerce_account_menu_item_classes', array( $this, 'addMyAccountPointClass' ), 10, 2 );
		}
		add_action( 'woocommerce_account_loyalty_reward_endpoint', array( $this, 'myAccountRewardPage' ) );
	}

	public function addMenuItems( $menu_items ) {
		$logout = $menu_items['customer-logout'];
		unset( $menu_items['customer-logout'] );
		$base_helper                   = new \Wlr\App\Helpers\Base();
		$menu_items['loyalty_reward']  = sprintf( __( '%s & %s',
			'wp-loyalty-rules' ), ucfirst( $base_helper->getPointLabel( 3 ) ),
			ucfirst( $base_helper->getRewardLabel( 3 ) ) );
		$menu_items['customer-logout'] = $logout;

		return apply_filters( 'wlr_myaccount_loyalty_menu_label', $menu_items );
	}

	function addMyAccountPointClass( $classes, $endpoint ) {
		if ( 'loyalty_reward' == $endpoint ) {
			$classes[] = 'wlr';
			$classes[] = 'wlr-trophy';
		}

		return $classes;
	}

	function myAccountRewardPage( $current_page ) {
		echo $this->rewardPage( 'myaccount' );
	}

	function rewardPage( $page_type = '' ) {
		if ( empty( $page_type ) || ! in_array( $page_type, [ 'myaccount', 'page', 'cart' ] ) ) {
			return '';
		}

		$template_name = 'cart_page.php';
		if ( $page_type != 'cart' ) {
			$template_name = 'customer_page.php';
		}
		if ( self::$woocommerce->checkStatusNewRewardSection() && self::$woocommerce->getOptions( 'wlr_new_rewards_section_enabled' ) == 'yes' ) {
			$template_name = 'cart_reward_page.php';
			if ( $page_type != 'cart' ) {
				$template_name = 'customer_reward_page.php';
			}
		}
		if ( file_exists( TEMPLATEPATH . '/' . $template_name ) ) {
			$customer_page    = new CustomerPage();
			$main_page_params = $customer_page->rewardPageData( $page_type );
		} else {
			$template_name = 'cart_page_popup.php';
			if ( $page_type != 'cart' ) {
				$template_name = 'my_account_page_reward.php';
			}
			$customer_page    = new CustomerPage();
			$main_page_params = $customer_page->getRewardPageData( $page_type );
		}
		$my_account_content = wc_get_template_html(
			$template_name,
			$main_page_params,
			'',
			WLR_PLUGIN_PATH . 'App/Views/Site/'
		);

		return apply_filters( 'wlr_my_account_point_and_reward_page', $my_account_content, $main_page_params );
	}

	public function addEndPoints() {
		if ( self::$woocommerce->isBannedUser()
		     || ! apply_filters( 'wlr_before_adding_menu_endpoint', true )
		) {
			return;
		}
		$status = true;
		$status = apply_filters( 'wlr_flush_rewrite_rules', $status );
		if ( $status ) {
			flush_rewrite_rules();
		}
		add_rewrite_endpoint( 'loyalty_reward', EP_ROOT | EP_PAGES );
	}

	function showRewardList() {
		$json      = array(
			'html' => ''
		);
		$wlr_nonce = (string) self::$input->post_get( 'wlr_nonce', '' );
		if ( ! Woocommerce::verify_nonce( $wlr_nonce, 'wlr_redeem_nonce' ) ) {
			wp_send_json_success( $json );
		}
		$json['html'] = $this->rewardPage( 'cart' );
		wp_send_json_success( $json );
	}

	function processShortCode( $attr, $content ) {
		if ( self::$woocommerce->isBannedUser() ) {
			return '';
		}

		return $this->rewardPage( 'page' );
	}

	function myRewardSectionPagination() {
		$wlr_nonce = (string) self::$input->post_get( 'wlr_nonce', '' );
		if ( ! Woocommerce::verify_nonce( $wlr_nonce, 'wlr_pagination_nonce' ) ) {
			wp_send_json_error( [ 'message' => __( 'Invalid nonce', 'wp-loyalty-rules' ) ] );
		}

		$post          = self::$input->post();
		$validate_data = Validation::validateRenderPage( $post );
		if ( is_array( $validate_data ) ) {
			foreach ( $validate_data as $key => $validate ) {
				$validate_data[ $key ] = [ current( $validate ) ];
			}
			wp_send_json_error( [
				'field_error' => $validate_data,
				'message'     => __( 'Basic validation failed', 'wp-loyalty-rules' )
			] );
		}
		$type          = (string) ! empty( $post['type'] ) ? $post['type'] : '';
		$user_email    = self::$woocommerce->get_login_user_email();
		$customer_page = new CustomerPage();
		$html          = '';
		switch ( $type ) {
			case 'rewards':
				$reward_helper = Rewards::getInstance();
				$user          = $reward_helper->getPointUserByEmail( $user_email );
				$html          = $customer_page->getRewardTabContent( $user_email, [
					'wp_user'   => $user,
					'page_type' => $post['page_type'],
					'offset'    => (int) $post['page_number']
				] );
				break;
			case 'coupons':
				$html = $customer_page->getCouponsTabContent( $user_email, [ 'page_type' => $post['page_type'] ] );
				break;
			case 'coupons-expired':
				$html = $customer_page->getExpiredCouponsTabContent( $user_email, [ 'page_type' => 0 ] );
				break;
			case 'transaction':
				$html = $customer_page->getTransactionContent( $user_email, [ 'page_type' => $post['page_type'] ] );
				break;
		}
		wp_send_json_success( [ 'html' => $html ] );
	}
}