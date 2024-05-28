(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="164",Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oc=0,ia=1,Dc=2,Bs=1,Uc=2,an=3,ln=0,Tt=1,qt=2,En=0,mi=1,ra=2,oa=3,aa=4,Fc=5,On=100,kc=101,Bc=102,zc=103,Vc=104,Gc=200,Hc=201,Wc=202,Xc=203,No=204,Oo=205,Yc=206,jc=207,qc=208,Kc=209,Zc=210,$c=211,Jc=212,Qc=213,el=214,tl=0,nl=1,il=2,Ar=3,rl=4,ol=5,al=6,sl=7,Ho=0,cl=1,ll=2,yn=0,ul=1,hl=2,fl=3,dl=4,pl=5,ml=6,gl=7,zs=300,vi=301,xi=302,Do=303,Uo=304,Nr=306,Un=1e3,Xt=1001,Fo=1002,Ct=1003,_l=1004,Ki=1005,Wt=1006,Jr=1007,Fn=1008,Sn=1009,vl=1010,xl=1011,Vs=1012,Gs=1013,Ei=1014,xn=1015,Or=1016,Hs=1017,Ws=1018,Wi=1020,El=35902,yl=1021,Sl=1022,Zt=1023,Tl=1024,Ml=1025,gi=1026,ki=1027,Al=1028,Xs=1029,Rl=1030,Ys=1031,js=1033,Qr=33776,eo=33777,to=33778,no=33779,sa=35840,ca=35841,la=35842,ua=35843,ha=36196,fa=37492,da=37496,pa=37808,ma=37809,ga=37810,_a=37811,va=37812,xa=37813,Ea=37814,ya=37815,Sa=37816,Ta=37817,Ma=37818,Aa=37819,Ra=37820,ba=37821,io=36492,Ca=36494,wa=36495,bl=36283,Pa=36284,La=36285,Ia=36286,Cl=3200,wl=3201,qs=0,Pl=1,vn="",Ut="srgb",An="srgb-linear",Wo="display-p3",Dr="display-p3-linear",Rr="linear",at="srgb",br="rec709",Cr="p3",jn=7680,Na=519,Ll=512,Il=513,Nl=514,Ks=515,Ol=516,Dl=517,Ul=518,Fl=519,Oa=35044,Da="300 es",cn=2e3,wr=2001;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ua=1234567;const Oi=Math.PI/180,Bi=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function Xo(n,e){return(n%e+e)%e}function kl(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Bl(n,e,t){return n!==e?(t-n)/(e-n):0}function Di(n,e,t){return(1-t)*n+t*e}function zl(n,e,t,i){return Di(n,e,1-Math.exp(-t*i))}function Vl(n,e=1){return e-Math.abs(Xo(n,e*2)-e)}function Gl(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hl(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wl(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xl(n,e){return n+Math.random()*(e-n)}function Yl(n){return n*(.5-Math.random())}function jl(n){n!==void 0&&(Ua=n);let e=Ua+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ql(n){return n*Oi}function Kl(n){return n*Bi}function Zl(n){return(n&n-1)===0&&n!==0}function $l(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ql(n,e,t,i,r){const o=Math.cos,s=Math.sin,c=o(t/2),l=s(t/2),a=o((e+i)/2),f=s((e+i)/2),d=o((e-i)/2),p=s((e-i)/2),m=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(c*f,l*d,l*p,c*a);break;case"YZY":n.set(l*p,c*f,l*d,c*a);break;case"ZXZ":n.set(l*d,l*p,c*f,c*a);break;case"XZX":n.set(c*f,l*g,l*m,c*a);break;case"YXY":n.set(l*m,c*f,l*g,c*a);break;case"ZYZ":n.set(l*g,l*m,c*f,c*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const eu={DEG2RAD:Oi,RAD2DEG:Bi,generateUUID:Si,clamp:St,euclideanModulo:Xo,mapLinear:kl,inverseLerp:Bl,lerp:Di,damp:zl,pingpong:Vl,smoothstep:Gl,smootherstep:Hl,randInt:Wl,randFloat:Xl,randFloatSpread:Yl,seededRandom:jl,degToRad:ql,radToDeg:Kl,isPowerOfTwo:Zl,ceilPowerOfTwo:$l,floorPowerOfTwo:Jl,setQuaternionFromProperEuler:Ql,normalize:At,denormalize:ui};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,o,s,c,l,a){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,c,l,a)}set(e,t,i,r,o,s,c,l,a){const f=this.elements;return f[0]=e,f[1]=r,f[2]=c,f[3]=t,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],c=i[3],l=i[6],a=i[1],f=i[4],d=i[7],p=i[2],m=i[5],g=i[8],_=r[0],u=r[3],h=r[6],E=r[1],x=r[4],v=r[7],L=r[2],b=r[5],R=r[8];return o[0]=s*_+c*E+l*L,o[3]=s*u+c*x+l*b,o[6]=s*h+c*v+l*R,o[1]=a*_+f*E+d*L,o[4]=a*u+f*x+d*b,o[7]=a*h+f*v+d*R,o[2]=p*_+m*E+g*L,o[5]=p*u+m*x+g*b,o[8]=p*h+m*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],c=e[5],l=e[6],a=e[7],f=e[8];return t*s*f-t*c*a-i*o*f+i*c*l+r*o*a-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],c=e[5],l=e[6],a=e[7],f=e[8],d=f*s-c*a,p=c*l-f*o,m=a*o-s*l,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*a-f*i)*_,e[2]=(c*i-r*s)*_,e[3]=p*_,e[4]=(f*t-r*l)*_,e[5]=(r*o-c*t)*_,e[6]=m*_,e[7]=(i*l-a*t)*_,e[8]=(s*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,c){const l=Math.cos(o),a=Math.sin(o);return this.set(i*l,i*a,-i*(l*s+a*c)+s+e,-r*a,r*l,-r*(-a*s+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ro.makeScale(e,t)),this}rotate(e){return this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new $e;function Zs(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tu(){const n=zi("canvas");return n.style.display="block",n}const Fa={};function nu(n){n in Fa||(Fa[n]=!0,console.warn(n))}const ka=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ba=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[An]:{transfer:Rr,primaries:br,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:at,primaries:br,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dr]:{transfer:Rr,primaries:Cr,toReference:n=>n.applyMatrix3(Ba),fromReference:n=>n.applyMatrix3(ka)},[Wo]:{transfer:at,primaries:Cr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ba),fromReference:n=>n.applyMatrix3(ka).convertLinearToSRGB()}},iu=new Set([An,Dr]),ot={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zi[e].toReference,r=Zi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zi[n].primaries},getTransfer:function(n){return n===vn?Rr:Zi[n].transfer}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qn;class ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=zi("canvas")),qn.width=e.width,qn.height=e.height;const i=qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_i(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ou=0;class $s{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,c=r.length;s<c;s++)r[s].isDataTexture?o.push(ao(r[s].image)):o.push(ao(r[s]))}else o=ao(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ru.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let au=0;class Mt extends zn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=Xt,r=Xt,o=Wt,s=Fn,c=Zt,l=Sn,a=Mt.DEFAULT_ANISOTROPY,f=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Si(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=a,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=zs;Mt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,a=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],u=l[6],h=l[10];if(Math.abs(f-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(f+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+u)<.1&&Math.abs(a+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(a+1)/2,v=(m+1)/2,L=(h+1)/2,b=(f+p)/4,R=(d+_)/4,k=(g+u)/4;return x>v&&x>L?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=b/i,o=R/i):v>L?v<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),i=b/r,o=k/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=R/o,r=k/o),this.set(i,r,o,t),this}let E=Math.sqrt((u-g)*(u-g)+(d-_)*(d-_)+(p-f)*(p-f));return Math.abs(E)<.001&&(E=1),this.x=(u-g)/E,this.y=(d-_)/E,this.z=(p-f)/E,this.w=Math.acos((a+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Mt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let c=0;c<s;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $s(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends su{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Js extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu extends Mt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,c){let l=i[r+0],a=i[r+1],f=i[r+2],d=i[r+3];const p=o[s+0],m=o[s+1],g=o[s+2],_=o[s+3];if(c===0){e[t+0]=l,e[t+1]=a,e[t+2]=f,e[t+3]=d;return}if(c===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==p||a!==m||f!==g){let u=1-c;const h=l*p+a*m+f*g+d*_,E=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const L=Math.sqrt(x),b=Math.atan2(L,h*E);u=Math.sin(u*b)/L,c=Math.sin(c*b)/L}const v=c*E;if(l=l*u+p*v,a=a*u+m*v,f=f*u+g*v,d=d*u+_*v,u===1-c){const L=1/Math.sqrt(l*l+a*a+f*f+d*d);l*=L,a*=L,f*=L,d*=L}}e[t]=l,e[t+1]=a,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const c=i[r],l=i[r+1],a=i[r+2],f=i[r+3],d=o[s],p=o[s+1],m=o[s+2],g=o[s+3];return e[t]=c*g+f*d+l*m-a*p,e[t+1]=l*g+f*p+a*d-c*m,e[t+2]=a*g+f*m+c*p-l*d,e[t+3]=f*g-c*d-l*p-a*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,o=e._z,s=e._order,c=Math.cos,l=Math.sin,a=c(i/2),f=c(r/2),d=c(o/2),p=l(i/2),m=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=p*f*d+a*m*g,this._y=a*m*d-p*f*g,this._z=a*f*g+p*m*d,this._w=a*f*d-p*m*g;break;case"YXZ":this._x=p*f*d+a*m*g,this._y=a*m*d-p*f*g,this._z=a*f*g-p*m*d,this._w=a*f*d+p*m*g;break;case"ZXY":this._x=p*f*d-a*m*g,this._y=a*m*d+p*f*g,this._z=a*f*g+p*m*d,this._w=a*f*d-p*m*g;break;case"ZYX":this._x=p*f*d-a*m*g,this._y=a*m*d+p*f*g,this._z=a*f*g-p*m*d,this._w=a*f*d+p*m*g;break;case"YZX":this._x=p*f*d+a*m*g,this._y=a*m*d+p*f*g,this._z=a*f*g-p*m*d,this._w=a*f*d-p*m*g;break;case"XZY":this._x=p*f*d-a*m*g,this._y=a*m*d-p*f*g,this._z=a*f*g+p*m*d,this._w=a*f*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],c=t[5],l=t[9],a=t[2],f=t[6],d=t[10],p=i+c+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-a)*m,this._z=(s-r)*m}else if(i>c&&i>d){const m=2*Math.sqrt(1+i-c-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+a)/m}else if(c>d){const m=2*Math.sqrt(1+c-i-d);this._w=(o-a)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-c);this._w=(s-r)/m,this._x=(o+a)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,c=t._x,l=t._y,a=t._z,f=t._w;return this._x=i*f+s*c+r*a-o*l,this._y=r*f+s*l+o*c-i*a,this._z=o*f+s*a+i*l-r*c,this._w=s*f-i*c-r*l-o*a,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let c=s*e._w+i*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-c*c;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const a=Math.sqrt(l),f=Math.atan2(a,c),d=Math.sin((1-t)*f)/a,p=Math.sin(t*f)/a;return this._w=s*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,c=e.z,l=e.w,a=2*(s*r-c*i),f=2*(c*t-o*r),d=2*(o*i-s*t);return this.x=t+l*a+s*d-c*f,this.y=i+l*f+c*a-o*d,this.z=r+l*d+o*f-s*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,c=t.y,l=t.z;return this.x=r*l-o*c,this.y=o*s-i*l,this.z=i*c-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new ee,za=new Tn;class Ti{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,c=o.count;s<c;s++)e.isMesh===!0?e.getVertexPosition(s,zt):zt.fromBufferAttribute(o,s),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$i.copy(i.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),Ji.subVectors(this.max,Ci),Kn.subVectors(e.a,Ci),Zn.subVectors(e.b,Ci),$n.subVectors(e.c,Ci),hn.subVectors(Zn,Kn),fn.subVectors($n,Zn),bn.subVectors(Kn,$n);let t=[0,-hn.z,hn.y,0,-fn.z,fn.y,0,-bn.z,bn.y,hn.z,0,-hn.x,fn.z,0,-fn.x,bn.z,0,-bn.x,-hn.y,hn.x,0,-fn.y,fn.x,0,-bn.y,bn.x,0];return!co(t,Kn,Zn,$n,Ji)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Kn,Zn,$n,Ji))?!1:(Qi.crossVectors(hn,fn),t=[Qi.x,Qi.y,Qi.z],co(t,Kn,Zn,$n,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],zt=new ee,$i=new Ti,Kn=new ee,Zn=new ee,$n=new ee,hn=new ee,fn=new ee,bn=new ee,Ci=new ee,Ji=new ee,Qi=new ee,Cn=new ee;function co(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Cn.fromArray(n,o);const c=r.x*Math.abs(Cn.x)+r.y*Math.abs(Cn.y)+r.z*Math.abs(Cn.z),l=e.dot(Cn),a=t.dot(Cn),f=i.dot(Cn);if(Math.max(-Math.max(l,a,f),Math.min(l,a,f))>c)return!1}return!0}const lu=new Ti,wi=new ee,lo=new ee;class Xi{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lu.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(lo)),this.expandByPoint(wi.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new ee,uo=new ee,er=new ee,dn=new ee,ho=new ee,tr=new ee,fo=new ee;class Ur{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(uo);const o=e.distanceTo(t)*.5,s=-this.direction.dot(er),c=dn.dot(this.direction),l=-dn.dot(er),a=dn.lengthSq(),f=Math.abs(1-s*s);let d,p,m,g;if(f>0)if(d=s*l-c,p=s*c-l,g=o*f,d>=0)if(p>=-g)if(p<=g){const _=1/f;d*=_,p*=_,m=d*(d+s*p+2*c)+p*(s*d+p+2*l)+a}else p=o,d=Math.max(0,-(s*p+c)),m=-d*d+p*(p+2*l)+a;else p=-o,d=Math.max(0,-(s*p+c)),m=-d*d+p*(p+2*l)+a;else p<=-g?(d=Math.max(0,-(-s*o+c)),p=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+p*(p+2*l)+a):p<=g?(d=0,p=Math.min(Math.max(-o,-l),o),m=p*(p+2*l)+a):(d=Math.max(0,-(s*o+c)),p=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+p*(p+2*l)+a);else p=s>0?-o:o,d=Math.max(0,-(s*p+c)),m=-d*d+p*(p+2*l)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(uo).addScaledVector(er,p),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const i=en.dot(this.direction),r=en.dot(en)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),c=i-s,l=i+s;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,c,l;const a=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,p=this.origin;return a>=0?(i=(e.min.x-p.x)*a,r=(e.max.x-p.x)*a):(i=(e.max.x-p.x)*a,r=(e.min.x-p.x)*a),f>=0?(o=(e.min.y-p.y)*f,s=(e.max.y-p.y)*f):(o=(e.max.y-p.y)*f,s=(e.min.y-p.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(c=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(c=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,i,r,o){ho.subVectors(t,e),tr.subVectors(i,e),fo.crossVectors(ho,tr);let s=this.direction.dot(fo),c;if(s>0){if(r)return null;c=1}else if(s<0)c=-1,s=-s;else return null;dn.subVectors(this.origin,e);const l=c*this.direction.dot(tr.crossVectors(dn,tr));if(l<0)return null;const a=c*this.direction.dot(ho.cross(dn));if(a<0||l+a>s)return null;const f=-c*dn.dot(fo);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,o,s,c,l,a,f,d,p,m,g,_,u){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,c,l,a,f,d,p,m,g,_,u)}set(e,t,i,r,o,s,c,l,a,f,d,p,m,g,_,u){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=c,h[13]=l,h[2]=a,h[6]=f,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=_,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),o=1/Jn.setFromMatrixColumn(e,1).length(),s=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),c=Math.sin(i),l=Math.cos(r),a=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const p=s*f,m=s*d,g=c*f,_=c*d;t[0]=l*f,t[4]=-l*d,t[8]=a,t[1]=m+g*a,t[5]=p-_*a,t[9]=-c*l,t[2]=_-p*a,t[6]=g+m*a,t[10]=s*l}else if(e.order==="YXZ"){const p=l*f,m=l*d,g=a*f,_=a*d;t[0]=p+_*c,t[4]=g*c-m,t[8]=s*a,t[1]=s*d,t[5]=s*f,t[9]=-c,t[2]=m*c-g,t[6]=_+p*c,t[10]=s*l}else if(e.order==="ZXY"){const p=l*f,m=l*d,g=a*f,_=a*d;t[0]=p-_*c,t[4]=-s*d,t[8]=g+m*c,t[1]=m+g*c,t[5]=s*f,t[9]=_-p*c,t[2]=-s*a,t[6]=c,t[10]=s*l}else if(e.order==="ZYX"){const p=s*f,m=s*d,g=c*f,_=c*d;t[0]=l*f,t[4]=g*a-m,t[8]=p*a+_,t[1]=l*d,t[5]=_*a+p,t[9]=m*a-g,t[2]=-a,t[6]=c*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,m=s*a,g=c*l,_=c*a;t[0]=l*f,t[4]=_-p*d,t[8]=g*d+m,t[1]=d,t[5]=s*f,t[9]=-c*f,t[2]=-a*f,t[6]=m*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=s*l,m=s*a,g=c*l,_=c*a;t[0]=l*f,t[4]=-d,t[8]=a*f,t[1]=p*d+_,t[5]=s*f,t[9]=m*d-g,t[2]=g*d-m,t[6]=c*f,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,hu)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),pn.crossVectors(i,Lt),pn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),pn.crossVectors(i,Lt)),pn.normalize(),nr.crossVectors(Lt,pn),r[0]=pn.x,r[4]=nr.x,r[8]=Lt.x,r[1]=pn.y,r[5]=nr.y,r[9]=Lt.y,r[2]=pn.z,r[6]=nr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],c=i[4],l=i[8],a=i[12],f=i[1],d=i[5],p=i[9],m=i[13],g=i[2],_=i[6],u=i[10],h=i[14],E=i[3],x=i[7],v=i[11],L=i[15],b=r[0],R=r[4],k=r[8],y=r[12],S=r[1],N=r[5],I=r[9],w=r[13],U=r[2],H=r[6],Z=r[10],j=r[14],W=r[3],ie=r[7],ae=r[11],_e=r[15];return o[0]=s*b+c*S+l*U+a*W,o[4]=s*R+c*N+l*H+a*ie,o[8]=s*k+c*I+l*Z+a*ae,o[12]=s*y+c*w+l*j+a*_e,o[1]=f*b+d*S+p*U+m*W,o[5]=f*R+d*N+p*H+m*ie,o[9]=f*k+d*I+p*Z+m*ae,o[13]=f*y+d*w+p*j+m*_e,o[2]=g*b+_*S+u*U+h*W,o[6]=g*R+_*N+u*H+h*ie,o[10]=g*k+_*I+u*Z+h*ae,o[14]=g*y+_*w+u*j+h*_e,o[3]=E*b+x*S+v*U+L*W,o[7]=E*R+x*N+v*H+L*ie,o[11]=E*k+x*I+v*Z+L*ae,o[15]=E*y+x*w+v*j+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],c=e[5],l=e[9],a=e[13],f=e[2],d=e[6],p=e[10],m=e[14],g=e[3],_=e[7],u=e[11],h=e[15];return g*(+o*l*d-r*a*d-o*c*p+i*a*p+r*c*m-i*l*m)+_*(+t*l*m-t*a*p+o*s*p-r*s*m+r*a*f-o*l*f)+u*(+t*a*d-t*c*m-o*s*d+i*s*m+o*c*f-i*a*f)+h*(-r*c*f-t*l*d+t*c*p+r*s*d-i*s*p+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],c=e[5],l=e[6],a=e[7],f=e[8],d=e[9],p=e[10],m=e[11],g=e[12],_=e[13],u=e[14],h=e[15],E=d*u*a-_*p*a+_*l*m-c*u*m-d*l*h+c*p*h,x=g*p*a-f*u*a-g*l*m+s*u*m+f*l*h-s*p*h,v=f*_*a-g*d*a+g*c*m-s*_*m-f*c*h+s*d*h,L=g*d*l-f*_*l-g*c*p+s*_*p+f*c*u-s*d*u,b=t*E+i*x+r*v+o*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=E*R,e[1]=(_*p*o-d*u*o-_*r*m+i*u*m+d*r*h-i*p*h)*R,e[2]=(c*u*o-_*l*o+_*r*a-i*u*a-c*r*h+i*l*h)*R,e[3]=(d*l*o-c*p*o-d*r*a+i*p*a+c*r*m-i*l*m)*R,e[4]=x*R,e[5]=(f*u*o-g*p*o+g*r*m-t*u*m-f*r*h+t*p*h)*R,e[6]=(g*l*o-s*u*o-g*r*a+t*u*a+s*r*h-t*l*h)*R,e[7]=(s*p*o-f*l*o+f*r*a-t*p*a-s*r*m+t*l*m)*R,e[8]=v*R,e[9]=(g*d*o-f*_*o-g*i*m+t*_*m+f*i*h-t*d*h)*R,e[10]=(s*_*o-g*c*o+g*i*a-t*_*a-s*i*h+t*c*h)*R,e[11]=(f*c*o-s*d*o-f*i*a+t*d*a+s*i*m-t*c*m)*R,e[12]=L*R,e[13]=(f*_*r-g*d*r+g*i*p-t*_*p-f*i*u+t*d*u)*R,e[14]=(g*c*r-s*_*r-g*i*l+t*_*l+s*i*u-t*c*u)*R,e[15]=(s*d*r-f*c*r+f*i*l-t*d*l-s*i*p+t*c*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,c=e.y,l=e.z,a=o*s,f=o*c;return this.set(a*s+i,a*c-r*l,a*l+r*c,0,a*c+r*l,f*c+i,f*l-r*s,0,a*l-r*c,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,c=t._z,l=t._w,a=o+o,f=s+s,d=c+c,p=o*a,m=o*f,g=o*d,_=s*f,u=s*d,h=c*d,E=l*a,x=l*f,v=l*d,L=i.x,b=i.y,R=i.z;return r[0]=(1-(_+h))*L,r[1]=(m+v)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-v)*b,r[5]=(1-(p+h))*b,r[6]=(u+E)*b,r[7]=0,r[8]=(g+x)*R,r[9]=(u-E)*R,r[10]=(1-(p+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Jn.set(r[0],r[1],r[2]).length();const s=Jn.set(r[4],r[5],r[6]).length(),c=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const a=1/o,f=1/s,d=1/c;return Vt.elements[0]*=a,Vt.elements[1]*=a,Vt.elements[2]*=a,Vt.elements[4]*=f,Vt.elements[5]*=f,Vt.elements[6]*=f,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),i.x=o,i.y=s,i.z=c,this}makePerspective(e,t,i,r,o,s,c=cn){const l=this.elements,a=2*o/(t-e),f=2*o/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let m,g;if(c===cn)m=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(c===wr)m=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=a,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,c=cn){const l=this.elements,a=1/(t-e),f=1/(i-r),d=1/(s-o),p=(t+e)*a,m=(i+r)*f;let g,_;if(c===cn)g=(s+o)*d,_=-2*d;else if(c===wr)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*a,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jn=new ee,Vt=new lt,uu=new ee(0,0,0),hu=new ee(1,1,1),pn=new ee,nr=new ee,Lt=new ee,Va=new lt,Ga=new Tn;class $t{constructor(e=0,t=0,i=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],c=r[8],l=r[1],a=r[5],f=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,a),this._z=0);break;case"YXZ":this._x=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,a)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,a));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,a),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,a),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Qs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fu=0;const Ha=new ee,Qn=new Tn,tn=new lt,ir=new ee,Pi=new ee,du=new ee,pu=new Tn,Wa=new ee(1,0,0),Xa=new ee(0,1,0),Ya=new ee(0,0,1),ja={type:"added"},mu={type:"removed"},ei={type:"childadded",child:null},po={type:"childremoved",child:null};class ut extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new ee,t=new $t,i=new Tn,r=new ee(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new $e}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Pi,ir,this.up):tn.lookAt(ir,Pi,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(tn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),ei.child=e,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mu),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const c=r[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let a=0,f=l.length;a<f;a++){const d=l[a];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,a=this.material.length;l<a;l++)c.push(o(e.materials,this.material[l]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];r.animations.push(o(e.animations,l))}}if(t){const c=s(e.geometries),l=s(e.materials),a=s(e.textures),f=s(e.images),d=s(e.shapes),p=s(e.skeletons),m=s(e.animations),g=s(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),a.length>0&&(i.textures=a),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(c){const l=[];for(const a in c){const f=c[a];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ut.DEFAULT_UP=new ee(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new ee,nn=new ee,mo=new ee,rn=new ee,ti=new ee,ni=new ee,qa=new ee,go=new ee,_o=new ee,vo=new ee;class Kt{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Gt.subVectors(r,t),nn.subVectors(i,t),mo.subVectors(e,t);const s=Gt.dot(Gt),c=Gt.dot(nn),l=Gt.dot(mo),a=nn.dot(nn),f=nn.dot(mo),d=s*a-c*c;if(d===0)return o.set(0,0,0),null;const p=1/d,m=(a*l-c*f)*p,g=(s*f-c*l)*p;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(e,t,i,r,o,s,c,l){return this.getBarycoord(e,t,i,r,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,rn.x),l.addScaledVector(s,rn.y),l.addScaledVector(c,rn.z),l)}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),nn.subVectors(e,t),Gt.cross(nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Gt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,c;ti.subVectors(r,i),ni.subVectors(o,i),go.subVectors(e,i);const l=ti.dot(go),a=ni.dot(go);if(l<=0&&a<=0)return t.copy(i);_o.subVectors(e,r);const f=ti.dot(_o),d=ni.dot(_o);if(f>=0&&d<=f)return t.copy(r);const p=l*d-f*a;if(p<=0&&l>=0&&f<=0)return s=l/(l-f),t.copy(i).addScaledVector(ti,s);vo.subVectors(e,o);const m=ti.dot(vo),g=ni.dot(vo);if(g>=0&&m<=g)return t.copy(o);const _=m*a-l*g;if(_<=0&&a>=0&&g<=0)return c=a/(a-g),t.copy(i).addScaledVector(ni,c);const u=f*g-m*d;if(u<=0&&d-f>=0&&m-g>=0)return qa.subVectors(o,r),c=(d-f)/(d-f+(m-g)),t.copy(r).addScaledVector(qa,c);const h=1/(u+_+p);return s=_*h,c=p*h,t.copy(i).addScaledVector(ti,s).addScaledVector(ni,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Xo(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=xo(s,o,e+1/3),this.g=xo(s,o,e),this.b=xo(s,o,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],c=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=ec[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ot.fromWorkingColorSpace(yt.copy(this),e),Math.round(St(yt.r*255,0,255))*65536+Math.round(St(yt.g*255,0,255))*256+Math.round(St(yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,o=yt.b,s=Math.max(i,r,o),c=Math.min(i,r,o);let l,a;const f=(c+s)/2;if(c===s)l=0,a=0;else{const d=s-c;switch(a=f<=.5?d/(s+c):d/(2-s-c),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=a,e.l=f,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Ut){ot.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(rr);const i=Di(mn.h,rr.h,t),r=Di(mn.s,rr.s,t),o=Di(mn.l,rr.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Je;Je.NAMES=ec;let gu=0;class Vn extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=mi,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Oo,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(i.blending=this.blending),this.side!==ln&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==No&&(i.blendSrc=this.blendSrc),this.blendDst!==Oo&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const c in o){const l=o[c];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hi extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new ee,or=new Ve;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),o=At(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}}class tc extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nc extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _u=0;const Dt=new lt,Eo=new ut,ii=new ee,It=new Ti,Li=new Ti,mt=new ee;class _t extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zs(e)?nc:tc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,i){return Dt.makeTranslation(e,t,i),this.applyMatrix4(Dt),this}scale(e,t,i){return Dt.makeScale(e,t,i),this.applyMatrix4(Dt),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];It.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const c=t[o];Li.setFromBufferAttribute(c),this.morphTargetsRelative?(mt.addVectors(It.min,Li.min),It.expandByPoint(mt),mt.addVectors(It.max,Li.max),It.expandByPoint(mt)):(It.expandByPoint(Li.min),It.expandByPoint(Li.max))}It.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)mt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let o=0,s=t.length;o<s;o++){const c=t[o],l=this.morphTargetsRelative;for(let a=0,f=c.count;a<f;a++)mt.fromBufferAttribute(c,a),l&&(ii.fromBufferAttribute(e,a),mt.add(ii)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),c=[],l=[];for(let k=0;k<i.count;k++)c[k]=new ee,l[k]=new ee;const a=new ee,f=new ee,d=new ee,p=new Ve,m=new Ve,g=new Ve,_=new ee,u=new ee;function h(k,y,S){a.fromBufferAttribute(i,k),f.fromBufferAttribute(i,y),d.fromBufferAttribute(i,S),p.fromBufferAttribute(o,k),m.fromBufferAttribute(o,y),g.fromBufferAttribute(o,S),f.sub(a),d.sub(a),m.sub(p),g.sub(p);const N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(N),u.copy(d).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(N),c[k].add(_),c[y].add(_),c[S].add(_),l[k].add(u),l[y].add(u),l[S].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let k=0,y=E.length;k<y;++k){const S=E[k],N=S.start,I=S.count;for(let w=N,U=N+I;w<U;w+=3)h(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const x=new ee,v=new ee,L=new ee,b=new ee;function R(k){L.fromBufferAttribute(r,k),b.copy(L);const y=c[k];x.copy(y),x.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(b,y);const N=v.dot(l[k])<0?-1:1;s.setXYZW(k,x.x,x.y,x.z,N)}for(let k=0,y=E.length;k<y;++k){const S=E[k],N=S.start,I=S.count;for(let w=N,U=N+I;w<U;w+=3)R(e.getX(w+0)),R(e.getX(w+1)),R(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new ee,o=new ee,s=new ee,c=new ee,l=new ee,a=new ee,f=new ee,d=new ee;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),u=e.getX(p+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,u),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),a.fromBufferAttribute(i,u),c.add(f),l.add(f),a.add(f),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(u,a.x,a.y,a.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(c,l){const a=c.array,f=c.itemSize,d=c.normalized,p=new a.constructor(l.length*f);let m=0,g=0;for(let _=0,u=l.length;_<u;_++){c.isInterleavedBufferAttribute?m=l[_]*c.data.stride+c.offset:m=l[_]*f;for(let h=0;h<f;h++)p[g++]=a[m++]}return new Yt(p,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const c in r){const l=r[c],a=e(l,i);t.setAttribute(c,a)}const o=this.morphAttributes;for(const c in o){const l=[],a=o[c];for(let f=0,d=a.length;f<d;f++){const p=a[f],m=e(p,i);l.push(m)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let c=0,l=s.length;c<l;c++){const a=s[c];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const a in l)l[a]!==void 0&&(e[a]=l[a]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const a=i[l];e.data.attributes[l]=a.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const a=this.morphAttributes[l],f=[];for(let d=0,p=a.length;d<p;d++){const m=a[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const a in r){const f=r[a];this.setAttribute(a,f.clone(t))}const o=e.morphAttributes;for(const a in o){const f=[],d=o[a];for(let p=0,m=d.length;p<m;p++)f.push(d[p].clone(t));this.morphAttributes[a]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let a=0,f=s.length;a<f;a++){const d=s[a];this.addGroup(d.start,d.count,d.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ka=new lt,wn=new Ur,ar=new Xi,Za=new ee,ri=new ee,oi=new ee,ai=new ee,yo=new ee,sr=new ee,cr=new Ve,lr=new Ve,ur=new Ve,$a=new ee,Ja=new ee,Qa=new ee,hr=new ee,fr=new ee;class kt extends ut{constructor(e=new _t,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){sr.set(0,0,0);for(let l=0,a=o.length;l<a;l++){const f=c[l],d=o[l];f!==0&&(yo.fromBufferAttribute(d,e),s?sr.addScaledVector(yo,f):sr.addScaledVector(yo.sub(t),f))}t.add(sr)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(o),wn.copy(e.ray).recast(e.near),!(ar.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ar,Za)===null||wn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(Ka.copy(o).invert(),wn.copy(e.ray).applyMatrix4(Ka),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,c=o.index,l=o.attributes.position,a=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,p=o.groups,m=o.drawRange;if(c!==null)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const u=p[g],h=s[u.materialIndex],E=Math.max(u.start,m.start),x=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let v=E,L=x;v<L;v+=3){const b=c.getX(v),R=c.getX(v+1),k=c.getX(v+2);r=dr(this,h,e,i,a,f,d,b,R,k),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let u=g,h=_;u<h;u+=3){const E=c.getX(u),x=c.getX(u+1),v=c.getX(u+2);r=dr(this,s,e,i,a,f,d,E,x,v),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=p.length;g<_;g++){const u=p[g],h=s[u.materialIndex],E=Math.max(u.start,m.start),x=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let v=E,L=x;v<L;v+=3){const b=v,R=v+1,k=v+2;r=dr(this,h,e,i,a,f,d,b,R,k),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=g,h=_;u<h;u+=3){const E=u,x=u+1,v=u+2;r=dr(this,s,e,i,a,f,d,E,x,v),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function vu(n,e,t,i,r,o,s,c){let l;if(e.side===Tt?l=i.intersectTriangle(s,o,r,!0,c):l=i.intersectTriangle(r,o,s,e.side===ln,c),l===null)return null;fr.copy(c),fr.applyMatrix4(n.matrixWorld);const a=t.ray.origin.distanceTo(fr);return a<t.near||a>t.far?null:{distance:a,point:fr.clone(),object:n}}function dr(n,e,t,i,r,o,s,c,l,a){n.getVertexPosition(c,ri),n.getVertexPosition(l,oi),n.getVertexPosition(a,ai);const f=vu(n,e,t,i,ri,oi,ai,hr);if(f){r&&(cr.fromBufferAttribute(r,c),lr.fromBufferAttribute(r,l),ur.fromBufferAttribute(r,a),f.uv=Kt.getInterpolation(hr,ri,oi,ai,cr,lr,ur,new Ve)),o&&(cr.fromBufferAttribute(o,c),lr.fromBufferAttribute(o,l),ur.fromBufferAttribute(o,a),f.uv1=Kt.getInterpolation(hr,ri,oi,ai,cr,lr,ur,new Ve)),s&&($a.fromBufferAttribute(s,c),Ja.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,a),f.normal=Kt.getInterpolation(hr,ri,oi,ai,$a,Ja,Qa,new ee),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:c,b:l,c:a,normal:new ee,materialIndex:0};Kt.getNormal(ri,oi,ai,d.normal),f.face=d}return f}class Mi extends _t{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const c=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],a=[],f=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function g(_,u,h,E,x,v,L,b,R,k,y){const S=v/R,N=L/k,I=v/2,w=L/2,U=b/2,H=R+1,Z=k+1;let j=0,W=0;const ie=new ee;for(let ae=0;ae<Z;ae++){const _e=ae*N-w;for(let ye=0;ye<H;ye++){const xe=ye*S-I;ie[_]=xe*E,ie[u]=_e*x,ie[h]=U,a.push(ie.x,ie.y,ie.z),ie[_]=0,ie[u]=0,ie[h]=b>0?1:-1,f.push(ie.x,ie.y,ie.z),d.push(ye/R),d.push(1-ae/k),j+=1}}for(let ae=0;ae<k;ae++)for(let _e=0;_e<R;_e++){const ye=p+_e+H*ae,xe=p+_e+H*(ae+1),ne=p+(_e+1)+H*(ae+1),V=p+(_e+1)+H*ae;l.push(ye,xe,V),l.push(xe,ne,V),W+=6}c.addGroup(m,W,y),m+=W,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=yi(n[t]);for(const r in i)e[r]=i[r]}return e}function xu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ic(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Eu={clone:yi,merge:Rt};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rc extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new ee,es=new Ve,ts=new Ve;class Ft extends rc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,es,ts),t.subVectors(ts,es)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oi*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,a=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/a,r*=s.width/l,i*=s.height/a}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ci=1;class Tu extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(si,ci,e,t);r.layers=this.layers,this.add(r);const o=new Ft(si,ci,e,t);o.layers=this.layers,this.add(o);const s=new Ft(si,ci,e,t);s.layers=this.layers,this.add(s);const c=new Ft(si,ci,e,t);c.layers=this.layers,this.add(c);const l=new Ft(si,ci,e,t);l.layers=this.layers,this.add(l);const a=new Ft(si,ci,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,c,l]=t;for(const a of t)this.remove(a);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,c,l,a,f]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,c),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,a),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class oc extends Mt{constructor(e,t,i,r,o,s,c,l,a,f){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,i,r,o,s,c,l,a,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new oc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mi(5,5,5),o=new Mn({name:"CubemapFromEquirect",uniforms:yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:En});o.uniforms.tEquirect.value=t;const s=new kt(r,o),c=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Wt),new Tu(1,10,this).update(e,s),t.minFilter=c,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const So=new ee,Au=new ee,Ru=new $e;class _n{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=So.subVectors(i,t).cross(Au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(So),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ru.getNormalMatrix(e),r=this.coplanarPoint(So).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Xi,pr=new ee;class Yo{constructor(e=new _n,t=new _n,i=new _n,r=new _n,o=new _n,s=new _n){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn){const i=this.planes,r=e.elements,o=r[0],s=r[1],c=r[2],l=r[3],a=r[4],f=r[5],d=r[6],p=r[7],m=r[8],g=r[9],_=r[10],u=r[11],h=r[12],E=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-o,p-a,u-m,v-h).normalize(),i[1].setComponents(l+o,p+a,u+m,v+h).normalize(),i[2].setComponents(l+s,p+f,u+g,v+E).normalize(),i[3].setComponents(l-s,p-f,u-g,v-E).normalize(),i[4].setComponents(l-c,p-d,u-_,v-x).normalize(),t===cn)i[5].setComponents(l+c,p+d,u+_,v+x).normalize();else if(t===wr)i[5].setComponents(c,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(pr.x=r.normal.x>0?e.max.x:e.min.x,pr.y=r.normal.y>0?e.max.y:e.min.y,pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function bu(n){const e=new WeakMap;function t(c,l){const a=c.array,f=c.usage,d=a.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,a,f),c.onUploadCallback();let m;if(a instanceof Float32Array)m=n.FLOAT;else if(a instanceof Uint16Array)c.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(a instanceof Int16Array)m=n.SHORT;else if(a instanceof Uint32Array)m=n.UNSIGNED_INT;else if(a instanceof Int32Array)m=n.INT;else if(a instanceof Int8Array)m=n.BYTE;else if(a instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:p,type:m,bytesPerElement:a.BYTES_PER_ELEMENT,version:c.version,size:d}}function i(c,l,a){const f=l.array,d=l._updateRange,p=l.updateRanges;if(n.bindBuffer(a,c),d.count===-1&&p.length===0&&n.bufferSubData(a,0,f),p.length!==0){for(let m=0,g=p.length;m<g;m++){const _=p[m];n.bufferSubData(a,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(a,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(n.deleteBuffer(l.buffer),e.delete(c))}function s(c,l){if(c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const a=e.get(c);if(a===void 0)e.set(c,t(c,l));else if(a.version<c.version){if(a.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,c,l),a.version=c.version}}return{get:r,remove:o,update:s}}class Fr extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,c=Math.floor(i),l=Math.floor(r),a=c+1,f=l+1,d=e/c,p=t/l,m=[],g=[],_=[],u=[];for(let h=0;h<f;h++){const E=h*p-s;for(let x=0;x<a;x++){const v=x*d-o;g.push(v,-E,0),_.push(0,0,1),u.push(x/c),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<c;E++){const x=E+a*h,v=E+a*(h+1),L=E+1+a*(h+1),b=E+1+a*h;m.push(x,v,b),m.push(v,L,b)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$u=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",oh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ch=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ed=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ad=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Cu,alphahash_pars_fragment:wu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Iu,alphatest_pars_fragment:Nu,aomap_fragment:Ou,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Fu,begin_vertex:ku,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:Vu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:qu,color_pars_vertex:Ku,color_vertex:Zu,common:$u,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:eh,displacementmap_vertex:th,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,colorspace_fragment:rh,colorspace_pars_fragment:oh,envmap_fragment:ah,envmap_common_pars_fragment:sh,envmap_pars_fragment:ch,envmap_pars_vertex:lh,envmap_physical_pars_fragment:Eh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:fh,fog_fragment:dh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:vh,lights_pars_begin:xh,lights_toon_fragment:yh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Th,lights_phong_pars_fragment:Mh,lights_physical_fragment:Ah,lights_physical_pars_fragment:Rh,lights_fragment_begin:bh,lights_fragment_maps:Ch,lights_fragment_end:wh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Nh,map_fragment:Oh,map_pars_fragment:Dh,map_particle_fragment:Uh,map_particle_pars_fragment:Fh,metalnessmap_fragment:kh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:Vh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Hh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:Yh,normal_pars_fragment:jh,normal_pars_vertex:qh,normal_vertex:Kh,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:nf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:sf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:hf,shadowmap_vertex:ff,shadowmask_pars_fragment:df,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:xf,tonemapping_fragment:Ef,tonemapping_pars_fragment:yf,transmission_fragment:Sf,transmission_pars_fragment:Tf,uv_pars_fragment:Mf,uv_pars_vertex:Af,uv_vertex:Rf,worldpos_vertex:bf,background_vert:Cf,background_frag:wf,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:If,cube_frag:Nf,depth_vert:Of,depth_frag:Df,distanceRGBA_vert:Uf,distanceRGBA_frag:Ff,equirect_vert:kf,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:Vf,meshbasic_vert:Gf,meshbasic_frag:Hf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:Yf,meshmatcap_frag:jf,meshnormal_vert:qf,meshnormal_frag:Kf,meshphong_vert:Zf,meshphong_frag:$f,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:ed,meshtoon_frag:td,points_vert:nd,points_frag:id,shadow_vert:rd,shadow_frag:od,sprite_vert:ad,sprite_frag:sd},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},jt={basic:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Rt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Rt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Rt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Rt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Rt([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Rt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Rt([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Rt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Rt([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Rt([Ae.common,Ae.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Rt([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};jt.physical={uniforms:Rt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const mr={r:0,b:0,g:0},Ln=new $t,cd=new lt;function ld(n,e,t,i,r,o,s){const c=new Je(0);let l=o===!0?0:1,a,f,d=null,p=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const v=g(E);v===null?h(c,l):v&&v.isColor&&(h(v,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function u(E,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Nr)?(f===void 0&&(f=new kt(new Mi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:yi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ln.copy(x.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(cd.makeRotationFromEuler(Ln)),f.material.toneMapped=ot.getTransfer(v.colorSpace)!==at,(d!==v||p!==v.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,d=v,p=v.version,m=n.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new kt(new Fr(2,2),new Mn({name:"BackgroundMaterial",uniforms:yi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,a.material.toneMapped=ot.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||m!==n.toneMapping)&&(a.material.needsUpdate=!0,d=v,p=v.version,m=n.toneMapping),a.layers.enableAll(),E.unshift(a,a.geometry,a.material,0,0,null))}function h(E,x){E.getRGB(mr,ic(n)),i.buffers.color.setClear(mr.r,mr.g,mr.b,x,s)}return{getClearColor:function(){return c},setClearColor:function(E,x=1){c.set(E),l=x,h(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(c,l)},render:_,addToRenderList:u}}function ud(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function c(S,N,I,w,U){let H=!1;const Z=d(w,I,N);o!==Z&&(o=Z,a(o.object)),H=m(S,w,I,U),H&&g(S,w,I,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,v(S,N,I,w),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function a(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function d(S,N,I){const w=I.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let H=U[N.id];H===void 0&&(H={},U[N.id]=H);let Z=H[w];return Z===void 0&&(Z=p(l()),H[w]=Z),Z}function p(S){const N=[],I=[],w=[];for(let U=0;U<t;U++)N[U]=0,I[U]=0,w[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:w,object:S,attributes:{},index:null}}function m(S,N,I,w){const U=o.attributes,H=N.attributes;let Z=0;const j=I.getAttributes();for(const W in j)if(j[W].location>=0){const ae=U[W];let _e=H[W];if(_e===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ae===void 0||ae.attribute!==_e||_e&&ae.data!==_e.data)return!0;Z++}return o.attributesNum!==Z||o.index!==w}function g(S,N,I,w){const U={},H=N.attributes;let Z=0;const j=I.getAttributes();for(const W in j)if(j[W].location>=0){let ae=H[W];ae===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const _e={};_e.attribute=ae,ae&&ae.data&&(_e.data=ae.data),U[W]=_e,Z++}o.attributes=U,o.attributesNum=Z,o.index=w}function _(){const S=o.newAttributes;for(let N=0,I=S.length;N<I;N++)S[N]=0}function u(S){h(S,0)}function h(S,N){const I=o.newAttributes,w=o.enabledAttributes,U=o.attributeDivisors;I[S]=1,w[S]===0&&(n.enableVertexAttribArray(S),w[S]=1),U[S]!==N&&(n.vertexAttribDivisor(S,N),U[S]=N)}function E(){const S=o.newAttributes,N=o.enabledAttributes;for(let I=0,w=N.length;I<w;I++)N[I]!==S[I]&&(n.disableVertexAttribArray(I),N[I]=0)}function x(S,N,I,w,U,H,Z){Z===!0?n.vertexAttribIPointer(S,N,I,U,H):n.vertexAttribPointer(S,N,I,w,U,H)}function v(S,N,I,w){_();const U=w.attributes,H=I.getAttributes(),Z=N.defaultAttributeValues;for(const j in H){const W=H[j];if(W.location>=0){let ie=U[j];if(ie===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ae=ie.normalized,_e=ie.itemSize,ye=e.get(ie);if(ye===void 0)continue;const xe=ye.buffer,ne=ye.type,V=ye.bytesPerElement,Q=ne===n.INT||ne===n.UNSIGNED_INT||ie.gpuType===Gs;if(ie.isInterleavedBufferAttribute){const $=ie.data,pe=$.stride,me=ie.offset;if($.isInstancedInterleavedBuffer){for(let G=0;G<W.locationSize;G++)h(W.location+G,$.meshPerAttribute);S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let G=0;G<W.locationSize;G++)u(W.location+G);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let G=0;G<W.locationSize;G++)x(W.location+G,_e/W.locationSize,ne,ae,pe*V,(me+_e/W.locationSize*G)*V,Q)}else{if(ie.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)h(W.location+$,ie.meshPerAttribute);S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<W.locationSize;$++)u(W.location+$);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let $=0;$<W.locationSize;$++)x(W.location+$,_e/W.locationSize,ne,ae,_e*V,_e/W.locationSize*$*V,Q)}}else if(Z!==void 0){const ae=Z[j];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(W.location,ae);break;case 3:n.vertexAttrib3fv(W.location,ae);break;case 4:n.vertexAttrib4fv(W.location,ae);break;default:n.vertexAttrib1fv(W.location,ae)}}}}E()}function L(){k();for(const S in i){const N=i[S];for(const I in N){const w=N[I];for(const U in w)f(w[U].object),delete w[U];delete N[I]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const I in N){const w=N[I];for(const U in w)f(w[U].object),delete w[U];delete N[I]}delete i[S.id]}function R(S){for(const N in i){const I=i[N];if(I[S.id]===void 0)continue;const w=I[S.id];for(const U in w)f(w[U].object),delete w[U];delete I[S.id]}}function k(){y(),s=!0,o!==r&&(o=r,a(o.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:k,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:u,disableUnusedAttributes:E}}function hd(n,e,t){let i;function r(a){i=a}function o(a,f){n.drawArrays(i,a,f),t.update(f,i,1)}function s(a,f,d){d!==0&&(n.drawArraysInstanced(i,a,f,d),t.update(f,i,d))}function c(a,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d;m++)this.render(a[m],f[m]);else{p.multiDrawArraysWEBGL(i,a,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=f[g];t.update(m,i,1)}}function l(a,f,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<a.length;g++)s(a[g],f[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,a,0,f,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];for(let _=0;_<p.length;_++)t.update(g,i,p[_])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function fd(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(b){return!(b!==Zt&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(b){const R=b===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Sn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==xn&&!R)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const f=l(a);f!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);const d=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:h,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:v,maxSamples:L}}function dd(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new _n,c=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){t=f(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,_=d.clipIntersection,u=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||o&&!u)o?f(null):a();else{const E=o?0:i,x=E*4;let v=h.clippingState||null;l.value=v,v=f(g,p,x,m);for(let L=0;L!==x;++L)v[L]=t[L];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function a(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,p,m,g){const _=d!==null?d.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const h=m+_*4,E=p.matrixWorldInverse;c.getNormalMatrix(E),(u===null||u.length<h)&&(u=new Float32Array(h));for(let x=0,v=m;x!==_;++x,v+=4)s.copy(d[x]).applyMatrix4(E,c),s.normal.toArray(u,v),u[v+3]=s.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function pd(n){let e=new WeakMap;function t(s,c){return c===Do?s.mapping=vi:c===Uo&&(s.mapping=xi),s}function i(s){if(s&&s.isTexture){const c=s.mapping;if(c===Do||c===Uo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const a=new Mu(l.height);return a.fromEquirectangularTexture(n,s),e.set(s,a),s.addEventListener("dispose",r),t(a.texture,s.mapping)}else return null}}return s}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class sc extends rc{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,c=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=a*this.view.offsetX,s=o+a*this.view.width,c-=f*this.view.offsetY,l=c-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fi=4,ns=[.125,.215,.35,.446,.526,.582],Dn=20,To=new sc,is=new Je;let Mo=null,Ao=0,Ro=0,bo=!1;const Nn=(1+Math.sqrt(5))/2,li=1/Nn,rs=[new ee(-Nn,li,0),new ee(Nn,li,0),new ee(-li,0,Nn),new ee(li,0,Nn),new ee(0,Nn,-li),new ee(0,Nn,li),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class os{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,Ao,Ro),this._renderer.xr.enabled=bo,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Or,format:Zt,colorSpace:An,depthBuffer:!1},r=as(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=as(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=md(o)),this._blurMaterial=gd(o,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,r){const c=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(is),f.toneMapping=yn,f.autoClear=!1;const m=new hi({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new kt(new Mi,m);let _=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,_=!0):(m.color.copy(is),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(c.up.set(0,l[h],0),c.lookAt(a[h],0,0)):E===1?(c.up.set(0,0,l[h]),c.lookAt(0,a[h],0)):(c.up.set(0,l[h],0),c.lookAt(0,0,a[h]));const x=this._cubeSize;gr(r,E*x,h>2?x:0,x,x),f.setRenderTarget(r),_&&f.render(g,c),f.render(e,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vi||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ss());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kt(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,To)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=rs[(r-o-1)%rs.length];this._blur(e,o-1,o,s,c)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,c){const l=this._renderer,a=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new kt(this._lodPlanes[r],a),p=a.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),_=o/g,u=isFinite(o)?1+Math.floor(f*_):Dn;u>Dn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Dn}`);const h=[];let E=0;for(let R=0;R<Dn;++R){const k=R/_,y=Math.exp(-k*k/2);h.push(y),R===0?E+=y:R<u&&(E+=2*y)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=h,p.latitudinal.value=s==="latitudinal",c&&(p.poleAxis.value=c);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const v=this._sizeLods[r],L=3*v*(r>x-fi?r-x+fi:0),b=4*(this._cubeSize-v);gr(t,L,b,3*v,2*v),l.setRenderTarget(t),l.render(d,To)}}function md(n){const e=[],t=[],i=[];let r=n;const o=n-fi+1+ns.length;for(let s=0;s<o;s++){const c=Math.pow(2,r);t.push(c);let l=1/c;s>n-fi?l=ns[s-n+fi-1]:s===0&&(l=0),i.push(l);const a=1/(c-2),f=-a,d=1+a,p=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,g=6,_=3,u=2,h=1,E=new Float32Array(_*g*m),x=new Float32Array(u*g*m),v=new Float32Array(h*g*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,k=b>2?0:-1,y=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];E.set(y,_*g*b),x.set(p,u*g*b);const S=[b,b,b,b,b,b];v.set(S,h*g*b)}const L=new _t;L.setAttribute("position",new Yt(E,_)),L.setAttribute("uv",new Yt(x,u)),L.setAttribute("faceIndex",new Yt(v,h)),e.push(L),r>fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function as(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gd(n,e,t){const i=new Float32Array(Dn),r=new ee(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ss(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function cs(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _d(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const l=c.mapping,a=l===Do||l===Uo,f=l===vi||l===xi;if(a||f){let d=e.get(c);const p=d!==void 0?d.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return t===null&&(t=new os(n)),d=a?t.fromEquirectangular(c,d):t.fromCubemap(c,d),d.texture.pmremVersion=c.pmremVersion,e.set(c,d),d.texture;if(d!==void 0)return d.texture;{const m=c.image;return a&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new os(n)),d=a?t.fromEquirectangular(c):t.fromCubemap(c),d.texture.pmremVersion=c.pmremVersion,e.set(c,d),c.addEventListener("dispose",o),d.texture):null}}}return c}function r(c){let l=0;const a=6;for(let f=0;f<a;f++)c[f]!==void 0&&l++;return l===a}function o(c){const l=c.target;l.removeEventListener("dispose",o);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function vd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xd(n,e,t,i){const r={},o=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let u=0,h=_.length;u<h;u++)e.remove(_[u])}p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let u=0,h=_.length;u<h;u++)e.update(_[u],n.ARRAY_BUFFER)}}function a(d){const p=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,v=E.length;x<v;x+=3){const L=E[x+0],b=E[x+1],R=E[x+2];p.push(L,b,b,R,R,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,v=E.length/3-1;x<v;x+=3){const L=x+0,b=x+1,R=x+2;p.push(L,b,b,R,R,L)}}else return;const u=new(Zs(p)?nc:tc)(p,1);u.version=_;const h=o.get(d);h&&e.remove(h),o.set(d,u)}function f(d){const p=o.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&a(d)}else a(d);return o.get(d)}return{get:c,update:l,getWireframeAttribute:f}}function Ed(n,e,t){let i;function r(p){i=p}let o,s;function c(p){o=p.type,s=p.bytesPerElement}function l(p,m){n.drawElements(i,m,o,p*s),t.update(m,i,1)}function a(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,o,p*s,g),t.update(m,i,g))}function f(p,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<g;u++)this.render(p[u]/s,m[u]);else{_.multiDrawElementsWEBGL(i,m,0,o,p,0,g);let u=0;for(let h=0;h<g;h++)u+=m[h];t.update(u,i,1)}}function d(p,m,g,_){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<p.length;h++)a(p[h]/s,m[h],_[h]);else{u.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,_,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E];for(let E=0;E<_.length;E++)t.update(h,i,_[E])}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function yd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,c){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=c*(o/3);break;case n.LINES:t.lines+=c*(o/2);break;case n.LINE_STRIP:t.lines+=c*(o-1);break;case n.LINE_LOOP:t.lines+=c*o;break;case n.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sd(n,e,t){const i=new WeakMap,r=new gt;function o(s,c,l){const a=s.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=f!==void 0?f.length:0;let p=i.get(c);if(p===void 0||p.count!==d){let S=function(){k.dispose(),i.delete(c),c.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,u=c.morphAttributes.color!==void 0,h=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],x=c.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),u===!0&&(v=3);let L=c.attributes.position.count*v,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*b*4*d),k=new Js(R,L,b,d);k.type=xn,k.needsUpdate=!0;const y=v*4;for(let N=0;N<d;N++){const I=h[N],w=E[N],U=x[N],H=L*b*4*N;for(let Z=0;Z<I.count;Z++){const j=Z*y;g===!0&&(r.fromBufferAttribute(I,Z),R[H+j+0]=r.x,R[H+j+1]=r.y,R[H+j+2]=r.z,R[H+j+3]=0),_===!0&&(r.fromBufferAttribute(w,Z),R[H+j+4]=r.x,R[H+j+5]=r.y,R[H+j+6]=r.z,R[H+j+7]=0),u===!0&&(r.fromBufferAttribute(U,Z),R[H+j+8]=r.x,R[H+j+9]=r.y,R[H+j+10]=r.z,R[H+j+11]=U.itemSize===4?r.w:1)}}p={count:d,texture:k,size:new Ve(L,b)},i.set(c,p),c.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let u=0;u<a.length;u++)g+=a[u];const _=c.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",a)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function Td(n,e,t,i){let r=new WeakMap;function o(l){const a=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==a&&(e.update(d),r.set(d,a)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==a&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,a))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==a&&(p.update(),r.set(p,a))}return d}function s(){r=new WeakMap}function c(l){const a=l.target;a.removeEventListener("dispose",c),t.remove(a.instanceMatrix),a.instanceColor!==null&&t.remove(a.instanceColor)}return{update:o,dispose:s}}class cc extends Mt{constructor(e,t,i,r,o,s,c,l,a,f){if(f=f!==void 0?f:gi,f!==gi&&f!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===gi&&(i=Ei),i===void 0&&f===ki&&(i=Wi),super(null,r,o,s,c,l,f,i,a),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lc=new Mt,uc=new cc(1,1);uc.compareFunction=Ks;const hc=new Js,fc=new cu,dc=new oc,ls=[],us=[],hs=new Float32Array(16),fs=new Float32Array(9),ds=new Float32Array(4);function Ai(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=ls[r];if(o===void 0&&(o=new Float32Array(r),ls[r]=o),e!==0){i.toArray(o,0);for(let s=1,c=0;s!==e;++s)c+=t,n[s].toArray(o,c)}return o}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kr(n,e){let t=us[e];t===void 0&&(t=new Int32Array(e),us[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Md(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ad(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Rd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function bd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Cd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;ds.set(i),n.uniformMatrix2fv(this.addr,!1,ds),pt(t,i)}}function wd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;fs.set(i),n.uniformMatrix3fv(this.addr,!1,fs),pt(t,i)}}function Pd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;hs.set(i),n.uniformMatrix4fv(this.addr,!1,hs),pt(t,i)}}function Ld(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Id(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Nd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Od(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Dd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ud(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Fd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function kd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Bd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const o=this.type===n.SAMPLER_2D_SHADOW?uc:lc;t.setTexture2D(e||o,r)}function zd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fc,r)}function Vd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dc,r)}function Gd(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hc,r)}function Hd(n){switch(n){case 5126:return Md;case 35664:return Ad;case 35665:return Rd;case 35666:return bd;case 35674:return Cd;case 35675:return wd;case 35676:return Pd;case 5124:case 35670:return Ld;case 35667:case 35671:return Id;case 35668:case 35672:return Nd;case 35669:case 35673:return Od;case 5125:return Dd;case 36294:return Ud;case 36295:return Fd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return zd;case 35680:case 36300:case 36308:case 36293:return Vd;case 36289:case 36303:case 36311:case 36292:return Gd}}function Wd(n,e){n.uniform1fv(this.addr,e)}function Xd(n,e){const t=Ai(e,this.size,2);n.uniform2fv(this.addr,t)}function Yd(n,e){const t=Ai(e,this.size,3);n.uniform3fv(this.addr,t)}function jd(n,e){const t=Ai(e,this.size,4);n.uniform4fv(this.addr,t)}function qd(n,e){const t=Ai(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kd(n,e){const t=Ai(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zd(n,e){const t=Ai(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $d(n,e){n.uniform1iv(this.addr,e)}function Jd(n,e){n.uniform2iv(this.addr,e)}function Qd(n,e){n.uniform3iv(this.addr,e)}function ep(n,e){n.uniform4iv(this.addr,e)}function tp(n,e){n.uniform1uiv(this.addr,e)}function np(n,e){n.uniform2uiv(this.addr,e)}function ip(n,e){n.uniform3uiv(this.addr,e)}function rp(n,e){n.uniform4uiv(this.addr,e)}function op(n,e,t){const i=this.cache,r=e.length,o=kr(t,r);dt(i,o)||(n.uniform1iv(this.addr,o),pt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||lc,o[s])}function ap(n,e,t){const i=this.cache,r=e.length,o=kr(t,r);dt(i,o)||(n.uniform1iv(this.addr,o),pt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||fc,o[s])}function sp(n,e,t){const i=this.cache,r=e.length,o=kr(t,r);dt(i,o)||(n.uniform1iv(this.addr,o),pt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||dc,o[s])}function cp(n,e,t){const i=this.cache,r=e.length,o=kr(t,r);dt(i,o)||(n.uniform1iv(this.addr,o),pt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||hc,o[s])}function lp(n){switch(n){case 5126:return Wd;case 35664:return Xd;case 35665:return Yd;case 35666:return jd;case 35674:return qd;case 35675:return Kd;case 35676:return Zd;case 5124:case 35670:return $d;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return cp}}class up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hd(t.type)}}class hp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const c=r[o];c.setValue(e,t[c.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function ps(n,e){n.seq.push(e),n.map[e.id]=e}function dp(n,e,t){const i=n.name,r=i.length;for(Co.lastIndex=0;;){const o=Co.exec(i),s=Co.lastIndex;let c=o[1];const l=o[2]==="]",a=o[3];if(l&&(c=c|0),a===void 0||a==="["&&s+2===r){ps(t,a===void 0?new up(c,n,e):new hp(c,n,e));break}else{let d=t.map[c];d===void 0&&(d=new fp(c),ps(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);dp(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const c=t[o],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ms(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pp=37297;let mp=0;function gp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const c=s+1;i.push(`${c===e?">":" "} ${c}: ${t[s]}`)}return i.join(`
`)}function _p(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Cr&&t===br?i="LinearDisplayP3ToLinearSRGB":e===br&&t===Cr&&(i="LinearSRGBToLinearDisplayP3"),n){case An:case Dr:return[i,"LinearTransferOETF"];case Ut:case Wo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gs(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gp(n.getShaderSource(e),s)}else return r}function vp(n,e){const t=_p(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xp(n,e){let t;switch(e){case ul:t="Linear";break;case hl:t="Reinhard";break;case fl:t="OptimizedCineon";break;case dl:t="ACESFilmic";break;case ml:t="AgX";break;case gl:t="Neutral";break;case pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ep(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function yp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Sp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:c}}return t}function Ni(n){return n!==""}function _s(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vs(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(n){return n.replace(Tp,Ap)}const Mp=new Map;function Ap(n,e){let t=Ze[e];if(t===void 0){const i=Mp.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ko(t)}const Rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xs(n){return n.replace(Rp,bp)}function bp(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Es(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bs?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function wp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vi:case xi:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case cl:e="ENVMAP_BLENDING_MIX";break;case ll:e="ENVMAP_BLENDING_ADD";break}return e}function Ip(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Np(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,c=t.fragmentShader;const l=Cp(t),a=wp(t),f=Pp(t),d=Lp(t),p=Ip(t),m=Ep(t),g=yp(o),_=r.createProgram();let u,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),h.length>0&&(h+=`
`)):(u=[Es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),h=[Es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==yn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),s=ko(s),s=_s(s,t),s=vs(s,t),c=ko(c),c=_s(c,t),c=vs(c,t),s=xs(s),c=xs(c),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",t.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=E+u+s,v=E+h+c,L=ms(r,r.VERTEX_SHADER,x),b=ms(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(N){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(L).trim(),U=r.getShaderInfoLog(b).trim();let H=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,b);else{const j=gs(r,L,"vertex"),W=gs(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+j+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(w===""||U==="")&&(Z=!1);Z&&(N.diagnostics={runnable:H,programLog:I,vertexShader:{log:w,prefix:u},fragmentShader:{log:U,prefix:h}})}r.deleteShader(L),r.deleteShader(b),k=new Mr(r,_),y=Sp(r,_)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,pp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=b,this}let Op=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Up(e),t.set(e,i)),i}}class Up{constructor(e){this.id=Op++,this.code=e,this.usedTimes=0}}function Fp(n,e,t,i,r,o,s){const c=new Qs,l=new Dp,a=new Set,f=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return a.add(y),y===0?"uv":`uv${y}`}function u(y,S,N,I,w){const U=I.fog,H=w.geometry,Z=y.isMeshStandardMaterial?I.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),W=j&&j.mapping===Nr?j.image.height:null,ie=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_e=ae!==void 0?ae.length:0;let ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let xe,ne,V,Q;if(ie){const Ne=jt[ie];xe=Ne.vertexShader,ne=Ne.fragmentShader}else xe=y.vertexShader,ne=y.fragmentShader,l.update(y),V=l.getVertexShaderID(y),Q=l.getFragmentShaderID(y);const $=n.getRenderTarget(),pe=w.isInstancedMesh===!0,me=w.isBatchedMesh===!0,G=!!y.map,Re=!!y.matcap,Ee=!!j,Be=!!y.aoMap,Ie=!!y.lightMap,Ge=!!y.bumpMap,Ue=!!y.normalMap,J=!!y.displacementMap,fe=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,K=y.anisotropy>0,ue=y.clearcoat>0,P=y.dispersion>0,A=y.iridescence>0,F=y.sheen>0,B=y.transmission>0,D=K&&!!y.anisotropyMap,X=ue&&!!y.clearcoatMap,z=ue&&!!y.clearcoatNormalMap,q=ue&&!!y.clearcoatRoughnessMap,oe=A&&!!y.iridescenceMap,he=A&&!!y.iridescenceThicknessMap,le=F&&!!y.sheenColorMap,Se=F&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,He=!!y.specularColorMap,we=!!y.specularIntensityMap,T=B&&!!y.transmissionMap,Y=B&&!!y.thicknessMap,te=!!y.gradientMap,ge=!!y.alphaMap,ve=y.alphaTest>0,De=!!y.alphaHash,Oe=!!y.extensions;let qe=yn;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(qe=n.toneMapping);const et={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:xe,fragmentShader:ne,defines:y.defines,customVertexShaderID:V,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:me,instancing:pe,instancingColor:pe&&w.instanceColor!==null,instancingMorph:pe&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:An,alphaToCoverage:!!y.alphaToCoverage,map:G,matcap:Re,envMap:Ee,envMapMode:Ee&&j.mapping,envMapCubeUVHeight:W,aoMap:Be,lightMap:Ie,bumpMap:Ge,normalMap:Ue,displacementMap:p&&J,emissiveMap:fe,normalMapObjectSpace:Ue&&y.normalMapType===Pl,normalMapTangentSpace:Ue&&y.normalMapType===qs,metalnessMap:C,roughnessMap:M,anisotropy:K,anisotropyMap:D,clearcoat:ue,clearcoatMap:X,clearcoatNormalMap:z,clearcoatRoughnessMap:q,dispersion:P,iridescence:A,iridescenceMap:oe,iridescenceThicknessMap:he,sheen:F,sheenColorMap:le,sheenRoughnessMap:Se,specularMap:Pe,specularColorMap:He,specularIntensityMap:we,transmission:B,transmissionMap:T,thicknessMap:Y,gradientMap:te,opaque:y.transparent===!1&&y.blending===mi&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ve,alphaHash:De,combine:y.combine,mapUv:G&&_(y.map.channel),aoMapUv:Be&&_(y.aoMap.channel),lightMapUv:Ie&&_(y.lightMap.channel),bumpMapUv:Ge&&_(y.bumpMap.channel),normalMapUv:Ue&&_(y.normalMap.channel),displacementMapUv:J&&_(y.displacementMap.channel),emissiveMapUv:fe&&_(y.emissiveMap.channel),metalnessMapUv:C&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:D&&_(y.anisotropyMap.channel),clearcoatMapUv:X&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:z&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:Pe&&_(y.specularMap.channel),specularColorMapUv:He&&_(y.specularColorMap.channel),specularIntensityMapUv:we&&_(y.specularIntensityMap.channel),transmissionMapUv:T&&_(y.transmissionMap.channel),thicknessMapUv:Y&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ue||K),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!H.attributes.uv&&(G||ge),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:G&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===Tt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=a.has(1),et.vertexUv2s=a.has(2),et.vertexUv3s=a.has(3),a.clear(),et}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(E(S,y),x(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){c.disableAll(),S.supportsVertexTextures&&c.enable(0),S.instancing&&c.enable(1),S.instancingColor&&c.enable(2),S.instancingMorph&&c.enable(3),S.matcap&&c.enable(4),S.envMap&&c.enable(5),S.normalMapObjectSpace&&c.enable(6),S.normalMapTangentSpace&&c.enable(7),S.clearcoat&&c.enable(8),S.iridescence&&c.enable(9),S.alphaTest&&c.enable(10),S.vertexColors&&c.enable(11),S.vertexAlphas&&c.enable(12),S.vertexUv1s&&c.enable(13),S.vertexUv2s&&c.enable(14),S.vertexUv3s&&c.enable(15),S.vertexTangents&&c.enable(16),S.anisotropy&&c.enable(17),S.alphaHash&&c.enable(18),S.batching&&c.enable(19),S.dispersion&&c.enable(20),y.push(c.mask),c.disableAll(),S.fog&&c.enable(0),S.useFog&&c.enable(1),S.flatShading&&c.enable(2),S.logarithmicDepthBuffer&&c.enable(3),S.skinning&&c.enable(4),S.morphTargets&&c.enable(5),S.morphNormals&&c.enable(6),S.morphColors&&c.enable(7),S.premultipliedAlpha&&c.enable(8),S.shadowMapEnabled&&c.enable(9),S.useLegacyLights&&c.enable(10),S.doubleSided&&c.enable(11),S.flipSided&&c.enable(12),S.useDepthPacking&&c.enable(13),S.dithering&&c.enable(14),S.transmission&&c.enable(15),S.sheen&&c.enable(16),S.opaque&&c.enable(17),S.pointsUvs&&c.enable(18),S.decodeVideoTexture&&c.enable(19),S.alphaToCoverage&&c.enable(20),y.push(c.mask)}function v(y){const S=g[y.type];let N;if(S){const I=jt[S];N=Eu.clone(I.uniforms)}else N=y.uniforms;return N}function L(y,S){let N;for(let I=0,w=f.length;I<w;I++){const U=f[I];if(U.cacheKey===S){N=U,++N.usedTimes;break}}return N===void 0&&(N=new Np(n,S,y,o),f.push(N)),N}function b(y){if(--y.usedTimes===0){const S=f.indexOf(y);f[S]=f[f.length-1],f.pop(),y.destroy()}}function R(y){l.remove(y)}function k(){l.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:v,acquireProgram:L,releaseProgram:b,releaseShaderCache:R,programs:f,dispose:k}}function kp(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,c){n.get(o)[s]=c}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Bp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ys(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ss(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,m,g,_,u){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:u},n[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=u),e++,h}function c(d,p,m,g,_,u){const h=s(d,p,m,g,_,u);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,p,m,g,_,u){const h=s(d,p,m,g,_,u);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function a(d,p){t.length>1&&t.sort(d||Bp),i.length>1&&i.sort(p||ys),r.length>1&&r.sort(p||ys)}function f(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:f,sort:a}}function zp(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Ss,n.set(i,[s])):r>=o.length?(s=new Ss,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Je};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function Gp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hp=0;function Wp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xp(n){const e=new Vp,t=Gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new ee);const r=new ee,o=new lt,s=new lt;function c(a,f){let d=0,p=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,_=0,u=0,h=0,E=0,x=0,v=0,L=0,b=0,R=0,k=0;a.sort(Wp);const y=f===!0?Math.PI:1;for(let N=0,I=a.length;N<I;N++){const w=a[N],U=w.color,H=w.intensity,Z=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=U.r*H*y,p+=U.g*H*y,m+=U.b*H*y;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],H);k++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity*y),w.castShadow){const ie=w.shadow,ae=t.get(w);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,i.directionalShadow[g]=ae,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=w.shadow.matrix,x++}i.directional[g]=W,g++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(U).multiplyScalar(H*y),W.distance=Z,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[u]=W;const ie=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,ie.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[u]=ie.matrix,w.castShadow){const ae=t.get(w);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,i.spotShadow[u]=ae,i.spotShadowMap[u]=j,L++}u++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[h]=W,h++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity*y),W.distance=w.distance,W.decay=w.decay,w.castShadow){const ie=w.shadow,ae=t.get(w);ae.shadowBias=ie.bias,ae.shadowNormalBias=ie.normalBias,ae.shadowRadius=ie.radius,ae.shadowMapSize=ie.mapSize,ae.shadowCameraNear=ie.camera.near,ae.shadowCameraFar=ie.camera.far,i.pointShadow[_]=ae,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=W,_++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(H*y),W.groundColor.copy(w.groundColor).multiplyScalar(H*y),i.hemi[E]=W,E++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==g||S.pointLength!==_||S.spotLength!==u||S.rectAreaLength!==h||S.hemiLength!==E||S.numDirectionalShadows!==x||S.numPointShadows!==v||S.numSpotShadows!==L||S.numSpotMaps!==b||S.numLightProbes!==k)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=h,i.point.length=_,i.hemi.length=E,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=L+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=k,S.directionalLength=g,S.pointLength=_,S.spotLength=u,S.rectAreaLength=h,S.hemiLength=E,S.numDirectionalShadows=x,S.numPointShadows=v,S.numSpotShadows=L,S.numSpotMaps=b,S.numLightProbes=k,i.version=Hp++)}function l(a,f){let d=0,p=0,m=0,g=0,_=0;const u=f.matrixWorldInverse;for(let h=0,E=a.length;h<E;h++){const x=a[h];if(x.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(u),d++}else if(x.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(u),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(u),m++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(u),s.identity(),o.copy(x.matrixWorld),o.premultiply(u),s.extractRotation(o),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(u),_++}}}return{setup:c,setupView:l,state:i}}function Ts(n){const e=new Xp(n),t=[],i=[];function r(f){a.camera=f,t.length=0,i.length=0}function o(f){t.push(f)}function s(f){i.push(f)}function c(f){e.setup(t,f)}function l(f){e.setupView(t,f)}const a={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:a,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Yp(n){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let c;return s===void 0?(c=new Ts(n),e.set(r,[c])):o>=s.length?(c=new Ts(n),s.push(c)):c=s[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}class jp extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qp extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $p(n,e,t){let i=new Yo;const r=new Ve,o=new Ve,s=new gt,c=new jp({depthPacking:wl}),l=new qp,a={},f=t.maxTextureSize,d={[ln]:Tt,[Tt]:ln,[qt]:qt},p=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Kp,fragmentShader:Zp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let h=this.type;this.render=function(b,R,k){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||b.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),I=n.state;I.setBlending(En),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const w=h!==an&&this.type===an,U=h===an&&this.type!==an;for(let H=0,Z=b.length;H<Z;H++){const j=b[H],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ie=W.getFrameExtents();if(r.multiply(ie),o.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/ie.x),r.x=o.x*ie.x,W.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/ie.y),r.y=o.y*ie.y,W.mapSize.y=o.y)),W.map===null||w===!0||U===!0){const _e=this.type!==an?{minFilter:Ct,magFilter:Ct}:{};W.map!==null&&W.map.dispose(),W.map=new kn(r.x,r.y,_e),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ae=W.getViewportCount();for(let _e=0;_e<ae;_e++){const ye=W.getViewport(_e);s.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),I.viewport(s),W.updateMatrices(j,_e),i=W.getFrustum(),v(R,k,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===an&&E(W,k),W.needsUpdate=!1}h=this.type,u.needsUpdate=!1,n.setRenderTarget(y,S,N)};function E(b,R){const k=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kn(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,k,p,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,k,m,_,null)}function x(b,R,k,y){let S=null;const N=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=k.isPointLight===!0?l:c,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=S.uuid,w=R.uuid;let U=a[I];U===void 0&&(U={},a[I]=U);let H=U[w];H===void 0&&(H=S.clone(),U[w]=H,R.addEventListener("dispose",L)),S=H}if(S.visible=R.visible,S.wireframe=R.wireframe,y===an?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=n.properties.get(S);I.light=k}return S}function v(b,R,k,y,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===an)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const w=e.update(b),U=b.material;if(Array.isArray(U)){const H=w.groups;for(let Z=0,j=H.length;Z<j;Z++){const W=H[Z],ie=U[W.materialIndex];if(ie&&ie.visible){const ae=x(b,ie,y,S);b.onBeforeShadow(n,b,R,k,w,ae,W),n.renderBufferDirect(k,null,w,ae,b,W),b.onAfterShadow(n,b,R,k,w,ae,W)}}}else if(U.visible){const H=x(b,U,y,S);b.onBeforeShadow(n,b,R,k,w,H,null),n.renderBufferDirect(k,null,w,H,b,null),b.onAfterShadow(n,b,R,k,w,H,null)}}const I=b.children;for(let w=0,U=I.length;w<U;w++)v(I[w],R,k,y,S)}function L(b){b.target.removeEventListener("dispose",L);for(const k in a){const y=a[k],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Jp(n){function e(){let T=!1;const Y=new gt;let te=null;const ge=new gt(0,0,0,0);return{setMask:function(ve){te!==ve&&!T&&(n.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){T=ve},setClear:function(ve,De,Oe,qe,et){et===!0&&(ve*=qe,De*=qe,Oe*=qe),Y.set(ve,De,Oe,qe),ge.equals(Y)===!1&&(n.clearColor(ve,De,Oe,qe),ge.copy(Y))},reset:function(){T=!1,te=null,ge.set(-1,0,0,0)}}}function t(){let T=!1,Y=null,te=null,ge=null;return{setTest:function(ve){ve?Q(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(ve){Y!==ve&&!T&&(n.depthMask(ve),Y=ve)},setFunc:function(ve){if(te!==ve){switch(ve){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ve}},setLocked:function(ve){T=ve},setClear:function(ve){ge!==ve&&(n.clearDepth(ve),ge=ve)},reset:function(){T=!1,Y=null,te=null,ge=null}}}function i(){let T=!1,Y=null,te=null,ge=null,ve=null,De=null,Oe=null,qe=null,et=null;return{setTest:function(Ne){T||(Ne?Q(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(Ne){Y!==Ne&&!T&&(n.stencilMask(Ne),Y=Ne)},setFunc:function(Ne,Me,Te){(te!==Ne||ge!==Me||ve!==Te)&&(n.stencilFunc(Ne,Me,Te),te=Ne,ge=Me,ve=Te)},setOp:function(Ne,Me,Te){(De!==Ne||Oe!==Me||qe!==Te)&&(n.stencilOp(Ne,Me,Te),De=Ne,Oe=Me,qe=Te)},setLocked:function(Ne){T=Ne},setClear:function(Ne){et!==Ne&&(n.clearStencil(Ne),et=Ne)},reset:function(){T=!1,Y=null,te=null,ge=null,ve=null,De=null,Oe=null,qe=null,et=null}}}const r=new e,o=new t,s=new i,c=new WeakMap,l=new WeakMap;let a={},f={},d=new WeakMap,p=[],m=null,g=!1,_=null,u=null,h=null,E=null,x=null,v=null,L=null,b=new Je(0,0,0),R=0,k=!1,y=null,S=null,N=null,I=null,w=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=Z>=2);let W=null,ie={};const ae=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ye=new gt().fromArray(ae),xe=new gt().fromArray(_e);function ne(T,Y,te,ge){const ve=new Uint8Array(4),De=n.createTexture();n.bindTexture(T,De),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<te;Oe++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Y+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return De}const V={};V[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),Q(n.DEPTH_TEST),o.setFunc(Ar),Ge(!1),Ue(ia),Q(n.CULL_FACE),Be(En);function Q(T){a[T]!==!0&&(n.enable(T),a[T]=!0)}function $(T){a[T]!==!1&&(n.disable(T),a[T]=!1)}function pe(T,Y){return f[T]!==Y?(n.bindFramebuffer(T,Y),f[T]=Y,T===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Y),T===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function me(T,Y){let te=p,ge=!1;if(T){te=d.get(Y),te===void 0&&(te=[],d.set(Y,te));const ve=T.textures;if(te.length!==ve.length||te[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Oe=ve.length;De<Oe;De++)te[De]=n.COLOR_ATTACHMENT0+De;te.length=ve.length,ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ge=!0);ge&&n.drawBuffers(te)}function G(T){return m!==T?(n.useProgram(T),m=T,!0):!1}const Re={[On]:n.FUNC_ADD,[kc]:n.FUNC_SUBTRACT,[Bc]:n.FUNC_REVERSE_SUBTRACT};Re[zc]=n.MIN,Re[Vc]=n.MAX;const Ee={[Gc]:n.ZERO,[Hc]:n.ONE,[Wc]:n.SRC_COLOR,[No]:n.SRC_ALPHA,[Zc]:n.SRC_ALPHA_SATURATE,[qc]:n.DST_COLOR,[Yc]:n.DST_ALPHA,[Xc]:n.ONE_MINUS_SRC_COLOR,[Oo]:n.ONE_MINUS_SRC_ALPHA,[Kc]:n.ONE_MINUS_DST_COLOR,[jc]:n.ONE_MINUS_DST_ALPHA,[$c]:n.CONSTANT_COLOR,[Jc]:n.ONE_MINUS_CONSTANT_COLOR,[Qc]:n.CONSTANT_ALPHA,[el]:n.ONE_MINUS_CONSTANT_ALPHA};function Be(T,Y,te,ge,ve,De,Oe,qe,et,Ne){if(T===En){g===!0&&($(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),T!==Fc){if(T!==_||Ne!==k){if((u!==On||x!==On)&&(n.blendEquation(n.FUNC_ADD),u=On,x=On),Ne)switch(T){case mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ra:n.blendFunc(n.ONE,n.ONE);break;case oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case aa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ra:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case aa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}h=null,E=null,v=null,L=null,b.set(0,0,0),R=0,_=T,k=Ne}return}ve=ve||Y,De=De||te,Oe=Oe||ge,(Y!==u||ve!==x)&&(n.blendEquationSeparate(Re[Y],Re[ve]),u=Y,x=ve),(te!==h||ge!==E||De!==v||Oe!==L)&&(n.blendFuncSeparate(Ee[te],Ee[ge],Ee[De],Ee[Oe]),h=te,E=ge,v=De,L=Oe),(qe.equals(b)===!1||et!==R)&&(n.blendColor(qe.r,qe.g,qe.b,et),b.copy(qe),R=et),_=T,k=!1}function Ie(T,Y){T.side===qt?$(n.CULL_FACE):Q(n.CULL_FACE);let te=T.side===Tt;Y&&(te=!te),Ge(te),T.blending===mi&&T.transparent===!1?Be(En):Be(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);const ge=T.stencilWrite;s.setTest(ge),ge&&(s.setMask(T.stencilWriteMask),s.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),s.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),fe(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(T){y!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),y=T)}function Ue(T){T!==Oc?(Q(n.CULL_FACE),T!==S&&(T===ia?n.cullFace(n.BACK):T===Dc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),S=T}function J(T){T!==N&&(H&&n.lineWidth(T),N=T)}function fe(T,Y,te){T?(Q(n.POLYGON_OFFSET_FILL),(I!==Y||w!==te)&&(n.polygonOffset(Y,te),I=Y,w=te)):$(n.POLYGON_OFFSET_FILL)}function C(T){T?Q(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function M(T){T===void 0&&(T=n.TEXTURE0+U-1),W!==T&&(n.activeTexture(T),W=T)}function K(T,Y,te){te===void 0&&(W===null?te=n.TEXTURE0+U-1:te=W);let ge=ie[te];ge===void 0&&(ge={type:void 0,texture:void 0},ie[te]=ge),(ge.type!==T||ge.texture!==Y)&&(W!==te&&(n.activeTexture(te),W=te),n.bindTexture(T,Y||V[T]),ge.type=T,ge.texture=Y)}function ue(){const T=ie[W];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function P(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function A(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function F(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function B(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function D(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function X(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function oe(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(T){ye.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),ye.copy(T))}function Se(T){xe.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),xe.copy(T))}function Pe(T,Y){let te=l.get(Y);te===void 0&&(te=new WeakMap,l.set(Y,te));let ge=te.get(T);ge===void 0&&(ge=n.getUniformBlockIndex(Y,T.name),te.set(T,ge))}function He(T,Y){const ge=l.get(Y).get(T);c.get(Y)!==ge&&(n.uniformBlockBinding(Y,ge,T.__bindingPointIndex),c.set(Y,ge))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),a={},W=null,ie={},f={},d=new WeakMap,p=[],m=null,g=!1,_=null,u=null,h=null,E=null,x=null,v=null,L=null,b=new Je(0,0,0),R=0,k=!1,y=null,S=null,N=null,I=null,w=null,ye.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:Q,disable:$,bindFramebuffer:pe,drawBuffers:me,useProgram:G,setBlending:Be,setMaterial:Ie,setFlipSided:Ge,setCullFace:Ue,setLineWidth:J,setPolygonOffset:fe,setScissorTest:C,activeTexture:M,bindTexture:K,unbindTexture:ue,compressedTexImage2D:P,compressedTexImage3D:A,texImage2D:oe,texImage3D:he,updateUBOMapping:Pe,uniformBlockBinding:He,texStorage2D:z,texStorage3D:q,texSubImage2D:F,texSubImage3D:B,compressedTexSubImage2D:D,compressedTexSubImage3D:X,scissor:le,viewport:Se,reset:we}}function Qp(n,e,t,i,r,o,s){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Ve,f=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):zi("canvas")}function _(C,M,K){let ue=1;const P=fe(C);if((P.width>K||P.height>K)&&(ue=K/Math.max(P.width,P.height)),ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const A=Math.floor(ue*P.width),F=Math.floor(ue*P.height);d===void 0&&(d=g(A,F));const B=M?g(A,F):d;return B.width=A,B.height=F,B.getContext("2d").drawImage(C,0,0,A,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+A+"x"+F+")."),B}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),C;return C}function u(C){return C.generateMipmaps&&C.minFilter!==Ct&&C.minFilter!==Wt}function h(C){n.generateMipmap(C)}function E(C,M,K,ue,P=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let A=M;if(M===n.RED&&(K===n.FLOAT&&(A=n.R32F),K===n.HALF_FLOAT&&(A=n.R16F),K===n.UNSIGNED_BYTE&&(A=n.R8)),M===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(A=n.R8UI),K===n.UNSIGNED_SHORT&&(A=n.R16UI),K===n.UNSIGNED_INT&&(A=n.R32UI),K===n.BYTE&&(A=n.R8I),K===n.SHORT&&(A=n.R16I),K===n.INT&&(A=n.R32I)),M===n.RG&&(K===n.FLOAT&&(A=n.RG32F),K===n.HALF_FLOAT&&(A=n.RG16F),K===n.UNSIGNED_BYTE&&(A=n.RG8)),M===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(A=n.RG8UI),K===n.UNSIGNED_SHORT&&(A=n.RG16UI),K===n.UNSIGNED_INT&&(A=n.RG32UI),K===n.BYTE&&(A=n.RG8I),K===n.SHORT&&(A=n.RG16I),K===n.INT&&(A=n.RG32I)),M===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(A=n.RGB9_E5),M===n.RGBA){const F=P?Rr:ot.getTransfer(ue);K===n.FLOAT&&(A=n.RGBA32F),K===n.HALF_FLOAT&&(A=n.RGBA16F),K===n.UNSIGNED_BYTE&&(A=F===at?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(A=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(A=n.RGB5_A1)}return(A===n.R16F||A===n.R32F||A===n.RG16F||A===n.RG32F||A===n.RGBA16F||A===n.RGBA32F)&&e.get("EXT_color_buffer_float"),A}function x(C,M){return u(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Wt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function v(C){const M=C.target;M.removeEventListener("dispose",v),b(M),M.isVideoTexture&&f.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),k(M)}function b(C){const M=i.get(C);if(M.__webglInit===void 0)return;const K=C.source,ue=p.get(K);if(ue){const P=ue[M.__cacheKey];P.usedTimes--,P.usedTimes===0&&R(C),Object.keys(ue).length===0&&p.delete(K)}i.remove(C)}function R(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const K=C.source,ue=p.get(K);delete ue[M.__cacheKey],s.memory.textures--}function k(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let P=0;P<M.__webglFramebuffer[ue].length;P++)n.deleteFramebuffer(M.__webglFramebuffer[ue][P]);else n.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)n.deleteFramebuffer(M.__webglFramebuffer[ue]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=C.textures;for(let ue=0,P=K.length;ue<P;ue++){const A=i.get(K[ue]);A.__webglTexture&&(n.deleteTexture(A.__webglTexture),s.memory.textures--),i.remove(K[ue])}i.remove(C)}let y=0;function S(){y=0}function N(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function w(C,M){const K=i.get(C);if(C.isVideoTexture&&Ue(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){const ue=C.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(K,C,M);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+M)}function U(C,M){const K=i.get(C);if(C.version>0&&K.__version!==C.version){ye(K,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+M)}function H(C,M){const K=i.get(C);if(C.version>0&&K.__version!==C.version){ye(K,C,M);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+M)}function Z(C,M){const K=i.get(C);if(C.version>0&&K.__version!==C.version){xe(K,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+M)}const j={[Un]:n.REPEAT,[Xt]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},W={[Ct]:n.NEAREST,[_l]:n.NEAREST_MIPMAP_NEAREST,[Ki]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Jr]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},ie={[Ll]:n.NEVER,[Fl]:n.ALWAYS,[Il]:n.LESS,[Ks]:n.LEQUAL,[Nl]:n.EQUAL,[Ul]:n.GEQUAL,[Ol]:n.GREATER,[Dl]:n.NOTEQUAL};function ae(C,M){if(M.type===xn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wt||M.magFilter===Jr||M.magFilter===Ki||M.magFilter===Fn||M.minFilter===Wt||M.minFilter===Jr||M.minFilter===Ki||M.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,j[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,W[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ct||M.minFilter!==Ki&&M.minFilter!==Fn||M.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function _e(C,M){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",v));const ue=M.source;let P=p.get(ue);P===void 0&&(P={},p.set(ue,P));const A=I(M);if(A!==C.__cacheKey){P[A]===void 0&&(P[A]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,K=!0),P[A].usedTimes++;const F=P[C.__cacheKey];F!==void 0&&(P[C.__cacheKey].usedTimes--,F.usedTimes===0&&R(M)),C.__cacheKey=A,C.__webglTexture=P[A].texture}return K}function ye(C,M,K){let ue=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=n.TEXTURE_3D);const P=_e(C,M),A=M.source;t.bindTexture(ue,C.__webglTexture,n.TEXTURE0+K);const F=i.get(A);if(A.version!==F.__version||P===!0){t.activeTexture(n.TEXTURE0+K);const B=ot.getPrimaries(ot.workingColorSpace),D=M.colorSpace===vn?null:ot.getPrimaries(M.colorSpace),X=M.colorSpace===vn||B===D?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let z=_(M.image,!1,r.maxTextureSize);z=J(M,z);const q=o.convert(M.format,M.colorSpace),oe=o.convert(M.type);let he=E(M.internalFormat,q,oe,M.colorSpace,M.isVideoTexture);ae(ue,M);let le;const Se=M.mipmaps,Pe=M.isVideoTexture!==!0,He=F.__version===void 0||P===!0,we=A.dataReady,T=x(M,z);if(M.isDepthTexture)he=n.DEPTH_COMPONENT16,M.type===xn?he=n.DEPTH_COMPONENT32F:M.type===Ei?he=n.DEPTH_COMPONENT24:M.type===Wi&&(he=n.DEPTH24_STENCIL8),He&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,he,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,he,z.width,z.height,0,q,oe,null));else if(M.isDataTexture)if(Se.length>0){Pe&&He&&t.texStorage2D(n.TEXTURE_2D,T,he,Se[0].width,Se[0].height);for(let Y=0,te=Se.length;Y<te;Y++)le=Se[Y],Pe?we&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,le.width,le.height,q,oe,le.data):t.texImage2D(n.TEXTURE_2D,Y,he,le.width,le.height,0,q,oe,le.data);M.generateMipmaps=!1}else Pe?(He&&t.texStorage2D(n.TEXTURE_2D,T,he,z.width,z.height),we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,z.width,z.height,q,oe,z.data)):t.texImage2D(n.TEXTURE_2D,0,he,z.width,z.height,0,q,oe,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,T,he,Se[0].width,Se[0].height,z.depth);for(let Y=0,te=Se.length;Y<te;Y++)le=Se[Y],M.format!==Zt?q!==null?Pe?we&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,z.depth,q,le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,he,le.width,le.height,z.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,z.depth,q,oe,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,he,le.width,le.height,z.depth,0,q,oe,le.data)}else{Pe&&He&&t.texStorage2D(n.TEXTURE_2D,T,he,Se[0].width,Se[0].height);for(let Y=0,te=Se.length;Y<te;Y++)le=Se[Y],M.format!==Zt?q!==null?Pe?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,le.width,le.height,q,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?we&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,le.width,le.height,q,oe,le.data):t.texImage2D(n.TEXTURE_2D,Y,he,le.width,le.height,0,q,oe,le.data)}else if(M.isDataArrayTexture)Pe?(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,T,he,z.width,z.height,z.depth),we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,q,oe,z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,z.width,z.height,z.depth,0,q,oe,z.data);else if(M.isData3DTexture)Pe?(He&&t.texStorage3D(n.TEXTURE_3D,T,he,z.width,z.height,z.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,q,oe,z.data)):t.texImage3D(n.TEXTURE_3D,0,he,z.width,z.height,z.depth,0,q,oe,z.data);else if(M.isFramebufferTexture){if(He)if(Pe)t.texStorage2D(n.TEXTURE_2D,T,he,z.width,z.height);else{let Y=z.width,te=z.height;for(let ge=0;ge<T;ge++)t.texImage2D(n.TEXTURE_2D,ge,he,Y,te,0,q,oe,null),Y>>=1,te>>=1}}else if(Se.length>0){if(Pe&&He){const Y=fe(Se[0]);t.texStorage2D(n.TEXTURE_2D,T,he,Y.width,Y.height)}for(let Y=0,te=Se.length;Y<te;Y++)le=Se[Y],Pe?we&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,q,oe,le):t.texImage2D(n.TEXTURE_2D,Y,he,q,oe,le);M.generateMipmaps=!1}else if(Pe){if(He){const Y=fe(z);t.texStorage2D(n.TEXTURE_2D,T,he,Y.width,Y.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,q,oe,z)}else t.texImage2D(n.TEXTURE_2D,0,he,q,oe,z);u(M)&&h(ue),F.__version=A.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xe(C,M,K){if(M.image.length!==6)return;const ue=_e(C,M),P=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+K);const A=i.get(P);if(P.version!==A.__version||ue===!0){t.activeTexture(n.TEXTURE0+K);const F=ot.getPrimaries(ot.workingColorSpace),B=M.colorSpace===vn?null:ot.getPrimaries(M.colorSpace),D=M.colorSpace===vn||F===B?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const X=M.isCompressedTexture||M.image[0].isCompressedTexture,z=M.image[0]&&M.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!X&&!z?q[te]=_(M.image[te],!0,r.maxCubemapSize):q[te]=z?M.image[te].image:M.image[te],q[te]=J(M,q[te]);const oe=q[0],he=o.convert(M.format,M.colorSpace),le=o.convert(M.type),Se=E(M.internalFormat,he,le,M.colorSpace),Pe=M.isVideoTexture!==!0,He=A.__version===void 0||ue===!0,we=P.dataReady;let T=x(M,oe);ae(n.TEXTURE_CUBE_MAP,M);let Y;if(X){Pe&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,T,Se,oe.width,oe.height);for(let te=0;te<6;te++){Y=q[te].mipmaps;for(let ge=0;ge<Y.length;ge++){const ve=Y[ge];M.format!==Zt?he!==null?Pe?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,ve.width,ve.height,he,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,0,0,ve.width,ve.height,he,le,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge,Se,ve.width,ve.height,0,he,le,ve.data)}}}else{if(Y=M.mipmaps,Pe&&He){Y.length>0&&T++;const te=fe(q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,T,Se,te.width,te.height)}for(let te=0;te<6;te++)if(z){Pe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,q[te].width,q[te].height,he,le,q[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Se,q[te].width,q[te].height,0,he,le,q[te].data);for(let ge=0;ge<Y.length;ge++){const De=Y[ge].image[te].image;Pe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,De.width,De.height,he,le,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Se,De.width,De.height,0,he,le,De.data)}}else{Pe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he,le,q[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Se,he,le,q[te]);for(let ge=0;ge<Y.length;ge++){const ve=Y[ge];Pe?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,0,0,he,le,ve.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge+1,Se,he,le,ve.image[te])}}}u(M)&&h(n.TEXTURE_CUBE_MAP),A.__version=P.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,K,ue,P,A){const F=o.convert(K.format,K.colorSpace),B=o.convert(K.type),D=E(K.internalFormat,F,B,K.colorSpace);if(!i.get(M).__hasExternalTextures){const z=Math.max(1,M.width>>A),q=Math.max(1,M.height>>A);P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?t.texImage3D(P,A,D,z,q,M.depth,0,F,B,null):t.texImage2D(P,A,D,z,q,0,F,B,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ge(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,P,i.get(K).__webglTexture,0,Ie(M)):(P===n.TEXTURE_2D||P>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,P,i.get(K).__webglTexture,A),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(C,M,K){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ue=n.DEPTH_COMPONENT24;if(K||Ge(M)){const P=M.depthTexture;P&&P.isDepthTexture&&(P.type===xn?ue=n.DEPTH_COMPONENT32F:P.type===Ei&&(ue=n.DEPTH_COMPONENT24));const A=Ie(M);Ge(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A,ue,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,A,ue,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ue,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ue=Ie(M);K&&Ge(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,M.width,M.height):Ge(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const ue=M.textures;for(let P=0;P<ue.length;P++){const A=ue[P],F=o.convert(A.format,A.colorSpace),B=o.convert(A.type),D=E(A.internalFormat,F,B,A.colorSpace),X=Ie(M);K&&Ge(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,X,D,M.width,M.height):Ge(M)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,D,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,D,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),w(M.depthTexture,0);const ue=i.get(M.depthTexture).__webglTexture,P=Ie(M);if(M.depthTexture.format===gi)Ge(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(M.depthTexture.format===ki)Ge(M)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,P):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function $(C){const M=i.get(C),K=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Q(M.__webglFramebuffer,C)}else if(K){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]=n.createRenderbuffer(),V(M.__webglDepthbuffer[ue],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),V(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(C,M,K){const ue=i.get(C);M!==void 0&&ne(ue.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&$(C)}function me(C){const M=C.texture,K=i.get(C),ue=i.get(M);C.addEventListener("dispose",L);const P=C.textures,A=C.isWebGLCubeRenderTarget===!0,F=P.length>1;if(F||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=M.version,s.memory.textures++),A){K.__webglFramebuffer=[];for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[B]=[];for(let D=0;D<M.mipmaps.length;D++)K.__webglFramebuffer[B][D]=n.createFramebuffer()}else K.__webglFramebuffer[B]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let B=0;B<M.mipmaps.length;B++)K.__webglFramebuffer[B]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(F)for(let B=0,D=P.length;B<D;B++){const X=i.get(P[B]);X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture(),s.memory.textures++)}if(C.samples>0&&Ge(C)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let B=0;B<P.length;B++){const D=P[B];K.__webglColorRenderbuffer[B]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[B]);const X=o.convert(D.format,D.colorSpace),z=o.convert(D.type),q=E(D.internalFormat,X,z,D.colorSpace,C.isXRRenderTarget===!0),oe=Ie(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,q,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+B,n.RENDERBUFFER,K.__webglColorRenderbuffer[B])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),V(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(A){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),ae(n.TEXTURE_CUBE_MAP,M);for(let B=0;B<6;B++)if(M.mipmaps&&M.mipmaps.length>0)for(let D=0;D<M.mipmaps.length;D++)ne(K.__webglFramebuffer[B][D],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,D);else ne(K.__webglFramebuffer[B],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);u(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let B=0,D=P.length;B<D;B++){const X=P[B],z=i.get(X);t.bindTexture(n.TEXTURE_2D,z.__webglTexture),ae(n.TEXTURE_2D,X),ne(K.__webglFramebuffer,C,X,n.COLOR_ATTACHMENT0+B,n.TEXTURE_2D,0),u(X)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let B=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(B=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(B,ue.__webglTexture),ae(B,M),M.mipmaps&&M.mipmaps.length>0)for(let D=0;D<M.mipmaps.length;D++)ne(K.__webglFramebuffer[D],C,M,n.COLOR_ATTACHMENT0,B,D);else ne(K.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,B,0);u(M)&&h(B),t.unbindTexture()}C.depthBuffer&&$(C)}function G(C){const M=C.textures;for(let K=0,ue=M.length;K<ue;K++){const P=M[K];if(u(P)){const A=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,F=i.get(P).__webglTexture;t.bindTexture(A,F),h(A),t.unbindTexture()}}}const Re=[],Ee=[];function Be(C){if(C.samples>0){if(Ge(C)===!1){const M=C.textures,K=C.width,ue=C.height;let P=n.COLOR_BUFFER_BIT;const A=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=i.get(C),B=M.length>1;if(B)for(let D=0;D<M.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let D=0;D<M.length;D++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(P|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(P|=n.STENCIL_BUFFER_BIT)),B){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,F.__webglColorRenderbuffer[D]);const X=i.get(M[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,K,ue,0,0,K,ue,P,n.NEAREST),l===!0&&(Re.length=0,Ee.length=0,Re.push(n.COLOR_ATTACHMENT0+D),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Re.push(A),Ee.push(A),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),B)for(let D=0;D<M.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,F.__webglColorRenderbuffer[D]);const X=i.get(M[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,F.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,X,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ie(C){return Math.min(r.maxSamples,C.samples)}function Ge(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(C){const M=s.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function J(C,M){const K=C.colorSpace,ue=C.format,P=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||K!==An&&K!==vn&&(ot.getTransfer(K)===at?(ue!==Zt||P!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(a.width=C.naturalWidth||C.width,a.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(a.width=C.displayWidth,a.height=C.displayHeight):(a.width=C.width,a.height=C.height),a}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=w,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ge}function em(n,e){function t(i,r=vn){let o;const s=ot.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Hs)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ws)return n.UNSIGNED_SHORT_5_5_5_1;if(i===El)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vl)return n.BYTE;if(i===xl)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Gs)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Or)return n.HALF_FLOAT;if(i===yl)return n.ALPHA;if(i===Sl)return n.RGB;if(i===Zt)return n.RGBA;if(i===Tl)return n.LUMINANCE;if(i===Ml)return n.LUMINANCE_ALPHA;if(i===gi)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Al)return n.RED;if(i===Xs)return n.RED_INTEGER;if(i===Rl)return n.RG;if(i===Ys)return n.RG_INTEGER;if(i===js)return n.RGBA_INTEGER;if(i===Qr||i===eo||i===to||i===no)if(s===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Qr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Qr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sa||i===ca||i===la||i===ua)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===sa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ua)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ha||i===fa||i===da)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ha||i===fa)return s===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===da)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pa||i===ma||i===ga||i===_a||i===va||i===xa||i===Ea||i===ya||i===Sa||i===Ta||i===Ma||i===Aa||i===Ra||i===ba)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===pa)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ma)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ga)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_a)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xa)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ea)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sa)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ta)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ma)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ra)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return s===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===Ca||i===wa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===io)return s===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Pa||i===La||i===Ia)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===io)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Pa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class tm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nm={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const c=this._targetRay,l=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){s=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,i),h=this._getHandJoint(a,_);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const f=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],p=f.position.distanceTo(d.position),m=.02,g=.005;a.inputState.pinching&&p>m+g?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&p<=m-g&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),a!==null&&(a.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Mt,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Mn({vertexShader:im,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new kt(new Fr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class am extends zn{constructor(e,t){super();const i=this;let r=null,o=1,s=null,c="local-floor",l=1,a=null,f=null,d=null,p=null,m=null,g=null;const _=new om,u=t.getContextAttributes();let h=null,E=null;const x=[],v=[],L=new Ve;let b=null;const R=new Ft;R.layers.enable(1),R.viewport=new gt;const k=new Ft;k.layers.enable(2),k.viewport=new gt;const y=[R,k],S=new tm;S.layers.enable(1),S.layers.enable(2);let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let V=x[ne];return V===void 0&&(V=new wo,x[ne]=V),V.getTargetRaySpace()},this.getControllerGrip=function(ne){let V=x[ne];return V===void 0&&(V=new wo,x[ne]=V),V.getGripSpace()},this.getHand=function(ne){let V=x[ne];return V===void 0&&(V=new wo,x[ne]=V),V.getHandSpace()};function w(ne){const V=v.indexOf(ne.inputSource);if(V===-1)return;const Q=x[V];Q!==void 0&&(Q.update(ne.inputSource,ne.frame,a||s),Q.dispatchEvent({type:ne.type,data:ne.inputSource}))}function U(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",H);for(let ne=0;ne<x.length;ne++){const V=v[ne];V!==null&&(v[ne]=null,x[ne].disconnect(V))}N=null,I=null,_.reset(),e.setRenderTarget(h),m=null,p=null,d=null,r=null,E=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||s},this.setReferenceSpace=function(ne){a=ne},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",U),r.addEventListener("inputsourceschange",H),u.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const V={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new kn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let V=null,Q=null,$=null;u.depth&&($=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=u.stencil?ki:gi,Q=u.stencil?Wi:Ei);const pe={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:o};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(pe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new kn(p.textureWidth,p.textureHeight,{format:Zt,type:Sn,depthTexture:new cc(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),a=null,s=await r.requestReferenceSpace(c),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(ne){for(let V=0;V<ne.removed.length;V++){const Q=ne.removed[V],$=v.indexOf(Q);$>=0&&(v[$]=null,x[$].disconnect(Q))}for(let V=0;V<ne.added.length;V++){const Q=ne.added[V];let $=v.indexOf(Q);if($===-1){for(let me=0;me<x.length;me++)if(me>=v.length){v.push(Q),$=me;break}else if(v[me]===null){v[me]=Q,$=me;break}if($===-1)break}const pe=x[$];pe&&pe.connect(Q)}}const Z=new ee,j=new ee;function W(ne,V,Q){Z.setFromMatrixPosition(V.matrixWorld),j.setFromMatrixPosition(Q.matrixWorld);const $=Z.distanceTo(j),pe=V.projectionMatrix.elements,me=Q.projectionMatrix.elements,G=pe[14]/(pe[10]-1),Re=pe[14]/(pe[10]+1),Ee=(pe[9]+1)/pe[5],Be=(pe[9]-1)/pe[5],Ie=(pe[8]-1)/pe[0],Ge=(me[8]+1)/me[0],Ue=G*Ie,J=G*Ge,fe=$/(-Ie+Ge),C=fe*-Ie;V.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(C),ne.translateZ(fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const M=G+fe,K=Re+fe,ue=Ue-C,P=J+($-C),A=Ee*Re/K*M,F=Be*Re/K*M;ne.projectionMatrix.makePerspective(ue,P,A,F,M,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ie(ne,V){V===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(V.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;_.texture!==null&&(ne.near=_.depthNear,ne.far=_.depthFar),S.near=k.near=R.near=ne.near,S.far=k.far=R.far=ne.far,(N!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,I=S.far,R.near=N,R.far=I,k.near=N,k.far=I,R.updateProjectionMatrix(),k.updateProjectionMatrix(),ne.updateProjectionMatrix());const V=ne.parent,Q=S.cameras;ie(S,V);for(let $=0;$<Q.length;$++)ie(Q[$],V);Q.length===2?W(S,R,k):S.projectionMatrix.copy(R.projectionMatrix),ae(ne,S,V)};function ae(ne,V,Q){Q===null?ne.matrix.copy(V.matrixWorld):(ne.matrix.copy(Q.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(V.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(V.projectionMatrix),ne.projectionMatrixInverse.copy(V.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bi*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(ne){l=ne,p!==null&&(p.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null};let _e=null;function ye(ne,V){if(f=V.getViewerPose(a||s),g=V,f!==null){const Q=f.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let $=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,$=!0);for(let me=0;me<Q.length;me++){const G=Q[me];let Re=null;if(m!==null)Re=m.getViewport(G);else{const Be=d.getViewSubImage(p,G);Re=Be.viewport,me===0&&(e.setRenderTargetTextures(E,Be.colorTexture,p.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(E))}let Ee=y[me];Ee===void 0&&(Ee=new Ft,Ee.layers.enable(me),Ee.viewport=new gt,y[me]=Ee),Ee.matrix.fromArray(G.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(G.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(S.matrix.copy(Ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),$===!0&&S.cameras.push(Ee)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const me=d.getDepthInformation(Q[0]);me&&me.isValid&&me.texture&&_.init(e,me,r.renderState)}}for(let Q=0;Q<x.length;Q++){const $=v[Q],pe=x[Q];$!==null&&pe!==void 0&&pe.update($,V,a||s)}_.render(e,S),_e&&_e(ne,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const xe=new ac;xe.setAnimationLoop(ye),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const In=new $t,sm=new lt;function cm(n,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function i(u,h){h.color.getRGB(u.fogColor.value,ic(n)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,E,x,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(u,h):h.isMeshToonMaterial?(o(u,h),d(u,h)):h.isMeshPhongMaterial?(o(u,h),f(u,h)):h.isMeshStandardMaterial?(o(u,h),p(u,h),h.isMeshPhysicalMaterial&&m(u,h,v)):h.isMeshMatcapMaterial?(o(u,h),g(u,h)):h.isMeshDepthMaterial?o(u,h):h.isMeshDistanceMaterial?(o(u,h),_(u,h)):h.isMeshNormalMaterial?o(u,h):h.isLineBasicMaterial?(s(u,h),h.isLineDashedMaterial&&c(u,h)):h.isPointsMaterial?l(u,h,E,x):h.isSpriteMaterial?a(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Tt&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Tt&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const E=e.get(h),x=E.envMap,v=E.envMapRotation;if(x&&(u.envMap.value=x,In.copy(v),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),u.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(In)),u.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap){u.lightMap.value=h.lightMap;const L=n._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=h.lightMapIntensity*L,t(h.lightMap,u.lightMapTransform)}h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function s(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function c(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,E,x){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*E,u.scale.value=x*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function f(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function d(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,E){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function _(u,h){const E=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lm(n,e,t,i){let r={},o={},s=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const v=x.program;i.uniformBlockBinding(E,v)}function a(E,x){let v=r[E.id];v===void 0&&(g(E),v=f(E),r[E.id]=v,E.addEventListener("dispose",u));const L=x.program;i.updateUBOMapping(E,L);const b=e.render.frame;o[E.id]!==b&&(p(E),o[E.id]=b)}function f(E){const x=d();E.__bindingPointIndex=x;const v=n.createBuffer(),L=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function d(){for(let E=0;E<c;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const x=r[E.id],v=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,R=v.length;b<R;b++){const k=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,S=k.length;y<S;y++){const N=k[y];if(m(N,b,y,L)===!0){const I=N.__offset,w=Array.isArray(N.value)?N.value:[N.value];let U=0;for(let H=0;H<w.length;H++){const Z=w[H],j=_(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,I+U,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,v,L){const b=E.value,R=x+"_"+v;if(L[R]===void 0)return typeof b=="number"||typeof b=="boolean"?L[R]=b:L[R]=b.clone(),!0;{const k=L[R];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return L[R]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function g(E){const x=E.uniforms;let v=0;const L=16;for(let R=0,k=x.length;R<k;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,N=y.length;S<N;S++){const I=y[S],w=Array.isArray(I.value)?I.value:[I.value];for(let U=0,H=w.length;U<H;U++){const Z=w[U],j=_(Z),W=v%L;W!==0&&L-W<j.boundary&&(v+=L-W),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=j.storage}}}const b=v%L;return b>0&&(v+=L-b),E.__size=v,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function u(E){const x=E.target;x.removeEventListener("dispose",u);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);s=[],r={},o={}}return{bind:l,update:a,dispose:h}}class um{constructor(e={}){const{canvas:t=tu(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:a=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const x=this;let v=!1,L=0,b=0,R=null,k=-1,y=null;const S=new gt,N=new gt;let I=null;const w=new Je(0);let U=0,H=t.width,Z=t.height,j=1,W=null,ie=null;const ae=new gt(0,0,H,Z),_e=new gt(0,0,H,Z);let ye=!1;const xe=new Yo;let ne=!1,V=!1;const Q=new lt,$=new ee,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return R===null?j:1}let G=i;function Re(O,re){return t.getContext(O,re)}try{const O={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",T,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",te,!1),G===null){const re="webgl2";if(G=Re(re,O),G===null)throw Re(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Ee,Be,Ie,Ge,Ue,J,fe,C,M,K,ue,P,A,F,B,D,X,z,q,oe,he,le,Se,Pe;function He(){Ee=new vd(G),Ee.init(),le=new em(G,Ee),Be=new fd(G,Ee,e,le),Ie=new Jp(G),Ge=new yd(G),Ue=new kp,J=new Qp(G,Ee,Ie,Ue,Be,le,Ge),fe=new pd(x),C=new _d(x),M=new bu(G),Se=new ud(G,M),K=new xd(G,M,Ge,Se),ue=new Td(G,K,M,Ge),q=new Sd(G,Be,J),D=new dd(Ue),P=new Fp(x,fe,C,Ee,Be,Se,D),A=new cm(x,Ue),F=new zp,B=new Yp(Ee),z=new ld(x,fe,C,Ie,ue,p,l),X=new $p(x,ue,Be),Pe=new lm(G,Ge,Be,Ie),oe=new hd(G,Ee,Ge),he=new Ed(G,Ee,Ge),Ge.programs=P.programs,x.capabilities=Be,x.extensions=Ee,x.properties=Ue,x.renderLists=F,x.shadowMap=X,x.state=Ie,x.info=Ge}He();const we=new am(x,G);this.xr=we,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const O=Ee.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=Ee.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(O){O!==void 0&&(j=O,this.setSize(H,Z,!1))},this.getSize=function(O){return O.set(H,Z)},this.setSize=function(O,re,de=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=O,Z=re,t.width=Math.floor(O*j),t.height=Math.floor(re*j),de===!0&&(t.style.width=O+"px",t.style.height=re+"px"),this.setViewport(0,0,O,re)},this.getDrawingBufferSize=function(O){return O.set(H*j,Z*j).floor()},this.setDrawingBufferSize=function(O,re,de){H=O,Z=re,j=de,t.width=Math.floor(O*de),t.height=Math.floor(re*de),this.setViewport(0,0,O,re)},this.getCurrentViewport=function(O){return O.copy(S)},this.getViewport=function(O){return O.copy(ae)},this.setViewport=function(O,re,de,se){O.isVector4?ae.set(O.x,O.y,O.z,O.w):ae.set(O,re,de,se),Ie.viewport(S.copy(ae).multiplyScalar(j).round())},this.getScissor=function(O){return O.copy(_e)},this.setScissor=function(O,re,de,se){O.isVector4?_e.set(O.x,O.y,O.z,O.w):_e.set(O,re,de,se),Ie.scissor(N.copy(_e).multiplyScalar(j).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(O){Ie.setScissorTest(ye=O)},this.setOpaqueSort=function(O){W=O},this.setTransparentSort=function(O){ie=O},this.getClearColor=function(O){return O.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(O=!0,re=!0,de=!0){let se=0;if(O){let ce=!1;if(R!==null){const Ce=R.texture.format;ce=Ce===js||Ce===Ys||Ce===Xs}if(ce){const Ce=R.texture.type,ke=Ce===Sn||Ce===Ei||Ce===Vs||Ce===Wi||Ce===Hs||Ce===Ws,ze=z.getClearColor(),We=z.getClearAlpha(),Xe=ze.r,Ke=ze.g,Qe=ze.b;ke?(m[0]=Xe,m[1]=Ke,m[2]=Qe,m[3]=We,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=Xe,g[1]=Ke,g[2]=Qe,g[3]=We,G.clearBufferiv(G.COLOR,0,g))}else se|=G.COLOR_BUFFER_BIT}re&&(se|=G.DEPTH_BUFFER_BIT),de&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",T,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",te,!1),F.dispose(),B.dispose(),Ue.dispose(),fe.dispose(),C.dispose(),ue.dispose(),Se.dispose(),Pe.dispose(),P.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ne),we.removeEventListener("sessionend",Me),Te.stop()};function T(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const O=Ge.autoReset,re=X.enabled,de=X.autoUpdate,se=X.needsUpdate,ce=X.type;He(),Ge.autoReset=O,X.enabled=re,X.autoUpdate=de,X.needsUpdate=se,X.type=ce}function te(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ge(O){const re=O.target;re.removeEventListener("dispose",ge),ve(re)}function ve(O){De(O),Ue.remove(O)}function De(O){const re=Ue.get(O).programs;re!==void 0&&(re.forEach(function(de){P.releaseProgram(de)}),O.isShaderMaterial&&P.releaseShaderCache(O))}this.renderBufferDirect=function(O,re,de,se,ce,Ce){re===null&&(re=pe);const ke=ce.isMesh&&ce.matrixWorld.determinant()<0,ze=Pc(O,re,de,se,ce);Ie.setMaterial(se,ke);let We=de.index,Xe=1;if(se.wireframe===!0){if(We=K.getWireframeAttribute(de),We===void 0)return;Xe=2}const Ke=de.drawRange,Qe=de.attributes.position;let ht=Ke.start*Xe,vt=(Ke.start+Ke.count)*Xe;Ce!==null&&(ht=Math.max(ht,Ce.start*Xe),vt=Math.min(vt,(Ce.start+Ce.count)*Xe)),We!==null?(ht=Math.max(ht,0),vt=Math.min(vt,We.count)):Qe!=null&&(ht=Math.max(ht,0),vt=Math.min(vt,Qe.count));const Pt=vt-ht;if(Pt<0||Pt===1/0)return;Se.setup(ce,se,ze,de,We);let Jt,rt=oe;if(We!==null&&(Jt=M.get(We),rt=he,rt.setIndex(Jt)),ce.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*me()),rt.setMode(G.LINES)):rt.setMode(G.TRIANGLES);else if(ce.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),Ie.setLineWidth(Ye*me()),ce.isLineSegments?rt.setMode(G.LINES):ce.isLineLoop?rt.setMode(G.LINE_LOOP):rt.setMode(G.LINE_STRIP)}else ce.isPoints?rt.setMode(G.POINTS):ce.isSprite&&rt.setMode(G.TRIANGLES);if(ce.isBatchedMesh)ce._multiDrawInstances!==null?rt.renderMultiDrawInstances(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount,ce._multiDrawInstances):rt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)rt.renderInstances(ht,Pt,ce.count);else if(de.isInstancedBufferGeometry){const Ye=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ri=Math.min(de.instanceCount,Ye);rt.renderInstances(ht,Pt,Ri)}else rt.render(ht,Pt)};function Oe(O,re,de){O.transparent===!0&&O.side===qt&&O.forceSinglePass===!1?(O.side=Tt,O.needsUpdate=!0,wt(O,re,de),O.side=ln,O.needsUpdate=!0,wt(O,re,de),O.side=qt):wt(O,re,de)}this.compile=function(O,re,de=null){de===null&&(de=O),u=B.get(de),u.init(re),E.push(u),de.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(u.pushLight(ce),ce.castShadow&&u.pushShadow(ce))}),O!==de&&O.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(u.pushLight(ce),ce.castShadow&&u.pushShadow(ce))}),u.setupLights(x._useLegacyLights);const se=new Set;return O.traverse(function(ce){const Ce=ce.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const ze=Ce[ke];Oe(ze,de,ce),se.add(ze)}else Oe(Ce,de,ce),se.add(Ce)}),E.pop(),u=null,se},this.compileAsync=function(O,re,de=null){const se=this.compile(O,re,de);return new Promise(ce=>{function Ce(){if(se.forEach(function(ke){Ue.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){ce(O);return}setTimeout(Ce,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let qe=null;function et(O){qe&&qe(O)}function Ne(){Te.stop()}function Me(){Te.start()}const Te=new ac;Te.setAnimationLoop(et),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(O){qe=O,we.setAnimationLoop(O),O===null?Te.stop():Te.start()},we.addEventListener("sessionstart",Ne),we.addEventListener("sessionend",Me),this.render=function(O,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(re),re=we.getCamera()),O.isScene===!0&&O.onBeforeRender(x,O,re,R),u=B.get(O,E.length),u.init(re),E.push(u),Q.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),xe.setFromProjectionMatrix(Q),V=this.localClippingEnabled,ne=D.init(this.clippingPlanes,V),_=F.get(O,h.length),_.init(),h.push(_),be(O,re,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,ie);const de=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1;de&&z.addToRenderList(_,O),this.info.render.frame++,ne===!0&&D.beginShadows();const se=u.state.shadowsArray;X.render(se,O,re),ne===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=_.opaque,Ce=_.transmissive;if(u.setupLights(x._useLegacyLights),re.isArrayCamera){const ke=re.cameras;if(Ce.length>0)for(let ze=0,We=ke.length;ze<We;ze++){const Xe=ke[ze];Fe(ce,Ce,O,Xe)}de&&z.render(O);for(let ze=0,We=ke.length;ze<We;ze++){const Xe=ke[ze];Le(_,O,Xe,Xe.viewport)}}else Ce.length>0&&Fe(ce,Ce,O,re),de&&z.render(O),Le(_,O,re);R!==null&&(J.updateMultisampleRenderTarget(R),J.updateRenderTargetMipmap(R)),O.isScene===!0&&O.onAfterRender(x,O,re),Se.resetDefaultState(),k=-1,y=null,E.pop(),E.length>0?(u=E[E.length-1],ne===!0&&D.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function be(O,re,de,se){if(O.visible===!1)return;if(O.layers.test(re.layers)){if(O.isGroup)de=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(re);else if(O.isLight)u.pushLight(O),O.castShadow&&u.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||xe.intersectsSprite(O)){se&&$.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Q);const ke=ue.update(O),ze=O.material;ze.visible&&_.push(O,ke,ze,de,$.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||xe.intersectsObject(O))){const ke=ue.update(O),ze=O.material;if(se&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),$.copy(O.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),$.copy(ke.boundingSphere.center)),$.applyMatrix4(O.matrixWorld).applyMatrix4(Q)),Array.isArray(ze)){const We=ke.groups;for(let Xe=0,Ke=We.length;Xe<Ke;Xe++){const Qe=We[Xe],ht=ze[Qe.materialIndex];ht&&ht.visible&&_.push(O,ke,ht,de,$.z,Qe)}}else ze.visible&&_.push(O,ke,ze,de,$.z,null)}}const Ce=O.children;for(let ke=0,ze=Ce.length;ke<ze;ke++)be(Ce[ke],re,de,se)}function Le(O,re,de,se){const ce=O.opaque,Ce=O.transmissive,ke=O.transparent;u.setupLightsView(de),ne===!0&&D.setGlobalState(x.clippingPlanes,de),se&&Ie.viewport(S.copy(se)),ce.length>0&&nt(ce,re,de),Ce.length>0&&nt(Ce,re,de),ke.length>0&&nt(ke,re,de),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Fe(O,re,de,se){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[se.id]===void 0&&(u.state.transmissionRenderTarget[se.id]=new kn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Or:Sn,minFilter:Fn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ce=u.state.transmissionRenderTarget[se.id],ke=se.viewport||S;Ce.setSize(ke.z,ke.w);const ze=x.getRenderTarget();x.setRenderTarget(Ce),x.getClearColor(w),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const We=x.toneMapping;x.toneMapping=yn;const Xe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),u.setupLightsView(se),ne===!0&&D.setGlobalState(x.clippingPlanes,se),nt(O,de,se),J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Qe=0,ht=re.length;Qe<ht;Qe++){const vt=re[Qe],Pt=vt.object,Jt=vt.geometry,rt=vt.material,Ye=vt.group;if(rt.side===qt&&Pt.layers.test(se.layers)){const Ri=rt.side;rt.side=Tt,rt.needsUpdate=!0,bt(Pt,de,se,Jt,rt,Ye),rt.side=Ri,rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce))}x.setRenderTarget(ze),x.setClearColor(w,U),Xe!==void 0&&(se.viewport=Xe),x.toneMapping=We}function nt(O,re,de){const se=re.isScene===!0?re.overrideMaterial:null;for(let ce=0,Ce=O.length;ce<Ce;ce++){const ke=O[ce],ze=ke.object,We=ke.geometry,Xe=se===null?ke.material:se,Ke=ke.group;ze.layers.test(de.layers)&&bt(ze,re,de,We,Xe,Ke)}}function bt(O,re,de,se,ce,Ce){O.onBeforeRender(x,re,de,se,ce,Ce),O.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ce.onBeforeRender(x,re,de,se,O,Ce),ce.transparent===!0&&ce.side===qt&&ce.forceSinglePass===!1?(ce.side=Tt,ce.needsUpdate=!0,x.renderBufferDirect(de,re,se,ce,O,Ce),ce.side=ln,ce.needsUpdate=!0,x.renderBufferDirect(de,re,se,ce,O,Ce),ce.side=qt):x.renderBufferDirect(de,re,se,ce,O,Ce),O.onAfterRender(x,re,de,se,ce,Ce)}function wt(O,re,de){re.isScene!==!0&&(re=pe);const se=Ue.get(O),ce=u.state.lights,Ce=u.state.shadowsArray,ke=ce.state.version,ze=P.getParameters(O,ce.state,Ce,re,de),We=P.getProgramCacheKey(ze);let Xe=se.programs;se.environment=O.isMeshStandardMaterial?re.environment:null,se.fog=re.fog,se.envMap=(O.isMeshStandardMaterial?C:fe).get(O.envMap||se.environment),se.envMapRotation=se.environment!==null&&O.envMap===null?re.environmentRotation:O.envMapRotation,Xe===void 0&&(O.addEventListener("dispose",ge),Xe=new Map,se.programs=Xe);let Ke=Xe.get(We);if(Ke!==void 0){if(se.currentProgram===Ke&&se.lightsStateVersion===ke)return ea(O,ze),Ke}else ze.uniforms=P.getUniforms(O),O.onBuild(de,ze,x),O.onBeforeCompile(ze,x),Ke=P.acquireProgram(ze,We),Xe.set(We,Ke),se.uniforms=ze.uniforms;const Qe=se.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Qe.clippingPlanes=D.uniform),ea(O,ze),se.needsLights=Ic(O),se.lightsStateVersion=ke,se.needsLights&&(Qe.ambientLightColor.value=ce.state.ambient,Qe.lightProbe.value=ce.state.probe,Qe.directionalLights.value=ce.state.directional,Qe.directionalLightShadows.value=ce.state.directionalShadow,Qe.spotLights.value=ce.state.spot,Qe.spotLightShadows.value=ce.state.spotShadow,Qe.rectAreaLights.value=ce.state.rectArea,Qe.ltc_1.value=ce.state.rectAreaLTC1,Qe.ltc_2.value=ce.state.rectAreaLTC2,Qe.pointLights.value=ce.state.point,Qe.pointLightShadows.value=ce.state.pointShadow,Qe.hemisphereLights.value=ce.state.hemi,Qe.directionalShadowMap.value=ce.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Qe.spotShadowMap.value=ce.state.spotShadowMap,Qe.spotLightMatrix.value=ce.state.spotLightMatrix,Qe.spotLightMap.value=ce.state.spotLightMap,Qe.pointShadowMap.value=ce.state.pointShadowMap,Qe.pointShadowMatrix.value=ce.state.pointShadowMatrix),se.currentProgram=Ke,se.uniformsList=null,Ke}function Wn(O){if(O.uniformsList===null){const re=O.currentProgram.getUniforms();O.uniformsList=Mr.seqWithValue(re.seq,O.uniforms)}return O.uniformsList}function ea(O,re){const de=Ue.get(O);de.outputColorSpace=re.outputColorSpace,de.batching=re.batching,de.instancing=re.instancing,de.instancingColor=re.instancingColor,de.instancingMorph=re.instancingMorph,de.skinning=re.skinning,de.morphTargets=re.morphTargets,de.morphNormals=re.morphNormals,de.morphColors=re.morphColors,de.morphTargetsCount=re.morphTargetsCount,de.numClippingPlanes=re.numClippingPlanes,de.numIntersection=re.numClipIntersection,de.vertexAlphas=re.vertexAlphas,de.vertexTangents=re.vertexTangents,de.toneMapping=re.toneMapping}function Pc(O,re,de,se,ce){re.isScene!==!0&&(re=pe),J.resetTextureUnits();const Ce=re.fog,ke=se.isMeshStandardMaterial?re.environment:null,ze=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,We=(se.isMeshStandardMaterial?C:fe).get(se.envMap||ke),Xe=se.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Ke=!!de.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Qe=!!de.morphAttributes.position,ht=!!de.morphAttributes.normal,vt=!!de.morphAttributes.color;let Pt=yn;se.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const Jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,rt=Jt!==void 0?Jt.length:0,Ye=Ue.get(se),Ri=u.state.lights;if(ne===!0&&(V===!0||O!==y)){const Ot=O===y&&se.id===k;D.setState(se,O,Ot)}let st=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ri.state.version||Ye.outputColorSpace!==ze||ce.isBatchedMesh&&Ye.batching===!1||!ce.isBatchedMesh&&Ye.batching===!0||ce.isInstancedMesh&&Ye.instancing===!1||!ce.isInstancedMesh&&Ye.instancing===!0||ce.isSkinnedMesh&&Ye.skinning===!1||!ce.isSkinnedMesh&&Ye.skinning===!0||ce.isInstancedMesh&&Ye.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ye.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Ye.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Ye.instancingMorph===!1&&ce.morphTexture!==null||Ye.envMap!==We||se.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==D.numPlanes||Ye.numIntersection!==D.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ke||Ye.morphTargets!==Qe||Ye.morphNormals!==ht||Ye.morphColors!==vt||Ye.toneMapping!==Pt||Ye.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ye.__version=se.version);let Rn=Ye.currentProgram;st===!0&&(Rn=wt(se,re,ce));let ta=!1,bi=!1,Kr=!1;const xt=Rn.getUniforms(),un=Ye.uniforms;if(Ie.useProgram(Rn.program)&&(ta=!0,bi=!0,Kr=!0),se.id!==k&&(k=se.id,bi=!0),ta||y!==O){xt.setValue(G,"projectionMatrix",O.projectionMatrix),xt.setValue(G,"viewMatrix",O.matrixWorldInverse);const Ot=xt.map.cameraPosition;Ot!==void 0&&Ot.setValue(G,$.setFromMatrixPosition(O.matrixWorld)),Be.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&xt.setValue(G,"isOrthographic",O.isOrthographicCamera===!0),y!==O&&(y=O,bi=!0,Kr=!0)}if(ce.isSkinnedMesh){xt.setOptional(G,ce,"bindMatrix"),xt.setOptional(G,ce,"bindMatrixInverse");const Ot=ce.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),xt.setValue(G,"boneTexture",Ot.boneTexture,J))}ce.isBatchedMesh&&(xt.setOptional(G,ce,"batchingTexture"),xt.setValue(G,"batchingTexture",ce._matricesTexture,J));const Zr=de.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&q.update(ce,de,Rn),(bi||Ye.receiveShadow!==ce.receiveShadow)&&(Ye.receiveShadow=ce.receiveShadow,xt.setValue(G,"receiveShadow",ce.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(un.envMap.value=We,un.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&re.environment!==null&&(un.envMapIntensity.value=re.environmentIntensity),bi&&(xt.setValue(G,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Lc(un,Kr),Ce&&se.fog===!0&&A.refreshFogUniforms(un,Ce),A.refreshMaterialUniforms(un,se,j,Z,u.state.transmissionRenderTarget[O.id]),Mr.upload(G,Wn(Ye),un,J)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Mr.upload(G,Wn(Ye),un,J),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&xt.setValue(G,"center",ce.center),xt.setValue(G,"modelViewMatrix",ce.modelViewMatrix),xt.setValue(G,"normalMatrix",ce.normalMatrix),xt.setValue(G,"modelMatrix",ce.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Ot=se.uniformsGroups;for(let $r=0,Nc=Ot.length;$r<Nc;$r++){const na=Ot[$r];Pe.update(na,Rn),Pe.bind(na,Rn)}}return Rn}function Lc(O,re){O.ambientLightColor.needsUpdate=re,O.lightProbe.needsUpdate=re,O.directionalLights.needsUpdate=re,O.directionalLightShadows.needsUpdate=re,O.pointLights.needsUpdate=re,O.pointLightShadows.needsUpdate=re,O.spotLights.needsUpdate=re,O.spotLightShadows.needsUpdate=re,O.rectAreaLights.needsUpdate=re,O.hemisphereLights.needsUpdate=re}function Ic(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(O,re,de){Ue.get(O.texture).__webglTexture=re,Ue.get(O.depthTexture).__webglTexture=de;const se=Ue.get(O);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=de===void 0,se.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,re){const de=Ue.get(O);de.__webglFramebuffer=re,de.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(O,re=0,de=0){R=O,L=re,b=de;let se=!0,ce=null,Ce=!1,ke=!1;if(O){const We=Ue.get(O);We.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(G.FRAMEBUFFER,null),se=!1):We.__webglFramebuffer===void 0?J.setupRenderTarget(O):We.__hasExternalTextures&&J.rebindTextures(O,Ue.get(O.texture).__webglTexture,Ue.get(O.depthTexture).__webglTexture);const Xe=O.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ke=!0);const Ke=Ue.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Ke[re])?ce=Ke[re][de]:ce=Ke[re],Ce=!0):O.samples>0&&J.useMultisampledRTT(O)===!1?ce=Ue.get(O).__webglMultisampledFramebuffer:Array.isArray(Ke)?ce=Ke[de]:ce=Ke,S.copy(O.viewport),N.copy(O.scissor),I=O.scissorTest}else S.copy(ae).multiplyScalar(j).floor(),N.copy(_e).multiplyScalar(j).floor(),I=ye;if(Ie.bindFramebuffer(G.FRAMEBUFFER,ce)&&se&&Ie.drawBuffers(O,ce),Ie.viewport(S),Ie.scissor(N),Ie.setScissorTest(I),Ce){const We=Ue.get(O.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+re,We.__webglTexture,de)}else if(ke){const We=Ue.get(O.texture),Xe=re||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.__webglTexture,de||0,Xe)}k=-1},this.readRenderTargetPixels=function(O,re,de,se,ce,Ce,ke){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ue.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){Ie.bindFramebuffer(G.FRAMEBUFFER,ze);try{const We=O.texture,Xe=We.format,Ke=We.type;if(!Be.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=O.width-se&&de>=0&&de<=O.height-ce&&G.readPixels(re,de,se,ce,le.convert(Xe),le.convert(Ke),Ce)}finally{const We=R!==null?Ue.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(O,re,de=0){const se=Math.pow(2,-de),ce=Math.floor(re.image.width*se),Ce=Math.floor(re.image.height*se);J.setTexture2D(re,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,O.x,O.y,ce,Ce),Ie.unbindTexture()},this.copyTextureToTexture=function(O,re,de,se=0){const ce=re.image.width,Ce=re.image.height,ke=le.convert(de.format),ze=le.convert(de.type);J.setTexture2D(de,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,de.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,de.unpackAlignment),re.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,se,O.x,O.y,ce,Ce,ke,ze,re.image.data):re.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,se,O.x,O.y,re.mipmaps[0].width,re.mipmaps[0].height,ke,re.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,se,O.x,O.y,ke,ze,re.image),se===0&&de.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(O,re,de,se,ce=0){const Ce=O.max.x-O.min.x,ke=O.max.y-O.min.y,ze=O.max.z-O.min.z,We=le.convert(se.format),Xe=le.convert(se.type);let Ke;if(se.isData3DTexture)J.setTexture3D(se,0),Ke=G.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)J.setTexture2DArray(se,0),Ke=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,se.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,se.unpackAlignment);const Qe=G.getParameter(G.UNPACK_ROW_LENGTH),ht=G.getParameter(G.UNPACK_IMAGE_HEIGHT),vt=G.getParameter(G.UNPACK_SKIP_PIXELS),Pt=G.getParameter(G.UNPACK_SKIP_ROWS),Jt=G.getParameter(G.UNPACK_SKIP_IMAGES),rt=de.isCompressedTexture?de.mipmaps[ce]:de.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,rt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,O.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,O.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,O.min.z),de.isDataTexture||de.isData3DTexture?G.texSubImage3D(Ke,ce,re.x,re.y,re.z,Ce,ke,ze,We,Xe,rt.data):se.isCompressedArrayTexture?G.compressedTexSubImage3D(Ke,ce,re.x,re.y,re.z,Ce,ke,ze,We,rt.data):G.texSubImage3D(Ke,ce,re.x,re.y,re.z,Ce,ke,ze,We,Xe,rt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Qe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht),G.pixelStorei(G.UNPACK_SKIP_PIXELS,vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jt),ce===0&&se.generateMipmaps&&G.generateMipmap(Ke),Ie.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?J.setTextureCube(O,0):O.isData3DTexture?J.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?J.setTexture2DArray(O,0):J.setTexture2D(O,0),Ie.unbindTexture()},this.resetState=function(){L=0,b=0,R=null,Ie.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wo?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Dr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pc extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hm extends Mt{constructor(e=null,t=1,i=1,r,o,s,c,l,a=Ct,f=Ct,d,p){super(null,s,c,l,a,f,r,o,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mc extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new ee,Lr=new ee,Ms=new lt,Ii=new Ur,_r=new Xi,Po=new ee,As=new ee;class fm extends ut{constructor(e=new _t,t=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Pr.fromBufferAttribute(t,r-1),Lr.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Pr.distanceTo(Lr);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(r),_r.radius+=o,e.ray.intersectsSphere(_r)===!1)return;Ms.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Ms);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,a=this.isLineSegments?2:1,f=i.index,p=i.attributes.position;if(f!==null){const m=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let _=m,u=g-1;_<u;_+=a){const h=f.getX(_),E=f.getX(_+1),x=vr(this,e,Ii,l,h,E);x&&t.push(x)}if(this.isLineLoop){const _=f.getX(g-1),u=f.getX(m),h=vr(this,e,Ii,l,_,u);h&&t.push(h)}}else{const m=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let _=m,u=g-1;_<u;_+=a){const h=vr(this,e,Ii,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=vr(this,e,Ii,l,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function vr(n,e,t,i,r,o){const s=n.geometry.attributes.position;if(Pr.fromBufferAttribute(s,r),Lr.fromBufferAttribute(s,o),t.distanceSqToSegment(Pr,Lr,Po,As)>i)return;Po.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Po);if(!(l<e.near||l>e.far))return{distance:l,point:As.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Rs=new ee,bs=new ee;class dm extends fm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Rs.fromBufferAttribute(t,r),bs.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rs.distanceTo(bs);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cs=new lt,Bo=new Ur,xr=new Xi,Er=new ee;class pm extends ut{constructor(e=new _t,t=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(r),xr.radius+=o,e.ray.intersectsSphere(xr)===!1)return;Cs.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(Cs);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,a=i.index,d=i.attributes.position;if(a!==null){const p=Math.max(0,s.start),m=Math.min(a.count,s.start+s.count);for(let g=p,_=m;g<_;g++){const u=a.getX(g);Er.fromBufferAttribute(d,u),ws(Er,u,l,r,e,t,this)}}else{const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let g=p,_=m;g<_;g++)Er.fromBufferAttribute(d,g),ws(Er,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function ws(n,e,t,i,r,o,s){const c=Bo.distanceSqToPoint(n);if(c<t){const l=new ee;Bo.closestPointToPoint(n,l),l.applyMatrix4(i);const a=r.ray.origin.distanceTo(l);if(a<r.near||a>r.far)return;o.push({distance:a,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,object:s})}}class Br extends _t{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:c,thetaLength:l};const a=this;r=Math.floor(r),o=Math.floor(o);const f=[],d=[],p=[],m=[];let g=0;const _=[],u=i/2;let h=0;E(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function E(){const v=new ee,L=new ee;let b=0;const R=(t-e)/i;for(let k=0;k<=o;k++){const y=[],S=k/o,N=S*(t-e)+e;for(let I=0;I<=r;I++){const w=I/r,U=w*l+c,H=Math.sin(U),Z=Math.cos(U);L.x=N*H,L.y=-S*i+u,L.z=N*Z,d.push(L.x,L.y,L.z),v.set(H,R,Z).normalize(),p.push(v.x,v.y,v.z),m.push(w,1-S),y.push(g++)}_.push(y)}for(let k=0;k<r;k++)for(let y=0;y<o;y++){const S=_[y][k],N=_[y+1][k],I=_[y+1][k+1],w=_[y][k+1];f.push(S,N,w),f.push(N,I,w),b+=6}a.addGroup(h,b,0),h+=b}function x(v){const L=g,b=new Ve,R=new ee;let k=0;const y=v===!0?e:t,S=v===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,u*S,0),p.push(0,S,0),m.push(.5,.5),g++;const N=g;for(let I=0;I<=r;I++){const U=I/r*l+c,H=Math.cos(U),Z=Math.sin(U);R.x=y*Z,R.y=u*S,R.z=y*H,d.push(R.x,R.y,R.z),p.push(0,S,0),b.x=H*.5+.5,b.y=Z*.5*S+.5,m.push(b.x,b.y),g++}for(let I=0;I<r;I++){const w=L+I,U=N+I;v===!0?f.push(U,U+1,w):f.push(U+1,U,w),k+=3}a.addGroup(h,k,v===!0?1:2),h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends Br{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,c=Math.PI*2){super(0,e,t,i,r,o,s,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:c}}static fromJSON(e){return new qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const mm={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let o=_c(n,0,r,t,!0);const s=[];if(!o||o.next===o.prev)return s;let c,l,a,f,d,p,m;if(i&&(o=Em(n,e,o,t)),n.length>80*t){c=a=n[0],l=f=n[1];for(let g=t;g<r;g+=t)d=n[g],p=n[g+1],d<c&&(c=d),p<l&&(l=p),d>a&&(a=d),p>f&&(f=p);m=Math.max(a-c,f-l),m=m!==0?32767/m:0}return Vi(o,s,t,c,l,m,0),s}};function _c(n,e,t,i,r){let o,s;if(r===Lm(n,e,t,i)>0)for(o=e;o<t;o+=i)s=Ps(o,n[o],n[o+1],s);else for(o=t-i;o>=e;o-=i)s=Ps(o,n[o],n[o+1],s);return s&&zr(s,s.next)&&(Hi(s),s=s.next),s}function Bn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(zr(t,t.next)||ct(t.prev,t,t.next)===0)){if(Hi(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Vi(n,e,t,i,r,o,s){if(!n)return;!s&&o&&Am(n,i,r,o);let c=n,l,a;for(;n.prev!==n.next;){if(l=n.prev,a=n.next,o?_m(n,i,r,o):gm(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Hi(n),n=a.next,c=a.next;continue}if(n=a,n===c){s?s===1?(n=vm(Bn(n),e,t),Vi(n,e,t,i,r,o,2)):s===2&&xm(n,e,t,i,r,o):Vi(Bn(n),e,t,i,r,o,1);break}}}function gm(n){const e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;const r=e.x,o=t.x,s=i.x,c=e.y,l=t.y,a=i.y,f=r<o?r<s?r:s:o<s?o:s,d=c<l?c<a?c:a:l<a?l:a,p=r>o?r>s?r:s:o>s?o:s,m=c>l?c>a?c:a:l>a?l:a;let g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=p&&g.y>=d&&g.y<=m&&pi(r,c,o,l,s,a,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(n,e,t,i){const r=n.prev,o=n,s=n.next;if(ct(r,o,s)>=0)return!1;const c=r.x,l=o.x,a=s.x,f=r.y,d=o.y,p=s.y,m=c<l?c<a?c:a:l<a?l:a,g=f<d?f<p?f:p:d<p?d:p,_=c>l?c>a?c:a:l>a?l:a,u=f>d?f>p?f:p:d>p?d:p,h=zo(m,g,e,t,i),E=zo(_,u,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=h&&v&&v.z<=E;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=u&&x!==r&&x!==s&&pi(c,f,l,d,a,p,x.x,x.y)&&ct(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=u&&v!==r&&v!==s&&pi(c,f,l,d,a,p,v.x,v.y)&&ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=h;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=u&&x!==r&&x!==s&&pi(c,f,l,d,a,p,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=u&&v!==r&&v!==s&&pi(c,f,l,d,a,p,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vm(n,e,t){let i=n;do{const r=i.prev,o=i.next.next;!zr(r,o)&&vc(r,i,i.next,o)&&Gi(r,o)&&Gi(o,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Hi(i),Hi(i.next),i=n=o),i=i.next}while(i!==n);return Bn(i)}function xm(n,e,t,i,r,o){let s=n;do{let c=s.next.next;for(;c!==s.prev;){if(s.i!==c.i&&Cm(s,c)){let l=xc(s,c);s=Bn(s,s.next),l=Bn(l,l.next),Vi(s,e,t,i,r,o,0),Vi(l,e,t,i,r,o,0);return}c=c.next}s=s.next}while(s!==n)}function Em(n,e,t,i){const r=[];let o,s,c,l,a;for(o=0,s=e.length;o<s;o++)c=e[o]*i,l=o<s-1?e[o+1]*i:n.length,a=_c(n,c,l,i,!1),a===a.next&&(a.steiner=!0),r.push(bm(a));for(r.sort(ym),o=0;o<r.length;o++)t=Sm(r[o],t);return t}function ym(n,e){return n.x-e.x}function Sm(n,e){const t=Tm(n,e);if(!t)return e;const i=xc(t,n);return Bn(i,i.next),Bn(t,t.next)}function Tm(n,e){let t=e,i=-1/0,r;const o=n.x,s=n.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=o&&p>i&&(i=p,r=t.x<t.next.x?t:t.next,p===o))return r}t=t.next}while(t!==e);if(!r)return null;const c=r,l=r.x,a=r.y;let f=1/0,d;t=r;do o>=t.x&&t.x>=l&&o!==t.x&&pi(s<a?o:i,s,l,a,s<a?i:o,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(o-t.x),Gi(t,n)&&(d<f||d===f&&(t.x>r.x||t.x===r.x&&Mm(r,t)))&&(r=t,f=d)),t=t.next;while(t!==c);return r}function Mm(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function Am(n,e,t,i){let r=n;do r.z===0&&(r.z=zo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Rm(r)}function Rm(n){let e,t,i,r,o,s,c,l,a=1;do{for(t=n,n=null,o=null,s=0;t;){for(s++,i=t,c=0,e=0;e<a&&(c++,i=i.nextZ,!!i);e++);for(l=a;c>0||l>0&&i;)c!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,c--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;t=i}o.nextZ=null,a*=2}while(s>1);return n}function zo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function bm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pi(n,e,t,i,r,o,s,c){return(r-s)*(e-c)>=(n-s)*(o-c)&&(n-s)*(i-c)>=(t-s)*(e-c)&&(t-s)*(o-c)>=(r-s)*(i-c)}function Cm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!wm(n,e)&&(Gi(n,e)&&Gi(e,n)&&Pm(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||zr(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function zr(n,e){return n.x===e.x&&n.y===e.y}function vc(n,e,t,i){const r=Sr(ct(n,e,t)),o=Sr(ct(n,e,i)),s=Sr(ct(t,i,n)),c=Sr(ct(t,i,e));return!!(r!==o&&s!==c||r===0&&yr(n,t,e)||o===0&&yr(n,i,e)||s===0&&yr(t,n,i)||c===0&&yr(t,e,i))}function yr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Sr(n){return n>0?1:n<0?-1:0}function wm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gi(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function Pm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xc(n,e){const t=new Vo(n.i,n.x,n.y),i=new Vo(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function Ps(n,e,t,i){const r=new Vo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Hi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lm(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}class Ko{static area(e){const t=e.length;let i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return Ko.area(e)<0}static triangulateShape(e,t){const i=[],r=[],o=[];Ls(e),Is(i,e);let s=e.length;t.forEach(Ls);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Is(i,t[l]);const c=mm.triangulate(i,r);for(let l=0;l<c.length;l+=3)o.push(c.slice(l,l+3));return o}}function Ls(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Is(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ui extends _t{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+c,Math.PI);let a=0;const f=[],d=new ee,p=new ee,m=[],g=[],_=[],u=[];for(let h=0;h<=i;h++){const E=[],x=h/i;let v=0;h===0&&s===0?v=.5/t:h===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const b=L/t;d.x=-e*Math.cos(r+b*o)*Math.sin(s+x*c),d.y=e*Math.cos(s+x*c),d.z=e*Math.sin(r+b*o)*Math.sin(s+x*c),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),u.push(b+v,1-x),E.push(a++)}f.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const x=f[h][E+1],v=f[h][E],L=f[h+1][E],b=f[h+1][E+1];(h!==0||s>0)&&m.push(x,v,b),(h!==i-1||l<Math.PI)&&m.push(v,L,b)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Im extends Vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qs,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ir={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Nm{constructor(e,t,i){const r=this;let o=!1,s=0,c=0,l;const a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){c++,o===!1&&r.onStart!==void 0&&r.onStart(f,s,c),o=!0},this.itemEnd=function(f){s++,r.onProgress!==void 0&&r.onProgress(f,s,c),s===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return a.push(f,d),this},this.removeHandler=function(f){const d=a.indexOf(f);return d!==-1&&a.splice(d,2),this},this.getHandler=function(f){for(let d=0,p=a.length;d<p;d+=2){const m=a[d],g=a[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null}}}const Om=new Nm;class sn{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sn.DEFAULT_MATERIAL_NAME="__DEFAULT";const on={};class Dm extends Error{constructor(e,t){super(e),this.response=t}}class Um extends sn{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ir.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(on[e]!==void 0){on[e].push({onLoad:t,onProgress:i,onError:r});return}on[e]=[],on[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(s).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;const f=on[e],d=a.body.getReader(),p=a.headers.get("X-File-Size")||a.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let _=0;const u=new ReadableStream({start(h){E();function E(){d.read().then(({done:x,value:v})=>{if(x)h.close();else{_+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let b=0,R=f.length;b<R;b++){const k=f[b];k.onProgress&&k.onProgress(L)}h.enqueue(v),E()}})}}});return new Response(u)}else throw new Dm(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(l){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return a.json();default:if(c===void 0)return a.text();{const d=/charset="?([^;"\s]*)"?/i.exec(c),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return a.arrayBuffer().then(g=>m.decode(g))}}}).then(a=>{Ir.add(e,a);const f=on[e];delete on[e];for(let d=0,p=f.length;d<p;d++){const m=f[d];m.onLoad&&m.onLoad(a)}}).catch(a=>{const f=on[e];if(f===void 0)throw this.manager.itemError(e),a;delete on[e];for(let d=0,p=f.length;d<p;d++){const m=f[d];m.onError&&m.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fm extends sn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Ir.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const c=zi("img");function l(){f(),Ir.add(e,this),t&&t(this),o.manager.itemEnd(e)}function a(d){f(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){c.removeEventListener("load",l,!1),c.removeEventListener("error",a,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class km extends sn{constructor(e){super(e)}load(e,t,i,r){const o=new Mt,s=new Fm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Bm extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lo=new lt,Ns=new ee,Os=new ee;class zm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ns.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ns),Os.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Os),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vm extends zm{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Bm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hm{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ds{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/*! chevrotain - v9.0.1 */var je=(n,e)=>()=>(e||(e={exports:{}},n(e.exports,e)),e.exports),Ec=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.VERSION=void 0,n.VERSION="9.0.1"}),it=je((n,e)=>{var t=n&&n.__spreadArray||function(J,fe){for(var C=0,M=fe.length,K=J.length;C<M;C++,K++)J[K]=fe[C];return J};Object.defineProperty(n,"__esModule",{value:!0}),n.toFastProperties=n.timer=n.peek=n.isES2015MapSupported=n.PRINT_WARNING=n.PRINT_ERROR=n.packArray=n.IDENTITY=n.NOOP=n.merge=n.groupBy=n.defaults=n.assignNoOverwrite=n.assign=n.zipObject=n.sortBy=n.indexOf=n.some=n.difference=n.every=n.isObject=n.isRegExp=n.isArray=n.partial=n.uniq=n.compact=n.reduce=n.findAll=n.find=n.cloneObj=n.cloneArr=n.contains=n.has=n.pick=n.reject=n.filter=n.dropRight=n.drop=n.isFunction=n.isUndefined=n.isString=n.forEach=n.last=n.first=n.flatten=n.map=n.mapValues=n.values=n.keys=n.isEmpty=void 0;function i(J){return J&&J.length===0}n.isEmpty=i;function r(J){return J==null?[]:Object.keys(J)}n.keys=r;function o(J){for(var fe=[],C=Object.keys(J),M=0;M<C.length;M++)fe.push(J[C[M]]);return fe}n.values=o;function s(J,fe){for(var C=[],M=r(J),K=0;K<M.length;K++){var ue=M[K];C.push(fe.call(null,J[ue],ue))}return C}n.mapValues=s;function c(J,fe){for(var C=[],M=0;M<J.length;M++)C.push(fe.call(null,J[M],M));return C}n.map=c;function l(J){for(var fe=[],C=0;C<J.length;C++){var M=J[C];Array.isArray(M)?fe=fe.concat(l(M)):fe.push(M)}return fe}n.flatten=l;function a(J){return i(J)?void 0:J[0]}n.first=a;function f(J){var fe=J&&J.length;return fe?J[fe-1]:void 0}n.last=f;function d(J,fe){if(Array.isArray(J))for(var C=0;C<J.length;C++)fe.call(null,J[C],C);else if(Z(J))for(var M=r(J),C=0;C<M.length;C++){var K=M[C],ue=J[K];fe.call(null,ue,K)}else throw Error("non exhaustive match")}n.forEach=d;function p(J){return typeof J=="string"}n.isString=p;function m(J){return J===void 0}n.isUndefined=m;function g(J){return J instanceof Function}n.isFunction=g;function _(J,fe){return fe===void 0&&(fe=1),J.slice(fe,J.length)}n.drop=_;function u(J,fe){return fe===void 0&&(fe=1),J.slice(0,J.length-fe)}n.dropRight=u;function h(J,fe){var C=[];if(Array.isArray(J))for(var M=0;M<J.length;M++){var K=J[M];fe.call(null,K)&&C.push(K)}return C}n.filter=h;function E(J,fe){return h(J,function(C){return!fe(C)})}n.reject=E;function x(J,fe){for(var C=Object.keys(J),M={},K=0;K<C.length;K++){var ue=C[K],P=J[ue];fe(P)&&(M[ue]=P)}return M}n.pick=x;function v(J,fe){return Z(J)?J.hasOwnProperty(fe):!1}n.has=v;function L(J,fe){return k(J,function(C){return C===fe})!==void 0}n.contains=L;function b(J){for(var fe=[],C=0;C<J.length;C++)fe.push(J[C]);return fe}n.cloneArr=b;function R(J){var fe={};for(var C in J)Object.prototype.hasOwnProperty.call(J,C)&&(fe[C]=J[C]);return fe}n.cloneObj=R;function k(J,fe){for(var C=0;C<J.length;C++){var M=J[C];if(fe.call(null,M))return M}}n.find=k;function y(J,fe){for(var C=[],M=0;M<J.length;M++){var K=J[M];fe.call(null,K)&&C.push(K)}return C}n.findAll=y;function S(J,fe,C){for(var M=Array.isArray(J),K=M?J:o(J),ue=M?[]:r(J),P=C,A=0;A<K.length;A++)P=fe.call(null,P,K[A],M?A:ue[A]);return P}n.reduce=S;function N(J){return E(J,function(fe){return fe==null})}n.compact=N;function I(J,fe){fe===void 0&&(fe=function(M){return M});var C=[];return S(J,function(M,K){var ue=fe(K);return L(C,ue)?M:(C.push(ue),M.concat(K))},[])}n.uniq=I;function w(J){for(var fe=[],C=1;C<arguments.length;C++)fe[C-1]=arguments[C];var M=[null],K=M.concat(fe);return Function.bind.apply(J,K)}n.partial=w;function U(J){return Array.isArray(J)}n.isArray=U;function H(J){return J instanceof RegExp}n.isRegExp=H;function Z(J){return J instanceof Object}n.isObject=Z;function j(J,fe){for(var C=0;C<J.length;C++)if(!fe(J[C],C))return!1;return!0}n.every=j;function W(J,fe){return E(J,function(C){return L(fe,C)})}n.difference=W;function ie(J,fe){for(var C=0;C<J.length;C++)if(fe(J[C]))return!0;return!1}n.some=ie;function ae(J,fe){for(var C=0;C<J.length;C++)if(J[C]===fe)return C;return-1}n.indexOf=ae;function _e(J,fe){var C=b(J);return C.sort(function(M,K){return fe(M)-fe(K)}),C}n.sortBy=_e;function ye(J,fe){if(J.length!==fe.length)throw Error("can't zipObject with different number of keys and values!");for(var C={},M=0;M<J.length;M++)C[J[M]]=fe[M];return C}n.zipObject=ye;function xe(J){for(var fe=[],C=1;C<arguments.length;C++)fe[C-1]=arguments[C];for(var M=0;M<fe.length;M++)for(var K=fe[M],ue=r(K),P=0;P<ue.length;P++){var A=ue[P];J[A]=K[A]}return J}n.assign=xe;function ne(J){for(var fe=[],C=1;C<arguments.length;C++)fe[C-1]=arguments[C];for(var M=0;M<fe.length;M++)for(var K=fe[M],ue=r(K),P=0;P<ue.length;P++){var A=ue[P];v(J,A)||(J[A]=K[A])}return J}n.assignNoOverwrite=ne;function V(){for(var J=[],fe=0;fe<arguments.length;fe++)J[fe]=arguments[fe];return ne.apply(void 0,t([{}],J))}n.defaults=V;function Q(J,fe){var C={};return d(J,function(M){var K=fe(M),ue=C[K];ue?ue.push(M):C[K]=[M]}),C}n.groupBy=Q;function $(J,fe){for(var C=R(J),M=r(fe),K=0;K<M.length;K++){var ue=M[K],P=fe[ue];C[ue]=P}return C}n.merge=$;function pe(){}n.NOOP=pe;function me(J){return J}n.IDENTITY=me;function G(J){for(var fe=[],C=0;C<J.length;C++){var M=J[C];fe.push(M!==void 0?M:void 0)}return fe}n.packArray=G;function Re(J){console&&console.error&&console.error("Error: "+J)}n.PRINT_ERROR=Re;function Ee(J){console&&console.warn&&console.warn("Warning: "+J)}n.PRINT_WARNING=Ee;function Be(){return typeof Map=="function"}n.isES2015MapSupported=Be;function Ie(J){return J[J.length-1]}n.peek=Ie;function Ge(J){var fe=new Date().getTime(),C=J(),M=new Date().getTime(),K=M-fe;return{time:K,value:C}}n.timer=Ge;function Ue(J){function fe(){}fe.prototype=J;var C=new fe;function M(){return typeof C.bar}return M(),M(),J}n.toFastProperties=Ue}),Zo=je((n,e)=>{(function(t,i){typeof define=="function"&&define.amd?define([],i):typeof e=="object"&&e.exports?e.exports=i():t.regexpToAst=i()})(typeof self<"u"?self:n,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(u){this.idx=u.idx,this.input=u.input,this.groupIdx=u.groupIdx},t.prototype.pattern=function(u){this.idx=0,this.input=u,this.groupIdx=0,this.consumeChar("/");var h=this.disjunction();this.consumeChar("/");for(var E={type:"Flags",loc:{begin:this.idx,end:u.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":l(E,"global");break;case"i":l(E,"ignoreCase");break;case"m":l(E,"multiLine");break;case"u":l(E,"unicode");break;case"y":l(E,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:E,value:h,loc:this.loc(0)}},t.prototype.disjunction=function(){var u=[],h=this.idx;for(u.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),u.push(this.alternative());return{type:"Disjunction",value:u,loc:this.loc(h)}},t.prototype.alternative=function(){for(var u=[],h=this.idx;this.isTerm();)u.push(this.term());return{type:"Alternative",value:u,loc:this.loc(h)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var u=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(u)};case"$":return{type:"EndAnchor",loc:this.loc(u)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(u)};case"B":return{type:"NonWordBoundary",loc:this.loc(u)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var h;switch(this.popChar()){case"=":h="Lookahead";break;case"!":h="NegativeLookahead";break}a(h);var E=this.disjunction();return this.consumeChar(")"),{type:h,value:E,loc:this.loc(u)}}f()},t.prototype.quantifier=function(u){var h,E=this.idx;switch(this.popChar()){case"*":h={atLeast:0,atMost:1/0};break;case"+":h={atLeast:1,atMost:1/0};break;case"?":h={atLeast:0,atMost:1};break;case"{":var x=this.integerIncludingZero();switch(this.popChar()){case"}":h={atLeast:x,atMost:x};break;case",":var v;this.isDigit()?(v=this.integerIncludingZero(),h={atLeast:x,atMost:v}):h={atLeast:x,atMost:1/0},this.consumeChar("}");break}if(u===!0&&h===void 0)return;a(h);break}if(!(u===!0&&h===void 0))return a(h),this.peekChar(0)==="?"?(this.consumeChar("?"),h.greedy=!1):h.greedy=!0,h.type="Quantifier",h.loc=this.loc(E),h},t.prototype.atom=function(){var u,h=this.idx;switch(this.peekChar()){case".":u=this.dotAll();break;case"\\":u=this.atomEscape();break;case"[":u=this.characterClass();break;case"(":u=this.group();break}return u===void 0&&this.isPatternCharacter()&&(u=this.patternCharacter()),a(u),u.loc=this.loc(h),this.isQuantifier()&&(u.quantifier=this.quantifier()),u},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[s(`
`),s("\r"),s("\u2028"),s("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var u=this.positiveInteger();return{type:"GroupBackReference",value:u}},t.prototype.characterClassEscape=function(){var u,h=!1;switch(this.popChar()){case"d":u=p;break;case"D":u=p,h=!0;break;case"s":u=g;break;case"S":u=g,h=!0;break;case"w":u=m;break;case"W":u=m,h=!0;break}return a(u),{type:"Set",value:u,complement:h}},t.prototype.controlEscapeAtom=function(){var u;switch(this.popChar()){case"f":u=s("\f");break;case"n":u=s(`
`);break;case"r":u=s("\r");break;case"t":u=s("	");break;case"v":u=s("\v");break}return a(u),{type:"Character",value:u}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var u=this.popChar();if(/[a-zA-Z]/.test(u)===!1)throw Error("Invalid ");var h=u.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:h}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:s("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var u=this.popChar();return{type:"Character",value:s(u)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var u=this.popChar();return{type:"Character",value:s(u)}}},t.prototype.characterClass=function(){var u=[],h=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),h=!0);this.isClassAtom();){var E=this.classAtom(),x=E.type==="Character";if(x&&this.isRangeDash()){this.consumeChar("-");var v=this.classAtom(),L=v.type==="Character";if(L){if(v.value<E.value)throw Error("Range out of order in character class");u.push({from:E.value,to:v.value})}else c(E.value,u),u.push(s("-")),c(v.value,u)}else c(E.value,u)}return this.consumeChar("]"),{type:"Set",complement:h,value:u}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:s("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var u=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),u=!1;break;default:this.groupIdx++;break}var h=this.disjunction();this.consumeChar(")");var E={type:"Group",capturing:u,value:h};return u&&(E.idx=this.groupIdx),E},t.prototype.positiveInteger=function(){var u=this.popChar();if(o.test(u)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.integerIncludingZero=function(){var u=this.popChar();if(r.test(u)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.patternCharacter=function(){var u=this.popChar();switch(u){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:s(u)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(u){switch(u===void 0&&(u=0),this.peekChar(u)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var u=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(u)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(u){for(var h="",E=0;E<u;E++){var x=this.popChar();if(i.test(x)===!1)throw Error("Expecting a HexDecimal digits");h+=x}var v=parseInt(h,16);return{type:"Character",value:v}},t.prototype.peekChar=function(u){return u===void 0&&(u=0),this.input[this.idx+u]},t.prototype.popChar=function(){var u=this.peekChar(0);return this.consumeChar(),u},t.prototype.consumeChar=function(u){if(u!==void 0&&this.input[this.idx]!==u)throw Error("Expected: '"+u+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(u){return{begin:u,end:this.idx}};var i=/[0-9a-fA-F]/,r=/[0-9]/,o=/[1-9]/;function s(u){return u.charCodeAt(0)}function c(u,h){u.length!==void 0?u.forEach(function(E){h.push(E)}):h.push(u)}function l(u,h){if(u[h]===!0)throw"duplicate flag "+h;u[h]=!0}function a(u){if(u===void 0)throw Error("Internal Error - Should never get here!")}function f(){throw Error("Internal Error - Should never get here!")}var d,p=[];for(d=s("0");d<=s("9");d++)p.push(d);var m=[s("_")].concat(p);for(d=s("a");d<=s("z");d++)m.push(d);for(d=s("A");d<=s("Z");d++)m.push(d);var g=[s(" "),s("\f"),s(`
`),s("\r"),s("	"),s("\v"),s("	"),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s(" "),s("\u2028"),s("\u2029"),s(" "),s(" "),s("　"),s("\uFEFF")];function _(){}return _.prototype.visitChildren=function(u){for(var h in u){var E=u[h];u.hasOwnProperty(h)&&(E.type!==void 0?this.visit(E):Array.isArray(E)&&E.forEach(function(x){this.visit(x)},this))}},_.prototype.visit=function(u){switch(u.type){case"Pattern":this.visitPattern(u);break;case"Flags":this.visitFlags(u);break;case"Disjunction":this.visitDisjunction(u);break;case"Alternative":this.visitAlternative(u);break;case"StartAnchor":this.visitStartAnchor(u);break;case"EndAnchor":this.visitEndAnchor(u);break;case"WordBoundary":this.visitWordBoundary(u);break;case"NonWordBoundary":this.visitNonWordBoundary(u);break;case"Lookahead":this.visitLookahead(u);break;case"NegativeLookahead":this.visitNegativeLookahead(u);break;case"Character":this.visitCharacter(u);break;case"Set":this.visitSet(u);break;case"Group":this.visitGroup(u);break;case"GroupBackReference":this.visitGroupBackReference(u);break;case"Quantifier":this.visitQuantifier(u);break}this.visitChildren(u)},_.prototype.visitPattern=function(u){},_.prototype.visitFlags=function(u){},_.prototype.visitDisjunction=function(u){},_.prototype.visitAlternative=function(u){},_.prototype.visitStartAnchor=function(u){},_.prototype.visitEndAnchor=function(u){},_.prototype.visitWordBoundary=function(u){},_.prototype.visitNonWordBoundary=function(u){},_.prototype.visitLookahead=function(u){},_.prototype.visitNegativeLookahead=function(u){},_.prototype.visitCharacter=function(u){},_.prototype.visitSet=function(u){},_.prototype.visitGroup=function(u){},_.prototype.visitGroupBackReference=function(u){},_.prototype.visitQuantifier=function(u){},{RegExpParser:t,BaseRegExpVisitor:_,VERSION:"0.5.0"}})}),$o=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.clearRegExpParserCache=n.getRegExpAst=void 0;var e=Zo(),t={},i=new e.RegExpParser;function r(s){var c=s.toString();if(t.hasOwnProperty(c))return t[c];var l=i.pattern(c);return t[c]=l,l}n.getRegExpAst=r;function o(){t={}}n.clearRegExpParserCache=o}),Wm=je(n=>{var e=n&&n.__extends||function(){var _=function(u,h){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,x){E.__proto__=x}||function(E,x){for(var v in x)Object.prototype.hasOwnProperty.call(x,v)&&(E[v]=x[v])},_(u,h)};return function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");_(u,h);function E(){this.constructor=u}u.prototype=h===null?Object.create(h):(E.prototype=h.prototype,new E)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.canMatchCharCode=n.firstCharOptimizedIndices=n.getOptimizedStartCodesIndices=n.failedOptimizationPrefixMsg=void 0;var t=Zo(),i=it(),r=$o(),o=yc(),s="Complement Sets are not supported for first char optimization";n.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function c(_,u){u===void 0&&(u=!1);try{var h=r.getRegExpAst(_),E=l(h.value,{},h.flags.ignoreCase);return E}catch(v){if(v.message===s)u&&i.PRINT_WARNING(""+n.failedOptimizationPrefixMsg+("	Unable to optimize: < "+_.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var x="";u&&(x=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),i.PRINT_ERROR(n.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+_.toString()+` >
`)+("	Using the regexp-to-ast library version: "+t.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+x)}}return[]}n.getOptimizedStartCodesIndices=c;function l(_,u,h){switch(_.type){case"Disjunction":for(var E=0;E<_.value.length;E++)l(_.value[E],u,h);break;case"Alternative":for(var x=_.value,E=0;E<x.length;E++){var v=x[E];switch(v.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var L=v;switch(L.type){case"Character":a(L.value,u,h);break;case"Set":if(L.complement===!0)throw Error(s);i.forEach(L.value,function(k){if(typeof k=="number")a(k,u,h);else{var y=k;if(h===!0)for(var S=y.from;S<=y.to;S++)a(S,u,h);else{for(var S=y.from;S<=y.to&&S<o.minOptimizationVal;S++)a(S,u,h);if(y.to>=o.minOptimizationVal)for(var N=y.from>=o.minOptimizationVal?y.from:o.minOptimizationVal,I=y.to,w=o.charCodeToOptimizedIndex(N),U=o.charCodeToOptimizedIndex(I),H=w;H<=U;H++)u[H]=H}}});break;case"Group":l(L.value,u,h);break;default:throw Error("Non Exhaustive Match")}var b=L.quantifier!==void 0&&L.quantifier.atLeast===0;if(L.type==="Group"&&p(L)===!1||L.type!=="Group"&&b===!1)break}break;default:throw Error("non exhaustive match!")}return i.values(u)}n.firstCharOptimizedIndices=l;function a(_,u,h){var E=o.charCodeToOptimizedIndex(_);u[E]=E,h===!0&&f(_,u)}function f(_,u){var h=String.fromCharCode(_),E=h.toUpperCase();if(E!==h){var x=o.charCodeToOptimizedIndex(E.charCodeAt(0));u[x]=x}else{var v=h.toLowerCase();if(v!==h){var x=o.charCodeToOptimizedIndex(v.charCodeAt(0));u[x]=x}}}function d(_,u){return i.find(_.value,function(h){if(typeof h=="number")return i.contains(u,h);var E=h;return i.find(u,function(x){return E.from<=x&&x<=E.to})!==void 0})}function p(_){return _.quantifier&&_.quantifier.atLeast===0?!0:_.value?i.isArray(_.value)?i.every(_.value,p):p(_.value):!1}var m=function(_){e(u,_);function u(h){var E=_.call(this)||this;return E.targetCharCodes=h,E.found=!1,E}return u.prototype.visitChildren=function(h){if(this.found!==!0){switch(h.type){case"Lookahead":this.visitLookahead(h);return;case"NegativeLookahead":this.visitNegativeLookahead(h);return}_.prototype.visitChildren.call(this,h)}},u.prototype.visitCharacter=function(h){i.contains(this.targetCharCodes,h.value)&&(this.found=!0)},u.prototype.visitSet=function(h){h.complement?d(h,this.targetCharCodes)===void 0&&(this.found=!0):d(h,this.targetCharCodes)!==void 0&&(this.found=!0)},u}(t.BaseRegExpVisitor);function g(_,u){if(u instanceof RegExp){var h=r.getRegExpAst(u),E=new m(_);return E.visit(h),E.found}else return i.find(u,function(x){return i.contains(_,x.charCodeAt(0))})!==void 0}n.canMatchCharCode=g}),yc=je(n=>{var e=n&&n.__extends||function(){var V=function(Q,$){return V=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(pe,me){pe.__proto__=me}||function(pe,me){for(var G in me)Object.prototype.hasOwnProperty.call(me,G)&&(pe[G]=me[G])},V(Q,$)};return function(Q,$){if(typeof $!="function"&&$!==null)throw new TypeError("Class extends value "+String($)+" is not a constructor or null");V(Q,$);function pe(){this.constructor=Q}Q.prototype=$===null?Object.create($):(pe.prototype=$.prototype,new pe)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.charCodeToOptimizedIndex=n.minOptimizationVal=n.buildLineBreakIssueMessage=n.LineTerminatorOptimizedTester=n.isShortPattern=n.isCustomPattern=n.cloneEmptyGroups=n.performWarningRuntimeChecks=n.performRuntimeChecks=n.addStickyFlag=n.addStartOfInput=n.findUnreachablePatterns=n.findModesThatDoNotExist=n.findInvalidGroupType=n.findDuplicatePatterns=n.findUnsupportedFlags=n.findStartOfInputAnchor=n.findEmptyMatchRegExps=n.findEndOfInputAnchor=n.findInvalidPatterns=n.findMissingPatterns=n.validatePatterns=n.analyzeTokenTypes=n.enableSticky=n.disableSticky=n.SUPPORT_STICKY=n.MODES=n.DEFAULT_MODE=void 0;var t=Zo(),i=Vr(),r=it(),o=Wm(),s=$o(),c="PATTERN";n.DEFAULT_MODE="defaultMode",n.MODES="modes",n.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function l(){n.SUPPORT_STICKY=!1}n.disableSticky=l;function a(){n.SUPPORT_STICKY=!0}n.enableSticky=a;function f(V,Q){Q=r.defaults(Q,{useSticky:n.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(P,A){return A()}});var $=Q.tracer;$("initCharCodeToOptimizedIndexMap",function(){ne()});var pe;$("Reject Lexer.NA",function(){pe=r.reject(V,function(P){return P[c]===i.Lexer.NA})});var me=!1,G;$("Transform Patterns",function(){me=!1,G=r.map(pe,function(P){var A=P[c];if(r.isRegExp(A)){var F=A.source;return F.length===1&&F!=="^"&&F!=="$"&&F!=="."&&!A.ignoreCase?F:F.length===2&&F[0]==="\\"&&!r.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],F[1])?F[1]:Q.useSticky?I(A):N(A)}else{if(r.isFunction(A))return me=!0,{exec:A};if(r.has(A,"exec"))return me=!0,A;if(typeof A=="string"){if(A.length===1)return A;var B=A.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),D=new RegExp(B);return Q.useSticky?I(D):N(D)}else throw Error("non exhaustive match")}})});var Re,Ee,Be,Ie,Ge;$("misc mapping",function(){Re=r.map(pe,function(P){return P.tokenTypeIdx}),Ee=r.map(pe,function(P){var A=P.GROUP;if(A!==i.Lexer.SKIPPED){if(r.isString(A))return A;if(r.isUndefined(A))return!1;throw Error("non exhaustive match")}}),Be=r.map(pe,function(P){var A=P.LONGER_ALT;if(A){var F=r.indexOf(pe,A);return F}}),Ie=r.map(pe,function(P){return P.PUSH_MODE}),Ge=r.map(pe,function(P){return r.has(P,"POP_MODE")})});var Ue;$("Line Terminator Handling",function(){var P=ae(Q.lineTerminatorCharacters);Ue=r.map(pe,function(A){return!1}),Q.positionTracking!=="onlyOffset"&&(Ue=r.map(pe,function(A){if(r.has(A,"LINE_BREAKS"))return A.LINE_BREAKS;if(W(A,P)===!1)return o.canMatchCharCode(P,A.PATTERN)}))});var J,fe,C,M;$("Misc Mapping #2",function(){J=r.map(pe,Z),fe=r.map(G,j),C=r.reduce(pe,function(P,A){var F=A.GROUP;return r.isString(F)&&F!==i.Lexer.SKIPPED&&(P[F]=[]),P},{}),M=r.map(G,function(P,A){return{pattern:G[A],longerAlt:Be[A],canLineTerminator:Ue[A],isCustom:J[A],short:fe[A],group:Ee[A],push:Ie[A],pop:Ge[A],tokenTypeIdx:Re[A],tokenType:pe[A]}})});var K=!0,ue=[];return Q.safeMode||$("First Char Optimization",function(){ue=r.reduce(pe,function(P,A,F){if(typeof A.PATTERN=="string"){var B=A.PATTERN.charCodeAt(0),D=xe(B);_e(P,D,M[F])}else if(r.isArray(A.START_CHARS_HINT)){var X;r.forEach(A.START_CHARS_HINT,function(q){var oe=typeof q=="string"?q.charCodeAt(0):q,he=xe(oe);X!==he&&(X=he,_e(P,he,M[F]))})}else if(r.isRegExp(A.PATTERN))if(A.PATTERN.unicode)K=!1,Q.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	Unable to analyze < "+A.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var z=o.getOptimizedStartCodesIndices(A.PATTERN,Q.ensureOptimizations);r.isEmpty(z)&&(K=!1),r.forEach(z,function(q){_e(P,q,M[F])})}else Q.ensureOptimizations&&r.PRINT_ERROR(""+o.failedOptimizationPrefixMsg+("	TokenType: <"+A.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),K=!1;return P},[])}),$("ArrayPacking",function(){ue=r.packArray(ue)}),{emptyGroups:C,patternIdxToConfig:M,charCodeToPatternIdxToConfig:ue,hasCustom:me,canBeOptimized:K}}n.analyzeTokenTypes=f;function d(V,Q){var $=[],pe=m(V);$=$.concat(pe.errors);var me=g(pe.valid),G=me.valid;return $=$.concat(me.errors),$=$.concat(p(G)),$=$.concat(b(G)),$=$.concat(R(G,Q)),$=$.concat(k(G)),$}n.validatePatterns=d;function p(V){var Q=[],$=r.filter(V,function(pe){return r.isRegExp(pe[c])});return Q=Q.concat(u($)),Q=Q.concat(x($)),Q=Q.concat(v($)),Q=Q.concat(L($)),Q=Q.concat(h($)),Q}function m(V){var Q=r.filter(V,function(me){return!r.has(me,c)}),$=r.map(Q,function(me){return{message:"Token Type: ->"+me.name+"<- missing static 'PATTERN' property",type:i.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[me]}}),pe=r.difference(V,Q);return{errors:$,valid:pe}}n.findMissingPatterns=m;function g(V){var Q=r.filter(V,function(me){var G=me[c];return!r.isRegExp(G)&&!r.isFunction(G)&&!r.has(G,"exec")&&!r.isString(G)}),$=r.map(Q,function(me){return{message:"Token Type: ->"+me.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:i.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[me]}}),pe=r.difference(V,Q);return{errors:$,valid:pe}}n.findInvalidPatterns=g;var _=/[^\\][\$]/;function u(V){var Q=function(me){e(G,me);function G(){var Re=me!==null&&me.apply(this,arguments)||this;return Re.found=!1,Re}return G.prototype.visitEndAnchor=function(Re){this.found=!0},G}(t.BaseRegExpVisitor),$=r.filter(V,function(me){var G=me[c];try{var Re=s.getRegExpAst(G),Ee=new Q;return Ee.visit(Re),Ee.found}catch{return _.test(G.source)}}),pe=r.map($,function(me){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+me.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[me]}});return pe}n.findEndOfInputAnchor=u;function h(V){var Q=r.filter(V,function(pe){var me=pe[c];return me.test("")}),$=r.map(Q,function(pe){return{message:"Token Type: ->"+pe.name+"<- static 'PATTERN' must not match an empty string",type:i.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[pe]}});return $}n.findEmptyMatchRegExps=h;var E=/[^\\[][\^]|^\^/;function x(V){var Q=function(me){e(G,me);function G(){var Re=me!==null&&me.apply(this,arguments)||this;return Re.found=!1,Re}return G.prototype.visitStartAnchor=function(Re){this.found=!0},G}(t.BaseRegExpVisitor),$=r.filter(V,function(me){var G=me[c];try{var Re=s.getRegExpAst(G),Ee=new Q;return Ee.visit(Re),Ee.found}catch{return E.test(G.source)}}),pe=r.map($,function(me){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+me.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:i.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[me]}});return pe}n.findStartOfInputAnchor=x;function v(V){var Q=r.filter(V,function(pe){var me=pe[c];return me instanceof RegExp&&(me.multiline||me.global)}),$=r.map(Q,function(pe){return{message:"Token Type: ->"+pe.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:i.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[pe]}});return $}n.findUnsupportedFlags=v;function L(V){var Q=[],$=r.map(V,function(G){return r.reduce(V,function(Re,Ee){return G.PATTERN.source===Ee.PATTERN.source&&!r.contains(Q,Ee)&&Ee.PATTERN!==i.Lexer.NA&&(Q.push(Ee),Re.push(Ee)),Re},[])});$=r.compact($);var pe=r.filter($,function(G){return G.length>1}),me=r.map(pe,function(G){var Re=r.map(G,function(Be){return Be.name}),Ee=r.first(G).PATTERN;return{message:"The same RegExp pattern ->"+Ee+"<-"+("has been used in all of the following Token Types: "+Re.join(", ")+" <-"),type:i.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:G}});return me}n.findDuplicatePatterns=L;function b(V){var Q=r.filter(V,function(pe){if(!r.has(pe,"GROUP"))return!1;var me=pe.GROUP;return me!==i.Lexer.SKIPPED&&me!==i.Lexer.NA&&!r.isString(me)}),$=r.map(Q,function(pe){return{message:"Token Type: ->"+pe.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:i.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[pe]}});return $}n.findInvalidGroupType=b;function R(V,Q){var $=r.filter(V,function(me){return me.PUSH_MODE!==void 0&&!r.contains(Q,me.PUSH_MODE)}),pe=r.map($,function(me){var G="Token Type: ->"+me.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+me.PUSH_MODE+"<-which does not exist";return{message:G,type:i.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[me]}});return pe}n.findModesThatDoNotExist=R;function k(V){var Q=[],$=r.reduce(V,function(pe,me,G){var Re=me.PATTERN;return Re===i.Lexer.NA||(r.isString(Re)?pe.push({str:Re,idx:G,tokenType:me}):r.isRegExp(Re)&&S(Re)&&pe.push({str:Re.source,idx:G,tokenType:me})),pe},[]);return r.forEach(V,function(pe,me){r.forEach($,function(G){var Re=G.str,Ee=G.idx,Be=G.tokenType;if(me<Ee&&y(Re,pe.PATTERN)){var Ie="Token: ->"+Be.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+pe.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;Q.push({message:Ie,type:i.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[pe,Be]})}})}),Q}n.findUnreachablePatterns=k;function y(V,Q){if(r.isRegExp(Q)){var $=Q.exec(V);return $!==null&&$.index===0}else{if(r.isFunction(Q))return Q(V,0,[],{});if(r.has(Q,"exec"))return Q.exec(V,0,[],{});if(typeof Q=="string")return Q===V;throw Error("non exhaustive match")}}function S(V){var Q=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return r.find(Q,function($){return V.source.indexOf($)!==-1})===void 0}function N(V){var Q=V.ignoreCase?"i":"";return new RegExp("^(?:"+V.source+")",Q)}n.addStartOfInput=N;function I(V){var Q=V.ignoreCase?"iy":"y";return new RegExp(""+V.source,Q)}n.addStickyFlag=I;function w(V,Q,$){var pe=[];return r.has(V,n.DEFAULT_MODE)||pe.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.DEFAULT_MODE+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),r.has(V,n.MODES)||pe.push({message:"A MultiMode Lexer cannot be initialized without a <"+n.MODES+`> property in its definition
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),r.has(V,n.MODES)&&r.has(V,n.DEFAULT_MODE)&&!r.has(V.modes,V.defaultMode)&&pe.push({message:"A MultiMode Lexer cannot be initialized with a "+n.DEFAULT_MODE+": <"+V.defaultMode+`>which does not exist
`,type:i.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),r.has(V,n.MODES)&&r.forEach(V.modes,function(me,G){r.forEach(me,function(Re,Ee){r.isUndefined(Re)&&pe.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+G+"> at index: <"+Ee+`>
`),type:i.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),pe}n.performRuntimeChecks=w;function U(V,Q,$){var pe=[],me=!1,G=r.compact(r.flatten(r.mapValues(V.modes,function(Be){return Be}))),Re=r.reject(G,function(Be){return Be[c]===i.Lexer.NA}),Ee=ae($);return Q&&r.forEach(Re,function(Be){var Ie=W(Be,Ee);if(Ie!==!1){var Ge=ie(Be,Ie),Ue={message:Ge,type:Ie.issue,tokenType:Be};pe.push(Ue)}else r.has(Be,"LINE_BREAKS")?Be.LINE_BREAKS===!0&&(me=!0):o.canMatchCharCode(Ee,Be.PATTERN)&&(me=!0)}),Q&&!me&&pe.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:i.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),pe}n.performWarningRuntimeChecks=U;function H(V){var Q={},$=r.keys(V);return r.forEach($,function(pe){var me=V[pe];if(r.isArray(me))Q[pe]=[];else throw Error("non exhaustive match")}),Q}n.cloneEmptyGroups=H;function Z(V){var Q=V.PATTERN;if(r.isRegExp(Q))return!1;if(r.isFunction(Q)||r.has(Q,"exec"))return!0;if(r.isString(Q))return!1;throw Error("non exhaustive match")}n.isCustomPattern=Z;function j(V){return r.isString(V)&&V.length===1?V.charCodeAt(0):!1}n.isShortPattern=j,n.LineTerminatorOptimizedTester={test:function(V){for(var Q=V.length,$=this.lastIndex;$<Q;$++){var pe=V.charCodeAt($);if(pe===10)return this.lastIndex=$+1,!0;if(pe===13)return V.charCodeAt($+1)===10?this.lastIndex=$+2:this.lastIndex=$+1,!0}return!1},lastIndex:0};function W(V,Q){if(r.has(V,"LINE_BREAKS"))return!1;if(r.isRegExp(V.PATTERN)){try{o.canMatchCharCode(Q,V.PATTERN)}catch($){return{issue:i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:$.message}}return!1}else{if(r.isString(V.PATTERN))return!1;if(Z(V))return{issue:i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function ie(V,Q){if(Q.issue===i.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+V.name+`> Token Type
`)+("	 Root cause: "+Q.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(Q.issue===i.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+V.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}n.buildLineBreakIssueMessage=ie;function ae(V){var Q=r.map(V,function($){return r.isString($)&&$.length>0?$.charCodeAt(0):$});return Q}function _e(V,Q,$){V[Q]===void 0?V[Q]=[$]:V[Q].push($)}n.minOptimizationVal=256;var ye=[];function xe(V){return V<n.minOptimizationVal?V:ye[V]}n.charCodeToOptimizedIndex=xe;function ne(){if(r.isEmpty(ye)){ye=new Array(65536);for(var V=0;V<65536;V++)ye[V]=V>255?255+~~(V/255):V}}}),Yi=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.isTokenType=n.hasExtendingTokensTypesMapProperty=n.hasExtendingTokensTypesProperty=n.hasCategoriesProperty=n.hasShortKeyProperty=n.singleAssignCategoriesToksMap=n.assignCategoriesMapProp=n.assignCategoriesTokensProp=n.assignTokenDefaultProps=n.expandCategories=n.augmentTokenTypes=n.tokenIdxToClass=n.tokenShortNameIdx=n.tokenStructuredMatcherNoCategories=n.tokenStructuredMatcher=void 0;var e=it();function t(_,u){var h=_.tokenTypeIdx;return h===u.tokenTypeIdx?!0:u.isParent===!0&&u.categoryMatchesMap[h]===!0}n.tokenStructuredMatcher=t;function i(_,u){return _.tokenTypeIdx===u.tokenTypeIdx}n.tokenStructuredMatcherNoCategories=i,n.tokenShortNameIdx=1,n.tokenIdxToClass={};function r(_){var u=o(_);s(u),l(u),c(u),e.forEach(u,function(h){h.isParent=h.categoryMatches.length>0})}n.augmentTokenTypes=r;function o(_){for(var u=e.cloneArr(_),h=_,E=!0;E;){h=e.compact(e.flatten(e.map(h,function(v){return v.CATEGORIES})));var x=e.difference(h,u);u=u.concat(x),e.isEmpty(x)?E=!1:h=x}return u}n.expandCategories=o;function s(_){e.forEach(_,function(u){f(u)||(n.tokenIdxToClass[n.tokenShortNameIdx]=u,u.tokenTypeIdx=n.tokenShortNameIdx++),d(u)&&!e.isArray(u.CATEGORIES)&&(u.CATEGORIES=[u.CATEGORIES]),d(u)||(u.CATEGORIES=[]),p(u)||(u.categoryMatches=[]),m(u)||(u.categoryMatchesMap={})})}n.assignTokenDefaultProps=s;function c(_){e.forEach(_,function(u){u.categoryMatches=[],e.forEach(u.categoryMatchesMap,function(h,E){u.categoryMatches.push(n.tokenIdxToClass[E].tokenTypeIdx)})})}n.assignCategoriesTokensProp=c;function l(_){e.forEach(_,function(u){a([],u)})}n.assignCategoriesMapProp=l;function a(_,u){e.forEach(_,function(h){u.categoryMatchesMap[h.tokenTypeIdx]=!0}),e.forEach(u.CATEGORIES,function(h){var E=_.concat(u);e.contains(E,h)||a(E,h)})}n.singleAssignCategoriesToksMap=a;function f(_){return e.has(_,"tokenTypeIdx")}n.hasShortKeyProperty=f;function d(_){return e.has(_,"CATEGORIES")}n.hasCategoriesProperty=d;function p(_){return e.has(_,"categoryMatches")}n.hasExtendingTokensTypesProperty=p;function m(_){return e.has(_,"categoryMatchesMap")}n.hasExtendingTokensTypesMapProperty=m;function g(_){return e.has(_,"tokenTypeIdx")}n.isTokenType=g}),Sc=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultLexerErrorProvider=void 0,n.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(e){return"Unable to pop Lexer Mode after encountering Token ->"+e.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(e,t,i,r,o){return"unexpected character: ->"+e.charAt(t)+"<- at offset: "+t+","+(" skipped "+i+" characters.")}}}),Vr=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Lexer=n.LexerDefinitionErrorType=void 0;var e=yc(),t=it(),i=Yi(),r=Sc(),o=$o();(function(l){l[l.MISSING_PATTERN=0]="MISSING_PATTERN",l[l.INVALID_PATTERN=1]="INVALID_PATTERN",l[l.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",l[l.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",l[l.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",l[l.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",l[l.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",l[l.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",l[l.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",l[l.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",l[l.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",l[l.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",l[l.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",l[l.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",l[l.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",l[l.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",l[l.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(n.LexerDefinitionErrorType||(n.LexerDefinitionErrorType={}));var s={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:r.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(s);var c=function(){function l(a,f){var d=this;if(f===void 0&&(f=s),this.lexerDefinition=a,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof f=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=t.merge(s,f);var p=this.config.traceInitPerf;p===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof p=="number"&&(this.traceInitMaxIdent=p,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var m,g=!0;d.TRACE_INIT("Lexer Config handling",function(){if(d.config.lineTerminatorsPattern===s.lineTerminatorsPattern)d.config.lineTerminatorsPattern=e.LineTerminatorOptimizedTester;else if(d.config.lineTerminatorCharacters===s.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(f.safeMode&&f.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');d.trackStartLines=/full|onlyStart/i.test(d.config.positionTracking),d.trackEndLines=/full/i.test(d.config.positionTracking),t.isArray(a)?(m={modes:{}},m.modes[e.DEFAULT_MODE]=t.cloneArr(a),m[e.DEFAULT_MODE]=e.DEFAULT_MODE):(g=!1,m=t.cloneObj(a))}),d.config.skipValidations===!1&&(d.TRACE_INIT("performRuntimeChecks",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.performRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))}),d.TRACE_INIT("performWarningRuntimeChecks",function(){d.lexerDefinitionWarning=d.lexerDefinitionWarning.concat(e.performWarningRuntimeChecks(m,d.trackStartLines,d.config.lineTerminatorCharacters))})),m.modes=m.modes?m.modes:{},t.forEach(m.modes,function(E,x){m.modes[x]=t.reject(E,function(v){return t.isUndefined(v)})});var _=t.keys(m.modes);if(t.forEach(m.modes,function(E,x){d.TRACE_INIT("Mode: <"+x+"> processing",function(){if(d.modes.push(x),d.config.skipValidations===!1&&d.TRACE_INIT("validatePatterns",function(){d.lexerDefinitionErrors=d.lexerDefinitionErrors.concat(e.validatePatterns(E,_))}),t.isEmpty(d.lexerDefinitionErrors)){i.augmentTokenTypes(E);var v;d.TRACE_INIT("analyzeTokenTypes",function(){v=e.analyzeTokenTypes(E,{lineTerminatorCharacters:d.config.lineTerminatorCharacters,positionTracking:f.positionTracking,ensureOptimizations:f.ensureOptimizations,safeMode:f.safeMode,tracer:d.TRACE_INIT.bind(d)})}),d.patternIdxToConfig[x]=v.patternIdxToConfig,d.charCodeToPatternIdxToConfig[x]=v.charCodeToPatternIdxToConfig,d.emptyGroups=t.merge(d.emptyGroups,v.emptyGroups),d.hasCustom=v.hasCustom||d.hasCustom,d.canModeBeOptimized[x]=v.canBeOptimized}})}),d.defaultMode=m.defaultMode,!t.isEmpty(d.lexerDefinitionErrors)&&!d.config.deferDefinitionErrorsHandling){var u=t.map(d.lexerDefinitionErrors,function(E){return E.message}),h=u.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+h)}t.forEach(d.lexerDefinitionWarning,function(E){t.PRINT_WARNING(E.message)}),d.TRACE_INIT("Choosing sub-methods implementations",function(){if(e.SUPPORT_STICKY?(d.chopInput=t.IDENTITY,d.match=d.matchWithTest):(d.updateLastIndex=t.NOOP,d.match=d.matchWithExec),g&&(d.handleModes=t.NOOP),d.trackStartLines===!1&&(d.computeNewColumn=t.IDENTITY),d.trackEndLines===!1&&(d.updateTokenEndLineColumnLocation=t.NOOP),/full/i.test(d.config.positionTracking))d.createTokenInstance=d.createFullToken;else if(/onlyStart/i.test(d.config.positionTracking))d.createTokenInstance=d.createStartOnlyToken;else if(/onlyOffset/i.test(d.config.positionTracking))d.createTokenInstance=d.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+d.config.positionTracking+'"');d.hasCustom?(d.addToken=d.addTokenUsingPush,d.handlePayload=d.handlePayloadWithCustom):(d.addToken=d.addTokenUsingMemberAccess,d.handlePayload=d.handlePayloadNoCustom)}),d.TRACE_INIT("Failed Optimization Warnings",function(){var E=t.reduce(d.canModeBeOptimized,function(x,v,L){return v===!1&&x.push(L),x},[]);if(f.ensureOptimizations&&!t.isEmpty(E))throw Error("Lexer Modes: < "+E.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),d.TRACE_INIT("clearRegExpParserCache",function(){o.clearRegExpParserCache()}),d.TRACE_INIT("toFastProperties",function(){t.toFastProperties(d)})})}return l.prototype.tokenize=function(a,f){if(f===void 0&&(f=this.defaultMode),!t.isEmpty(this.lexerDefinitionErrors)){var d=t.map(this.lexerDefinitionErrors,function(g){return g.message}),p=d.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+p)}var m=this.tokenizeInternal(a,f);return m},l.prototype.tokenizeInternal=function(a,f){var d=this,p,m,g,_,u,h,E,x,v,L,b,R,k,y,S=a,N=S.length,I=0,w=0,U=this.hasCustom?0:Math.floor(a.length/10),H=new Array(U),Z=[],j=this.trackStartLines?1:void 0,W=this.trackStartLines?1:void 0,ie=e.cloneEmptyGroups(this.emptyGroups),ae=this.trackStartLines,_e=this.config.lineTerminatorsPattern,ye=0,xe=[],ne=[],V=[],Q=[];Object.freeze(Q);var $=void 0;function pe(){return xe}function me(X){var z=e.charCodeToOptimizedIndex(X),q=ne[z];return q===void 0?Q:q}var G=function(X){if(V.length===1&&X.tokenType.PUSH_MODE===void 0){var z=d.config.errorMessageProvider.buildUnableToPopLexerModeMessage(X);Z.push({offset:X.startOffset,line:X.startLine!==void 0?X.startLine:void 0,column:X.startColumn!==void 0?X.startColumn:void 0,length:X.image.length,message:z})}else{V.pop();var q=t.last(V);xe=d.patternIdxToConfig[q],ne=d.charCodeToPatternIdxToConfig[q],ye=xe.length;var oe=d.canModeBeOptimized[q]&&d.config.safeMode===!1;ne&&oe?$=me:$=pe}};function Re(X){V.push(X),ne=this.charCodeToPatternIdxToConfig[X],xe=this.patternIdxToConfig[X],ye=xe.length,ye=xe.length;var z=this.canModeBeOptimized[X]&&this.config.safeMode===!1;ne&&z?$=me:$=pe}Re.call(this,f);for(var Ee;I<N;){u=null;var Be=S.charCodeAt(I),Ie=$(Be),Ge=Ie.length;for(p=0;p<Ge;p++){Ee=Ie[p];var Ue=Ee.pattern;h=null;var J=Ee.short;if(J!==!1?Be===J&&(u=Ue):Ee.isCustom===!0?(y=Ue.exec(S,I,H,ie),y!==null?(u=y[0],y.payload!==void 0&&(h=y.payload)):u=null):(this.updateLastIndex(Ue,I),u=this.match(Ue,a,I)),u!==null){if(_=Ee.longerAlt,_!==void 0){var fe=xe[_],C=fe.pattern;E=null,fe.isCustom===!0?(y=C.exec(S,I,H,ie),y!==null?(g=y[0],y.payload!==void 0&&(E=y.payload)):g=null):(this.updateLastIndex(C,I),g=this.match(C,a,I)),g&&g.length>u.length&&(u=g,h=E,Ee=fe)}break}}if(u!==null){if(x=u.length,v=Ee.group,v!==void 0&&(L=Ee.tokenTypeIdx,b=this.createTokenInstance(u,I,L,Ee.tokenType,j,W,x),this.handlePayload(b,h),v===!1?w=this.addToken(H,w,b):ie[v].push(b)),a=this.chopInput(a,x),I=I+x,W=this.computeNewColumn(W,x),ae===!0&&Ee.canLineTerminator===!0){var M=0,K=void 0,ue=void 0;_e.lastIndex=0;do K=_e.test(u),K===!0&&(ue=_e.lastIndex-1,M++);while(K===!0);M!==0&&(j=j+M,W=x-ue,this.updateTokenEndLineColumnLocation(b,v,ue,M,j,W,x))}this.handleModes(Ee,G,Re,b)}else{for(var P=I,A=j,F=W,B=!1;!B&&I<N;)for(S.charCodeAt(I),a=this.chopInput(a,1),I++,m=0;m<ye;m++){var D=xe[m],Ue=D.pattern,J=D.short;if(J!==!1?S.charCodeAt(I)===J&&(B=!0):D.isCustom===!0?B=Ue.exec(S,I,H,ie)!==null:(this.updateLastIndex(Ue,I),B=Ue.exec(a)!==null),B===!0)break}R=I-P,k=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(S,P,R,A,F),Z.push({offset:P,line:A,column:F,length:R,message:k})}}return this.hasCustom||(H.length=w),{tokens:H,groups:ie,errors:Z}},l.prototype.handleModes=function(a,f,d,p){if(a.pop===!0){var m=a.push;f(p),m!==void 0&&d.call(this,m)}else a.push!==void 0&&d.call(this,a.push)},l.prototype.chopInput=function(a,f){return a.substring(f)},l.prototype.updateLastIndex=function(a,f){a.lastIndex=f},l.prototype.updateTokenEndLineColumnLocation=function(a,f,d,p,m,g,_){var u,h;f!==void 0&&(u=d===_-1,h=u?-1:0,p===1&&u===!0||(a.endLine=m+h,a.endColumn=g-1+-h))},l.prototype.computeNewColumn=function(a,f){return a+f},l.prototype.createTokenInstance=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return null},l.prototype.createOffsetOnlyToken=function(a,f,d,p){return{image:a,startOffset:f,tokenTypeIdx:d,tokenType:p}},l.prototype.createStartOnlyToken=function(a,f,d,p,m,g){return{image:a,startOffset:f,startLine:m,startColumn:g,tokenTypeIdx:d,tokenType:p}},l.prototype.createFullToken=function(a,f,d,p,m,g,_){return{image:a,startOffset:f,endOffset:f+_-1,startLine:m,endLine:m,startColumn:g,endColumn:g+_-1,tokenTypeIdx:d,tokenType:p}},l.prototype.addToken=function(a,f,d){return 666},l.prototype.addTokenUsingPush=function(a,f,d){return a.push(d),f},l.prototype.addTokenUsingMemberAccess=function(a,f,d){return a[f]=d,f++,f},l.prototype.handlePayload=function(a,f){},l.prototype.handlePayloadNoCustom=function(a,f){},l.prototype.handlePayloadWithCustom=function(a,f){f!==null&&(a.payload=f)},l.prototype.match=function(a,f,d){return null},l.prototype.matchWithTest=function(a,f,d){var p=a.test(f);return p===!0?f.substring(d,a.lastIndex):null},l.prototype.matchWithExec=function(a,f){var d=a.exec(f);return d!==null?d[0]:d},l.prototype.TRACE_INIT=function(a,f){if(this.traceInitPerf===!0){this.traceInitIndent++;var d=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(d+"--> <"+a+">");var p=t.timer(f),m=p.time,g=p.value,_=m>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&_(d+"<-- <"+a+"> time: "+m+"ms"),this.traceInitIndent--,g}else return f()},l.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",l.NA=/NOT_APPLICABLE/,l}();n.Lexer=c}),Gn=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.tokenMatcher=n.createTokenInstance=n.EOF=n.createToken=n.hasTokenLabel=n.tokenName=n.tokenLabel=void 0;var e=it(),t=Vr(),i=Yi();function r(v){return s(v)?v.LABEL:v.name}n.tokenLabel=r;function o(v){return v.name}n.tokenName=o;function s(v){return e.isString(v.LABEL)&&v.LABEL!==""}n.hasTokenLabel=s;var c="parent",l="categories",a="label",f="group",d="push_mode",p="pop_mode",m="longer_alt",g="line_breaks",_="start_chars_hint";function u(v){return h(v)}n.createToken=u;function h(v){var L=v.pattern,b={};if(b.name=v.name,e.isUndefined(L)||(b.PATTERN=L),e.has(v,c))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return e.has(v,l)&&(b.CATEGORIES=v[l]),i.augmentTokenTypes([b]),e.has(v,a)&&(b.LABEL=v[a]),e.has(v,f)&&(b.GROUP=v[f]),e.has(v,p)&&(b.POP_MODE=v[p]),e.has(v,d)&&(b.PUSH_MODE=v[d]),e.has(v,m)&&(b.LONGER_ALT=v[m]),e.has(v,g)&&(b.LINE_BREAKS=v[g]),e.has(v,_)&&(b.START_CHARS_HINT=v[_]),b}n.EOF=u({name:"EOF",pattern:t.Lexer.NA}),i.augmentTokenTypes([n.EOF]);function E(v,L,b,R,k,y,S,N){return{image:L,startOffset:b,endOffset:R,startLine:k,endLine:y,startColumn:S,endColumn:N,tokenTypeIdx:v.tokenTypeIdx,tokenType:v}}n.createTokenInstance=E;function x(v,L){return i.tokenStructuredMatcher(v,L)}n.tokenMatcher=x}),Nt=je(n=>{var e=n&&n.__extends||function(){var h=function(E,x){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,L){v.__proto__=L}||function(v,L){for(var b in L)Object.prototype.hasOwnProperty.call(L,b)&&(v[b]=L[b])},h(E,x)};return function(E,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");h(E,x);function v(){this.constructor=E}E.prototype=x===null?Object.create(x):(v.prototype=x.prototype,new v)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.serializeProduction=n.serializeGrammar=n.Terminal=n.Alternation=n.RepetitionWithSeparator=n.Repetition=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Option=n.Alternative=n.Rule=n.NonTerminal=n.AbstractProduction=void 0;var t=it(),i=Gn(),r=function(){function h(E){this._definition=E}return Object.defineProperty(h.prototype,"definition",{get:function(){return this._definition},set:function(E){this._definition=E},enumerable:!1,configurable:!0}),h.prototype.accept=function(E){E.visit(this),t.forEach(this.definition,function(x){x.accept(E)})},h}();n.AbstractProduction=r;var o=function(h){e(E,h);function E(x){var v=h.call(this,[])||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return Object.defineProperty(E.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(x){},enumerable:!1,configurable:!0}),E.prototype.accept=function(x){x.visit(this)},E}(r);n.NonTerminal=o;var s=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.orgText="",t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.Rule=s;var c=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.ignoreAmbiguities=!1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.Alternative=c;var l=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.Option=l;var a=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.RepetitionMandatory=a;var f=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.RepetitionMandatoryWithSeparator=f;var d=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.Repetition=d;var p=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return E}(r);n.RepetitionWithSeparator=p;var m=function(h){e(E,h);function E(x){var v=h.call(this,x.definition)||this;return v.idx=1,v.ignoreAmbiguities=!1,v.hasPredicates=!1,t.assign(v,t.pick(x,function(L){return L!==void 0})),v}return Object.defineProperty(E.prototype,"definition",{get:function(){return this._definition},set:function(x){this._definition=x},enumerable:!1,configurable:!0}),E}(r);n.Alternation=m;var g=function(){function h(E){this.idx=1,t.assign(this,t.pick(E,function(x){return x!==void 0}))}return h.prototype.accept=function(E){E.visit(this)},h}();n.Terminal=g;function _(h){return t.map(h,u)}n.serializeGrammar=_;function u(h){function E(L){return t.map(L,u)}if(h instanceof o)return{type:"NonTerminal",name:h.nonTerminalName,idx:h.idx};if(h instanceof c)return{type:"Alternative",definition:E(h.definition)};if(h instanceof l)return{type:"Option",idx:h.idx,definition:E(h.definition)};if(h instanceof a)return{type:"RepetitionMandatory",idx:h.idx,definition:E(h.definition)};if(h instanceof f)return{type:"RepetitionMandatoryWithSeparator",idx:h.idx,separator:u(new g({terminalType:h.separator})),definition:E(h.definition)};if(h instanceof p)return{type:"RepetitionWithSeparator",idx:h.idx,separator:u(new g({terminalType:h.separator})),definition:E(h.definition)};if(h instanceof d)return{type:"Repetition",idx:h.idx,definition:E(h.definition)};if(h instanceof m)return{type:"Alternation",idx:h.idx,definition:E(h.definition)};if(h instanceof g){var x={type:"Terminal",name:h.terminalType.name,label:i.tokenLabel(h.terminalType),idx:h.idx},v=h.terminalType.PATTERN;return h.terminalType.PATTERN&&(x.pattern=t.isRegExp(v)?v.source:v),x}else{if(h instanceof s)return{type:"Rule",name:h.name,orgText:h.orgText,definition:E(h.definition)};throw Error("non exhaustive match")}}n.serializeProduction=u}),Jo=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RestWalker=void 0;var e=it(),t=Nt(),i=function(){function o(){}return o.prototype.walk=function(s,c){var l=this;c===void 0&&(c=[]),e.forEach(s.definition,function(a,f){var d=e.drop(s.definition,f+1);if(a instanceof t.NonTerminal)l.walkProdRef(a,d,c);else if(a instanceof t.Terminal)l.walkTerminal(a,d,c);else if(a instanceof t.Alternative)l.walkFlat(a,d,c);else if(a instanceof t.Option)l.walkOption(a,d,c);else if(a instanceof t.RepetitionMandatory)l.walkAtLeastOne(a,d,c);else if(a instanceof t.RepetitionMandatoryWithSeparator)l.walkAtLeastOneSep(a,d,c);else if(a instanceof t.RepetitionWithSeparator)l.walkManySep(a,d,c);else if(a instanceof t.Repetition)l.walkMany(a,d,c);else if(a instanceof t.Alternation)l.walkOr(a,d,c);else throw Error("non exhaustive match")})},o.prototype.walkTerminal=function(s,c,l){},o.prototype.walkProdRef=function(s,c,l){},o.prototype.walkFlat=function(s,c,l){var a=c.concat(l);this.walk(s,a)},o.prototype.walkOption=function(s,c,l){var a=c.concat(l);this.walk(s,a)},o.prototype.walkAtLeastOne=function(s,c,l){var a=[new t.Option({definition:s.definition})].concat(c,l);this.walk(s,a)},o.prototype.walkAtLeastOneSep=function(s,c,l){var a=r(s,c,l);this.walk(s,a)},o.prototype.walkMany=function(s,c,l){var a=[new t.Option({definition:s.definition})].concat(c,l);this.walk(s,a)},o.prototype.walkManySep=function(s,c,l){var a=r(s,c,l);this.walk(s,a)},o.prototype.walkOr=function(s,c,l){var a=this,f=c.concat(l);e.forEach(s.definition,function(d){var p=new t.Alternative({definition:[d]});a.walk(p,f)})},o}();n.RestWalker=i;function r(o,s,c){var l=[new t.Option({definition:[new t.Terminal({terminalType:o.separator})].concat(o.definition)})],a=l.concat(s,c);return a}}),ji=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GAstVisitor=void 0;var e=Nt(),t=function(){function i(){}return i.prototype.visit=function(r){var o=r;switch(o.constructor){case e.NonTerminal:return this.visitNonTerminal(o);case e.Alternative:return this.visitAlternative(o);case e.Option:return this.visitOption(o);case e.RepetitionMandatory:return this.visitRepetitionMandatory(o);case e.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(o);case e.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(o);case e.Repetition:return this.visitRepetition(o);case e.Alternation:return this.visitAlternation(o);case e.Terminal:return this.visitTerminal(o);case e.Rule:return this.visitRule(o);default:throw Error("non exhaustive match")}},i.prototype.visitNonTerminal=function(r){},i.prototype.visitAlternative=function(r){},i.prototype.visitOption=function(r){},i.prototype.visitRepetition=function(r){},i.prototype.visitRepetitionMandatory=function(r){},i.prototype.visitRepetitionMandatoryWithSeparator=function(r){},i.prototype.visitRepetitionWithSeparator=function(r){},i.prototype.visitAlternation=function(r){},i.prototype.visitTerminal=function(r){},i.prototype.visitRule=function(r){},i}();n.GAstVisitor=t}),Gr=je(n=>{var e=n&&n.__extends||function(){var p=function(m,g){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,u){_.__proto__=u}||function(_,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(_[h]=u[h])},p(m,g)};return function(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(m,g);function _(){this.constructor=m}m.prototype=g===null?Object.create(g):(_.prototype=g.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.collectMethods=n.DslMethodsCollectorVisitor=n.getProductionDslName=n.isBranchingProd=n.isOptionalProd=n.isSequenceProd=void 0;var t=it(),i=Nt(),r=ji();function o(p){return p instanceof i.Alternative||p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionMandatory||p instanceof i.RepetitionMandatoryWithSeparator||p instanceof i.RepetitionWithSeparator||p instanceof i.Terminal||p instanceof i.Rule}n.isSequenceProd=o;function s(p,m){m===void 0&&(m=[]);var g=p instanceof i.Option||p instanceof i.Repetition||p instanceof i.RepetitionWithSeparator;return g?!0:p instanceof i.Alternation?t.some(p.definition,function(_){return s(_,m)}):p instanceof i.NonTerminal&&t.contains(m,p)?!1:p instanceof i.AbstractProduction?(p instanceof i.NonTerminal&&m.push(p),t.every(p.definition,function(_){return s(_,m)})):!1}n.isOptionalProd=s;function c(p){return p instanceof i.Alternation}n.isBranchingProd=c;function l(p){if(p instanceof i.NonTerminal)return"SUBRULE";if(p instanceof i.Option)return"OPTION";if(p instanceof i.Alternation)return"OR";if(p instanceof i.RepetitionMandatory)return"AT_LEAST_ONE";if(p instanceof i.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(p instanceof i.RepetitionWithSeparator)return"MANY_SEP";if(p instanceof i.Repetition)return"MANY";if(p instanceof i.Terminal)return"CONSUME";throw Error("non exhaustive match")}n.getProductionDslName=l;var a=function(p){e(m,p);function m(){var g=p!==null&&p.apply(this,arguments)||this;return g.separator="-",g.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},g}return m.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},m.prototype.visitTerminal=function(g){var _=g.terminalType.name+this.separator+"Terminal";t.has(this.dslMethods,_)||(this.dslMethods[_]=[]),this.dslMethods[_].push(g)},m.prototype.visitNonTerminal=function(g){var _=g.nonTerminalName+this.separator+"Terminal";t.has(this.dslMethods,_)||(this.dslMethods[_]=[]),this.dslMethods[_].push(g)},m.prototype.visitOption=function(g){this.dslMethods.option.push(g)},m.prototype.visitRepetitionWithSeparator=function(g){this.dslMethods.repetitionWithSeparator.push(g)},m.prototype.visitRepetitionMandatory=function(g){this.dslMethods.repetitionMandatory.push(g)},m.prototype.visitRepetitionMandatoryWithSeparator=function(g){this.dslMethods.repetitionMandatoryWithSeparator.push(g)},m.prototype.visitRepetition=function(g){this.dslMethods.repetition.push(g)},m.prototype.visitAlternation=function(g){this.dslMethods.alternation.push(g)},m}(r.GAstVisitor);n.DslMethodsCollectorVisitor=a;var f=new a;function d(p){f.reset(),p.accept(f);var m=f.dslMethods;return f.reset(),m}n.collectMethods=d}),Tc=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.firstForTerminal=n.firstForBranching=n.firstForSequence=n.first=void 0;var e=it(),t=Nt(),i=Gr();function r(l){if(l instanceof t.NonTerminal)return r(l.referencedRule);if(l instanceof t.Terminal)return c(l);if(i.isSequenceProd(l))return o(l);if(i.isBranchingProd(l))return s(l);throw Error("non exhaustive match")}n.first=r;function o(l){for(var a=[],f=l.definition,d=0,p=f.length>d,m,g=!0;p&&g;)m=f[d],g=i.isOptionalProd(m),a=a.concat(r(m)),d=d+1,p=f.length>d;return e.uniq(a)}n.firstForSequence=o;function s(l){var a=e.map(l.definition,function(f){return r(f)});return e.uniq(e.flatten(a))}n.firstForBranching=s;function c(l){return[l.terminalType]}n.firstForTerminal=c}),Mc=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.IN=void 0,n.IN="_~IN~_"}),Xm=je(n=>{var e=n&&n.__extends||function(){var d=function(p,m){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,_){g.__proto__=_}||function(g,_){for(var u in _)Object.prototype.hasOwnProperty.call(_,u)&&(g[u]=_[u])},d(p,m)};return function(p,m){if(typeof m!="function"&&m!==null)throw new TypeError("Class extends value "+String(m)+" is not a constructor or null");d(p,m);function g(){this.constructor=p}p.prototype=m===null?Object.create(m):(g.prototype=m.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.buildInProdFollowPrefix=n.buildBetweenProdsFollowPrefix=n.computeAllProdsFollows=n.ResyncFollowsWalker=void 0;var t=Jo(),i=Tc(),r=it(),o=Mc(),s=Nt(),c=function(d){e(p,d);function p(m){var g=d.call(this)||this;return g.topProd=m,g.follows={},g}return p.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},p.prototype.walkTerminal=function(m,g,_){},p.prototype.walkProdRef=function(m,g,_){var u=a(m.referencedRule,m.idx)+this.topProd.name,h=g.concat(_),E=new s.Alternative({definition:h}),x=i.first(E);this.follows[u]=x},p}(t.RestWalker);n.ResyncFollowsWalker=c;function l(d){var p={};return r.forEach(d,function(m){var g=new c(m).startWalking();r.assign(p,g)}),p}n.computeAllProdsFollows=l;function a(d,p){return d.name+p+o.IN}n.buildBetweenProdsFollowPrefix=a;function f(d){var p=d.terminalType.name;return p+d.idx+o.IN}n.buildInProdFollowPrefix=f}),Hr=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defaultGrammarValidatorErrorProvider=n.defaultGrammarResolverErrorProvider=n.defaultParserErrorProvider=void 0;var e=Gn(),t=it(),i=it(),r=Nt(),o=Gr();n.defaultParserErrorProvider={buildMismatchTokenMessage:function(s){var c=s.expected,l=s.actual;s.previous,s.ruleName;var a=e.hasTokenLabel(c),f=a?"--> "+e.tokenLabel(c)+" <--":"token of type --> "+c.name+" <--",d="Expecting "+f+" but found --> '"+l.image+"' <--";return d},buildNotAllInputParsedMessage:function(s){var c=s.firstRedundant;return s.ruleName,"Redundant input, expecting EOF but found: "+c.image},buildNoViableAltMessage:function(s){var c=s.expectedPathsPerAlt,l=s.actual;s.previous;var a=s.customUserDescription;s.ruleName;var f="Expecting: ",d=i.first(l).image,p=`
but found: '`+d+"'";if(a)return f+a+p;var m=i.reduce(c,function(h,E){return h.concat(E)},[]),g=i.map(m,function(h){return"["+i.map(h,function(E){return e.tokenLabel(E)}).join(", ")+"]"}),_=i.map(g,function(h,E){return"  "+(E+1)+". "+h}),u=`one of these possible Token sequences:
`+_.join(`
`);return f+u+p},buildEarlyExitMessage:function(s){var c=s.expectedIterationPaths,l=s.actual,a=s.customUserDescription;s.ruleName;var f="Expecting: ",d=i.first(l).image,p=`
but found: '`+d+"'";if(a)return f+a+p;var m=i.map(c,function(_){return"["+i.map(_,function(u){return e.tokenLabel(u)}).join(",")+"]"}),g=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+m.join(" ,")+">");return f+g+p}},Object.freeze(n.defaultParserErrorProvider),n.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(s,c){var l="Invalid grammar, reference to a rule which is not defined: ->"+c.nonTerminalName+`<-
inside top level rule: ->`+s.name+"<-";return l}},n.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(s,c){function l(u){return u instanceof r.Terminal?u.terminalType.name:u instanceof r.NonTerminal?u.nonTerminalName:""}var a=s.name,f=i.first(c),d=f.idx,p=o.getProductionDslName(f),m=l(f),g=d>0,_="->"+p+(g?d:"")+"<- "+(m?"with argument: ->"+m+"<-":"")+`
                  appears more than once (`+c.length+" times) in the top level rule: ->"+a+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return _=_.replace(/[ \t]+/g," "),_=_.replace(/\s\s+/g,`
`),_},buildNamespaceConflictError:function(s){var c=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+s.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return c},buildAlternationPrefixAmbiguityError:function(s){var c=i.map(s.prefixPath,function(f){return e.tokenLabel(f)}).join(", "),l=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous alternatives: <"+s.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+l+"> inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+c+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return a},buildAlternationAmbiguityError:function(s){var c=i.map(s.prefixPath,function(f){return e.tokenLabel(f)}).join(", "),l=s.alternation.idx===0?"":s.alternation.idx,a="Ambiguous Alternatives Detected: <"+s.ambiguityIndices.join(" ,")+"> in <OR"+l+">"+(" inside <"+s.topLevelRule.name+`> Rule,
`)+("<"+c+`> may appears as a prefix path in all these alternatives.
`);return a=a+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,a},buildEmptyRepetitionError:function(s){var c=o.getProductionDslName(s.repetition);s.repetition.idx!==0&&(c+=s.repetition.idx);var l="The repetition <"+c+"> within Rule <"+s.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return l},buildTokenNameError:function(s){return"deprecated"},buildEmptyAlternationError:function(s){var c="Ambiguous empty alternative: <"+(s.emptyChoiceIdx+1)+">"+(" in <OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return c},buildTooManyAlternativesError:function(s){var c=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+s.alternation.idx+"> inside <"+s.topLevelRule.name+`> Rule.
 has `+(s.alternation.definition.length+1)+" alternatives.");return c},buildLeftRecursionError:function(s){var c=s.topLevelRule.name,l=t.map(s.leftRecursionPath,function(d){return d.name}),a=c+" --> "+l.concat([c]).join(" --> "),f=`Left Recursion found in grammar.
`+("rule: <"+c+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+a+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return f},buildInvalidRuleNameError:function(s){return"deprecated"},buildDuplicateRuleNameError:function(s){var c;s.topLevelRule instanceof r.Rule?c=s.topLevelRule.name:c=s.topLevelRule;var l="Duplicate definition, rule: ->"+c+"<- is already defined in the grammar: ->"+s.grammarName+"<-";return l}}}),Ym=je(n=>{var e=n&&n.__extends||function(){var c=function(l,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,d){f.__proto__=d}||function(f,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(f[p]=d[p])},c(l,a)};return function(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");c(l,a);function f(){this.constructor=l}l.prototype=a===null?Object.create(a):(f.prototype=a.prototype,new f)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.GastRefResolverVisitor=n.resolveGrammar=void 0;var t=Bt(),i=it(),r=ji();function o(c,l){var a=new s(c,l);return a.resolveRefs(),a.errors}n.resolveGrammar=o;var s=function(c){e(l,c);function l(a,f){var d=c.call(this)||this;return d.nameToTopRule=a,d.errMsgProvider=f,d.errors=[],d}return l.prototype.resolveRefs=function(){var a=this;i.forEach(i.values(this.nameToTopRule),function(f){a.currTopLevel=f,f.accept(a)})},l.prototype.visitNonTerminal=function(a){var f=this.nameToTopRule[a.nonTerminalName];if(f)a.referencedRule=f;else{var d=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,a);this.errors.push({message:d,type:t.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:a.nonTerminalName})}},l}(r.GAstVisitor);n.GastRefResolverVisitor=s}),Wr=je(n=>{var e=n&&n.__extends||function(){var u=function(h,E){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(x,v){x.__proto__=v}||function(x,v){for(var L in v)Object.prototype.hasOwnProperty.call(v,L)&&(x[L]=v[L])},u(h,E)};return function(h,E){if(typeof E!="function"&&E!==null)throw new TypeError("Class extends value "+String(E)+" is not a constructor or null");u(h,E);function x(){this.constructor=h}h.prototype=E===null?Object.create(E):(x.prototype=E.prototype,new x)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.nextPossibleTokensAfter=n.possiblePathsFrom=n.NextTerminalAfterAtLeastOneSepWalker=n.NextTerminalAfterAtLeastOneWalker=n.NextTerminalAfterManySepWalker=n.NextTerminalAfterManyWalker=n.AbstractNextTerminalAfterProductionWalker=n.NextAfterTokenWalker=n.AbstractNextPossibleTokensWalker=void 0;var t=Jo(),i=it(),r=Tc(),o=Nt(),s=function(u){e(h,u);function h(E,x){var v=u.call(this)||this;return v.topProd=E,v.path=x,v.possibleTokTypes=[],v.nextProductionName="",v.nextProductionOccurrence=0,v.found=!1,v.isAtEndOfPath=!1,v}return h.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=i.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=i.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},h.prototype.walk=function(E,x){x===void 0&&(x=[]),this.found||u.prototype.walk.call(this,E,x)},h.prototype.walkProdRef=function(E,x,v){if(E.referencedRule.name===this.nextProductionName&&E.idx===this.nextProductionOccurrence){var L=x.concat(v);this.updateExpectedNext(),this.walk(E.referencedRule,L)}},h.prototype.updateExpectedNext=function(){i.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},h}(t.RestWalker);n.AbstractNextPossibleTokensWalker=s;var c=function(u){e(h,u);function h(E,x){var v=u.call(this,E,x)||this;return v.path=x,v.nextTerminalName="",v.nextTerminalOccurrence=0,v.nextTerminalName=v.path.lastTok.name,v.nextTerminalOccurrence=v.path.lastTokOccurrence,v}return h.prototype.walkTerminal=function(E,x,v){if(this.isAtEndOfPath&&E.terminalType.name===this.nextTerminalName&&E.idx===this.nextTerminalOccurrence&&!this.found){var L=x.concat(v),b=new o.Alternative({definition:L});this.possibleTokTypes=r.first(b),this.found=!0}},h}(s);n.NextAfterTokenWalker=c;var l=function(u){e(h,u);function h(E,x){var v=u.call(this)||this;return v.topRule=E,v.occurrence=x,v.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},v}return h.prototype.startWalking=function(){return this.walk(this.topRule),this.result},h}(t.RestWalker);n.AbstractNextTerminalAfterProductionWalker=l;var a=function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkMany=function(E,x,v){if(E.idx===this.occurrence){var L=i.first(x.concat(v));this.result.isEndOfRule=L===void 0,L instanceof o.Terminal&&(this.result.token=L.terminalType,this.result.occurrence=L.idx)}else u.prototype.walkMany.call(this,E,x,v)},h}(l);n.NextTerminalAfterManyWalker=a;var f=function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkManySep=function(E,x,v){if(E.idx===this.occurrence){var L=i.first(x.concat(v));this.result.isEndOfRule=L===void 0,L instanceof o.Terminal&&(this.result.token=L.terminalType,this.result.occurrence=L.idx)}else u.prototype.walkManySep.call(this,E,x,v)},h}(l);n.NextTerminalAfterManySepWalker=f;var d=function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkAtLeastOne=function(E,x,v){if(E.idx===this.occurrence){var L=i.first(x.concat(v));this.result.isEndOfRule=L===void 0,L instanceof o.Terminal&&(this.result.token=L.terminalType,this.result.occurrence=L.idx)}else u.prototype.walkAtLeastOne.call(this,E,x,v)},h}(l);n.NextTerminalAfterAtLeastOneWalker=d;var p=function(u){e(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.walkAtLeastOneSep=function(E,x,v){if(E.idx===this.occurrence){var L=i.first(x.concat(v));this.result.isEndOfRule=L===void 0,L instanceof o.Terminal&&(this.result.token=L.terminalType,this.result.occurrence=L.idx)}else u.prototype.walkAtLeastOneSep.call(this,E,x,v)},h}(l);n.NextTerminalAfterAtLeastOneSepWalker=p;function m(u,h,E){E===void 0&&(E=[]),E=i.cloneArr(E);var x=[],v=0;function L(y){return y.concat(i.drop(u,v+1))}function b(y){var S=m(L(y),h,E);return x.concat(S)}for(;E.length<h&&v<u.length;){var R=u[v];if(R instanceof o.Alternative||R instanceof o.NonTerminal)return b(R.definition);if(R instanceof o.Option)x=b(R.definition);else if(R instanceof o.RepetitionMandatory){var k=R.definition.concat([new o.Repetition({definition:R.definition})]);return b(k)}else if(R instanceof o.RepetitionMandatoryWithSeparator){var k=[new o.Alternative({definition:R.definition}),new o.Repetition({definition:[new o.Terminal({terminalType:R.separator})].concat(R.definition)})];return b(k)}else if(R instanceof o.RepetitionWithSeparator){var k=R.definition.concat([new o.Repetition({definition:[new o.Terminal({terminalType:R.separator})].concat(R.definition)})]);x=b(k)}else if(R instanceof o.Repetition){var k=R.definition.concat([new o.Repetition({definition:R.definition})]);x=b(k)}else{if(R instanceof o.Alternation)return i.forEach(R.definition,function(y){i.isEmpty(y.definition)===!1&&(x=b(y.definition))}),x;if(R instanceof o.Terminal)E.push(R.terminalType);else throw Error("non exhaustive match")}v++}return x.push({partialPath:E,suffixDef:i.drop(u,v)}),x}n.possiblePathsFrom=m;function g(u,h,E,x){var v="EXIT_NONE_TERMINAL",L=[v],b="EXIT_ALTERNATIVE",R=!1,k=h.length,y=k-x-1,S=[],N=[];for(N.push({idx:-1,def:u,ruleStack:[],occurrenceStack:[]});!i.isEmpty(N);){var I=N.pop();if(I===b){R&&i.last(N).idx<=y&&N.pop();continue}var w=I.def,U=I.idx,H=I.ruleStack,Z=I.occurrenceStack;if(!i.isEmpty(w)){var j=w[0];if(j===v){var W={idx:U,def:i.drop(w),ruleStack:i.dropRight(H),occurrenceStack:i.dropRight(Z)};N.push(W)}else if(j instanceof o.Terminal)if(U<k-1){var ie=U+1,ae=h[ie];if(E(ae,j.terminalType)){var W={idx:ie,def:i.drop(w),ruleStack:H,occurrenceStack:Z};N.push(W)}}else if(U===k-1)S.push({nextTokenType:j.terminalType,nextTokenOccurrence:j.idx,ruleStack:H,occurrenceStack:Z}),R=!0;else throw Error("non exhaustive match");else if(j instanceof o.NonTerminal){var _e=i.cloneArr(H);_e.push(j.nonTerminalName);var ye=i.cloneArr(Z);ye.push(j.idx);var W={idx:U,def:j.definition.concat(L,i.drop(w)),ruleStack:_e,occurrenceStack:ye};N.push(W)}else if(j instanceof o.Option){var xe={idx:U,def:i.drop(w),ruleStack:H,occurrenceStack:Z};N.push(xe),N.push(b);var ne={idx:U,def:j.definition.concat(i.drop(w)),ruleStack:H,occurrenceStack:Z};N.push(ne)}else if(j instanceof o.RepetitionMandatory){var V=new o.Repetition({definition:j.definition,idx:j.idx}),Q=j.definition.concat([V],i.drop(w)),W={idx:U,def:Q,ruleStack:H,occurrenceStack:Z};N.push(W)}else if(j instanceof o.RepetitionMandatoryWithSeparator){var $=new o.Terminal({terminalType:j.separator}),V=new o.Repetition({definition:[$].concat(j.definition),idx:j.idx}),Q=j.definition.concat([V],i.drop(w)),W={idx:U,def:Q,ruleStack:H,occurrenceStack:Z};N.push(W)}else if(j instanceof o.RepetitionWithSeparator){var xe={idx:U,def:i.drop(w),ruleStack:H,occurrenceStack:Z};N.push(xe),N.push(b);var $=new o.Terminal({terminalType:j.separator}),pe=new o.Repetition({definition:[$].concat(j.definition),idx:j.idx}),Q=j.definition.concat([pe],i.drop(w)),ne={idx:U,def:Q,ruleStack:H,occurrenceStack:Z};N.push(ne)}else if(j instanceof o.Repetition){var xe={idx:U,def:i.drop(w),ruleStack:H,occurrenceStack:Z};N.push(xe),N.push(b);var pe=new o.Repetition({definition:j.definition,idx:j.idx}),Q=j.definition.concat([pe],i.drop(w)),ne={idx:U,def:Q,ruleStack:H,occurrenceStack:Z};N.push(ne)}else if(j instanceof o.Alternation)for(var me=j.definition.length-1;me>=0;me--){var G=j.definition[me],Re={idx:U,def:G.definition.concat(i.drop(w)),ruleStack:H,occurrenceStack:Z};N.push(Re),N.push(b)}else if(j instanceof o.Alternative)N.push({idx:U,def:j.definition.concat(i.drop(w)),ruleStack:H,occurrenceStack:Z});else if(j instanceof o.Rule)N.push(_(j,U,H,Z));else throw Error("non exhaustive match")}}return S}n.nextPossibleTokensAfter=g;function _(u,h,E,x){var v=i.cloneArr(E);v.push(u.name);var L=i.cloneArr(x);return L.push(1),{idx:h,def:u.definition,ruleStack:v,occurrenceStack:L}}}),Xr=je(n=>{var e=n&&n.__extends||function(){var y=function(S,N){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,w){I.__proto__=w}||function(I,w){for(var U in w)Object.prototype.hasOwnProperty.call(w,U)&&(I[U]=w[U])},y(S,N)};return function(S,N){if(typeof N!="function"&&N!==null)throw new TypeError("Class extends value "+String(N)+" is not a constructor or null");y(S,N);function I(){this.constructor=S}S.prototype=N===null?Object.create(N):(I.prototype=N.prototype,new I)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.areTokenCategoriesNotUsed=n.isStrictPrefixOfPath=n.containsPath=n.getLookaheadPathsForOptionalProd=n.getLookaheadPathsForOr=n.lookAheadSequenceFromAlternatives=n.buildSingleAlternativeLookaheadFunction=n.buildAlternativesLookAheadFunc=n.buildLookaheadFuncForOptionalProd=n.buildLookaheadFuncForOr=n.getProdType=n.PROD_TYPE=void 0;var t=it(),i=Wr(),r=Jo(),o=Yi(),s=Nt(),c=ji(),l;(function(y){y[y.OPTION=0]="OPTION",y[y.REPETITION=1]="REPETITION",y[y.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",y[y.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",y[y.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",y[y.ALTERNATION=5]="ALTERNATION"})(l=n.PROD_TYPE||(n.PROD_TYPE={}));function a(y){if(y instanceof s.Option)return l.OPTION;if(y instanceof s.Repetition)return l.REPETITION;if(y instanceof s.RepetitionMandatory)return l.REPETITION_MANDATORY;if(y instanceof s.RepetitionMandatoryWithSeparator)return l.REPETITION_MANDATORY_WITH_SEPARATOR;if(y instanceof s.RepetitionWithSeparator)return l.REPETITION_WITH_SEPARATOR;if(y instanceof s.Alternation)return l.ALTERNATION;throw Error("non exhaustive match")}n.getProdType=a;function f(y,S,N,I,w,U){var H=v(y,S,N),Z=k(H)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return U(H,I,Z,w)}n.buildLookaheadFuncForOr=f;function d(y,S,N,I,w,U){var H=L(y,S,w,N),Z=k(H)?o.tokenStructuredMatcherNoCategories:o.tokenStructuredMatcher;return U(H[0],Z,I)}n.buildLookaheadFuncForOptionalProd=d;function p(y,S,N,I){var w=y.length,U=t.every(y,function(j){return t.every(j,function(W){return W.length===1})});if(S)return function(j){for(var W=t.map(j,function(pe){return pe.GATE}),ie=0;ie<w;ie++){var ae=y[ie],_e=ae.length,ye=W[ie];if(!(ye!==void 0&&ye.call(this)===!1))e:for(var xe=0;xe<_e;xe++){for(var ne=ae[xe],V=ne.length,Q=0;Q<V;Q++){var $=this.LA(Q+1);if(N($,ne[Q])===!1)continue e}return ie}}};if(U&&!I){var H=t.map(y,function(j){return t.flatten(j)}),Z=t.reduce(H,function(j,W,ie){return t.forEach(W,function(ae){t.has(j,ae.tokenTypeIdx)||(j[ae.tokenTypeIdx]=ie),t.forEach(ae.categoryMatches,function(_e){t.has(j,_e)||(j[_e]=ie)})}),j},[]);return function(){var j=this.LA(1);return Z[j.tokenTypeIdx]}}else return function(){for(var j=0;j<w;j++){var W=y[j],ie=W.length;e:for(var ae=0;ae<ie;ae++){for(var _e=W[ae],ye=_e.length,xe=0;xe<ye;xe++){var ne=this.LA(xe+1);if(N(ne,_e[xe])===!1)continue e}return j}}}}n.buildAlternativesLookAheadFunc=p;function m(y,S,N){var I=t.every(y,function(W){return W.length===1}),w=y.length;if(I&&!N){var U=t.flatten(y);if(U.length===1&&t.isEmpty(U[0].categoryMatches)){var H=U[0],Z=H.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===Z}}else{var j=t.reduce(U,function(W,ie,ae){return W[ie.tokenTypeIdx]=!0,t.forEach(ie.categoryMatches,function(_e){W[_e]=!0}),W},[]);return function(){var W=this.LA(1);return j[W.tokenTypeIdx]===!0}}}else return function(){e:for(var W=0;W<w;W++){for(var ie=y[W],ae=ie.length,_e=0;_e<ae;_e++){var ye=this.LA(_e+1);if(S(ye,ie[_e])===!1)continue e}return!0}return!1}}n.buildSingleAlternativeLookaheadFunction=m;var g=function(y){e(S,y);function S(N,I,w){var U=y.call(this)||this;return U.topProd=N,U.targetOccurrence=I,U.targetProdType=w,U}return S.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},S.prototype.checkIsTarget=function(N,I,w,U){return N.idx===this.targetOccurrence&&this.targetProdType===I?(this.restDef=w.concat(U),!0):!1},S.prototype.walkOption=function(N,I,w){this.checkIsTarget(N,l.OPTION,I,w)||y.prototype.walkOption.call(this,N,I,w)},S.prototype.walkAtLeastOne=function(N,I,w){this.checkIsTarget(N,l.REPETITION_MANDATORY,I,w)||y.prototype.walkOption.call(this,N,I,w)},S.prototype.walkAtLeastOneSep=function(N,I,w){this.checkIsTarget(N,l.REPETITION_MANDATORY_WITH_SEPARATOR,I,w)||y.prototype.walkOption.call(this,N,I,w)},S.prototype.walkMany=function(N,I,w){this.checkIsTarget(N,l.REPETITION,I,w)||y.prototype.walkOption.call(this,N,I,w)},S.prototype.walkManySep=function(N,I,w){this.checkIsTarget(N,l.REPETITION_WITH_SEPARATOR,I,w)||y.prototype.walkOption.call(this,N,I,w)},S}(r.RestWalker),_=function(y){e(S,y);function S(N,I,w){var U=y.call(this)||this;return U.targetOccurrence=N,U.targetProdType=I,U.targetRef=w,U.result=[],U}return S.prototype.checkIsTarget=function(N,I){N.idx===this.targetOccurrence&&this.targetProdType===I&&(this.targetRef===void 0||N===this.targetRef)&&(this.result=N.definition)},S.prototype.visitOption=function(N){this.checkIsTarget(N,l.OPTION)},S.prototype.visitRepetition=function(N){this.checkIsTarget(N,l.REPETITION)},S.prototype.visitRepetitionMandatory=function(N){this.checkIsTarget(N,l.REPETITION_MANDATORY)},S.prototype.visitRepetitionMandatoryWithSeparator=function(N){this.checkIsTarget(N,l.REPETITION_MANDATORY_WITH_SEPARATOR)},S.prototype.visitRepetitionWithSeparator=function(N){this.checkIsTarget(N,l.REPETITION_WITH_SEPARATOR)},S.prototype.visitAlternation=function(N){this.checkIsTarget(N,l.ALTERNATION)},S}(c.GAstVisitor);function u(y){for(var S=new Array(y),N=0;N<y;N++)S[N]=[];return S}function h(y){for(var S=[""],N=0;N<y.length;N++){for(var I=y[N],w=[],U=0;U<S.length;U++){var H=S[U];w.push(H+"_"+I.tokenTypeIdx);for(var Z=0;Z<I.categoryMatches.length;Z++){var j="_"+I.categoryMatches[Z];w.push(H+j)}}S=w}return S}function E(y,S,N){for(var I=0;I<y.length;I++)if(I!==N)for(var w=y[I],U=0;U<S.length;U++){var H=S[U];if(w[H]===!0)return!1}return!0}function x(y,S){for(var N=t.map(y,function(ie){return i.possiblePathsFrom([ie],1)}),I=u(N.length),w=t.map(N,function(ie){var ae={};return t.forEach(ie,function(_e){var ye=h(_e.partialPath);t.forEach(ye,function(xe){ae[xe]=!0})}),ae}),U=N,H=1;H<=S;H++){var Z=U;U=u(Z.length);for(var j=function(ie){for(var ae=Z[ie],_e=0;_e<ae.length;_e++){var ye=ae[_e].partialPath,xe=ae[_e].suffixDef,ne=h(ye),V=E(w,ne,ie);if(V||t.isEmpty(xe)||ye.length===S){var Q=I[ie];if(b(Q,ye)===!1){Q.push(ye);for(var $=0;$<ne.length;$++){var pe=ne[$];w[ie][pe]=!0}}}else{var me=i.possiblePathsFrom(xe,H+1,ye);U[ie]=U[ie].concat(me),t.forEach(me,function(G){var Re=h(G.partialPath);t.forEach(Re,function(Ee){w[ie][Ee]=!0})})}}},W=0;W<Z.length;W++)j(W)}return I}n.lookAheadSequenceFromAlternatives=x;function v(y,S,N,I){var w=new _(y,l.ALTERNATION,I);return S.accept(w),x(w.result,N)}n.getLookaheadPathsForOr=v;function L(y,S,N,I){var w=new _(y,N);S.accept(w);var U=w.result,H=new g(S,y,N),Z=H.startWalking(),j=new s.Alternative({definition:U}),W=new s.Alternative({definition:Z});return x([j,W],I)}n.getLookaheadPathsForOptionalProd=L;function b(y,S){e:for(var N=0;N<y.length;N++){var I=y[N];if(I.length===S.length){for(var w=0;w<I.length;w++){var U=S[w],H=I[w],Z=U===H||H.categoryMatchesMap[U.tokenTypeIdx]!==void 0;if(Z===!1)continue e}return!0}}return!1}n.containsPath=b;function R(y,S){return y.length<S.length&&t.every(y,function(N,I){var w=S[I];return N===w||w.categoryMatchesMap[N.tokenTypeIdx]})}n.isStrictPrefixOfPath=R;function k(y){return t.every(y,function(S){return t.every(S,function(N){return t.every(N,function(I){return t.isEmpty(I.categoryMatches)})})})}n.areTokenCategoriesNotUsed=k}),Ac=je(n=>{var e=n&&n.__extends||function(){var I=function(w,U){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(H,Z){H.__proto__=Z}||function(H,Z){for(var j in Z)Object.prototype.hasOwnProperty.call(Z,j)&&(H[j]=Z[j])},I(w,U)};return function(w,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");I(w,U);function H(){this.constructor=w}w.prototype=U===null?Object.create(U):(H.prototype=U.prototype,new H)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.checkPrefixAlternativesAmbiguities=n.validateSomeNonEmptyLookaheadPath=n.validateTooManyAlts=n.RepetionCollector=n.validateAmbiguousAlternationAlternatives=n.validateEmptyOrAlternative=n.getFirstNoneTerminal=n.validateNoLeftRecursion=n.validateRuleIsOverridden=n.validateRuleDoesNotAlreadyExist=n.OccurrenceValidationCollector=n.identifyProductionForDuplicates=n.validateGrammar=void 0;var t=it(),i=it(),r=Bt(),o=Gr(),s=Xr(),c=Wr(),l=Nt(),a=ji();function f(I,w,U,H,Z){var j=t.map(I,function(V){return d(V,H)}),W=t.map(I,function(V){return h(V,V,H)}),ie=[],ae=[],_e=[];i.every(W,i.isEmpty)&&(ie=i.map(I,function(V){return v(V,H)}),ae=i.map(I,function(V){return L(V,w,H)}),_e=k(I,w,H));var ye=N(I,U,H),xe=i.map(I,function(V){return R(V,H)}),ne=i.map(I,function(V){return _(V,I,Z,H)});return t.flatten(j.concat(_e,W,ie,ae,ye,xe,ne))}n.validateGrammar=f;function d(I,w){var U=new g;I.accept(U);var H=U.allProductions,Z=t.groupBy(H,p),j=t.pick(Z,function(ie){return ie.length>1}),W=t.map(t.values(j),function(ie){var ae=t.first(ie),_e=w.buildDuplicateFoundError(I,ie),ye=o.getProductionDslName(ae),xe={message:_e,type:r.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:I.name,dslName:ye,occurrence:ae.idx},ne=m(ae);return ne&&(xe.parameter=ne),xe});return W}function p(I){return o.getProductionDslName(I)+"_#_"+I.idx+"_#_"+m(I)}n.identifyProductionForDuplicates=p;function m(I){return I instanceof l.Terminal?I.terminalType.name:I instanceof l.NonTerminal?I.nonTerminalName:""}var g=function(I){e(w,I);function w(){var U=I!==null&&I.apply(this,arguments)||this;return U.allProductions=[],U}return w.prototype.visitNonTerminal=function(U){this.allProductions.push(U)},w.prototype.visitOption=function(U){this.allProductions.push(U)},w.prototype.visitRepetitionWithSeparator=function(U){this.allProductions.push(U)},w.prototype.visitRepetitionMandatory=function(U){this.allProductions.push(U)},w.prototype.visitRepetitionMandatoryWithSeparator=function(U){this.allProductions.push(U)},w.prototype.visitRepetition=function(U){this.allProductions.push(U)},w.prototype.visitAlternation=function(U){this.allProductions.push(U)},w.prototype.visitTerminal=function(U){this.allProductions.push(U)},w}(a.GAstVisitor);n.OccurrenceValidationCollector=g;function _(I,w,U,H){var Z=[],j=i.reduce(w,function(ie,ae){return ae.name===I.name?ie+1:ie},0);if(j>1){var W=H.buildDuplicateRuleNameError({topLevelRule:I,grammarName:U});Z.push({message:W,type:r.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:I.name})}return Z}n.validateRuleDoesNotAlreadyExist=_;function u(I,w,U){var H=[],Z;return t.contains(w,I)||(Z="Invalid rule override, rule: ->"+I+"<- cannot be overridden in the grammar: ->"+U+"<-as it is not defined in any of the super grammars ",H.push({message:Z,type:r.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:I})),H}n.validateRuleIsOverridden=u;function h(I,w,U,H){H===void 0&&(H=[]);var Z=[],j=E(w.definition);if(t.isEmpty(j))return[];var W=I.name,ie=t.contains(j,I);ie&&Z.push({message:U.buildLeftRecursionError({topLevelRule:I,leftRecursionPath:H}),type:r.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:W});var ae=t.difference(j,H.concat([I])),_e=t.map(ae,function(ye){var xe=t.cloneArr(H);return xe.push(ye),h(I,ye,U,xe)});return Z.concat(t.flatten(_e))}n.validateNoLeftRecursion=h;function E(I){var w=[];if(t.isEmpty(I))return w;var U=t.first(I);if(U instanceof l.NonTerminal)w.push(U.referencedRule);else if(U instanceof l.Alternative||U instanceof l.Option||U instanceof l.RepetitionMandatory||U instanceof l.RepetitionMandatoryWithSeparator||U instanceof l.RepetitionWithSeparator||U instanceof l.Repetition)w=w.concat(E(U.definition));else if(U instanceof l.Alternation)w=t.flatten(t.map(U.definition,function(W){return E(W.definition)}));else if(!(U instanceof l.Terminal))throw Error("non exhaustive match");var H=o.isOptionalProd(U),Z=I.length>1;if(H&&Z){var j=t.drop(I);return w.concat(E(j))}else return w}n.getFirstNoneTerminal=E;var x=function(I){e(w,I);function w(){var U=I!==null&&I.apply(this,arguments)||this;return U.alternations=[],U}return w.prototype.visitAlternation=function(U){this.alternations.push(U)},w}(a.GAstVisitor);function v(I,w){var U=new x;I.accept(U);var H=U.alternations,Z=t.reduce(H,function(j,W){var ie=t.dropRight(W.definition),ae=t.map(ie,function(_e,ye){var xe=c.nextPossibleTokensAfter([_e],[],null,1);return t.isEmpty(xe)?{message:w.buildEmptyAlternationError({topLevelRule:I,alternation:W,emptyChoiceIdx:ye}),type:r.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:I.name,occurrence:W.idx,alternative:ye+1}:null});return j.concat(t.compact(ae))},[]);return Z}n.validateEmptyOrAlternative=v;function L(I,w,U){var H=new x;I.accept(H);var Z=H.alternations;Z=i.reject(Z,function(W){return W.ignoreAmbiguities===!0});var j=t.reduce(Z,function(W,ie){var ae=ie.idx,_e=ie.maxLookahead||w,ye=s.getLookaheadPathsForOr(ae,I,_e,ie),xe=y(ye,ie,I,U),ne=S(ye,ie,I,U);return W.concat(xe,ne)},[]);return j}n.validateAmbiguousAlternationAlternatives=L;var b=function(I){e(w,I);function w(){var U=I!==null&&I.apply(this,arguments)||this;return U.allProductions=[],U}return w.prototype.visitRepetitionWithSeparator=function(U){this.allProductions.push(U)},w.prototype.visitRepetitionMandatory=function(U){this.allProductions.push(U)},w.prototype.visitRepetitionMandatoryWithSeparator=function(U){this.allProductions.push(U)},w.prototype.visitRepetition=function(U){this.allProductions.push(U)},w}(a.GAstVisitor);n.RepetionCollector=b;function R(I,w){var U=new x;I.accept(U);var H=U.alternations,Z=t.reduce(H,function(j,W){return W.definition.length>255&&j.push({message:w.buildTooManyAlternativesError({topLevelRule:I,alternation:W}),type:r.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:I.name,occurrence:W.idx}),j},[]);return Z}n.validateTooManyAlts=R;function k(I,w,U){var H=[];return i.forEach(I,function(Z){var j=new b;Z.accept(j);var W=j.allProductions;i.forEach(W,function(ie){var ae=s.getProdType(ie),_e=ie.maxLookahead||w,ye=ie.idx,xe=s.getLookaheadPathsForOptionalProd(ye,Z,ae,_e),ne=xe[0];if(i.isEmpty(i.flatten(ne))){var V=U.buildEmptyRepetitionError({topLevelRule:Z,repetition:ie});H.push({message:V,type:r.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:Z.name})}})}),H}n.validateSomeNonEmptyLookaheadPath=k;function y(I,w,U,H){var Z=[],j=i.reduce(I,function(ie,ae,_e){return w.definition[_e].ignoreAmbiguities===!0||i.forEach(ae,function(ye){var xe=[_e];i.forEach(I,function(ne,V){_e!==V&&s.containsPath(ne,ye)&&w.definition[V].ignoreAmbiguities!==!0&&xe.push(V)}),xe.length>1&&!s.containsPath(Z,ye)&&(Z.push(ye),ie.push({alts:xe,path:ye}))}),ie},[]),W=t.map(j,function(ie){var ae=i.map(ie.alts,function(ye){return ye+1}),_e=H.buildAlternationAmbiguityError({topLevelRule:U,alternation:w,ambiguityIndices:ae,prefixPath:ie.path});return{message:_e,type:r.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:U.name,occurrence:w.idx,alternatives:[ie.alts]}});return W}function S(I,w,U,H){var Z=[],j=i.reduce(I,function(W,ie,ae){var _e=i.map(ie,function(ye){return{idx:ae,path:ye}});return W.concat(_e)},[]);return i.forEach(j,function(W){var ie=w.definition[W.idx];if(ie.ignoreAmbiguities!==!0){var ae=W.idx,_e=W.path,ye=i.findAll(j,function(ne){return w.definition[ne.idx].ignoreAmbiguities!==!0&&ne.idx<ae&&s.isStrictPrefixOfPath(ne.path,_e)}),xe=i.map(ye,function(ne){var V=[ne.idx+1,ae+1],Q=w.idx===0?"":w.idx,$=H.buildAlternationPrefixAmbiguityError({topLevelRule:U,alternation:w,ambiguityIndices:V,prefixPath:ne.path});return{message:$,type:r.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:U.name,occurrence:Q,alternatives:V}});Z=Z.concat(xe)}}),Z}n.checkPrefixAlternativesAmbiguities=S;function N(I,w,U){var H=[],Z=i.map(w,function(j){return j.name});return i.forEach(I,function(j){var W=j.name;if(i.contains(Z,W)){var ie=U.buildNamespaceConflictError(j);H.push({message:ie,type:r.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:W})}}),H}}),jm=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateGrammar=n.resolveGrammar=void 0;var e=it(),t=Ym(),i=Ac(),r=Hr();function o(c){c=e.defaults(c,{errMsgProvider:r.defaultGrammarResolverErrorProvider});var l={};return e.forEach(c.rules,function(a){l[a.name]=a}),t.resolveGrammar(l,c.errMsgProvider)}n.resolveGrammar=o;function s(c){return c=e.defaults(c,{errMsgProvider:r.defaultGrammarValidatorErrorProvider}),i.validateGrammar(c.rules,c.maxLookahead,c.tokenTypes,c.errMsgProvider,c.grammarName)}n.validateGrammar=s}),qi=je(n=>{var e=n&&n.__extends||function(){var g=function(_,u){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,E){h.__proto__=E}||function(h,E){for(var x in E)Object.prototype.hasOwnProperty.call(E,x)&&(h[x]=E[x])},g(_,u)};return function(_,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");g(_,u);function h(){this.constructor=_}_.prototype=u===null?Object.create(u):(h.prototype=u.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EarlyExitException=n.NotAllInputParsedException=n.NoViableAltException=n.MismatchedTokenException=n.isRecognitionException=void 0;var t=it(),i="MismatchedTokenException",r="NoViableAltException",o="EarlyExitException",s="NotAllInputParsedException",c=[i,r,o,s];Object.freeze(c);function l(g){return t.contains(c,g.name)}n.isRecognitionException=l;var a=function(g){e(_,g);function _(u,h){var E=this.constructor,x=g.call(this,u)||this;return x.token=h,x.resyncedTokens=[],Object.setPrototypeOf(x,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(x,x.constructor),x}return _}(Error),f=function(g){e(_,g);function _(u,h,E){var x=g.call(this,u,h)||this;return x.previousToken=E,x.name=i,x}return _}(a);n.MismatchedTokenException=f;var d=function(g){e(_,g);function _(u,h,E){var x=g.call(this,u,h)||this;return x.previousToken=E,x.name=r,x}return _}(a);n.NoViableAltException=d;var p=function(g){e(_,g);function _(u,h){var E=g.call(this,u,h)||this;return E.name=s,E}return _}(a);n.NotAllInputParsedException=p;var m=function(g){e(_,g);function _(u,h,E){var x=g.call(this,u,h)||this;return x.previousToken=E,x.name=o,x}return _}(a);n.EarlyExitException=m}),Rc=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.attemptInRepetitionRecovery=n.Recoverable=n.InRuleRecoveryException=n.IN_RULE_RECOVERY_EXCEPTION=n.EOF_FOLLOW_KEY=void 0;var e=Gn(),t=it(),i=qi(),r=Mc(),o=Bt();n.EOF_FOLLOW_KEY={},n.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function s(a){this.name=n.IN_RULE_RECOVERY_EXCEPTION,this.message=a}n.InRuleRecoveryException=s,s.prototype=Error.prototype;var c=function(){function a(){}return a.prototype.initRecoverable=function(f){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=t.has(f,"recoveryEnabled")?f.recoveryEnabled:o.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=l)},a.prototype.getTokenToInsert=function(f){var d=e.createTokenInstance(f,"",NaN,NaN,NaN,NaN,NaN,NaN);return d.isInsertedInRecovery=!0,d},a.prototype.canTokenTypeBeInsertedInRecovery=function(f){return!0},a.prototype.tryInRepetitionRecovery=function(f,d,p,m){for(var g=this,_=this.findReSyncTokenType(),u=this.exportLexerState(),h=[],E=!1,x=this.LA(1),v=this.LA(1),L=function(){var b=g.LA(0),R=g.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:x,previous:b,ruleName:g.getCurrRuleFullName()}),k=new i.MismatchedTokenException(R,x,g.LA(0));k.resyncedTokens=t.dropRight(h),g.SAVE_ERROR(k)};!E;)if(this.tokenMatcher(v,m)){L();return}else if(p.call(this)){L(),f.apply(this,d);return}else this.tokenMatcher(v,_)?E=!0:(v=this.SKIP_TOKEN(),this.addToResyncTokens(v,h));this.importLexerState(u)},a.prototype.shouldInRepetitionRecoveryBeTried=function(f,d,p){return!(p===!1||f===void 0||d===void 0||this.tokenMatcher(this.LA(1),f)||this.isBackTracking()||this.canPerformInRuleRecovery(f,this.getFollowsForInRuleRecovery(f,d)))},a.prototype.getFollowsForInRuleRecovery=function(f,d){var p=this.getCurrentGrammarPath(f,d),m=this.getNextPossibleTokenTypes(p);return m},a.prototype.tryInRuleRecovery=function(f,d){if(this.canRecoverWithSingleTokenInsertion(f,d)){var p=this.getTokenToInsert(f);return p}if(this.canRecoverWithSingleTokenDeletion(f)){var m=this.SKIP_TOKEN();return this.consumeToken(),m}throw new s("sad sad panda")},a.prototype.canPerformInRuleRecovery=function(f,d){return this.canRecoverWithSingleTokenInsertion(f,d)||this.canRecoverWithSingleTokenDeletion(f)},a.prototype.canRecoverWithSingleTokenInsertion=function(f,d){var p=this;if(!this.canTokenTypeBeInsertedInRecovery(f)||t.isEmpty(d))return!1;var m=this.LA(1),g=t.find(d,function(_){return p.tokenMatcher(m,_)})!==void 0;return g},a.prototype.canRecoverWithSingleTokenDeletion=function(f){var d=this.tokenMatcher(this.LA(2),f);return d},a.prototype.isInCurrentRuleReSyncSet=function(f){var d=this.getCurrFollowKey(),p=this.getFollowSetFromFollowKey(d);return t.contains(p,f)},a.prototype.findReSyncTokenType=function(){for(var f=this.flattenFollowSet(),d=this.LA(1),p=2;;){var m=d.tokenType;if(t.contains(f,m))return m;d=this.LA(p),p++}},a.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return n.EOF_FOLLOW_KEY;var f=this.getLastExplicitRuleShortName(),d=this.getLastExplicitRuleOccurrenceIndex(),p=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(f),idxInCallingRule:d,inRule:this.shortRuleNameToFullName(p)}},a.prototype.buildFullFollowKeyStack=function(){var f=this,d=this.RULE_STACK,p=this.RULE_OCCURRENCE_STACK;return t.map(d,function(m,g){return g===0?n.EOF_FOLLOW_KEY:{ruleName:f.shortRuleNameToFullName(m),idxInCallingRule:p[g],inRule:f.shortRuleNameToFullName(d[g-1])}})},a.prototype.flattenFollowSet=function(){var f=this,d=t.map(this.buildFullFollowKeyStack(),function(p){return f.getFollowSetFromFollowKey(p)});return t.flatten(d)},a.prototype.getFollowSetFromFollowKey=function(f){if(f===n.EOF_FOLLOW_KEY)return[e.EOF];var d=f.ruleName+f.idxInCallingRule+r.IN+f.inRule;return this.resyncFollows[d]},a.prototype.addToResyncTokens=function(f,d){return this.tokenMatcher(f,e.EOF)||d.push(f),d},a.prototype.reSyncTo=function(f){for(var d=[],p=this.LA(1);this.tokenMatcher(p,f)===!1;)p=this.SKIP_TOKEN(),this.addToResyncTokens(p,d);return t.dropRight(d)},a.prototype.attemptInRepetitionRecovery=function(f,d,p,m,g,_,u){},a.prototype.getCurrentGrammarPath=function(f,d){var p=this.getHumanReadableRuleStack(),m=t.cloneArr(this.RULE_OCCURRENCE_STACK),g={ruleStack:p,occurrenceStack:m,lastTok:f,lastTokOccurrence:d};return g},a.prototype.getHumanReadableRuleStack=function(){var f=this;return t.map(this.RULE_STACK,function(d){return f.shortRuleNameToFullName(d)})},a}();n.Recoverable=c;function l(a,f,d,p,m,g,_){var u=this.getKeyForAutomaticLookahead(p,m),h=this.firstAfterRepMap[u];if(h===void 0){var E=this.getCurrRuleFullName(),x=this.getGAstProductions()[E],v=new g(x,m);h=v.startWalking(),this.firstAfterRepMap[u]=h}var L=h.token,b=h.occurrence,R=h.isEndOfRule;this.RULE_STACK.length===1&&R&&L===void 0&&(L=e.EOF,b=1),this.shouldInRepetitionRecoveryBeTried(L,b,_)&&this.tryInRepetitionRecovery(a,f,d,L)}n.attemptInRepetitionRecovery=l}),Qo=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getKeyForAutomaticLookahead=n.AT_LEAST_ONE_SEP_IDX=n.MANY_SEP_IDX=n.AT_LEAST_ONE_IDX=n.MANY_IDX=n.OPTION_IDX=n.OR_IDX=n.BITS_FOR_ALT_IDX=n.BITS_FOR_RULE_IDX=n.BITS_FOR_OCCURRENCE_IDX=n.BITS_FOR_METHOD_TYPE=void 0,n.BITS_FOR_METHOD_TYPE=4,n.BITS_FOR_OCCURRENCE_IDX=8,n.BITS_FOR_RULE_IDX=12,n.BITS_FOR_ALT_IDX=8,n.OR_IDX=1<<n.BITS_FOR_OCCURRENCE_IDX,n.OPTION_IDX=2<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_IDX=3<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_IDX=4<<n.BITS_FOR_OCCURRENCE_IDX,n.MANY_SEP_IDX=5<<n.BITS_FOR_OCCURRENCE_IDX,n.AT_LEAST_ONE_SEP_IDX=6<<n.BITS_FOR_OCCURRENCE_IDX;function e(t,i,r){return r|i|t}n.getKeyForAutomaticLookahead=e,32-n.BITS_FOR_ALT_IDX}),qm=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LooksAhead=void 0;var e=Xr(),t=it(),i=Bt(),r=Qo(),o=Gr(),s=function(){function c(){}return c.prototype.initLooksAhead=function(l){this.dynamicTokensEnabled=t.has(l,"dynamicTokensEnabled")?l.dynamicTokensEnabled:i.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=t.has(l,"maxLookahead")?l.maxLookahead:i.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=t.isES2015MapSupported()?new Map:[],t.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},c.prototype.preComputeLookaheadFunctions=function(l){var a=this;t.forEach(l,function(f){a.TRACE_INIT(f.name+" Rule Lookahead",function(){var d=o.collectMethods(f),p=d.alternation,m=d.repetition,g=d.option,_=d.repetitionMandatory,u=d.repetitionMandatoryWithSeparator,h=d.repetitionWithSeparator;t.forEach(p,function(E){var x=E.idx===0?"":E.idx;a.TRACE_INIT(""+o.getProductionDslName(E)+x,function(){var v=e.buildLookaheadFuncForOr(E.idx,f,E.maxLookahead||a.maxLookahead,E.hasPredicates,a.dynamicTokensEnabled,a.lookAheadBuilderForAlternatives),L=r.getKeyForAutomaticLookahead(a.fullRuleNameToShort[f.name],r.OR_IDX,E.idx);a.setLaFuncCache(L,v)})}),t.forEach(m,function(E){a.computeLookaheadFunc(f,E.idx,r.MANY_IDX,e.PROD_TYPE.REPETITION,E.maxLookahead,o.getProductionDslName(E))}),t.forEach(g,function(E){a.computeLookaheadFunc(f,E.idx,r.OPTION_IDX,e.PROD_TYPE.OPTION,E.maxLookahead,o.getProductionDslName(E))}),t.forEach(_,function(E){a.computeLookaheadFunc(f,E.idx,r.AT_LEAST_ONE_IDX,e.PROD_TYPE.REPETITION_MANDATORY,E.maxLookahead,o.getProductionDslName(E))}),t.forEach(u,function(E){a.computeLookaheadFunc(f,E.idx,r.AT_LEAST_ONE_SEP_IDX,e.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,E.maxLookahead,o.getProductionDslName(E))}),t.forEach(h,function(E){a.computeLookaheadFunc(f,E.idx,r.MANY_SEP_IDX,e.PROD_TYPE.REPETITION_WITH_SEPARATOR,E.maxLookahead,o.getProductionDslName(E))})})})},c.prototype.computeLookaheadFunc=function(l,a,f,d,p,m){var g=this;this.TRACE_INIT(""+m+(a===0?"":a),function(){var _=e.buildLookaheadFuncForOptionalProd(a,l,p||g.maxLookahead,g.dynamicTokensEnabled,d,g.lookAheadBuilderForOptional),u=r.getKeyForAutomaticLookahead(g.fullRuleNameToShort[l.name],f,a);g.setLaFuncCache(u,_)})},c.prototype.lookAheadBuilderForOptional=function(l,a,f){return e.buildSingleAlternativeLookaheadFunction(l,a,f)},c.prototype.lookAheadBuilderForAlternatives=function(l,a,f,d){return e.buildAlternativesLookAheadFunc(l,a,f,d)},c.prototype.getKeyForAutomaticLookahead=function(l,a){var f=this.getLastExplicitRuleShortName();return r.getKeyForAutomaticLookahead(f,l,a)},c.prototype.getLaFuncFromCache=function(l){},c.prototype.getLaFuncFromMap=function(l){return this.lookAheadFuncsCache.get(l)},c.prototype.getLaFuncFromObj=function(l){return this.lookAheadFuncsCache[l]},c.prototype.setLaFuncCache=function(l,a){},c.prototype.setLaFuncCacheUsingMap=function(l,a){this.lookAheadFuncsCache.set(l,a)},c.prototype.setLaFuncUsingObj=function(l,a){this.lookAheadFuncsCache[l]=a},c}();n.LooksAhead=s}),Km=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.addNoneTerminalToCst=n.addTerminalToCst=n.setNodeLocationFull=n.setNodeLocationOnlyOffset=void 0;function e(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.endOffset=s.endOffset):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset)}n.setNodeLocationOnlyOffset=e;function t(o,s){isNaN(o.startOffset)===!0?(o.startOffset=s.startOffset,o.startColumn=s.startColumn,o.startLine=s.startLine,o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine):o.endOffset<s.endOffset&&(o.endOffset=s.endOffset,o.endColumn=s.endColumn,o.endLine=s.endLine)}n.setNodeLocationFull=t;function i(o,s,c){o.children[c]===void 0?o.children[c]=[s]:o.children[c].push(s)}n.addTerminalToCst=i;function r(o,s,c){o.children[s]===void 0?o.children[s]=[c]:o.children[s].push(c)}n.addNoneTerminalToCst=r}),bc=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.defineNameProp=n.functionName=n.classNameFromInstance=void 0;var e=it();function t(s){return r(s.constructor)}n.classNameFromInstance=t;var i="name";function r(s){var c=s.name;return c||"anonymous"}n.functionName=r;function o(s,c){var l=Object.getOwnPropertyDescriptor(s,i);return e.isUndefined(l)||l.configurable?(Object.defineProperty(s,i,{enumerable:!1,configurable:!0,writable:!1,value:c}),!0):!1}n.defineNameProp=o}),Zm=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.validateRedundantMethods=n.validateMissingCstMethods=n.validateVisitor=n.CstVisitorDefinitionError=n.createBaseVisitorConstructorWithDefaults=n.createBaseSemanticVisitorConstructor=n.defaultVisit=void 0;var e=it(),t=bc();function i(d,p){for(var m=e.keys(d),g=m.length,_=0;_<g;_++)for(var u=m[_],h=d[u],E=h.length,x=0;x<E;x++){var v=h[x];v.tokenTypeIdx===void 0&&this[v.name](v.children,p)}}n.defaultVisit=i;function r(d,p){var m=function(){};t.defineNameProp(m,d+"BaseSemantics");var g={visit:function(_,u){if(e.isArray(_)&&(_=_[0]),!e.isUndefined(_))return this[_.name](_.children,u)},validateVisitor:function(){var _=c(this,p);if(!e.isEmpty(_)){var u=e.map(_,function(h){return h.msg});throw Error("Errors Detected in CST Visitor <"+t.functionName(this.constructor)+`>:
	`+(""+u.join(`

`).replace(/\n/g,`
	`)))}}};return m.prototype=g,m.prototype.constructor=m,m._RULE_NAMES=p,m}n.createBaseSemanticVisitorConstructor=r;function o(d,p,m){var g=function(){};t.defineNameProp(g,d+"BaseSemanticsWithDefaults");var _=Object.create(m.prototype);return e.forEach(p,function(u){_[u]=i}),g.prototype=_,g.prototype.constructor=g,g}n.createBaseVisitorConstructorWithDefaults=o;var s;(function(d){d[d.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",d[d.MISSING_METHOD=1]="MISSING_METHOD"})(s=n.CstVisitorDefinitionError||(n.CstVisitorDefinitionError={}));function c(d,p){var m=l(d,p),g=f(d,p);return m.concat(g)}n.validateVisitor=c;function l(d,p){var m=e.map(p,function(g){if(!e.isFunction(d[g]))return{msg:"Missing visitor method: <"+g+"> on "+t.functionName(d.constructor)+" CST Visitor.",type:s.MISSING_METHOD,methodName:g}});return e.compact(m)}n.validateMissingCstMethods=l;var a=["constructor","visit","validateVisitor"];function f(d,p){var m=[];for(var g in d)e.isFunction(d[g])&&!e.contains(a,g)&&!e.contains(p,g)&&m.push({msg:"Redundant visitor method: <"+g+"> on "+t.functionName(d.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:s.REDUNDANT_METHOD,methodName:g});return m}n.validateRedundantMethods=f}),$m=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TreeBuilder=void 0;var e=Km(),t=it(),i=Zm(),r=Bt(),o=function(){function s(){}return s.prototype.initTreeBuilder=function(c){if(this.CST_STACK=[],this.outputCst=c.outputCst,this.nodeLocationTracking=t.has(c,"nodeLocationTracking")?c.nodeLocationTracking:r.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=t.NOOP,this.cstFinallyStateUpdate=t.NOOP,this.cstPostTerminal=t.NOOP,this.cstPostNonTerminal=t.NOOP,this.cstPostRule=t.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationFull,this.setNodeLocationFromNode=e.setNodeLocationFull,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=e.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=e.setNodeLocationOnlyOffset,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=t.NOOP,this.setNodeLocationFromNode=t.NOOP,this.cstPostRule=t.NOOP,this.setInitialNodeLocation=t.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+c.nodeLocationTracking+'"')},s.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(c){c.location={startOffset:NaN,endOffset:NaN}},s.prototype.setInitialNodeLocationOnlyOffsetRegular=function(c){c.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},s.prototype.setInitialNodeLocationFullRecovery=function(c){c.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.setInitialNodeLocationFullRegular=function(c){var l=this.LA(1);c.location={startOffset:l.startOffset,startLine:l.startLine,startColumn:l.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},s.prototype.cstInvocationStateUpdate=function(c,l){var a={name:c,children:{}};this.setInitialNodeLocation(a),this.CST_STACK.push(a)},s.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},s.prototype.cstPostRuleFull=function(c){var l=this.LA(0),a=c.location;a.startOffset<=l.startOffset?(a.endOffset=l.endOffset,a.endLine=l.endLine,a.endColumn=l.endColumn):(a.startOffset=NaN,a.startLine=NaN,a.startColumn=NaN)},s.prototype.cstPostRuleOnlyOffset=function(c){var l=this.LA(0),a=c.location;a.startOffset<=l.startOffset?a.endOffset=l.endOffset:a.startOffset=NaN},s.prototype.cstPostTerminal=function(c,l){var a=this.CST_STACK[this.CST_STACK.length-1];e.addTerminalToCst(a,l,c),this.setNodeLocationFromToken(a.location,l)},s.prototype.cstPostNonTerminal=function(c,l){var a=this.CST_STACK[this.CST_STACK.length-1];e.addNoneTerminalToCst(a,l,c),this.setNodeLocationFromNode(a.location,c.location)},s.prototype.getBaseCstVisitorConstructor=function(){if(t.isUndefined(this.baseCstVisitorConstructor)){var c=i.createBaseSemanticVisitorConstructor(this.className,t.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=c,c}return this.baseCstVisitorConstructor},s.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(t.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var c=i.createBaseVisitorConstructorWithDefaults(this.className,t.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=c,c}return this.baseCstVisitorWithDefaultsConstructor},s.prototype.getLastExplicitRuleShortName=function(){var c=this.RULE_STACK;return c[c.length-1]},s.prototype.getPreviousExplicitRuleShortName=function(){var c=this.RULE_STACK;return c[c.length-2]},s.prototype.getLastExplicitRuleOccurrenceIndex=function(){var c=this.RULE_OCCURRENCE_STACK;return c[c.length-1]},s}();n.TreeBuilder=o}),Jm=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LexerAdapter=void 0;var e=Bt(),t=function(){function i(){}return i.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(i.prototype,"input",{get:function(){return this.tokVector},set:function(r){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=r,this.tokVectorLength=r.length},enumerable:!1,configurable:!0}),i.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):e.END_OF_FILE},i.prototype.LA=function(r){var o=this.currIdx+r;return o<0||this.tokVectorLength<=o?e.END_OF_FILE:this.tokVector[o]},i.prototype.consumeToken=function(){this.currIdx++},i.prototype.exportLexerState=function(){return this.currIdx},i.prototype.importLexerState=function(r){this.currIdx=r},i.prototype.resetLexerState=function(){this.currIdx=-1},i.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},i.prototype.getLexerPosition=function(){return this.exportLexerState()},i}();n.LexerAdapter=t}),Qm=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerApi=void 0;var e=it(),t=qi(),i=Bt(),r=Hr(),o=Ac(),s=Nt(),c=function(){function l(){}return l.prototype.ACTION=function(a){return a.call(this)},l.prototype.consume=function(a,f,d){return this.consumeInternal(f,a,d)},l.prototype.subrule=function(a,f,d){return this.subruleInternal(f,a,d)},l.prototype.option=function(a,f){return this.optionInternal(f,a)},l.prototype.or=function(a,f){return this.orInternal(f,a)},l.prototype.many=function(a,f){return this.manyInternal(a,f)},l.prototype.atLeastOne=function(a,f){return this.atLeastOneInternal(a,f)},l.prototype.CONSUME=function(a,f){return this.consumeInternal(a,0,f)},l.prototype.CONSUME1=function(a,f){return this.consumeInternal(a,1,f)},l.prototype.CONSUME2=function(a,f){return this.consumeInternal(a,2,f)},l.prototype.CONSUME3=function(a,f){return this.consumeInternal(a,3,f)},l.prototype.CONSUME4=function(a,f){return this.consumeInternal(a,4,f)},l.prototype.CONSUME5=function(a,f){return this.consumeInternal(a,5,f)},l.prototype.CONSUME6=function(a,f){return this.consumeInternal(a,6,f)},l.prototype.CONSUME7=function(a,f){return this.consumeInternal(a,7,f)},l.prototype.CONSUME8=function(a,f){return this.consumeInternal(a,8,f)},l.prototype.CONSUME9=function(a,f){return this.consumeInternal(a,9,f)},l.prototype.SUBRULE=function(a,f){return this.subruleInternal(a,0,f)},l.prototype.SUBRULE1=function(a,f){return this.subruleInternal(a,1,f)},l.prototype.SUBRULE2=function(a,f){return this.subruleInternal(a,2,f)},l.prototype.SUBRULE3=function(a,f){return this.subruleInternal(a,3,f)},l.prototype.SUBRULE4=function(a,f){return this.subruleInternal(a,4,f)},l.prototype.SUBRULE5=function(a,f){return this.subruleInternal(a,5,f)},l.prototype.SUBRULE6=function(a,f){return this.subruleInternal(a,6,f)},l.prototype.SUBRULE7=function(a,f){return this.subruleInternal(a,7,f)},l.prototype.SUBRULE8=function(a,f){return this.subruleInternal(a,8,f)},l.prototype.SUBRULE9=function(a,f){return this.subruleInternal(a,9,f)},l.prototype.OPTION=function(a){return this.optionInternal(a,0)},l.prototype.OPTION1=function(a){return this.optionInternal(a,1)},l.prototype.OPTION2=function(a){return this.optionInternal(a,2)},l.prototype.OPTION3=function(a){return this.optionInternal(a,3)},l.prototype.OPTION4=function(a){return this.optionInternal(a,4)},l.prototype.OPTION5=function(a){return this.optionInternal(a,5)},l.prototype.OPTION6=function(a){return this.optionInternal(a,6)},l.prototype.OPTION7=function(a){return this.optionInternal(a,7)},l.prototype.OPTION8=function(a){return this.optionInternal(a,8)},l.prototype.OPTION9=function(a){return this.optionInternal(a,9)},l.prototype.OR=function(a){return this.orInternal(a,0)},l.prototype.OR1=function(a){return this.orInternal(a,1)},l.prototype.OR2=function(a){return this.orInternal(a,2)},l.prototype.OR3=function(a){return this.orInternal(a,3)},l.prototype.OR4=function(a){return this.orInternal(a,4)},l.prototype.OR5=function(a){return this.orInternal(a,5)},l.prototype.OR6=function(a){return this.orInternal(a,6)},l.prototype.OR7=function(a){return this.orInternal(a,7)},l.prototype.OR8=function(a){return this.orInternal(a,8)},l.prototype.OR9=function(a){return this.orInternal(a,9)},l.prototype.MANY=function(a){this.manyInternal(0,a)},l.prototype.MANY1=function(a){this.manyInternal(1,a)},l.prototype.MANY2=function(a){this.manyInternal(2,a)},l.prototype.MANY3=function(a){this.manyInternal(3,a)},l.prototype.MANY4=function(a){this.manyInternal(4,a)},l.prototype.MANY5=function(a){this.manyInternal(5,a)},l.prototype.MANY6=function(a){this.manyInternal(6,a)},l.prototype.MANY7=function(a){this.manyInternal(7,a)},l.prototype.MANY8=function(a){this.manyInternal(8,a)},l.prototype.MANY9=function(a){this.manyInternal(9,a)},l.prototype.MANY_SEP=function(a){this.manySepFirstInternal(0,a)},l.prototype.MANY_SEP1=function(a){this.manySepFirstInternal(1,a)},l.prototype.MANY_SEP2=function(a){this.manySepFirstInternal(2,a)},l.prototype.MANY_SEP3=function(a){this.manySepFirstInternal(3,a)},l.prototype.MANY_SEP4=function(a){this.manySepFirstInternal(4,a)},l.prototype.MANY_SEP5=function(a){this.manySepFirstInternal(5,a)},l.prototype.MANY_SEP6=function(a){this.manySepFirstInternal(6,a)},l.prototype.MANY_SEP7=function(a){this.manySepFirstInternal(7,a)},l.prototype.MANY_SEP8=function(a){this.manySepFirstInternal(8,a)},l.prototype.MANY_SEP9=function(a){this.manySepFirstInternal(9,a)},l.prototype.AT_LEAST_ONE=function(a){this.atLeastOneInternal(0,a)},l.prototype.AT_LEAST_ONE1=function(a){return this.atLeastOneInternal(1,a)},l.prototype.AT_LEAST_ONE2=function(a){this.atLeastOneInternal(2,a)},l.prototype.AT_LEAST_ONE3=function(a){this.atLeastOneInternal(3,a)},l.prototype.AT_LEAST_ONE4=function(a){this.atLeastOneInternal(4,a)},l.prototype.AT_LEAST_ONE5=function(a){this.atLeastOneInternal(5,a)},l.prototype.AT_LEAST_ONE6=function(a){this.atLeastOneInternal(6,a)},l.prototype.AT_LEAST_ONE7=function(a){this.atLeastOneInternal(7,a)},l.prototype.AT_LEAST_ONE8=function(a){this.atLeastOneInternal(8,a)},l.prototype.AT_LEAST_ONE9=function(a){this.atLeastOneInternal(9,a)},l.prototype.AT_LEAST_ONE_SEP=function(a){this.atLeastOneSepFirstInternal(0,a)},l.prototype.AT_LEAST_ONE_SEP1=function(a){this.atLeastOneSepFirstInternal(1,a)},l.prototype.AT_LEAST_ONE_SEP2=function(a){this.atLeastOneSepFirstInternal(2,a)},l.prototype.AT_LEAST_ONE_SEP3=function(a){this.atLeastOneSepFirstInternal(3,a)},l.prototype.AT_LEAST_ONE_SEP4=function(a){this.atLeastOneSepFirstInternal(4,a)},l.prototype.AT_LEAST_ONE_SEP5=function(a){this.atLeastOneSepFirstInternal(5,a)},l.prototype.AT_LEAST_ONE_SEP6=function(a){this.atLeastOneSepFirstInternal(6,a)},l.prototype.AT_LEAST_ONE_SEP7=function(a){this.atLeastOneSepFirstInternal(7,a)},l.prototype.AT_LEAST_ONE_SEP8=function(a){this.atLeastOneSepFirstInternal(8,a)},l.prototype.AT_LEAST_ONE_SEP9=function(a){this.atLeastOneSepFirstInternal(9,a)},l.prototype.RULE=function(a,f,d){if(d===void 0&&(d=i.DEFAULT_RULE_CONFIG),e.contains(this.definedRulesNames,a)){var p=r.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:a,grammarName:this.className}),m={message:p,type:i.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:a};this.definitionErrors.push(m)}this.definedRulesNames.push(a);var g=this.defineRule(a,f,d);return this[a]=g,g},l.prototype.OVERRIDE_RULE=function(a,f,d){d===void 0&&(d=i.DEFAULT_RULE_CONFIG);var p=[];p=p.concat(o.validateRuleIsOverridden(a,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(p);var m=this.defineRule(a,f,d);return this[a]=m,m},l.prototype.BACKTRACK=function(a,f){return function(){this.isBackTrackingStack.push(1);var d=this.saveRecogState();try{return a.apply(this,f),!0}catch(p){if(t.isRecognitionException(p))return!1;throw p}finally{this.reloadRecogState(d),this.isBackTrackingStack.pop()}}},l.prototype.getGAstProductions=function(){return this.gastProductionsCache},l.prototype.getSerializedGastProductions=function(){return s.serializeGrammar(e.values(this.gastProductionsCache))},l}();n.RecognizerApi=c}),eg=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.RecognizerEngine=void 0;var e=it(),t=Qo(),i=qi(),r=Xr(),o=Wr(),s=Bt(),c=Rc(),l=Gn(),a=Yi(),f=bc(),d=function(){function p(){}return p.prototype.initRecognizerEngine=function(m,g){if(this.className=f.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=a.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},e.has(g,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(e.isArray(m)){if(e.isEmpty(m))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof m[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(e.isArray(m))this.tokensMap=e.reduce(m,function(E,x){return E[x.name]=x,E},{});else if(e.has(m,"modes")&&e.every(e.flatten(e.values(m.modes)),a.isTokenType)){var _=e.flatten(e.values(m.modes)),u=e.uniq(_);this.tokensMap=e.reduce(u,function(E,x){return E[x.name]=x,E},{})}else if(e.isObject(m))this.tokensMap=e.cloneObj(m);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=l.EOF;var h=e.every(e.values(m),function(E){return e.isEmpty(E.categoryMatches)});this.tokenMatcher=h?a.tokenStructuredMatcherNoCategories:a.tokenStructuredMatcher,a.augmentTokenTypes(e.values(this.tokensMap))},p.prototype.defineRule=function(m,g,_){if(this.selfAnalysisDone)throw Error("Grammar rule <"+m+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var u=e.has(_,"resyncEnabled")?_.resyncEnabled:s.DEFAULT_RULE_CONFIG.resyncEnabled,h=e.has(_,"recoveryValueFunc")?_.recoveryValueFunc:s.DEFAULT_RULE_CONFIG.recoveryValueFunc,E=this.ruleShortNameIdx<<t.BITS_FOR_METHOD_TYPE+t.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[E]=m,this.fullRuleNameToShort[m]=E;function x(b){try{if(this.outputCst===!0){g.apply(this,b);var R=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(R),R}else return g.apply(this,b)}catch(k){return this.invokeRuleCatch(k,u,h)}finally{this.ruleFinallyStateUpdate()}}var v=function(b,R){return b===void 0&&(b=0),this.ruleInvocationStateUpdate(E,m,b),x.call(this,R)},L="ruleName";return v[L]=m,v.originalGrammarAction=g,v},p.prototype.invokeRuleCatch=function(m,g,_){var u=this.RULE_STACK.length===1,h=g&&!this.isBackTracking()&&this.recoveryEnabled;if(i.isRecognitionException(m)){var E=m;if(h){var x=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(x))if(E.resyncedTokens=this.reSyncTo(x),this.outputCst){var v=this.CST_STACK[this.CST_STACK.length-1];return v.recoveredNode=!0,v}else return _();else{if(this.outputCst){var v=this.CST_STACK[this.CST_STACK.length-1];v.recoveredNode=!0,E.partialCstResult=v}throw E}}else{if(u)return this.moveToTerminatedState(),_();throw E}}else throw m},p.prototype.optionInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.OPTION_IDX,g);return this.optionInternalLogic(m,g,_)},p.prototype.optionInternalLogic=function(m,g,_){var u=this,h=this.getLaFuncFromCache(_),E,x;if(m.DEF!==void 0){if(E=m.DEF,x=m.GATE,x!==void 0){var v=h;h=function(){return x.call(u)&&v.call(u)}}}else E=m;if(h.call(this)===!0)return E.call(this)},p.prototype.atLeastOneInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_IDX,m);return this.atLeastOneInternalLogic(m,g,_)},p.prototype.atLeastOneInternalLogic=function(m,g,_){var u=this,h=this.getLaFuncFromCache(_),E,x;if(g.DEF!==void 0){if(E=g.DEF,x=g.GATE,x!==void 0){var v=h;h=function(){return x.call(u)&&v.call(u)}}}else E=g;if(h.call(this)===!0)for(var L=this.doSingleRepetition(E);h.call(this)===!0&&L===!0;)L=this.doSingleRepetition(E);else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY,g.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[m,g],h,t.AT_LEAST_ONE_IDX,m,o.NextTerminalAfterAtLeastOneWalker)},p.prototype.atLeastOneSepFirstInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.AT_LEAST_ONE_SEP_IDX,m);this.atLeastOneSepFirstInternalLogic(m,g,_)},p.prototype.atLeastOneSepFirstInternalLogic=function(m,g,_){var u=this,h=g.DEF,E=g.SEP,x=this.getLaFuncFromCache(_);if(x.call(this)===!0){h.call(this);for(var v=function(){return u.tokenMatcher(u.LA(1),E)};this.tokenMatcher(this.LA(1),E)===!0;)this.CONSUME(E),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,E,v,h,o.NextTerminalAfterAtLeastOneSepWalker],v,t.AT_LEAST_ONE_SEP_IDX,m,o.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(m,r.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,g.ERR_MSG)},p.prototype.manyInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.MANY_IDX,m);return this.manyInternalLogic(m,g,_)},p.prototype.manyInternalLogic=function(m,g,_){var u=this,h=this.getLaFuncFromCache(_),E,x;if(g.DEF!==void 0){if(E=g.DEF,x=g.GATE,x!==void 0){var v=h;h=function(){return x.call(u)&&v.call(u)}}}else E=g;for(var L=!0;h.call(this)===!0&&L===!0;)L=this.doSingleRepetition(E);this.attemptInRepetitionRecovery(this.manyInternal,[m,g],h,t.MANY_IDX,m,o.NextTerminalAfterManyWalker,L)},p.prototype.manySepFirstInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.MANY_SEP_IDX,m);this.manySepFirstInternalLogic(m,g,_)},p.prototype.manySepFirstInternalLogic=function(m,g,_){var u=this,h=g.DEF,E=g.SEP,x=this.getLaFuncFromCache(_);if(x.call(this)===!0){h.call(this);for(var v=function(){return u.tokenMatcher(u.LA(1),E)};this.tokenMatcher(this.LA(1),E)===!0;)this.CONSUME(E),h.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,E,v,h,o.NextTerminalAfterManySepWalker],v,t.MANY_SEP_IDX,m,o.NextTerminalAfterManySepWalker)}},p.prototype.repetitionSepSecondInternal=function(m,g,_,u,h){for(;_();)this.CONSUME(g),u.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[m,g,_,u,h],_,t.AT_LEAST_ONE_SEP_IDX,m,h)},p.prototype.doSingleRepetition=function(m){var g=this.getLexerPosition();m.call(this);var _=this.getLexerPosition();return _>g},p.prototype.orInternal=function(m,g){var _=this.getKeyForAutomaticLookahead(t.OR_IDX,g),u=e.isArray(m)?m:m.DEF,h=this.getLaFuncFromCache(_),E=h.call(this,u);if(E!==void 0){var x=u[E];return x.ALT.call(this)}this.raiseNoAltException(g,m.ERR_MSG)},p.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var m=this.LA(1),g=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:m,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new i.NotAllInputParsedException(g,m))}},p.prototype.subruleInternal=function(m,g,_){var u;try{var h=_!==void 0?_.ARGS:void 0;return u=m.call(this,g,h),this.cstPostNonTerminal(u,_!==void 0&&_.LABEL!==void 0?_.LABEL:m.ruleName),u}catch(E){this.subruleInternalError(E,_,m.ruleName)}},p.prototype.subruleInternalError=function(m,g,_){throw i.isRecognitionException(m)&&m.partialCstResult!==void 0&&(this.cstPostNonTerminal(m.partialCstResult,g!==void 0&&g.LABEL!==void 0?g.LABEL:_),delete m.partialCstResult),m},p.prototype.consumeInternal=function(m,g,_){var u;try{var h=this.LA(1);this.tokenMatcher(h,m)===!0?(this.consumeToken(),u=h):this.consumeInternalError(m,h,_)}catch(E){u=this.consumeInternalRecovery(m,g,E)}return this.cstPostTerminal(_!==void 0&&_.LABEL!==void 0?_.LABEL:m.name,u),u},p.prototype.consumeInternalError=function(m,g,_){var u,h=this.LA(0);throw _!==void 0&&_.ERR_MSG?u=_.ERR_MSG:u=this.errorMessageProvider.buildMismatchTokenMessage({expected:m,actual:g,previous:h,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new i.MismatchedTokenException(u,g,h))},p.prototype.consumeInternalRecovery=function(m,g,_){if(this.recoveryEnabled&&_.name==="MismatchedTokenException"&&!this.isBackTracking()){var u=this.getFollowsForInRuleRecovery(m,g);try{return this.tryInRuleRecovery(m,u)}catch(h){throw h.name===c.IN_RULE_RECOVERY_EXCEPTION?_:h}}else throw _},p.prototype.saveRecogState=function(){var m=this.errors,g=e.cloneArr(this.RULE_STACK);return{errors:m,lexerState:this.exportLexerState(),RULE_STACK:g,CST_STACK:this.CST_STACK}},p.prototype.reloadRecogState=function(m){this.errors=m.errors,this.importLexerState(m.lexerState),this.RULE_STACK=m.RULE_STACK},p.prototype.ruleInvocationStateUpdate=function(m,g,_){this.RULE_OCCURRENCE_STACK.push(_),this.RULE_STACK.push(m),this.cstInvocationStateUpdate(g,m)},p.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},p.prototype.getCurrRuleFullName=function(){var m=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[m]},p.prototype.shortRuleNameToFullName=function(m){return this.shortRuleNameToFull[m]},p.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),l.EOF)},p.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},p}();n.RecognizerEngine=d}),tg=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorHandler=void 0;var e=qi(),t=it(),i=Xr(),r=Bt(),o=function(){function s(){}return s.prototype.initErrorHandler=function(c){this._errors=[],this.errorMessageProvider=t.has(c,"errorMessageProvider")?c.errorMessageProvider:r.DEFAULT_PARSER_CONFIG.errorMessageProvider},s.prototype.SAVE_ERROR=function(c){if(e.isRecognitionException(c))return c.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:t.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(c),c;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(s.prototype,"errors",{get:function(){return t.cloneArr(this._errors)},set:function(c){this._errors=c},enumerable:!1,configurable:!0}),s.prototype.raiseEarlyExitException=function(c,l,a){for(var f=this.getCurrRuleFullName(),d=this.getGAstProductions()[f],p=i.getLookaheadPathsForOptionalProd(c,d,l,this.maxLookahead),m=p[0],g=[],_=1;_<=this.maxLookahead;_++)g.push(this.LA(_));var u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:m,actual:g,previous:this.LA(0),customUserDescription:a,ruleName:f});throw this.SAVE_ERROR(new e.EarlyExitException(u,this.LA(1),this.LA(0)))},s.prototype.raiseNoAltException=function(c,l){for(var a=this.getCurrRuleFullName(),f=this.getGAstProductions()[a],d=i.getLookaheadPathsForOr(c,f,this.maxLookahead),p=[],m=1;m<=this.maxLookahead;m++)p.push(this.LA(m));var g=this.LA(0),_=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:d,actual:p,previous:g,customUserDescription:l,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new e.NoViableAltException(_,this.LA(1),g))},s}();n.ErrorHandler=o}),ng=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ContentAssist=void 0;var e=Wr(),t=it(),i=function(){function r(){}return r.prototype.initContentAssist=function(){},r.prototype.computeContentAssist=function(o,s){var c=this.gastProductionsCache[o];if(t.isUndefined(c))throw Error("Rule ->"+o+"<- does not exist in this grammar.");return e.nextPossibleTokensAfter([c],s,this.tokenMatcher,this.maxLookahead)},r.prototype.getNextPossibleTokenTypes=function(o){var s=t.first(o.ruleStack),c=this.getGAstProductions(),l=c[s],a=new e.NextAfterTokenWalker(l,o).startWalking();return a},r}();n.ContentAssist=i}),ig=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GastRecorder=void 0;var e=it(),t=Nt(),i=Vr(),r=Yi(),o=Gn(),s=Bt(),c=Qo(),l={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(l);var a=!0,f=Math.pow(2,c.BITS_FOR_OCCURRENCE_IDX)-1,d=o.createToken({name:"RECORDING_PHASE_TOKEN",pattern:i.Lexer.NA});r.augmentTokenTypes([d]);var p=o.createTokenInstance(d,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(p);var m={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},g=function(){function x(){}return x.prototype.initGastRecorder=function(v){this.recordingProdStack=[],this.RECORDING_PHASE=!1},x.prototype.enableRecording=function(){var v=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var L=function(R){var k=R>0?R:"";v["CONSUME"+k]=function(y,S){return this.consumeInternalRecord(y,R,S)},v["SUBRULE"+k]=function(y,S){return this.subruleInternalRecord(y,R,S)},v["OPTION"+k]=function(y){return this.optionInternalRecord(y,R)},v["OR"+k]=function(y){return this.orInternalRecord(y,R)},v["MANY"+k]=function(y){this.manyInternalRecord(R,y)},v["MANY_SEP"+k]=function(y){this.manySepFirstInternalRecord(R,y)},v["AT_LEAST_ONE"+k]=function(y){this.atLeastOneInternalRecord(R,y)},v["AT_LEAST_ONE_SEP"+k]=function(y){this.atLeastOneSepFirstInternalRecord(R,y)}},b=0;b<10;b++)L(b);v.consume=function(R,k,y){return this.consumeInternalRecord(k,R,y)},v.subrule=function(R,k,y){return this.subruleInternalRecord(k,R,y)},v.option=function(R,k){return this.optionInternalRecord(k,R)},v.or=function(R,k){return this.orInternalRecord(k,R)},v.many=function(R,k){this.manyInternalRecord(R,k)},v.atLeastOne=function(R,k){this.atLeastOneInternalRecord(R,k)},v.ACTION=v.ACTION_RECORD,v.BACKTRACK=v.BACKTRACK_RECORD,v.LA=v.LA_RECORD})},x.prototype.disableRecording=function(){var v=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var L=0;L<10;L++){var b=L>0?L:"";delete v["CONSUME"+b],delete v["SUBRULE"+b],delete v["OPTION"+b],delete v["OR"+b],delete v["MANY"+b],delete v["MANY_SEP"+b],delete v["AT_LEAST_ONE"+b],delete v["AT_LEAST_ONE_SEP"+b]}delete v.consume,delete v.subrule,delete v.option,delete v.or,delete v.many,delete v.atLeastOne,delete v.ACTION,delete v.BACKTRACK,delete v.LA})},x.prototype.ACTION_RECORD=function(v){},x.prototype.BACKTRACK_RECORD=function(v,L){return function(){return!0}},x.prototype.LA_RECORD=function(v){return s.END_OF_FILE},x.prototype.topLevelRuleRecord=function(v,L){try{var b=new t.Rule({definition:[],name:v});return b.name=v,this.recordingProdStack.push(b),L.call(this),this.recordingProdStack.pop(),b}catch(R){if(R.KNOWN_RECORDER_ERROR!==!0)try{R.message=R.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw R}throw R}},x.prototype.optionInternalRecord=function(v,L){return _.call(this,t.Option,v,L)},x.prototype.atLeastOneInternalRecord=function(v,L){_.call(this,t.RepetitionMandatory,L,v)},x.prototype.atLeastOneSepFirstInternalRecord=function(v,L){_.call(this,t.RepetitionMandatoryWithSeparator,L,v,a)},x.prototype.manyInternalRecord=function(v,L){_.call(this,t.Repetition,L,v)},x.prototype.manySepFirstInternalRecord=function(v,L){_.call(this,t.RepetitionWithSeparator,L,v,a)},x.prototype.orInternalRecord=function(v,L){return u.call(this,v,L)},x.prototype.subruleInternalRecord=function(v,L,b){if(E(L),!v||e.has(v,"ruleName")===!1){var R=new Error("<SUBRULE"+h(L)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(v)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw R.KNOWN_RECORDER_ERROR=!0,R}var k=e.peek(this.recordingProdStack),y=v.ruleName,S=new t.NonTerminal({idx:L,nonTerminalName:y,referencedRule:void 0});return k.definition.push(S),this.outputCst?m:l},x.prototype.consumeInternalRecord=function(v,L,b){if(E(L),!r.hasShortKeyProperty(v)){var R=new Error("<CONSUME"+h(L)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(v)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw R.KNOWN_RECORDER_ERROR=!0,R}var k=e.peek(this.recordingProdStack),y=new t.Terminal({idx:L,terminalType:v});return k.definition.push(y),p},x}();n.GastRecorder=g;function _(x,v,L,b){b===void 0&&(b=!1),E(L);var R=e.peek(this.recordingProdStack),k=e.isFunction(v)?v:v.DEF,y=new x({definition:[],idx:L});return b&&(y.separator=v.SEP),e.has(v,"MAX_LOOKAHEAD")&&(y.maxLookahead=v.MAX_LOOKAHEAD),this.recordingProdStack.push(y),k.call(this),R.definition.push(y),this.recordingProdStack.pop(),l}function u(x,v){var L=this;E(v);var b=e.peek(this.recordingProdStack),R=e.isArray(x)===!1,k=R===!1?x:x.DEF,y=new t.Alternation({definition:[],idx:v,ignoreAmbiguities:R&&x.IGNORE_AMBIGUITIES===!0});e.has(x,"MAX_LOOKAHEAD")&&(y.maxLookahead=x.MAX_LOOKAHEAD);var S=e.some(k,function(N){return e.isFunction(N.GATE)});return y.hasPredicates=S,b.definition.push(y),e.forEach(k,function(N){var I=new t.Alternative({definition:[]});y.definition.push(I),e.has(N,"IGNORE_AMBIGUITIES")?I.ignoreAmbiguities=N.IGNORE_AMBIGUITIES:e.has(N,"GATE")&&(I.ignoreAmbiguities=!0),L.recordingProdStack.push(I),N.ALT.call(L),L.recordingProdStack.pop()}),l}function h(x){return x===0?"":""+x}function E(x){if(x<0||x>f){var v=new Error("Invalid DSL Method idx value: <"+x+`>
	`+("Idx value must be a none negative value smaller than "+(f+1)));throw v.KNOWN_RECORDER_ERROR=!0,v}}}),rg=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PerformanceTracer=void 0;var e=it(),t=Bt(),i=function(){function r(){}return r.prototype.initPerformanceTracer=function(o){if(e.has(o,"traceInitPerf")){var s=o.traceInitPerf,c=typeof s=="number";this.traceInitMaxIdent=c?s:1/0,this.traceInitPerf=c?s>0:s}else this.traceInitMaxIdent=0,this.traceInitPerf=t.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},r.prototype.TRACE_INIT=function(o,s){if(this.traceInitPerf===!0){this.traceInitIndent++;var c=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(c+"--> <"+o+">");var l=e.timer(s),a=l.time,f=l.value,d=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(c+"<-- <"+o+"> time: "+a+"ms"),this.traceInitIndent--,f}else return s()},r}();n.PerformanceTracer=i}),og=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.applyMixins=void 0;function e(t,i){i.forEach(function(r){var o=r.prototype;Object.getOwnPropertyNames(o).forEach(function(s){if(s!=="constructor"){var c=Object.getOwnPropertyDescriptor(o,s);c&&(c.get||c.set)?Object.defineProperty(t.prototype,s,c):t.prototype[s]=r.prototype[s]}})})}n.applyMixins=e}),Bt=je(n=>{var e=n&&n.__extends||function(){var b=function(R,k){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,S){y.__proto__=S}||function(y,S){for(var N in S)Object.prototype.hasOwnProperty.call(S,N)&&(y[N]=S[N])},b(R,k)};return function(R,k){if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");b(R,k);function y(){this.constructor=R}R.prototype=k===null?Object.create(k):(y.prototype=k.prototype,new y)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.EmbeddedActionsParser=n.CstParser=n.Parser=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.DEFAULT_RULE_CONFIG=n.DEFAULT_PARSER_CONFIG=n.END_OF_FILE=void 0;var t=it(),i=Xm(),r=Gn(),o=Hr(),s=jm(),c=Rc(),l=qm(),a=$m(),f=Jm(),d=Qm(),p=eg(),m=tg(),g=ng(),_=ig(),u=rg(),h=og();n.END_OF_FILE=r.createTokenInstance(r.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN),Object.freeze(n.END_OF_FILE),n.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:o.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),n.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0}),function(b){b[b.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",b[b.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",b[b.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",b[b.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",b[b.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",b[b.LEFT_RECURSION=5]="LEFT_RECURSION",b[b.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",b[b.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",b[b.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",b[b.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",b[b.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",b[b.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",b[b.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"}(n.ParserDefinitionErrorType||(n.ParserDefinitionErrorType={}));function E(b){return b===void 0&&(b=void 0),function(){return b}}n.EMPTY_ALT=E;var x=function(){function b(R,k){this.definitionErrors=[],this.selfAnalysisDone=!1;var y=this;if(y.initErrorHandler(k),y.initLexerAdapter(),y.initLooksAhead(k),y.initRecognizerEngine(R,k),y.initRecoverable(k),y.initTreeBuilder(k),y.initContentAssist(),y.initGastRecorder(k),y.initPerformanceTracer(k),t.has(k,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=t.has(k,"skipValidations")?k.skipValidations:n.DEFAULT_PARSER_CONFIG.skipValidations}return b.performSelfAnalysis=function(R){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},b.prototype.performSelfAnalysis=function(){var R=this;this.TRACE_INIT("performSelfAnalysis",function(){var k;R.selfAnalysisDone=!0;var y=R.className;R.TRACE_INIT("toFastProps",function(){t.toFastProperties(R)}),R.TRACE_INIT("Grammar Recording",function(){try{R.enableRecording(),t.forEach(R.definedRulesNames,function(N){var I=R[N],w=I.originalGrammarAction,U=void 0;R.TRACE_INIT(N+" Rule",function(){U=R.topLevelRuleRecord(N,w)}),R.gastProductionsCache[N]=U})}finally{R.disableRecording()}});var S=[];if(R.TRACE_INIT("Grammar Resolving",function(){S=s.resolveGrammar({rules:t.values(R.gastProductionsCache)}),R.definitionErrors=R.definitionErrors.concat(S)}),R.TRACE_INIT("Grammar Validations",function(){if(t.isEmpty(S)&&R.skipValidations===!1){var N=s.validateGrammar({rules:t.values(R.gastProductionsCache),maxLookahead:R.maxLookahead,tokenTypes:t.values(R.tokensMap),errMsgProvider:o.defaultGrammarValidatorErrorProvider,grammarName:y});R.definitionErrors=R.definitionErrors.concat(N)}}),t.isEmpty(R.definitionErrors)&&(R.recoveryEnabled&&R.TRACE_INIT("computeAllProdsFollows",function(){var N=i.computeAllProdsFollows(t.values(R.gastProductionsCache));R.resyncFollows=N}),R.TRACE_INIT("ComputeLookaheadFunctions",function(){R.preComputeLookaheadFunctions(t.values(R.gastProductionsCache))})),!b.DEFER_DEFINITION_ERRORS_HANDLING&&!t.isEmpty(R.definitionErrors))throw k=t.map(R.definitionErrors,function(N){return N.message}),new Error(`Parser Definition Errors detected:
 `+k.join(`
-------------------------------
`))})},b.DEFER_DEFINITION_ERRORS_HANDLING=!1,b}();n.Parser=x,h.applyMixins(x,[c.Recoverable,l.LooksAhead,a.TreeBuilder,f.LexerAdapter,p.RecognizerEngine,d.RecognizerApi,m.ErrorHandler,g.ContentAssist,_.GastRecorder,u.PerformanceTracer]);var v=function(b){e(R,b);function R(k,y){y===void 0&&(y=n.DEFAULT_PARSER_CONFIG);var S=this,N=t.cloneObj(y);return N.outputCst=!0,S=b.call(this,k,N)||this,S}return R}(x);n.CstParser=v;var L=function(b){e(R,b);function R(k,y){y===void 0&&(y=n.DEFAULT_PARSER_CONFIG);var S=this,N=t.cloneObj(y);return N.outputCst=!1,S=b.call(this,k,N)||this,S}return R}(x);n.EmbeddedActionsParser=L}),ag=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createSyntaxDiagramsCode=void 0;var e=Ec();function t(i,r){var o=r===void 0?{}:r,s=o.resourceBase,c=s===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/":s,l=o.css,a=l===void 0?"https://unpkg.com/chevrotain@"+e.VERSION+"/diagrams/diagrams.css":l,f=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,d=`
<link rel='stylesheet' href='`+a+`'>
`,p=`
<script src='`+c+`vendor/railroad-diagrams.js'><\/script>
<script src='`+c+`src/diagrams_builder.js'><\/script>
<script src='`+c+`src/diagrams_behavior.js'><\/script>
<script src='`+c+`src/main.js'><\/script>
`,m=`
<div id="diagrams" align="center"></div>
`,g=`
<script>
    window.serializedGrammar = `+JSON.stringify(i,null,"  ")+`;
<\/script>
`,_=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
<\/script>
`;return f+d+p+m+g+_}n.createSyntaxDiagramsCode=t}),sg=je(n=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Parser=n.createSyntaxDiagramsCode=n.clearCache=n.GAstVisitor=n.serializeProduction=n.serializeGrammar=n.Terminal=n.Rule=n.RepetitionWithSeparator=n.RepetitionMandatoryWithSeparator=n.RepetitionMandatory=n.Repetition=n.Option=n.NonTerminal=n.Alternative=n.Alternation=n.defaultLexerErrorProvider=n.NoViableAltException=n.NotAllInputParsedException=n.MismatchedTokenException=n.isRecognitionException=n.EarlyExitException=n.defaultParserErrorProvider=n.tokenName=n.tokenMatcher=n.tokenLabel=n.EOF=n.createTokenInstance=n.createToken=n.LexerDefinitionErrorType=n.Lexer=n.EMPTY_ALT=n.ParserDefinitionErrorType=n.EmbeddedActionsParser=n.CstParser=n.VERSION=void 0;var e=Ec();Object.defineProperty(n,"VERSION",{enumerable:!0,get:function(){return e.VERSION}});var t=Bt();Object.defineProperty(n,"CstParser",{enumerable:!0,get:function(){return t.CstParser}}),Object.defineProperty(n,"EmbeddedActionsParser",{enumerable:!0,get:function(){return t.EmbeddedActionsParser}}),Object.defineProperty(n,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return t.ParserDefinitionErrorType}}),Object.defineProperty(n,"EMPTY_ALT",{enumerable:!0,get:function(){return t.EMPTY_ALT}});var i=Vr();Object.defineProperty(n,"Lexer",{enumerable:!0,get:function(){return i.Lexer}}),Object.defineProperty(n,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return i.LexerDefinitionErrorType}});var r=Gn();Object.defineProperty(n,"createToken",{enumerable:!0,get:function(){return r.createToken}}),Object.defineProperty(n,"createTokenInstance",{enumerable:!0,get:function(){return r.createTokenInstance}}),Object.defineProperty(n,"EOF",{enumerable:!0,get:function(){return r.EOF}}),Object.defineProperty(n,"tokenLabel",{enumerable:!0,get:function(){return r.tokenLabel}}),Object.defineProperty(n,"tokenMatcher",{enumerable:!0,get:function(){return r.tokenMatcher}}),Object.defineProperty(n,"tokenName",{enumerable:!0,get:function(){return r.tokenName}});var o=Hr();Object.defineProperty(n,"defaultParserErrorProvider",{enumerable:!0,get:function(){return o.defaultParserErrorProvider}});var s=qi();Object.defineProperty(n,"EarlyExitException",{enumerable:!0,get:function(){return s.EarlyExitException}}),Object.defineProperty(n,"isRecognitionException",{enumerable:!0,get:function(){return s.isRecognitionException}}),Object.defineProperty(n,"MismatchedTokenException",{enumerable:!0,get:function(){return s.MismatchedTokenException}}),Object.defineProperty(n,"NotAllInputParsedException",{enumerable:!0,get:function(){return s.NotAllInputParsedException}}),Object.defineProperty(n,"NoViableAltException",{enumerable:!0,get:function(){return s.NoViableAltException}});var c=Sc();Object.defineProperty(n,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return c.defaultLexerErrorProvider}});var l=Nt();Object.defineProperty(n,"Alternation",{enumerable:!0,get:function(){return l.Alternation}}),Object.defineProperty(n,"Alternative",{enumerable:!0,get:function(){return l.Alternative}}),Object.defineProperty(n,"NonTerminal",{enumerable:!0,get:function(){return l.NonTerminal}}),Object.defineProperty(n,"Option",{enumerable:!0,get:function(){return l.Option}}),Object.defineProperty(n,"Repetition",{enumerable:!0,get:function(){return l.Repetition}}),Object.defineProperty(n,"RepetitionMandatory",{enumerable:!0,get:function(){return l.RepetitionMandatory}}),Object.defineProperty(n,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return l.RepetitionMandatoryWithSeparator}}),Object.defineProperty(n,"RepetitionWithSeparator",{enumerable:!0,get:function(){return l.RepetitionWithSeparator}}),Object.defineProperty(n,"Rule",{enumerable:!0,get:function(){return l.Rule}}),Object.defineProperty(n,"Terminal",{enumerable:!0,get:function(){return l.Terminal}});var a=Nt();Object.defineProperty(n,"serializeGrammar",{enumerable:!0,get:function(){return a.serializeGrammar}}),Object.defineProperty(n,"serializeProduction",{enumerable:!0,get:function(){return a.serializeProduction}});var f=ji();Object.defineProperty(n,"GAstVisitor",{enumerable:!0,get:function(){return f.GAstVisitor}});function d(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}n.clearCache=d;var p=ag();Object.defineProperty(n,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return p.createSyntaxDiagramsCode}});var m=function(){function g(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return g}();n.Parser=m});const Fi=sg();class cg extends sn{constructor(e){super(e)}load(e,t,i,r){const o=this,s=o.path===""?Hm.extractUrlBase(e):o.path,c=new Um(o.manager);c.setPath(o.path),c.setRequestHeader(o.requestHeader),c.setWithCredentials(o.withCredentials),c.load(e,function(l){try{t(o.parse(l,s))}catch(a){r?r(a):console.error(a),o.manager.itemError(e)}},i,r)}parse(e,t){const i={};function r(P){const A=o(),F=new lg(A.tokens),B=new hg(A.tokenVocabulary),D=s(B.getBaseCstVisitorConstructor()),X=F.lex(P);B.input=X.tokens;const z=B.vrml();if(B.errors.length>0)throw console.error(B.errors),Error("THREE.VRMLLoader: Parsing errors detected.");return D.visit(z)}function o(){const P=Fi.createToken,A=P({name:"RouteIdentifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/}),F=P({name:"Identifier",pattern:/[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]([^\0-\x20\x22\x27\x23\x2b\x2c\x2e\x5b\x5d\x5c\x7b\x7d])*/,longer_alt:A}),B=["Anchor","Billboard","Collision","Group","Transform","Inline","LOD","Switch","AudioClip","DirectionalLight","PointLight","Script","Shape","Sound","SpotLight","WorldInfo","CylinderSensor","PlaneSensor","ProximitySensor","SphereSensor","TimeSensor","TouchSensor","VisibilitySensor","Box","Cone","Cylinder","ElevationGrid","Extrusion","IndexedFaceSet","IndexedLineSet","PointSet","Sphere","Color","Coordinate","Normal","TextureCoordinate","Appearance","FontStyle","ImageTexture","Material","MovieTexture","PixelTexture","TextureTransform","ColorInterpolator","CoordinateInterpolator","NormalInterpolator","OrientationInterpolator","PositionInterpolator","ScalarInterpolator","Background","Fog","NavigationInfo","Viewpoint","Text"],D=P({name:"Version",pattern:/#VRML.*/,longer_alt:F}),X=P({name:"NodeName",pattern:new RegExp(B.join("|")),longer_alt:F}),z=P({name:"DEF",pattern:/DEF/,longer_alt:F}),q=P({name:"USE",pattern:/USE/,longer_alt:F}),oe=P({name:"ROUTE",pattern:/ROUTE/,longer_alt:F}),he=P({name:"TO",pattern:/TO/,longer_alt:F}),le=P({name:"StringLiteral",pattern:/"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/}),Se=P({name:"HexLiteral",pattern:/0[xX][0-9a-fA-F]+/}),Pe=P({name:"NumberLiteral",pattern:/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/}),He=P({name:"TrueLiteral",pattern:/TRUE/}),we=P({name:"FalseLiteral",pattern:/FALSE/}),T=P({name:"NullLiteral",pattern:/NULL/}),Y=P({name:"LSquare",pattern:/\[/}),te=P({name:"RSquare",pattern:/]/}),ge=P({name:"LCurly",pattern:/{/}),ve=P({name:"RCurly",pattern:/}/}),De=P({name:"Comment",pattern:/#.*/,group:Fi.Lexer.SKIPPED}),qe=[P({name:"WhiteSpace",pattern:/[ ,\s]/,group:Fi.Lexer.SKIPPED}),X,z,q,oe,he,He,we,T,D,F,A,le,Se,Pe,Y,te,ge,ve,De],et={};for(let Ne=0,Me=qe.length;Ne<Me;Ne++){const Te=qe[Ne];et[Te.name]=Te}return{tokens:qe,tokenVocabulary:et}}function s(P){class A extends P{constructor(){super(),this.validateVisitor()}vrml(D){const X={version:this.visit(D.version),nodes:[],routes:[]};for(let z=0,q=D.node.length;z<q;z++){const oe=D.node[z];X.nodes.push(this.visit(oe))}if(D.route)for(let z=0,q=D.route.length;z<q;z++){const oe=D.route[z];X.routes.push(this.visit(oe))}return X}version(D){return D.Version[0].image}node(D){const X={name:D.NodeName[0].image,fields:[]};if(D.field)for(let z=0,q=D.field.length;z<q;z++){const oe=D.field[z];X.fields.push(this.visit(oe))}return D.def&&(X.DEF=this.visit(D.def[0])),X}field(D){const X={name:D.Identifier[0].image,type:null,values:null};let z;return D.singleFieldValue&&(z=this.visit(D.singleFieldValue[0])),D.multiFieldValue&&(z=this.visit(D.multiFieldValue[0])),X.type=z.type,X.values=z.values,X}def(D){return(D.Identifier||D.NodeName)[0].image}use(D){return{USE:(D.Identifier||D.NodeName)[0].image}}singleFieldValue(D){return F(this,D)}multiFieldValue(D){return F(this,D)}route(D){return{FROM:D.RouteIdentifier[0].image,TO:D.RouteIdentifier[1].image}}}function F(B,D){const X={type:null,values:[]};if(D.node){X.type="node";for(let z=0,q=D.node.length;z<q;z++){const oe=D.node[z];X.values.push(B.visit(oe))}}if(D.use){X.type="use";for(let z=0,q=D.use.length;z<q;z++){const oe=D.use[z];X.values.push(B.visit(oe))}}if(D.StringLiteral){X.type="string";for(let z=0,q=D.StringLiteral.length;z<q;z++){const oe=D.StringLiteral[z];X.values.push(oe.image.replace(/'|"/g,""))}}if(D.NumberLiteral){X.type="number";for(let z=0,q=D.NumberLiteral.length;z<q;z++){const oe=D.NumberLiteral[z];X.values.push(parseFloat(oe.image))}}if(D.HexLiteral){X.type="hex";for(let z=0,q=D.HexLiteral.length;z<q;z++){const oe=D.HexLiteral[z];X.values.push(oe.image)}}if(D.TrueLiteral){X.type="boolean";for(let z=0,q=D.TrueLiteral.length;z<q;z++)D.TrueLiteral[z].image==="TRUE"&&X.values.push(!0)}if(D.FalseLiteral){X.type="boolean";for(let z=0,q=D.FalseLiteral.length;z<q;z++)D.FalseLiteral[z].image==="FALSE"&&X.values.push(!1)}return D.NullLiteral&&(X.type="null",D.NullLiteral.forEach(function(){X.values.push(null)})),X}return new A}function c(P){const A=P.nodes,F=new pc;for(let B=0,D=A.length;B<D;B++){const X=A[B];l(X)}for(let B=0,D=A.length;B<D;B++){const X=A[B],z=a(X);z instanceof ut&&F.add(z),X.name==="WorldInfo"&&(F.userData.worldInfo=z)}return F}function l(P){P.DEF&&(i[P.DEF]=P);const A=P.fields;for(let F=0,B=A.length;F<B;F++){const D=A[F];if(D.type==="node"){const X=D.values;for(let z=0,q=X.length;z<q;z++)l(X[z])}}}function a(P){return P.USE?Z(P.USE):(P.build!==void 0||(P.build=f(P)),P.build)}function f(P){const A=P.name;let F;switch(A){case"Anchor":case"Group":case"Transform":case"Collision":F=d(P);break;case"Background":F=p(P);break;case"Shape":F=m(P);break;case"Appearance":F=g(P);break;case"Material":F=_(P);break;case"ImageTexture":F=x(P);break;case"PixelTexture":F=E(P);break;case"TextureTransform":F=v(P);break;case"IndexedFaceSet":F=R(P);break;case"IndexedLineSet":F=k(P);break;case"PointSet":F=y(P);break;case"Box":F=S(P);break;case"Cone":F=N(P);break;case"Cylinder":F=I(P);break;case"Sphere":F=w(P);break;case"ElevationGrid":F=U(P);break;case"Extrusion":F=H(P);break;case"Color":case"Coordinate":case"Normal":case"TextureCoordinate":F=L(P);break;case"WorldInfo":F=b(P);break;case"Billboard":case"Inline":case"LOD":case"Switch":case"AudioClip":case"DirectionalLight":case"PointLight":case"Script":case"Sound":case"SpotLight":case"CylinderSensor":case"PlaneSensor":case"ProximitySensor":case"SphereSensor":case"TimeSensor":case"TouchSensor":case"VisibilitySensor":case"Text":case"FontStyle":case"MovieTexture":case"ColorInterpolator":case"CoordinateInterpolator":case"NormalInterpolator":case"OrientationInterpolator":case"PositionInterpolator":case"ScalarInterpolator":case"Fog":case"NavigationInfo":case"Viewpoint":break;default:console.warn("THREE.VRMLLoader: Unknown node:",A);break}return F!==void 0&&P.DEF!==void 0&&F.hasOwnProperty("name")===!0&&(F.name=P.DEF),F}function d(P){const A=new di,F=P.fields;for(let B=0,D=F.length;B<D;B++){const X=F[B],z=X.name,q=X.values;switch(z){case"bboxCenter":break;case"bboxSize":break;case"center":break;case"children":j(q,A);break;case"description":break;case"collide":break;case"parameter":break;case"rotation":const oe=new ee(q[0],q[1],q[2]).normalize(),he=q[3];A.quaternion.setFromAxisAngle(oe,he);break;case"scale":A.scale.set(q[0],q[1],q[2]);break;case"scaleOrientation":break;case"translation":A.position.set(q[0],q[1],q[2]);break;case"proxy":break;case"url":break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return A}function p(P){const A=new di;let F,B,D,X;const z=P.fields;for(let oe=0,he=z.length;oe<he;oe++){const le=z[oe],Se=le.name,Pe=le.values;switch(Se){case"groundAngle":F=Pe;break;case"groundColor":B=Pe;break;case"backUrl":break;case"bottomUrl":break;case"frontUrl":break;case"leftUrl":break;case"rightUrl":break;case"topUrl":break;case"skyAngle":D=Pe;break;case"skyColor":X=Pe;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Se);break}}const q=1e4;if(X){const oe=new Ui(q,32,16),he=new hi({fog:!1,side:Tt,depthWrite:!1,depthTest:!1});X.length>3?(C(oe,q,D,J(X),!0),he.vertexColors=!0):(he.color.setRGB(X[0],X[1],X[2]),he.color.convertSRGBToLinear());const le=new kt(oe,he);A.add(le)}if(B&&B.length>0){const oe=new Ui(q,32,16,0,2*Math.PI,.5*Math.PI,1.5*Math.PI),he=new hi({fog:!1,side:Tt,vertexColors:!0,depthWrite:!1,depthTest:!1});C(oe,q,F,J(B),!1);const le=new kt(oe,he);A.add(le)}return A.renderOrder=-1/0,A}function m(P){const A=P.fields;let F=new hi({name:sn.DEFAULT_MATERIAL_NAME,color:0}),B;for(let X=0,z=A.length;X<z;X++){const q=A[X],oe=q.name,he=q.values;switch(oe){case"appearance":he[0]!==null&&(F=a(he[0]));break;case"geometry":he[0]!==null&&(B=a(he[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",oe);break}}let D;if(B&&B.attributes.position){const X=B._type;if(X==="points"){const z=new gc({name:sn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:F.opacity,transparent:F.transparent});B.attributes.color!==void 0?z.vertexColors=!0:F.isMeshPhongMaterial&&z.color.copy(F.emissive),D=new pm(B,z)}else if(X==="line"){const z=new mc({name:sn.DEFAULT_MATERIAL_NAME,color:16777215,opacity:F.opacity,transparent:F.transparent});B.attributes.color!==void 0?z.vertexColors=!0:F.isMeshPhongMaterial&&z.color.copy(F.emissive),D=new dm(B,z)}else B._solid!==void 0&&(F.side=B._solid?ln:qt),B.attributes.color!==void 0&&(F.vertexColors=!0),D=new kt(B,F)}else D=new ut,D.visible=!1;return D}function g(P){let A=new Im,F;const B=P.fields;for(let D=0,X=B.length;D<X;D++){const z=B[D],q=z.name,oe=z.values;switch(q){case"material":if(oe[0]!==null){const le=a(oe[0]);le.diffuseColor&&A.color.copy(le.diffuseColor),le.emissiveColor&&A.emissive.copy(le.emissiveColor),le.shininess&&(A.shininess=le.shininess),le.specularColor&&A.specular.copy(le.specularColor),le.transparency&&(A.opacity=1-le.transparency),le.transparency>0&&(A.transparent=!0)}else A=new hi({name:sn.DEFAULT_MATERIAL_NAME,color:0});break;case"texture":const he=oe[0];he!==null&&(he.name==="ImageTexture"||he.name==="PixelTexture")&&(A.map=a(he));break;case"textureTransform":oe[0]!==null&&(F=a(oe[0]));break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}if(A.map){if(A.map.__type){switch(A.map.__type){case Ht.INTENSITY_ALPHA:A.opacity=1;break;case Ht.RGB:A.color.set(16777215);break;case Ht.RGBA:A.color.set(16777215),A.opacity=1;break}delete A.map.__type}F&&(A.map.center.copy(F.center),A.map.rotation=F.rotation,A.map.repeat.copy(F.scale),A.map.offset.copy(F.translation))}return A}function _(P){const A={},F=P.fields;for(let B=0,D=F.length;B<D;B++){const X=F[B],z=X.name,q=X.values;switch(z){case"ambientIntensity":break;case"diffuseColor":A.diffuseColor=new Je(q[0],q[1],q[2]),A.diffuseColor.convertSRGBToLinear();break;case"emissiveColor":A.emissiveColor=new Je(q[0],q[1],q[2]),A.emissiveColor.convertSRGBToLinear();break;case"shininess":A.shininess=q[0];break;case"specularColor":A.specularColor=new Je(q[0],q[1],q[2]),A.specularColor.convertSRGBToLinear();break;case"transparency":A.transparency=q[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return A}function u(P,A,F){let B;switch(A){case Ht.INTENSITY:B=parseInt(P),F.r=B,F.g=B,F.b=B,F.a=1;break;case Ht.INTENSITY_ALPHA:B=parseInt("0x"+P.substring(2,4)),F.r=B,F.g=B,F.b=B,F.a=parseInt("0x"+P.substring(4,6));break;case Ht.RGB:F.r=parseInt("0x"+P.substring(2,4)),F.g=parseInt("0x"+P.substring(4,6)),F.b=parseInt("0x"+P.substring(6,8)),F.a=1;break;case Ht.RGBA:F.r=parseInt("0x"+P.substring(2,4)),F.g=parseInt("0x"+P.substring(4,6)),F.b=parseInt("0x"+P.substring(6,8)),F.a=parseInt("0x"+P.substring(8,10));break}}function h(P){let A;switch(P){case 1:A=Ht.INTENSITY;break;case 2:A=Ht.INTENSITY_ALPHA;break;case 3:A=Ht.RGB;break;case 4:A=Ht.RGBA;break}return A}function E(P){let A,F=Un,B=Un;const D=P.fields;for(let X=0,z=D.length;X<z;X++){const q=D[X],oe=q.name,he=q.values;switch(oe){case"image":const le=he[0],Se=he[1],Pe=he[2],He=h(Pe),we=new Uint8Array(4*le*Se),T={r:0,g:0,b:0,a:0};for(let Y=3,te=0,ge=he.length;Y<ge;Y++,te++){u(he[Y],He,T);const ve=te*4;we[ve+0]=T.r,we[ve+1]=T.g,we[ve+2]=T.b,we[ve+3]=T.a}A=new hm(we,le,Se),A.colorSpace=Ut,A.needsUpdate=!0,A.__type=He;break;case"repeatS":he[0]===!1&&(F=Xt);break;case"repeatT":he[0]===!1&&(B=Xt);break;default:console.warn("THREE.VRMLLoader: Unknown field:",oe);break}}return A&&(A.wrapS=F,A.wrapT=B),A}function x(P){let A,F=Un,B=Un;const D=P.fields;for(let X=0,z=D.length;X<z;X++){const q=D[X],oe=q.name,he=q.values;switch(oe){case"url":const le=he[0];le&&(A=M.load(le));break;case"repeatS":he[0]===!1&&(F=Xt);break;case"repeatT":he[0]===!1&&(B=Xt);break;default:console.warn("THREE.VRMLLoader: Unknown field:",oe);break}}return A&&(A.wrapS=F,A.wrapT=B,A.colorSpace=Ut),A}function v(P){const A={center:new Ve,rotation:new Ve,scale:new Ve,translation:new Ve},F=P.fields;for(let B=0,D=F.length;B<D;B++){const X=F[B],z=X.name,q=X.values;switch(z){case"center":A.center.set(q[0],q[1]);break;case"rotation":A.rotation=q[0];break;case"scale":A.scale.set(q[0],q[1]);break;case"translation":A.translation.set(q[0],q[1]);break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return A}function L(P){return P.fields[0].values}function b(P){const A={},F=P.fields;for(let B=0,D=F.length;B<D;B++){const X=F[B],z=X.name,q=X.values;switch(z){case"title":A.title=q[0];break;case"info":A.info=q;break;default:console.warn("THREE.VRMLLoader: Unknown field:",z);break}}return A}function R(P){let A,F,B,D,X=!0,z=!0,q=0,oe,he,le,Se,Pe=!0,He=!0;const we=P.fields;for(let Oe=0,qe=we.length;Oe<qe;Oe++){const et=we[Oe],Ne=et.name,Me=et.values;switch(Ne){case"color":const Te=Me[0];Te!==null&&(A=a(Te));break;case"coord":const be=Me[0];be!==null&&(F=a(be));break;case"normal":const Le=Me[0];Le!==null&&(B=a(Le));break;case"texCoord":const Fe=Me[0];Fe!==null&&(D=a(Fe));break;case"ccw":X=Me[0];break;case"colorIndex":oe=Me;break;case"colorPerVertex":Pe=Me[0];break;case"convex":break;case"coordIndex":he=Me;break;case"creaseAngle":q=Me[0];break;case"normalIndex":le=Me;break;case"normalPerVertex":He=Me[0];break;case"solid":z=Me[0];break;case"texCoordIndex":Se=Me;break;default:console.warn("THREE.VRMLLoader: Unknown field:",Ne);break}}if(he===void 0)return console.warn("THREE.VRMLLoader: Missing coordIndex."),new _t;const T=W(he,X);let Y,te,ge;if(A){if(Pe===!0)if(oe&&oe.length>0){const Oe=W(oe,X);Y=me(T,Oe,A,3)}else Y=Ee(T,new tt(A,3));else if(oe&&oe.length>0){const Oe=ae(A,oe),qe=ie(Oe,he);Y=G(T,qe)}else{const Oe=ie(A,he);Y=G(T,Oe)}fe(Y)}if(B)if(He===!0)if(le&&le.length>0){const Oe=W(le,X);te=me(T,Oe,B,3)}else te=Ee(T,new tt(B,3));else if(le&&le.length>0){const Oe=ae(B,le),qe=ie(Oe,he);te=G(T,qe)}else{const Oe=ie(B,he);te=G(T,Oe)}else te=Ge(T,F,q);if(D)if(Se&&Se.length>0){const Oe=W(Se,X);ge=me(T,Oe,D,2)}else ge=Ee(T,new tt(D,2));const ve=new _t,De=Ee(T,new tt(F,3));return ve.setAttribute("position",De),ve.setAttribute("normal",te),Y&&ve.setAttribute("color",Y),ge&&ve.setAttribute("uv",ge),ve._solid=z,ve._type="mesh",ve}function k(P){let A,F,B,D,X=!0;const z=P.fields;for(let Se=0,Pe=z.length;Se<Pe;Se++){const He=z[Se],we=He.name,T=He.values;switch(we){case"color":const Y=T[0];Y!==null&&(A=a(Y));break;case"coord":const te=T[0];te!==null&&(F=a(te));break;case"colorIndex":B=T;break;case"colorPerVertex":X=T[0];break;case"coordIndex":D=T;break;default:console.warn("THREE.VRMLLoader: Unknown field:",we);break}}let q;const oe=_e(D);if(A){if(X===!0)if(B.length>0){const Se=_e(B);q=me(oe,Se,A,3)}else q=Ee(oe,new tt(A,3));else if(B.length>0){const Se=ae(A,B),Pe=ye(Se,D);q=Re(oe,Pe)}else{const Se=ye(A,D);q=Re(oe,Se)}fe(q)}const he=new _t,le=Ee(oe,new tt(F,3));return he.setAttribute("position",le),q&&he.setAttribute("color",q),he._type="line",he}function y(P){let A,F;const B=P.fields;for(let X=0,z=B.length;X<z;X++){const q=B[X],oe=q.name,he=q.values;switch(oe){case"color":const le=he[0];le!==null&&(A=a(le));break;case"coord":const Se=he[0];Se!==null&&(F=a(Se));break;default:console.warn("THREE.VRMLLoader: Unknown field:",oe);break}}const D=new _t;if(D.setAttribute("position",new tt(F,3)),A){const X=new tt(A,3);fe(X),D.setAttribute("color",X)}return D._type="points",D}function S(P){const A=new ee(2,2,2),F=P.fields;for(let D=0,X=F.length;D<X;D++){const z=F[D],q=z.name,oe=z.values;switch(q){case"size":A.x=oe[0],A.y=oe[1],A.z=oe[2];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new Mi(A.x,A.y,A.z)}function N(P){let A=1,F=2,B=!1;const D=P.fields;for(let z=0,q=D.length;z<q;z++){const oe=D[z],he=oe.name,le=oe.values;switch(he){case"bottom":B=!le[0];break;case"bottomRadius":A=le[0];break;case"height":F=le[0];break;case"side":break;default:console.warn("THREE.VRMLLoader: Unknown field:",he);break}}return new qo(A,F,16,1,B)}function I(P){let A=1,F=2;const B=P.fields;for(let X=0,z=B.length;X<z;X++){const q=B[X],oe=q.name,he=q.values;switch(oe){case"bottom":break;case"radius":A=he[0];break;case"height":F=he[0];break;case"side":break;case"top":break;default:console.warn("THREE.VRMLLoader: Unknown field:",oe);break}}return new Br(A,A,F,16,1)}function w(P){let A=1;const F=P.fields;for(let D=0,X=F.length;D<X;D++){const z=F[D],q=z.name,oe=z.values;switch(q){case"radius":A=oe[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",q);break}}return new Ui(A,16,16)}function U(P){let A,F,B,D,X=!0,z=!0,q=!0,oe=!0,he=0,le=2,Se=2,Pe=1,He=1;const we=P.fields;for(let Me=0,Te=we.length;Me<Te;Me++){const be=we[Me],Le=be.name,Fe=be.values;switch(Le){case"color":const nt=Fe[0];nt!==null&&(A=a(nt));break;case"normal":const bt=Fe[0];bt!==null&&(F=a(bt));break;case"texCoord":const wt=Fe[0];wt!==null&&(B=a(wt));break;case"height":D=Fe;break;case"ccw":oe=Fe[0];break;case"colorPerVertex":X=Fe[0];break;case"creaseAngle":he=Fe[0];break;case"normalPerVertex":z=Fe[0];break;case"solid":q=Fe[0];break;case"xDimension":le=Fe[0];break;case"xSpacing":Pe=Fe[0];break;case"zDimension":Se=Fe[0];break;case"zSpacing":He=Fe[0];break;default:console.warn("THREE.VRMLLoader: Unknown field:",Le);break}}const T=[],Y=[],te=[],ge=[];for(let Me=0;Me<Se;Me++)for(let Te=0;Te<le;Te++){const be=Me*le+Te,Le=Pe*Me,Fe=D[be],nt=He*Te;if(T.push(Le,Fe,nt),A&&X===!0){const bt=A[be*3+0],wt=A[be*3+1],Wn=A[be*3+2];te.push(bt,wt,Wn)}if(F&&z===!0){const bt=F[be*3+0],wt=F[be*3+1],Wn=F[be*3+2];Y.push(bt,wt,Wn)}if(B){const bt=B[be*2+0],wt=B[be*2+1];ge.push(bt,wt)}else ge.push(Me/(le-1),Te/(Se-1))}const ve=[];for(let Me=0;Me<le-1;Me++)for(let Te=0;Te<Se-1;Te++){const be=Me+Te*le,Le=Me+(Te+1)*le,Fe=Me+1+(Te+1)*le,nt=Me+1+Te*le;oe===!0?(ve.push(be,Fe,Le),ve.push(Fe,be,nt)):(ve.push(be,Le,Fe),ve.push(Fe,nt,be))}const De=Ee(ve,new tt(T,3)),Oe=Ee(ve,new tt(ge,2));let qe,et;if(A){if(X===!1){for(let Me=0;Me<le-1;Me++)for(let Te=0;Te<Se-1;Te++){const be=Me+Te*(le-1),Le=A[be*3+0],Fe=A[be*3+1],nt=A[be*3+2];te.push(Le,Fe,nt),te.push(Le,Fe,nt),te.push(Le,Fe,nt),te.push(Le,Fe,nt),te.push(Le,Fe,nt),te.push(Le,Fe,nt)}qe=new tt(te,3)}else qe=Ee(ve,new tt(te,3));fe(qe)}if(F)if(z===!1){for(let Me=0;Me<le-1;Me++)for(let Te=0;Te<Se-1;Te++){const be=Me+Te*(le-1),Le=F[be*3+0],Fe=F[be*3+1],nt=F[be*3+2];Y.push(Le,Fe,nt),Y.push(Le,Fe,nt),Y.push(Le,Fe,nt),Y.push(Le,Fe,nt),Y.push(Le,Fe,nt),Y.push(Le,Fe,nt)}et=new tt(Y,3)}else et=Ee(ve,new tt(Y,3));else et=Ge(ve,T,he);const Ne=new _t;return Ne.setAttribute("position",De),Ne.setAttribute("normal",et),Ne.setAttribute("uv",Oe),qe&&Ne.setAttribute("color",qe),Ne._solid=q,Ne._type="mesh",Ne}function H(P){let A=[1,1,1,-1,-1,-1,-1,1,1,1],F=[0,0,0,0,1,0],B,D,X=!0,z=!0,q=0,oe=!0,he=!0;const le=P.fields;for(let Ne=0,Me=le.length;Ne<Me;Ne++){const Te=le[Ne],be=Te.name,Le=Te.values;switch(be){case"beginCap":X=Le[0];break;case"ccw":z=Le[0];break;case"convex":break;case"creaseAngle":q=Le[0];break;case"crossSection":A=Le;break;case"endCap":oe=Le[0];break;case"orientation":D=Le;break;case"scale":B=Le;break;case"solid":he=Le[0];break;case"spine":F=Le;break;default:console.warn("THREE.VRMLLoader: Unknown field:",be);break}}const Se=A[0]===A[A.length-2]&&A[1]===A[A.length-1],Pe=[],He=new ee,we=new ee,T=new ee,Y=new ee,te=new Tn;for(let Ne=0,Me=0,Te=0,be=F.length;Ne<be;Ne+=3,Me+=2,Te+=4){He.fromArray(F,Ne),we.x=B?B[Me+0]:1,we.y=1,we.z=B?B[Me+1]:1,T.x=D?D[Te+0]:0,T.y=D?D[Te+1]:0,T.z=D?D[Te+2]:1;const Le=D?D[Te+3]:0;for(let Fe=0,nt=A.length;Fe<nt;Fe+=2)Y.x=A[Fe+0],Y.y=0,Y.z=A[Fe+1],Y.multiply(we),te.setFromAxisAngle(T,Le),Y.applyQuaternion(te),Y.add(He),Pe.push(Y.x,Y.y,Y.z)}const ge=[],ve=F.length/3,De=A.length/2;for(let Ne=0;Ne<ve-1;Ne++)for(let Me=0;Me<De-1;Me++){const Te=Me+Ne*De;let be=Me+1+Ne*De;const Le=Me+(Ne+1)*De;let Fe=Me+1+(Ne+1)*De;Me===De-2&&Se===!0&&(be=Ne*De,Fe=(Ne+1)*De),z===!0?(ge.push(Te,be,Le),ge.push(Le,be,Fe)):(ge.push(Te,Le,be),ge.push(Le,Fe,be))}if(X===!0||oe===!0){const Ne=[];for(let be=0,Le=A.length;be<Le;be+=2)Ne.push(new Ve(A[be],A[be+1]));const Me=Ko.triangulateShape(Ne,[]),Te=[];for(let be=0,Le=Me.length;be<Le;be++){const Fe=Me[be];Te.push(Fe[0],Fe[1],Fe[2])}if(X===!0)for(let be=0,Le=Te.length;be<Le;be+=3)z===!0?ge.push(Te[be+0],Te[be+1],Te[be+2]):ge.push(Te[be+0],Te[be+2],Te[be+1]);if(oe===!0){const be=De*(ve-1);for(let Le=0,Fe=Te.length;Le<Fe;Le+=3)z===!0?ge.push(be+Te[Le+0],be+Te[Le+2],be+Te[Le+1]):ge.push(be+Te[Le+0],be+Te[Le+1],be+Te[Le+2])}}const Oe=Ee(ge,new tt(Pe,3)),qe=Ge(ge,Pe,q),et=new _t;return et.setAttribute("position",Oe),et.setAttribute("normal",qe),et._solid=he,et._type="mesh",et}function Z(P){const A=i[P],F=a(A);return F.isObject3D||F.isMaterial?F.clone():F}function j(P,A){for(let F=0,B=P.length;F<B;F++){const D=a(P[F]);D instanceof ut&&A.add(D)}}function W(P,A){const F=[];let B=0;for(let D=0,X=P.length;D<X;D++){const z=P[B],q=P[D+(A?1:2)],oe=P[D+(A?2:1)];F.push(z,q,oe),(P[D+3]===-1||D+3>=X)&&(D+=3,B=D+1)}return F}function ie(P,A){const F=[];let B=0;for(let D=0,X=A.length;D<X;D++){const z=B*3,q=P[z],oe=P[z+1],he=P[z+2];F.push(q,oe,he),(A[D+3]===-1||D+3>=X)&&(D+=3,B++)}return F}function ae(P,A){const F=[];for(let B=0,D=A.length;B<D;B++){const z=A[B]*3,q=P[z],oe=P[z+1],he=P[z+2];F.push(q,oe,he)}return F}function _e(P){const A=[];for(let F=0,B=P.length;F<B;F++){const D=P[F],X=P[F+1];A.push(D,X),(P[F+2]===-1||F+2>=B)&&(F+=2)}return A}function ye(P,A){const F=[];let B=0;for(let D=0,X=A.length;D<X;D++){const z=B*3,q=P[z],oe=P[z+1],he=P[z+2];F.push(q,oe,he),(A[D+2]===-1||D+2>=X)&&(D+=2,B++)}return F}const xe=new ee,ne=new ee,V=new ee,Q=new Ve,$=new Ve,pe=new Ve;function me(P,A,F,B){const D=[];for(let X=0,z=P.length;X<z;X+=3){const q=A[X],oe=A[X+1],he=A[X+2];B===2?(Q.fromArray(F,q*B),$.fromArray(F,oe*B),pe.fromArray(F,he*B),D.push(Q.x,Q.y),D.push($.x,$.y),D.push(pe.x,pe.y)):(xe.fromArray(F,q*B),ne.fromArray(F,oe*B),V.fromArray(F,he*B),D.push(xe.x,xe.y,xe.z),D.push(ne.x,ne.y,ne.z),D.push(V.x,V.y,V.z))}return new tt(D,B)}function G(P,A){const F=[];for(let B=0,D=0,X=P.length;B<X;B+=3,D++)xe.fromArray(A,D*3),F.push(xe.x,xe.y,xe.z),F.push(xe.x,xe.y,xe.z),F.push(xe.x,xe.y,xe.z);return new tt(F,3)}function Re(P,A){const F=[];for(let B=0,D=0,X=P.length;B<X;B+=2,D++)xe.fromArray(A,D*3),F.push(xe.x,xe.y,xe.z),F.push(xe.x,xe.y,xe.z);return new tt(F,3)}function Ee(P,A){const F=A.array,B=A.itemSize,D=new F.constructor(P.length*B);let X=0,z=0;for(let q=0,oe=P.length;q<oe;q++){X=P[q]*B;for(let he=0;he<B;he++)D[z++]=F[X++]}return new tt(D,B)}const Be=new ee,Ie=new ee;function Ge(P,A,F){const B=[],D={};for(let z=0,q=P.length;z<q;z+=3){const oe=P[z],he=P[z+1],le=P[z+2],Se=new fg(oe,he,le);xe.fromArray(A,oe*3),ne.fromArray(A,he*3),V.fromArray(A,le*3),Ie.subVectors(V,ne),Be.subVectors(xe,ne),Ie.cross(Be),Ie.normalize(),Se.normal.copy(Ie),D[oe]===void 0&&(D[oe]=[]),D[he]===void 0&&(D[he]=[]),D[le]===void 0&&(D[le]=[]),D[oe].push(Se.normal),D[he].push(Se.normal),D[le].push(Se.normal),B.push(Se)}const X=[];for(let z=0,q=B.length;z<q;z++){const oe=B[z],he=Ue(D[oe.a],oe.normal,F),le=Ue(D[oe.b],oe.normal,F),Se=Ue(D[oe.c],oe.normal,F);xe.fromArray(A,oe.a*3),ne.fromArray(A,oe.b*3),V.fromArray(A,oe.c*3),X.push(he.x,he.y,he.z),X.push(le.x,le.y,le.z),X.push(Se.x,Se.y,Se.z)}return new tt(X,3)}function Ue(P,A,F){const B=new ee;if(F===0)B.copy(A);else for(let D=0,X=P.length;D<X;D++)P[D].angleTo(A)<F&&B.add(P[D]);return B.normalize()}function J(P){const A=[];for(let F=0,B=P.length;F<B;F+=3)A.push(new Je(P[F],P[F+1],P[F+2]));return A}function fe(P){const A=new Je;for(let F=0;F<P.count;F++)A.fromBufferAttribute(P,F),A.convertSRGBToLinear(),P.setXYZ(F,A.r,A.g,A.b)}function C(P,A,F,B,D){const X=[],z=D===!0?0:Math.PI;for(let Pe=0,He=B.length;Pe<He;Pe++){let we=Pe===0?0:F[Pe-1];we=D===!0?we:z-we;const T=new ee;T.setFromSphericalCoords(A,we,0),X.push(T)}const q=P.index,oe=P.attributes.position,he=new Yt(new Float32Array(P.attributes.position.count*3),3),le=new ee,Se=new Je;for(let Pe=0;Pe<q.count;Pe++){const He=q.getX(Pe);le.fromBufferAttribute(oe,He);let we,T,Y=1;for(let ve=1;ve<X.length;ve++){we=ve-1,T=ve;const De=X[we],Oe=X[T];if(D===!0){if(le.y<=De.y&&le.y>Oe.y){Y=Math.abs(De.y-le.y)/Math.abs(De.y-Oe.y);break}}else if(le.y>=De.y&&le.y<Oe.y){Y=Math.abs(De.y-le.y)/Math.abs(De.y-Oe.y);break}}const te=B[we],ge=B[T];Se.copy(te).lerp(ge,Y).convertSRGBToLinear(),he.setXYZ(He,Se.r,Se.g,Se.b)}P.setAttribute("color",he)}const M=new km(this.manager);if(M.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin),e.indexOf("#VRML V2.0")===-1)throw Error("THREE.VRMLLexer: Version of VRML asset not supported.");const K=r(e);return c(K)}}class lg{constructor(e){this.lexer=new Fi.Lexer(e)}lex(e){const t=this.lexer.tokenize(e);if(t.errors.length>0)throw console.error(t.errors),Error("THREE.VRMLLexer: Lexing errors detected.");return t}}const ug=Fi.CstParser;class hg extends ug{constructor(e){super(e);const t=this,i=e.Version,r=e.LCurly,o=e.RCurly,s=e.LSquare,c=e.RSquare,l=e.Identifier,a=e.RouteIdentifier,f=e.StringLiteral,d=e.HexLiteral,p=e.NumberLiteral,m=e.TrueLiteral,g=e.FalseLiteral,_=e.NullLiteral,u=e.DEF,h=e.USE,E=e.ROUTE,x=e.TO,v=e.NodeName;t.RULE("vrml",function(){t.SUBRULE(t.version),t.AT_LEAST_ONE(function(){t.SUBRULE(t.node)}),t.MANY(function(){t.SUBRULE(t.route)})}),t.RULE("version",function(){t.CONSUME(i)}),t.RULE("node",function(){t.OPTION(function(){t.SUBRULE(t.def)}),t.CONSUME(v),t.CONSUME(r),t.MANY(function(){t.SUBRULE(t.field)}),t.CONSUME(o)}),t.RULE("field",function(){t.CONSUME(l),t.OR2([{ALT:function(){t.SUBRULE(t.singleFieldValue)}},{ALT:function(){t.SUBRULE(t.multiFieldValue)}}])}),t.RULE("def",function(){t.CONSUME(u),t.OR([{ALT:function(){t.CONSUME(l)}},{ALT:function(){t.CONSUME(v)}}])}),t.RULE("use",function(){t.CONSUME(h),t.OR([{ALT:function(){t.CONSUME(l)}},{ALT:function(){t.CONSUME(v)}}])}),t.RULE("singleFieldValue",function(){t.AT_LEAST_ONE(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(f)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(m)}},{ALT:function(){t.CONSUME(g)}},{ALT:function(){t.CONSUME(_)}}])})}),t.RULE("multiFieldValue",function(){t.CONSUME(s),t.MANY(function(){t.OR([{ALT:function(){t.SUBRULE(t.node)}},{ALT:function(){t.SUBRULE(t.use)}},{ALT:function(){t.CONSUME(f)}},{ALT:function(){t.CONSUME(d)}},{ALT:function(){t.CONSUME(p)}},{ALT:function(){t.CONSUME(_)}}])}),t.CONSUME(c)}),t.RULE("route",function(){t.CONSUME(E),t.CONSUME(a),t.CONSUME(x),t.CONSUME2(a)}),this.performSelfAnalysis()}}class fg{constructor(e,t,i){this.a=e,this.b=t,this.c=i,this.normal=new ee}}const Ht={INTENSITY:1,INTENSITY_ALPHA:2,RGB:3,RGBA:4},Us={type:"change"},Io={type:"start"},Fs={type:"end"},Tr=new Ur,ks=new _n,dg=Math.cos(70*eu.DEG2RAD);class pg extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",X),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",X),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Us),i.update(),o=r.NONE},this.update=function(){const T=new ee,Y=new Tn().setFromUnitVectors(e.up,new ee(0,1,0)),te=Y.clone().invert(),ge=new ee,ve=new Tn,De=new ee,Oe=2*Math.PI;return function(et=null){const Ne=i.object.position;T.copy(Ne).sub(i.target),T.applyQuaternion(Y),c.setFromVector3(T),i.autoRotate&&o===r.NONE&&I(S(et)),i.enableDamping?(c.theta+=l.theta*i.dampingFactor,c.phi+=l.phi*i.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let Me=i.minAzimuthAngle,Te=i.maxAzimuthAngle;isFinite(Me)&&isFinite(Te)&&(Me<-Math.PI?Me+=Oe:Me>Math.PI&&(Me-=Oe),Te<-Math.PI?Te+=Oe:Te>Math.PI&&(Te-=Oe),Me<=Te?c.theta=Math.max(Me,Math.min(Te,c.theta)):c.theta=c.theta>(Me+Te)/2?Math.max(Me,c.theta):Math.min(Te,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let be=!1;if(i.zoomToCursor&&b||i.object.isOrthographicCamera)c.radius=ae(c.radius);else{const Le=c.radius;c.radius=ae(c.radius*a),be=Le!=c.radius}if(T.setFromSpherical(c),T.applyQuaternion(te),Ne.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&b){let Le=null;if(i.object.isPerspectiveCamera){const Fe=T.length();Le=ae(Fe*a);const nt=Fe-Le;i.object.position.addScaledVector(v,nt),i.object.updateMatrixWorld(),be=!!nt}else if(i.object.isOrthographicCamera){const Fe=new ee(L.x,L.y,0);Fe.unproject(i.object);const nt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/a)),i.object.updateProjectionMatrix(),be=nt!==i.object.zoom;const bt=new ee(L.x,L.y,0);bt.unproject(i.object),i.object.position.sub(bt).add(Fe),i.object.updateMatrixWorld(),Le=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Le!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Le).add(i.object.position):(Tr.origin.copy(i.object.position),Tr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Tr.direction))<dg?e.lookAt(i.target):(ks.setFromNormalAndCoplanarPoint(i.object.up,i.target),Tr.intersectPlane(ks,i.target))))}else if(i.object.isOrthographicCamera){const Le=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/a)),Le!==i.object.zoom&&(i.object.updateProjectionMatrix(),be=!0)}return a=1,b=!1,be||ge.distanceToSquared(i.object.position)>s||8*(1-ve.dot(i.object.quaternion))>s||De.distanceToSquared(i.target)>s?(i.dispatchEvent(Us),ge.copy(i.object.position),ve.copy(i.object.quaternion),De.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",K),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",K),i.domElement.getRootNode().removeEventListener("keydown",B,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",X),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,c=new Ds,l=new Ds;let a=1;const f=new ee,d=new Ve,p=new Ve,m=new Ve,g=new Ve,_=new Ve,u=new Ve,h=new Ve,E=new Ve,x=new Ve,v=new ee,L=new Ve;let b=!1;const R=[],k={};let y=!1;function S(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function N(T){const Y=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*Y)}function I(T){l.theta-=T}function w(T){l.phi-=T}const U=function(){const T=new ee;return function(te,ge){T.setFromMatrixColumn(ge,0),T.multiplyScalar(-te),f.add(T)}}(),H=function(){const T=new ee;return function(te,ge){i.screenSpacePanning===!0?T.setFromMatrixColumn(ge,1):(T.setFromMatrixColumn(ge,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(te),f.add(T)}}(),Z=function(){const T=new ee;return function(te,ge){const ve=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;T.copy(De).sub(i.target);let Oe=T.length();Oe*=Math.tan(i.object.fov/2*Math.PI/180),U(2*te*Oe/ve.clientHeight,i.object.matrix),H(2*ge*Oe/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(te*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),H(ge*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?a/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?a*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(T,Y){if(!i.zoomToCursor)return;b=!0;const te=i.domElement.getBoundingClientRect(),ge=T-te.left,ve=Y-te.top,De=te.width,Oe=te.height;L.x=ge/De*2-1,L.y=-(ve/Oe)*2+1,v.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function _e(T){d.set(T.clientX,T.clientY)}function ye(T){ie(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function xe(T){g.set(T.clientX,T.clientY)}function ne(T){p.set(T.clientX,T.clientY),m.subVectors(p,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;I(2*Math.PI*m.x/Y.clientHeight),w(2*Math.PI*m.y/Y.clientHeight),d.copy(p),i.update()}function V(T){E.set(T.clientX,T.clientY),x.subVectors(E,h),x.y>0?j(N(x.y)):x.y<0&&W(N(x.y)),h.copy(E),i.update()}function Q(T){_.set(T.clientX,T.clientY),u.subVectors(_,g).multiplyScalar(i.panSpeed),Z(u.x,u.y),g.copy(_),i.update()}function $(T){ie(T.clientX,T.clientY),T.deltaY<0?W(N(T.deltaY)):T.deltaY>0&&j(N(T.deltaY)),i.update()}function pe(T){let Y=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),Y=!0;break}Y&&(T.preventDefault(),i.update())}function me(T){if(R.length===1)d.set(T.pageX,T.pageY);else{const Y=He(T),te=.5*(T.pageX+Y.x),ge=.5*(T.pageY+Y.y);d.set(te,ge)}}function G(T){if(R.length===1)g.set(T.pageX,T.pageY);else{const Y=He(T),te=.5*(T.pageX+Y.x),ge=.5*(T.pageY+Y.y);g.set(te,ge)}}function Re(T){const Y=He(T),te=T.pageX-Y.x,ge=T.pageY-Y.y,ve=Math.sqrt(te*te+ge*ge);h.set(0,ve)}function Ee(T){i.enableZoom&&Re(T),i.enablePan&&G(T)}function Be(T){i.enableZoom&&Re(T),i.enableRotate&&me(T)}function Ie(T){if(R.length==1)p.set(T.pageX,T.pageY);else{const te=He(T),ge=.5*(T.pageX+te.x),ve=.5*(T.pageY+te.y);p.set(ge,ve)}m.subVectors(p,d).multiplyScalar(i.rotateSpeed);const Y=i.domElement;I(2*Math.PI*m.x/Y.clientHeight),w(2*Math.PI*m.y/Y.clientHeight),d.copy(p)}function Ge(T){if(R.length===1)_.set(T.pageX,T.pageY);else{const Y=He(T),te=.5*(T.pageX+Y.x),ge=.5*(T.pageY+Y.y);_.set(te,ge)}u.subVectors(_,g).multiplyScalar(i.panSpeed),Z(u.x,u.y),g.copy(_)}function Ue(T){const Y=He(T),te=T.pageX-Y.x,ge=T.pageY-Y.y,ve=Math.sqrt(te*te+ge*ge);E.set(0,ve),x.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),j(x.y),h.copy(E);const De=(T.pageX+Y.x)*.5,Oe=(T.pageY+Y.y)*.5;ie(De,Oe)}function J(T){i.enableZoom&&Ue(T),i.enablePan&&Ge(T)}function fe(T){i.enableZoom&&Ue(T),i.enableRotate&&Ie(T)}function C(T){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",K)),!Se(T)&&(he(T),T.pointerType==="touch"?z(T):ue(T)))}function M(T){i.enabled!==!1&&(T.pointerType==="touch"?q(T):P(T))}function K(T){switch(le(T),R.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",K),i.dispatchEvent(Fs),o=r.NONE;break;case 1:const Y=R[0],te=k[Y];z({pointerId:Y,pageX:te.x,pageY:te.y});break}}function ue(T){let Y;switch(T.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Xn.DOLLY:if(i.enableZoom===!1)return;ye(T),o=r.DOLLY;break;case Xn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;xe(T),o=r.PAN}else{if(i.enableRotate===!1)return;_e(T),o=r.ROTATE}break;case Xn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;_e(T),o=r.ROTATE}else{if(i.enablePan===!1)return;xe(T),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Io)}function P(T){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ne(T);break;case r.DOLLY:if(i.enableZoom===!1)return;V(T);break;case r.PAN:if(i.enablePan===!1)return;Q(T);break}}function A(T){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(T.preventDefault(),i.dispatchEvent(Io),$(F(T)),i.dispatchEvent(Fs))}function F(T){const Y=T.deltaMode,te={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(Y){case 1:te.deltaY*=16;break;case 2:te.deltaY*=100;break}return T.ctrlKey&&!y&&(te.deltaY*=10),te}function B(T){T.key==="Control"&&(y=!0,i.domElement.getRootNode().addEventListener("keyup",D,{passive:!0,capture:!0}))}function D(T){T.key==="Control"&&(y=!1,i.domElement.getRootNode().removeEventListener("keyup",D,{passive:!0,capture:!0}))}function X(T){i.enabled===!1||i.enablePan===!1||pe(T)}function z(T){switch(Pe(T),R.length){case 1:switch(i.touches.ONE){case Yn.ROTATE:if(i.enableRotate===!1)return;me(T),o=r.TOUCH_ROTATE;break;case Yn.PAN:if(i.enablePan===!1)return;G(T),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Yn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(T),o=r.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(T),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Io)}function q(T){switch(Pe(T),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ge(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(T),i.update();break;default:o=r.NONE}}function oe(T){i.enabled!==!1&&T.preventDefault()}function he(T){R.push(T.pointerId)}function le(T){delete k[T.pointerId];for(let Y=0;Y<R.length;Y++)if(R[Y]==T.pointerId){R.splice(Y,1);return}}function Se(T){for(let Y=0;Y<R.length;Y++)if(R[Y]==T.pointerId)return!0;return!1}function Pe(T){let Y=k[T.pointerId];Y===void 0&&(Y=new Ve,k[T.pointerId]=Y),Y.set(T.pageX,T.pageY)}function He(T){const Y=T.pointerId===R[0]?R[1]:R[0];return k[Y]}i.domElement.addEventListener("contextmenu",oe),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",A,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",B,{passive:!0,capture:!0}),this.update()}}const Yr=new pc,jr=new Ft(75,window.innerWidth/window.innerHeight,.1,1e3),qr=new um;qr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(qr.domElement);const Hn=new pg(jr,qr.domElement);Hn.enableDamping=!0;Hn.dampingFactor=.05;Hn.enableZoom=!1;Hn.enablePan=!1;Hn.enableRotate=!0;Hn.rotateSpeed=.6;const Cc=new Gm(16777215,1);Cc.position.set(0,0,18);Yr.add(Cc);const mg=new cg;mg.load("asset/3D model/stm32_buck_usb.wrl",function(n){n.scale.set(1,1,1);const t=new Ti().setFromObject(n).getCenter(new ee);n.position.x+=n.position.x-t.x,n.position.y+=n.position.y-t.y,n.position.z+=n.position.z-t.z,Yr.add(n)},function(n){console.log(n.loaded/n.total*100+"% loaded")},function(n){console.error("An error occurred while loading the VRML model:",n)});jr.position.z=55;jr.lookAt(Yr.position);function wc(){requestAnimationFrame(wc),Hn.update(),qr.render(Yr,jr)}wc();
