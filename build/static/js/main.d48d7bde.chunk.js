(this.webpackJsonpportf=this.webpackJsonpportf||[]).push([[0],{22:function(e,s,c){},24:function(e,s,c){},25:function(e,s,c){},44:function(e,s,c){},45:function(e,s,c){},46:function(e,s,c){},47:function(e,s,c){},48:function(e,s,c){},49:function(e,s,c){},50:function(e,s,c){},51:function(e,s,c){},52:function(e,s,c){"use strict";c.r(s);var t=c(0),n=c(1),i=c.n(n),l=c(14),r=c.n(l),a=(c(22),c(5)),j=c.n(a),d=c(15),o=c(3),b=(c(24),function(e){var s=e.pagesArray,c=e.sliderClassName,i=Object(n.useState)(0),l=Object(o.a)(i,2),r=l[0],a=l[1];return Object(t.jsxs)("div",{className:"slider",children:[s.map((function(e,s){return Object(t.jsx)("div",{className:"slide  "+c,style:{transform:"translateX(".concat(r,"%)")},children:e},s)})),Object(t.jsx)("button",{id:"goLeft",className:"btn-slider",onClick:function(){a(0===r?-100*(s.length-1):r+100)},children:Object(t.jsx)("img",{src:"./image/left.png",alt:"left",className:"sign"})}),Object(t.jsx)("button",{id:"goRight",className:"btn-slider",onClick:function(){r===-100*(s.length-1)?a(0):a(r-100)},children:Object(t.jsx)("img",{src:"./image/right.png",alt:"right",className:"sign"})})]})}),h=(c(25),function(e){var s=e.school;return Object(t.jsxs)("div",{className:"school-content",children:[Object(t.jsx)("h6",{className:"school-name",children:s.name}),Object(t.jsx)("p",{className:"school-description",children:s.description}),Object(t.jsx)("p",{children:s.link&&Object(t.jsx)("a",{href:s.link,className:"school-link",target:"_blank",rel:"noreferrer",children:s.link})})]})}),O=function(e){var s,c=e.schools;return s=c.map((function(e){return Object(t.jsx)(h,{school:e},e.id)})),Object(t.jsxs)("div",{id:"education-section",className:"section",children:[Object(t.jsx)("h1",{className:"title",children:"Education"}),Object(t.jsx)(b,{schools:c,pagesArray:s,sliderClassName:"education-slider"})]})},m=c(16),x=c.n(m),u=function(){return x.a.get("/api/all")},g=(c(44),function(){return Object(t.jsxs)("div",{className:"headerAnimation",children:[Object(t.jsxs)("div",{className:"light-squares",children:[Object(t.jsx)("div",{className:"light-square ls1"}),Object(t.jsx)("div",{className:"light-square ls2"}),Object(t.jsx)("div",{className:"light-square ls3"})]}),Object(t.jsx)("img",{src:"./image/bg1.png",alt:"house",className:"bg-house bg1"}),Object(t.jsx)("img",{src:"./image/bg2.png",alt:"house",className:"bg-house bg2"}),Object(t.jsx)("img",{src:"./image/bg3.png",alt:"house",className:"bg-house bg3"}),Object(t.jsx)("img",{src:"./image/bg4.png",alt:"house",className:"bg-house bg4"}),Object(t.jsx)("img",{src:"./image/me_sh.png",alt:"",className:"me"})]})}),f=(c(45),function(){return Object(t.jsxs)("div",{className:"sentence-section",children:[Object(t.jsx)("div",{className:"sentence-words",children:Object(t.jsx)("h1",{className:"sentence-word dream",children:"Dream"})}),Object(t.jsx)("div",{className:"sentence-word",children:Object(t.jsx)("h1",{className:"sentence-word plan",children:"Plan"})}),Object(t.jsx)("div",{className:"sentence-word",children:Object(t.jsx)("h1",{className:"sentence-word create",children:"Create"})})]})}),p=(c(46),function(){return Object(t.jsx)("div",{className:"infos",id:"info-section",children:Object(t.jsxs)("div",{className:"card contact",children:[Object(t.jsxs)("div",{className:"intro",children:[Object(t.jsx)("img",{src:"./image/colored_bg2.png",alt:"profile",className:"profile-image"}),Object(t.jsxs)("div",{className:"profile-text",children:[Object(t.jsx)("h1",{children:"P\xe9ter T\xf3th"}),Object(t.jsx)("h3",{children:"Web Developer"})]})]}),Object(t.jsx)("div",{className:"infoside",children:Object(t.jsx)("table",{children:Object(t.jsxs)("tbody",{children:[Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"E-mail:"}),Object(t.jsx)("td",{children:"tothpeter1216@gmail.com"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Country:"}),Object(t.jsx)("td",{children:"Hungary"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Address:"}),Object(t.jsx)("td",{children:"1191 Budapest"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"LinkedIn:"}),Object(t.jsx)("td",{children:Object(t.jsx)("a",{href:"https://www.linkedin.com/in/tothpeter1216/",target:"_blank",rel:"noreferrer",children:"tothpeter1216"})})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"My CV:"}),Object(t.jsx)("td",{children:Object(t.jsx)("a",{href:"./CV/Peter_Toth_2021.pdf",download:!0,children:"Download CV"})})]})]})})})]})})}),N=function(e){var s=e.skillName,c="",n="";switch(e.level){case 1:c="/image/meter_red_s.png",n="level_1";break;case 2:c="/image/meter_yellow_s.png",n="level_2";break;case 3:c="/image/meter_green_s.png",n="level_3";break;default:c="/image/meter_yellow_s.png",n="level_2"}return Object(t.jsxs)("div",{className:"small-card",children:[Object(t.jsx)("img",{src:c,alt:n,className:"skill-img"}),Object(t.jsx)("p",{children:s})]})},v=function(e){var s=e.skillGroup,c=e.skills;return Object(t.jsxs)("div",{className:"card skill-card",children:[Object(t.jsx)("h4",{children:s}),c.map((function(e){return Object(t.jsx)(N,{skillName:e.skillName,level:e.level},e._id)}))]})},k=(c(47),function(e){var s=e.skillFields;return Object(t.jsxs)("div",{id:"skill-section",className:"section",children:[Object(t.jsx)("h1",{className:"title",children:"Skills"}),Object(t.jsx)("div",{className:"skill-fields card",children:s.map((function(e){return Object(t.jsx)(v,{skillGroup:e.skillField,skills:e.skill},e.id)}))})]})}),_=function(e){var s=e.code,c=s.name,n=s.description,i=s.technologies,l=s.gitHub,r=s.gitHub2,a=s.website,j=s.websiteLinkText;return Object(t.jsxs)("div",{className:"code-content",children:[Object(t.jsx)("h2",{className:"code-name",children:c}),Object(t.jsx)("p",{className:"code-description",children:n}),Object(t.jsx)("p",{className:"technologies",children:i.map((function(e){return" * "+e+" * "}))}),Object(t.jsx)("p",{children:a&&Object(t.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",children:[j||"link"," "]})}),Object(t.jsx)("p",{children:l&&Object(t.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"Codes on gitHub"})}),Object(t.jsx)("p",{children:r&&Object(t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:"Codes on gitHub 2"})})]})},w=(c(48),function(e){var s;return s=e.codes.map((function(e,s){return Object(t.jsx)(_,{code:e},e.id)})),Object(t.jsxs)("div",{id:"code-section",className:"section",children:[Object(t.jsx)("h1",{className:"title",children:"My Codes"}),Object(t.jsx)(b,{pagesArray:s,sliderClassName:"code-slider"})]})}),C=(c(49),function(e){var s=e.hobbies;return Object(t.jsxs)("div",{id:"hobby-section",className:"section",children:[Object(t.jsx)("h1",{className:"title",children:"Hobbies"}),Object(t.jsx)("div",{className:"card hobby-card",children:s.map((function(e){return Object(t.jsx)("p",{className:"small-card",children:e.name},e.id)}))})]})}),y=(c(50),function(){return Object(t.jsxs)("div",{id:"footer",children:[Object(t.jsx)("p",{children:"T\xf3th P\xe9ter 2021"}),Object(t.jsx)("p",{children:"tothpeter1216@gmail.com"})]})}),S=(c(51),function(){return Object(t.jsxs)("div",{className:"navbar",children:[Object(t.jsx)("button",{className:"nav-btn",children:Object(t.jsx)("a",{href:"#info-section",children:"Contacts"})}),Object(t.jsx)("button",{className:"nav-btn",children:Object(t.jsx)("a",{href:"#skill-section",children:"Skills"})}),Object(t.jsx)("button",{className:"nav-btn",children:Object(t.jsx)("a",{href:"#education-section",children:"Schools"})}),Object(t.jsx)("button",{className:"nav-btn",children:Object(t.jsx)("a",{href:"#code-section",children:"Codes"})}),Object(t.jsx)("button",{className:"nav-btn",children:Object(t.jsx)("a",{href:"#hobby-section",children:"Hobbies"})})]})});var F=function(){var e=Object(n.useState)([]),s=Object(o.a)(e,2),c=s[0],i=s[1],l=Object(n.useState)([]),r=Object(o.a)(l,2),a=r[0],b=r[1],h=Object(n.useState)([]),m=Object(o.a)(h,2),x=m[0],N=m[1],v=Object(n.useState)([]),_=Object(o.a)(v,2),F=_[0],H=_[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:s=e.sent,N(s.data.code),b(s.data.schools),i(s.data.skillField),H(s.data.hobbie);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(g,{}),Object(t.jsx)(f,{}),Object(t.jsx)(p,{}),Object(t.jsx)(S,{}),Object(t.jsx)(k,{skillFields:c}),Object(t.jsx)(O,{schools:a}),Object(t.jsx)(w,{codes:x}),Object(t.jsx)(C,{hobbies:F}),Object(t.jsx)(y,{})]})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(s){var c=s.getCLS,t=s.getFID,n=s.getFCP,i=s.getLCP,l=s.getTTFB;c(e),t(e),n(e),i(e),l(e)}))};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(F,{})}),document.getElementById("root")),H()}},[[52,1,2]]]);
//# sourceMappingURL=main.d48d7bde.chunk.js.map