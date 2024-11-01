"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[625],{691:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var i=a(6540),n=a(7767),c=a(3112),l=a(5419);const r=function(e){var t=e.click,a=i.useContext(c.ib);return i.createElement("div",{className:"pt-1 pb-0.5 cursor-pointer text-xl text-red-600 max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:a.common.delete_text},i.createElement("i",{className:"wlr wlrf-delete hover:text-redd color-important text-light  text-sm 2xl:text-md leading-3"}))},o=function(e){var t=e.click,a=i.useContext(c.ib);return i.createElement("div",{className:"pt-1 pb-0.5  cursor-pointer text-xl text-textColor max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:a.common.edit_text},i.createElement("i",{className:"wlr wlrf-edit-3 hover:text-primary text-light  text-sm 2xl:text-md  leading-3 color-important "}))};var d=a(9163);const s=function(e){var t=e.span,a=e.edit_to,s=e.delete_to,m=e.click,p=e.item,x=e.duplicate_action,u=e.duplicateAlert,f=(0,i.useContext)(c.ib),w=(0,i.useContext)(c.Hi),_=(0,n.Zp)();return i.createElement("div",{className:"grid ".concat(t,"   text-textColor text-15px \n        font-medium w-11/12 antialiased overflow-ellipsis\n         overflow-hidden justify-items-end whitespace-nowrap")},i.createElement("div",{className:"flex  items-center ".concat(w?"justify-end":"justify-center","  space-x-5  w-full")},w&&i.createElement(d.A,{click:function(){u(p.id,x,f.earn_campaign.duplicate_alert_message,f.earn_campaign.duplicate_ok,f.earn_campaign.duplicate_cancel,f.earn_campaign.duplicate_campaign)}}),(0,l.Fv)(w,p.action_type)&&i.createElement(o,{click:function(){_("/".concat(a))}}),i.createElement(r,{click:function(){m(p.id,s,f.earn_campaign.delete_alert_message,f.earn_campaign.delete_ok,f.earn_campaign.delete_cancel,f.earn_campaign.delete_campaign)}})))};var m=a(6211),p=a(8592),x=a(5024),u=a(8194);const f=function(e){var t=e.keys,a=e.rewardTitle,r=e.campaignType,o=e.active,d=e.edit_to,f=void 0===d?"edit_earn_campaign/subtotal/0":d,w=e.enable_disable_toggle,_=void 0===w?null:w,g=e.delete_to,v=void 0===g?null:g,h=e.item,y=e.AddCheck,E=e.end_date,k=e.AllCheckList,C=e.duplicateCampaign,N=(0,n.Zp)(),b=(0,i.useContext)(c.Hi),A=(0,i.useContext)(c.ib),j=(0,i.useContext)(c.DC).appState;return i.createElement("div",{className:"grid grid-cols-12 gap-4 w-full min-w-full py-4  border border-light_border rounded-lg shadow-card  ",style:{minWidth:"1024px"},key:t},i.createElement(m.A,{checked:k.includes(h.id),click:function(){return y(h.id)}}),i.createElement((function(e){var t=e.span,a=e.rewardTitle,n=e.description,c=e.icon;return e.id,e.created_date,i.createElement("div",{className:" ".concat(t," antialiased  overflow-hidden")},i.createElement("div",{className:"flex items-center justify-start  gap-x-2 w-full overflow-hidden "},i.createElement("div",{className:"flex items-center justify-center ",style:{minWidth:"40px",maxWidth:"40px"}},["",null,"null",void 0].includes(c)?i.createElement("i",{className:"wlr wlrf-".concat(h.action_type," text-2xl 2xl:text-3xl text-primary p-0.5 leading-0 color-important h-10")}):i.createElement("img",{src:c,alt:"campaign_image_preview",className:" object-contain p-0.5 rounded-md h-10 w-10 "})),i.createElement("div",{className:"flex flex-col items-start space-y-2 w-[90%]"},i.createElement("h5",{className:"text-dark ".concat((0,l.Fv)(b,h.action_type)&&"cursor-pointer"," text-sm 2xl:text-md_16_l_18 font-semibold whitespace-pre overflow-hidden overflow-ellipsis w-[95%]"),onClick:function(e){if(e.ctrlKey){var t="".concat(j.local.common.edit_campaign_url,"/").concat(h.action_type,"/").concat(h.id);(0,l.Fv)(b,h.action_type)&&window.open(t,"_blank")}else(0,l.Fv)(b,h.action_type)&&N("/".concat(f))},title:a},a),i.createElement("p",{title:n,className:" text-light text-xs 2xl:text-sm font-normal opacity-75 overflow-hidden overflow-ellipsis whitespace-pre w-[95%] "},n))))}),{span:"col-span-4",id:h.id,created_date:h.created_at,rewardTitle:a,description:h.description,icon:h.icon}),i.createElement((function(e){var t=e.span,a=e.campaignType;return i.createElement("p",{title:a,className:" gird ".concat(t," text-dark text-xs 2xl:text-sm  font-medium w-full antialiased overflow-ellipsis whitespace-nowrap overflow-hidden self-center")},a)}),{span:"col-span-2",campaignType:r}),i.createElement((function(e){var t=e.span,a=e.campaign_date;return i.createElement("p",{title:a,className:" gird ".concat(t," text-dark text-xs 2xl:text-sm  font-medium  antialiased overflow-ellipsis whitespace-nowrap overflow-hidden self-center")},a)}),{span:"col-span-1",campaign_date:E}),i.createElement((function(e){var t=e.span;return i.createElement("div",{className:" gird ".concat(t," self-center")},i.createElement(x.A,{active:o,height:"2xl:h-4 h-3",width:"2xl:w-4 w-3",containerWidth:"w-8 2xl:w-9",containerHeight:"h-4 2xl:h-5",click:function(){(0,l.Fv)(b,h.action_type)?_(h.id,h.active):alertify.error(A.common.premium)}}))}),{span:"col-span-1 "}),i.createElement(u.Kd,{span:"col-span-1",id:h.id,createdDate:h.created_at}),i.createElement(s,{span:"col-span-2 ",duplicate_action:C,edit_to:f,item:h,delete_to:v,click:p.aw,duplicateAlert:p.io}))}},9163:(e,t,a)=>{a.d(t,{A:()=>c});var i=a(6540),n=a(3112);const c=function(e){var t=e.click,a=i.useContext(n.ib);return i.createElement("div",{className:"pt-1 pb-0.5  cursor-pointer text-xl text-textColor max-w-max",onClick:t,style:{paddingRight:"6.5px",paddingLeft:"6.5px"},title:a.common.duplicate_text},i.createElement("i",{className:"wlr wlrf-copy hover:text-primary text-light  text-sm 2xl:text-md leading-3 color-important "}))}}}]);