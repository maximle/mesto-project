(()=>{"use strict";var e,t,o,n,r={542:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$7:()=>y,Zk:()=>f,ey:()=>l,f1:()=>_,fr:()=>m,j3:()=>s,pi:()=>d,u3:()=>p});var r=o(177),c=o(372),a=o(113),u=e([r,a]);[r,a]=u.then?(await u)():u;var i={baseUrl:"https://nomoreparties.co/v1/plus-cohort-13",headers:{authorization:"84bc1fff-03b1-47e2-8e8e-0c12cf25f1f3","Content-Type":"application/json"}};function s(){return fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return c.rC.textContent=e.name,c.qj.textContent=e.about,c.R$.src=e.avatar,e._id})).catch((function(e){console.log(e)}))}function l(e){return fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){t.forEach((function(e){r._u.push(e)})),console.log(r._u);for(var o=0;o<r._u.length;o++){var n=(0,r.LH)(r._u[o],e);c.q_.append(n)}})).catch((function(e){console.log(e)}))}function p(e,t,o){return fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),c.rC.textContent=e.name,c.qj.textContent=e.about,c.R$.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){(0,a.Iz)(!1,o)}))}function d(e,t){return fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),c.R$.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){(0,a.Iz)(!1,t)}))}function f(e,t){return fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),c.q_.prepend((0,r.LH)(e,e.owner._id))})).catch((function(e){console.log(e)})).finally((function(){(0,a.Iz)(!1,t)}))}function _(e,t){return fetch("".concat(i.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),(0,r.yJ)(t)})).catch((function(e){console.log(e)}))}function m(e){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e.id),{method:"PUT",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){console.log(t),e.querySelector(".place__like-count").textContent=t.likes.length})).catch((function(e){console.log(e)}))}function y(e){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e.id),{method:"DELETE",headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){console.log(t),e.querySelector(".place__like-count").textContent=t.likes.length})).catch((function(e){console.log(e)}))}n()}catch(h){n(h)}}))},177:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{LH:()=>f,_u:()=>i,yJ:()=>_});var r=o(113),c=o(579),a=o(542),u=e([r,c,a]);[r,c,a]=u.then?(await u)():u;var i=[],s=document.querySelector("#place-card").content,l=document.querySelector(".image-popup"),p=document.querySelector(".popup__image"),d=document.querySelector(".popup__image-caption");function f(e,t){var o=s.querySelector(".place").cloneNode(!0),n=o.querySelector(".place__image"),c=o.querySelector(".place__like-count");o.querySelector(".place__name").textContent=e.name,n.alt=e.name,n.src=e.link,c.textContent=e.likes.length,o.id=e._id;var u=o.querySelector(".place__like-button");return e.owner._id===t&&(o.insertAdjacentHTML("afterbegin",'<button type="button" aria-label="delete" class="place__delete-button"></button>'),o.querySelector(".place__delete-button").addEventListener("click",(function(e){console.log(e.target.closest(".place").id),(0,a.f1)(e.target.closest(".place").id,e.target)}))),e.likes.find((function(e){if(e._id===t)return!0}))&&(console.log("privetik"),m(u)),u.addEventListener("click",(function(e){u.classList.contains("place__like-button_active")?((0,a.$7)(e.target.closest(".place")),u.classList.remove("place__like-button_active")):((0,a.fr)(e.target.closest(".place")),m(u))})),n.addEventListener("click",(function(){p.src=e.link,p.alt=e.name,d.textContent=e.name,(0,r.Mw)(l)})),o}function _(e){e.closest(".place").remove()}function m(e){e.classList.add("place__like-button_active")}n()}catch(y){n(y)}}))},113:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{$1:()=>j,Iz:()=>k,Mw:()=>S,Ph:()=>s,Y:()=>h,YV:()=>y,Zs:()=>p,c4:()=>m,h4:()=>f,j4:()=>g,pZ:()=>E,yi:()=>L,zs:()=>l});var r=o(177),c=o(108),a=(o(372),o(542)),u=o(579),i=e([r,a,u]);[r,a,u]=i.then?(await i)():i;var s=document.querySelector(".profile-popup"),l=document.querySelector(".popup__input_type_name"),p=document.querySelector(".popup__input_type_calling"),d=document.querySelector(".card-popup").querySelector(".popup__save-button"),f=document.querySelector(".profile-pic-popup");function S(e){e.classList.add("popup_opened"),document.addEventListener("keydown",q)}function g(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",q)}function q(e){"Escape"===e.key&&g(document.querySelector(".popup_opened"))}function k(e,t){t.target.querySelector(".popup__save-button").textContent=e?"Сохранение...":"Сохранить"}function L(e){e.preventDefault(),k(!0,e),console.log(e.target),(0,a.u3)(l.value,p.value,e),g(s)}var _=document.querySelector(".profile-pic-popup .popup__input_type_calling");function E(e){e.preventDefault(),k(!0,e),(0,a.pi)(_.value,e),g(f),u.v.reset()}var m=document.querySelector(".card-popup"),y=document.querySelector(".profile__add-button"),h=document.querySelector(".card-popup .popup__form"),v=document.querySelector(".card-popup .popup__input_type_name"),b=document.querySelector(".card-popup .popup__input_type_calling");function j(e){e.preventDefault(),k(!0,e);var t={name:v.value,link:b.value};console.log(t),(0,a.Zk)(t,e),g(m),e.target.classList.contains("popup__input")?e.target.closest(".popup__form").reset():e.target.reset(),d.disabled=!0,d.classList.add(c.A.disabledButtonClass)}n()}catch(C){n(C)}}))},372:(e,t,o)=>{o.d(t,{Ix:()=>i,R$:()=>a,q_:()=>u,qj:()=>c,rC:()=>r,xm:()=>n});var n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__name"),c=document.querySelector(".profile__calling"),a=document.querySelector(".profile__pic"),u=document.querySelector(".places__list"),i=document.querySelector(".profile__pic-overlay")},108:(e,t,o)=>{o.d(t,{A:()=>r});var n,r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",disabledButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type-error"},c=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.disabledButtonClass),t.disabled=!1):(t.classList.add(o.disabledButtonClass),t.disabled=!0)};n=r,Array.from(document.querySelectorAll(n.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);c(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o}(e,t,t.validationMessage,o)}(e,r,t),c(o,n,t)}))}))}(e,n)}))},579:(e,t,o)=>{o.a(e,(async(e,n)=>{try{o.d(t,{v:()=>l});var r=o(372),c=o(113),a=o(177),u=(o(108),o(542)),i=e([c,a,u]);[c,a,u]=i.then?(await i)():i,r.xm.addEventListener("click",(function(){c.zs.value=r.rC.textContent,c.Zs.value=r.qj.textContent,(0,c.Mw)(c.Ph)})),r.Ix.addEventListener("click",(function(){(0,c.Mw)(c.h4)}));var s=await(0,u.j3)();console.log(s),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&(0,c.j4)(e),t.target.classList.contains("popup__close-button")&&(0,c.j4)(e)}))})),document.querySelector(".popup__form").addEventListener("submit",c.yi);var l=document.querySelector(".profile-pic-popup .popup__form");l.addEventListener("submit",c.pZ),(0,u.ey)(s),c.YV.addEventListener("click",(function(){(0,c.Mw)(c.c4)})),c.Y.addEventListener("submit",c.$1),n()}catch(e){n(e)}}),1)}},c={};function a(e){var t=c[e];if(void 0!==t)return t.exports;var o=c[e]={exports:{}};return r[e](o,o.exports,a),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(r,c,a)=>{var u;a&&((u=[]).d=1),u&&(u.moduleId=r.id);var i,s,l,p=new Set,d=r.exports,f=new Promise(((e,t)=>{l=t,s=e}));f[t]=d,f[e]=e=>(u&&e(u),p.forEach(e),f.catch((e=>{}))),f.moduleId=r.id,r.exports=f,c((r=>{var c;i=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var c=[];c.d=0,r.then((e=>{a[t]=e,n(c)}),(e=>{a[o]=e,n(c)}));var a={};return a[e]=e=>e(c),a}}var u={};return u[e]=e=>{},u[t]=r,u})))(r);var a=()=>i.map((e=>{if(e[o])throw e[o];return e[t]})),s=new Promise((t=>{(c=()=>t(a)).r=0;var o=e=>e!==u&&!p.has(e)&&(p.add(e),e&&!e.d&&(c.r++,e.push(c)));i.map((t=>t[e](o)))}));return c.r?s:a()}),(e=>(e?l(f[o]=e):s(d),n(u)))),u&&(u.d=0)},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(579)})();