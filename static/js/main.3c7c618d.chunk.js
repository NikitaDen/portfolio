(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/language.8270211e.svg"},,function(e,a,t){e.exports=t.p+"static/media/moon.d87296db.svg"},function(e,a,t){e.exports=t.p+"static/media/sun.7eae5395.svg"},function(e,a,t){e.exports=t.p+"static/media/js.1c147ada.svg"},function(e,a,t){e.exports=t.p+"static/media/ts.1d486c0b.svg"},function(e,a,t){e.exports=t.p+"static/media/react.b8fcf3ad.svg"},function(e,a,t){e.exports=t.p+"static/media/redux.e70bb687.svg"},function(e,a,t){e.exports=t.p+"static/media/html.768c4807.svg"},function(e,a,t){e.exports=t.p+"static/media/css.529c2c1a.svg"},function(e,a,t){e.exports=t.p+"static/media/sass.c7b7f8fa.svg"},function(e,a,t){e.exports=t.p+"static/media/facebook.9303f375.svg"},function(e,a,t){e.exports=t.p+"static/media/gmail.2184017f.svg"},function(e,a,t){e.exports=t.p+"static/media/telegram.82de5d78.svg"},function(e,a,t){e.exports=t.p+"static/media/github.d9a7bb81.svg"},function(e,a,t){e.exports=t.p+"static/media/linkedin.182da5fd.svg"},function(e,a,t){e.exports=t.p+"static/media/avatar.e5befdaf.JPG"},function(e,a,t){e.exports=t.p+"static/media/tasker.d48104a7.svg"},function(e,a,t){e.exports=t.p+"static/media/chart.424c0526.svg"},function(e,a,t){e.exports=t.p+"static/media/bermudy.468ae6d1.png"},function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(3),i=t.n(r),l=(t(34),t(35),t(9)),c=t.n(l),s=t(1),m=t(7),d={darkMode:!0,langRU:!1},u=function(e){return{type:"TOGGLE_DARK_MODE",darkMode:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_MODE":return Object(m.a)({},e,{darkMode:!a.darkMode});case"SET_LANGUAGE":return Object(m.a)({},e,{langRU:!a.lang});default:return e}},p=t(11),f=t.n(p),h=t(12),k=t.n(h),E=Object(s.b)((function(e){return{darkMode:e.config.darkMode,langRU:e.config.langRU,phone:e.mainInfo.phone,social:e.mainInfo.social,ru:e.mainInfo.ru,portfolio:e.mainInfo.portfolio}}),{toggleDarkMode:u,setLanguage:function(e){return{type:"SET_LANGUAGE",lang:e}}})((function(e){var a=function(a,t){return e.langRU?a:t};return o.a.createElement("div",{className:e.darkMode?"portfolio portfolio--dark":"portfolio"},o.a.createElement("div",{className:e.darkMode?"contacts contacts--dark":"contacts"},o.a.createElement("div",{className:"contacts__social"},a(o.a.createElement("h3",null,"\u0421\u043e\u0446\u0441\u0435\u0442\u0438"),o.a.createElement("h3",null,"Social")),e.social.map((function(a){return o.a.createElement("a",{key:a.id,href:a.url},o.a.createElement("img",{src:a.photo,alt:a.alt,className:e.darkMode?"contacts__social__item contacts__social__item--dark":"contacts__social__item"}))}))),o.a.createElement("div",{className:"contacts__phone"},a(o.a.createElement("h3",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),o.a.createElement("h3",null,"Phone")),o.a.createElement("p",null,e.phone)),o.a.createElement("div",{className:"settings"},o.a.createElement("img",{onClick:function(){return a=e.langRU,void e.setLanguage(a);var a},className:e.darkMode?"lang lang--dark":"lang",src:c.a,alt:"Language"}),o.a.createElement("input",{onChange:function(){return a=e.darkMode,void e.toggleDarkMode(a);var a},id:"dark-check",type:"checkbox"}),o.a.createElement("label",{className:"dark-mode",htmlFor:"dark-check"},o.a.createElement("div",{className:"toggle",style:e.darkMode?{backgroundImage:"url(".concat(k.a,")")}:{backgroundImage:"url(".concat(f.a,")")}})))),a(o.a.createElement("h3",{style:{marginBottom:"1rem"}},"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"),o.a.createElement("h3",{style:{marginBottom:"1rem"}},"Projects")),o.a.createElement("div",{className:"portfolio__projects"},e.portfolio.map((function(e){return o.a.createElement(o.a.Fragment,{key:e.id},o.a.createElement("a",{target:"_blank",href:e.href,style:e.img?{backgroundImage:"url('".concat(e.img,"')"),backgroundSize:"cover"}:{},className:e.className},o.a.createElement("div",null,e.title)),o.a.createElement("div",{className:"description"},o.a.createElement("p",null,e.description),o.a.createElement("p",{className:"description__stack"},"Stack: ",e.stack),e.github?o.a.createElement("p",null,"GitHub: ",o.a.createElement("a",{href:e.github},e.github)):null))}))))})),v=Object(s.b)((function(e){return{darkMode:e.config.darkMode,ru:e.mainInfo.ru,fullName:e.mainInfo.fullName,city:e.mainInfo.city,age:e.mainInfo.age,langRU:e.config.langRU,avatar:e.mainInfo.avatar}}),null)((function(e){var a=function(a,t){return e.langRU?a:t};return o.a.createElement("div",{className:"intro"},o.a.createElement("div",{className:"intro__name"},a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,o.a.createElement("span",{className:e.darkMode?"let let--dark":"let"},"let ")," ",e.ru.fullName+" = {")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,o.a.createElement("span",{className:e.darkMode?"let let--dark":"let"},"let "),e.en.fullName+" = {")))),o.a.createElement("div",{className:"intro__info"},o.a.createElement("div",null,a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"'\u0413\u043e\u0440\u043e\u0434': "),o.a.createElement("p",null,e.ru.city,",")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"City: "),o.a.createElement("p",null,e.en.city,",")))),o.a.createElement("div",null,a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"'\u0412\u043e\u0437\u0440\u0430\u0441\u0442': ")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Age: "))),o.a.createElement("p",null,e.age,","))),o.a.createElement("div",{className:e.darkMode?"avatar avatar--dark":"avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}))})),b=function(e){var a,t,n,r;return o.a.createElement("div",{className:"main-info"},o.a.createElement("div",{className:"main-info__item"},(n=o.a.createElement("h3",null,"'\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438': "),r=o.a.createElement("h3",null,"Technologies: "),e.langRU?n:r),o.a.createElement("div",{className:"technologies"},o.a.createElement("span",{className:e.darkMode?"bracket bracket--dark":"bracket"},"["),e.technologies.map((function(a){return o.a.createElement(o.a.Fragment,{key:a.id},o.a.createElement("span",{className:"technology-text"},a.alt),o.a.createElement("img",{src:a.photo,alt:a.alt,className:e.darkMode?"technology technology--dark":"technology"}))})),o.a.createElement("span",{className:e.darkMode?"bracket bracket--dark":"bracket"},"]"),",")),(a=e.ru.info,t=e.en.info,e.langRU?a.map((function(e){return o.a.createElement("div",{key:e.id,className:"main-info__item"},o.a.createElement("h3",null,e.head),o.a.createElement("p",null,e.text))})):t.map((function(e){return o.a.createElement("div",{key:e.id,className:"main-info__item"},o.a.createElement("h3",null,e.head),o.a.createElement("p",null,e.text))}))),o.a.createElement("span",null,"};"),o.a.createElement("span",{className:"cursor"},"|"))},y=Object(s.b)((function(e){return{age:e.mainInfo.age,phone:e.mainInfo.phone,technologies:e.mainInfo.technologies,languages:e.mainInfo.languages,experience:e.mainInfo.experience,ru:e.mainInfo.ru,en:e.mainInfo.en,langRU:e.config.langRU,darkMode:e.config.darkMode}}),null)((function(e){return o.a.createElement("div",{className:"summary"},o.a.createElement(v,{ru:e.ru,en:e.en}),o.a.createElement(b,{darkMode:e.darkMode,langRU:e.langRU,ru:e.ru,en:e.en,technologies:e.technologies,languages:e.languages,experience:e.experience}))})),_=Object(s.b)((function(e){return{darkMode:e.config.darkMode}}),{toggleDarkMode:u})((function(e){return o.a.createElement("div",{className:e.darkMode?"resume resume--dark":"resume"},o.a.createElement(y,null),o.a.createElement(E,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(2),x=t(13),M=t.n(x),S=t(14),R=t.n(S),I=t(15),j=t.n(I),w=t(16),U=t.n(w),J=t(17),B=t.n(J),D=t(18),T=t.n(D),O=t(19),G=t.n(O),F=t(20),L=t.n(F),C=t(21),A=t.n(C),P=t(22),z=t.n(P),H=t(23),W=t.n(H),X=t(24),K=t.n(X),q=t(25),$=t.n(q),Q=t(26),V=t.n(Q),Y=t(27),Z=t.n(Y),ee=t(28),ae=t.n(ee),te={age:"24",phone:"+375 (29) 317-05-55",avatar:$.a,technologies:[{photo:M.a,alt:"JavaScript",id:1},{photo:R.a,alt:"TypeScript",id:2},{photo:j.a,alt:"React",id:3},{photo:U.a,alt:"Redux",id:4},{photo:B.a,alt:"HTML",id:5},{photo:T.a,alt:"CSS",id:6},{photo:G.a,alt:"Sass",id:7}],portfolio:[{href:"https://nikitaden.github.io/analyzer/",title:"Analyzer.",className:"portfolio__projects__item analyzer",img:Z.a,description:"This is a complex app that helps you identify weaknesses in your budget by providing an analytics for expenses.",stack:"JavaScript, React, Redux, NodeJS, Express, MongoDB, JWT, JSX, SCSS",github:"https://github.com/NikitaDen/analyzer",id:3},{href:"https://nikitaden.github.io/palettor/",title:"Pickolor.",className:"portfolio__projects__item palettor",img:"",stack:"JavaScript, React, Redux, JSX, SCSS",description:"This is a simple app that helps you to find colors for the design.",github:"https://github.com/NikitaDen/palettor",id:1},{href:"https://nikitaden.github.io/tasker/",title:"Tasker.",className:"portfolio__projects__item tasker",img:V.a,stack:"JavaScript, React (React Hooks for state management), JSX, SCSS",description:"This app helps you manage your everyday tasks more efficiently.",github:"https://github.com/NikitaDen/tasker",id:2},{href:"http://bermudy.by/",title:"Bermudy.",className:"portfolio__projects__item bermudy",img:ae.a,description:"Bermudy - commercial project for fish farm, that provides fishing services",stack:"JavaScript, Jquery, PHP, HTML, SCSS, Gulp",github:"",id:4}],social:[{url:"mailto:nickdnsv@gmail.com",photo:A.a,alt:"gmail",id:1},{url:"https://t.me/NktDenisov",photo:z.a,alt:"telegram",id:2},{url:"https://www.linkedin.com/in/nktdenisov/",photo:K.a,alt:"linkedIn",id:3},{url:"https://github.com/NikitaDen",photo:W.a,alt:"github",id:4},{url:"https://www.facebook.com/profile.php?id=100004291969423",photo:L.a,alt:"facebook",id:5}],ru:{fullName:"\u041d\u0438\u043a\u0438\u0442\u0430 \u0414\u0435\u043d\u0438\u0441\u043e\u0432",city:"'\u041c\u0438\u043d\u0441\u043a'",info:[{head:"'\u041e \u0441\u0435\u0431\u0435':",text:"'\u0426\u0435\u043b\u0435\u0443\u0441\u0442\u0440\u0435\u043c\u043b\u0435\u043d\u043d\u044b\u0439 \u0438 \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439. \u041c\u043e\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043a\u0430\u0440\u044c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u043e\u0441\u0442\u0430 \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u0435\u0442 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0443\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u0436\u0438\u0437\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0439 \u0438 \u043e\u0446\u0435\u043d\u0435\u043d\u043d\u043e\u0439 \u043f\u043e \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443 \u043c\u0435\u043d\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0430\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c.' ,",id:1},{head:"'\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435':",text:"'\u041c\u0430\u0433\u0438\u0441\u0442\u0440 (\u0411\u041d\u0422\u0423, \u043a\u0430\u0444\u0435\u0434\u0440\u0430 \"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u043c\u0435\u0442\u0440\u043e\u043b\u043e\u0433\u0438\u044f \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b\")' ,",id:2},{head:"'\u042f\u0437\u044b\u043a\u0438':",text:"'\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439, B1-B2' ,",id:3},{head:"'\u041e\u043f\u044b\u0442':",text:"'\u0424\u0440\u0438\u043b\u0430\u043d\u0441, \u044f\u043d\u0432\u0430\u0440\u044c 2020'",id:4},{head:"'\u041a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b':",text:"'\u0412\u0435\u0431-\u0441\u0430\u0439\u0442 Bermudy'",id:5}]},en:{fullName:"Nikita Denisov",city:"'Minsk'",info:[{head:"Objective:",text:"'Purposeful and disciplined. Motivated for career growth and improving programming skills. Programming gives a great opportunity to make work-life interesting and valued, so I have enough motivation to become a good programmer.'",id:1},{head:"Education:",text:"'Master (BNTU, \"Standartization, metrology and information systems\")' ,",id:2},{head:"Languages:",text:"'English, B1-B2' ,",id:3},{head:"Experience:",text:"'Freelance, January 2020'",id:4},{head:"Commercial projects:",text:"'Website Bermudy'",id:5}]}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;arguments.length>1&&arguments[1];return e},oe=Object(N.b)({mainInfo:ne,config:g}),re=Object(N.c)(oe);i.a.render(o.a.createElement(s.a,{store:re},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.3c7c618d.chunk.js.map