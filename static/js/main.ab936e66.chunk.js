(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var c=n(4),a={login:"LOGIN_USER",logout:"LOGOUT_USER",details:"SET_USER"},r={token:JSON.parse(localStorage.getItem("token")),company_id:"company_0336d06ff0ec4b3b9306ddc288482663",icon:"",status:"",profile:JSON.parse(localStorage.getItem("profile"))};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.login:return Object(c.a)(Object(c.a)({},t.payload),{},{company_id:"company_0336d06ff0ec4b3b9306ddc288482663"});case a.details:return Object(c.a)(Object(c.a)({},e),{},{profile:JSON.parse(localStorage.getItem("profile"))});case a.logout:return Object(c.a)(Object(c.a)({},e),{},{token:localStorage.removeItem("token"),profile:localStorage.removeItem("profile"),icon:"",status:"",company_id:"company_0336d06ff0ec4b3b9306ddc288482663"});default:return e}}},22:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var c=n(13),a=function(e){return{type:c.b.login,payload:e}},r=function(e){return{type:c.b.details,payload:e}},o=function(){return{type:c.b.logout}}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var c=n(4),a={add:"CREATE_TASK",delete:"DELETE_TASK",update:"UPDATE_TASK"},r={task:[]};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.add:return Object(c.a)(Object(c.a)({},e),{},{tasks:t.payload});default:return e}}},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){var c=n(34);t.setupAxios=function(e){c.interceptors.request.use((function(t){var n=e.getState().user.token;return t.baseURL="https://stage.api.sloovi.com",t.headers.Authorization=n?"Bearer ".concat(n):"",t}))}},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),i=(n(39),n(4)),s=n(32),l=(n(40),n(11)),u=n(3),b=n(10),j=n(22),d=n(1);var f=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.user})).profile;return Object(d.jsxs)("nav",{className:"navbar sticky-top navbar-light bg-light",children:[Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsx)("ul",{className:"navbar-nav",children:Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(l.c,{className:"nav-link",to:"/",children:"Home"})})})}),t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.c,{className:"navbar-item",to:"/",children:"Home"}),Object(d.jsx)("button",{type:"button",className:"btn btn-default ml-auto mr-2",onClick:function(){return e(Object(j.a)())},children:"Logout"})]}):Object(d.jsx)(l.c,{to:"/login",className:"ml-auto mr-2",children:Object(d.jsx)("button",{type:"button",className:"btn btn-default",children:"Login"})})]})},O=(n(46),function(){var e=Object(b.c)((function(e){return e.user})).profile;return Object(d.jsx)(d.Fragment,{children:e?Object(d.jsx)("div",{className:"sidenav"}):""})});var p=function(e){var t=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(O,{}),Object(d.jsx)("div",{className:"main",children:t})]})},m=["component","profile"],h=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,320))})),v=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,321))})),g=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,318))}));var x=function(){var e=Object(b.c)((function(e){return e.user})).profile;return Object(d.jsx)(l.a,{children:Object(d.jsx)(p,{children:Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("h1",{children:"Loading"}),children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(y,{exact:!0,path:"/",component:h,profile:e}),Object(d.jsx)(u.b,{exact:!0,path:"/login",component:v}),Object(d.jsx)(u.b,{exact:!0,path:"/",component:v}),Object(d.jsx)(u.b,{path:"*",component:g})]})})})})},y=function(e){var t=e.component,n=e.profile,c=Object(s.a)(e,m);return Object(d.jsx)(u.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){return n?Object(d.jsx)(t,Object(i.a)({},e)):Object(d.jsx)(u.a,{to:"/login"})}}))},S=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,319)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},N=n(17),k=n(23),_=n(13),E=Object(N.a)({tasks:k.a,user:_.a}),T=Object(N.b)(E);(0,n(47).setupAxios)(T),o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.b,{children:Object(d.jsx)(b.a,{store:T,children:Object(d.jsx)(x,{})})})}),document.getElementById("root")),S()}},[[66,1,4]]]);
//# sourceMappingURL=main.ab936e66.chunk.js.map