(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9523],{40228:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var r=n(1413),o=n(97685),i=n(91),a=n(2788),u=n(94184),s=n.n(u),c=n(48555),l=n(34203),f=n(27571),d=n(66680),h=n(7028),p=n(8410),v=n(31131),m=n(67294),g=n(87462),b=n(82225),y=n(42550);function w(e){var t=e.prefixCls,n=e.align,r=e.arrow,o=e.arrowPos,i=r||{},a=i.className,u=i.content,c=o.x,l=o.y,f=m.useRef();if(!n||!n.points)return null;var d={position:"absolute"};if(!1!==n.autoArrow){var h=n.points[0],p=n.points[1],v=h[0],g=h[1],b=p[0],y=p[1];v!==b&&["t","b"].includes(v)?"t"===v?d.top=0:d.bottom=0:d.top=void 0===l?0:l,g!==y&&["l","r"].includes(g)?"l"===g?d.left=0:d.right=0:d.left=void 0===c?0:c}return m.createElement("div",{ref:f,className:s()("".concat(t,"-arrow"),a),style:d},u)}function _(e){var t=e.prefixCls,n=e.open,r=e.zIndex,o=e.mask,i=e.motion;return o?m.createElement(b.default,(0,g.Z)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),function(e){var n=e.className;return m.createElement("div",{style:{zIndex:r},className:s()("".concat(t,"-mask"),n)})}):null}var E=m.memo(function(e){return e.children},function(e,t){return t.cache}),x=m.forwardRef(function(e,t){var n=e.popup,i=e.className,a=e.prefixCls,u=e.style,l=e.target,f=e.onVisibleChanged,d=e.open,h=e.keepDom,v=e.fresh,x=e.onClick,M=e.mask,k=e.arrow,Z=e.arrowPos,C=e.align,R=e.motion,O=e.maskMotion,A=e.forceRender,P=e.getPopupContainer,S=e.autoDestroy,L=e.portal,z=e.zIndex,N=e.onMouseEnter,D=e.onMouseLeave,T=e.onPointerEnter,B=e.ready,H=e.offsetX,W=e.offsetY,j=e.offsetR,V=e.offsetB,Y=e.onAlign,F=e.onPrepare,I=e.stretch,X=e.targetWidth,q=e.targetHeight,G="function"==typeof n?n():n,U=(null==P?void 0:P.length)>0,J=m.useState(!P||!U),Q=(0,o.Z)(J,2),$=Q[0],K=Q[1];if((0,p.Z)(function(){!$&&U&&l&&K(!0)},[$,U,l]),!$)return null;var ee="auto",et={left:"-1000vw",top:"-1000vh",right:ee,bottom:ee};if(B||!d){var en,er=C.points,eo=C.dynamicInset||(null===(en=C._experimental)||void 0===en?void 0:en.dynamicInset),ei=eo&&"r"===er[0][1],ea=eo&&"b"===er[0][0];ei?(et.right=j,et.left=ee):(et.left=H,et.right=ee),ea?(et.bottom=V,et.top=ee):(et.top=W,et.bottom=ee)}var eu={};return I&&(I.includes("height")&&q?eu.height=q:I.includes("minHeight")&&q&&(eu.minHeight=q),I.includes("width")&&X?eu.width=X:I.includes("minWidth")&&X&&(eu.minWidth=X)),d||(eu.pointerEvents="none"),m.createElement(L,{open:A||d||h,getContainer:P&&function(){return P(l)},autoDestroy:S},m.createElement(_,{prefixCls:a,open:d,zIndex:z,mask:M,motion:O}),m.createElement(c.default,{onResize:Y,disabled:!d},function(e){return m.createElement(b.default,(0,g.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:A,leavedClassName:"".concat(a,"-hidden")},R,{onAppearPrepare:F,onEnterPrepare:F,visible:d,onVisibleChanged:function(e){var t;null==R||null===(t=R.onVisibleChanged)||void 0===t||t.call(R,e),f(e)}}),function(n,o){var c=n.className,l=n.style,f=s()(a,c,i);return m.createElement("div",{ref:(0,y.sQ)(e,t,o),className:f,style:(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({"--arrow-x":"".concat(Z.x||0,"px"),"--arrow-y":"".concat(Z.y||0,"px")},et),eu),l),{},{boxSizing:"border-box",zIndex:z},u),onMouseEnter:N,onMouseLeave:D,onPointerEnter:T,onClick:x},k&&m.createElement(w,{prefixCls:a,arrow:k,arrowPos:Z,align:C}),m.createElement(E,{cache:!d&&!v},G))})}))}),M=m.forwardRef(function(e,t){var n=e.children,r=e.getTriggerDOMNode,o=(0,y.Yr)(n),i=m.useCallback(function(e){(0,y.mH)(t,r?r(e):e)},[r]),a=(0,y.x1)(i,n.ref);return o?m.cloneElement(n,{ref:a}):n}),k=m.createContext(null);function Z(e){return e?Array.isArray(e)?e:[e]:[]}var C=n(5110);function R(e,t,n,r){return t||(n?{motionName:"".concat(e,"-").concat(n)}:r?{motionName:r}:null)}function O(e){return e.ownerDocument.defaultView}function A(e){for(var t=[],n=null==e?void 0:e.parentElement,r=["hidden","scroll","clip","auto"];n;){var o=O(n).getComputedStyle(n);[o.overflowX,o.overflowY,o.overflow].some(function(e){return r.includes(e)})&&t.push(n),n=n.parentElement}return t}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function S(e){return P(parseFloat(e),0)}function L(e,t){var n=(0,r.Z)({},e);return(t||[]).forEach(function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=O(e).getComputedStyle(e),r=t.overflow,o=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,u=t.borderLeftWidth,s=t.borderRightWidth,c=e.getBoundingClientRect(),l=e.offsetHeight,f=e.clientHeight,d=e.offsetWidth,h=e.clientWidth,p=S(i),v=S(a),m=S(u),g=S(s),b=P(Math.round(c.width/d*1e3)/1e3),y=P(Math.round(c.height/l*1e3)/1e3),w=p*y,_=m*b,E=0,x=0;if("clip"===r){var M=S(o);E=M*b,x=M*y}var k=c.x+_-E,Z=c.y+w-x,C=k+c.width+2*E-_-g*b-(d-h-m-g)*b,R=Z+c.height+2*x-w-v*y-(l-f-p-v)*y;n.left=Math.max(n.left,k),n.top=Math.max(n.top,Z),n.right=Math.min(n.right,C),n.bottom=Math.min(n.bottom,R)}}),n}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="".concat(t),r=n.match(/^(.*)\%$/);return r?e*(parseFloat(r[1])/100):parseFloat(n)}function N(e,t){var n=(0,o.Z)(t||[],2),r=n[0],i=n[1];return[z(e.width,r),z(e.height,i)]}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function T(e,t){var n,r=t[0],o=t[1];return n="t"===r?e.y:"b"===r?e.y+e.height:e.y+e.height/2,{x:"l"===o?e.x:"r"===o?e.x+e.width:e.x+e.width/2,y:n}}function B(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map(function(e,r){return r===t?n[e]||"c":e}).join("")}var H=n(74902);n(80334);var W=n(75164),j=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"],V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Z;return m.forwardRef(function(t,n){var a,u,g,b,y,w,_,E,S,z,V,Y,F,I,X,q,G,U=t.prefixCls,J=void 0===U?"rc-trigger-popup":U,Q=t.children,$=t.action,K=t.showAction,ee=t.hideAction,et=t.popupVisible,en=t.defaultPopupVisible,er=t.onPopupVisibleChange,eo=t.afterPopupVisibleChange,ei=t.mouseEnterDelay,ea=t.mouseLeaveDelay,eu=void 0===ea?.1:ea,es=t.focusDelay,ec=t.blurDelay,el=t.mask,ef=t.maskClosable,ed=t.getPopupContainer,eh=t.forceRender,ep=t.autoDestroy,ev=t.destroyPopupOnHide,em=t.popup,eg=t.popupClassName,eb=t.popupStyle,ey=t.popupPlacement,ew=t.builtinPlacements,e_=void 0===ew?{}:ew,eE=t.popupAlign,ex=t.zIndex,eM=t.stretch,ek=t.getPopupClassNameFromAlign,eZ=t.fresh,eC=t.alignPoint,eR=t.onPopupClick,eO=t.onPopupAlign,eA=t.arrow,eP=t.popupMotion,eS=t.maskMotion,eL=t.popupTransitionName,ez=t.popupAnimation,eN=t.maskTransitionName,eD=t.maskAnimation,eT=t.className,eB=t.getTriggerDOMNode,eH=(0,i.Z)(t,j),eW=m.useState(!1),ej=(0,o.Z)(eW,2),eV=ej[0],eY=ej[1];(0,p.Z)(function(){eY((0,v.Z)())},[]);var eF=m.useRef({}),eI=m.useContext(k),eX=m.useMemo(function(){return{registerSubPopup:function(e,t){eF.current[e]=t,null==eI||eI.registerSubPopup(e,t)}}},[eI]),eq=(0,h.Z)(),eG=m.useState(null),eU=(0,o.Z)(eG,2),eJ=eU[0],eQ=eU[1],e$=(0,d.Z)(function(e){(0,l.S)(e)&&eJ!==e&&eQ(e),null==eI||eI.registerSubPopup(eq,e)}),eK=m.useState(null),e0=(0,o.Z)(eK,2),e1=e0[0],e2=e0[1],e3=m.useRef(null),e5=(0,d.Z)(function(e){(0,l.S)(e)&&e1!==e&&(e2(e),e3.current=e)}),e4=m.Children.only(Q),e8=(null==e4?void 0:e4.props)||{},e7={},e6=(0,d.Z)(function(e){var t,n;return(null==e1?void 0:e1.contains(e))||(null===(t=(0,f.A)(e1))||void 0===t?void 0:t.host)===e||e===e1||(null==eJ?void 0:eJ.contains(e))||(null===(n=(0,f.A)(eJ))||void 0===n?void 0:n.host)===e||e===eJ||Object.values(eF.current).some(function(t){return(null==t?void 0:t.contains(e))||e===t})}),e9=R(J,eP,ez,eL),te=R(J,eS,eD,eN),tt=m.useState(en||!1),tn=(0,o.Z)(tt,2),tr=tn[0],to=tn[1],ti=null!=et?et:tr,ta=(0,d.Z)(function(e){void 0===et&&to(e)});(0,p.Z)(function(){to(et||!1)},[et]);var tu=m.useRef(ti);tu.current=ti;var ts=m.useRef([]);ts.current=[];var tc=(0,d.Z)(function(e){var t;ta(e),(null!==(t=ts.current[ts.current.length-1])&&void 0!==t?t:ti)!==e&&(ts.current.push(e),null==er||er(e))}),tl=m.useRef(),tf=function(){clearTimeout(tl.current)},td=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;tf(),0===t?tc(e):tl.current=setTimeout(function(){tc(e)},1e3*t)};m.useEffect(function(){return tf},[]);var th=m.useState(!1),tp=(0,o.Z)(th,2),tv=tp[0],tm=tp[1];(0,p.Z)(function(e){(!e||ti)&&tm(!0)},[ti]);var tg=m.useState(null),tb=(0,o.Z)(tg,2),ty=tb[0],tw=tb[1],t_=m.useState([0,0]),tE=(0,o.Z)(t_,2),tx=tE[0],tM=tE[1],tk=function(e){tM([e.clientX,e.clientY])},tZ=(a=eC?tx:e1,u=m.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:e_[ey]||{}}),b=(g=(0,o.Z)(u,2))[0],y=g[1],w=m.useRef(0),_=m.useMemo(function(){return eJ?A(eJ):[]},[eJ]),E=m.useRef({}),ti||(E.current={}),S=(0,d.Z)(function(){if(eJ&&a&&ti){var e,t,n,i,u,s,c,f=eJ.ownerDocument,d=O(eJ).getComputedStyle(eJ),h=d.width,p=d.height,v=d.position,m=eJ.style.left,g=eJ.style.top,b=eJ.style.right,w=eJ.style.bottom,x=eJ.style.overflow,M=(0,r.Z)((0,r.Z)({},e_[ey]),eE),k=f.createElement("div");if(null===(e=eJ.parentElement)||void 0===e||e.appendChild(k),k.style.left="".concat(eJ.offsetLeft,"px"),k.style.top="".concat(eJ.offsetTop,"px"),k.style.position=v,k.style.height="".concat(eJ.offsetHeight,"px"),k.style.width="".concat(eJ.offsetWidth,"px"),eJ.style.left="0",eJ.style.top="0",eJ.style.right="auto",eJ.style.bottom="auto",eJ.style.overflow="hidden",Array.isArray(a))n={x:a[0],y:a[1],width:0,height:0};else{var Z=a.getBoundingClientRect();n={x:Z.x,y:Z.y,width:Z.width,height:Z.height}}var R=eJ.getBoundingClientRect(),A=f.documentElement,S=A.clientWidth,z=A.clientHeight,H=A.scrollWidth,W=A.scrollHeight,j=A.scrollTop,V=A.scrollLeft,Y=R.height,F=R.width,I=n.height,X=n.width,q=M.htmlRegion,G="visible",U="visibleFirst";"scroll"!==q&&q!==U&&(q=G);var J=q===U,Q=L({left:-V,top:-j,right:H-V,bottom:W-j},_),$=L({left:0,top:0,right:S,bottom:z},_),K=q===G?$:Q,ee=J?$:K;eJ.style.left="auto",eJ.style.top="auto",eJ.style.right="0",eJ.style.bottom="0";var et=eJ.getBoundingClientRect();eJ.style.left=m,eJ.style.top=g,eJ.style.right=b,eJ.style.bottom=w,eJ.style.overflow=x,null===(t=eJ.parentElement)||void 0===t||t.removeChild(k);var en=P(Math.round(F/parseFloat(h)*1e3)/1e3),er=P(Math.round(Y/parseFloat(p)*1e3)/1e3);if(!(0===en||0===er||(0,l.S)(a)&&!(0,C.Z)(a))){var eo=M.offset,ei=M.targetOffset,ea=N(R,eo),eu=(0,o.Z)(ea,2),es=eu[0],ec=eu[1],el=N(n,ei),ef=(0,o.Z)(el,2),ed=ef[0],eh=ef[1];n.x-=ed,n.y-=eh;var ep=M.points||[],ev=(0,o.Z)(ep,2),em=ev[0],eg=D(ev[1]),eb=D(em),ew=T(n,eg),ex=T(R,eb),eM=(0,r.Z)({},M),ek=ew.x-ex.x+es,eZ=ew.y-ex.y+ec,eC=tt(ek,eZ),eR=tt(ek,eZ,$),eA=T(n,["t","l"]),eP=T(R,["t","l"]),eS=T(n,["b","r"]),eL=T(R,["b","r"]),ez=M.overflow||{},eN=ez.adjustX,eD=ez.adjustY,eT=ez.shiftX,eB=ez.shiftY,eH=function(e){return"boolean"==typeof e?e:e>=0};tn();var eW=eH(eD),ej=eb[0]===eg[0];if(eW&&"t"===eb[0]&&(u>ee.bottom||E.current.bt)){var eV=eZ;ej?eV-=Y-I:eV=eA.y-eL.y-ec;var eY=tt(ek,eV),eF=tt(ek,eV,$);eY>eC||eY===eC&&(!J||eF>=eR)?(E.current.bt=!0,eZ=eV,ec=-ec,eM.points=[B(eb,0),B(eg,0)]):E.current.bt=!1}if(eW&&"b"===eb[0]&&(i<ee.top||E.current.tb)){var eI=eZ;ej?eI+=Y-I:eI=eS.y-eP.y-ec;var eX=tt(ek,eI),eq=tt(ek,eI,$);eX>eC||eX===eC&&(!J||eq>=eR)?(E.current.tb=!0,eZ=eI,ec=-ec,eM.points=[B(eb,0),B(eg,0)]):E.current.tb=!1}var eG=eH(eN),eU=eb[1]===eg[1];if(eG&&"l"===eb[1]&&(c>ee.right||E.current.rl)){var eQ=ek;eU?eQ-=F-X:eQ=eA.x-eL.x-es;var e$=tt(eQ,eZ),eK=tt(eQ,eZ,$);e$>eC||e$===eC&&(!J||eK>=eR)?(E.current.rl=!0,ek=eQ,es=-es,eM.points=[B(eb,1),B(eg,1)]):E.current.rl=!1}if(eG&&"r"===eb[1]&&(s<ee.left||E.current.lr)){var e0=ek;eU?e0+=F-X:e0=eS.x-eP.x-es;var e1=tt(e0,eZ),e2=tt(e0,eZ,$);e1>eC||e1===eC&&(!J||e2>=eR)?(E.current.lr=!0,ek=e0,es=-es,eM.points=[B(eb,1),B(eg,1)]):E.current.lr=!1}tn();var e3=!0===eT?0:eT;"number"==typeof e3&&(s<$.left&&(ek-=s-$.left-es,n.x+X<$.left+e3&&(ek+=n.x-$.left+X-e3)),c>$.right&&(ek-=c-$.right-es,n.x>$.right-e3&&(ek+=n.x-$.right+e3)));var e5=!0===eB?0:eB;"number"==typeof e5&&(i<$.top&&(eZ-=i-$.top-ec,n.y+I<$.top+e5&&(eZ+=n.y-$.top+I-e5)),u>$.bottom&&(eZ-=u-$.bottom-ec,n.y>$.bottom-e5&&(eZ+=n.y-$.bottom+e5)));var e4=R.x+ek,e8=R.y+eZ,e7=n.x,e6=n.y;null==eO||eO(eJ,eM);var e9=et.right-R.x-(ek+R.width),te=et.bottom-R.y-(eZ+R.height);y({ready:!0,offsetX:ek/en,offsetY:eZ/er,offsetR:e9/en,offsetB:te/er,arrowX:((Math.max(e4,e7)+Math.min(e4+F,e7+X))/2-e4)/en,arrowY:((Math.max(e8,e6)+Math.min(e8+Y,e6+I))/2-e8)/er,scaleX:en,scaleY:er,align:eM})}function tt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,r=R.x+e,o=R.y+t,i=Math.max(r,n.left),a=Math.max(o,n.top);return Math.max(0,(Math.min(r+F,n.right)-i)*(Math.min(o+Y,n.bottom)-a))}function tn(){u=(i=R.y+eZ)+Y,c=(s=R.x+ek)+F}}}),z=function(){y(function(e){return(0,r.Z)((0,r.Z)({},e),{},{ready:!1})})},(0,p.Z)(z,[ey]),(0,p.Z)(function(){ti||z()},[ti]),[b.ready,b.offsetX,b.offsetY,b.offsetR,b.offsetB,b.arrowX,b.arrowY,b.scaleX,b.scaleY,b.align,function(){w.current+=1;var e=w.current;Promise.resolve().then(function(){w.current===e&&S()})}]),tC=(0,o.Z)(tZ,11),tR=tC[0],tO=tC[1],tA=tC[2],tP=tC[3],tS=tC[4],tL=tC[5],tz=tC[6],tN=tC[7],tD=tC[8],tT=tC[9],tB=tC[10],tH=(V=void 0===$?"hover":$,m.useMemo(function(){var e=Z(null!=K?K:V),t=Z(null!=ee?ee:V),n=new Set(e),r=new Set(t);return eV&&(n.has("hover")&&(n.delete("hover"),n.add("click")),r.has("hover")&&(r.delete("hover"),r.add("click"))),[n,r]},[eV,V,K,ee])),tW=(0,o.Z)(tH,2),tj=tW[0],tV=tW[1],tY=tj.has("click"),tF=tV.has("click")||tV.has("contextMenu"),tI=(0,d.Z)(function(){tv||tB()});Y=function(){tu.current&&eC&&tF&&td(!1)},(0,p.Z)(function(){if(ti&&e1&&eJ){var e=A(e1),t=A(eJ),n=O(eJ),r=new Set([n].concat((0,H.Z)(e),(0,H.Z)(t)));function o(){tI(),Y()}return r.forEach(function(e){e.addEventListener("scroll",o,{passive:!0})}),n.addEventListener("resize",o,{passive:!0}),tI(),function(){r.forEach(function(e){e.removeEventListener("scroll",o),n.removeEventListener("resize",o)})}}},[ti,e1,eJ]),(0,p.Z)(function(){tI()},[tx,ey]),(0,p.Z)(function(){ti&&!(null!=e_&&e_[ey])&&tI()},[JSON.stringify(eE)]);var tX=m.useMemo(function(){var e=function(e,t,n,r){for(var o=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var u,s=i[a];if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}(null===(u=e[s])||void 0===u?void 0:u.points,o,r))return"".concat(t,"-placement-").concat(s)}return""}(e_,J,tT,eC);return s()(e,null==ek?void 0:ek(tT))},[tT,ek,e_,J,eC]);m.useImperativeHandle(n,function(){return{nativeElement:e3.current,forceAlign:tI}});var tq=m.useState(0),tG=(0,o.Z)(tq,2),tU=tG[0],tJ=tG[1],tQ=m.useState(0),t$=(0,o.Z)(tQ,2),tK=t$[0],t0=t$[1],t1=function(){if(eM&&e1){var e=e1.getBoundingClientRect();tJ(e.width),t0(e.height)}};function t2(e,t,n,r){e7[e]=function(o){var i;null==r||r(o),td(t,n);for(var a=arguments.length,u=Array(a>1?a-1:0),s=1;s<a;s++)u[s-1]=arguments[s];null===(i=e8[e])||void 0===i||i.call.apply(i,[e8,o].concat(u))}}(0,p.Z)(function(){ty&&(tB(),ty(),tw(null))},[ty]),(tY||tF)&&(e7.onClick=function(e){var t;tu.current&&tF?td(!1):!tu.current&&tY&&(tk(e),td(!0));for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];null===(t=e8.onClick)||void 0===t||t.call.apply(t,[e8,e].concat(r))}),F=void 0===ef||ef,I=m.useRef(ti),X=m.useRef(!1),I.current!==ti&&(X.current=!0,I.current=ti),m.useEffect(function(){var e=(0,W.Z)(function(){X.current=!1});return function(){W.Z.cancel(e)}},[ti]),m.useEffect(function(){if(tF&&eJ&&(!el||F)){var e=function(){var e=!1;return[function(t){e=e6(t.target)},function(t){var n=t.target;X.current||!I.current||e||e6(n)||td(!1)}]},t=e(),n=(0,o.Z)(t,2),r=n[0],i=n[1],a=e(),u=(0,o.Z)(a,2),s=u[0],c=u[1],l=O(eJ);l.addEventListener("mousedown",r,!0),l.addEventListener("click",i,!0),l.addEventListener("contextmenu",i,!0);var d=(0,f.A)(e1);return d&&(d.addEventListener("mousedown",s,!0),d.addEventListener("click",c,!0),d.addEventListener("contextmenu",c,!0)),function(){l.removeEventListener("mousedown",r,!0),l.removeEventListener("click",i,!0),l.removeEventListener("contextmenu",i,!0),d&&(d.removeEventListener("mousedown",s,!0),d.removeEventListener("click",c,!0),d.removeEventListener("contextmenu",c,!0))}}},[tF,e1,eJ,el,F]);var t3=tj.has("hover"),t5=tV.has("hover");t3&&(t2("onMouseEnter",!0,ei,function(e){tk(e)}),t2("onPointerEnter",!0,ei,function(e){tk(e)}),q=function(){(ti||tv)&&td(!0,ei)},eC&&(e7.onMouseMove=function(e){var t;null===(t=e8.onMouseMove)||void 0===t||t.call(e8,e)})),t5&&(t2("onMouseLeave",!1,eu),t2("onPointerLeave",!1,eu),G=function(){td(!1,eu)}),tj.has("focus")&&t2("onFocus",!0,es),tV.has("focus")&&t2("onBlur",!1,ec),tj.has("contextMenu")&&(e7.onContextMenu=function(e){var t;tu.current&&tV.has("contextMenu")?td(!1):(tk(e),td(!0)),e.preventDefault();for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];null===(t=e8.onContextMenu)||void 0===t||t.call.apply(t,[e8,e].concat(r))}),eT&&(e7.className=s()(e8.className,eT));var t4=(0,r.Z)((0,r.Z)({},e8),e7),t8={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(function(e){eH[e]&&(t8[e]=function(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];null===(t=t4[e])||void 0===t||t.call.apply(t,[t4].concat(r)),eH[e].apply(eH,r)})});var t7=m.cloneElement(e4,(0,r.Z)((0,r.Z)({},t4),t8)),t6=eA?(0,r.Z)({},!0!==eA?eA:{}):null;return m.createElement(m.Fragment,null,m.createElement(c.default,{disabled:!ti,ref:e5,onResize:function(){t1(),tI()}},m.createElement(M,{getTriggerDOMNode:eB},t7)),m.createElement(k.Provider,{value:eX},m.createElement(x,{portal:e,ref:e$,prefixCls:J,popup:em,className:s()(eg,tX),style:eb,target:e1,onMouseEnter:q,onMouseLeave:G,onPointerEnter:q,zIndex:ex,open:ti,keepDom:tv,fresh:eZ,onClick:eR,mask:el,motion:e9,maskMotion:te,onVisibleChanged:function(e){tm(!1),tB(),null==eo||eo(e)},onPrepare:function(){return new Promise(function(e){t1(),tw(function(){return e})})},forceRender:eh,autoDestroy:ep||ev||!1,getPopupContainer:ed,align:tT,arrow:t6,arrowPos:{x:tL,y:tz},ready:tR,offsetX:tO,offsetY:tA,offsetR:tP,offsetB:tS,onAlign:tI,stretch:eM,targetWidth:tU/tN,targetHeight:tK/tD})))})}(a.Z)},48555:function(e,t,n){"use strict";n.r(t),n.d(t,{_rs:function(){return p},default:function(){return E}});var r=n(87462),o=n(67294),i=n(50344);n(80334);var a=n(1413),u=n(71002),s=n(34203),c=n(42550),l=o.createContext(null),f=n(91033),d=new Map,h=new f.default(function(e){e.forEach(function(e){var t,n=e.target;null===(t=d.get(n))||void 0===t||t.forEach(function(e){return e(n)})})}),p=null,v=n(15671),m=n(43144),g=n(32531),b=n(73568),y=function(e){(0,g.Z)(n,e);var t=(0,b.Z)(n);function n(){return(0,v.Z)(this,n),t.apply(this,arguments)}return(0,m.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(o.Component),w=o.forwardRef(function(e,t){var n=e.children,r=e.disabled,i=o.useRef(null),f=o.useRef(null),p=o.useContext(l),v="function"==typeof n,m=v?n(i):n,g=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!v&&o.isValidElement(m)&&(0,c.Yr)(m),w=b?m.ref:null,_=(0,c.x1)(w,i),E=function(){var e;return(0,s.Z)(i.current)||(i.current&&"object"===(0,u.Z)(i.current)?(0,s.Z)(null===(e=i.current)||void 0===e?void 0:e.nativeElement):null)||(0,s.Z)(f.current)};o.useImperativeHandle(t,function(){return E()});var x=o.useRef(e);x.current=e;var M=o.useCallback(function(e){var t=x.current,n=t.onResize,r=t.data,o=e.getBoundingClientRect(),i=o.width,u=o.height,s=e.offsetWidth,c=e.offsetHeight,l=Math.floor(i),f=Math.floor(u);if(g.current.width!==l||g.current.height!==f||g.current.offsetWidth!==s||g.current.offsetHeight!==c){var d={width:l,height:f,offsetWidth:s,offsetHeight:c};g.current=d;var h=s===Math.round(i)?i:s,v=c===Math.round(u)?u:c,m=(0,a.Z)((0,a.Z)({},d),{},{offsetWidth:h,offsetHeight:v});null==p||p(m,e,r),n&&Promise.resolve().then(function(){n(m,e)})}},[]);return o.useEffect(function(){var e=E();return e&&!r&&(d.has(e)||(d.set(e,new Set),h.observe(e)),d.get(e).add(M)),function(){d.has(e)&&(d.get(e).delete(M),d.get(e).size||(h.unobserve(e),d.delete(e)))}},[i.current,r]),o.createElement(y,{ref:f},b?o.cloneElement(m,{ref:_}):m)}),_=o.forwardRef(function(e,t){var n=e.children;return("function"==typeof n?[n]:(0,i.Z)(n)).map(function(n,i){var a=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return o.createElement(w,(0,r.Z)({},e,{key:a,ref:0===i?t:void 0}),n)})});_.Collection=function(e){var t=e.children,n=e.onBatchResize,r=o.useRef(0),i=o.useRef([]),a=o.useContext(l),u=o.useCallback(function(e,t,o){r.current+=1;var u=r.current;i.current.push({size:e,element:t,data:o}),Promise.resolve().then(function(){u===r.current&&(null==n||n(i.current),i.current=[])}),null==a||a(e,t,o)},[n,a]);return o.createElement(l.Provider,{value:u},t)};var E=_},5110:function(e,t){"use strict";t.Z=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,r=t.height;if(n||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1}},27571:function(e,t,n){"use strict";function r(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}function o(e){return r(e) instanceof ShadowRoot?r(e):null}n.d(t,{A:function(){return o}})},7028:function(e,t,n){"use strict";var r,o=n(97685),i=n(1413),a=n(67294),u=0,s=(0,i.Z)({},r||(r=n.t(a,2))).useId;t.Z=s?function(e){var t=s();return e||t}:function(e){var t=a.useState("ssr-id"),n=(0,o.Z)(t,2),r=n[0],i=n[1];return(a.useEffect(function(){var e=u;u+=1,i("rc_unique_".concat(e))},[]),e)?e:r}},31131:function(e,t){"use strict";t.Z=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==e?void 0:e.substr(0,4))}},18545:function(e,t,n){"use strict";var r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=o.useRef();return t.current=e,o.useCallback(function(){for(var e,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))},[])};var o=r(n(67294))},60869:function(e,t,n){"use strict";var r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t||{},r=n.defaultValue,c=n.value,l=n.onChange,f=n.postState,d=(0,u.default)(function(){return s(c)?c:s(r)?"function"==typeof r?r():r:"function"==typeof e?e():e}),h=(0,o.default)(d,2),p=h[0],v=h[1],m=void 0!==c?c:p,g=f?f(m):m,b=(0,i.default)(l),y=(0,u.default)([m]),w=(0,o.default)(y,2),_=w[0],E=w[1];return(0,a.useLayoutUpdateEffect)(function(){var e=_[0];p!==e&&b(p,e)},[_]),(0,a.useLayoutUpdateEffect)(function(){s(c)||v(c)},[c]),[g,(0,i.default)(function(e,t){v(e,t),E([m],t)})]};var o=r(n(27424)),i=r(n(18545)),a=n(82546),u=r(n(78423));function s(e){return void 0!==e}},78423:function(e,t,n){"use strict";var r=n(75263).default,o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.useRef(!1),n=a.useState(e),r=(0,i.default)(n,2),o=r[0],u=r[1];return a.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]),[o,function(e,n){n&&t.current||u(e)}]};var i=o(n(27424)),a=r(n(67294))},91033:function(e,t,n){"use strict";n.r(t);var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},u=["top","right","bottom","left","width","height","size","weight"],s="undefined"!=typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&s()}function u(){a(i)}function s(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(u,20);o=e}return s}(this.refresh.bind(this),0)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},d=m(0,0,0,0);function h(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+h(e["border-"+n+"-width"])},0)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"==typeof e.getBBox};function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var g=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=function(e){if(!o)return d;if(v(e)){var t;return m(0,0,(t=e.getBBox()).width,t.height)}return function(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return d;var r=f(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=h(i)}return t}(r),i=o.left+o.right,a=o.top+o.bottom,u=h(r.width),s=h(r.height);if("border-box"===r.boxSizing&&(Math.round(u+i)!==t&&(u-=p(r,"left","right")+i),Math.round(s+a)!==n&&(s-=p(r,"top","bottom")+a)),e!==f(e).document.documentElement){var c=Math.round(u+i)-t,l=Math.round(s+a)-n;1!==Math.abs(c)&&(u-=c),1!==Math.abs(l)&&(s-=l)}return m(o.left,o.top,u,s)}(e)}(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),b=function(e,t){var n,r,o,i,a,u=(n=t.x,r=t.y,o=t.width,i=t.height,l(a=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:o,height:i,top:r,right:n+o,bottom:i+r,left:n}),a);l(this,{target:e,contentRect:u})},y=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new g(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new b(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w="undefined"!=typeof WeakMap?new WeakMap:new r,_=function e(t){if(!(this instanceof e))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new y(t,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach(function(e){_.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}});var E=void 0!==i.ResizeObserver?i.ResizeObserver:_;t.default=E},16530:function(e){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},27424:function(e,t,n){var r=n(85372),o=n(16530),i=n(86116),a=n(12218);e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);