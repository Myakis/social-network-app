"use strict";(self.webpackChunk_01_educational_project=self.webpackChunk_01_educational_project||[]).push([[984],{7984:function(s,t,e){e.r(t),e.d(t,{default:function(){return ts}});var a=e(8683),r=e(885),n=e(2791),i=e(364),o=e(7781),l=e(6871),c=e(7800),d=e(5987),u="AboutMe_body__4JJ4p",x="AboutMe_avatar__9KZfq",h="AboutMe_profilePhoto__V-1WE",p="AboutMe_avatarChange__ebw5J",w="AboutMe_avatarEdit__MDjH6",f=e(3964),g=e(5078),m={ProfileInfo:"ProfileInfo_ProfileInfo__IQMHf",description:"ProfileInfo_description__i84vk",itemDescr:"ProfileInfo_itemDescr__ZSAU7",name:"ProfileInfo_name__YYCwk",editDescription:"ProfileInfo_editDescription__8nqUM",form:"ProfileInfo_form__dkD66",inputWrap:"ProfileInfo_inputWrap__tYqHk"},j=e(7234),v=e(6647),_=e(184),A=function(){return(0,_.jsxs)("div",{className:v.Z.loaderWrap,children:[(0,_.jsx)("div",{className:v.Z.loader}),";"]})},N=["setEditMode","profile","saveData"],b=function(s){var t=s.profile,e=s.setEditMode,a=s.isOwer;return(0,_.jsxs)(_.Fragment,{children:[t.aboutMe&&(0,_.jsxs)("div",{className:m.itemDescr,children:[(0,_.jsx)("span",{children:" \u041e\u0431\u043e \u043c\u043d\u0435:"})," ",t.aboutMe]}),t.lookingForAJob&&(0,_.jsx)("div",{className:m.itemDescr,children:(0,_.jsx)("span",{children:" \u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b"})}),t.lookingForAJob&&(0,_.jsxs)("div",{className:m.itemDescr,children:[(0,_.jsx)("span",{children:" \u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0438\u043b\u043b\u044b:"})," ",t.lookingForAJobDescription]}),t.contacts&&Object.entries(t.contacts).filter((function(s){return s[1]})).map((function(s){return(0,_.jsxs)("div",{className:m.itemDescr,children:[(0,_.jsxs)("span",{children:[s[0],":"]}),(0,_.jsx)("a",{href:s[1],target:"_blank",children:s[1]})]},s[0])})),a&&(0,_.jsx)("button",{className:m.editDescription,onClick:function(){return e(!0)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})},C=function(s){var t=s.setEditMode,e=s.profile,o=s.saveData,l=(0,d.Z)(s,N),c=(0,n.useState)(!0),u=(0,r.Z)(c,2),x=u[0],h=u[1],p=(0,i.I0)();return(0,_.jsx)(g.l0,{onSubmit:function(s){h(!1),o(s).then((function(){h(!0),t(!1),p(f.Nw.setLogin(s.fullName))}))},initialValues:(0,a.Z)({},e),render:function(s){var t=s.handleSubmit;return(0,_.jsxs)("form",{onSubmit:t,className:m.form,children:[!x&&(0,_.jsx)(A,{}),(0,_.jsxs)("label",{className:m.inputWrap,children:[(0,_.jsx)("span",{children:" \u0418\u043c\u044f"}),(0,_.jsx)(g.gN,{name:"fullName",component:j.II,type:"text",placeholder:"\u0418\u043c\u044f",validate:j.C1})]}),(0,_.jsxs)("label",{className:m.inputWrap,children:[(0,_.jsx)("span",{children:" \u041e\u0431\u043e \u043c\u043d\u0435"}),(0,_.jsx)(g.gN,{name:"aboutMe",component:j.II,type:"text",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",validate:j.C1})]}),(0,_.jsxs)("label",{className:m.inputWrap,children:[(0,_.jsx)("span",{children:" \u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"}),(0,_.jsx)(g.gN,{name:"lookingForAJob",component:"input",type:"checkbox"})]}),(0,_.jsxs)("label",{className:m.inputWrap,children:[(0,_.jsx)("span",{children:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0438\u043b\u043b\u044b"}),(0,_.jsx)(g.gN,{name:"lookingForAJobDescription",component:j.II,type:"text",placeholder:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0438\u043b\u043b\u044b"})]}),(0,_.jsx)("hr",{}),(0,_.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),e.contacts&&Object.entries(e.contacts).map((function(s,t){return(0,_.jsxs)("label",{className:m.inputWrap,children:[(0,_.jsx)("span",{children:s[0]}),(0,_.jsx)(g.gN,{name:"contacts.".concat(s[0]),component:j.II,type:"text",placeholder:s[0],validate:j.r4})]},t)})),l.errorMessage&&(0,_.jsx)("div",{className:m.errorData,children:(0,_.jsxs)("span",{children:[l.errorMessage," "]})}),(0,_.jsx)("div",{className:m.inputWrap,children:(0,_.jsx)("button",{className:m.editDescription,type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}})},P="ProfileStatus_statusWrapper__zl5+c",F="ProfileStatus_status__fdH7s",k="ProfileStatus_editStatus__Czmbg",S="ProfileStatus_statusEditInput__Nkuzp",z="ProfileStatus_overlay__BENyS",Z=function(s){var t=(0,n.useState)(!1),e=(0,r.Z)(t,2),a=e[0],i=e[1],o=(0,n.useState)(s.status||";"),l=(0,r.Z)(o,2),c=l[0],d=l[1],u=function(){s.isOwer&&(i(!a),d(s.status))};(0,n.useEffect)((function(){d(s.status)}),[s.status]);return(0,_.jsxs)("div",{className:P,children:[!a&&(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)("span",{onDoubleClick:u,children:s.status||s.isOwer&&"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"}),s.isOwer&&(0,_.jsx)("button",{className:k,children:(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.043 512.043",xmlSpace:"preserve",children:(0,_.jsxs)("g",{children:[(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M444.902,365.824L231.569,152.491c-3.072-3.029-7.637-3.968-11.627-2.304c-3.989,1.643-6.592,5.547-6.592,9.856v295.381    c0,4.075,2.325,7.787,5.995,9.579c3.669,1.792,8.043,1.344,11.221-1.173l54.165-42.347l47.275,85.077    c1.963,3.499,5.589,5.483,9.344,5.483c1.6,0,3.243-0.363,4.779-1.131l64-32c2.603-1.301,4.565-3.605,5.419-6.379    c0.853-2.795,0.533-5.803-0.853-8.341l-44.544-80.149h67.2c4.309,0,8.192-2.603,9.856-6.592    C448.87,373.461,447.953,368.875,444.902,365.824z M352.038,362.731c-3.776,0-7.275,2.005-9.195,5.269    c-1.92,3.243-1.984,7.275-0.149,10.581l47.936,86.251l-44.907,22.464l-48.363-87.083c-1.515-2.731-4.16-4.672-7.211-5.291    c-0.725-0.149-1.429-0.213-2.133-0.213c-2.347,0-4.693,0.789-6.571,2.261l-46.763,36.565V185.792l176.939,176.939H352.038z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M224.017,0c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-64    C234.683,4.779,229.905,0,224.017,0z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M138.683,149.333h-64c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h64    c5.888,0,10.667-4.779,10.667-10.667S144.571,149.333,138.683,149.333z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M373.35,149.333h-64c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h64    c5.888,0,10.667-4.779,10.667-10.667S379.238,149.333,373.35,149.333z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M171.217,92.117l-45.269-45.248c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l45.269,45.248    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.024,7.531-3.115C175.377,103.04,175.377,96.277,171.217,92.117z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M171.217,212.821c-4.16-4.16-10.923-4.16-15.083,0l-45.269,45.248c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115l45.269-45.248C175.377,223.744,175.377,216.981,171.217,212.821z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{d:"M337.169,46.869c-4.16-4.181-10.923-4.181-15.104,0l-45.269,45.248c-4.16,4.16-4.16,10.923,0,15.083    c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.024,7.552-3.115l45.269-45.248    C341.329,57.792,341.329,51.051,337.169,46.869z",fill:"curremtColor","data-original":"#000000"})})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg"})]})})})]}),a&&s.isOwer&&(0,_.jsxs)("div",{className:"".concat(F," ").concat(S," "),children:[(0,_.jsx)("div",{className:z}),(0,_.jsx)("input",{onChange:function(s){d(s.target.value)},autoFocus:!0,onBlur:u,onKeyDown:function(t){13===t.keyCode&&(u(),s.updateUserStatus(c))},value:c})]})]})},D=function(s){var t=(0,n.useState)(!1),e=(0,r.Z)(t,2),a=e[0],o=e[1],l=(0,i.I0)();return(0,n.useEffect)((function(){s.isOwer&&l(f.Nw.setLogin(s.profile.fullName))}),[]),(0,_.jsx)(_.Fragment,{children:a?(0,_.jsx)(C,{setEditMode:o,profile:s.profile,saveData:s.saveData}):(0,_.jsx)(b,{setEditMode:o,profile:s.profile,isOwer:s.isOwer})})},M=function(s){return(0,_.jsx)("div",{className:m.ProfileInfo,children:(0,_.jsxs)("div",{className:m.description,children:[(0,_.jsx)("div",{className:"".concat(m.item," ").concat(m.name),children:s.profile.fullName}),(0,_.jsx)(Z,{status:s.status,updateUserStatus:s.updateUserStatus,isOwer:s.isOwer}),(0,_.jsx)(D,{profile:s.profile,isOwer:s.isOwer,saveData:s.saveData})]})})},O=e(612),I=["isOwner","isLoadAvatar"],y=function(s){var t=s.isOwner,e=s.isLoadAvatar,a=(0,d.Z)(s,I),r=(0,n.createRef)();return(0,_.jsxs)("div",{className:h,children:[(0,_.jsxs)("div",{className:x,onClick:function(){r.current.click()},children:[(0,_.jsx)("img",{src:a.photo||O,alt:"avatar"}),!e&&(0,_.jsx)(c.Z,{})]}),t&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("input",{className:"visibility-hidden",ref:r,onChange:function(s){s.target.files&&a.savePhoto(s.target.files[0])},type:"file",placeholder:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),(0,_.jsx)("button",{disabled:!e,className:p,onClick:function(){r.current.click()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),(0,_.jsx)("button",{disabled:!e,className:w,onClick:function(){r.current.click()},children:(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 64 64",xmlSpace:"preserve",children:(0,_.jsxs)("g",{children:[(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m11.105 43.597c-.512 0-1.023-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l31.254-31.254c.78-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-31.254 31.254c-.39.39-.902.586-1.414.586z",fill:"currentColor","data-original":"#000000"})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m8.017 58c-.139 0-.28-.015-.421-.045-1.08-.232-1.768-1.295-1.536-2.375l3.09-14.403c.232-1.08 1.3-1.766 2.375-1.536 1.08.232 1.768 1.295 1.536 2.375l-3.09 14.403c-.201.939-1.031 1.581-1.954 1.581z",fill:"currentColor","data-original":"#000000"})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m22.418 54.91c-.512 0-1.023-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l31.254-31.253c.78-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-31.253 31.253c-.391.391-.903.586-1.415.586z",fill:"currentColor","data-original":"#000000"})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m8.013 58c-.923 0-1.752-.642-1.954-1.581-.231-1.08.456-2.143 1.536-2.375l14.403-3.09c1.081-.229 2.144.457 2.375 1.536.231 1.08-.456 2.143-1.536 2.375l-14.403 3.09c-.141.031-.282.045-.421.045z",fill:"currentColor","data-original":"#000000"})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m48.015 29.313c-.512 0-1.024-.195-1.414-.586l-11.313-11.313c-.781-.781-.781-2.047 0-2.828.78-.781 2.048-.781 2.828 0l11.313 11.313c.781.781.781 2.047 0 2.828-.39.391-.902.586-1.414.586z",fill:"currentColor","data-original":"#000000"})}),(0,_.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"m53.672 23.657c-.512 0-1.024-.195-1.415-.586-.781-.781-.781-2.047 0-2.829 1.113-1.113 1.726-2.62 1.726-4.242s-.613-3.129-1.726-4.242c-1.114-1.114-2.621-1.727-4.243-1.727s-3.129.613-4.242 1.727c-.78.781-2.046.782-2.829 0-.781-.781-.781-2.047 0-2.829 1.868-1.869 4.379-2.898 7.071-2.898 2.691 0 5.203 1.029 7.071 2.898 1.869 1.868 2.898 4.379 2.898 7.071s-1.029 5.203-2.898 7.071c-.389.39-.901.586-1.413.586z",fill:"currentColor","data-original":"#000000"})})]})})})]})]})},U=function(s){return(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)(y,{photo:s.profile.photos.large,isOwner:s.isOwer,savePhoto:s.savePhoto,isLoadAvatar:s.isLoadAvatar}),(0,_.jsx)(M,{saveData:s.saveData,status:s.status,isOwer:s.isOwer,updateUserStatus:s.updateUserStatus,profile:s.profile})]})},L=e(6938),W=e(2982),$="MyPost_blog__-XsHe",E="MyPost_form__T7Bfq",H="MyPost_textarea__NKHol",J="MyPost_button__NdlMG",q={post:"Post_post__Deqlx",body:"Post_body__2Ujn9",avatar:"Post_avatar__LsbHg",content:"Post_content__sotKc",tools:"Post_tools__q+7yq",count:"Post_count__bonHO"},B=function(s){return(0,_.jsxs)("div",{className:q.post,children:[(0,_.jsxs)("div",{className:q.body,children:[(0,_.jsx)("div",{className:q.avatar,children:(0,_.jsx)("img",{src:s.photo?s.photo:O,alt:"avatar"})}),(0,_.jsx)("div",{className:q.content,children:s.message})]}),(0,_.jsxs)("div",{className:q.tools,children:[(0,_.jsx)("span",{className:q.share,children:(0,_.jsxs)("span",{className:q.count,children:[(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 128 128",xmlSpace:"preserve",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",id:"Share",d:"m8 116c-.305 0-.613-.035-.918-.105-1.805-.43-3.082-2.04-3.082-3.895 0-36.348 4.598-66.578 60-67.953v-28.047c0-1.59.941-3.027 2.395-3.664 1.449-.633 3.148-.359 4.32.727l52 48c.82.753 1.285 1.82 1.285 2.937s-.465 2.184-1.285 2.938l-52 48c-1.168 1.086-2.867 1.367-4.32.727-1.454-.638-2.395-2.075-2.395-3.665v-27.953c-38.004.91-45.016 14.93-52.422 29.742-.687 1.379-2.09 2.211-3.578 2.211zm60-40c2.211 0 4 1.789 4 4v22.863l42.102-38.863-42.102-38.863v22.863c0 2.211-1.789 4-4 4-44.188 0-53.703 17.09-55.574 44.387 8.285-11.129 22.406-20.387 55.574-20.387z",fill:"currentColor","data-original":"#000000"})})}),s.shareCount]})}),(0,_.jsx)("span",{className:q.like,children:(0,_.jsxs)("span",{className:q.count,children:[(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.001 512",xmlSpace:"preserve",children:(0,_.jsx)("g",{children:(0,_.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",fill:"currentColor","data-original":"#000000"})})}),s.likeCount]})})]})]})},K=function(s){return(0,_.jsx)(g.l0,{onSubmit:function(t,e){s.addPost(t.post),e.reset()},validate:function(s){},render:function(s){var t=s.handleSubmit;return(0,_.jsxs)("form",{onSubmit:t,action:"#",className:E,children:[(0,_.jsx)(g.gN,{component:"textarea",className:H,name:"post",autoComplete:"off"}),(0,_.jsx)("button",{type:"submit",className:J,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})]})}})},V=function(s){var t=(0,W.Z)(s.post).reverse().map((function(t,e){return(0,_.jsx)(B,{id:t.id,message:t.message,likeCount:t.likeCount,shareCount:t.shareCount,photo:s.photo},e)}));return(0,_.jsxs)(_.Fragment,{children:[s.isOwer&&(0,_.jsx)(K,{addPost:function(t){s.addPost(t)}}),(0,_.jsx)("div",{className:$,children:t})]})},X=L.dQ.addPost,Q=(0,i.$j)((function(s){return{post:s.profile.post,photo:s.profile.profile.photos.small}}),{addPost:X})(V),R="Profile_wrapper__R1wLa",Y=function(s){return s.profile?(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:R,children:[!s.loadProfile&&(0,_.jsx)(c.Z,{}),(0,_.jsx)(U,{profile:s.profile,status:s.status?s.status:"",updateUserStatus:s.updateUserStatus,isOwer:s.isOwer,savePhoto:s.savePhoto,isLoadAvatar:s.isLoadAvatar,saveData:s.saveData}),(0,_.jsx)(Q,{isOwer:s.isOwer})]})}):(0,_.jsx)(c.Z,{})},T=e(8749),G=e(4461),ss=L.dQ.setUserProfile,ts=(0,o.qC)((0,i.$j)((function(s){return{profile:s.profile.profile,status:s.profile.status,userId:s.auth.userId,isLoadAvatar:s.profile.isLoadAvatar}}),{setUserProfile:ss,isAuthorization:f.j7,getStatus:L.lR,updateUserStatus:L.OL,savePhoto:L.Ju,saveData:L.OH}),T.D)((function(s){var t=(0,l.UO)().id,e=(0,n.useState)(!1),i=(0,r.Z)(e,2),o=i[0],c=i[1];return(0,n.useEffect)((function(){var e=t?+t:void 0;e||(e=s.userId),s.getStatus(e),c(!1),G.TV.getProfile(e).then((function(t){s.setUserProfile(t.data),c(!0)}))}),[t]),(0,_.jsx)(Y,(0,a.Z)((0,a.Z)({},s),{},{isOwer:!t,loadProfile:o,savePhoto:s.savePhoto,saveData:s.saveData}))}))},7234:function(s,t,e){e.d(t,{II:function(){return p},wC:function(){return u},W2:function(){return x},C1:function(){return c},r4:function(){return d}});var a=e(8683),r=e(5987),n="FormControl_parent__xsHKg",i="FormControl_error__j-W5z",o=e(184),l=["input","meta"],c=function(s){return s?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0435"},d=function(s){return!0===/^[A-Za-z][A-Za-z0-9+\-.]*:(?:\/\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\.[A-Za-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\?(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?(?:\#(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?$/.test(s)||null==s?void 0:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"},u=function(s){return function(t){return t&&t.length>s?"\u041d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(s):void 0}},x=function(s){return function(t){return t&&t.length<s?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(s):void 0}},h=function(s){s.input;var t=s.meta,e=t.touched,a=t.error,r=s.children,l=a&&e;return(0,o.jsxs)("div",{className:"".concat(n," ").concat(l?i:""," "),children:[r,l&&(0,o.jsx)("span",{children:a})]})},p=function(s){var t=s.input,e=(s.meta,(0,r.Z)(s,l));return(0,o.jsx)(h,(0,a.Z)((0,a.Z)({},s),{},{children:(0,o.jsx)("input",(0,a.Z)((0,a.Z)({},e),t))}))}}}]);
//# sourceMappingURL=984.5d26da9e.chunk.js.map