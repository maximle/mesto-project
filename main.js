(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__name"),n=document.querySelector(".profile__calling"),o=document.querySelector(".profile__pic"),r=document.querySelector(".places__list"),c=document.querySelector(".profile__pic-overlay"),a={baseUrl:"https://nomoreparties.co/v1/plus-cohort-13",headers:{authorization:"84bc1fff-03b1-47e2-8e8e-0c12cf25f1f3","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function l(e){console.log(e)}var i=document.querySelector("#place-card").content,s=document.querySelector(".image-popup"),p=document.querySelector(".popup__image"),d=document.querySelector(".popup__image-caption");function f(e,t){var n=i.querySelector(".place").cloneNode(!0),o=n.querySelector(".place__image"),r=n.querySelector(".place__like-count"),c=n.querySelector(".place__delete-button");n.querySelector(".place__name").textContent=e.name,o.alt=e.name,o.src=e.link,r.textContent=e.likes.length,n.id=e._id;var f=n.querySelector(".place__like-button");return e.owner._id===t?c.addEventListener("click",(function(e){var t;console.log(e.target.closest(".place").id),(t=e.target.closest(".place").id,e.target,fetch("".concat(a.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:a.headers}).then(u)).then((function(t){console.log(t),e.target.closest(".place").remove()})).catch(l)})):c.remove(),e.likes.find((function(e){if(e._id===t)return!0}))&&_(f),f.addEventListener("click",(function(e){var t=e.target.closest(".place");f.classList.contains("place__like-button_active")?function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e.id),{method:"DELETE",headers:a.headers}).then(u)}(t).then((function(e){console.log(e),t.querySelector(".place__like-count").textContent=e.likes.length,f.classList.remove("place__like-button_active")})).catch(l):function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e.id),{method:"PUT",headers:a.headers}).then(u)}(t).then((function(e){console.log(e),t.querySelector(".place__like-count").textContent=e.likes.length,_(f)})).catch(l)})),o.addEventListener("click",(function(){p.src=e.link,p.alt=e.name,d.textContent=e.name,q(s)})),n}function _(e){e.classList.add("place__like-button_active")}var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",disabledButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type-error"},y=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.disabledButtonClass),t.disabled=!1):(t.classList.add(n.disabledButtonClass),t.disabled=!0)};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);y(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),y(n,o,t)}))}))}(t,e)}))}(m);var v=document.querySelector(".profile-popup"),h=document.querySelector(".popup__input_type_name"),S=document.querySelector(".popup__input_type_calling"),b=document.querySelector(".card-popup").querySelector(".popup__save-button"),g=document.querySelector(".profile-pic-popup");function q(e){e.classList.add("popup_opened"),document.addEventListener("keydown",E)}function L(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",E)}function E(e){"Escape"===e.key&&L(document.querySelector(".popup_opened"))}function k(e,t){t.target.querySelector(".popup__save-button").textContent=e?"Сохранение...":"Сохранить"}var C=document.querySelector(".profile-pic-popup .popup__input_type_calling"),x=document.querySelector(".profile-pic-popup .popup__form"),A=x.querySelector(".popup__save-button"),U=document.querySelector(".card-popup"),w=document.querySelector(".profile__add-button"),T=document.querySelector(".card-popup .popup__form"),B=document.querySelector(".card-popup .popup__input_type_name"),j=document.querySelector(".card-popup .popup__input_type_calling");function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.addEventListener("click",(function(){h.value=t.textContent,S.value=n.textContent,q(v)})),c.addEventListener("click",(function(){q(g)})),Promise.all([fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(u),fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(u)]).then((function(e){var c=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),a=c[0],u=c[1];console.log(a,u),t.textContent=a.name,n.textContent=a.about,o.src=a.avatar;for(var l=a._id,i=0;i<u.length;i++){var s=f(u[i],l);r.append(s)}})).catch(l),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&L(e),t.target.classList.contains("popup__close-button")&&L(e)}))})),document.querySelector(".popup__form").addEventListener("submit",(function(e){var r,c;e.preventDefault(),k(!0,e),console.log(e.target),(r=h.value,c=S.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:r,about:c})}).then(u)).then((function(e){console.log(e),t.textContent=e.name,n.textContent=e.about,o.src=e.avatar,L(v)})).catch(l).finally((function(){k(!1,e)}))})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),k(!0,e),(t=C.value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then(u)).then((function(e){console.log(e),o.src=e.avatar,L(g),x.reset(),A.disabled=!0,A.classList.add(m.disabledButtonClass)})).catch(l).finally((function(){k(!1,e)}))})),w.addEventListener("click",(function(){q(U)})),T.addEventListener("submit",(function(e){e.preventDefault(),k(!0,e);var t,n={name:B.value,link:j.value};console.log(n),(t=n,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify(t)}).then(u)).then((function(t){console.log(t),r.prepend(f(t,t.owner._id)),L(U),e.target.classList.contains("popup__input")?e.target.closest(".popup__form").reset():e.target.reset(),b.disabled=!0,b.classList.add(m.disabledButtonClass)})).catch(l).finally((function(){k(!1,e)}))}))})();