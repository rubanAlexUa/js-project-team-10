import{a as b,i as L,A as E}from"./assets/vendor-D0jimD09.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const S=document.querySelector(".swiper-1 #reviews-list"),M=document.querySelector(".swiper-1 .swiper-button-next"),P=document.querySelector(".swiper-1 .swiper-button-prev");async function O(){try{const t=(await b.get("https://portfolio-js.b.goit.study/api/reviews")).data;A(t)}catch{L.error({title:"Error",message:"Failed to load reviews",position:"topRight"}),S.innerHTML='<p class="not-found">Not found</p>'}}function A(e){S.innerHTML=e.map(t=>`
            <li class="swiper-slide swiper-1">
              <img src="${t.avatar_url}" alt="${t.author}" class="review-avatar">
              <h4 class="slide-title ">${t.author}</h4>
              <p class="slide-text">${t.review}</p>
            </li>`).join(""),setTimeout(()=>{B()},0)}function B(){if(!M||!P){console.error("Swiper navigation buttons not found!");return}new Swiper(".test",{slidesPerView:1,spaceBetween:16,loop:!1,allowSlideNext:!0,allowSlidePrev:!0,navigation:{prevEl:".swiper-1 .swiper-button-prev",nextEl:".swiper-1 .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}document.addEventListener("DOMContentLoaded",O);const q=document.querySelector(".header-menu-btn"),p=document.querySelector(".nav-menu"),V=document.querySelector(".menu-open-btn"),C=document.querySelector(".mob-menu-close"),g=document.querySelector(".mobile-menu"),I=document.querySelectorAll(".mob-menu-link"),T=document.querySelectorAll(".nav-menu-item");q.addEventListener("click",e=>{e.preventDefault(),p.classList.toggle("visibility")});document.addEventListener("click",e=>{!q.contains(e.target)&&!p.contains(e.target)&&p.classList.remove("visibility")});function f(){g.classList.toggle("hidden"),g.classList.contains("hidden")?document.body.style.overflow="auto":document.body.style.overflow="hidden"}V.addEventListener("click",f);C.addEventListener("click",f);function k(e){const t=document.querySelector(`#${e}`);console.log(t),window.scrollTo({top:t.offsetTop,behavior:"smooth"})}I.forEach(e=>{e.addEventListener("click",f),e.addEventListener("click",()=>{k(e.dataset.id)})});T.forEach(e=>{e.addEventListener("click",()=>{k(e.firstElementChild.dataset.id)})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-about-us").forEach((e,t)=>{try{const n=new E(e,{duration:300,showFirst:!1});t===0&&n.open(0)}catch(n){console.error("Accordion initialization error:",n)}})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".mySwiper").forEach((e,t)=>{new Swiper(e,{loop:!0,grabCursor:!0,simulateTouch:!0,touchRatio:1,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},mousewheel:!0,speed:500,keyboard:{enabled:!0,onlyInViewport:!0}})})});new Swiper(".swiper-2",{slidesPerView:1,spaceBetween:20,breakpointBase:window,navigation:{nextEl:".swiper-2 .swiper-button-next",prevEl:".swiper-2 .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0});const _=document.querySelector(".container-list");new E(_,{showMultiple:!0,duration:400});const h=document.querySelectorAll(".js-covers__inner"),x=document.querySelector(".js-container-covers");window.addEventListener("scroll",j);const d=x.offsetHeight;function j(){for(let e=0;e<h.length;e++){const t=h[e];let n=window.innerHeight;const s=D(x).top;let o=n-d/5;d>n&&(n=n-n/5),pageYOffset>s-o&&pageYOffset<s+d?t.classList.replace("visually-hidden","covers__inner"):t.classList.replace("covers__inner","visually-hidden"),pageYOffset>s+(d-100)&&t.classList.replace("covers__inner","visually-hidden")}}function D(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+s,left:t.left+n}}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".footer-form"),t=document.getElementById("user-email"),n=document.getElementById("user-comments"),s=document.querySelector(".backdrop"),o=document.querySelector(".modal-close"),r=document.querySelector(".backdrop");document.querySelector(".footer-contact"),s.classList.remove("is-open");function l(i){s.classList.toggle("is-open",i),document.body.style.overflow="hidden"}let c=document.createElement("p");c.classList.add("email-validation-message"),c.style.textAlign="left",e.insertAdjacentElement("beforeend",c);function w(i){i?(t.style.borderBottom="1px solid #3cbc81",c.textContent="Success!",c.style.color="#3cbc81"):(t.style.borderBottom="1px solid #e74a3b",c.textContent="Invalid email, try again",c.style.color="#e74a3b")}function v(i){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i)}t.addEventListener("input",function(){w(v(t.value.trim()))}),n.addEventListener("input",function(){this.value.length>50&&(this.value=this.value.slice(0,50)+"...")});function u(){r.classList.remove("is-open"),document.documentElement.classList.remove("is-lock"),window.location.reload()}o.addEventListener("click",u),r.addEventListener("click",i=>{i.target===r&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("is-open")&&u()}),e.addEventListener("submit",async function(i){if(i.preventDefault(),!v(t.value.trim())){w(!1);return}const y={email:t.value,comment:n.value};try{await b.post("https://portfolio-js.b.goit.study/api/requests",y,{headers:{"Content-Type":"application/json"}}),l(!0),e.reset(),c.textContent=""}catch(a){let m="Error sending application. Please check the entered data and try again.";a.response?m+=` Error code: ${a.response.status}`:a.request&&(m+=" Network problem."),L.error({title:"Error",message:m}),console.error("Error:",a)}})});
//# sourceMappingURL=index.js.map
