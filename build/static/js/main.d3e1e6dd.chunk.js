/*! For license information please see main.d3e1e6dd.chunk.js.LICENSE.txt */
(this.webpackJsonpexam1=this.webpackJsonpexam1||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(22),o=n.n(i),a=(n(36),n(3)),r=(n(37),n(0));var u=function(){return Object(r.jsx)("div",{children:"Loading..."})};var b=function(e){var t=e.hotel,n=Object(c.useState)(!1),s=Object(a.a)(n,2),i=s[0],o=s[1],b=Object(c.useState)(""),j=Object(a.a)(b,2),l=j[0],h=j[1],d=Object(c.useState)(!0),O=Object(a.a)(d,2),m=O[0],f=O[1],p=Object(c.useState)(!1),x=Object(a.a)(p,2),v=x[0],S=x[1],g=Object(c.useState)(!0),y=Object(a.a)(g,2),C=y[0],k=y[1];return Object(r.jsx)(r.Fragment,{children:C?m?Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={email:l,hotel:t.name};f(!1),fetch("api/hotels/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.success?S("Subscribed"):S("Already subscribed")})).finally((function(){return setTimeout((function(){f(!1),k(!1)}),5e3)}))},children:[Object(r.jsx)("input",{type:"email",id:"email",name:"email",onInput:function(e){h(e.target.value),e.target.value.includes(".")&&e.target.value.includes("@")?o(!0):o(!1)}}),i?Object(r.jsx)("button",{children:"Subscribe"}):Object(r.jsx)("button",{disabled:!0,children:"Subscribe"})]})}):v?Object(r.jsx)("p",{children:v}):Object(r.jsx)(u,{}):""})};var j=function(e){var t=e.hotel,n=Object(c.useState)(!1),s=Object(a.a)(n,2),i=s[0],o=s[1],u=Object(c.useState)(!1),j=Object(a.a)(u,2),l=j[0],h=j[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:t.name}),i?Object(r.jsx)("button",{onClick:function(){o(!1)},children:"Show less"}):Object(r.jsx)("button",{onClick:function(){o(!0)},children:"Show more"}),i&&Object(r.jsxs)("p",{children:[t.city," (",t.stars,")"]}),i&&Object(r.jsx)("button",{onClick:function(){h(!0)},children:"Request more info"}),l&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["Request more info about ",t.name]}),Object(r.jsx)(b,{hotel:t,setSubscribe:h},t.name)]})]})},l=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),o=Object(a.a)(i,2),b=o[0],l=o[1];return Object(c.useEffect)((function(){fetch("api/hotels").then((function(e){return e.json()})).then((function(e){s(!0),l(e)}),(function(e){console.log(e),s(!0)}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Hotels"}),!n&&Object(r.jsx)(u,{}),b.map((function(e){return Object(r.jsx)(j,{hotel:e},e.name)}))]})},h=n(21);!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.environment,n=void 0===t?"test":t,c=Object(h.b)({environment:n,models:{hotel:h.a},seeds:function(e){e.create("hotel",{name:"Hotel Nulla sit amet",stars:3,city:"Los Angeles"}),e.create("hotel",{name:"Hotel Curabitur suscipit suscipit",stars:4,city:"Las Vegas"}),e.create("hotel",{name:"Hotel Donec id justo",stars:5,city:"San Francisco"})},routes:function(){this.namespace="api/hotels",this.timing=2e3,this.get("/",(function(e,t){return e.hotels.all().models})),this.post("/subscribe",(function(e,t){var n=JSON.parse(t.requestBody);return"a@b.c"===n.email&&"Hotel Curabitur suscipit suscipit"===n.hotel?{success:!1}:{success:!0}}))}})}({environment:"development"}),o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d3e1e6dd.chunk.js.map