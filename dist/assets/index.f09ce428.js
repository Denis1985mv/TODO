(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();function p(c,s,d){let e=new Date().getDate(),t=e;t=t+1,console.log(t,"\u0437\u0430\u0432\u0442\u0440\u0430"),console.log(e,"\u0434\u0430\u0442\u0430");for(let v=0,k=localStorage.length;v<k;v++){const $=localStorage.key(v);let h={};h=localStorage[$];var l=JSON.parse(h);console.log(l,"\u043E\u0431\u044A\u0435\u043A\u0442"),console.log(l.text,"\u0418\u043C\u044F"),console.log(l.priority,"\u0427\u0438\u0441\u043B\u043E"),console.log(l.energyCosts,"energy"),console.log(l.timeCosts,"\u041F\u0435\u0440\u0438\u043E\u0434"),console.log(typeof l,"\u0437\u0434\u0435\u0441\u044C");let f=l.text,g=l.priority,T=l.energyCosts,y=l.timeCosts,r;g===1?r="blockBorderColorThree":g===2?r="blockBorderColorTwo":g===3&&(r="blockBorderColorOne");let a="zipper",m="zipper",u="zipper",i="./svg/flash.svg";if(T===1?(i="./svg/flashactiv.svg",a="zipperActiv"):T===2?(i="./svg/flashactiv.svg",a="zipperActiv",m="zipperActiv"):T===3&&(i="./svg/flashactiv.svg",a="zipperActiv",m="zipperActiv",u="zipperActiv"),c===1){if(y===e){const n=`
                          <div id="dell" class="block blockTop"> 
                          <div class="${r}">
                              <p class="blockText">${f}</p>
                              <img class="${a} leftZipper" src=${i} alt="flash.svg.pic">
                              <img class="${m} mainZipper" src="${i}" alt="flash.svg.pic">
                              <img class="${u} mainZipper" src="${i}" alt="flash.svg.pic">
                          </div>
                          </div>
                          `;console.log(n),document.querySelector("#textMainGo").insertAdjacentHTML("afterend",n)}}else if(c===2){if(y===t){const n=`
          <div id="dell" class="block blockTop"> 
          <div class="${r}">
              <p class="blockText">${f}</p>
              <img class="${a} leftZipper" src=${i} alt="flash.svg.pic">
              <img class="${m} mainZipper" src="${i}" alt="flash.svg.pic">
              <img class="${u} mainZipper" src="${i}" alt="flash.svg.pic">
          </div>
          </div>
          `;console.log(n),document.querySelector("#textMainGo").insertAdjacentHTML("afterend",n)}}else if(c===3){const n=`
        <div id="dell" class="block blockTop"> 
        <div class="${r}">
            <p class="blockText">${f}</p>
            <img class="${a} leftZipper" src=${i} alt="flash.svg.pic">
            <img class="${m} mainZipper" src="${i}" alt="flash.svg.pic">
            <img class="${u} mainZipper" src="${i}" alt="flash.svg.pic">
        </div>
        </div>
        `;console.log(n),document.querySelector("#textMainGo").insertAdjacentHTML("afterend",n)}}}const O=document.querySelector("#bottanOne"),C=()=>O.addEventListener("click",function(){document.location.href="./pagenote.html"}),S=document.querySelector("#bottanClear"),w=()=>S.addEventListener("click",function(){localStorage.clear()});function M(){document.querySelector("#buttonTimeOne"),document.querySelector("#buttonTimeTwo"),document.querySelector("#buttonTimeThree")}C();w();M();function L(){document.getElementById("buttonTimeThree").classList.remove("active"),document.getElementById("buttonTimeTwo").classList.remove("active");let o=document.getElementById("buttonTimeOne");o.classList.remove("activeDell"),o.classList.add("active");let e=0;for(;e<100;){let t=document.querySelector("#dell");t!=null&&t.remove(),++e}p(1)}function E(){document.getElementById("buttonTimeOne").classList.add("activeDell"),document.getElementById("buttonTimeThree").classList.remove("active");let o=document.getElementById("buttonTimeTwo");o.classList.remove("activeDell"),o.classList.add("active");let e=0;for(;e<100;){let t=document.querySelector("#dell");t!=null&&t.remove(),++e}p(2)}function x(){document.getElementById("buttonTimeOne").classList.add("activeDell"),document.getElementById("buttonTimeTwo").classList.add("activeDell");let o=document.getElementById("buttonTimeThree");o.classList.remove("activeDell"),o.classList.add("active");let e=0;for(;e<100;){let t=document.querySelector("#dell");t!=null&&t.remove(),++e}p(3)}L();buttonTimeOne.addEventListener("click",L);buttonTimeTwo.addEventListener("click",E);buttonTimeThree.addEventListener("click",x);p();
