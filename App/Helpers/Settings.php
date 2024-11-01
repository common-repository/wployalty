<?php
/**
 * @author      Wployalty (Alagesan)
 * @license     http://www.gnu.org/licenses/gpl-2.0.html
 * @link        https://www.wployalty.net
 * */

namespace Wlr\App\Helpers;
defined( 'ABSPATH' ) or die();

class Settings {
	/**
	 * Get settings.
	 *
	 * @return array
	 */
	public static function getSettings() {
		return get_option( 'wlr_settings', [] );
	}

	/**
	 * Get setting.
	 *
	 * @param string $key Setting key.
	 * @param string $default Default value.
	 *
	 * @return mixed
	 */
	public static function get( $key, $default = '' ) {
		$settings = self::getSettings();

		return $settings[ $key ] ?? $default;
	}

	public static function getPointLabel( $point, $label_translate = true ) {
		$singular = Settings::get( 'wlr_point_singular_label', 'point' );
		if ( $label_translate ) {
			$singular = __( $singular, 'wp-loyalty-rules' );
		}
		$plural = Settings::get( 'wlr_point_label', 'points' );
		if ( $label_translate ) {
			$plural = __( $plural, 'wp-loyalty-rules' );
		}
		$point_label = ( $point == 0 || $point > 1 ) ? $plural : $singular;

		return apply_filters( 'wlr_get_point_label', $point_label, $point );
	}

	public static function isIncludingTax() {
		$tax_calculation_type = self::get( 'tax_calculation_type', 'inherit' );
		$is_including_tax     = false;
		if ( $tax_calculation_type == 'inherit' ) {
			$is_including_tax = ( 'yes' === get_option( 'woocommerce_prices_include_tax' ) );
		} elseif ( $tax_calculation_type === 'including' ) {
			$is_including_tax = true;
		}

		return $is_including_tax;
	}
}