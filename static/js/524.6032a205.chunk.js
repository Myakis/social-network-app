"use strict";(self.webpackChunk_01_educational_project=self.webpackChunk_01_educational_project||[]).push([[524],{8749:function(s,e,t){t.d(e,{D:function(){return l}});var a=t(8683),i=(t(2791),t(364)),r=t(6871),o=t(184),n=function(s){return{isAuth:s.auth.isAuth}},l=function(s){return(0,i.$j)(n)((function(e){return e.isAuth?(0,o.jsx)(s,(0,a.Z)({},e)):(0,o.jsx)(r.Fg,{to:"/login"})}))}},1524:function(s,e,t){t.r(e),t.d(e,{default:function(){return B}});var a=t(8683),i=t(885),r=t(2791),o=t(364),n=t(5806),l=t(5987),c="AboutMe_body__4JJ4p",d="AboutMe_avatar__9KZfq",u="AboutMe_profilePhoto__V-1WE",h="AboutMe_avatarChange__ebw5J",f="ProfileInfo_ProfileInfo__IQMHf",p="ProfileInfo_description__i84vk",j="ProfileInfo_item__o39Op",x="ProfileInfo_name__YYCwk",v="ProfileStatus_statusWrapper__zl5+c",_="ProfileStatus_status__fdH7s",m="ProfileStatus_overlay__BENyS",g=t(184),N=function(s){var e=(0,r.useState)(!1),t=(0,i.Z)(e,2),a=t[0],o=t[1],n=(0,r.useState)(s.status||""),l=(0,i.Z)(n,2),c=l[0],d=l[1],u=function(){s.isOwer&&o(!a)};(0,r.useEffect)((function(){d(s.status)}),[s.status]);return(0,g.jsxs)("div",{className:v,children:[!a&&(0,g.jsx)("div",{className:_,children:(0,g.jsx)("span",{onDoubleClick:u,children:s.status||s.isOwer&&"\u0414\u043e\u0431\u0430\u0432\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})}),a&&s.isOwer&&(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("div",{className:m}),(0,g.jsx)("input",{onChange:function(s){d(s.target.value)},autoFocus:!0,onBlur:u,onKeyDown:function(e){13===e.keyCode&&(u(),s.updateUserStatus(c))},value:c})]})]})},b=function(s){return(0,g.jsx)("div",{className:f,children:(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)("div",{className:"".concat(j," ").concat(x),children:s.fullName}),s.description&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:" \u041e\u0431\u043e \u043c\u043d\u0435:"})," ",s.description]}),(0,g.jsx)(N,{status:s.status,updateUserStatus:s.updateUserStatus,isOwer:s.isOwer}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"})," 10.10.2001"]}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:" \u0413\u043e\u0440\u043e\u0434:"})," \u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043a"]}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435: "})," \u041d\u0435\u0437\u0430\u043a\u043e\u043d\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u0441\u0448\u0435\u0435"]}),(0,g.jsx)("hr",{}),s.twitter&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"Twitter:"}),(0,g.jsxs)("a",{href:s.twitter,children:[" ",s.twitter]})]}),s.vk&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"vk:"}),(0,g.jsxs)("a",{href:s.vk,children:[" ",s.vk]})]}),s.instagram&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"instagram:"}),(0,g.jsxs)("a",{href:s.instagram,children:[" ",s.instagram]})]}),s.github&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"github:"}),(0,g.jsxs)("a",{href:s.github,children:[" ",s.github]})]}),s.website&&(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("span",{children:"website:"}),(0,g.jsxs)("a",{href:s.website,children:[" ",s.website]})]})]})})},P=t(612),w=["isOwer","isLoadAvatar"],k=function(s){var e=s.isOwer,t=s.isLoadAvatar,a=(0,l.Z)(s,w),i=(0,r.createRef)();return(0,g.jsxs)("div",{className:u,children:[(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("img",{src:a.photo||P,alt:"avatar"}),!t&&(0,g.jsx)(n.Z,{})]}),e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{className:"visibility-hidden",ref:i,onChange:function(s){s.target.files&&a.savePhoto(s.target.files[0])},type:"file",placeholder:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),(0,g.jsx)("button",{disabled:!t,className:h,onClick:function(){i.current.click()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]})]})},O=function(s){return(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)(k,{photo:s.profile.photos.large,isOwer:s.isOwer,savePhoto:s.savePhoto,isLoadAvatar:s.isLoadAvatar}),(0,g.jsx)(b,{status:s.status,isOwer:s.isOwer,updateUserStatus:s.updateUserStatus,description:s.profile.aboutMe,fullName:s.profile.fullName,twitter:s.profile.contacts.twitter,vk:s.profile.contacts.vk,instagram:s.profile.contacts.instagram,github:s.profile.contacts.github,website:s.profile.contacts.website,lookingForAJob:s.profile.lookingForAJob,jobDecription:s.profile.lookingForAJobDescription})]})},S=t(6070),A=t(2982),y="MyPost_form__T7Bfq",C="MyPost_textarea__NKHol",M="MyPost_button__NdlMG",U={post:"Post_post__Deqlx",body:"Post_body__2Ujn9",avatar:"Post_avatar__LsbHg",content:"Post_content__sotKc",tools:"Post_tools__q+7yq",count:"Post_count__bonHO"},Z=function(s){return(0,g.jsxs)("div",{className:U.post,children:[(0,g.jsxs)("div",{className:U.body,children:[(0,g.jsx)("div",{className:U.avatar,children:(0,g.jsx)("img",{src:s.photo?s.photo:P,alt:"avatar"})}),(0,g.jsx)("div",{className:U.content,children:s.message})]}),(0,g.jsxs)("div",{className:U.tools,children:[(0,g.jsxs)("span",{className:U.share,children:[(0,g.jsx)("span",{className:U.count,children:s.shareCount}),"\u041f\u043e\u0434\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"]}),(0,g.jsx)("span",{className:U.comment,children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442"}),(0,g.jsxs)("span",{className:U.like,children:[(0,g.jsx)("span",{className:U.count,children:s.likeCount})," \u041b\u0430\u0439\u043a"]}),(0,g.jsx)("span",{className:U.like,children:(0,g.jsx)("span",{className:U.count,children:s.date?s.date:""})})]})]})},L=t(5078),D=function(s){return(0,g.jsx)(L.l0,{onSubmit:function(e,t){s.addPost(e.post),t.reset()},validate:function(s){},render:function(s){var e=s.handleSubmit;return(0,g.jsxs)("form",{onSubmit:e,action:"#",className:y,children:[(0,g.jsx)(L.gN,{component:"textarea",className:C,name:"post",autoComplete:"off"}),(0,g.jsx)("button",{type:"submit",className:M,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})]})}})},I=function(s){var e=(0,A.Z)(s.post).reverse().map((function(e){var t=(e.date.getMonth()<10?"0"+e.date.getMonth():e.date.getMonth())+"        "+(e.date.getDay()<10?"0"+e.date.getDay():e.date.getDay())+":"+(e.date.getHours()<10?"0"+e.date.getHours():e.date.getHours())+":"+(e.date.getMinutes()<10?"0"+e.date.getMinutes():e.date.getMinutes());return(0,g.jsx)(Z,{id:e.id,message:e.message,likeCount:e.likeCount,shareCount:e.shareCount,photo:s.photo,date:t},e.id)}));return(0,g.jsxs)("div",{children:[s.isOwer&&(0,g.jsx)(D,{addPost:function(e){s.addPost(e)}}),e]})},H=(0,o.$j)((function(s){return{post:s.profile.post,valueText:s.profile.textPost,photo:s.profile.profile.photos.small}}),{addPost:S.q2})(I),q="Profile_wrapper__R1wLa",J="Profile_header__drWVh",F=function(s){return s.profile?(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:J,children:(0,g.jsx)("img",{src:"https://7oom.ru/wp-content/uploads/peizaji-01.jpg",alt:""})}),(0,g.jsxs)("div",{className:q,children:[!s.loadProfile&&(0,g.jsx)(n.Z,{}),(0,g.jsx)(O,{profile:s.profile,status:s.status,updateUserStatus:s.updateUserStatus,isOwer:s.isOwer,savePhoto:s.savePhoto,isLoadAvatar:s.isLoadAvatar}),(0,g.jsx)(H,{profile:s.profile,isOwer:s.isOwer})]})]}):(0,g.jsx)(n.Z,{})},E=t(5796),K=t(7781),T=t(8749),$=t(1687),z=t(6871),B=(0,K.qC)((0,o.$j)((function(s){return{profile:s.profile.profile,status:s.profile.status,userId:s.auth.userId,isLoadAvatar:s.profile.isLoadAvatar}}),{setUserProfile:S.$l,isAuthorization:E.j7,getStatus:S.lR,updateUserStatus:S.OL,savePhoto:S.Ju}),T.D)((function(s){var e=(0,z.UO)().id,t=(0,r.useState)(!1),o=(0,i.Z)(t,2),n=o[0],l=o[1];return(0,r.useEffect)((function(){var t=e;t||(t=s.userId),s.getStatus(t),l(!1),$.TV.getProfile(t).then((function(e){s.setUserProfile(e.data),l(!0)}))}),[e]),(0,g.jsx)(F,(0,a.Z)((0,a.Z)({},s),{},{isOwer:!e,loadProfile:n,savePhoto:s.savePhoto}))}))}}]);
//# sourceMappingURL=524.6032a205.chunk.js.map