(this["webpackJsonpmeal-scheduler"]=this["webpackJsonpmeal-scheduler"]||[]).push([[0],{103:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(62),a(17)),u=a(12),i=a.n(u),m=a(22),s=a(74),d=a(75),p=a(37),E=(a(88),a(116)),f=a(114),h=a(18),b=(a(40),function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.database().ref("users/9718920c-3246-4961-b068-bfa0336125bd"),e.abrupt("return",t.once("value").then((function(e){return e.val()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),v=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useRef)(!1);return Object(n.useEffect)((function(){l.current||function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r(t),l.current=!0;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),a},g=a(68),y=a(111),w=a(79);var j=function(){return v(),window.location.href.includes("login")?null:r.a.createElement(f.a,{bg:"light",expand:"lg"},r.a.createElement(f.a.Brand,{href:"#home"},r.a.createElement(g.a,{src:a(64),alt:"logo",width:"90px",height:"60px"})),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{href:"/"},"Home"),r.a.createElement(E.a.Link,{href:"/chef"},"Plate Editor")),r.a.createElement(y.a,{variant:"secondary",id:"dropdown-basic-button",title:"Information"},r.a.createElement(w.a.Item,{disabled:"true"},r.a.createElement(g.a,{src:a(96),width:"50px",height:"50px",alt:"pf"})),r.a.createElement(w.a.Item,{href:"/profile"},"Profile"),r.a.createElement(w.a.Item,{href:"/login"},"Logout"))))},O=(a(97),a(117)),k=a(112),x=a(28),I=a(115),C=a(118),D=function(){var e=Object(m.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.database().ref("group/".concat(t,"/date/").concat(a)),e.abrupt("return",n.once("value").then((function(e){return e.val()})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(e){var t=e.cardGroup,a=e.cardDate,l=function(e,t){var a=Object(n.useState)(null),r=Object(o.a)(a,2),l=r[0],c=r[1],u=Object(n.useRef)(!1);return Object(n.useEffect)((function(){u.current||function(){var a=Object(m.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(e,t);case 2:n=a.sent,c(n),u.current=!0;case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[]),l}(t,a);if(!l)return r.a.createElement(O.a,null,r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,{className:"text-center"},new Date(a.split("-")[0],a.split("-")[1]-1,a.split("-")[2]).toDateString()),r.a.createElement(O.a.Text,null,r.a.createElement(k.a,null,r.a.createElement("h1",null,"No Plate Planned!"),r.a.createElement("p",null,"Contact your chef for more information. Sorry!"),r.a.createElement("p",null,r.a.createElement(x.a,{variant:"info"},"Contact Chef"))))));console.log(l);var c="0";return r.a.createElement(O.a,null,r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,{className:"text-center"},new Date(a.split("-")[0],a.split("-")[1],a.split("-")[2]).toDateString()),r.a.createElement(O.a.Text,null,r.a.createElement(I.a,null,Object.entries(l).map((function(e){return r.a.createElement(O.a,null,r.a.createElement(I.a.Toggle,{className:"text-center pointer",as:O.a.Header,eventKey:c},e[0]),r.a.createElement(I.a.Collapse,{eventKey:c},r.a.createElement(O.a.Body,null,r.a.createElement(C.a,{variant:"flush"},e[1].map((function(e){return r.a.createElement(C.a.Item,{class:"food-item"},e)})),r.a.createElement("p",{hidden:!0},c=parseInt(c),c++,c=c.toString())))))})))),r.a.createElement("div",{class:"text-center"},r.a.createElement(y.a,{id:"dropdown-basic-button",title:"Meal Options",class:"center"},r.a.createElement(w.a.Item,{href:"#/action-1"},"Rate Meal"),r.a.createElement(w.a.Item,{href:"#/action-2"},"Request Late Plate"),r.a.createElement(w.a.Item,{href:"#/action-3"},"Message Chef")))))},P=a(73),T=(a(101),a(102),a(103),new Date),L=function(){return r.a.createElement("div",null,r.a.createElement(P.a,{initialSettings:{startDate:T.getMonth()+1+"/"+T.getDate()+"/"+T.getFullYear()}},r.a.createElement("button",{class:"material-button",type:"button"},r.a.createElement("span",null,"Pick Dates"))))},M=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return a=h.a.database().ref("group/".concat(t.group,"/date")),e.abrupt("return",a.once("value").then((function(e){return console.log(e.val()),e.val()})));case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=v(),t=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],l=a[1],c=Object(n.useRef)(!1);return Object(n.useEffect)((function(){!c.current&&e&&function(){var t=Object(m.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:a=t.sent,l(a),c.current=!0;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),console.log(r),r}(e);return e&&t?(console.log("user:"),console.log(e),console.log("dates:"),console.log(Object.keys(t)),r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{xl:!0},r.a.createElement(L,null))),r.a.createElement(d.a,null,Object.keys(t).map((function(t){return r.a.createElement(p.a,{sm:!0},r.a.createElement(S,{cardDate:t,cardGroup:e.group}))})))))):null},G=(a(65),a(38)),N=a(57),Y=a(26),U=a(113),A=function(){var e=v(),t=Object(n.useState)({}),a=Object(o.a)(t,2),l=a[0],c=a[1],u=function(e){c(Object(N.a)(Object(N.a)({},l),e))},i=Object(n.useState)(1),m=Object(o.a)(i,2),s=m[0],d=m[1],p=function(e){return function(t){var a=e,n=t.target.value;u(Object(G.a)({},a,n))}},E=new Array(s).fill(0).map((function(e,t){return r.a.createElement(Y.a.Group,{controlId:"mealForm.mealItem".concat(t+1)},r.a.createElement(Y.a.Label,null,"Item #",(t+1).toString()),r.a.createElement(Y.a.Control,{placeholder:"Lasagna",onChange:p(t)}))})),f=function(){for(var t={},a=0,n=Object.keys(l);a<n.length;a++){var r=n[a];null!==l[r]&&(t[r]=l[r])}console.log("Form Values:"),console.log(t),function(t){for(var a={},n=0,r=Object.keys(t);n<r.length;n++){var l=r[n];"name"!==l&&"date"!==l&&(a[l]=t[l])}console.log("Food Items:"),console.log(a),h.a.database().ref("group/".concat(e.group,"/date/").concat(t.date,"/").concat(t.name)).set(a)}(t)};return r.a.createElement("div",null,r.a.createElement(Y.a,{id:"meal-editor"},r.a.createElement(Y.a.Group,{controlId:"mealForm.mealName"},r.a.createElement(Y.a.Label,null,"Meal Name"),r.a.createElement(Y.a.Control,{placeholder:"Dinner",onChange:p("name")})),r.a.createElement(Y.a.Group,{controlId:"mealForm.mealDate"},r.a.createElement(Y.a.Label,null,"Meal Date"),r.a.createElement(Y.a.Control,{placeholder:"YYYY-MM-DD",onChange:p("date")}),r.a.createElement(Y.a.Text,{id:"dateHelpBlock",muted:!0},"All dates must be in the form YYYY-MM-DD. Don't forget your slashes!")),E),r.a.createElement(U.a,null,r.a.createElement(x.a,{variant:"primary",onClick:function(){return d(s+1)}},"Add an Item"),r.a.createElement(x.a,{variant:"danger",onClick:function(){u(Object(G.a)({},s-1,null)),d(s>1?s-1:s)}},"Delete an Item")),r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement(x.a,{variant:"light",size:"lg",block:!0,onClick:function(){f(),window.location.reload()}},"Submit"))},F=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=a?r.a.createElement(O.a,null,r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,{className:"text-center"},"Plan your meal!")),r.a.createElement(O.a.Body,null,r.a.createElement(A,null))):null;return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(x.a,{variant:"primary",size:"large",block:!0,onClick:function(){return l(!a)}},"Add a Plate"))),r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement(d.a,null,r.a.createElement(p.a,{style:{display:"flex",justifyContent:"center"}},c))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(76),z=a(9);var K=function(){return r.a.createElement("div",{height:"100vh"},r.a.createElement(s.a,{fluid:!0,style:{height:"100vh"}},r.a.createElement(d.a,{s:2},r.a.createElement(p.a,{xs:8,style:{backgroundColor:"#f47373",justifyContent:"center"}},r.a.createElement("div",{style:{height:"100vh",marginTop:"5%"}},r.a.createElement(g.a,{style:{flex:1,height:void 0,width:void 0},src:a(64),fluid:!0}))),r.a.createElement(p.a,{style:{backgroundColor:"skyblue"}},r.a.createElement("h1",{style:{paddingTop:"50%"}},"welcome 2 readyPlate"),r.a.createElement(Y.a,{style:{paddingTop:"5%"}},r.a.createElement(Y.a.Group,{controlId:"formUsername"},r.a.createElement(Y.a.Label,null,"Username"),r.a.createElement(Y.a.Control,{type:"username",placeholder:"Enter Username"})),r.a.createElement(Y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(Y.a.Label,null,"Password"),r.a.createElement(Y.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(x.a,{style:{marginTop:"5%"},block:!0},"Submit"),r.a.createElement("p",{style:{marginTop:"10%"}},"Don't have an account yet?"),r.a.createElement(x.a,{block:!0},"Sign Up"))))))};var H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SIGN UP!"),r.a.createElement(x.a,{style:{padding:"50px"}},"SIGN UP!"))};h.a.initializeApp({apiKey:"AIzaSyCA5DXoPJE6ilKLonGFQhEyetjip1jzUEM",authDomain:"mealscheduler-aedc6.firebaseapp.com",databaseURL:"https://mealscheduler-aedc6.firebaseio.com",projectId:"mealscheduler-aedc6",storageBucket:"mealscheduler-aedc6.appspot.com",messagingSenderId:"520867095650",appId:"1:520867095650:web:cd87edb3236614db3e1d3b",measurementId:"G-2P49DVCNRV"}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null),r.a.createElement(R.a,null,r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/profile"}),r.a.createElement(z.a,{path:"/login"},r.a.createElement(K,null)),r.a.createElement(z.a,{path:"/signup"},r.a.createElement(H,null)),r.a.createElement(z.a,{path:"/chef"},r.a.createElement(F,null)),r.a.createElement(z.a,{path:"/"},r.a.createElement(B,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/readyplate.de154ee3.png"},65:function(e,t,a){},82:function(e,t,a){e.exports=a(106)},88:function(e,t,a){},96:function(e,t,a){e.exports=a.p+"static/media/profilepic.9acfe78b.png"},97:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.cb006c01.chunk.js.map