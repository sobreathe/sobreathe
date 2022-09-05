"use strict";(self.webpackChunkso_breathe=self.webpackChunkso_breathe||[]).push([[342],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{L:function(){return m},M:function(){return A},P:function(){return w},S:function(){return W},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return c},h:function(){return l}});var a=r(7294),n=(r(72),r(5697)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function c(e,t,r,a,n,i,s,l){var u={};i&&(u.backgroundColor=i,"fixed"===r?(u.width=a,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c}var d,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,u=e.shouldLoad,c=s(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:l}))},b=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,u=s(e,h),c=u.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,o({},u,t,{sizes:c,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:c})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,r=s(e,v);return t?a.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=b.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var A=function(e){return a.createElement(a.Fragment,null,a.createElement(b,o({},e)),a.createElement("noscript",null,a.createElement(b,o({},e,{shouldLoad:!0}))))};A.displayName="MainImage",A.propTypes=b.propTypes;var E,C,L=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],T=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,u=e.style,c=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=s(e,S),y=i.width,b=i.height,v=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(y,b,v),A=w.style,L=w.className,k=s(w,x),O=(0,a.useRef)(),I=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var N=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,y,b);return(0,a.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=O.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(I)):C&&T.has(I)?void 0:(E.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;O.current&&(O.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(I),image:i},h)),T.has(I)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,I,T,u,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){T.has(I)&&C&&(O.current.innerHTML=C(o({isLoading:T.has(I),isLoaded:T.has(I),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},k,{style:o({},A,u,{backgroundColor:c}),className:L+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));I.propTypes=k,I.displayName="GatsbyImage";var N,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:L,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},W=(N=I,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),r?a.createElement(N,o({image:r},i)):(console.warn("Image not loaded",t),null)});W.displayName="StaticImage",W.propTypes=R},9357:function(e,t,r){var a=r(7294),n=r(1597);t.Z=function(e){var t=e.title,r=(0,n.useStaticQuery)("3159585216");return a.createElement("title",null,t," | ",r.site.siteMetadata.title)}},8665:function(e,t,r){r.d(t,{$2:function(){return l},Cn:function(){return s},DA:function(){return c},G2:function(){return d},Ju:function(){return g},T0:function(){return a},Xm:function(){return o},bT:function(){return m},dk:function(){return u},nC:function(){return i},rP:function(){return p},vT:function(){return n}});var a="layout-module--column-one--DHtqa",n="layout-module--column-two--og9k6",i="layout-module--container--eLBMS",o="layout-module--emphasized-text--tnny7",s="layout-module--footer-copyright-text--96QMx",l="layout-module--footer-link-text--EJiRk",u="layout-module--footer-links--+pjPY",c="layout-module--form-email--fvjhC",d="layout-module--form-submit-button--1SYL0",p="layout-module--hero--OVJey",g="layout-module--hero-wrapper--THHUr",m="layout-module--mc-form--i6C8D"},3016:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVQY03VQTSuFYRQ8ZSGKsPLyPDNzzvvc3o27krq5dX+B+AHKhrK1kJSvnVuUBZKNkr3yE/VcV9mYmmZmM6c5ZmYW69FrgU2bQhJTSnO/meRSpOib2Yz9A5KrExPk+Wj0clNi4xnAci1y8EtZuw4/Ijn48XwP6diBwzbrIIDhNO8HdBvQWyvtWUDjwfb4vkT/KaW00nXdQkBXAT04eVcPTgrJRwdfHb7j0Keg0yA/AroO6CygSycvrJYEeeLJt/5ObppmPue8VkqZrb4HRNVKAE1VkiqlLNZc31L5DQfsLMnY1QZBAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/b44f7489843cb285b1542acfe023eb16/c160d/logo.svg","srcSet":"/static/b44f7489843cb285b1542acfe023eb16/7d86e/logo.svg 40w,\\n/static/b44f7489843cb285b1542acfe023eb16/eb2b1/logo.svg 80w,\\n/static/b44f7489843cb285b1542acfe023eb16/c160d/logo.svg 160w","sizes":"(min-width: 160px) 160px, 100vw"},"sources":[{"srcSet":"/static/b44f7489843cb285b1542acfe023eb16/21f0e/logo.webp 40w,\\n/static/b44f7489843cb285b1542acfe023eb16/ddf74/logo.webp 80w,\\n/static/b44f7489843cb285b1542acfe023eb16/4a46a/logo.webp 160w","type":"image/webp","sizes":"(min-width: 160px) 160px, 100vw"}]},"width":160,"height":28}')}}]);
//# sourceMappingURL=c83c3717456fcee15f95433ab38c5697281869c0-141acb08c8e7bb12fc2e.js.map