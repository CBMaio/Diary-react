(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{21:function(e,t,c){},32:function(e,t,c){},41:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),i=c.n(a),s=c(9),r=c.n(s),j=(c(32),c(6)),l=c(26),o=c(8),d=c(52),b=c(51),m=c(23),u=c(13),h=c(54),O=c(50),x=c(22),f=c.n(x),g=(c(41),function(e){var t=e.addActivity,c={id:"",work:"",state:!1},i=Object(a.useState)(c),s=Object(o.a)(i,2),r=s[0],l=s[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"mt-5 create-title",children:"Crear tarea "}),Object(n.jsxs)(h.a,{onSubmit:function(e){if(e.preventDefault(),""!==r.work.trim()){var n=Object(j.a)(Object(j.a)({},r),{},{id:f()()});l(c),t(n)}},children:[Object(n.jsx)(h.a.Group,{children:Object(n.jsx)(h.a.Control,{type:"text",name:"work",value:r.work,onChange:function(e){var t=e.target,c=t.name,n=t.value;l(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},c,n)))},placeholder:"Ingrese la tarea a realizar"})}),Object(n.jsx)(O.a,{variant:"primary",type:"submit",block:!0,children:"Agregar tarea"})]})]})}),p=c(53),v=(c(21),{cursor:"pointer"}),y=function(e){var t=e.id,c=e.work,i=(e.state,e.deleteActivity),s=e.changeActivity,r=Object(a.useState)(!1),j=Object(o.a)(r,2),l=j[0],d=j[1];return Object(n.jsx)(p.a,{variant:l?"danger":"primary",children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(m.a,{md:11,className:"d-flex justify-content-between align-items-center",children:[Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("input",{type:"checkbox",onChange:function(){d(s(t))}}),Object(n.jsx)("p",{className:"ml-3 mb-0",style:{textDecoration:l?"line-through":""},children:c})]}),Object(n.jsxs)("p",{style:v,className:"mb-0",id:t,onClick:function(e){var t=e.target.id;i(t)},children:[" ","x"," "]})]})})},t)},N=function(e){var t=e.activities,c=e.deleteActivity,a=e.changeActivity;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"list-name",children:"Listado"}),0===t.length&&Object(n.jsx)("h4",{className:"list-name",children:"No hay tareas"}),t.map((function(e){return Object(n.jsx)(y,Object(j.a)(Object(j.a)({},e),{},{deleteActivity:c,changeActivity:a}),e.id)}))]})},k=(c(45),Object(a.memo)((function(e){var t=e.title;return Object(n.jsx)(b.a,{className:"mb-3 header-container",children:Object(n.jsx)(m.a,{children:Object(n.jsxs)("h1",{className:"text-center title",children:[" ",t," "]})})})}))),w=c.p+"static/media/backgroundDesktop.937a6cb0.jpeg",A=c.p+"static/media/github.d3263084.png",C=c.p+"static/media/linkedin.032cf8a6.png",F=(c(46),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:Object(n.jsx)("p",{className:"mb-0",children:Object(n.jsx)("em",{children:"Carolina Bel\xe9n Maio - 2021"})})}),Object(n.jsxs)("span",{className:"icon-container",children:[Object(n.jsx)("a",{href:"https://github.com/CBMaio",className:"link",children:Object(n.jsx)("img",{src:A,alt:"github Icon",className:"icon mr-1 ml-1"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/carolinamaio/",className:"link",children:Object(n.jsx)("img",{src:C,alt:"Linkedin Icon",className:"icon mr-1 ml-1"})})]})]})});c(47);var I=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1];return Object(n.jsxs)(d.a,{fluid:!0,className:"principal-section",style:{backgroundImage:"url(".concat(w,")")},children:[Object(n.jsx)(k,{title:"A new year, a new opportunity"}),Object(n.jsxs)(b.a,{className:"justify-content-center agenda-container",children:[Object(n.jsx)(m.a,{md:8,className:" form-container",children:Object(n.jsx)(g,{addActivity:function(e){i([].concat(Object(l.a)(c),[e]))}})}),Object(n.jsx)(m.a,{md:8,className:"mt-3 mt-md-5 list-container",children:Object(n.jsx)(N,{activities:c,deleteActivity:function(e){var t=c.filter((function(t){return t.id!==e}));i(t)},changeActivity:function(e){var t=c.find((function(t){return t.id===e})),n=Object(j.a)(Object(j.a)({},t),{},{state:!0!==t.state});return t.state=n.state,t.state}})})]}),Object(n.jsx)(b.a,{fluid:!0,className:"footer-container",children:Object(n.jsx)(F,{})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.aad0fd8c.chunk.js.map