(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{20:function(t,e,a){t.exports={Dashboard:"Dashboard_Dashboard__1BQq9",buttonSt:"Dashboard_buttonSt__5RmPf"}},23:function(t,e,a){t.exports={header:"Header_header__2XBn4"}},25:function(t,e,a){t.exports={familyDetails:"FamilyDetails_familyDetails__VnCY2"}},26:function(t,e,a){},43:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(7),s=a.n(c),r=a(8),i=(a(43),a(23)),l=a.n(i),o=a(1),d=function(){var t=Object(r.b)();return Object(o.jsxs)("header",{className:l.a.header,children:[Object(o.jsx)("h1",{children:"Interview Project"}),Object(o.jsxs)("select",{onChange:function(e){console.log("EVENT:"+e.target.value),"Admin"===e.target.value?t({type:"Admin"}):t({type:"Registrars"})},"aria-label":"Default select example",name:"AuthType",id:"selectAuthType",children:[Object(o.jsx)("option",{value:"Admin",children:"Admin"}),Object(o.jsx)("option",{value:"Registrars",children:"Registrars"})]})]})},j=a(3),b=a(50),u=a(49),h=a(20),O=a.n(h),m=a(21),f=a.n(m),x=a(2),p=a(17),y=a(24),v=a(14),N=a(25),D=a.n(N);var g=function(t){var e=Object(r.c)((function(t){return t.enabled})),a={firstName:"",lastName:"",dateOfBirth:new Date,id:Math.random().toString()},c=Object(n.useState)([]),s=Object(j.a)(c,2),i=(s[0],s[1],Object(n.useState)([a])),l=Object(j.a)(i,2),d=(l[0],l[1],Object(n.useState)(t.familyInfo.firstName)),b=Object(j.a)(d,2),u=b[0],h=b[1],O=Object(n.useState)(t.familyInfo.lastName),m=Object(j.a)(O,2),f=m[0],x=m[1],p=Object(n.useState)(""),y=Object(j.a)(p,2),v=(y[0],y[1],Object(n.useState)("")),N=Object(j.a)(v,2);return N[0],N[1],Object(o.jsxs)(o.Fragment,{children:["          ",Object(o.jsx)("div",{className:D.a.familyDetails,children:Object(o.jsx)("div",{children:Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",id:"familyFName",className:"form-control",placeholder:"First Name",value:u,onChange:function(t){h(t.target.value)},disabled:0!==t.ID&&!e})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",id:"familyLName",className:"form-control",placeholder:"Last Name",value:f,onChange:function(t){x(t.target.value)},disabled:0!==t.ID&&!e})}),Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:Object(o.jsx)("select",{id:"nationality",className:"form-control",disabled:0!==t.ID&&!e,children:t.nationalityData.map((function(t){return Object(o.jsx)("option",{value:t.Title,children:t.Title},Math.random())}))})}),Object(o.jsx)("td",{children:0===t.ID||e?Object(o.jsx)("button",{type:"button",className:"btn btn-primary",children:"save"}):""}),Object(o.jsx)("td",{children:0===t.ID||e?Object(o.jsx)("button",{type:"button",className:"btn btn-primary",children:"Edit"}):""}),Object(o.jsx)("td",{children:0===t.ID||e?Object(o.jsx)("button",{type:"button",className:"btn btn-danger",children:"Delete"}):""})]})})})})})]})},S=a(26),I=a.n(S);var w=function(t){var e=Object(r.c)((function(t){return t.enabled})),a={firstName:"",lastName:"",dateOfBirth:new Date},c="";t.rowdata.dateOfBirth&&(c=t.rowdata.dateOfBirth.toLocaleString().split("T")[0]);var s=Object(n.useState)(t.rowdata.firstName),i=Object(j.a)(s,2),l=i[0],d=i[1],b=Object(n.useState)(t.rowdata.lastName),u=Object(j.a)(b,2),h=u[0],O=u[1],m=Object(n.useState)(c),N=Object(j.a)(m,2),D=N[0],S=N[1],w=Object(n.useState)([]),T=Object(j.a)(w,2),C=T[0],A=T[1],B=Object(n.useState)({ID:1,Title:"India"}),_=Object(j.a)(B,2),F=_[0],k=_[1],H=Object(n.useState)([a]),M=Object(j.a)(H,2),E=M[0],L=M[1];function R(){return(R=Object(y.a)(f.a.mark((function e(a){var n,c,s,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",c="",0===t.rowdata.ID?(n="http://localhost:8088/api/Students",c="POST"):(n="http://localhost:8088/api/Students/"+t.rowdata.ID,c="PUT"),e.prev=2,e.next=5,fetch(n,{method:c,body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 5:return s=e.sent,e.next=8,s.json();case 8:if(r=e.sent,console.log(r),n="http://localhost:8088/api/Students/"+r.ID+"/Nationality/"+F.ID,!s.ok){e.next=18;break}return e.next=14,fetch(n,{method:"PUT",body:"",headers:{"Content-Type":"application/json"}});case 14:return i=e.sent,e.next=17,i.json();case 17:e.sent;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),alert("An error has occured :"+e.t0);case 23:alert("saved sucessfully"),t.onHide(),t.onSave();case 26:case"end":return e.stop()}}),e,null,[[2,20]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){try{fetch("http://localhost:8088/api/Nationalities").then((function(t){return t.json()})).then((function(t){A(t)})),fetch("http://localhost:8088/api/Students/"+t.rowdata.ID+"/Nationality").then((function(t){return t.json()})).then((function(t){k(t.nationality),console.log("StudentNationality"+t.nationality+F.nationality)})),fetch("http://localhost:8088/api/Students/"+t.rowdata.ID+"/FamilyMembers").then((function(t){return t.json()})).then((function(t){L(t),console.log("FamilyDetails"+t)}))}catch(e){alert("An erorr has occured: "+e)}}()}),[]),Object(o.jsx)(v.a,Object(x.a)(Object(x.a)({},t),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(o.jsxs)("form",{onSubmit:function(t){console.log("SubmitHandler"),t.preventDefault();var e={firstName:l,lastName:h,dateOfBirth:new Date(D)};console.log("SubmitHandler"+e),function(t){R.apply(this,arguments)}(e)},children:[Object(o.jsx)(v.a.Header,{closeButton:!0,children:Object(o.jsx)(v.a.Title,{id:"contained-modal-title-vcenter",children:"Student Details"})}),Object(o.jsxs)(v.a.Body,{children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"First Name"}),Object(o.jsx)("input",{type:"text",disabled:0!==t.rowdata.ID&&!e,required:!0,className:"form-control",value:l,onChange:function(t){d(t.target.value)}})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"Last Name"}),Object(o.jsx)("input",{type:"text",disabled:0!==t.rowdata.ID&&!e,required:!0,className:"form-control",value:h,onChange:function(t){O(t.target.value)}})]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",className:"form-control",value:D,onChange:function(t){S(t.target.value)},required:!0,disabled:0!==t.rowdata.ID&&!e})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"Nationality"}),Object(o.jsx)("select",{id:"nationality",onChange:function(t){console.log(t),k({ID:t.target.value,Title:t.target.value})},value:F.ID,className:"form-control",disabled:0!==t.rowdata.ID&&!e,children:C.map((function(t){return Object(o.jsx)("option",{value:t.ID,children:t.Title},t.ID)}))})]})]}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:I.a.AddStudentdiv,children:[0===t.rowdata.ID||e?Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){L([].concat(Object(p.a)(E),[E])),console.log(E)},children:"Add Family Member"}):"",E.length>0&&E.map((function(e){return Object(o.jsx)(g,{familyInfo:e,ID:t.rowdata.ID,nationalityData:C},Math.random())}))]})]}),Object(o.jsxs)(v.a.Footer,{children:[0===t.rowdata.ID||e?Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}):"",Object(o.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:t.onHide,children:"Close"})]})]})}))},T=function(){var t=Object(r.c)((function(t){return t.enabled})),e=Object(n.useState)(1),a=Object(j.a)(e,2),c=(a[0],a[1],Object(n.useState)(!1)),s=Object(j.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)([]),h=Object(j.a)(d,2),m=h[0],f=h[1],x=Object(n.useState)(""),p=Object(j.a)(x,2),y=p[0],v=p[1],N=0;function D(){try{fetch("http://localhost:8088/api/Students").then((function(t){return t.json()})).then((function(t){f(t)}))}catch(t){alert("An error has occured while getting the data:"+t)}}Object(n.useEffect)((function(){D()}),[]);function g(e){console.log("Redux--"+t),v(e),l(!0)}return Object(o.jsxs)("div",{className:O.a.Dashboard,children:[Object(o.jsx)(w,{rowdata:y,show:i,onHide:function(){return l(!1)},onSave:D},Math.random()),Object(o.jsxs)(b.a,{className:O.a.buttonSt,onClick:function(){return g({ID:0,firstName:"",lastName:"",dateOfBirth:(new Date).toISOString().split("T")[0]})},children:["Add Student"," "]}),Object(o.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"First Name"}),Object(o.jsx)("th",{children:"Last Name"}),Object(o.jsx)("th",{children:"DOB"})]})}),Object(o.jsx)("tbody",{children:m.length>0&&m.map((function(t){return Object(o.jsxs)("tr",{onClick:function(){return g(t)},children:[Object(o.jsx)("td",{children:N+=1}),Object(o.jsx)("td",{children:t.firstName}),Object(o.jsx)("td",{children:t.lastName}),Object(o.jsx)("td",{children:t.dateOfBirth.toLocaleString().split("T")[0]})]},Math.random())}))})]})]})};var C=function(){return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(T,{})]})},A=a(30),B=Object(A.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enabled:!1},e=arguments.length>1?arguments[1]:void 0;return"Admin"===e.type?{enabled:!1}:"Registrars"===e.type?{enabled:!0}:t})),_=B;a(46);s.a.render(Object(o.jsx)(r.a,{store:_,children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.da4e99b8.chunk.js.map