(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/header_bg.b57234b7.jpg"},27:function(e,a,t){e.exports=t(52)},48:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(6),i=t(10),s=t(1),m=function(){var e,a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).fade,t=void 0!==a&&a?"nav nav--fade":"nav",c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(!0),p=Object(s.a)(u,2),v=p[0],d=p[1],b=Object(n.useState)(!1),E=Object(s.a)(b,2),f=E[0],_=E[1],h=function(){m(!i),d(!v),_(!f)};return e=i?"":"nav__link--collapse",r.a.createElement("nav",{className:t},r.a.createElement(o.c,{to:"/",exact:!0,activeClassName:"nav__link--active",className:"nav__link"},"Friend A Pet"),v&&r.a.createElement("span",{className:"nav__link nav__icon--hide",onClick:h},"\u25bc"),f&&r.a.createElement("span",{className:"nav__link nav__icon--hide",onClick:h},"\u25b2"),r.a.createElement("div",{className:"nav__link--slide ".concat(e)},r.a.createElement(o.c,{to:"/browse",activeClassName:"nav__link--active",className:"nav__link "},"Browse"),r.a.createElement(o.c,{to:"/search",activeClassName:"nav__link--active",className:"nav__link "},"Search"),r.a.createElement("div",{className:"nav__link--inline"},r.a.createElement(o.c,{to:"/login",activeClassName:"nav__link--active",className:"nav__link "},"Login"),r.a.createElement("span",{className:"nav__link--white nav__link "},"/"),r.a.createElement(o.c,{to:"/signup",activeClassName:"nav__link--active",className:"nav__link "},"Join"))))},u=t(26),p=t.n(u),v=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(m,{fade:!0}),r.a.createElement("img",{src:p.a,alt:"animal",className:"header__img"}),r.a.createElement("div",{className:"header__box--center"},r.a.createElement("div",{className:"header__text"},r.a.createElement("h1",{className:"header__title"},"Discover Your Next Friend"),r.a.createElement("p",null,"Have a look and consider adopting")),r.a.createElement("div",{className:"header__btn-box"},r.a.createElement(o.b,{to:"/browse"},r.a.createElement("button",{className:"header__btn"},"Browse Pets")),r.a.createElement(o.b,{to:"/search"},r.a.createElement("button",{className:"header__btn"},"Search for Next Pal")))))},d=t(3),b=t.n(d),E=t(9),f=t(12),_=t.n(f),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.name,t=e.photos,c=void 0===t?"":t,l=e.description,o=void 0===l?"":l,i=e.url,m=Object(n.useState)(!1),u=Object(s.a)(m,2),p=u[0],v=u[1],d=Object(n.useState)(!0),b=Object(s.a)(d,2),E=b[0],f=b[1],h=function(e){switch(e.target.name){case"front":v(!0),f(!1);break;case"back":v(!1),f(!0)}};return r.a.createElement(_.a,{transitionName:"card",transitionEnterTimeout:500,transitionLeaveTimeout:300,className:"card"},E&&r.a.createElement("div",{className:"card__front card--overflow"},r.a.createElement("h2",{className:"card__title"},a),!a&&!c[0]&&r.a.createElement("p",null,"Give me a sec, I'm coming"),c[0]&&r.a.createElement("img",{src:c[0].medium,className:"card__img",alt:"animal"}),a&&!c[0]&&r.a.createElement("p",null,"No Photo Available"),r.a.createElement("button",{onClick:h,name:"front",className:"card__front-btn"},"Get to know ",a)),p&&r.a.createElement("div",{className:"card__back card--overflow"},r.a.createElement("h2",{className:"card__title card__title--back"},"Get to know ",a),o&&r.a.createElement("p",{className:"card__text"},o),a&&!o&&r.a.createElement("p",null,"No Description Available"),r.a.createElement("div",{className:"card__back-btns"},r.a.createElement("button",{onClick:h,name:"back",className:"card__back-btn"},"See ",a),r.a.createElement("a",{href:i},r.a.createElement("button",{className:"card__back-btn"},"Learn More")))))},g=function(){var e=Object(E.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials&client_id=".concat("55jMiBZUb5l9wSQxBtjsE65ekAjQXw9dYxut2AvjJHgkvdvQt7","&client_secret=").concat("rO7sPnQqVbkeTY4rlYhuEuUlnlrodWedDBJoaL60")});case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,n=t.access_token,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error retrieving token");case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){!function(){var e=Object(E.a)(b.a.mark(function e(){var a,t,n,r,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,t=Math.floor(1e3*Math.random())+1,n=Math.floor(8*Math.random())+1,e.prev=7,e.next=10,fetch("https://api.petfinder.com/v2/animals?type=dog&limit=".concat(n,"&page=").concat(t),{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(a)}});case 10:return r=e.sent,e.next=13,r.json();case 13:l=e.sent,c(l.animals),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(7);case 19:case"end":return e.stop()}},e,null,[[7,17]])}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"cards"},t.length>0?t.map(function(e,a){return r.a.createElement(h,Object.assign({},e,{key:a}))}):r.a.createElement("p",null,"Give us a sec, we're coming"))},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(N,null))},k=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),i=o[0],m=o[1],u=Object(n.useState)("dog"),p=Object(s.a)(u,2),v=p[0],d=p[1],f=Object(n.useState)(""),N=Object(s.a)(f,2),j=N[0],k=N[1],O=Object(n.useState)(""),w=Object(s.a)(O,2),x=w[0],S=w[1],y=Object(n.useState)(""),C=Object(s.a)(y,2),F=C[0],A=C[1],B=Object(n.useState)(""),z=Object(s.a)(B,2),L=z[0],P=z[1],T=Object(n.useState)({}),M=Object(s.a)(T,2),G=M[0],D=M[1],U=Object(n.useState)(""),J=Object(s.a)(U,2),Y=J[0],I=J[1],Q=function(e){switch(e){case"form":c(!0),m(!1);break;case"card":c(!1),m(!0),Z()}},Z=function(){d("dog"),k(""),S(""),A(""),P(""),D({}),I("")},H=function(){var e=Object(E.a)(b.a.mark(function e(){var a,t,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return a=e.sent,t="type=".concat(v),j&&(t+="&location=".concat(j)),x&&(t+="&size=".concat(x)),F&&(t+="&gender=".concat(F)),L&&(t+="&age=".concat(L)),e.prev=8,e.next=11,fetch("https://api.petfinder.com/v2/animals?".concat(t,"&limit=1"),{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(a)}});case 11:return n=e.sent,e.next=14,n.json();case 14:return r=e.sent,D(r.animals[0]),e.abrupt("return",!0);case 19:return e.prev=19,e.t0=e.catch(8),I("Unable to retrieve animal"),e.abrupt("return",!1);case 23:case"end":return e.stop()}},e,null,[[8,19]])}));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(E.a)(b.a.mark(function e(a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(j<0)||(I("Please enter a valid zipcode"),0)){e.next=3;break}return e.abrupt("return");case 3:if(H()){e.next=5;break}return e.abrupt("return");case 5:Z(),Q(a.target.lastElementChild.name);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(_.a,{transitionName:"animal-form",transitionEnterTimeout:300,transitionLeaveTimeout:500,className:"animal-card-form"},Y&&r.a.createElement("p",null,Y),i&&r.a.createElement("form",{onSubmit:function(e){return W(e)},className:"animal-form"},r.a.createElement("label",{htmlFor:"animal"},"Animal:"),r.a.createElement("select",{name:"animal",onChange:function(e){return d(e.target.value)},className:"animal-form__input"},r.a.createElement("option",{value:"dog"},"Dog"),r.a.createElement("option",{value:"cat"},"Cat"),r.a.createElement("option",{value:"small-furry"},"Small & Furry"),r.a.createElement("option",{value:"scales-fins-other"},"Scales, Fins & Other"),r.a.createElement("option",{value:"bird"},"Bird"),r.a.createElement("option",{value:"rabbit"},"Rabbit"),r.a.createElement("option",{value:"horse"},"Horse"),r.a.createElement("option",{value:"barnyard"},"Barnyard")),r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{type:"number",placeholder:"postal code",value:j,onChange:function(e){return k(e.target.value)},className:"animal-form__input"}),r.a.createElement("label",{htmlFor:"size"},"Size:"),r.a.createElement("select",{name:"size",onChange:function(e){return S(e.target.value)},className:"animal-form__input"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"small"},"Small"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"large"},"Large"),r.a.createElement("option",{value:"xlarge"},"X-Large")),r.a.createElement("label",{htmlFor:"gender"},"Gender"),r.a.createElement("select",{name:"gender",onChange:function(e){return A(e.target.value)},className:"animal-form__input"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female")),r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("select",{name:"age",onChange:function(e){return P(e.target.value)},className:"animal-form__input"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"baby"},"Baby"),r.a.createElement("option",{value:"young"},"Young"),r.a.createElement("option",{value:"adult"},"Adult"),r.a.createElement("option",{value:"senior"},"Senior")),r.a.createElement("button",{name:"form"},"Find my pet")),t&&r.a.createElement("div",{className:"animal-form-card"},r.a.createElement("button",{name:"card",className:"animal-form-card__btn",onClick:function(e){return Q(e.target.name)}},"Find another pet"),r.a.createElement(h,G)))},O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(k,null))},w=function(e){var a=e.signUp,t=void 0===a||a,c=e.btn,l=void 0===c?"Sign Up":c,o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(""),v=Object(s.a)(p,2),d=v[0],f=v[1],_=Object(n.useState)(""),h=Object(s.a)(_,2),g=h[0],N=h[1],j=Object(n.useState)(""),k=Object(s.a)(j,2),O=k[0],w=k[1],x=Object(n.useState)("This component currently serves no purpose."),S=Object(s.a)(x,2),y=S[0],C=S[1],F=function(){var e=Object(E.a)(b.a.mark(function e(){var a,t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user/register");case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,console.log(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"sign-up-form",onSubmit:function(e){e.preventDefault(),(g.match(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||(C("Invalid Email"),0))&&(O||(C("Invalid Password"),0))&&(u(""),f(""),N(""),w(""),C(""),F())}},y&&r.a.createElement("p",{className:"sign-up-form--red-bold"},y),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",name:"fname",placeholder:"First Name",className:"sign-up-form__input",value:m,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{type:"text",name:"lname",placeholder:"Last Name",className:"sign-up-form__input",value:d,onChange:function(e){f(e.target.value)}})),r.a.createElement("input",{type:"text",name:"email",placeholder:"* Email",className:"sign-up-form__input",value:g,onChange:function(e){N(e.target.value)}}),r.a.createElement("input",{type:"password",name:"password",placeholder:"* Password",className:"sign-up-form__input",value:O,onChange:function(e){w(e.target.value)}}),r.a.createElement("button",{className:"sign-up-form__btn"},l))},x=function(){return r.a.createElement(w,{signUp:!1,btn:"Login"})},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(x,null))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(w,null))},C=function(){return r.a.createElement(o.a,{basename:"/Pet-App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:v,exact:!0}),r.a.createElement(i.a,{path:"/browse",component:j}),r.a.createElement(i.a,{path:"/search",component:O}),r.a.createElement(i.a,{path:"/login",component:S}),r.a.createElement(i.a,{path:"/signup",component:y})))};t(48);t(49).config(),l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.ee98a2b7.chunk.js.map