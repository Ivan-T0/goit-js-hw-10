!function(){var e="live_86HL4oIiQSTA4JKLUtaQjIYmxwhOnl47Oad7zyutjVlJNETQ0C5ToAspo0rCRtei",t="https://api.thecatapi.com/v1/";var n=document.querySelector(".breed-select"),o=document.querySelector(".loader"),l=document.querySelector(".error"),a=document.querySelector(".cat-info");a.style.marginTop="20px",o.style.display="block",l.style.display="none",n.style.display="none",fetch("".concat(t,"breeds?api_key=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)})),o.style.display="none",n.style.display="block",l.style.display="none"})).catch((function(e){o.style.display="none",l.style.display="block",l.style.color="red"})),n.addEventListener("change",(function(){var r,c=n.value;a.innerHTML="",l.style.display="none",o.style.display="block",a.style.display="none",(r=c,fetch("".concat(t,"images/search?breed_ids=").concat(r,"&api_key=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){if(e.length>0)return e[0];throw new Error("No cat found for the selected breed.")}))).then((function(e){var t=e.breeds&&e.breeds.length>0?e.breeds[0]:null;if(t){var n=document.createElement("img");n.src=e.url,n.width=900,a.appendChild(n);var l=document.createElement("div");l.style.marginLeft="40px",l.style.width="350px";var r=document.createElement("h3");r.textContent=t.name,l.appendChild(r);var c=document.createElement("p");c.textContent=t.description,l.appendChild(c);var d=document.createElement("p"),i=document.createElement("strong");i.textContent="Temperament: ",d.appendChild(i);var s=document.createTextNode(t.temperament);d.appendChild(s),l.appendChild(d),a.appendChild(l),o.style.display="none",a.style.display="flex"}})).catch((function(e){o.style.display="none",l.style.display="block",l.style.color="red"}))}))}();
//# sourceMappingURL=index.d4367c5a.js.map
