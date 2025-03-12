import{a as g,i as h,A as L}from"./assets/vendor-D0jimD09.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const b=document.querySelector(".swiper-1 #reviews-list"),x=document.querySelector(".swiper-1 .swiper-button-next"),M=document.querySelector(".swiper-1 .swiper-button-prev");async function P(){try{const e=(await g.get("https://portfolio-js.b.goit.study/api/reviews")).data;O(e)}catch{h.error({title:"Error",message:"Failed to load reviews",position:"topRight"}),b.innerHTML='<p class="not-found">Not found</p>'}}function O(t){b.innerHTML=t.map(e=>`
            <li class="swiper-slide swiper-1">
              <img src="${e.avatar_url}" alt="${e.author}" class="review-avatar">
              <h4 class="slide-title ">${e.author}</h4>
              <p class="slide-text">${e.review}</p>
            </li>`).join(""),setTimeout(()=>{B()},0)}function B(){if(!x||!M){console.error("Swiper navigation buttons not found!");return}new Swiper(".test",{slidesPerView:1,spaceBetween:16,loop:!1,allowSlideNext:!0,allowSlidePrev:!0,navigation:{prevEl:".swiper-1 .swiper-button-prev",nextEl:".swiper-1 .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}})}document.addEventListener("DOMContentLoaded",P);const E=document.querySelector(".header-menu-btn"),m=document.querySelector(".nav-menu"),V=document.querySelector(".menu-open-btn"),C=document.querySelector(".mob-menu-close"),y=document.querySelector(".mobile-menu"),I=document.querySelector(".mob-menu-link");E.addEventListener("click",t=>{t.preventDefault(),m.classList.toggle("visibility")});document.addEventListener("click",t=>{!E.contains(t.target)&&!m.contains(t.target)&&m.classList.remove("visibility")});function f(){y.classList.toggle("hidden"),y.classList.contains("hidden")?document.body.style.overflow="auto":document.body.style.overflow="hidden"}V.addEventListener("click",f);C.addEventListener("click",f);I.forEach(t=>{t.addEventListener("click",f)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-about-us").forEach((t,e)=>{try{const n=new L(t,{duration:300,showFirst:!1});e===0&&n.open(0)}catch(n){console.error("Accordion initialization error:",n)}})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".mySwiper").forEach((t,e)=>{new Swiper(t,{loop:!0,grabCursor:!0,simulateTouch:!0,touchRatio:1,breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},mousewheel:!0,speed:500,keyboard:{enabled:!0,onlyInViewport:!0}})})});new Swiper(".swiper-2",{slidesPerView:1,spaceBetween:20,breakpointBase:window,navigation:{nextEl:".swiper-2 .swiper-button-next",prevEl:".swiper-2 .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0});const _=document.querySelector(".container-list");new L(_,{showMultiple:!0,duration:400});const v=document.querySelectorAll(".js-covers__inner"),S=document.querySelector(".js-container-covers");window.addEventListener("scroll",A);const d=S.offsetHeight;function A(){for(let t=0;t<v.length;t++){const e=v[t];let n=window.innerHeight;const s=T(S).top;let o=n-d/5;d>n&&(n=n-n/5),pageYOffset>s-o&&pageYOffset<s+d?e.classList.replace("visually-hidden","covers__inner"):e.classList.replace("covers__inner","visually-hidden"),pageYOffset>s+(d-100)&&e.classList.replace("covers__inner","visually-hidden")}}function T(t){const e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+s,left:e.left+n}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".form-contact"),e=document.getElementById("user-email"),n=document.getElementById("user-comments"),s=document.querySelector(".backdrop"),o=document.querySelector(".modal-close"),r=document.querySelector(".backdrop");s.classList.remove("is-open");function l(i){s.classList.toggle("is-open",i),document.body.style.overflow="hidden"}let c=document.createElement("p");c.classList.add("email-validation-message"),e.parentNode.appendChild(c);function q(i){i?(e.style.borderBottom="1px solid #3cbc81",c.textContent="Success!",c.style.color="#3cbc81"):(e.style.borderBottom="1px solid #e74a3b",c.textContent="Invalid email, try again",c.style.color="#e74a3b"),c.style.marginTop="4px",c.style.position="relative",window.innerWidth>=768?c.style.marginLeft="190px":c.style.marginLeft="0"}function k(i){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i)}e.addEventListener("input",function(){q(k(e.value.trim()))}),n.addEventListener("input",function(){this.value.length>50&&(this.value=this.value.slice(0,50)+"...")});function u(){r.classList.remove("is-open"),document.documentElement.classList.remove("is-lock"),window.location.reload()}o.addEventListener("click",u),r.addEventListener("click",i=>{i.target===r&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("is-open")&&u()}),t.addEventListener("submit",async function(i){i.preventDefault();const w={email:e.value,comment:n.value};try{const a=await g.post("https://portfolio-js.b.goit.study/api/requests",w,{headers:{"Content-Type":"application/json"}});l(!0),t.reset()}catch(a){let p="Error sending application. Please check the entered data and try again.";a.response?p+=` Error code: ${a.response.status}`:a.request&&(p+=" Network problem."),h.error({title:"Error",message:p}),console.error("Error:",a)}})});
//# sourceMappingURL=index.js.map
