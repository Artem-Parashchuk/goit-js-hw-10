import{f as p,i as b}from"./assets/vendor-77e16229.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g="/goit-js-hw-10/assets/iconError-b1470395.svg",E=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),d=document.querySelector("[data-days]"),a=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");let m=null;n.setAttribute("disabled","true");const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<Date.now()?(n.setAttribute("disabled","true"),b.show({message:"Please choose a date in the future",backgroundColor:"red",theme:"dark",iconUrl:g,position:"topRight"})):(m=t[0],n.removeAttribute("disabled"))}};p(E,C);n.addEventListener("click",()=>{n.setAttribute("disabled","true");const t=setInterval(()=>{const r=m-Date.now(),{days:i,hours:s,minutes:e,seconds:o}=v(r);d.textContent=u(i),a.textContent=u(s),l.textContent=u(e),f.textContent=u(o),r<=0&&(clearInterval(t),n.removeAttribute("disabled"),d.textContent="00",a.textContent="00",l.textContent="00",f.textContent="00")},1e3)});function u(t){return t>=0&&t<=9?"0"+t:t}function v(t){const o=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:h,seconds:y}}
//# sourceMappingURL=commonHelpers3.js.map
