(function(){var t,e,i,n,s,l,o,c,a;for(o=(c=function(t){return document.querySelector(t)})(".navbox"),a=c("section"),s=c(".openButton"),e=c(".topButton"),i=c("header"),l=!1,document.createAttribute("target").value="_blank",t=document.getElementsByTagName("a"),n=0;n<t.length;)"http"===t[n].getAttributeNode("href").value.substring(0,4)&&t[n].setAttribute("target","_blank"),n++;s.addEventListener("click",(function(){a.classList.toggle("muted"),o.classList.toggle("nav-visible"),i.classList.toggle("muted"),s.style.visibility="hidden",e.style.visibility="hidden",l=!0})),e.addEventListener("click",(function(){scrollTo(0,0)})),i.addEventListener("click",(function(){location.href="index.html"})),document.addEventListener("click",(function(t){l&&!t.target.closest(".openButton")&&(o.classList.toggle("nav-visible"),a.classList.toggle("muted"),i.classList.toggle("muted"),s.style.visibility="visible",e.style.visibility="visible",l=!1)}))}).call(this);