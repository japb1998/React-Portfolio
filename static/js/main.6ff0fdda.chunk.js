(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(17),r=i.n(n),o=(i(24),i.p,i(25),i(19)),a=i(0),l=s.a.createContext(),j=s.a.createContext();function d(e){var t=e.children,i=Object(c.useState)(!0),s=Object(o.a)(i,2),n=s[0],r=s[1];return Object(a.jsx)(l.Provider,{value:n,children:Object(a.jsx)(j.Provider,{value:function(){r(!n)},children:t})})}i(27);var h=i(8);var b=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("h1",{children:"Javier Perez"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)("a",{children:Object(a.jsx)(h.b,{to:"/",children:"Home"})}),Object(a.jsx)("a",{children:Object(a.jsx)(h.b,{to:"/portfolio",children:"Portfolio"})}),Object(a.jsx)("a",{href:"/Zippedresume.zip",style:{color:"white"},className:"button",download:!0,children:"Download Resume"})]})]})},p=i(3);var u=function(e){var t=e.projects;return e.showMore,Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h1",{children:"projects"}),t.map((function(e){return Object(a.jsxs)("div",{className:"project-preview",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("p",{children:e.description}),Object(a.jsxs)("p",{children:["Written by ",e.author]}),Object(a.jsxs)("p",{children:["Technologies:",e.technologies]}),Object(a.jsx)(h.b,{to:"/portfolio/".concat(e.id),children:Object(a.jsx)("button",{className:"button",children:"More Info"})})]},e.id)}))]})},x=i(37),O=i(38),m=i(39),v=i(40),f=i.p+"static/media/profile.71591ecf.jpg";var g=function(){return Object(a.jsxs)(x.a,{className:"main-container",children:[Object(a.jsx)("div",{className:"container-title",children:Object(a.jsx)("h1",{children:"About"})}),Object(a.jsxs)(O.a,{children:[Object(a.jsx)(m.a,{xs:12,md:4,children:Object(a.jsx)(v.a,{style:{width:"200px",height:"200px"},src:f,rounded:!0})}),Object(a.jsx)(m.a,{xs:12,md:8,children:Object(a.jsx)("p",{children:"Former private pilot, with 2 years of studies in mechanical engineer. Currently enrolled on trilogy's coding bootcamp with the goal of working for a FAANG company"})})]})]})};var N=function(){return Object(a.jsxs)("nav",{className:"footer",children:[Object(a.jsx)("h3",{children:"Made with Effort by Javier Perez"}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)("a",{children:Object(a.jsx)(h.b,{to:"/",children:"Home"})}),Object(a.jsx)("a",{children:Object(a.jsx)(h.b,{to:"/portfolio",children:"Portfolio"})})]})]})},k=function(e){var t=e.projects,i=Object(p.f)().id,c=t.filter((function(e){return e.id==i}));return console.log(c),Object(a.jsx)("div",{className:"description",children:Object(a.jsxs)("div",{className:"none",children:[Object(a.jsxs)("h2",{children:[c[0].title,Object(a.jsx)("span",{children:Object(a.jsx)("a",{href:c[0].link,className:"button projectRedirect",target:"_blank",children:" More"})})]}),Object(a.jsx)("p",{children:c[0].description}),Object(a.jsxs)("p",{children:["Written by :",c[0].author]}),Object(a.jsxs)("p",{children:["Technologies:",c[0].technologies]}),Object(a.jsx)("div",{id:"descriptionImage",children:Object(a.jsx)("img",{src:"https://via.placeholder.com/150\nC/O https://placeholder.com/"})})]},c[0].id)})};var w=function(){var e=Object(c.useContext)(l),t=Object(c.useContext)(j);console.log(e,t);var i=[{id:1,title:"Budget Tracker",description:"An app for people who wants to save money but doesn't want to make the numbers",author:"Javier Perez",technologies:"Html,Css,Javascript,Node.js,Express,MongoDB",link:"https://young-retreat-92535.herokuapp.com/login"},{id:2,title:"Movies&Food",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus fuga natus recusandae quaerat eos temporibus blanditiis unde optio, ipsum repellat eligendi! Distinctio explicabo fuga at, veritatis voluptatibus molestiae voluptate!",author:"Javier Perez",technologies:"Html,Css,Javascript",link:"Placeholder"},{id:4,title:"Responsive Portfolio",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus fuga natus recusandae quaerat eos temporibus blanditiis unde optio, ipsum repellat eligendi! Distinctio explicabo fuga at, veritatis voluptatibus molestiae voluptate!",author:"Javier Perez",technologies:"Html,Css,Javascript",link:"https://japb1998.github.io/NewPortfolio/"}];return Object(a.jsx)(h.a,{children:Object(a.jsxs)(d,{children:[Object(a.jsxs)("div",{className:e?"main-dark":"main",children:[Object(a.jsx)(b,{}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(p.a,{exact:!0,path:"/portfolio",children:Object(a.jsx)(u,{projects:i})}),Object(a.jsx)(p.a,{path:"/portfolio/:id",children:Object(a.jsx)(k,{projects:i})})]})]}),Object(a.jsx)("button",{className:"button",onClick:function(){return t()},children:"Click"}),Object(a.jsx)(N,{})]})})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(a.jsx)(w,{}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.6ff0fdda.chunk.js.map