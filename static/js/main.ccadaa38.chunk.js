(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/language.d26f51f3.svg"},,function(e,a,t){e.exports=t.p+"static/media/moon.6a0d2891.svg"},function(e,a,t){e.exports=t.p+"static/media/sun.9d60fb56.svg"},function(e,a,t){e.exports=t.p+"static/media/js.b19352fc.svg"},function(e,a,t){e.exports=t.p+"static/media/react.116d88f4.svg"},function(e,a,t){e.exports=t.p+"static/media/redux.24e1deb3.svg"},function(e,a,t){e.exports=t.p+"static/media/html.0ef12bba.svg"},function(e,a,t){e.exports=t.p+"static/media/css.dcb8ae37.svg"},function(e,a,t){e.exports=t.p+"static/media/sass.d6e1d14d.svg"},function(e,a,t){e.exports=t.p+"static/media/vk.c8663d25.svg"},function(e,a,t){e.exports=t.p+"static/media/facebook.cc2fa09a.svg"},function(e,a,t){e.exports=t.p+"static/media/gmail.901be6c3.svg"},function(e,a,t){e.exports=t.p+"static/media/telegram.646c8626.svg"},function(e,a,t){e.exports=t.p+"static/media/avatar.8e1d8513.JPG"},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(3),r=t.n(l),c=(t(29),t(30),t(9)),i=t.n(c),s=t(1),m=t(7),d={darkMode:!1,langRU:!1},u=function(e){return{type:"TOGGLE_DARK_MODE",darkMode:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_DARK_MODE":return Object(m.a)({},e,{darkMode:!a.darkMode});case"SET_LANGUAGE":return Object(m.a)({},e,{langRU:!a.lang});default:return e}},p=t(11),f=t.n(p),h=t(12),k=t.n(h),E=Object(s.b)((function(e){return{darkMode:e.config.darkMode,langRU:e.config.langRU,phone:e.mainInfo.phone,social:e.mainInfo.social,ru:e.mainInfo.ru}}),{toggleDarkMode:u,setLanguage:function(e){return{type:"SET_LANGUAGE",lang:e}}})((function(e){var a=function(a,t){return e.langRU?a:t};return o.a.createElement("div",{className:e.darkMode?"portfolio portfolio--dark":"portfolio"},o.a.createElement("div",{className:"portfolio__projects"},o.a.createElement("a",{href:"https://nikitaden.github.io/palettor/",className:"portfolio__projects__item palettor"},o.a.createElement("div",null,"Palettor.")),o.a.createElement("a",{href:"http://vk.com",className:"portfolio__projects__item palettor"},o.a.createElement("div",null,"Palettor."))),o.a.createElement("div",{className:e.darkMode?"contacts contacts--dark":"contacts"},o.a.createElement("div",{className:"contacts__social"},a(o.a.createElement("h3",null,"\u0421\u043e\u0446\u0441\u0435\u0442\u0438"),o.a.createElement("h3",null,"Social")),e.social.map((function(a){return o.a.createElement("a",{key:a.id,href:a.url},o.a.createElement("img",{src:a.photo,alt:a.alt,className:e.darkMode?"contacts__social__item contacts__social__item--dark":"contacts__social__item"}))}))),o.a.createElement("div",{className:"settings"},o.a.createElement("img",{onClick:function(){return a=e.langRU,void e.setLanguage(a);var a},className:e.darkMode?"lang lang--dark":"lang",src:i.a,alt:"Language"}),o.a.createElement("input",{onChange:function(){return a=e.darkMode,void e.toggleDarkMode(a);var a},id:"dark-check",type:"checkbox"}),o.a.createElement("label",{className:"dark-mode",htmlFor:"dark-check"},o.a.createElement("div",{className:"toggle",style:e.darkMode?{backgroundImage:"url(".concat(k.a,")")}:{backgroundImage:"url(".concat(f.a,")")}}))),o.a.createElement("div",{className:"contacts__phone"},a(o.a.createElement("h3",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),o.a.createElement("h3",null,"Phone")),o.a.createElement("p",null,e.phone))))})),v=Object(s.b)((function(e){return{darkMode:e.config.darkMode,ru:e.mainInfo.ru,fullName:e.mainInfo.fullName,city:e.mainInfo.city,age:e.mainInfo.age,langRU:e.config.langRU,avatar:e.mainInfo.avatar}}),null)((function(e){var a=function(a,t){return e.langRU?a:t};return o.a.createElement("div",{className:"intro"},o.a.createElement("div",{className:"intro__name"},a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,o.a.createElement("span",{className:e.darkMode?"let let--dark":"let"},"let ")," ",e.ru.fullName+" = {")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,o.a.createElement("span",{className:e.darkMode?"let let--dark":"let"},"let "),e.en.fullName+" = {")))),o.a.createElement("div",{className:"intro__info"},o.a.createElement("div",null,a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"'\u0413\u043e\u0440\u043e\u0434': "),o.a.createElement("p",null,e.ru.city,",")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"City: "),o.a.createElement("p",null,e.en.city,",")))),o.a.createElement("div",null,a(o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"'\u0412\u043e\u0437\u0440\u0430\u0441\u0442': ")),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Age: "))),o.a.createElement("p",null,e.age,","))),o.a.createElement("div",{className:e.darkMode?"avatar avatar--dark":"avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}))})),_=function(e){var a,t,n,l;return o.a.createElement("div",{className:"main-info"},o.a.createElement("div",{className:"main-info__item"},(n=o.a.createElement("h3",null,"'\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438: '"),l=o.a.createElement("h3",null,"Technologies: "),e.langRU?n:l),o.a.createElement("div",{className:"technologies"},o.a.createElement("span",{className:e.darkMode?"bracket bracket--dark":"bracket"},"["),e.technologies.map((function(a){return o.a.createElement("img",{key:a.id,src:a.photo,alt:a.alt,className:e.darkMode?"technology technology--dark":"technology"})})),o.a.createElement("span",{className:e.darkMode?"bracket bracket--dark":"bracket"},"]"),",")),(a=e.ru.info,t=e.en.info,e.langRU?a.map((function(e){return o.a.createElement("div",{key:e.id,className:"main-info__item"},o.a.createElement("h3",null,e.head),o.a.createElement("p",null,e.text))})):t.map((function(e){return o.a.createElement("div",{key:e.id,className:"main-info__item"},o.a.createElement("h3",null,e.head),o.a.createElement("p",null,e.text))}))),o.a.createElement("span",null,"};"),o.a.createElement("span",{className:"cursor"},"|"))},N=Object(s.b)((function(e){return{age:e.mainInfo.age,phone:e.mainInfo.phone,technologies:e.mainInfo.technologies,languages:e.mainInfo.languages,experience:e.mainInfo.experience,ru:e.mainInfo.ru,en:e.mainInfo.en,langRU:e.config.langRU,darkMode:e.config.darkMode}}),null)((function(e){return o.a.createElement("div",{className:"summary"},o.a.createElement(v,{ru:e.ru,en:e.en}),o.a.createElement(_,{darkMode:e.darkMode,langRU:e.langRU,ru:e.ru,en:e.en,technologies:e.technologies,languages:e.languages,experience:e.experience}))})),b=Object(s.b)((function(e){return{darkMode:e.config.darkMode}}),{toggleDarkMode:u})((function(e){return o.a.createElement("div",{className:e.darkMode?"resume resume--dark":"resume"},o.a.createElement(N,null),o.a.createElement(E,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(2),x=t(13),y=t.n(x),I=t(14),R=t.n(I),U=t(15),w=t.n(U),j=t(16),O=t.n(j),D=t(17),G=t.n(D),L=t(18),S=t.n(L),A=t(19),B=t.n(A),F=t(20),T=t.n(F),P=t(21),C=t.n(P),J=t(22),K=t.n(J),W=t(23),z={age:"23",phone:"+375 (29) 317-05-55",avatar:t.n(W).a,technologies:[{photo:y.a,alt:"JS",id:1},{photo:R.a,alt:"React",id:2},{photo:w.a,alt:"Redux",id:3},{photo:O.a,alt:"HTML",id:4},{photo:G.a,alt:"CSS",id:5},{photo:S.a,alt:"Sass",id:6}],social:[{url:"https://vk.com/nkt_dnsv",photo:B.a,alt:"vk",id:1},{url:"https://www.facebook.com/profile.php?id=100004291969423",photo:T.a,alt:"facebook",id:2},{url:"mailto:nikita.denisov.1991@gmail.com",photo:C.a,alt:"gmail",id:3},{url:"https://t.me/NktDenisov",photo:K.a,alt:"telegram",id:4}],ru:{fullName:"\u041d\u0438\u043a\u0438\u0442\u0430 \u0414\u0435\u043d\u0438\u0441\u043e\u0432",city:"\u041c\u0438\u043d\u0441\u043a",info:[{head:"'\u041e \u0441\u0435\u0431\u0435':",text:"'\u0426\u0435\u043b\u0435\u0443\u0441\u0442\u0440\u0435\u043c\u043b\u0435\u043d\u043d\u044b\u0439 \u0438 \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439. \u041c\u043e\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043a\u0430\u0440\u044c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u043e\u0441\u0442\u0430 \u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u0435\u0442 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0443\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0443\u044e \u0436\u0438\u0437\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0439 \u0438 \u043e\u0446\u0435\u043d\u0435\u043d\u043d\u043e\u0439 \u043f\u043e \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443 \u043c\u0435\u043d\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0430\u0442\u044c \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c.' ,",id:1},{head:"'\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435':",text:"'\u041c\u0430\u0433\u0438\u0441\u0442\u0440 (\u0411\u041d\u0422\u0423, \u043a\u0430\u0444\u0435\u0434\u0440\u0430 \"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u043c\u0435\u0442\u0440\u043e\u043b\u043e\u0433\u0438\u044f \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b\")' ,",id:2},{head:"'\u042f\u0437\u044b\u043a\u0438':",text:"'\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439, B1-B2' ,",id:3},{head:"'\u041e\u043f\u044b\u0442':",text:"null",id:4}]},en:{fullName:"Nikita Denisov",city:"Minsk",info:[{head:"Objective:",text:"'Purposeful and disciplined. Motivated for career growth and improving programming skills. Programming gives a great opportunity to make work-life interesting and valued, so I have enough motivation to become a good programmer.'",id:1},{head:"Education:",text:"'Master (BNTU, \"Standartization, metrology and information systems\")' ,",id:2},{head:"Languages:",text:"'English, B1-B2' ,",id:3},{head:"Experience:",text:"null",id:4}]}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;arguments.length>1&&arguments[1];return e},$=Object(M.b)({mainInfo:H,config:g}),q=Object(M.c)($);r.a.render(o.a.createElement(s.a,{store:q},o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.ccadaa38.chunk.js.map