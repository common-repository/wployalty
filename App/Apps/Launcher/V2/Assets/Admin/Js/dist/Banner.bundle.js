"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[685],{6076:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(4705),o=n(296),l=n(6540),a=n(2706),c=n(5971);const s=function(e){var t=e.isActive,n=e.click,r=e.deactivate_tooltip,o=void 0===r?"click to de-activate":r,a=e.activate_tooltip,c=void 0===a?"click to activate":a,s=e.isPro,i=void 0===s||s;return l.createElement("div",{className:"flex items-center  p-0.5 2xl:w-11 2xl:h-6 w-9 h-5 \n    ".concat(i?"cursor-pointer":"cursor-not-allowed"," transition delay-150 ease rounded-xl\n    ").concat(t&&i?"bg-blue_primary justify-end ":"bg-light_gray justify-start","\n  \n    "),title:t?o:c,onClick:n},l.createElement("span",{className:" 2xl:h-5 h-4 2xl:w-5 w-4 rounded-full\n         bg-white\n         "}))};var i=n(4201),m=n(8727),u=n(2591),b=n(3112),d=n(1018),p=n(3737);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const w=function(e){var t=e.setActiveSidebar,n=l.useContext(b.ib),r=l.useContext(b.DC),f=r.commonState,w=r.appState,v=r.setCommonState,h=l.useContext(b.J2),_=h.errors,g=h.errorList,E=l.useState(!1),y=(0,o.A)(E,2),k=y[0],N=y[1],j=f.content.member.banner,O=function(e,t,n){var r=x({},f);r.content.member.banner[t][n]=e.target.value,v(r)};return l.createElement("div",null,l.createElement(a.A,{title:n.common.banner,click:function(){return t("member")}}),l.createElement("div",{className:"flex flex-col w-full h-[488px] overflow-y-auto "},l.createElement(c.A,{title:n.member.banner.levels},l.createElement("div",{className:"flex items-center justify-between w-full"},l.createElement("p",{className:"text-dark font-normal 2xl:text-sm text-xs tracking-wide"},"show"===j.levels.is_show?n.common.enabled:n.common.disabled),l.createElement("div",{className:"flex items-center gap-x-2"},!w.is_pro&&l.createElement("div",{className:"flex items-center  cursor-pointer   justify-center "},l.createElement("span",{className:"bg-blue_primary text-white font-medium rounded text-xs px-1.5 py-1",onClick:function(e){e.preventDefault(),window.open(n.common.buy_pro_url)}},n.common.upgrade_text)),l.createElement(s,{isActive:"show"===j.levels.is_show,click:w.is_pro?function(e){e.preventDefault();var t=x({},f);"show"===j.levels.is_show?(t.content.member.banner.levels.is_show="none",v(t)):(t.content.member.banner.levels.is_show="show",v(t))}:function(){},isPro:w.is_pro,activate_tooltip:n.common.toggle.activate,deactivate_tooltip:n.common.toggle.deactivate})))),l.createElement(c.A,{title:n.common.text},l.createElement(i.A,{label:n.common.texts,value:j.texts.welcome,error:g.includes("content.member.banner.texts.welcome"),error_message:g.includes("content.member.banner.texts.welcome")&&(0,p.u1)(_,"content.member.banner.texts.welcome"),onChange:function(e){return O(e,"texts","welcome")}}),l.createElement("div",{className:"flex items-center justify-between w-full"},l.createElement("p",{className:"text-light  text-xs 2xl:text-sm font-semibold tracking-wider"},n.member.banner.points),l.createElement("div",{className:"flex items-center gap-x-2"},l.createElement("p",{className:"text-dark font-normal  text-xs tracking-wide"},"show"===j.points.is_show?n.common.enabled:n.common.disabled),l.createElement(s,{isActive:"show"===j.points.is_show,click:function(e){e.preventDefault();var t=x({},f);"show"===j.points.is_show?(t.content.member.banner.points.is_show="none",v(t)):(t.content.member.banner.points.is_show="show",v(t))},activate_tooltip:n.common.toggle.activate,deactivate_tooltip:n.common.toggle.deactivate}))),l.createElement(i.A,{label:n.member.banner.point_description,value:j.texts.points_label,error:g.includes("content.member.banner.texts.points_label"),error_message:g.includes("content.member.banner.texts.points_label")&&(0,p.u1)(_,"content.member.banner.texts.points_label"),onChange:function(e){return O(e,"texts","points_label")},type:"textarea"})),l.createElement(c.A,null,l.createElement("div",{className:"flex flex-col w-full ".concat(k?"h-[252px]":"h-10"," transition-all  ease-out overflow-hidden  bg-grey_extra_light border border-card_border rounded-md ")},l.createElement("div",{className:"w-full flex items-center cursor-pointer justify-between w-full p-1.5",onClick:function(){return N(!k)}},l.createElement("div",{className:"flex items-center p-1 gap-x-2"},l.createElement(u.A,{icon:"info_circle",color:"text-dark"}),l.createElement("p",{className:"text-dark font-medium 2xl:text-md text-sm "},n.member.banner.shortcodes)),l.createElement(u.A,{icon:"arrow-down",color:"text-dark"})),l.createElement("span",{className:"border-b border-light_border w-full"}),l.createElement("div",{className:"flex flex-col w-full h-full overflow-y-auto "},n.shortcodes.content.member.banner.shortcodes.map((function(e,t){return l.createElement(m.A,{key:t,label:e.label,value:e.value})}))))),l.createElement(d.A,{click:function(){return t("member")}})))}}}]);