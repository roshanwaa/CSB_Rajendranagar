(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports={heading:"Contact_heading__13h0r",contact:"Contact_contact__37K_r",icon_contact:"Contact_icon_contact__36ooH",contact__para:"Contact_contact__para__JkqkH","form-control":"Contact_form-control__Xz2QQ",btn:"Contact_btn__2hNLz",title:"Contact_title__316fG","contact-mymap":"Contact_contact-mymap__1GHqy","contact-map":"Contact_contact-map__3iIIv",wrapper:"Contact_wrapper__1g5rn",icon:"Contact_icon__2CGAf",tooltip:"Contact_tooltip__15YKw",facebook:"Contact_facebook__3qRdA",instagram:"Contact_instagram__3pfdw",map:"Contact_map__3iKun",whatApp:"Contact_whatApp__1DD2y",zomato:"Contact_zomato__2cAVp",content:"Contact_content__2H-gu",info:"Contact_info__3_TR4"}},function(e,a,t){e.exports={title:"ContactForm_title__AHEky",info:"ContactForm_info__1IUWJ",info__title:"ContactForm_info__title__3dce7",contact:"ContactForm_contact__2RQ57",contactForm:"ContactForm_contactForm__Jcyun",formInfo:"ContactForm_formInfo__1LMBT"}},function(e,a,t){e.exports={app_form_control:"form_app_form_control__2WyAd",form__actions:"form_form__actions__mOt5S",form__actions_Btn:"form_form__actions_Btn__1fJW_"}},,,,,,,,,,,,,function(e,a,t){e.exports=t(45)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(27),r=t.n(l),o=(t(38),t(24)),i=t(9),s=function(){return c.a.createElement("div",{className:"view-layout"},c.a.createElement("h2",{className:"title"},"About"),c.a.createElement("div",{className:"box-placeholder small"}),c.a.createElement("div",{className:"box-placeholder"}),c.a.createElement("div",{className:"box-placeholder"}))},m=t(14),u=t.n(m),d=t(16),f=t.n(d),h=t(12),p=function(e){var a=Object(n.useState)(""),t=Object(h.a)(a,2),c=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(h.a)(r,2),i=o[0],s=o[1],m=e(c);return{value:c,isValid:m,hasError:!m&&i,valueChangeHandler:function(e){l(e.target.value)},inputBlurHandler:function(e){s(!0)},reset:function(){l(""),s(!1)}}},E=function(e){return""!==e.trim()},b=function(e){return e.includes("@")},g=function(){var e=p(E),a=e.value,t=e.isValid,n=e.hasError,l=e.valueChangeHandler,r=e.inputBlurHandler,o=e.reset,i=p(E),s=i.value,m=i.isValid,u=i.hasError,d=i.valueChangeHandler,h=i.inputBlurHandler,g=i.reset,_=p(b),v=_.value,N=_.isValid,w=_.hasError,x=_.valueChangeHandler,y=_.inputBlurHandler,C=_.reset,M=p(E),H=M.value,j=M.valueChangeHandler,B=M.reset,A=!1;t&&m&&N&&(A=!0);var D=n?"form-control invalid":"form-control",k=u?"form-control invalid":"form-control",O=w?"form-control invalid":"form-control";return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),(a||s||v)&&(alert("Submitted"),console.log(a,s,v,H),o(),g(),C(),B())},className:f.a.form},c.a.createElement("div",{className:D},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",id:"name",name:"name",className:f.a.app_form_control,onChange:l,onBlur:r,value:a,placeholder:"Enter Name"}),n&&c.a.createElement("p",{className:"error-text"},"Please enter a valid Name")),c.a.createElement("div",{className:k},c.a.createElement("label",{htmlFor:"telephone"},"Phone Number"),c.a.createElement("input",{type:"tel",id:"telephone",className:f.a.app_form_control,onChange:d,onBlur:h,value:s,placeholder:"Enter Phone Number"}),u&&c.a.createElement("p",{className:"error-text"},"Please enter a valid phone number")),c.a.createElement("div",{className:O},c.a.createElement("label",{htmlFor:"email"},"E-Mail Address"),c.a.createElement("input",{type:"email",id:"email",className:f.a.app_form_control,onChange:x,onBlur:y,value:v,placeholder:"Enter Email"}),w&&c.a.createElement("p",{className:"error-text"},"Please enter a valid email address")),c.a.createElement("div",{className:f.a.form__message},c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{className:"textarea ".concat(f.a.app_form_control),id:"message",onChange:j,placeholder:"Enter Message"})),c.a.createElement("div",{className:f.a.form__actions},c.a.createElement("button",{disabled:!A,className:f.a.form__actions_Btn},"Submit"))))},_=t(15),v=t.n(_),N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:v.a.title},c.a.createElement("h1",null,"Contact Detail"),c.a.createElement("i",{className:"fa-solid fa-location-arrow"}," "),c.a.createElement("p",null,"Address: 149/B, Chandra Kutir,",c.a.createElement("br",null),"Arya Kumar road ,Rajendra Nagar, Patna 800016")),c.a.createElement("div",{className:v.a.contact},c.a.createElement("div",{className:v.a.formInfo},c.a.createElement("div",{className:v.a.info},c.a.createElement("i",{className:"fa-solid fa-phone"}),c.a.createElement("h3",{className:v.a.info__title},"+91 90973 55476,",c.a.createElement("br",null),"+91 98528 84558")),c.a.createElement("div",{className:v.a.info},c.a.createElement("i",{className:"fa-solid fa-at"}),c.a.createElement("h3",{className:v.a.info__title},"amankumarsingh0866@gmail.com")),c.a.createElement("div",{className:v.a.info},c.a.createElement("i",{className:"fa-brands fa-instagram"}),c.a.createElement("h3",{className:v.a.info__title},c.a.createElement("a",{href:"https://www.instagram.com/csb_rajendranagar/?igshid=YmMyMTA2M2Y%3D"},"csb_rajendranagar")))),c.a.createElement("div",{className:v.a.contactForm},c.a.createElement(g,null))))},w=function(){return c.a.createElement("div",{className:"view-layout",id:u.a.contact},c.a.createElement("div",{className:u.a.contact_container},c.a.createElement("div",{className:u.a.heading},c.a.createElement("i",{className:'"uil uil-message nav__icon"  '.concat(u.a.icon_contact)}),c.a.createElement("h2",{className:"title"},"Contact ",c.a.createElement("span",null," Us ")))),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("h3",{className:u.a.contact__para},c.a.createElement("i",{className:"fa-solid fa-location-arrow"})," We Welcome you all to visit",c.a.createElement("br",null),"Arya Kumar road ,Rajendra Nagar, Patna - 800016")),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("div",{className:u.a["contact-map"]},c.a.createElement("iframe",{className:u.a["contact-mymap"],src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.884270409675!2d85.15667848714037!3d25.608761597257356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed599e9bbb97af%3A0x4f9670738e5cfbab!2sCHAI%20SUTTA%20BAR%2C%20Rajendra%20Nagar%20(Cuddle%20the%20kulhad)!5e0!3m2!1sen!2sin!4v1673725921721!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy"}))),c.a.createElement("div",{className:"title"},c.a.createElement("ul",{className:u.a.wrapper},c.a.createElement("li",{className:"".concat(u.a.facebook," ").concat(u.a.icon)},c.a.createElement("a",{className:u.a.tooltip},"Facebook"),c.a.createElement("a",{href:"https://www.facebook.com/CSB.RajendraNagar/",target:"_blank"},c.a.createElement("i",{className:"fa-brands fa-facebook-f"}))),c.a.createElement("li",{className:"".concat(u.a.instagram," ").concat(u.a.icon)},c.a.createElement("a",{className:u.a.tooltip},"Instagram"),c.a.createElement("a",{href:"https://instagram.com/csb_rajendranagar?igshid=YmMyMTA2M2Y=",target:"_blank"},c.a.createElement("i",{className:"fa-brands fa-instagram"}))),c.a.createElement("li",{className:"".concat(u.a.map," ").concat(u.a.icon)},c.a.createElement("a",{className:u.a.tooltip},"Map"),c.a.createElement("a",{href:"https://goo.gl/maps/n9wMHremz8yMdJK86",target:"_blank"},c.a.createElement("i",{className:"fa-solid fa-location-dot"}))),c.a.createElement("li",{className:"".concat(u.a.whatApp," ").concat(u.a.icon)},c.a.createElement("a",{className:u.a.tooltip},"WhatApp"),c.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=%2B919097355476&fbclid=IwAR10Xhggn19v_jVAuybsvcpHW2KDS1X-DHfY0TX_NCXAgZ0a5rOQynuIG3o",target:"_blank"},c.a.createElement("i",{className:"fa-brands fa-whatsapp"}))),c.a.createElement("li",{className:"".concat(u.a.zomato," ").concat(u.a.icon)},c.a.createElement("a",{className:u.a.tooltip},"Zomato"),c.a.createElement("a",{href:"http://zoma.to/r/20090402",target:"_blank"},c.a.createElement("i",{className:"fa-solid fa-bowl-food"}))))),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement(N,null)))},x=function(){var e=Object(n.useState)(new Date),a=Object(h.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){var e=setInterval(function(){var e=new Date;e.getSeconds()!==t.getSeconds()&&c(e)},100);return function(){return clearInterval(e)}},[t]),t},y=(t(39),{format:function(e){var a=y.formatHours(e.getHours()),t=e.getMinutes();return"".concat(a,":").concat(y.formatSegment(t))},formatHours:function(e){return e%12===0?12:e%12},formatSegment:function(e){return e<10?"0".concat(e):e}}),C=function(){var e=x();return Object(n.createElement)("span",{className:"time"},y.format(e))},M=t(18),H=(t(40),function(){return c.a.createElement("div",{className:"view-layout"},c.a.createElement("header",{className:"under-container title"},c.a.createElement("h1",{className:"card-title"},"At"),c.a.createElement("h1",{className:"card-title"},"Chai ",c.a.createElement("span",null," Sutta "),"Bar"),c.a.createElement(C,null)),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("h2",{className:"head-usp card-subTitle"},"What We Strive for...")),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("p",{className:"sub-para-usp"},"CSB Rajendra Nagar provides a soothing counterpoint to the stresses of urban living. At Chai Sutta Bar, our service is always centered around people. We believe and understand that the whole being of humankind depends on the food they consume. Providing affordable, reliable food that is connected to their culture and ethos. In our Kulhad chai, we strive to make everyone taste the soil of India, a medium of connection between friends, families, and strangers. Even so, we offer so much more than kulhad chai. At chai sutta bar Rajendra nagar we the people of M.A.D venture Pvt. ltd. always try to implement the thoughts of the leadership of CHAI SUTTA BAR.")),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("div",{className:"head-usp"},c.a.createElement("h2",{className:"card-subTitle"},"Our USP's"),c.a.createElement("h4",null,"Brewing Goodness"))),c.a.createElement("div",{className:"box-placeholder"},c.a.createElement("div",{className:"usp"},c.a.createElement("div",{className:"content-usp"},c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"Great Ambience"),c.a.createElement("p",null,"We aim to serve tea in a non-smoking bar-like setting.")),c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"Pocket-Friendly"),c.a.createElement("p",null,"Everyone loves chai and giving them the option to afford a kulhad chai, makes us happy all the time.")),c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"Made with love menu"),c.a.createElement("p",null,"Our menu has varieties of most loved food item's and beverages that satiate both taste and appetite.")),c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"Eco-Friendly"),c.a.createElement("p",null,"we serve our beverages in kulhad which are much more eco-friendly than plastics or other alternatives.")),c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"Orphan Employment"),c.a.createElement("p",null,"We believe in serving society by allowing bringing the potential of the less fortunate in front of the world.")),c.a.createElement(M.a,{className:"box-placeholder-usp"},c.a.createElement("h3",null,"No-Smoking"),c.a.createElement("p",null,"We aim to provide people, especially the youth to enjoy eco-friendly 'kulhad chai breaks' rather than 'sutta breaks'."))))))}),j=function(e){return Object(n.createElement)("div",{id:e.id,className:"menu-section"},Object(n.createElement)("div",{className:"menu-section-title"},Object(n.createElement)("i",{className:e.icon}),Object(n.createElement)("span",{className:"menu-section-title-text"},e.title)),Object(n.createElement)("div",{className:"menu-section-content"},e.children))},B=function(){return Object(n.createElement)(j,{icon:"icon-chai fa-solid fa-mug-hot",id:"restaurants-section",title:"Menu"},[{desc:"Cuddle the Kulhad",id:1,image:"https://images.unsplash.com/photo-1623671100816-fa8bc447e37c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxjaGFpJTIwdGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",title:"Chai"},{desc:"Stressed, Blessed with Coffee Obsessed",id:2,image:"https://images.unsplash.com/photo-1588652737648-640758421c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",title:"Hot Coffee"},{desc:"Icy Connection \u2764",id:3,image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",title:"Cold Coffee"},{desc:"The Cheesy Circle of Life.",id:4,image:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",title:"Pizza"},{desc:"A Flirty Delight",id:5,image:"https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",title:"Burgers"},{desc:"Thrilled on Grilled",id:6,image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",title:"Sandwiches"},{desc:"Magical Happiness, Cheesy Joy",id:7,image:"https://images.unsplash.com/photo-1583331030528-5ae1c7fb81ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",title:"Pasta"},{desc:"A Stubborn Relationship , Never Fails!",id:8,image:"https://images.unsplash.com/photo-1602833280958-1657662ccc58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",title:"Maggie"},{desc:"Crispy Supremacy, Unique Galore!",id:9,image:"https://images.unsplash.com/photo-1515467529252-d8f02a46e731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",title:"Bites"},{desc:"A Celebration of your Living",id:10,image:"https://c.ndtvimg.com/2022-03/ctj2ujv8_corns_625x300_29_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",title:"Healthy Feast "},{desc:"When Life gets Tough, Shake it, Live Love. Milkshakes",id:11,image:"https://images.unsplash.com/photo-1496767849887-3d30e6d3e860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",title:"Milk Shakes"},{desc:"It's Plain to see, We're Mint to be, Blurred limes",id:12,image:"https://images.unsplash.com/photo-1506624852095-49f2f713e1dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",title:"Mojito"},{desc:"Squeeze the DAY!",id:13,image:"https://images.unsplash.com/photo-1574571791847-06514225b338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",title:"Masala Lemon"},{desc:"Icy Delicious, Iced Happiness",id:14,image:"https://images.unsplash.com/photo-1634641135604-94df2bd6d3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",title:"Ice Tea"},{desc:"Sip, Sip, Hooray! A Fruity get-away",id:15,image:"https://images.unsplash.com/photo-1457518919282-b199744eefd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",title:"Ice Crusher"}].map(function(e){var a={backgroundImage:"url(".concat(e.image,")")};return Object(n.createElement)("div",{key:e.id,className:"restaurant-card background-image",style:a},Object(n.createElement)("div",{className:"restaurant-card-content"},Object(n.createElement)("div",{className:"restaurant-card-content-items"},Object(n.createElement)("span",{className:"restaurant-card-title"},e.title),Object(n.createElement)("span",{className:"restaurant-card-desc"},e.desc))))}))},A=(t(41),function(){return Object(n.createElement)("div",{id:"app-menu",className:"view-layout"},Object(n.createElement)("div",{id:"app-menu-content-wrapper"},Object(n.createElement)("div",{id:"app-menu-content"},Object(n.createElement)(B,null))))}),D=(t(42),t(17)),k=(t(43),{width:70,height:7e3}),O=["home","menu","about","contact"],S={startingCurve:10,middleCurve:20,height:100,width:20},G=function(e,a,t){var n=e.width,c=t.width,l=t.height,r=e.height,o=t.middleCurve,i=t.startingCurve;return"\n        M 0 0\n        L ".concat(n," 0\n        L ").concat(n," ").concat(n,"\n        L ").concat(n," ").concat(a,"\n        C ").concat(n,",\n        ").concat(i+a," ").concat(n+c,",\n        ").concat(l/2+a-o," ").concat(n+c,",\n        ").concat(l/2+a," ").concat(n+c,",\n        ").concat(l/2+a+o," ").concat(n,",\n        ").concat(a+l-i," ").concat(n,",\n        ").concat(a+l,"\n        L ").concat(n," 300\n        L ").concat(n," ").concat(r,"\n        L 0 ").concat(r,"\n        Z")},F=function(){var e=Object(n.useState)("home"),a=Object(h.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(S),i=Object(h.a)(r,2),s=i[0],m=i[1],u=Object(n.useState)({y:150}),d=Object(h.a)(u,2),f=d[0],p=d[1],E=Object(n.useRef)(null);Object(n.useEffect)(function(){var e=document.getElementById("route-".concat(t));if(e){var a=Object.assign({},f),n=Object.assign({},s),c=function(e,a){var t=e.getBoundingClientRect().height;return e.offsetTop+t/2-a.height/2}(e,n);!function(e,a,n){D.animate(a,n,{type:D.spring,duration:800,frequency:75,change:function(a){t===e&&p({y:a.y})}})}(t,a,{y:c}),function(e,a){var n={startingCurve:20,middleCurve:30,height:120,width:-10};D.animate(a,n,{type:D.spring,duration:150,frequency:100,friction:300,change:function(a,c){t===e&&(m(a),1===c&&D.animate(n,S,{type:D.spring,duration:600,frequency:75,friction:100,change:function(a){t===e&&m(a)}}))}})}(t,n)}},[t]);return c.a.createElement("div",{className:"navbar"},c.a.createElement("ul",{className:"navbar__list",ref:E},O.map(function(e){return c.a.createElement("li",{id:"route-".concat(e),className:"navbar__option ".concat(t===e?"selected":""),onClick:function(){return l(e)}},c.a.createElement(o.b,{to:"/"+e},e))})),c.a.createElement("svg",{className:"navbar__background",height:"100%"},c.a.createElement("path",{fill:"#144272",d:G(k,f.y,s)})))},W=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(F,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/CSB_Rajendranagar",element:c.a.createElement(H,null)}),c.a.createElement(i.a,{path:"/home",element:c.a.createElement(H,null)}),c.a.createElement(i.a,{path:"/menu",element:c.a.createElement(A,null)}),c.a.createElement(i.a,{path:"/about",element:c.a.createElement(s,null)}),c.a.createElement(i.a,{path:"/contact",element:c.a.createElement(w,null)})))))},I=(t(44),t(28));Object(I.a)("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/");var q=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main-header"},c.a.createElement("img",{src:"https://www.chaisuttabarindia.com/wp-content/uploads/2022/04/Chai-Sutta-Bar2.png",alt:"CSB",className:"csb-logo"}),c.a.createElement("br",null),c.a.createElement("h1",{className:"main__title"},c.a.createElement("span",{className:"c-font"},"C"),"HAI",c.a.createElement("span",{className:"c-font"}," S"),"UTTA",c.a.createElement("span",{className:"b-font"}," BAR ")),c.a.createElement("p",{className:"branch-csb"}," Rajendranagar Patna")),c.a.createElement("div",{id:"app"},c.a.createElement(W,null)))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.Fragment,null,c.a.createElement(q,null)))}],[[29,1,2]]]);
//# sourceMappingURL=main.8833a41b.chunk.js.map