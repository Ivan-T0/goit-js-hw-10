document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),o=document.querySelector(".cat-info");function r(){t.style.display="block",n.style.display="none",o.style.display="block"}function s(){t.style.display="none"}function l(){t.style.display="none",n.style.display="block",n.style.color="red"}r(),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_86HL4oIiQSTA4JKLUtaQjIYmxwhOnl47Oad7zyutjVlJNETQ0C5ToAspo0rCRtei").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((t=>{t.forEach((t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,e.appendChild(n)})),s()})).catch((e=>{l()})),e.addEventListener("change",(()=>{const t=e.value;var i;o.innerHTML="",n.style.display="none",r(),o.style.display="none",r(),(i=t,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${i}&api_key=live_86HL4oIiQSTA4JKLUtaQjIYmxwhOnl47Oad7zyutjVlJNETQ0C5ToAspo0rCRtei`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{if(e.length>0)return e[0];throw new Error("No cat found for the selected breed.")}))).then((e=>{(e.breeds&&e.breeds.length>0?e.breeds[0]:null)&&function(e){const{url:t,breeds:n}=e,r=n&&n.length>0?n[0]:null;if(r){const e=`\n      <img src="${t}">\n      <div>\n        <h3>${r.name}</h3>\n        <p>${r.description}</p>\n        <p><strong>Temperament: </strong>${r.temperament}</p>\n      </div>\n    `;o.innerHTML=e.trim(),s()}}(e)})).catch((e=>{l()}))}))}));
//# sourceMappingURL=index.a9b9e410.js.map
