(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[808],{60808:function(e,t,n){"use strict";n.d(t,{u:function(){return Ie}});var r=n(85893),s=n(9764),a=n(67294),o=n(36531),i=n(11622),c=n(13545),u=n.n(c),l=n(14924),d=n(47049),h=n(86492),m=n.n(h),f=n(94184),p=n.n(f),g=n(94199),x=n(29158),j=n(4480),v=n(78583),_=n.n(v);function y(e){var t=new Date(e);if(Number.isNaN(t))return"";if(function(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}(e)>=1){var n=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"at ".concat(n," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var C,N,M,b,w,Z=n(47568),S=n(70655),k=n(11475),E=n(90420),T=n(18429),B=n(64942),U=n(85402),A=n(12461),D=n(66516),O=n(38504),I=n(26713),R=n(25968),P=n(6226),F=n(71577),L=n(11382),H=n(51438),W=function(){function e(){(0,H.Z)(this,e)}return e.removeMessage=function(e,t){return(0,Z.Z)((function(){var n,r,s;return(0,S.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/messagevisibility",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e.banUser=function(e,t){return(0,Z.Z)((function(){var n,r,s;return(0,S.__generator)(this,(function(a){switch(a.label){case 0:return(n=new URL("/api/chat/users/setenabled",window.location.toString())).searchParams.append("accessToken",t),r=n.toString(),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})},[4,fetch(r,s)];case 1:return a.sent(),[2]}}))}))()},e}(),J=n(62638),V=n.n(J),Y=function(){var e=(0,Z.Z)((function(e,t){return(0,S.__generator)(this,(function(n){try{W.removeMessage(e,t)}catch(r){console.error(r)}return[2]}))}));return function(t,n){return e.apply(this,arguments)}}(),z=function(e){var t=e.label,n=e.value;return(0,r.jsxs)(R.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(P.Z,{span:12,children:t}),(0,r.jsx)(P.Z,{span:12,children:n})]})},G=function(e){var t=e.id,n=e.body,s=e.accessToken;return(0,r.jsxs)(R.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(P.Z,{span:18,children:n}),(0,r.jsx)(P.Z,{children:(0,r.jsx)(F.Z,{onClick:function(){return Y(t,s)},children:"X"})})]})},X=function(e){var t=e.client,n=t.messageCount,s=t.userAgent,a=t.connectedAt,o=t.geo;return(0,r.jsxs)("div",{children:[(0,r.jsx)(z,{label:"Messages Sent",value:"".concat(n)}),(0,r.jsx)(z,{label:"Geo",value:o}),(0,r.jsx)(z,{label:"Connected At",value:a.toString()}),(0,r.jsx)(z,{label:"User Agent",value:s})]})},q=function(e){var t=e.color,n="var(--theme-color-users-".concat(t,")");return(0,r.jsxs)(R.Z,{justify:"space-around",align:"middle",children:[(0,r.jsx)(P.Z,{span:12,children:"Color"}),(0,r.jsx)(P.Z,{span:12,children:(0,r.jsx)("div",{className:V().colorBlock,style:{backgroundColor:n},children:t})})]})},K=function(e){var t=e.userId,n=e.accessToken,s=(0,a.useState)(null),o=s[0],i=s[1],c=(0,a.useState)(!0),u=c[0],l=c[1],d=function(){var e=(0,Z.Z)((function(){var e,n;return(0,S.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("/api/moderation/chat/user/".concat(t))];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),i(e),l(!1),[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();if((0,a.useEffect)((function(){d()}),[]),!o)return null;var h=o.user,m=o.connectedClients,f=o.messages,p=h.displayName,g=h.displayColor,x=h.createdAt,j=h.previousNames,v=h.scopes,_=h.isBot,y=h.authenticated;return(0,r.jsx)("div",{className:V().modalContainer,children:(0,r.jsxs)(L.Z,{spinning:u,children:[(0,r.jsx)("h1",{children:p}),(0,r.jsxs)(R.Z,{justify:"space-around",align:"middle",children:[v.map((function(e){return(0,r.jsx)(P.Z,{children:e})})),y&&(0,r.jsx)(P.Z,{children:"Authenticated"}),_&&(0,r.jsx)(P.Z,{children:"Bot"})]}),(0,r.jsx)(q,{color:g}),(0,r.jsx)(z,{label:"User Created",value:x.toString()}),(0,r.jsx)(z,{label:"Previous Names",value:j.join(",")}),(0,r.jsx)("hr",{}),(0,r.jsx)("h2",{children:"Currently Connected"}),m.length>0&&(0,r.jsx)(R.Z,{gutter:[15,15],wrap:!0,children:m.map((function(e){return(0,r.jsx)(P.Z,{flex:"auto",children:(0,r.jsx)(X,{client:e})})}))}),(0,r.jsx)("hr",{}),f.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Recent Chat Messages"}),(0,r.jsx)("div",{className:V().chatHistory,children:f.map((function(e){return(0,r.jsx)(G,{id:e.id,body:e.body,accessToken:n},e.id)}))})]})]})})},Q=n(31833),$=n.n(Q),ee=U.Z.confirm,te=function(e){var t=e.messageID,n=e.userID,s=e.userDisplayName,o=e.accessToken,i=(0,a.useState)(!1),c=i[0],u=i[1],l=function(){var e=(0,Z.Z)((function(){var e;return(0,S.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,W.banUser(n,o)];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.error(e),A.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,Z.Z)((function(){var e;return(0,S.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,W.removeMessage(t,o)];case 1:return n.sent(),[3,3];case 2:return e=n.sent(),console.error(e),A.ZP.error(e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,Z.Z)((function(){return(0,S.__generator)(this,(function(e){return ee({icon:(0,r.jsx)(k.Z,{}),content:"Are you sure you want to remove this message from ".concat(s,"?"),onOk:function(){d()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,Z.Z)((function(){return(0,S.__generator)(this,(function(e){return ee({icon:(0,r.jsx)(k.Z,{}),content:"Are you sure you want to ban ".concat(s," from chat?"),onOk:function(){l()}}),[2]}))}));return function(){return e.apply(this,arguments)}}(),f=(0,r.jsx)(D.Z,{onClick:function(e){var t=e.key;"hide-message"===t?h():"ban-user"===t?m():"more-info"===t&&u(!0)},items:[{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:$().icon,children:(0,r.jsx)(E.Z,{})}),"Hide Message"]}),key:"hide-message"},{label:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:$().icon,children:(0,r.jsx)(T.Z,{})}),"Ban User"]}),key:"ban-user"},{label:(0,r.jsx)("div",{children:"More Info..."}),key:"more-info"}]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O.Z,{overlay:f,trigger:["click"],children:(0,r.jsx)("button",{type:"button",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)(I.Z,{children:(0,r.jsx)(B.Z,{})})})}),(0,r.jsx)(U.Z,{visible:c,okText:"Ban User",okButtonProps:{danger:!0},onOk:l,onCancel:function(){u(!1)},children:(0,r.jsx)(K,{userId:n,accessToken:o})})]})},ne=n(79010),re=n.n(ne),se=function(e){var t=e.badge,n=e.userColor,s="var(--theme-user-colors-".concat(n,")"),a={color:s,borderColor:s};return(0,r.jsx)("span",{style:a,className:re().badge,children:t})},ae=n(1899),oe=function(e){var t=e.message,n=e.highlightString,s=e.showModeratorMenu,o=e.sentBySelf,i=e.sameUserAsLast,c=e.isAuthorModerator,u=e.isAuthorAuthenticated,h=t.id,f=t.body,v=t.user,C=t.timestamp,N=v.id,M=v.displayName,b=v.displayColor,w=(0,j.sJ)(ae.FI),Z="var(--theme-color-users-".concat(b,")"),S="Sent ".concat(y(C)),k=(0,a.useState)(f),E=k[0],T=k[1],B=[];return c&&B.push((0,r.jsx)(se,{badge:"mod",userColor:b},"mod")),u&&B.push((0,r.jsx)(se,{badge:(0,r.jsx)(x.Z,{title:"authenticated"}),userColor:b},"auth")),(0,a.useEffect)((function(){T(m().decode(f))}),[t]),(0,r.jsx)("div",{className:p()(_().messagePadding,i&&_().messagePaddingCollapsed),children:(0,r.jsxs)("div",{className:p()(_().root,(0,l.Z)({},_().ownMessage,o)),style:{borderColor:Z},children:[!i&&(0,r.jsx)(g.Z,{title:"user info goes here",placement:"topLeft",mouseEnterDelay:1,children:(0,r.jsxs)("div",{className:_().user,style:{color:Z},children:[(0,r.jsx)("span",{className:_().userName,children:M}),(0,r.jsx)("span",{children:B})]})}),(0,r.jsx)(g.Z,{title:S,mouseEnterDelay:1,children:(0,r.jsx)(d.y,{search:n,children:(0,r.jsx)("div",{className:_().message,dangerouslySetInnerHTML:{__html:E}})})}),s&&(0,r.jsx)("div",{className:_().modMenuWrapper,children:(0,r.jsx)(te,{messageID:h,accessToken:w,userID:N,userDisplayName:M})}),(0,r.jsx)("div",{className:_().background,style:{color:Z}})]})})},ie=n(26042),ce=n(69396),ue=n(828),le=n(93045),de=n(27496),he=n(55241),me=n(77493),fe=n(96391),pe=n(57741),ge=function(e){var t=(0,a.useState)([]),n=t[0],s=t[1],o=e.onEmojiSelect,i=e.onCustomEmojiSelect,c=(0,a.useRef)(),u=function(){var e=(0,Z.Z)((function(){var e,t;return(0,S.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("/api/emoji")];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),s(e),[3,4];case 3:return t=n.sent(),console.error("cannot fetch custom emoji",t),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){u()}),[]),(0,a.useEffect)((function(){var e=n.map((function(e){return{emoji:e.name,label:e.name,url:e.url}}));(0,pe.wU)({rootElement:c.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(function(e){e.url?i(e):o(e)}))}),[n]),(0,r.jsx)("div",{ref:c})},xe=n(25882),je=n.n(xe),ve=function(e){var t=e.attributes,n=e.element,s=e.children,a=(0,fe.vt)(),o=(0,fe.UE)();return(0,r.jsxs)("span",(0,ce.Z)((0,ie.Z)({},t),{contentEditable:!1,children:[(0,r.jsx)("img",{alt:n.alt,src:n.src,title:n.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(a&&o?"0 0 0 3px #B4D5FF":"none")}}),s]}))},_e=function(e){var t,n;if(me.xv.isText(e))return e.text;0===e.children.length?t=[{text:""}]:t=null===(n=e.children)||void 0===n?void 0:n.map((function(e){return _e(e)})).join("");switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},ye=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],s=(0,j.sJ)(ae.Gt),o=(0,a.useMemo)((function(){return(0,fe.BU)(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e.isInline=function(e){return"image"===e.type},e}((0,me.Jh)()))}),[]),c=function(){if(s){var e=_e(o);s.send({type:i.C.CHAT,body:e}),me.YR.delete(o,{at:{anchor:me.ML.start(o,[]),focus:me.ML.end(o,[])}})}else console.log("websocketService is not defined")},u=function(e,t){if(e){var n=o.selection,r=function(e,t,n){return{type:"image",alt:e,src:t,name:n,children:[{text:""}]}}(t,e,t);if(me.YR.insertNodes(o,r,{select:!0}),n){var s,a=(0,ue.Z)(me.ML.parent(o,null===(s=n.focus)||void 0===s?void 0:s.path),2),i=a[0],c=a[1];o.isVoid(i)||me.NB.string(i).length?me.YR.insertNodes(o,r,{at:me.y$.next(c),select:!0}):(me.YR.insertNodes(o,r,{at:c,select:!0}),me.ML.normalize(o,{force:!0}))}else me.YR.insertNodes(o,r,{select:!0})}};return(0,r.jsxs)("div",{className:je().root,children:[(0,r.jsxs)(fe.mH,{editor:o,value:[{type:"paragraph",children:[{text:""}]}],children:[(0,r.jsx)(fe.CX,{onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),c())},renderElement:function(e){return"image"===e.element.type?(0,r.jsx)(ve,(0,ie.Z)({},e)):(0,r.jsx)("p",(0,ie.Z)({},e))},placeholder:"Chat message goes here...",style:{width:"100%"},autoFocus:!0}),(0,r.jsx)(he.Z,{content:(0,r.jsx)(ge,{onEmojiSelect:function(e){if(fe.F3.focus(o),e.url){var t=e.url;u(t,t)}else{var n=e.emoji;me.YR.insertText(o,n)}},onCustomEmojiSelect:function(e){fe.F3.focus(o);var t=e.url;u(t,t)}}),trigger:"click",onVisibleChange:function(e){return n(e)},visible:t})]}),(0,r.jsx)("button",{type:"button",className:je().emojiButton,title:"Emoji picker button",onClick:function(){return n(!t)},children:(0,r.jsx)(le.Z,{})}),(0,r.jsx)(F.Z,{className:je().sendButton,size:"large",type:"ghost",icon:(0,r.jsx)(de.Z,{}),onClick:c})]})},Ce=n(93174),Ne=n.n(Ce);function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Me.apply(this,arguments)}var be=function(e){return a.createElement("svg",Me({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),C||(C=a.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},a.createElement("stop",{offset:0,stopColor:"#2087e2"}),a.createElement("stop",{offset:1,stopColor:"#b63fff"}))),N||(N=a.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),M||(M=a.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),b||(b=a.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),w||(w=a.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))},we=function(){return(0,r.jsxs)("div",{className:Ne().chatModerationNotification,children:[(0,r.jsx)(be,{className:Ne().icon}),"You are now a moderator."]})},Ze=n(31681),Se=n.n(Ze),ke=function(e){var t=e.message,n=t.body,s=t.user.displayName,a=e.highlightString;return(0,r.jsxs)("div",{className:Se().chatSystemMessage,children:[(0,r.jsx)("div",{className:Se().user,children:(0,r.jsx)("span",{className:Se().userName,children:s})}),(0,r.jsx)(d.y,{search:a,children:(0,r.jsx)("div",{className:Se().message,dangerouslySetInnerHTML:{__html:n}})})]})},Ee=n(83066),Te=n.n(Ee),Be=function(e){var t=e.isAuthorModerator,n=e.userColor,s=e.displayName,a="var(--theme-user-colors-".concat(n,")");return(0,r.jsxs)("div",{className:Te().join,children:[(0,r.jsxs)("span",{style:{color:a},children:[s,t&&(0,r.jsx)("span",{children:(0,r.jsx)(se,{badge:"mod",userColor:n})})]})," ","joined the chat."]})},Ue=n(66017),Ae=function(e){var t=e.chatContainerRef,n=e.messages;return(0,r.jsx)("div",{className:u().toBottomWrap,children:(0,r.jsx)(F.Z,{type:"default",style:{color:"currentColor"},icon:(0,r.jsx)(Ue.Z,{}),onClick:function(){return t.current.scrollToIndex({index:n.length-1,behavior:"smooth"})},children:"Go to last message"})})};function De(e,t){if(e.length<2)return!1;var n=e[t],r=n.user.id,s=e[t-1];if((null===s||void 0===s?void 0:s.type)!==i.C.CHAT)return!1;if(!s.timestamp||!n.timestamp)return!1;var a=new Date(s.timestamp).getTime();return!(new Date(n.timestamp).getTime()-a>12e4)&&r===(null===s||void 0===s?void 0:s.user.id)}function Oe(e){var t=e.user.scopes;return!(!t||0===t.length)&&t.includes("MODERATOR")}var Ie=function(e){var t=e.messages,n=e.usernameToHighlight,c=e.chatUserId,l=e.isModerator,d=e.showInput,h=e.height,m=(0,a.useState)(!1),f=m[0],p=m[1],g=(0,a.useRef)(null),x=function(e,s){switch(s.type){case i.C.CHAT:var a,d,h;return(0,r.jsx)(oe,{message:s,showModeratorMenu:l,highlightString:n,sentBySelf:(null===(a=s.user)||void 0===a?void 0:a.id)===c,sameUserAsLast:De(t,e),isAuthorModerator:null===(d=s.user.scopes)||void 0===d?void 0:d.includes("MODERATOR"),isAuthorAuthenticated:null===(h=s.user)||void 0===h?void 0:h.authenticated},s.id);case i.C.NAME_CHANGE:return function(e){var t=e.oldName,n=e.user,s=n.displayName,a=n.displayColor,i="var(--theme-color-users-".concat(a,")");return(0,r.jsxs)("div",{className:u().nameChangeView,children:[(0,r.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,r.jsx)(o.Z,{})}),(0,r.jsxs)("div",{className:u().nameChangeText,children:[(0,r.jsx)("span",{style:{color:i},children:t}),(0,r.jsx)("span",{className:u().plain,children:" is now known as "}),(0,r.jsx)("span",{style:{color:i},children:s})]})]})}(s);case i.C.CONNECTED_USER_INFO:return function(e){if(!Oe(e))return(0,r.jsx)("div",{style:{width:"1px",height:"1px"}});return(0,r.jsx)(we,{})}(s);case i.C.USER_JOINED:return function(e){var t=e.user,n=t.displayName,s=t.displayColor,a=Oe(e);return(0,r.jsx)(Be,{displayName:n,userColor:s,isAuthorModerator:a})}(s);case i.C.SYSTEM:return(0,r.jsx)(ke,{message:s,highlightString:n},s.id);default:return null}},j=(0,a.useMemo)((function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.OO,{style:{height:h},className:u().virtuoso,ref:g,initialTopMostItemIndex:t.length-1,data:t,itemContent:function(e,t){return x(e,t)},followOutput:"auto",alignToBottom:!0,atBottomStateChange:function(e){return p(e)}}),!f&&(0,r.jsx)(Ae,{chatContainerRef:g,messages:t})]})}),[t,n,c,l,f]);return(0,r.jsxs)("div",{className:u().chatContainer,children:[j,d&&(0,r.jsx)(ye,{})]})};Ie.defaultProps={showInput:!0,height:"auto"}},13545:function(e){e.exports={chatHeader:"ChatContainer_chatHeader__EJsYI",toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",toBottomBtn:"ChatContainer_toBottomBtn__453AG",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz"}},83066:function(e){e.exports={join:"ChatJoinMessage_join__fP0IQ"}},31833:function(e){e.exports={icon:"ChatModerationActionMenu_icon__9j6DF"}},62638:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__czndV",chatHistory:"ChatModerationDetailsModal_chatHistory__PunRk",colorBlock:"ChatModerationDetailsModal_colorBlock___rAlw"}},93174:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},31681:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},25882:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrapper:"ChatTextField_inputWrapper__qBEWv",submitButtonWrapper:"ChatTextField_submitButtonWrapper__YBPMe",sendButton:"ChatTextField_sendButton__MOmD4",emojiButton:"ChatTextField_emojiButton__ON_Cu"}},79010:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},78583:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);