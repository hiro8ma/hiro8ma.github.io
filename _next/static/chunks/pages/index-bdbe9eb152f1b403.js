(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6437)}])},1210:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDomainLocale=function(e,n,t,r){return!1};("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&"undefined"===typeof n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},8418:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4941).Z;t(5753).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(2648).Z,u=t(7273).Z,a=o(t(7294)),c=t(6273),i=t(2725),l=t(3462),f=t(1018),s=t(7190),d=t(1210),p=t(8684),v={};function h(e,n,t,r){if(e&&c.isLocalURL(n)){Promise.resolve(e.prefetch(n,t,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[n+"%"+t+(o?"%"+o:"")]=!0}}var b=a.default.forwardRef((function(e,n){var t,o=e.href,b=e.as,y=e.children,g=e.prefetch,x=e.passHref,m=e.replace,j=e.shallow,O=e.scroll,_=e.locale,C=e.onClick,w=e.onMouseEnter,P=e.onTouchStart,k=e.legacyBehavior,M=void 0===k?!0!==Boolean(!1):k,L=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=y,!M||"string"!==typeof t&&"number"!==typeof t||(t=a.default.createElement("a",null,t));var E=!1!==g,Z=a.default.useContext(l.RouterContext),R=a.default.useContext(f.AppRouterContext);R&&(Z=R);var I,S=a.default.useMemo((function(){var e=r(c.resolveHref(Z,o,!0),2),n=e[0],t=e[1];return{href:n,as:b?c.resolveHref(Z,b):t||n}}),[Z,o,b]),N=S.href,T=S.as,D=a.default.useRef(N),B=a.default.useRef(T);M&&(I=a.default.Children.only(t));var U=M?I&&"object"===typeof I&&I.ref:n,A=r(s.useIntersection({rootMargin:"200px"}),3),G=A[0],H=A[1],K=A[2],z=a.default.useCallback((function(e){B.current===T&&D.current===N||(K(),B.current=T,D.current=N),G(e),U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[T,U,N,K,G]);a.default.useEffect((function(){var e=H&&E&&c.isLocalURL(N),n="undefined"!==typeof _?_:Z&&Z.locale,t=v[N+"%"+T+(n?"%"+n:"")];e&&!t&&h(Z,N,T,{locale:n})}),[T,N,H,_,E,Z]);var X={ref:z,onClick:function(e){M||"function"!==typeof C||C(e),M&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,i,l,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t)){e.preventDefault();var d=function(){"beforePopState"in n?n[o?"replace":"push"](t,r,{shallow:u,locale:l,scroll:i}):n[o?"replace":"push"](t,{forceOptimisticNavigation:!s})};f?a.default.startTransition(d):d()}}(e,Z,N,T,m,j,O,_,Boolean(R),E)},onMouseEnter:function(e){M||"function"!==typeof w||w(e),M&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),!E&&R||c.isLocalURL(N)&&h(Z,N,T,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof P||P(e),M&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),!E&&R||c.isLocalURL(N)&&h(Z,N,T,{priority:!0})}};if(!M||x||"a"===I.type&&!("href"in I.props)){var q="undefined"!==typeof _?_:Z&&Z.locale,F=Z&&Z.isLocaleDomain&&d.getDomainLocale(T,q,Z.locales,Z.domainLocales);X.href=F||p.addBasePath(i.addLocale(T,q,Z&&Z.defaultLocale))}return M?a.default.cloneElement(I,X):a.default.createElement("a",Object.assign({},L,X),t)}));n.default=b,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&"undefined"===typeof n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},7190:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4941).Z;Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!a,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],h=p[1];o.useEffect((function(){if(a){if(l||s)return;if(v&&v.tagName){var e=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===t.root&&e.margin===t.margin}));if(r&&(n=c.get(r)))return n;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return n={id:t,observer:u,elements:o},i.push(t),c.set(t,n),n}(t),o=r.id,u=r.observer,a=r.elements;return a.set(e,n),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),c.delete(o);var n=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&i.splice(n,1)}}}(v,(function(e){return e&&d(e)}),{root:null==n?void 0:n.current,rootMargin:t});return e}}else if(!s){var r=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(r)}}}),[v,l,t,n,s]);var b=o.useCallback((function(){d(!1)}),[]);return[h,s,b]};var o=t(7294),u=t(9311),a="function"===typeof IntersectionObserver,c=new Map,i=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&"undefined"===typeof n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},1018:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.TemplateContext=n.GlobalLayoutRouterContext=n.LayoutRouterContext=n.AppRouterContext=void 0;var r=(0,t(2648).Z)(t(7294)),o=r.default.createContext(null);n.AppRouterContext=o;var u=r.default.createContext(null);n.LayoutRouterContext=u;var a=r.default.createContext(null);n.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);n.TemplateContext=c},6437:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return E},default:function(){return Z}});var r=t(1799);function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=t(7297),c=t(5893),i=t(9008),l=t.n(i),f=t(1664),s=t.n(f),d=t(1163),p=t(9521);function v(){var e=(0,a.Z)(["\n      color: ",";\n      background-color: ",";\n      border: ",";\n    "]);return v=function(){return e},e}function h(){var e=(0,a.Z)(["\n  ","\n\n  border-radius: 12px;\n  font-size: 14px;\n  height: 38px;\n  line-height: 22px;\n  letter-spacing: 0;\n  cursor: pointer;\n  padding: 8px 16px;\n\n  &:focus {\n    outline: none;\n  }\n"]);return h=function(){return e},e}var b={primary:{color:"#ffffff",backgroundColor:"#1D3461",border:"none"},success:{color:"#ffffff",backgroundColor:"#5AB203",border:"none"},transparent:{color:"#111111",backgroundColor:"transparent",border:"1px solid black"}},y=p.ZP.button.withConfig({componentId:"sc-fb5ac261-0"})(h(),(function(e){var n=e.variant,t=b[n];return(0,p.iv)(v(),t.color,t.backgroundColor,t.border)}));function g(){var e=(0,a.Z)(["\n  color: #9057ff;\n"]);return g=function(){return e},e}function x(){var e=(0,a.Z)(["\n  color: #4689ff;\n"]);return x=function(){return e},e}function m(){var e=(0,a.Z)(["\n  color: ",";\n"]);return m=function(){return e},e}function j(){var e=(0,a.Z)(["\n  padding: 8px 16px;\n  margin: 10px;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  background: #4689ff;\n  border-radius: 16px;\n"]);return j=function(){return e},e}function O(){var e=(0,a.Z)(["\n  ","\n  font-weight: bold;\n"]);return O=function(){return e},e}function _(){var e=(0,a.Z)(["\n  padding: 8px 16px;\n  width: 200px;\n  border: 3px solid blue;\n  border-radius: 8px;\n"]);return _=function(){return e},e}var C=(0,p.ZP)((function(e){var n=e.className,t=e.children,a=u(e,["className","children"]);return(0,c.jsx)(s(),o((0,r.Z)({},a),{children:(0,c.jsx)("a",{className:n,children:t})}))})).withConfig({componentId:"sc-616aeda5-0"})(g()),w=(0,p.iv)(x()),P=p.ZP.h1.withConfig({componentId:"sc-616aeda5-1"})(m(),(function(e){return e.theme.colors.default})),k=p.ZP.span.withConfig({componentId:"sc-616aeda5-2"})(j(),(function(e){return e.theme.colors.white})),M=p.ZP.p.withConfig({componentId:"sc-616aeda5-3"})(O(),w),L=(0,p.ZP)(M).withConfig({componentId:"sc-616aeda5-4"})(_()),E=!0,Z=function(e){var n=e.message;return(0,d.useRouter)().isFallback?(0,c.jsx)("div",{children:"Loading..."}):(0,c.jsxs)("div",{children:[(0,c.jsxs)(l(),{children:[(0,c.jsx)("title",{children:"hiro8ma"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("main",{children:[(0,c.jsx)(P,{children:"hiro8ma"}),(0,c.jsx)(M,{children:(0,c.jsx)(C,{href:"https://github.com/hiro8ma",children:"Github"})}),(0,c.jsx)(L,{children:"hiro8ma@gmail.com"}),(0,c.jsx)(y,{variant:"success",children:"Send"}),(0,c.jsx)(k,{children:n})]})]})}},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);