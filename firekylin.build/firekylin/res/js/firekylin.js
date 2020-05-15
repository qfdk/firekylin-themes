(function(e,t){function p(){var n=t.getElementsByClassName("lazy-load");if(n.length===0)e.removeEventListener("load",p),e.removeEventListener("scroll",p),e.removeEventListener("resize",p);else for(var r=n.length-1;r>-1;r--){var i=n[r];d(i,300)&&(i.src=i.getAttribute("data-src"),i.removeAttribute("data-src"),i.classList.remove("lazy-load"))}}function d(n,r){return n.offsetTop-((t.scrollingElement||t.documentElement).scrollTop+(e.innerHeight||t.documentElement.clientHeight))<r}var n=function(e){return t.getElementById(e)},r=function(e){e=e||document;var t=e.defaultView||e.parentWindow,n=e.compatMode,r=e.documentElement,i=t.innerHeight||0,s=t.innerWidth||0,o=t.pageXOffset||0,u=t.pageYOffset||0,a=r.scrollWidth,f=r.scrollHeight;return n!=="CSS1Compat"&&(r=e.body,a=r.scrollWidth,f=r.scrollHeight),n&&(s=r.clientWidth,i=r.clientHeight),a=Math.max(a,s),f=Math.max(f,i),o=Math.max(o,e.documentElement.scrollLeft,e.body.scrollLeft),u=Math.max(u,e.documentElement.scrollTop,e.body.scrollTop),{width:s,height:i,scrollWidth:a,scrollHeight:f,scrollX:o,scrollY:u}},i=function(e){var t=e.ownerDocument,n=r(t),i=n.scrollX,s=n.scrollY,o=e.getBoundingClientRect(),u=[o.left,o.top];if(s||i)u[0]+=i,u[1]+=s;return u},s=function(e){var t=i(e),n=t[0],r=t[1],s=e.offsetWidth,o=e.offsetHeight;return{width:s,height:o,left:n,top:r,bottom:r+o,right:n+s}},o=function(){var e=n("comments");if(!e)return;var t=function(){var t=e.getAttribute("data-type");t==="disqus"?u():t==="hypercomments"?a():t==="changyan"?f():t==="gitalk"&&l()};if(location.hash.indexOf("#comments")>-1)t();else var i=setInterval(function(){var n=r(),o=n.scrollY+n.height,u=s(e).top;Math.abs(u-o)<1e3&&(t(),clearInterval(i))},300)},u=function(){var r=n("disqus_thread");if(!r)return;e.disqus_config=function(){this.page.url=r.getAttribute("data-url"),this.page.identifier=r.getAttribute("data-identifier")};var i=t.createElement("script");i.src="//"+r.getAttribute("data-name")+".disqus.com/embed.js",i.setAttribute("data-timestamp",+(new Date)),(t.head||t.body).appendChild(i)},a=function(){var t=n("hypercomments_widget"),r=t.getAttribute("data-name");e._hcwp=e._hcwp||[],e._hcwp.push({widget:"Stream",widget_id:r}),function(){if("HC_LOAD_INIT"in e)return;var t=(navigator.language||navigator.systemLanguage||navigator.userLanguage||"en").substr(0,2).toLowerCase(),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https":"http")+"://w.hypercomments.com/widget/hc/"+r+"/"+t+"/widget.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i.nextSibling)}()},f=function(){var r=n("SOHUCS");if(!r)return;var i=r.getAttribute("data-name"),s=r.getAttribute("sid"),o=e.innerWidth||t.documentElement.clientWidth,u=t.createElement("script");o<960?(u.id="changyan_mobile_js",u.src="//changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id="+i+"&conf="+s):(u.src="//changyan.sohu.com/upload/changyan.js",u.onload=function(){e.changyan.api.config({appid:i,conf:s})}),(t.head||t.body).appendChild(u)},l=function(){var e=n("gitalk-container");if(!e)return;var r=e.getAttribute("data-name"),i=e.getAttribute("data-identifier");r&&(r=JSON.parse(r)),r.id=i;var s=t.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href","//cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.css"),(t.head||t.body).appendChild(s);var o=t.createElement("script");o.src="//cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js",o.onload=function(){var e=new Gitalk(r);e.render("gitalk-container")},(t.head||t.body).appendChild(o)};e.addEventListener("load",function(){o()});var c={isMob:function(){var e=navigator.userAgent.toLowerCase(),t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!1;for(var r=0;r<t.length;r++)e.indexOf(t[r].toLowerCase())>-1&&(n=!0);return n}()};c.isMob?t.documentElement.className+=" mob":t.documentElement.className+=" pc";var h={$sidebar:t.querySelector("#sidebar"),$main:t.querySelector("#main"),$sidebar_mask:t.querySelector("#sidebar-mask"),$body:t.body,$btn_side:t.querySelector("#header .btn-bar"),$article:t.querySelectorAll(".mob #page-index article")};h.bindEvent=function(){var t=this,n="side",r="click",i="click";c.isMob&&(r="touchstart",i="touchend"),this.$btn_side.addEventListener(i,function(){t.$body.className.indexOf(n)>-1?(t.$body.className=t.$body.className.replace(n,""),t.$sidebar_mask.style.display="none"):(t.$body.className+=" "+n,t.$sidebar_mask.style.display="block")},!1),this.$sidebar_mask.addEventListener(r,function(e){t.$body.className=t.$body.className.replace(n,""),t.$sidebar_mask.style.display="none",e.preventDefault()},!1),e.addEventListener("resize",function(){t.$body.className=t.$body.className.replace(n,""),t.$sidebar_mask.style.display="none"},!1)},h.bindEvent(),e.addEventListener("load",p),e.addEventListener("scroll",p),e.addEventListener("resize",p);var v={$code:t.querySelectorAll("pre code"),hasClass:function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){v.hasClass(e,t)||(e.className+=" "+t)},removeClass:function(e,t){v.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," "))}};v.stringHash=function(e){var t="";return e.index>1&&(t+=e.index+"-"),t+="L"+e.start,e.end&&e.end>e.start&&(t+="-L"+e.end),t},v.parseHash=function(){var e=location.hash.substr(1).match(/((\d+)-)?L(\d+)(-L(\d+))?/);return e?{index:parseInt(e[2],10)||1,start:parseInt(e[3],10)||1,end:parseInt(e[5],10)||parseInt(e[3],10)||1}:null},v.mark=function(e){var t=v.parseHash();if(!t||!v.$code||!v.$code[t.index-1])return;var n=v.$code[t.index-1].querySelectorAll("li");for(var r=t.start-1;r<t.end;r++)n[r]&&v.addClass(n[r],"mark");e&&n&&n[0]&&setTimeout(function(){window.scrollTo(0,s(n[0]).top-50)})},v.removeMark=function(){[].slice.call(t.querySelectorAll("pre code li.mark")).forEach(function(e){v.removeClass(e,"mark")})},v.init=function(){[].slice.call(v.$code).forEach(function(e,t){var n=e.innerHTML.trim().split(/[\r\n]+/),r=n.map(function(e,t){return'<li><span class="line-num" data-line="'+(t+1)+'"></span>'+e+"</li>"}).join("");r="<ul>"+r+"</ul>",n.length>3&&e.className.match(/lang-(\w+)/)&&RegExp.$1!=="undefined"&&(r+='<b class="name">'+RegExp.$1+"</b>"),e.innerHTML=r,v.addClass(e,"firekylin-code"),e.addEventListener("click",function(e){if(!e.target||!v.hasClass(e.target,"line-num"))return;if(e.shiftKey){var n=v.parseHash();n.newIndex=t+1,n.current=e.target.getAttribute("data-line"),n.index!==n.newIndex-0?(n.index=n.newIndex,n.start=n.current,n.end=0):n.current>n.start?n.end=n.current:(n.end=n.start,n.start=n.current),location.hash=v.stringHash(n)}else location.hash=v.stringHash({index:t+1,start:e.target.getAttribute("data-line")})})})},v.init(),e.addEventListener("load",function(){v.mark(!0)}),e.addEventListener("hashchange",function(){v.removeMark(),v.mark()})})(window,document)