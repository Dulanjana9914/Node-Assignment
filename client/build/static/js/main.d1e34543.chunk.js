(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,r){},130:function(e,t,r){},139:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(94),c=r.n(s),n=(r(123),r(49)),l=r(10),i=r(178),b=r(186),j=r(183),o=r(39),d=r(187),m=r(173),u=Object(m.a)(b.a)({display:"flex",justifyContent:"space-between",alignItems:"center"}),p=r(1),O=function(){var e=Object(l.n)();return Object(p.jsx)(u,{padding:"1rem 6%",marginTop:"-1%",backgroundColor:"#5e5e5e",children:Object(p.jsx)(u,{gap:"1.75rem",children:Object(p.jsx)(d.a,{fontWeight:"bold",fontSize:"clamp(2rem, 2rem, 2.25rem)",color:"lightgreen",paddingTop:"0.5rem",marginLeft:"-2rem",onClick:function(){return e("/profile")},sx:{"&:hover":{color:"white",cursor:"pointer"}},children:"Simply Booking"})})})},x=function(e){var t=e.avatar,r=e.size,a=void 0===r?"120px":r;return Object(p.jsx)(b.a,{width:a,height:a,children:Object(p.jsx)("img",{style:{objectFit:"cover",borderRadius:"50%"},width:a,height:a,alt:"user",src:t})})},h=r(73),f=Object(h.b)({name:"auth",initialState:{user:null,token:null,posts:[]},reducers:{setLogin:function(e,t){e.user=t.payload.user,e.token=t.payload.token},setLogout:function(e){e.user=null,e.token=null},setPosts:function(e,t){e.posts=t.payload.posts},setPost:function(e,t){var r=e.posts.map((function(e){return e._id===t.payload.post._id?t.payload.post:e}));e.posts=r}}}),g=f.actions,v=g.setLogin,w=g.setLogout,y=(g.setPost,g.setPosts,f.reducer),N=function(){var e=Object(i.a)("(min-width:1000px)"),t=Object(o.c)((function(e){return e.user})),r=t.fname,a=t.lname,s=t.email,c=t.mobile,n=t.avatar,l=Object(o.b)(),d=Object(i.a)("(min-width:600px)");return Object(p.jsxs)(b.a,{children:[Object(p.jsx)(O,{}),Object(p.jsxs)(b.a,{width:"100%",padding:"2rem 0%",display:e?"flex":"block",gap:"0.5rem",justifyContent:"space-between",bgcolor:"#f0f2f5",children:[Object(p.jsx)(b.a,{paddingLeft:"3%",paddingTop:"3%",children:Object(p.jsx)("img",{style:{objectFit:"cover",borderRadius:"20%"},width:"180px",height:"180px",alt:"logo",src:"https://res.cloudinary.com/dl99x/image/upload/v1674659975/attachment_86137168_nttz7u.png"})}),Object(p.jsxs)(b.a,{flexBasis:e?"42%":void 0,mt:e?void 0:"2rem",children:[Object(p.jsx)(b.a,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:d?void 0:"span 4"}}}),Object(p.jsx)("h1",{className:"Hfontreg",children:"Your Profile"}),Object(p.jsx)("label",{className:"t-form-label",children:"First Name "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"fname",placeholder:"Enter First Name",value:r,name:"fname",disabled:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label",children:"Last Name "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"lname",placeholder:"Enter Last Name",value:a,name:"lname",disabled:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label",children:"Email "}),Object(p.jsx)(j.a,{type:"email",className:"inp-fields",id:"email",placeholder:"Enter Email",value:s,name:"email",disabled:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label",children:"Mobile Number "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"mobile",placeholder:"Enter mobile number ",value:c,name:"mobile",disabled:!0})]}),Object(p.jsxs)(b.a,{paddingRight:"9%",alignItems:"center",paddingTop:"3%",children:[Object(p.jsx)("h3",{children:"Profile Picture"}),Object(p.jsx)(x,{avatar:n}),Object(p.jsx)("button",{style:{color:"white",backgroundColor:"black",borderRadius:"10px",padding:"0.5rem 1rem",fontSize:"1.2rem",fontWeight:"bold",marginTop:"1rem"},onClick:function(){return l(w())},children:"Log Out"})]})]})]})},k=r(14),C=r(21),P=r(4),E=r(17),L=r(7),S=(r(65),r(184)),T=(r(130),function(e){return Object(p.jsx)("div",{className:"errMsg",children:e})}),R=function(e){return Object(p.jsx)("div",{className:"successMsg",children:e})},z=function(e){return!e},A=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},_=function(e){return e.length<8},D=function(e,t){return e===t},q={emailOrusername:"",password:"",err:"",success:""};var B=function(){var e=Object(a.useState)(q),t=Object(L.a)(e,2),r=t[0],s=t[1],c=Object(l.n)(),d=Object(o.b)(),m=r.emailOrusername,u=r.password,O=r.err,x=r.success,h=Object(i.a)("(min-width:600px)"),f=function(e){var t,a=e.target,c=a.name,n=a.value;s(Object(E.a)(Object(E.a)({},r),{},(t={},Object(P.a)(t,c,n),Object(P.a)(t,"err",""),Object(P.a)(t,"success",""),t)))},g=function(){var e=Object(C.a)(Object(k.a)().mark((function e(t){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!z(m)&&!z(u)){e.next=3;break}return e.abrupt("return",s(Object(E.a)(Object(E.a)({},r),{},{err:"Please fill in all fields!",success:""})));case 3:return e.prev=3,e.next=6,S.a.post("auth/login",{emailOrusername:m,password:u}).then((function(e){c("/profile");var t=e.data;d(v({user:t.user,token:t.token})),s(Object(E.a)(Object(E.a)({},r),{},{err:"",success:e.data.msg}))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response.data.msg&&s(Object(E.a)(Object(E.a)({},r),{},{err:e.t0.response.data.msg,success:""}));case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"Hfontreg",children:"LOGIN HERE"}),Object(p.jsxs)("div",{children:[O&&T(O),x&&R(x),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:g,children:[Object(p.jsx)(b.a,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:h?void 0:"span 4"}}}),Object(p.jsx)("label",{className:"t-form-label",children:"Email "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"email",placeholder:"Enter Email",value:m,name:"emailOrusername",onChange:f,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label",children:"Password "}),Object(p.jsx)(j.a,{type:"password",className:"inp-fields",id:"password",placeholder:"Enter Password",value:u,name:"password",onChange:f,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",className:"btn-register",style:{width:"140px",fontWeight:"bold",borderRadius:"12px"},children:"Login"}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0",Object(p.jsx)(n.b,{to:"/register",style:{textDecoration:"underline",textAlign:"center",fontStyle:"italic",color:"#6b5c06",fontSize:"20px",fontWeight:"bold"},children:"Don't Have an Account? Signup Here..."})]})]})]})},H=function(){var e=Object(i.a)("(min-width: 1000px)");return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{style:{backgroundImage:'url("https://res.cloudinary.com/dl99x/image/upload/v1674660093/social-media-icon-light-background_169963-225_cmri3n.jpg")'},children:[Object(p.jsx)(b.a,{width:"20%",p:"1rem 6%",textAlign:"left",marginTop:e?"0%":"2rem",marginBottom:e?"5%":"2rem",children:Object(p.jsx)(d.a,{fontWeight:"bold",fontSize:"30px",color:"green",children:"Simply Booking"})}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(b.a,{width:e?"40%":"70%",p:"2rem",m:"2rem auto",borderRadius:"1.5rem",backgroundColor:"#b4b7bb",marginLeft:e?"10%":"0",marginTop:e?"-1%":"2rem",height:"auto",marginBottom:e?"15%":"2rem",children:Object(p.jsx)(B,{})}),Object(p.jsxs)(b.a,{width:e?"28%":"43%",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"7rem",marginTop:"-12%",backgroundColor:"white",children:[Object(p.jsx)("br",{}),"  ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Dr. Perry"}),Object(p.jsx)("label",{className:"t-form-label-box",children:"Your Trusted Doctor "}),Object(p.jsx)("br",{}),"  ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Book your appointment "}),Object(p.jsx)("br",{})," ",Object(p.jsx)("h1",{children:"simply and easily"})]})]})]})})},I=r(98),F=r(185),W=r(181),M=r(182),G=r(106),Y={fname:"",lname:"",email:"",mobile:"",password:"",cf_password:"",avatar:"",err:"",success:""};var J=function(){var e=Object(a.useState)(Y),t=Object(L.a)(e,2),r=t[0],s=t[1],c=Object(l.n)(),o="",m=r.fname,O=r.lname,x=r.email,h=r.mobile,f=r.password,g=r.cf_password,v=r.err,w=r.success,y=Object(i.a)("(min-width:600px)"),N=Object(a.useState)(null),q=Object(L.a)(N,2),B=q[0],H=q[1],J=Object(a.useState)(Y),U=Object(L.a)(J,2),Z=U[0],V=U[1],$=function(e){var t,a=e.target,c=a.name,n=a.value;s(Object(E.a)(Object(E.a)({},r),{},(t={},Object(P.a)(t,c,n),Object(P.a)(t,"err",""),Object(P.a)(t,"success",""),t)))},K=function(){var e=Object(C.a)(Object(k.a)().mark((function e(t){return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!B){e.next=4;break}return e.next=4,Q();case 4:if(""===o&&(o="https://res.cloudinary.com/dl99x/image/upload/v1665520140/avatar_cugq40_osziik.png"),!(z(m)||z(O)||z(x)||z(h)||z(f))){e.next=7;break}return e.abrupt("return",s(Object(E.a)(Object(E.a)({},r),{},{err:"Please fill in all fields!",success:""})));case 7:if(A(x)){e.next=9;break}return e.abrupt("return",s(Object(E.a)(Object(E.a)({},r),{},{err:"Invalid email type!",success:""})));case 9:if(!_(f)){e.next=11;break}return e.abrupt("return",s(Object(E.a)(Object(E.a)({},r),{},{err:"Password must have at least 8 characters!",success:""})));case 11:if(D(f,g)){e.next=13;break}return e.abrupt("return",s(Object(E.a)(Object(E.a)({},r),{},{err:"Password and confirm password not matched!",success:""})));case 13:return e.prev=13,e.next=16,S.a.post("/auth/register",{fname:m,lname:O,email:x,mobile:h,password:f,avatar:o}).then((function(e){alert("Account Created Successfully"),c("/"),s(Object(E.a)(Object(E.a)({},r),{},{err:"",success:e.data.msg}))}));case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),e.t0.response.data.msg&&s(Object(E.a)(Object(E.a)({},r),{},{err:e.t0.response.data.msg,success:""}));case 21:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(C.a)(Object(k.a)().mark((function e(t){var r,a,s;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=B){e.next=4;break}return e.abrupt("return",V(Object(E.a)(Object(E.a)({},Z),{},{err:"No files were uploaded.",success:""})));case 4:if(!(r.size>1048576)){e.next=6;break}return e.abrupt("return",V(Object(E.a)(Object(E.a)({},Z),{},{err:"Size too large.",success:""})));case 6:if("image/jpeg"===r.type||"image/png"===r.type){e.next=8;break}return e.abrupt("return",V(Object(E.a)(Object(E.a)({},Z),{},{err:"Please upload a JPEG or PNG file.",success:""})));case 8:return(a=new FormData).append("file",r),e.next=12,S.a.post("/images/upload",a,{headers:{"content-type":"multipart/form-data"}});case 12:s=e.sent,o=s.data.url,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),V(Object(E.a)(Object(E.a)({},Z),{},{err:e.t0.response.data.msg,success:""}));case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"Hfontreg",children:"SIGNUP HERE"}),Object(p.jsxs)("div",{children:[v&&T(v),w&&R(w),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:K,children:[Object(p.jsx)(b.a,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:y?void 0:"span 4"}}}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"First Name "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"fname",placeholder:"Enter First Name",value:m,name:"fname",onChange:$,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"Last Name "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"lname",placeholder:"Enter Last Name",value:O,name:"lname",onChange:$,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"Email "}),Object(p.jsx)(j.a,{type:"email",className:"inp-fields",id:"email",placeholder:"Enter Email",value:x,name:"email",onChange:$,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"Mobile Number "}),Object(p.jsx)(j.a,{type:"text",className:"inp-fields",id:"mobile",placeholder:"Enter mobile number ",value:h,name:"mobile",onChange:$,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"Password "}),Object(p.jsx)(j.a,{type:"password",className:"inp-fields",id:"password",placeholder:"Enter Password",value:f,name:"password",onChange:$,required:!0}),Object(p.jsxs)("div",{className:"pwd-checklist",children:[Object(p.jsx)(I.a,{rules:["minLength","number","capital"],minLength:8,value:f,messages:{minLength:"At least 8 characters.",number:"Minimum One Numeric Value.",capital:"Minimum One Uppercase Letter."}}),Object(p.jsxs)("p",{children:["Your password must contain at least one numeric value and",Object(p.jsx)("br",{}),"one uppercase letter with minimum 8 characters."]})]}),Object(p.jsx)("label",{className:"t-form-label2",children:"* "}),Object(p.jsx)("label",{className:"t-form-label",children:"Confirm Password "}),Object(p.jsx)(j.a,{type:"password",className:"inp-fields",id:"cf_password",placeholder:"Confirm Password",value:g,name:"cf_password",onChange:$,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{className:"t-form-label",children:"Profile Picture "}),Object(p.jsx)(G.a,{acceptedFiles:".jpg,.jpeg,.png",multiple:!1,onDrop:function(e){return H(e[0])},children:function(e){var t=e.getRootProps,r=e.getInputProps;return Object(p.jsxs)(u,{children:[Object(p.jsxs)(b.a,Object(E.a)(Object(E.a)({},t()),{},{border:"2px dashed",p:"1rem",width:"100%",sx:{"&:hover":{cursor:"pointer"}},children:[Object(p.jsx)("input",Object(E.a)({},r())),B?Object(p.jsxs)(u,{children:[Object(p.jsx)(d.a,{children:B.name}),Object(p.jsx)(W.a,{})]}):Object(p.jsx)("p",{children:"Add Image Here"})]})),B&&Object(p.jsx)(F.a,{onClick:function(){return H(null)},sx:{width:"15%"},children:Object(p.jsx)(M.a,{})})]})}}),Object(p.jsx)("p",{}),Object(p.jsx)("label",{className:"t-form-label3",children:"All fields with * are required."})," ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",className:"btn-register",style:{width:"140px",fontWeight:"bold",borderRadius:"12px"},children:"Register"})]}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),"\xa0 \xa0 \xa0 \xa0\xa0 \xa0\xa0 \xa0",Object(p.jsx)(n.b,{to:"/",style:{textDecoration:"underline",textAlign:"center",fontStyle:"italic",color:"#6b5c06",fontSize:"20px",fontWeight:"bold"},children:"Already Have an Account? Login Here..."})]})]})},U=function(){var e=Object(i.a)("(min-width: 1000px)");return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{style:{backgroundImage:'url("https://res.cloudinary.com/dl99x/image/upload/v1674660093/social-media-icon-light-background_169963-225_cmri3n.jpg")'},children:[Object(p.jsx)(b.a,{width:"20%",p:"1rem 6%",textAlign:"left",marginTop:e?"0%":"2rem",children:Object(p.jsx)(d.a,{fontWeight:"bold",fontSize:"32px",color:"green",children:"Simply Booking"})}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)(b.a,{width:e?"40%":"70%",p:"2rem",m:"2rem auto",borderRadius:"1.5rem",backgroundColor:"#b4b7bb",marginLeft:e?"10%":"0",marginTop:e?"-1%":"2rem",height:"auto",children:Object(p.jsx)(J,{})}),Object(p.jsxs)(b.a,{width:e?"28%":"43%",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"6rem",marginTop:"-7%",backgroundColor:"white",children:[Object(p.jsx)("br",{}),"  ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Dr. Perry"}),Object(p.jsx)("label",{className:"t-form-label-box",children:"Your Trusted Doctor "}),Object(p.jsx)("br",{}),"  ",Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Book your appointment "}),Object(p.jsx)("br",{})," ",Object(p.jsx)("h1",{children:"simply and easily"})]})]})]})})};var Z=function(){var e=Boolean(Object(o.c)((function(e){return e.token})));return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(n.a,{children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{path:"/",exact:!0,element:Object(p.jsx)(H,{})}),Object(p.jsx)(l.b,{path:"/register",exact:!0,element:Object(p.jsx)(U,{})}),Object(p.jsx)(l.b,{path:"/profile",element:e?Object(p.jsx)(N,{}):Object(p.jsx)(l.a,{to:"/"})})]})})})},V=r(41),$=r(103),K=r.n($),Q=r(104),X={key:"root",storage:K.a,version:1},ee=Object(V.g)(X,y),te=Object(h.a)({reducer:ee,middleware:function(e){return e({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})}});c.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(o.a,{store:te,children:Object(p.jsx)(Q.a,{loading:null,persistor:Object(V.h)(te),children:Object(p.jsx)(Z,{})})}))},65:function(e,t,r){}},[[139,1,2]]]);
//# sourceMappingURL=main.d1e34543.chunk.js.map