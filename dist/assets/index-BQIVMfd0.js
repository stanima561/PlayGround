(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er="169",Ch=0,Er=1,Ph=2,Ol=1,Lh=2,Ci=3,Ki=0,Oe=1,ve=2,qi=0,dn=1,Fe=2,Tr=3,Ar=4,Ih=5,rn=100,Dh=101,Uh=102,Nh=103,kh=104,Fh=200,Bh=201,Oh=202,zh=203,lo=204,ho=205,Hh=206,Gh=207,Vh=208,Wh=209,Xh=210,qh=211,Yh=212,$h=213,Kh=214,co=0,uo=1,fo=2,Gn=3,po=4,mo=5,go=6,xo=7,zl=0,jh=1,Zh=2,Yi=0,Jh=1,Qh=2,tc=3,Hl=4,ec=5,ic=6,nc=7,Gl=300,Vn=301,Wn=302,vo=303,_o=304,ua=306,ia=1e3,hn=1001,yo=1002,Ke=1003,sc=1004,_s=1005,ui=1006,ba=1007,cn=1008,Di=1009,Vl=1010,Wl=1011,fs=1012,ir=1013,un=1014,vi=1015,ps=1016,nr=1017,sr=1018,Xn=1020,Xl=35902,ql=1021,Yl=1022,pi=1023,$l=1024,Kl=1025,zn=1026,qn=1027,ar=1028,or=1029,jl=1030,rr=1031,lr=1033,$s=33776,Ks=33777,js=33778,Zs=33779,wo=35840,Mo=35841,So=35842,bo=35843,Eo=36196,To=37492,Ao=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Io=37812,Do=37813,Uo=37814,No=37815,ko=37816,Fo=37817,Bo=37818,Oo=37819,zo=37820,Ho=37821,Js=36492,Go=36494,Vo=36495,Zl=36283,Wo=36284,Xo=36285,qo=36286,ac=3200,oc=3201,Jl=0,rc=1,Vi="",oi="srgb",ji="srgb-linear",hr="display-p3",fa="display-p3-linear",na="linear",ge="srgb",sa="rec709",aa="p3",_n=7680,Rr=519,lc=512,hc=513,cc=514,Ql=515,dc=516,uc=517,fc=518,pc=519,Yo=35044,Cr="300 es",Pi=2e3,oa=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,$o=180/Math.PI;function $i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function mc(s,t){return(s%t+t)%t}function Ta(s,t,e){return(1-e)*s+e*t}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,n,a,o,r,l,h){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,l,h)}set(t,e,i,n,a,o,r,l,h){const c=this.elements;return c[0]=t,c[1]=n,c[2]=r,c[3]=e,c[4]=a,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],m=i[5],g=i[8],v=n[0],p=n[3],f=n[6],w=n[1],_=n[4],y=n[7],A=n[2],T=n[5],S=n[8];return a[0]=o*v+r*w+l*A,a[3]=o*p+r*_+l*T,a[6]=o*f+r*y+l*S,a[1]=h*v+c*w+d*A,a[4]=h*p+c*_+d*T,a[7]=h*f+c*y+d*S,a[2]=u*v+m*w+g*A,a[5]=u*p+m*_+g*T,a[8]=u*f+m*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*r*h-i*a*c+i*r*l+n*a*h-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8],d=c*o-r*h,u=r*l-c*a,m=h*a-o*l,g=e*d+i*u+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*h-c*i)*v,t[2]=(r*i-n*o)*v,t[3]=u*v,t[4]=(c*e-n*l)*v,t[5]=(n*a-r*e)*v,t[6]=m*v,t[7]=(i*l-h*e)*v,t[8]=(o*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const l=Math.cos(a),h=Math.sin(a);return this.set(i*l,i*h,-i*(l*o+h*r)+o+t,-n*h,n*l,-n*(-h*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Vt;function th(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ra(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gc(){const s=ra("canvas");return s.style.display="block",s}const Pr={};function Qs(s){s in Pr||(Pr[s]=!0,console.warn(s))}function xc(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function vc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _c(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lr=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ir=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qn={[ji]:{transfer:na,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[oi]:{transfer:ge,primaries:sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fa]:{transfer:na,primaries:aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Ir),fromReference:s=>s.applyMatrix3(Lr)},[hr]:{transfer:ge,primaries:aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ir),fromReference:s=>s.applyMatrix3(Lr).convertLinearToSRGB()}},yc=new Set([ji,fa]),oe={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!yc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Qn[t].toReference,n=Qn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Qn[s].primaries},getTransfer:function(s){return s===Vi?na:Qn[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Qn[t].luminanceCoefficients)}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yn;class wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yn===void 0&&(yn=ra("canvas")),yn.width=t.width,yn.height=t.height;const i=yn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Hn(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mc=0;class eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Ca(n[o].image)):a.push(Ca(n[o]))}else a=Ca(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sc=0;class ze extends $n{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=hn,n=hn,a=ui,o=cn,r=pi,l=Di,h=ze.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=$i(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Gl;ze.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,n=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,y=(m+1)/2,A=(f+1)/2,T=(c+u)/4,S=(d+v)/4,R=(g+p)/4;return _>y&&_>A?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=T/i,a=S/i):y>A?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=T/n,a=R/n):A<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),i=S/a,n=R/a),this.set(i,n,a,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(u-c)/w,this.w=Math.acos((h+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bc extends $n{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends bc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ih extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ec extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3];const u=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];if(r===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||h!==m||c!==g){let p=1-r;const f=l*u+h*m+c*g+d*v,w=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,f*w);p=Math.sin(p*T)/A,r=Math.sin(r*T)/A}const y=r*w;if(l=l*p+u*y,h=h*p+m*y,c=c*p+g*y,d=d*p+v*y,p===1-r){const A=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=A,h*=A,c*=A,d*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=a[o],u=a[o+1],m=a[o+2],g=a[o+3];return t[e]=r*g+c*d+l*m-h*u,t[e+1]=l*g+c*u+h*d-r*m,t[e+2]=h*g+c*m+r*u-l*d,t[e+3]=c*g-r*d-l*u-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,h=r(i/2),c=r(n/2),d=r(a/2),u=l(i/2),m=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=u*c*d+h*m*g,this._y=h*m*d-u*c*g,this._z=h*c*g+u*m*d,this._w=h*c*d-u*m*g;break;case"YXZ":this._x=u*c*d+h*m*g,this._y=h*m*d-u*c*g,this._z=h*c*g-u*m*d,this._w=h*c*d+u*m*g;break;case"ZXY":this._x=u*c*d-h*m*g,this._y=h*m*d+u*c*g,this._z=h*c*g+u*m*d,this._w=h*c*d-u*m*g;break;case"ZYX":this._x=u*c*d-h*m*g,this._y=h*m*d+u*c*g,this._z=h*c*g-u*m*d,this._w=h*c*d+u*m*g;break;case"YZX":this._x=u*c*d+h*m*g,this._y=h*m*d+u*c*g,this._z=h*c*g-u*m*d,this._w=h*c*d-u*m*g;break;case"XZY":this._x=u*c*d-h*m*g,this._y=h*m*d-u*c*g,this._z=h*c*g+u*m*d,this._w=h*c*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-l)*m,this._y=(a-h)*m,this._z=(o-n)*m}else if(i>r&&i>d){const m=2*Math.sqrt(1+i-r-d);this._w=(c-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+h)/m}else if(r>d){const m=2*Math.sqrt(1+r-i-d);this._w=(a-h)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-r);this._w=(o-n)/m,this._x=(a+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*r+n*h-a*l,this._y=n*c+o*l+a*r-i*h,this._z=a*c+o*h+i*l-n*r,this._w=o*c-i*r-n*l-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,r),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,l=t.w,h=2*(o*n-r*i),c=2*(r*e-a*n),d=2*(a*i-o*e);return this.x=e+l*h+o*d-r*c,this.y=i+l*c+r*h-a*d,this.z=n+l*d+a*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=n*l-a*r,this.y=a*o-i*l,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new P,Dr=new wi;class pn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(a,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),ws.subVectors(this.max,ts),wn.subVectors(t.a,ts),Mn.subVectors(t.b,ts),Sn.subVectors(t.c,ts),Fi.subVectors(Mn,wn),Bi.subVectors(Sn,Mn),Ji.subVectors(wn,Sn);let e=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-Ji.z,Ji.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,Ji.z,0,-Ji.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-Ji.y,Ji.x,0];return!La(e,wn,Mn,Sn,ws)||(e=[1,0,0,0,1,0,0,0,1],!La(e,wn,Mn,Sn,ws))?!1:(Ms.crossVectors(Fi,Bi),e=[Ms.x,Ms.y,Ms.z],La(e,wn,Mn,Sn,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,ys=new pn,wn=new P,Mn=new P,Sn=new P,Fi=new P,Bi=new P,Ji=new P,ts=new P,ws=new P,Ms=new P,Qi=new P;function La(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Qi.fromArray(s,a);const r=n.x*Math.abs(Qi.x)+n.y*Math.abs(Qi.y)+n.z*Math.abs(Qi.z),l=t.dot(Qi),h=e.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>r)return!1}return!0}const Tc=new pn,es=new P,Ia=new P;class Kn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Tc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(es,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(Ia)),this.expandByPoint(es.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new P,Da=new P,Ss=new P,Oi=new P,Ua=new P,bs=new P,Na=new P;class nh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Da.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Da);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),r=Oi.dot(this.direction),l=-Oi.dot(Ss),h=Oi.lengthSq(),c=Math.abs(1-o*o);let d,u,m,g;if(c>0)if(d=o*l-r,u=o*r-l,g=a*c,d>=0)if(u>=-g)if(u<=g){const v=1/c;d*=v,u*=v,m=d*(d+o*u+2*r)+u*(o*d+u+2*l)+h}else u=a,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+h;else u=-a,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-o*a+r)),u=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),m=u*(u+2*l)+h):(d=Math.max(0,-(o*a+r)),u=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+u*(u+2*l)+h);else u=o>0?-a:a,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Da).addScaledVector(Ss,u),m}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const i=Ei.dot(this.direction),n=Ei.dot(Ei)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,n=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,n=(t.min.x-u.x)*h),c>=0?(a=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(a=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,n,a){Ua.subVectors(e,t),bs.subVectors(i,t),Na.crossVectors(Ua,bs);let o=this.direction.dot(Na),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Oi.subVectors(this.origin,t);const l=r*this.direction.dot(bs.crossVectors(Oi,bs));if(l<0)return null;const h=r*this.direction.dot(Ua.cross(Oi));if(h<0||l+h>o)return null;const c=-r*Oi.dot(Na);return c<0?null:this.at(c/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,i,n,a,o,r,l,h,c,d,u,m,g,v,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,l,h,c,d,u,m,g,v,p)}set(t,e,i,n,a,o,r,l,h,c,d,u,m,g,v,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=a,f[5]=o,f[9]=r,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/bn.setFromMatrixColumn(t,0).length(),a=1/bn.setFromMatrixColumn(t,1).length(),o=1/bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=o*c,m=o*d,g=r*c,v=r*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=m+g*h,e[5]=u-v*h,e[9]=-r*l,e[2]=v-u*h,e[6]=g+m*h,e[10]=o*l}else if(t.order==="YXZ"){const u=l*c,m=l*d,g=h*c,v=h*d;e[0]=u+v*r,e[4]=g*r-m,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-r,e[2]=m*r-g,e[6]=v+u*r,e[10]=o*l}else if(t.order==="ZXY"){const u=l*c,m=l*d,g=h*c,v=h*d;e[0]=u-v*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*c,e[9]=v-u*r,e[2]=-o*h,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const u=o*c,m=o*d,g=r*c,v=r*d;e[0]=l*c,e[4]=g*h-m,e[8]=u*h+v,e[1]=l*d,e[5]=v*h+u,e[9]=m*h-g,e[2]=-h,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,m=o*h,g=r*l,v=r*h;e[0]=l*c,e[4]=v-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*c,e[9]=-r*c,e[2]=-h*c,e[6]=m*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,m=o*h,g=r*l,v=r*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+v,e[5]=o*c,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*c,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ac,t,Rc)}lookAt(t,e,i){const n=this.elements;return ti.subVectors(t,e),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),zi.crossVectors(i,ti),zi.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),zi.crossVectors(i,ti)),zi.normalize(),Es.crossVectors(ti,zi),n[0]=zi.x,n[4]=Es.x,n[8]=ti.x,n[1]=zi.y,n[5]=Es.y,n[9]=ti.y,n[2]=zi.z,n[6]=Es.z,n[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],w=i[3],_=i[7],y=i[11],A=i[15],T=n[0],S=n[4],R=n[8],I=n[12],x=n[1],b=n[5],k=n[9],B=n[13],W=n[2],j=n[6],V=n[10],Z=n[14],z=n[3],lt=n[7],rt=n[11],pt=n[15];return a[0]=o*T+r*x+l*W+h*z,a[4]=o*S+r*b+l*j+h*lt,a[8]=o*R+r*k+l*V+h*rt,a[12]=o*I+r*B+l*Z+h*pt,a[1]=c*T+d*x+u*W+m*z,a[5]=c*S+d*b+u*j+m*lt,a[9]=c*R+d*k+u*V+m*rt,a[13]=c*I+d*B+u*Z+m*pt,a[2]=g*T+v*x+p*W+f*z,a[6]=g*S+v*b+p*j+f*lt,a[10]=g*R+v*k+p*V+f*rt,a[14]=g*I+v*B+p*Z+f*pt,a[3]=w*T+_*x+y*W+A*z,a[7]=w*S+_*b+y*j+A*lt,a[11]=w*R+_*k+y*V+A*rt,a[15]=w*I+_*B+y*Z+A*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+a*l*d-n*h*d-a*r*u+i*h*u+n*r*m-i*l*m)+v*(+e*l*m-e*h*u+a*o*u-n*o*m+n*h*c-a*l*c)+p*(+e*h*d-e*r*m-a*o*d+i*o*m+a*r*c-i*h*c)+f*(-n*r*c-e*l*d+e*r*u+n*o*d-i*o*u+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],w=d*p*h-v*u*h+v*l*m-r*p*m-d*l*f+r*u*f,_=g*u*h-c*p*h-g*l*m+o*p*m+c*l*f-o*u*f,y=c*v*h-g*d*h+g*r*m-o*v*m-c*r*f+o*d*f,A=g*d*l-c*v*l-g*r*u+o*v*u+c*r*p-o*d*p,T=e*w+i*_+n*y+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=w*S,t[1]=(v*u*a-d*p*a-v*n*m+i*p*m+d*n*f-i*u*f)*S,t[2]=(r*p*a-v*l*a+v*n*h-i*p*h-r*n*f+i*l*f)*S,t[3]=(d*l*a-r*u*a-d*n*h+i*u*h+r*n*m-i*l*m)*S,t[4]=_*S,t[5]=(c*p*a-g*u*a+g*n*m-e*p*m-c*n*f+e*u*f)*S,t[6]=(g*l*a-o*p*a-g*n*h+e*p*h+o*n*f-e*l*f)*S,t[7]=(o*u*a-c*l*a+c*n*h-e*u*h-o*n*m+e*l*m)*S,t[8]=y*S,t[9]=(g*d*a-c*v*a-g*i*m+e*v*m+c*i*f-e*d*f)*S,t[10]=(o*v*a-g*r*a+g*i*h-e*v*h-o*i*f+e*r*f)*S,t[11]=(c*r*a-o*d*a-c*i*h+e*d*h+o*i*m-e*r*m)*S,t[12]=A*S,t[13]=(c*v*n-g*d*n+g*i*u-e*v*u-c*i*p+e*d*p)*S,t[14]=(g*r*n-o*v*n-g*i*l+e*v*l+o*i*p-e*r*p)*S,t[15]=(o*d*n-c*r*n+c*i*l-e*d*l-o*i*u+e*r*u)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,l=t.z,h=a*o,c=a*r;return this.set(h*o+i,h*r-n*l,h*l+n*r,0,h*r+n*l,c*r+i,c*l-n*o,0,h*l-n*r,c*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,h=a+a,c=o+o,d=r+r,u=a*h,m=a*c,g=a*d,v=o*c,p=o*d,f=r*d,w=l*h,_=l*c,y=l*d,A=i.x,T=i.y,S=i.z;return n[0]=(1-(v+f))*A,n[1]=(m+y)*A,n[2]=(g-_)*A,n[3]=0,n[4]=(m-y)*T,n[5]=(1-(u+f))*T,n[6]=(p+w)*T,n[7]=0,n[8]=(g+_)*S,n[9]=(p-w)*S,n[10]=(1-(u+v))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=bn.set(n[0],n[1],n[2]).length();const o=bn.set(n[4],n[5],n[6]).length(),r=bn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ci.copy(this);const h=1/a,c=1/o,d=1/r;return ci.elements[0]*=h,ci.elements[1]*=h,ci.elements[2]*=h,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,e.setFromRotationMatrix(ci),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=Pi){const l=this.elements,h=2*a/(e-t),c=2*a/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n);let m,g;if(r===Pi)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===oa)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=Pi){const l=this.elements,h=1/(e-t),c=1/(i-n),d=1/(o-a),u=(e+t)*h,m=(i+n)*c;let g,v;if(r===Pi)g=(o+a)*d,v=-2*d;else if(r===oa)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bn=new P,ci=new Jt,Ac=new P(0,0,0),Rc=new P(1,1,1),zi=new P,Es=new P,ti=new P,Ur=new Jt,Nr=new wi;class je{constructor(t=0,e=0,i=0,n=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ur.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ur,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nr.setFromEuler(this),this.setFromQuaternion(Nr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cc=0;const kr=new P,En=new wi,Ti=new Jt,Ts=new P,is=new P,Pc=new P,Lc=new wi,Fr=new P(1,0,0),Br=new P(0,1,0),Or=new P(0,0,1),zr={type:"added"},Ic={type:"removed"},Tn={type:"childadded",child:null},ka={type:"childremoved",child:null};class Te extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new P,e=new je,i=new wi,n=new P(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Vt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.multiply(En),this}rotateOnWorldAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.premultiply(En),this}rotateX(t){return this.rotateOnAxis(Fr,t)}rotateY(t){return this.rotateOnAxis(Br,t)}rotateZ(t){return this.rotateOnAxis(Or,t)}translateOnAxis(t,e){return kr.copy(t).applyQuaternion(this.quaternion),this.position.add(kr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fr,t)}translateY(t){return this.translateOnAxis(Br,t)}translateZ(t){return this.translateOnAxis(Or,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(is,Ts,this.up):Ti.lookAt(Ts,is,this.up),this.quaternion.setFromRotationMatrix(Ti),n&&(Ti.extractRotation(n.matrixWorld),En.setFromRotationMatrix(Ti),this.quaternion.premultiply(En.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zr),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ic),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zr),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Pc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Lc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(a(t.materials,this.material[l]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(a(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(r){const l=[];for(const h in r){const c=r[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new P,Ai=new P,Fa=new P,Ri=new P,An=new P,Rn=new P,Hr=new P,Ba=new P,Oa=new P,za=new P,Ha=new ce,Ga=new ce,Va=new ce;class ri{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),di.subVectors(t,e),n.cross(di);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){di.subVectors(n,e),Ai.subVectors(i,e),Fa.subVectors(t,e);const o=di.dot(di),r=di.dot(Ai),l=di.dot(Fa),h=Ai.dot(Ai),c=Ai.dot(Fa),d=o*h-r*r;if(d===0)return a.set(0,0,0),null;const u=1/d,m=(h*l-r*c)*u,g=(o*c-r*l)*u;return a.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,n,a,o,r,l){return this.getBarycoord(t,e,i,n,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(r,Ri.z),l)}static getInterpolatedAttribute(t,e,i,n,a,o){return Ha.setScalar(0),Ga.setScalar(0),Va.setScalar(0),Ha.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ha,a.x),o.addScaledVector(Ga,a.y),o.addScaledVector(Va,a.z),o}static isFrontFacing(t,e,i,n){return di.subVectors(i,e),Ai.subVectors(t,e),di.cross(Ai).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),di.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return ri.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;An.subVectors(n,i),Rn.subVectors(a,i),Ba.subVectors(t,i);const l=An.dot(Ba),h=Rn.dot(Ba);if(l<=0&&h<=0)return e.copy(i);Oa.subVectors(t,n);const c=An.dot(Oa),d=Rn.dot(Oa);if(c>=0&&d<=c)return e.copy(n);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(An,o);za.subVectors(t,a);const m=An.dot(za),g=Rn.dot(za);if(g>=0&&m<=g)return e.copy(a);const v=m*h-l*g;if(v<=0&&h>=0&&g<=0)return r=h/(h-g),e.copy(i).addScaledVector(Rn,r);const p=c*g-m*d;if(p<=0&&d-c>=0&&m-g>=0)return Hr.subVectors(a,n),r=(d-c)/(d-c+(m-g)),e.copy(n).addScaledVector(Hr,r);const f=1/(p+v+u);return o=v*f,r=u*f,e.copy(i).addScaledVector(An,o).addScaledVector(Rn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},As={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class K{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=oe.workingColorSpace){if(t=mc(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Wa(o,a,t+1/3),this.g=Wa(o,a,t),this.b=Wa(o,a,t-1/3)}return oe.toWorkingColorSpace(this,n),this}setStyle(t,e=oi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const i=ah[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return oe.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ye(Ne.r*255,0,255))*65536+Math.round(Ye(Ne.g*255,0,255))*256+Math.round(Ye(Ne.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,n=Ne.g,a=Ne.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let l,h;const c=(r+o)/2;if(r===o)l=0,h=0;else{const d=o-r;switch(h=c<=.5?d/(o+r):d/(2-o-r),o){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=oi){oe.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,n=Ne.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(As);const i=Ta(Hi.h,As.h,e),n=Ta(Hi.s,As.s,e),a=Ta(Hi.l,As.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new K;K.NAMES=ah;let Dc=0;class mn extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=dn,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_n,this.stencilZFail=_n,this.stencilZPass=_n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dn&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lo&&(i.blendSrc=this.blendSrc),this.blendDst!==ho&&(i.blendDst=this.blendDst),this.blendEquation!==rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ee extends mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new P,Rs=new Ot;class Se{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yo,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),a=he(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}}class oh extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class rh extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Uc=0;const si=new Jt,Xa=new Te,Cn=new P,ei=new pn,ns=new pn,Pe=new P;class Ee extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?rh:oh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Vt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,i){return si.makeTranslation(t,e,i),this.applyMatrix4(si),this}scale(t,e,i){return si.makeScale(t,e,i),this.applyMatrix4(si),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];ns.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(ei.min,ns.min),ei.expandByPoint(Pe),Pe.addVectors(ei.max,ns.max),ei.expandByPoint(Pe)):(ei.expandByPoint(ns.min),ei.expandByPoint(ns.max))}ei.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)Pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(Pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],l=this.morphTargetsRelative;for(let h=0,c=r.count;h<c;h++)Pe.fromBufferAttribute(r,h),l&&(Cn.fromBufferAttribute(t,h),Pe.add(Cn)),n=Math.max(n,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<i.count;R++)r[R]=new P,l[R]=new P;const h=new P,c=new P,d=new P,u=new Ot,m=new Ot,g=new Ot,v=new P,p=new P;function f(R,I,x){h.fromBufferAttribute(i,R),c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,x),u.fromBufferAttribute(a,R),m.fromBufferAttribute(a,I),g.fromBufferAttribute(a,x),c.sub(h),d.sub(h),m.sub(u),g.sub(u);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(b),p.copy(d).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(b),r[R].add(v),r[I].add(v),r[x].add(v),l[R].add(p),l[I].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,I=w.length;R<I;++R){const x=w[R],b=x.start,k=x.count;for(let B=b,W=b+k;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const _=new P,y=new P,A=new P,T=new P;function S(R){A.fromBufferAttribute(n,R),T.copy(A);const I=r[R];_.copy(I),_.sub(A.multiplyScalar(A.dot(I))).normalize(),y.crossVectors(T,I);const b=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,b)}for(let R=0,I=w.length;R<I;++R){const x=w[R],b=x.start,k=x.count;for(let B=b,W=b+k;B<W;B+=3)S(t.getX(B+0)),S(t.getX(B+1)),S(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const n=new P,a=new P,o=new P,r=new P,l=new P,h=new P,c=new P,d=new P;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),c.subVectors(o,a),d.subVectors(n,a),c.cross(d),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,p),r.add(c),l.add(c),h.add(c),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,m=e.count;u<m;u+=3)n.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,a),d.subVectors(n,a),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(r,l){const h=r.array,c=r.itemSize,d=r.normalized,u=new h.constructor(l.length*c);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){r.isInterleavedBufferAttribute?m=l[v]*r.data.stride+r.offset:m=l[v]*c;for(let f=0;f<c;f++)u[g++]=h[m++]}return new Se(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],h=t(l,i);e.setAttribute(r,h)}const a=this.morphAttributes;for(const r in a){const l=[],h=a[r];for(let c=0,d=h.length;c<d;c++){const u=h[c],m=t(u,i);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const h=o[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const m=h[d];c.push(m.toJSON(t.data))}c.length>0&&(n[l]=c,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(e))}const a=t.morphAttributes;for(const h in a){const c=[],d=a[h];for(let u=0,m=d.length;u<m;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gr=new Jt,tn=new nh,Cs=new Kn,Vr=new P,Ps=new P,Ls=new P,Is=new P,qa=new P,Ds=new P,Wr=new P,Us=new P;class L extends Te{constructor(t=new Ee,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Ds.set(0,0,0);for(let l=0,h=a.length;l<h;l++){const c=r[l],d=a[l];c!==0&&(qa.fromBufferAttribute(d,t),o?Ds.addScaledVector(qa,c):Ds.addScaledVector(qa.sub(e),c))}e.add(Ds)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(a),tn.copy(t.ray).recast(t.near),!(Cs.containsPoint(tn.origin)===!1&&(tn.intersectSphere(Cs,Vr)===null||tn.origin.distanceToSquared(Vr)>(t.far-t.near)**2))&&(Gr.copy(a).invert(),tn.copy(t.ray).applyMatrix4(Gr),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,tn)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,h=a.attributes.uv,c=a.attributes.uv1,d=a.attributes.normal,u=a.groups,m=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),_=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,A=_;y<A;y+=3){const T=r.getX(y),S=r.getX(y+1),R=r.getX(y+2);n=Ns(this,f,t,i,h,c,d,T,S,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(r.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=r.getX(p),_=r.getX(p+1),y=r.getX(p+2);n=Ns(this,o,t,i,h,c,d,w,_,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],f=o[p.materialIndex],w=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=w,A=_;y<A;y+=3){const T=y,S=y+1,R=y+2;n=Ns(this,f,t,i,h,c,d,T,S,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const w=p,_=p+1,y=p+2;n=Ns(this,o,t,i,h,c,d,w,_,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function Nc(s,t,e,i,n,a,o,r){let l;if(t.side===Oe?l=i.intersectTriangle(o,a,n,!0,r):l=i.intersectTriangle(n,a,o,t.side===Ki,r),l===null)return null;Us.copy(r),Us.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Us);return h<e.near||h>e.far?null:{distance:h,point:Us.clone(),object:s}}function Ns(s,t,e,i,n,a,o,r,l,h){s.getVertexPosition(r,Ps),s.getVertexPosition(l,Ls),s.getVertexPosition(h,Is);const c=Nc(s,t,e,i,Ps,Ls,Is,Wr);if(c){const d=new P;ri.getBarycoord(Wr,Ps,Ls,Is,d),n&&(c.uv=ri.getInterpolatedAttribute(n,r,l,h,d,new Ot)),a&&(c.uv1=ri.getInterpolatedAttribute(a,r,l,h,d,new Ot)),o&&(c.normal=ri.getInterpolatedAttribute(o,r,l,h,d,new P),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:r,b:l,c:h,normal:new P,materialIndex:0};ri.getNormal(Ps,Ls,Is,u.normal),c.face=u,c.barycoord=d}return c}class xt extends Ee{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],h=[],c=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(d,2));function g(v,p,f,w,_,y,A,T,S,R,I){const x=y/S,b=A/R,k=y/2,B=A/2,W=T/2,j=S+1,V=R+1;let Z=0,z=0;const lt=new P;for(let rt=0;rt<V;rt++){const pt=rt*b-B;for(let It=0;It<j;It++){const Wt=It*x-k;lt[v]=Wt*w,lt[p]=pt*_,lt[f]=W,h.push(lt.x,lt.y,lt.z),lt[v]=0,lt[p]=0,lt[f]=T>0?1:-1,c.push(lt.x,lt.y,lt.z),d.push(It/S),d.push(1-rt/R),Z+=1}}for(let rt=0;rt<R;rt++)for(let pt=0;pt<S;pt++){const It=u+pt+j*rt,Wt=u+pt+j*(rt+1),$=u+(pt+1)+j*(rt+1),Y=u+(pt+1)+j*rt;l.push(It,Wt,Y),l.push(Wt,$,Y),z+=6}r.addGroup(m,z,I),m+=z,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const i=Yn(s[e]);for(const n in i)t[n]=i[n]}return t}function kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Fc={clone:Yn,merge:Ge};var Bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bc,this.fragmentShader=Oc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yn(t.uniforms),this.uniformsGroups=kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class hh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new P,Xr=new Ot,qr=new Ot;class $e extends hh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,Xr,qr),e.subVectors(qr,Xr)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;a+=o.offsetX*n/l,e-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pn=-90,Ln=1;class zc extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new $e(Pn,Ln,t,e);n.layers=this.layers,this.add(n);const a=new $e(Pn,Ln,t,e);a.layers=this.layers,this.add(a);const o=new $e(Pn,Ln,t,e);o.layers=this.layers,this.add(o);const r=new $e(Pn,Ln,t,e);r.layers=this.layers,this.add(r);const l=new $e(Pn,Ln,t,e);l.layers=this.layers,this.add(l);const h=new $e(Pn,Ln,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,l]=e;for(const h of e)this.remove(h);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(d,u,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ch extends ze{constructor(t,e,i,n,a,o,r,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Vn,super(t,e,i,n,a,o,r,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hc extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ch(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new xt(5,5,5),a=new Ui({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:qi});a.uniforms.tEquirect.value=e;const o=new L(n,a),r=e.minFilter;return e.minFilter===cn&&(e.minFilter=ui),new zc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const Ya=new P,Gc=new P,Vc=new Vt;class an{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ya.subVectors(i,e).cross(Gc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ya),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vc.getNormalMatrix(t),n=this.coplanarPoint(Ya).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const en=new Kn,ks=new P;class cr{constructor(t=new an,e=new an,i=new an,n=new an,a=new an,o=new an){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],m=n[8],g=n[9],v=n[10],p=n[11],f=n[12],w=n[13],_=n[14],y=n[15];if(i[0].setComponents(l-a,u-h,p-m,y-f).normalize(),i[1].setComponents(l+a,u+h,p+m,y+f).normalize(),i[2].setComponents(l+o,u+c,p+g,y+w).normalize(),i[3].setComponents(l-o,u-c,p-g,y-w).normalize(),i[4].setComponents(l-r,u-d,p-v,y-_).normalize(),e===Pi)i[5].setComponents(l+r,u+d,p+v,y+_).normalize();else if(e===oa)i[5].setComponents(r,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(t){return en.center.set(0,0,0),en.radius=.7071067811865476,en.applyMatrix4(t.matrixWorld),this.intersectsSphere(en)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ks.x=n.normal.x>0?t.max.x:t.min.x,ks.y=n.normal.y>0?t.max.y:t.min.y,ks.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dh(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Wc(s){const t=new WeakMap;function e(r,l){const h=r.array,c=r.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,h,c),r.onUploadCallback();let m;if(h instanceof Float32Array)m=s.FLOAT;else if(h instanceof Uint16Array)r.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=s.SHORT;else if(h instanceof Uint32Array)m=s.UNSIGNED_INT;else if(h instanceof Int32Array)m=s.INT;else if(h instanceof Int8Array)m=s.BYTE;else if(h instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:r.version,size:d}}function i(r,l,h){const c=l.array,d=l.updateRanges;if(s.bindBuffer(h,r),d.length===0)s.bufferSubData(h,0,c);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){const g=d[u],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];s.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(s.deleteBuffer(l.buffer),t.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const c=t.get(r);(!c||c.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const h=t.get(r);if(h===void 0)t.set(r,e(r,l));else if(h.version<r.version){if(h.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,r,l),h.version=r.version}}return{get:n,remove:a,update:o}}class yi extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),l=Math.floor(n),h=r+1,c=l+1,d=t/r,u=e/l,m=[],g=[],v=[],p=[];for(let f=0;f<c;f++){const w=f*u-o;for(let _=0;_<h;_++){const y=_*d-a;g.push(y,-w,0),v.push(0,0,1),p.push(_/r),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<r;w++){const _=w+h*f,y=w+h*(f+1),A=w+1+h*(f+1),T=w+1+h*f;m.push(_,y,T),m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qc=`#ifdef USE_ALPHAHASH
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
#endif`,Yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$c=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zc=`#ifdef USE_AOMAP
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
#endif`,Jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,ad=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`
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
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
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
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Wd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tu=`#if defined( USE_POINTS_UV )
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
#endif`,eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,su=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
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
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_u=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lu=`#ifdef USE_SKINNING
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
#endif`,Iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Du=`#ifdef USE_SKINNING
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
#endif`,Uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fu=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Ou=`#ifdef USE_TRANSMISSION
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
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xu=`uniform sampler2D t2D;
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`#include <common>
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
}`,Zu=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ju=`#define DISTANCE
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
}`,Qu=`#define DISTANCE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,rf=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define MATCAP
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
}`,cf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,uf=`#define NORMAL
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
}`,ff=`#define PHONG
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
}`,pf=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,gf=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,vf=`#define TOON
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
}`,_f=`uniform float size;
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
}`,yf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Mf=`uniform vec3 color;
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
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,bf=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Xc,alphahash_pars_fragment:qc,alphamap_fragment:Yc,alphamap_pars_fragment:$c,alphatest_fragment:Kc,alphatest_pars_fragment:jc,aomap_fragment:Zc,aomap_pars_fragment:Jc,batching_pars_vertex:Qc,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:id,bsdfs:nd,iridescence_fragment:sd,bumpmap_pars_fragment:ad,clipping_planes_fragment:od,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:hd,color_fragment:cd,color_pars_fragment:dd,color_pars_vertex:ud,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:xd,displacementmap_vertex:vd,emissivemap_fragment:_d,emissivemap_pars_fragment:yd,colorspace_fragment:wd,colorspace_pars_fragment:Md,envmap_fragment:Sd,envmap_common_pars_fragment:bd,envmap_pars_fragment:Ed,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Fd,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Dd,lights_lambert_fragment:Ud,lights_lambert_pars_fragment:Nd,lights_pars_begin:kd,lights_toon_fragment:Bd,lights_toon_pars_fragment:Od,lights_phong_fragment:zd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:qd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:jd,map_fragment:Zd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:tu,metalnessmap_fragment:eu,metalnessmap_pars_fragment:iu,morphinstance_vertex:nu,morphcolor_vertex:su,morphnormal_vertex:au,morphtarget_pars_vertex:ou,morphtarget_vertex:ru,normal_fragment_begin:lu,normal_fragment_maps:hu,normal_pars_fragment:cu,normal_pars_vertex:du,normal_vertex:uu,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:xu,opaque_fragment:vu,packing:_u,premultiplied_alpha_fragment:yu,project_vertex:wu,dithering_fragment:Mu,dithering_pars_fragment:Su,roughnessmap_fragment:bu,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Au,shadowmap_vertex:Ru,shadowmask_pars_fragment:Cu,skinbase_vertex:Pu,skinning_pars_vertex:Lu,skinning_vertex:Iu,skinnormal_vertex:Du,specularmap_fragment:Uu,specularmap_pars_fragment:Nu,tonemapping_fragment:ku,tonemapping_pars_fragment:Fu,transmission_fragment:Bu,transmission_pars_fragment:Ou,uv_pars_fragment:zu,uv_pars_vertex:Hu,uv_vertex:Gu,worldpos_vertex:Vu,background_vert:Wu,background_frag:Xu,backgroundCube_vert:qu,backgroundCube_frag:Yu,cube_vert:$u,cube_frag:Ku,depth_vert:ju,depth_frag:Zu,distanceRGBA_vert:Ju,distanceRGBA_frag:Qu,equirect_vert:tf,equirect_frag:ef,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:af,meshbasic_frag:of,meshlambert_vert:rf,meshlambert_frag:lf,meshmatcap_vert:hf,meshmatcap_frag:cf,meshnormal_vert:df,meshnormal_frag:uf,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:xf,meshtoon_frag:vf,points_vert:_f,points_frag:yf,shadow_vert:wf,shadow_frag:Mf,sprite_vert:Sf,sprite_frag:bf},ht={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},gi={basic:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new K(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ge([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ge([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new K(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ge([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ge([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ge([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ge([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ge([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ge([ht.lights,ht.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};gi.physical={uniforms:Ge([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Fs={r:0,b:0,g:0},nn=new je,Ef=new Jt;function Tf(s,t,e,i,n,a,o){const r=new K(0);let l=a===!0?0:1,h,c,d=null,u=0,m=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1;const y=g(w);y===null?f(r,l):y&&y.isColor&&(f(y,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(w,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===ua)?(c===void 0&&(c=new L(new xt(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Yn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),nn.copy(_.backgroundRotation),nn.x*=-1,nn.y*=-1,nn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ef.makeRotationFromEuler(nn)),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,(d!==y||u!==y.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new L(new yi(2,2),new Ui({name:"BackgroundMaterial",uniforms:Yn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,_){w.getRGB(Fs,lh(s)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(w,_=1){r.set(w),l=_,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(r,l)},render:v,addToRenderList:p}}function Af(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,o=!1;function r(x,b,k,B,W){let j=!1;const V=d(B,k,b);a!==V&&(a=V,h(a.object)),j=m(x,B,k,W),j&&g(x,B,k,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(x,b,k,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function h(x){return s.bindVertexArray(x)}function c(x){return s.deleteVertexArray(x)}function d(x,b,k){const B=k.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let j=W[b.id];j===void 0&&(j={},W[b.id]=j);let V=j[B];return V===void 0&&(V=u(l()),j[B]=V),V}function u(x){const b=[],k=[],B=[];for(let W=0;W<e;W++)b[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:k,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,b,k,B){const W=a.attributes,j=b.attributes;let V=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){const rt=W[z];let pt=j[z];if(pt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;V++}return a.attributesNum!==V||a.index!==B}function g(x,b,k,B){const W={},j=b.attributes;let V=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){let rt=j[z];rt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),W[z]=pt,V++}a.attributes=W,a.attributesNum=V,a.index=B}function v(){const x=a.newAttributes;for(let b=0,k=x.length;b<k;b++)x[b]=0}function p(x){f(x,0)}function f(x,b){const k=a.newAttributes,B=a.enabledAttributes,W=a.attributeDivisors;k[x]=1,B[x]===0&&(s.enableVertexAttribArray(x),B[x]=1),W[x]!==b&&(s.vertexAttribDivisor(x,b),W[x]=b)}function w(){const x=a.newAttributes,b=a.enabledAttributes;for(let k=0,B=b.length;k<B;k++)b[k]!==x[k]&&(s.disableVertexAttribArray(k),b[k]=0)}function _(x,b,k,B,W,j,V){V===!0?s.vertexAttribIPointer(x,b,k,W,j):s.vertexAttribPointer(x,b,k,B,W,j)}function y(x,b,k,B){v();const W=B.attributes,j=k.getAttributes(),V=b.defaultAttributeValues;for(const Z in j){const z=j[Z];if(z.location>=0){let lt=W[Z];if(lt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const rt=lt.normalized,pt=lt.itemSize,It=t.get(lt);if(It===void 0)continue;const Wt=It.buffer,$=It.type,Y=It.bytesPerElement,et=$===s.INT||$===s.UNSIGNED_INT||lt.gpuType===ir;if(lt.isInterleavedBufferAttribute){const st=lt.data,Mt=st.stride,Ct=lt.offset;if(st.isInstancedInterleavedBuffer){for(let Ht=0;Ht<z.locationSize;Ht++)f(z.location+Ht,st.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ht=0;Ht<z.locationSize;Ht++)p(z.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let Ht=0;Ht<z.locationSize;Ht++)_(z.location+Ht,pt/z.locationSize,$,rt,Mt*Y,(Ct+pt/z.locationSize*Ht)*Y,et)}else{if(lt.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)f(z.location+st,lt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let st=0;st<z.locationSize;st++)p(z.location+st);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let st=0;st<z.locationSize;st++)_(z.location+st,pt/z.locationSize,$,rt,pt*Y,pt/z.locationSize*st*Y,et)}}else if(V!==void 0){const rt=V[Z];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(z.location,rt);break;case 3:s.vertexAttrib3fv(z.location,rt);break;case 4:s.vertexAttrib4fv(z.location,rt);break;default:s.vertexAttrib1fv(z.location,rt)}}}}w()}function A(){R();for(const x in i){const b=i[x];for(const k in b){const B=b[k];for(const W in B)c(B[W].object),delete B[W];delete b[k]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const k in b){const B=b[k];for(const W in B)c(B[W].object),delete B[W];delete b[k]}delete i[x.id]}function S(x){for(const b in i){const k=i[b];if(k[x.id]===void 0)continue;const B=k[x.id];for(const W in B)c(B[W].object),delete B[W];delete k[x.id]}}function R(){I(),o=!0,a!==n&&(a=n,h(a.object))}function I(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:r,reset:R,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Rf(s,t,e){let i;function n(h){i=h}function a(h,c){s.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,d){d!==0&&(s.drawArraysInstanced(i,h,c,d),e.update(c,i,d))}function r(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let m=0;for(let g=0;g<d;g++)m+=c[g];e.update(m,i,1)}function l(h,c,d,u){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)o(h[g],c[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=c[v];for(let v=0;v<u.length;v++)e.update(g,i,u[v])}}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Cf(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(S){return!(S!==pi&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(S){const R=S===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Di&&i.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==vi&&!R)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function Pf(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new an,r=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||n;return n=u,i=d.length,m},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!n||g===null||g.length===0||a&&!p)a?c(null):h();else{const w=a?0:i,_=w*4;let y=f.clippingState||null;l.value=y,y=c(g,u,_,m);for(let A=0;A!==_;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const f=m+v*4,w=u.matrixWorldInverse;r.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,y=m;_!==v;++_,y+=4)o.copy(d[_]).applyMatrix4(w,r),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Lf(s){let t=new WeakMap;function e(o,r){return r===vo?o.mapping=Vn:r===_o&&(o.mapping=Wn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===vo||r===_o)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Hc(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",n),e(h.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class uh extends hh{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,r-=c*this.view.offsetY,l=r-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const On=4,Yr=[.125,.215,.35,.446,.526,.582],ln=20,$a=new uh,$r=new K;let Ka=null,ja=0,Za=0,Ja=!1;const on=(1+Math.sqrt(5))/2,In=1/on,Kr=[new P(-on,In,0),new P(on,In,0),new P(-In,0,on),new P(In,0,on),new P(0,on,-In),new P(0,on,In),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class jr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,ja,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===Wn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:ps,format:pi,colorSpace:ji,depthBuffer:!1},n=Zr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(a)),this._blurMaterial=Df(a,t,e)}return n}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,n){const r=new $e(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor($r),c.toneMapping=Yi,c.autoClear=!1;const m=new ee({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new L(new xt,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy($r),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(r.up.set(0,l[f],0),r.lookAt(h[f],0,0)):w===1?(r.up.set(0,0,l[f]),r.lookAt(0,h[f],0)):(r.up.set(0,l[f],0),r.lookAt(0,0,h[f]));const _=this._cubeSize;Bs(n,w*_,f>2?_:0,_,_),c.setRenderTarget(n),v&&c.render(g,r),c.render(t,r)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Vn||t.mapping===Wn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,$a)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Kr[(n-a-1)%Kr.length];this._blur(t,a-1,a,o,r)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new L(this._lodPlanes[n],h),u=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*ln-1),v=a/g,p=isFinite(a)?1+Math.floor(c*v):ln;p>ln&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ln}`);const f=[];let w=0;for(let S=0;S<ln;++S){const R=S/v,I=Math.exp(-R*R/2);f.push(I),S===0?w+=I:S<p&&(w+=2*I)}for(let S=0;S<f.length;S++)f[S]=f[S]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const y=this._sizeLods[n],A=3*y*(n>_-On?n-_+On:0),T=4*(this._cubeSize-y);Bs(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(d,$a)}}function If(s){const t=[],e=[],i=[];let n=s;const a=s-On+1+Yr.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let l=1/r;o>s-On?l=Yr[o-s+On-1]:o===0&&(l=0),i.push(l);const h=1/(r-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,g=6,v=3,p=2,f=1,w=new Float32Array(v*g*m),_=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let T=0;T<m;T++){const S=T%3*2/3-1,R=T>2?0:-1,I=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];w.set(I,v*g*T),_.set(u,p*g*T);const x=[T,T,T,T,T,T];y.set(x,f*g*T)}const A=new Ee;A.setAttribute("position",new Se(w,v)),A.setAttribute("uv",new Se(_,p)),A.setAttribute("faceIndex",new Se(y,f)),t.push(A),n>On&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zr(s,t,e){const i=new fn(s,t,e);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Df(s,t,e){const i=new Float32Array(ln),n=new P(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:dr(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jr(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dr(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Qr(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function dr(){return`

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
	`}function Uf(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,h=l===vo||l===_o,c=l===Vn||l===Wn;if(h||c){let d=t.get(r);const u=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return e===null&&(e=new jr(s)),d=h?e.fromEquirectangular(r,d):e.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),d.texture;if(d!==void 0)return d.texture;{const m=r.image;return h&&m&&m.height>0||c&&m&&n(m)?(e===null&&(e=new jr(s)),d=h?e.fromEquirectangular(r):e.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,t.set(r,d),r.addEventListener("dispose",a),d.texture):null}}}return r}function n(r){let l=0;const h=6;for(let c=0;c<h;c++)r[c]!==void 0&&l++;return l===h}function a(r){const l=r.target;l.removeEventListener("dispose",a);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Nf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function kf(s,t,e,i){const n={},a=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete n[u.id];const m=a.get(u);m&&(t.remove(m),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],s.ARRAY_BUFFER)}}function h(d){const u=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let _=0,y=w.length;_<y;_+=3){const A=w[_+0],T=w[_+1],S=w[_+2];u.push(A,T,T,S,S,A)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,y=w.length/3-1;_<y;_+=3){const A=_+0,T=_+1,S=_+2;u.push(A,T,T,S,S,A)}}else return;const p=new(th(u)?rh:oh)(u,1);p.version=v;const f=a.get(d);f&&t.remove(f),a.set(d,p)}function c(d){const u=a.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&h(d)}else h(d);return a.get(d)}return{get:r,update:l,getWireframeAttribute:c}}function Ff(s,t,e){let i;function n(u){i=u}let a,o;function r(u){a=u.type,o=u.bytesPerElement}function l(u,m){s.drawElements(i,m,a,u*o),e.update(m,i,1)}function h(u,m,g){g!==0&&(s.drawElementsInstanced(i,m,a,u*o,g),e.update(m,i,g))}function c(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,u,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function d(u,m,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)h(u[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,u,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w];for(let w=0;w<v.length;w++)e.update(f,i,v[w])}}this.setMode=n,this.setIndex=r,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Bf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Of(s,t,e){const i=new WeakMap,n=new ce;function a(o,r,l){const h=o.morphTargetInfluences,c=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(r);if(u===void 0||u.count!==d){let x=function(){R.dispose(),i.delete(r),r.removeEventListener("dispose",x)};var m=x;u!==void 0&&u.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,p=r.morphAttributes.color!==void 0,f=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],_=r.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let A=r.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*T*4*d),R=new ih(S,A,T,d);R.type=vi,R.needsUpdate=!0;const I=y*4;for(let b=0;b<d;b++){const k=f[b],B=w[b],W=_[b],j=A*T*4*b;for(let V=0;V<k.count;V++){const Z=V*I;g===!0&&(n.fromBufferAttribute(k,V),S[j+Z+0]=n.x,S[j+Z+1]=n.y,S[j+Z+2]=n.z,S[j+Z+3]=0),v===!0&&(n.fromBufferAttribute(B,V),S[j+Z+4]=n.x,S[j+Z+5]=n.y,S[j+Z+6]=n.z,S[j+Z+7]=0),p===!0&&(n.fromBufferAttribute(W,V),S[j+Z+8]=n.x,S[j+Z+9]=n.y,S[j+Z+10]=n.z,S[j+Z+11]=W.itemSize===4?n.w:1)}}u={count:d,texture:R,size:new Ot(A,T)},i.set(r,u),r.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:a}}function zf(s,t,e,i){let n=new WeakMap;function a(l){const h=i.render.frame,c=l.geometry,d=t.get(l,c);if(n.get(d)!==h&&(t.update(d),n.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function o(){n=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}class fh extends ze{constructor(t,e,i,n,a,o,r,l,h,c=zn){if(c!==zn&&c!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===zn&&(i=un),i===void 0&&c===qn&&(i=Xn),super(null,n,a,o,r,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ph=new ze,tl=new fh(1,1),mh=new ih,gh=new Ec,xh=new ch,el=[],il=[],nl=new Float32Array(16),sl=new Float32Array(9),al=new Float32Array(4);function jn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=el[n];if(a===void 0&&(a=new Float32Array(n),el[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function pa(s,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function Xf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;al.set(i),s.uniformMatrix2fv(this.addr,!1,al),Ce(e,i)}}function qf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;sl.set(i),s.uniformMatrix3fv(this.addr,!1,sl),Ce(e,i)}}function Yf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;nl.set(i),s.uniformMatrix4fv(this.addr,!1,nl),Ce(e,i)}}function $f(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function ip(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(tl.compareFunction=Ql,a=tl):a=ph,e.setTexture2D(t||a,n)}function np(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||gh,n)}function sp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||xh,n)}function ap(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||mh,n)}function op(s){switch(s){case 5126:return Hf;case 35664:return Gf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return ap}}function rp(s,t){s.uniform1fv(this.addr,t)}function lp(s,t){const e=jn(t,this.size,2);s.uniform2fv(this.addr,e)}function hp(s,t){const e=jn(t,this.size,3);s.uniform3fv(this.addr,e)}function cp(s,t){const e=jn(t,this.size,4);s.uniform4fv(this.addr,e)}function dp(s,t){const e=jn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function up(s,t){const e=jn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fp(s,t){const e=jn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function pp(s,t){s.uniform1iv(this.addr,t)}function mp(s,t){s.uniform2iv(this.addr,t)}function gp(s,t){s.uniform3iv(this.addr,t)}function xp(s,t){s.uniform4iv(this.addr,t)}function vp(s,t){s.uniform1uiv(this.addr,t)}function _p(s,t){s.uniform2uiv(this.addr,t)}function yp(s,t){s.uniform3uiv(this.addr,t)}function wp(s,t){s.uniform4uiv(this.addr,t)}function Mp(s,t,e){const i=this.cache,n=t.length,a=pa(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||ph,a[o])}function Sp(s,t,e){const i=this.cache,n=t.length,a=pa(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||gh,a[o])}function bp(s,t,e){const i=this.cache,n=t.length,a=pa(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||xh,a[o])}function Ep(s,t,e){const i=this.cache,n=t.length,a=pa(e,n);Re(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||mh,a[o])}function Tp(s){switch(s){case 5126:return rp;case 35664:return lp;case 35665:return hp;case 35666:return cp;case 35674:return dp;case 35675:return up;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return _p;case 36295:return yp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Ep}}class Ap{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=op(e.type)}}class Rp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tp(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function ol(s,t){s.seq.push(t),s.map[t.id]=t}function Pp(s,t,e){const i=s.name,n=i.length;for(Qa.lastIndex=0;;){const a=Qa.exec(i),o=Qa.lastIndex;let r=a[1];const l=a[2]==="]",h=a[3];if(l&&(r=r|0),h===void 0||h==="["&&o+2===n){ol(e,h===void 0?new Ap(r,s,t):new Rp(r,s,t));break}else{let d=e.map[r];d===void 0&&(d=new Cp(r),ol(e,d)),e=d}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Pp(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function rl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Lp=37297;let Ip=0;function Dp(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function Up(s){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(s);let i;switch(t===e?i="":t===aa&&e===sa?i="LinearDisplayP3ToLinearSRGB":t===sa&&e===aa&&(i="LinearSRGBToLinearDisplayP3"),s){case ji:case fa:return[i,"LinearTransferOETF"];case oi:case hr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function ll(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Dp(s.getShaderSource(t),o)}else return n}function Np(s,t){const e=Up(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kp(s,t){let e;switch(t){case Jh:e="Linear";break;case Qh:e="Reinhard";break;case tc:e="Cineon";break;case Hl:e="ACESFilmic";break;case ic:e="AgX";break;case nc:e="Neutral";break;case ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new P;function Fp(){oe.getLuminanceCoefficients(Os);const s=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Op(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function ds(s){return s!==""}function hl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(s){return s.replace(Hp,Vp)}const Gp=new Map;function Vp(s,t){let e=Gt[t];if(e===void 0){const i=Gp.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(s){return s.replace(Wp,Xp)}function Xp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ul(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Yp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vn:case Wn:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $p(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wn:t="ENVMAP_MODE_REFRACTION";break}return t}function Kp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zl:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function jp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Zp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=qp(e),h=Yp(e),c=$p(e),d=Kp(e),u=jp(e),m=Bp(e),g=Op(a),v=n.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),f.length>0&&(f+=`
`)):(p=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),f=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Np("linearToOutputTexel",e.outputColorSpace),Fp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ko(o),o=hl(o,e),o=cl(o,e),r=Ko(r),r=hl(r,e),r=cl(r,e),o=dl(o),r=dl(r),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Cr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=w+p+o,y=w+f+r,A=rl(n,n.VERTEX_SHADER,_),T=rl(n,n.FRAGMENT_SHADER,y);n.attachShader(v,A),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function S(b){if(s.debug.checkShaderErrors){const k=n.getProgramInfoLog(v).trim(),B=n.getShaderInfoLog(A).trim(),W=n.getShaderInfoLog(T).trim();let j=!0,V=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,A,T);else{const Z=ll(n,A,"vertex"),z=ll(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+Z+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(V=!1);V&&(b.diagnostics={runnable:j,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:f}})}n.deleteShader(A),n.deleteShader(T),R=new ta(n,v),I=zp(n,v)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let I;this.getAttributes=function(){return I===void 0&&S(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(v,Lp)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tm(t),e.set(t,i)),i}}class tm{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}}function em(s,t,e,i,n,a,o){const r=new sh,l=new Qp,h=new Set,c=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,m=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return h.add(x),x===0?"uv":`uv${x}`}function f(x,b,k,B,W){const j=B.fog,V=W.geometry,Z=x.isMeshStandardMaterial?B.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||Z),lt=z&&z.mapping===ua?z.image.height:null,rt=v[x.type];x.precision!==null&&(g=n.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=pt!==void 0?pt.length:0;let Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let $,Y,et,st;if(rt){const qe=gi[rt];$=qe.vertexShader,Y=qe.fragmentShader}else $=x.vertexShader,Y=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),st=l.getFragmentShaderID(x);const Mt=s.getRenderTarget(),Ct=W.isInstancedMesh===!0,Ht=W.isBatchedMesh===!0,ie=!!x.map,Kt=!!x.matcap,D=!!z,Ze=!!x.aoMap,Yt=!!x.lightMap,Qt=!!x.bumpMap,Nt=!!x.normalMap,pe=!!x.displacementMap,Bt=!!x.emissiveMap,C=!!x.metalnessMap,M=!!x.roughnessMap,O=x.anisotropy>0,Q=x.clearcoat>0,nt=x.dispersion>0,J=x.iridescence>0,Et=x.sheen>0,dt=x.transmission>0,vt=O&&!!x.anisotropyMap,te=Q&&!!x.clearcoatMap,at=Q&&!!x.clearcoatNormalMap,_t=Q&&!!x.clearcoatRoughnessMap,kt=J&&!!x.iridescenceMap,Ft=J&&!!x.iridescenceThicknessMap,yt=Et&&!!x.sheenColorMap,$t=Et&&!!x.sheenRoughnessMap,zt=!!x.specularMap,ue=!!x.specularColorMap,U=!!x.specularIntensityMap,mt=dt&&!!x.transmissionMap,q=dt&&!!x.thicknessMap,tt=!!x.gradientMap,ut=!!x.alphaMap,gt=x.alphaTest>0,jt=!!x.alphaHash,we=!!x.extensions;let Xe=Yi;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const ne={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:Y,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&W._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&W.instanceColor!==null,instancingMorph:Ct&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ji,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:Kt,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:lt,aoMap:Ze,lightMap:Yt,bumpMap:Qt,normalMap:Nt,displacementMap:m&&pe,emissiveMap:Bt,normalMapObjectSpace:Nt&&x.normalMapType===rc,normalMapTangentSpace:Nt&&x.normalMapType===Jl,metalnessMap:C,roughnessMap:M,anisotropy:O,anisotropyMap:vt,clearcoat:Q,clearcoatMap:te,clearcoatNormalMap:at,clearcoatRoughnessMap:_t,dispersion:nt,iridescence:J,iridescenceMap:kt,iridescenceThicknessMap:Ft,sheen:Et,sheenColorMap:yt,sheenRoughnessMap:$t,specularMap:zt,specularColorMap:ue,specularIntensityMap:U,transmission:dt,transmissionMap:mt,thicknessMap:q,gradientMap:tt,opaque:x.transparent===!1&&x.blending===dn&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:gt,alphaHash:jt,combine:x.combine,mapUv:ie&&p(x.map.channel),aoMapUv:Ze&&p(x.aoMap.channel),lightMapUv:Yt&&p(x.lightMap.channel),bumpMapUv:Qt&&p(x.bumpMap.channel),normalMapUv:Nt&&p(x.normalMap.channel),displacementMapUv:pe&&p(x.displacementMap.channel),emissiveMapUv:Bt&&p(x.emissiveMap.channel),metalnessMapUv:C&&p(x.metalnessMap.channel),roughnessMapUv:M&&p(x.roughnessMap.channel),anisotropyMapUv:vt&&p(x.anisotropyMap.channel),clearcoatMapUv:te&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:$t&&p(x.sheenRoughnessMap.channel),specularMapUv:zt&&p(x.specularMap.channel),specularColorMapUv:ue&&p(x.specularColorMap.channel),specularIntensityMapUv:U&&p(x.specularIntensityMap.channel),transmissionMapUv:mt&&p(x.transmissionMap.channel),thicknessMapUv:q&&p(x.thicknessMap.channel),alphaMapUv:ut&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Nt||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(ie||ut),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Wt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ve,flipSided:x.side===Oe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function w(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)b.push(k),b.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(_(b,x),y(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),x.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.alphaToCoverage&&r.enable(20),x.push(r.mask)}function A(x){const b=v[x.type];let k;if(b){const B=gi[b];k=Fc.clone(B.uniforms)}else k=x.uniforms;return k}function T(x,b){let k;for(let B=0,W=c.length;B<W;B++){const j=c[B];if(j.cacheKey===b){k=j,++k.usedTimes;break}}return k===void 0&&(k=new Zp(s,b,x,a),c.push(k)),k}function S(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:w,getUniforms:A,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:I}}function im(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let r=s.get(o);return r===void 0&&(r={},s.set(o,r)),r}function i(o){s.delete(o)}function n(o,r,l){s.get(o)[r]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function nm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pl(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(d,u,m,g,v,p){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),t++,f}function r(d,u,m,g,v,p){const f=o(d,u,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function l(d,u,m,g,v,p){const f=o(d,u,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function h(d,u){e.length>1&&e.sort(d||nm),i.length>1&&i.sort(u||fl),n.length>1&&n.sort(u||fl)}function c(){for(let d=t,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:l,finish:c,sort:h}}function sm(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new pl,s.set(i,[o])):n>=a.length?(o=new pl,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new K};break;case"SpotLight":e={position:new P,direction:new P,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function om(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let rm=0;function lm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hm(s){const t=new am,e=om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const n=new P,a=new Jt,o=new Jt;function r(h){let c=0,d=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,w=0,_=0,y=0,A=0,T=0,S=0;h.sort(lm);for(let I=0,x=h.length;I<x;I++){const b=h[I],k=b.color,B=b.intensity,W=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=k.r*B,d+=k.g*B,u+=k.b*B;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],B);S++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Z=b.shadow,z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=b.shadow.matrix,w++}i.directional[m]=V,m++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(k).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[v]=V;const Z=b.shadow;if(b.map&&(i.spotLightMap[A]=b.map,A++,Z.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[v]=Z.matrix,b.castShadow){const z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=j,y++}v++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=V,p++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const Z=b.shadow,z=e.get(b);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=b.shadow.matrix,_++}i.point[g]=V,g++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(B),V.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[f]=V,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==w||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==S)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=S,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=w,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=S,i.version=rm++)}function l(h,c){let d=0,u=0,m=0,g=0,v=0;const p=c.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){const _=h[f];if(_.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),d++}else if(_.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:r,setupView:l,state:i}}function ml(s){const t=new hm(s),e=[],i=[];function n(c){h.camera=c,e.length=0,i.length=0}function a(c){e.push(c)}function o(c){i.push(c)}function r(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function cm(s){let t=new WeakMap;function e(n,a=0){const o=t.get(n);let r;return o===void 0?(r=new ml(s),t.set(n,[r])):a>=o.length?(r=new ml(s),o.push(r)):r=o[a],r}function i(){t=new WeakMap}return{get:e,dispose:i}}class dm extends mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class um extends mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function mm(s,t,e){let i=new cr;const n=new Ot,a=new Ot,o=new ce,r=new dm({depthPacking:oc}),l=new um,h={},c=e.maxTextureSize,d={[Ki]:Oe,[Oe]:Ki,[ve]:ve},u=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new L(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let f=this.type;this.render=function(T,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),k=s.state;k.setBlending(qi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=f!==Ci&&this.type===Ci,W=f===Ci&&this.type!==Ci;for(let j=0,V=T.length;j<V;j++){const Z=T[j],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const lt=z.getFrameExtents();if(n.multiply(lt),a.copy(z.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/lt.x),n.x=a.x*lt.x,z.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/lt.y),n.y=a.y*lt.y,z.mapSize.y=a.y)),z.map===null||B===!0||W===!0){const pt=this.type!==Ci?{minFilter:Ke,magFilter:Ke}:{};z.map!==null&&z.map.dispose(),z.map=new fn(n.x,n.y,pt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const rt=z.getViewportCount();for(let pt=0;pt<rt;pt++){const It=z.getViewport(pt);o.set(a.x*It.x,a.y*It.y,a.x*It.z,a.y*It.w),k.viewport(o),z.updateMatrices(Z,pt),i=z.getFrustum(),y(S,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Ci&&w(z,R),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(I,x,b)};function w(T,S){const R=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,R,u,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,R,m,v,null)}function _(T,S,R,I){let x=null;const b=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=R.isPointLight===!0?l:r,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=x.uuid,B=S.uuid;let W=h[k];W===void 0&&(W={},h[k]=W);let j=W[B];j===void 0&&(j=x.clone(),W[B]=j,S.addEventListener("dispose",A)),x=j}if(x.visible=S.visible,x.wireframe=S.wireframe,I===Ci?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:d[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=s.properties.get(x);k.light=R}return x}function y(T,S,R,I,x){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const B=t.update(T),W=T.material;if(Array.isArray(W)){const j=B.groups;for(let V=0,Z=j.length;V<Z;V++){const z=j[V],lt=W[z.materialIndex];if(lt&&lt.visible){const rt=_(T,lt,I,x);T.onBeforeShadow(s,T,S,R,B,rt,z),s.renderBufferDirect(R,null,B,rt,T,z),T.onAfterShadow(s,T,S,R,B,rt,z)}}}else if(W.visible){const j=_(T,W,I,x);T.onBeforeShadow(s,T,S,R,B,j,null),s.renderBufferDirect(R,null,B,j,T,null),T.onAfterShadow(s,T,S,R,B,j,null)}}const k=T.children;for(let B=0,W=k.length;B<W;B++)y(k[B],S,R,I,x)}function A(T){T.target.removeEventListener("dispose",A);for(const R in h){const I=h[R],x=T.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}const gm={[co]:uo,[fo]:go,[po]:xo,[Gn]:mo,[uo]:co,[go]:fo,[xo]:po,[mo]:Gn};function xm(s){function t(){let U=!1;const mt=new ce;let q=null;const tt=new ce(0,0,0,0);return{setMask:function(ut){q!==ut&&!U&&(s.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){U=ut},setClear:function(ut,gt,jt,we,Xe){Xe===!0&&(ut*=we,gt*=we,jt*=we),mt.set(ut,gt,jt,we),tt.equals(mt)===!1&&(s.clearColor(ut,gt,jt,we),tt.copy(mt))},reset:function(){U=!1,q=null,tt.set(-1,0,0,0)}}}function e(){let U=!1,mt=!1,q=null,tt=null,ut=null;return{setReversed:function(gt){mt=gt},setTest:function(gt){gt?et(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(gt){q!==gt&&!U&&(s.depthMask(gt),q=gt)},setFunc:function(gt){if(mt&&(gt=gm[gt]),tt!==gt){switch(gt){case co:s.depthFunc(s.NEVER);break;case uo:s.depthFunc(s.ALWAYS);break;case fo:s.depthFunc(s.LESS);break;case Gn:s.depthFunc(s.LEQUAL);break;case po:s.depthFunc(s.EQUAL);break;case mo:s.depthFunc(s.GEQUAL);break;case go:s.depthFunc(s.GREATER);break;case xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=gt}},setLocked:function(gt){U=gt},setClear:function(gt){ut!==gt&&(s.clearDepth(gt),ut=gt)},reset:function(){U=!1,q=null,tt=null,ut=null}}}function i(){let U=!1,mt=null,q=null,tt=null,ut=null,gt=null,jt=null,we=null,Xe=null;return{setTest:function(ne){U||(ne?et(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(ne){mt!==ne&&!U&&(s.stencilMask(ne),mt=ne)},setFunc:function(ne,qe,Si){(q!==ne||tt!==qe||ut!==Si)&&(s.stencilFunc(ne,qe,Si),q=ne,tt=qe,ut=Si)},setOp:function(ne,qe,Si){(gt!==ne||jt!==qe||we!==Si)&&(s.stencilOp(ne,qe,Si),gt=ne,jt=qe,we=Si)},setLocked:function(ne){U=ne},setClear:function(ne){Xe!==ne&&(s.clearStencil(ne),Xe=ne)},reset:function(){U=!1,mt=null,q=null,tt=null,ut=null,gt=null,jt=null,we=null,Xe=null}}}const n=new t,a=new e,o=new i,r=new WeakMap,l=new WeakMap;let h={},c={},d=new WeakMap,u=[],m=null,g=!1,v=null,p=null,f=null,w=null,_=null,y=null,A=null,T=new K(0,0,0),S=0,R=!1,I=null,x=null,b=null,k=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=V>=2);let z=null,lt={};const rt=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),It=new ce().fromArray(rt),Wt=new ce().fromArray(pt);function $(U,mt,q,tt){const ut=new Uint8Array(4),gt=s.createTexture();s.bindTexture(U,gt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<q;jt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(mt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return gt}const Y={};Y[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Gn),Yt(!1),Qt(Er),et(s.CULL_FACE),D(qi);function et(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function st(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Mt(U,mt){return c[U]!==mt?(s.bindFramebuffer(U,mt),c[U]=mt,U===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=mt),U===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ct(U,mt){let q=u,tt=!1;if(U){q=d.get(mt),q===void 0&&(q=[],d.set(mt,q));const ut=U.textures;if(q.length!==ut.length||q[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,jt=ut.length;gt<jt;gt++)q[gt]=s.COLOR_ATTACHMENT0+gt;q.length=ut.length,tt=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,tt=!0);tt&&s.drawBuffers(q)}function Ht(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const ie={[rn]:s.FUNC_ADD,[Dh]:s.FUNC_SUBTRACT,[Uh]:s.FUNC_REVERSE_SUBTRACT};ie[Nh]=s.MIN,ie[kh]=s.MAX;const Kt={[Fh]:s.ZERO,[Bh]:s.ONE,[Oh]:s.SRC_COLOR,[lo]:s.SRC_ALPHA,[Xh]:s.SRC_ALPHA_SATURATE,[Vh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[ho]:s.ONE_MINUS_SRC_ALPHA,[Wh]:s.ONE_MINUS_DST_COLOR,[Gh]:s.ONE_MINUS_DST_ALPHA,[qh]:s.CONSTANT_COLOR,[Yh]:s.ONE_MINUS_CONSTANT_COLOR,[$h]:s.CONSTANT_ALPHA,[Kh]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,mt,q,tt,ut,gt,jt,we,Xe,ne){if(U===qi){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),U!==Ih){if(U!==v||ne!==R){if((p!==rn||_!==rn)&&(s.blendEquation(s.FUNC_ADD),p=rn,_=rn),ne)switch(U){case dn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fe:s.blendFunc(s.ONE,s.ONE);break;case Tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ar:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ar:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,w=null,y=null,A=null,T.set(0,0,0),S=0,v=U,R=ne}return}ut=ut||mt,gt=gt||q,jt=jt||tt,(mt!==p||ut!==_)&&(s.blendEquationSeparate(ie[mt],ie[ut]),p=mt,_=ut),(q!==f||tt!==w||gt!==y||jt!==A)&&(s.blendFuncSeparate(Kt[q],Kt[tt],Kt[gt],Kt[jt]),f=q,w=tt,y=gt,A=jt),(we.equals(T)===!1||Xe!==S)&&(s.blendColor(we.r,we.g,we.b,Xe),T.copy(we),S=Xe),v=U,R=!1}function Ze(U,mt){U.side===ve?st(s.CULL_FACE):et(s.CULL_FACE);let q=U.side===Oe;mt&&(q=!q),Yt(q),U.blending===dn&&U.transparent===!1?D(qi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),n.setMask(U.colorWrite);const tt=U.stencilWrite;o.setTest(tt),tt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function Qt(U){U!==Ch?(et(s.CULL_FACE),U!==x&&(U===Er?s.cullFace(s.BACK):U===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),x=U}function Nt(U){U!==b&&(j&&s.lineWidth(U),b=U)}function pe(U,mt,q){U?(et(s.POLYGON_OFFSET_FILL),(k!==mt||B!==q)&&(s.polygonOffset(mt,q),k=mt,B=q)):st(s.POLYGON_OFFSET_FILL)}function Bt(U){U?et(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+W-1),z!==U&&(s.activeTexture(U),z=U)}function M(U,mt,q){q===void 0&&(z===null?q=s.TEXTURE0+W-1:q=z);let tt=lt[q];tt===void 0&&(tt={type:void 0,texture:void 0},lt[q]=tt),(tt.type!==U||tt.texture!==mt)&&(z!==q&&(s.activeTexture(q),z=q),s.bindTexture(U,mt||Y[U]),tt.type=U,tt.texture=mt)}function O(){const U=lt[z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){It.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),It.copy(U))}function yt(U){Wt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Wt.copy(U))}function $t(U,mt){let q=l.get(mt);q===void 0&&(q=new WeakMap,l.set(mt,q));let tt=q.get(U);tt===void 0&&(tt=s.getUniformBlockIndex(mt,U.name),q.set(U,tt))}function zt(U,mt){const tt=l.get(mt).get(U);r.get(mt)!==tt&&(s.uniformBlockBinding(mt,tt,U.__bindingPointIndex),r.set(mt,tt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},z=null,lt={},c={},d=new WeakMap,u=[],m=null,g=!1,v=null,p=null,f=null,w=null,_=null,y=null,A=null,T=new K(0,0,0),S=0,R=!1,I=null,x=null,b=null,k=null,B=null,It.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:et,disable:st,bindFramebuffer:Mt,drawBuffers:Ct,useProgram:Ht,setBlending:D,setMaterial:Ze,setFlipSided:Yt,setCullFace:Qt,setLineWidth:Nt,setPolygonOffset:pe,setScissorTest:Bt,activeTexture:C,bindTexture:M,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:_t,texImage3D:kt,updateUBOMapping:$t,uniformBlockBinding:zt,texStorage2D:te,texStorage3D:at,texSubImage2D:J,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Ft,viewport:yt,reset:ue}}function gl(s,t,e,i){const n=vm(i);switch(e){case ql:return s*t;case $l:return s*t;case Kl:return s*t*2;case ar:return s*t/n.components*n.byteLength;case or:return s*t/n.components*n.byteLength;case jl:return s*t*2/n.components*n.byteLength;case rr:return s*t*2/n.components*n.byteLength;case Yl:return s*t*3/n.components*n.byteLength;case pi:return s*t*4/n.components*n.byteLength;case lr:return s*t*4/n.components*n.byteLength;case $s:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case js:case Zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:case bo:return Math.max(s,16)*Math.max(t,8)/4;case wo:case So:return Math.max(s,8)*Math.max(t,8)/2;case Eo:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Js:case Go:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zl:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xo:case qo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(s){switch(s){case Di:case Vl:return{byteLength:1,components:1};case fs:case Wl:case ps:return{byteLength:2,components:1};case nr:case sr:return{byteLength:2,components:4};case un:case ir:case vi:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _m(s,t,e,i,n,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,c=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return m?new OffscreenCanvas(C,M):ra("canvas")}function v(C,M,O){let Q=1;const nt=Bt(C);if((nt.width>O||nt.height>O)&&(Q=O/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*nt.width),Et=Math.floor(Q*nt.height);d===void 0&&(d=g(J,Et));const dt=M?g(J,Et):d;return dt.width=J,dt.height=Et,dt.getContext("2d").drawImage(C,0,0,J,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Et+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Ke&&C.minFilter!==ui}function f(C){s.generateMipmap(C)}function w(C,M,O,Q,nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===s.RED&&(O===s.FLOAT&&(J=s.R32F),O===s.HALF_FLOAT&&(J=s.R16F),O===s.UNSIGNED_BYTE&&(J=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.R8UI),O===s.UNSIGNED_SHORT&&(J=s.R16UI),O===s.UNSIGNED_INT&&(J=s.R32UI),O===s.BYTE&&(J=s.R8I),O===s.SHORT&&(J=s.R16I),O===s.INT&&(J=s.R32I)),M===s.RG&&(O===s.FLOAT&&(J=s.RG32F),O===s.HALF_FLOAT&&(J=s.RG16F),O===s.UNSIGNED_BYTE&&(J=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RG8UI),O===s.UNSIGNED_SHORT&&(J=s.RG16UI),O===s.UNSIGNED_INT&&(J=s.RG32UI),O===s.BYTE&&(J=s.RG8I),O===s.SHORT&&(J=s.RG16I),O===s.INT&&(J=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGB8UI),O===s.UNSIGNED_SHORT&&(J=s.RGB16UI),O===s.UNSIGNED_INT&&(J=s.RGB32UI),O===s.BYTE&&(J=s.RGB8I),O===s.SHORT&&(J=s.RGB16I),O===s.INT&&(J=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),O===s.UNSIGNED_INT&&(J=s.RGBA32UI),O===s.BYTE&&(J=s.RGBA8I),O===s.SHORT&&(J=s.RGBA16I),O===s.INT&&(J=s.RGBA32I)),M===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),M===s.RGBA){const Et=nt?na:oe.getTransfer(Q);O===s.FLOAT&&(J=s.RGBA32F),O===s.HALF_FLOAT&&(J=s.RGBA16F),O===s.UNSIGNED_BYTE&&(J=Et===ge?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(C,M){let O;return C?M===null||M===un||M===Xn?O=s.DEPTH24_STENCIL8:M===vi?O=s.DEPTH32F_STENCIL8:M===fs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===un||M===Xn?O=s.DEPTH_COMPONENT24:M===vi?O=s.DEPTH_COMPONENT32F:M===fs&&(O=s.DEPTH_COMPONENT16),O}function y(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ke&&C.minFilter!==ui?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&c.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),I(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const O=C.source,Q=u.get(O);if(Q){const nt=Q[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(C),Object.keys(Q).length===0&&u.delete(O)}i.remove(C)}function R(C){const M=i.get(C);s.deleteTexture(M.__webglTexture);const O=C.source,Q=u.get(O);delete Q[M.__cacheKey],o.memory.textures--}function I(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let nt=0;nt<M.__webglFramebuffer[Q].length;nt++)s.deleteFramebuffer(M.__webglFramebuffer[Q][nt]);else s.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)s.deleteFramebuffer(M.__webglFramebuffer[Q]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=C.textures;for(let Q=0,nt=O.length;Q<nt;Q++){const J=i.get(O[Q]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(O[Q])}i.remove(C)}let x=0;function b(){x=0}function k(){const C=x;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),x+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const O=i.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(O,C,M);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function j(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){Wt(O,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function V(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){Wt(O,C,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function Z(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){$(O,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const z={[ia]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[yo]:s.MIRRORED_REPEAT},lt={[Ke]:s.NEAREST,[sc]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[ba]:s.LINEAR_MIPMAP_NEAREST,[cn]:s.LINEAR_MIPMAP_LINEAR},rt={[lc]:s.NEVER,[pc]:s.ALWAYS,[hc]:s.LESS,[Ql]:s.LEQUAL,[cc]:s.EQUAL,[fc]:s.GEQUAL,[dc]:s.GREATER,[uc]:s.NOTEQUAL};function pt(C,M){if(M.type===vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ui||M.magFilter===ba||M.magFilter===_s||M.magFilter===cn||M.minFilter===ui||M.minFilter===ba||M.minFilter===_s||M.minFilter===cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,z[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,z[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,z[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,lt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ke||M.minFilter!==_s&&M.minFilter!==cn||M.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function It(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const Q=M.source;let nt=u.get(Q);nt===void 0&&(nt={},u.set(Q,nt));const J=B(M);if(J!==C.__cacheKey){nt[J]===void 0&&(nt[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),nt[J].usedTimes++;const Et=nt[C.__cacheKey];Et!==void 0&&(nt[C.__cacheKey].usedTimes--,Et.usedTimes===0&&R(M)),C.__cacheKey=J,C.__webglTexture=nt[J].texture}return O}function Wt(C,M,O){let Q=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=s.TEXTURE_3D);const nt=It(C,M),J=M.source;e.bindTexture(Q,C.__webglTexture,s.TEXTURE0+O);const Et=i.get(J);if(J.version!==Et.__version||nt===!0){e.activeTexture(s.TEXTURE0+O);const dt=oe.getPrimaries(oe.workingColorSpace),vt=M.colorSpace===Vi?null:oe.getPrimaries(M.colorSpace),te=M.colorSpace===Vi||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let at=v(M.image,!1,n.maxTextureSize);at=pe(M,at);const _t=a.convert(M.format,M.colorSpace),kt=a.convert(M.type);let Ft=w(M.internalFormat,_t,kt,M.colorSpace,M.isVideoTexture);pt(Q,M);let yt;const $t=M.mipmaps,zt=M.isVideoTexture!==!0,ue=Et.__version===void 0||nt===!0,U=J.dataReady,mt=y(M,at);if(M.isDepthTexture)Ft=_(M.format===qn,M.type),ue&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ft,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Ft,at.width,at.height,0,_t,kt,null));else if(M.isDataTexture)if($t.length>0){zt&&ue&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,$t[0].width,$t[0].height);for(let q=0,tt=$t.length;q<tt;q++)yt=$t[q],zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,_t,kt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ft,yt.width,yt.height,0,_t,kt,yt.data);M.generateMipmaps=!1}else zt?(ue&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,at.width,at.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,_t,kt,at.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,at.width,at.height,0,_t,kt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){zt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,$t[0].width,$t[0].height,at.depth);for(let q=0,tt=$t.length;q<tt;q++)if(yt=$t[q],M.format!==pi)if(_t!==null)if(zt){if(U)if(M.layerUpdates.size>0){const ut=gl(yt.width,yt.height,M.format,M.type);for(const gt of M.layerUpdates){const jt=yt.data.subarray(gt*ut/yt.data.BYTES_PER_ELEMENT,(gt+1)*ut/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,gt,yt.width,yt.height,1,_t,jt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,at.depth,_t,yt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ft,yt.width,yt.height,at.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,yt.width,yt.height,at.depth,_t,kt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ft,yt.width,yt.height,at.depth,0,_t,kt,yt.data)}else{zt&&ue&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,$t[0].width,$t[0].height);for(let q=0,tt=$t.length;q<tt;q++)yt=$t[q],M.format!==pi?_t!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt.width,yt.height,_t,kt,yt.data):e.texImage2D(s.TEXTURE_2D,q,Ft,yt.width,yt.height,0,_t,kt,yt.data)}else if(M.isDataArrayTexture)if(zt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,at.width,at.height,at.depth),U)if(M.layerUpdates.size>0){const q=gl(at.width,at.height,M.format,M.type);for(const tt of M.layerUpdates){const ut=at.data.subarray(tt*q/at.data.BYTES_PER_ELEMENT,(tt+1)*q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,_t,kt,ut)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,kt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,at.width,at.height,at.depth,0,_t,kt,at.data);else if(M.isData3DTexture)zt?(ue&&e.texStorage3D(s.TEXTURE_3D,mt,Ft,at.width,at.height,at.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,kt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,at.width,at.height,at.depth,0,_t,kt,at.data);else if(M.isFramebufferTexture){if(ue)if(zt)e.texStorage2D(s.TEXTURE_2D,mt,Ft,at.width,at.height);else{let q=at.width,tt=at.height;for(let ut=0;ut<mt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Ft,q,tt,0,_t,kt,null),q>>=1,tt>>=1}}else if($t.length>0){if(zt&&ue){const q=Bt($t[0]);e.texStorage2D(s.TEXTURE_2D,mt,Ft,q.width,q.height)}for(let q=0,tt=$t.length;q<tt;q++)yt=$t[q],zt?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t,kt,yt):e.texImage2D(s.TEXTURE_2D,q,Ft,_t,kt,yt);M.generateMipmaps=!1}else if(zt){if(ue){const q=Bt(at);e.texStorage2D(s.TEXTURE_2D,mt,Ft,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,kt,at)}else e.texImage2D(s.TEXTURE_2D,0,Ft,_t,kt,at);p(M)&&f(Q),Et.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,O){if(M.image.length!==6)return;const Q=It(C,M),nt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const J=i.get(nt);if(nt.version!==J.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);const Et=oe.getPrimaries(oe.workingColorSpace),dt=M.colorSpace===Vi?null:oe.getPrimaries(M.colorSpace),vt=M.colorSpace===Vi||Et===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const te=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!te&&!at?_t[tt]=v(M.image[tt],!0,n.maxCubemapSize):_t[tt]=at?M.image[tt].image:M.image[tt],_t[tt]=pe(M,_t[tt]);const kt=_t[0],Ft=a.convert(M.format,M.colorSpace),yt=a.convert(M.type),$t=w(M.internalFormat,Ft,yt,M.colorSpace),zt=M.isVideoTexture!==!0,ue=J.__version===void 0||Q===!0,U=nt.dataReady;let mt=y(M,kt);pt(s.TEXTURE_CUBE_MAP,M);let q;if(te){zt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,kt.width,kt.height);for(let tt=0;tt<6;tt++){q=_t[tt].mipmaps;for(let ut=0;ut<q.length;ut++){const gt=q[ut];M.format!==pi?Ft!==null?zt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,gt.width,gt.height,Ft,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,gt.width,gt.height,Ft,yt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,$t,gt.width,gt.height,0,Ft,yt,gt.data)}}}else{if(q=M.mipmaps,zt&&ue){q.length>0&&mt++;const tt=Bt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Ft,yt,_t[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,_t[tt].width,_t[tt].height,0,Ft,yt,_t[tt].data);for(let ut=0;ut<q.length;ut++){const jt=q[ut].image[tt].image;zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,jt.width,jt.height,Ft,yt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,$t,jt.width,jt.height,0,Ft,yt,jt.data)}}else{zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,yt,_t[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Ft,yt,_t[tt]);for(let ut=0;ut<q.length;ut++){const gt=q[ut];zt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,Ft,yt,gt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,$t,Ft,yt,gt.image[tt])}}}p(M)&&f(s.TEXTURE_CUBE_MAP),J.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Y(C,M,O,Q,nt,J){const Et=a.convert(O.format,O.colorSpace),dt=a.convert(O.type),vt=w(O.internalFormat,Et,dt,O.colorSpace);if(!i.get(M).__hasExternalTextures){const at=Math.max(1,M.width>>J),_t=Math.max(1,M.height>>J);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,vt,at,_t,M.depth,0,Et,dt,null):e.texImage2D(nt,J,vt,at,_t,0,Et,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Qt(M)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,nt,i.get(O).__webglTexture,0,Yt(M)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,nt,i.get(O).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(C,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,J=_(M.stencilBuffer,nt),Et=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=Yt(M);Qt(M)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,C)}else{const Q=M.textures;for(let nt=0;nt<Q.length;nt++){const J=Q[nt],Et=a.convert(J.format,J.colorSpace),dt=a.convert(J.type),vt=w(J.internalFormat,Et,dt,J.colorSpace),te=Yt(M);O&&Qt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,vt,M.width,M.height):Qt(M)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,vt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,vt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,nt=Yt(M);if(M.depthTexture.format===zn)Qt(M)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(M.depthTexture.format===qn)Qt(M)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const M=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");st(M.__webglFramebuffer,C)}else if(O){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=s.createRenderbuffer(),et(M.__webglDepthbuffer[Q],C,!1);else{const nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),et(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(C,M,O){const Q=i.get(C);M!==void 0&&Y(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Mt(C)}function Ht(C){const M=C.texture,O=i.get(C),Q=i.get(M);C.addEventListener("dispose",T);const nt=C.textures,J=C.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=M.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)O.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else O.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)O.__webglFramebuffer[dt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Et)for(let dt=0,vt=nt.length;dt<vt;dt++){const te=i.get(nt[dt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Qt(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const vt=nt[dt];O.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const te=a.convert(vt.format,vt.colorSpace),at=a.convert(vt.type),_t=w(vt.internalFormat,te,at,vt.colorSpace,C.isXRRenderTarget===!0),kt=Yt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),et(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(s.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Y(O.__webglFramebuffer[dt][vt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Y(O.__webglFramebuffer[dt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,vt=nt.length;dt<vt;dt++){const te=nt[dt],at=i.get(te);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),pt(s.TEXTURE_2D,te),Y(O.__webglFramebuffer,C,te,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),p(te)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),pt(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)Y(O.__webglFramebuffer[vt],C,M,s.COLOR_ATTACHMENT0,dt,vt);else Y(O.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,dt,0);p(M)&&f(dt),e.unbindTexture()}C.depthBuffer&&Mt(C)}function ie(C){const M=C.textures;for(let O=0,Q=M.length;O<Q;O++){const nt=M[O];if(p(nt)){const J=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Et=i.get(nt).__webglTexture;e.bindTexture(J,Et),f(J),e.unbindTexture()}}}const Kt=[],D=[];function Ze(C){if(C.samples>0){if(Qt(C)===!1){const M=C.textures,O=C.width,Q=C.height;let nt=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(C),dt=M.length>1;if(dt)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const te=i.get(M[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,O,Q,0,0,O,Q,nt,s.NEAREST),l===!0&&(Kt.length=0,D.length=0,Kt.push(s.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Kt.push(J),D.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const te=i.get(M[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Yt(C){return Math.min(n.maxSamples,C.samples)}function Qt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function pe(C,M){const O=C.colorSpace,Q=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ji&&O!==Vi&&(oe.getTransfer(O)===ge?(Q!==pi||nt!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Ct,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Qt}function ym(s,t){function e(i,n=Vi){let a;const o=oe.getTransfer(n);if(i===Di)return s.UNSIGNED_BYTE;if(i===nr)return s.UNSIGNED_SHORT_4_4_4_4;if(i===sr)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Vl)return s.BYTE;if(i===Wl)return s.SHORT;if(i===fs)return s.UNSIGNED_SHORT;if(i===ir)return s.INT;if(i===un)return s.UNSIGNED_INT;if(i===vi)return s.FLOAT;if(i===ps)return s.HALF_FLOAT;if(i===ql)return s.ALPHA;if(i===Yl)return s.RGB;if(i===pi)return s.RGBA;if(i===$l)return s.LUMINANCE;if(i===Kl)return s.LUMINANCE_ALPHA;if(i===zn)return s.DEPTH_COMPONENT;if(i===qn)return s.DEPTH_STENCIL;if(i===ar)return s.RED;if(i===or)return s.RED_INTEGER;if(i===jl)return s.RG;if(i===rr)return s.RG_INTEGER;if(i===lr)return s.RGBA_INTEGER;if(i===$s||i===Ks||i===js||i===Zs)if(o===ge)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===$s)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===$s)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===Mo||i===So||i===bo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===So)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===To||i===Ao)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Eo||i===To)return o===ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ao)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ro||i===Co||i===Po||i===Lo||i===Io||i===Do||i===Uo||i===No||i===ko||i===Fo||i===Bo||i===Oo||i===zo||i===Ho)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ro)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Po)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===No)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ko)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zo)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ho)return o===ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Js||i===Go||i===Vo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Js)return o===ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Wo||i===Xo||i===qo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Js)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Wo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class wm extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),f=this._getHandJoint(h,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),m=.02,g=.005;h.inputState.pinching&&u>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bm=`
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

}`;class Em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new ze,a=t.properties.get(n);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ui({vertexShader:Sm,fragmentShader:bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tm extends $n{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",l=1,h=null,c=null,d=null,u=null,m=null,g=null;const v=new Em,p=e.getContextAttributes();let f=null,w=null;const _=[],y=[],A=new Ot;let T=null;const S=new $e;S.layers.enable(1),S.viewport=new ce;const R=new $e;R.layers.enable(2),R.viewport=new ce;const I=[S,R],x=new wm;x.layers.enable(1),x.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=_[$];return Y===void 0&&(Y=new to,_[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=_[$];return Y===void 0&&(Y=new to,_[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=_[$];return Y===void 0&&(Y=new to,_[$]=Y),Y.getHandSpace()};function B($){const Y=y.indexOf($.inputSource);if(Y===-1)return;const et=_[Y];et!==void 0&&(et.update($.inputSource,$.frame,h||o),et.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",j);for(let $=0;$<_.length;$++){const Y=y[$];Y!==null&&(y[$]=null,_[$].disconnect(Y))}b=null,k=null,v.reset(),t.setRenderTarget(f),m=null,u=null,d=null,n=null,w=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",W),n.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),n.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,e,Y),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new fn(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,et=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=p.stencil?qn:zn,et=p.stencil?Xn:un);const Mt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:a};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Mt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new fn(u.textureWidth,u.textureHeight,{format:pi,type:Di,depthTexture:new fh(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(r),Wt.setContext(n),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j($){for(let Y=0;Y<$.removed.length;Y++){const et=$.removed[Y],st=y.indexOf(et);st>=0&&(y[st]=null,_[st].disconnect(et))}for(let Y=0;Y<$.added.length;Y++){const et=$.added[Y];let st=y.indexOf(et);if(st===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=y.length){y.push(et),st=Ct;break}else if(y[Ct]===null){y[Ct]=et,st=Ct;break}if(st===-1)break}const Mt=_[st];Mt&&Mt.connect(et)}}const V=new P,Z=new P;function z($,Y,et){V.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(et.matrixWorld);const st=V.distanceTo(Z),Mt=Y.projectionMatrix.elements,Ct=et.projectionMatrix.elements,Ht=Mt[14]/(Mt[10]-1),ie=Mt[14]/(Mt[10]+1),Kt=(Mt[9]+1)/Mt[5],D=(Mt[9]-1)/Mt[5],Ze=(Mt[8]-1)/Mt[0],Yt=(Ct[8]+1)/Ct[0],Qt=Ht*Ze,Nt=Ht*Yt,pe=st/(-Ze+Yt),Bt=pe*-Ze;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(pe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const C=Ht+pe,M=ie+pe,O=Qt-Bt,Q=Nt+(st-Bt),nt=Kt*ie/M*C,J=D*ie/M*C;$.projectionMatrix.makePerspective(O,Q,nt,J,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let Y=$.near,et=$.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(et=v.depthFar)),x.near=R.near=S.near=Y,x.far=R.far=S.far=et,(b!==x.near||k!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,k=x.far);const st=$.parent,Mt=x.cameras;lt(x,st);for(let Ct=0;Ct<Mt.length;Ct++)lt(Mt[Ct],st);Mt.length===2?z(x,S,R):x.projectionMatrix.copy(S.projectionMatrix),rt($,x,st)};function rt($,Y,et){et===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(et.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$o*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let pt=null;function It($,Y){if(c=Y.getViewerPose(h||o),g=Y,c!==null){const et=c.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let st=!1;et.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let Ct=0;Ct<et.length;Ct++){const Ht=et[Ct];let ie=null;if(m!==null)ie=m.getViewport(Ht);else{const D=d.getViewSubImage(u,Ht);ie=D.viewport,Ct===0&&(t.setRenderTargetTextures(w,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(w))}let Kt=I[Ct];Kt===void 0&&(Kt=new $e,Kt.layers.enable(Ct),Kt.viewport=new ce,I[Ct]=Kt),Kt.matrix.fromArray(Ht.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ht.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ct===0&&(x.matrix.copy(Kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Kt)}const Mt=n.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Ct=d.getDepthInformation(et[0]);Ct&&Ct.isValid&&Ct.texture&&v.init(t,Ct,n.renderState)}}for(let et=0;et<_.length;et++){const st=y[et],Mt=_[et];st!==null&&Mt!==void 0&&Mt.update(st,Y,h||o)}pt&&pt($,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Wt=new dh;Wt.setAnimationLoop(It),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}}const sn=new je,Am=new Jt;function Rm(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,lh(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,w,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),d(p,f)):f.isMeshPhongMaterial?(a(p,f),c(p,f)):f.isMeshStandardMaterial?(a(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),v(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?l(p,f,w,_):f.isSpriteMaterial?h(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),_=w.envMap,y=w.envMapRotation;_&&(p.envMap.value=_,sn.copy(y),sn.x*=-1,sn.y*=-1,sn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),p.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(sn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=_*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Cm(s,t,e,i){let n={},a={},o=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const y=_.program;i.uniformBlockBinding(w,y)}function h(w,_){let y=n[w.id];y===void 0&&(g(w),y=c(w),n[w.id]=y,w.addEventListener("dispose",p));const A=_.program;i.updateUBOMapping(w,A);const T=t.render.frame;a[w.id]!==T&&(u(w),a[w.id]=T)}function c(w){const _=d();w.__bindingPointIndex=_;const y=s.createBuffer(),A=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function d(){for(let w=0;w<r;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const _=n[w.id],y=w.uniforms,A=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,S=y.length;T<S;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let I=0,x=R.length;I<x;I++){const b=R[I];if(m(b,T,I,A)===!0){const k=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let j=0;j<B.length;j++){const V=B[j],Z=v(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,k+W,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(w,_,y,A){const T=w.value,S=_+"_"+y;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{const R=A[S];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[S]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(w){const _=w.uniforms;let y=0;const A=16;for(let S=0,R=_.length;S<R;S++){const I=Array.isArray(_[S])?_[S]:[_[S]];for(let x=0,b=I.length;x<b;x++){const k=I[x],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,j=B.length;W<j;W++){const V=B[W],Z=v(V),z=y%A,lt=z%Z.boundary,rt=z+lt;y+=lt,rt!==0&&A-rt<Z.storage&&(y+=A-rt),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Z.storage}}}const T=y%A;return T>0&&(y+=A-T),w.__size=y,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){const _=w.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function f(){for(const w in n)s.deleteBuffer(n[w]);o=[],n={},a={}}return{bind:l,update:h,dispose:f}}class Pm{constructor(t={}){const{canvas:e=gc(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Yi,this.toneMappingExposure=1;const _=this;let y=!1,A=0,T=0,S=null,R=-1,I=null;const x=new ce,b=new ce;let k=null;const B=new K(0);let W=0,j=e.width,V=e.height,Z=1,z=null,lt=null;const rt=new ce(0,0,j,V),pt=new ce(0,0,j,V);let It=!1;const Wt=new cr;let $=!1,Y=!1;const et=new Jt,st=new Jt,Mt=new P,Ct=new ce,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Kt(){return S===null?Z:1}let D=i;function Ze(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${er}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const N="webgl2";if(D=Ze(N,E),D===null)throw Ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Yt,Qt,Nt,pe,Bt,C,M,O,Q,nt,J,Et,dt,vt,te,at,_t,kt,Ft,yt,$t,zt,ue,U;function mt(){Yt=new Nf(D),Yt.init(),zt=new ym(D,Yt),Qt=new Cf(D,Yt,t,zt),Nt=new xm(D),Qt.reverseDepthBuffer&&Nt.buffers.depth.setReversed(!0),pe=new Bf(D),Bt=new im,C=new _m(D,Yt,Nt,Bt,Qt,zt,pe),M=new Lf(_),O=new Uf(_),Q=new Wc(D),ue=new Af(D,Q),nt=new kf(D,Q,pe,ue),J=new zf(D,nt,Q,pe),Ft=new Of(D,Qt,C),at=new Pf(Bt),Et=new em(_,M,O,Yt,Qt,ue,at),dt=new Rm(_,Bt),vt=new sm,te=new cm(Yt),kt=new Tf(_,M,O,Nt,J,u,l),_t=new mm(_,J,Qt),U=new Cm(D,pe,Qt,Nt),yt=new Rf(D,Yt,pe),$t=new Ff(D,Yt,pe),pe.programs=Et.programs,_.capabilities=Qt,_.extensions=Yt,_.properties=Bt,_.renderLists=vt,_.shadowMap=_t,_.state=Nt,_.info=pe}mt();const q=new Tm(_,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(j,V,!1))},this.getSize=function(E){return E.set(j,V)},this.setSize=function(E,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,V=N,e.width=Math.floor(E*Z),e.height=Math.floor(N*Z),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(j*Z,V*Z).floor()},this.setDrawingBufferSize=function(E,N,H){j=E,V=N,Z=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,N,H,G){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,N,H,G),Nt.viewport(x.copy(rt).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,N,H,G){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,N,H,G),Nt.scissor(b.copy(pt).multiplyScalar(Z).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(E){Nt.setScissorTest(It=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let G=0;if(E){let F=!1;if(S!==null){const ot=S.texture.format;F=ot===lr||ot===rr||ot===or}if(F){const ot=S.texture.type,ft=ot===Di||ot===un||ot===fs||ot===Xn||ot===nr||ot===sr,wt=kt.getClearColor(),St=kt.getClearAlpha(),Lt=wt.r,Dt=wt.g,Tt=wt.b;ft?(m[0]=Lt,m[1]=Dt,m[2]=Tt,m[3]=St,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Lt,g[1]=Dt,g[2]=Tt,g[3]=St,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),vt.dispose(),te.dispose(),Bt.dispose(),M.dispose(),O.dispose(),J.dispose(),ue.dispose(),U.dispose(),Et.dispose(),q.dispose(),q.removeEventListener("sessionstart",xr),q.removeEventListener("sessionend",vr),Zi.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=pe.autoReset,N=_t.enabled,H=_t.autoUpdate,G=_t.needsUpdate,F=_t.type;mt(),pe.autoReset=E,_t.enabled=N,_t.autoUpdate=H,_t.needsUpdate=G,_t.type=F}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){const N=E.target;N.removeEventListener("dispose",jt),we(N)}function we(E){Xe(E),Bt.remove(E)}function Xe(E){const N=Bt.get(E).programs;N!==void 0&&(N.forEach(function(H){Et.releaseProgram(H)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,G,F,ot){N===null&&(N=Ht);const ft=F.isMesh&&F.matrixWorld.determinant()<0,wt=Eh(E,N,H,G,F);Nt.setMaterial(G,ft);let St=H.index,Lt=1;if(G.wireframe===!0){if(St=nt.getWireframeAttribute(H),St===void 0)return;Lt=2}const Dt=H.drawRange,Tt=H.attributes.position;let le=Dt.start*Lt,me=(Dt.start+Dt.count)*Lt;ot!==null&&(le=Math.max(le,ot.start*Lt),me=Math.min(me,(ot.start+ot.count)*Lt)),St!==null?(le=Math.max(le,0),me=Math.min(me,St.count)):Tt!=null&&(le=Math.max(le,0),me=Math.min(me,Tt.count));const _e=me-le;if(_e<0||_e===1/0)return;ue.setup(F,G,wt,H,St);let Je,se=yt;if(St!==null&&(Je=Q.get(St),se=$t,se.setIndex(Je)),F.isMesh)G.wireframe===!0?(Nt.setLineWidth(G.wireframeLinewidth*Kt()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(F.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),Nt.setLineWidth(Rt*Kt()),F.isLineSegments?se.setMode(D.LINES):F.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else F.isPoints?se.setMode(D.POINTS):F.isSprite&&se.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Rt=F._multiDrawStarts,Le=F._multiDrawCounts,ae=F._multiDrawCount,li=St?Q.get(St).bytesPerElement:1,vn=Bt.get(G).currentProgram.getUniforms();for(let Qe=0;Qe<ae;Qe++)vn.setValue(D,"_gl_DrawID",Qe),se.render(Rt[Qe]/li,Le[Qe])}else if(F.isInstancedMesh)se.renderInstances(le,_e,F.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Rt);se.renderInstances(le,_e,Le)}else se.render(le,_e)};function ne(E,N,H){E.transparent===!0&&E.side===ve&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,vs(E,N,H),E.side=Ki,E.needsUpdate=!0,vs(E,N,H),E.side=ve):vs(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),p=te.get(H),p.init(N),w.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const wt=ot[ft];ne(wt,H,F),G.add(wt)}else ne(ot,H,F),G.add(ot)}),w.pop(),p=null,G},this.compileAsync=function(E,N,H=null){const G=this.compile(E,N,H);return new Promise(F=>{function ot(){if(G.forEach(function(ft){Bt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){F(E);return}setTimeout(ot,10)}Yt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let qe=null;function Si(E){qe&&qe(E)}function xr(){Zi.stop()}function vr(){Zi.start()}const Zi=new dh;Zi.setAnimationLoop(Si),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){qe=E,q.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},q.addEventListener("sessionstart",xr),q.addEventListener("sessionend",vr),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,S),p=te.get(E,w.length),p.init(N),w.push(p),st.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Wt.setFromProjectionMatrix(st),Y=this.localClippingEnabled,$=at.init(this.clippingPlanes,Y),v=vt.get(E,f.length),v.init(),f.push(v),q.enabled===!0&&q.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&ya(ot,N,-1/0,_.sortObjects)}ya(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(z,lt),ie=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ie&&kt.addToRenderList(v,E),this.info.render.frame++,$===!0&&at.beginShadows();const H=p.state.shadowsArray;_t.render(H,E,N),$===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,F=v.transmissive;if(p.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let ft=0,wt=ot.length;ft<wt;ft++){const St=ot[ft];yr(G,F,E,St)}ie&&kt.render(E);for(let ft=0,wt=ot.length;ft<wt;ft++){const St=ot[ft];_r(v,E,St,St.viewport)}}else F.length>0&&yr(G,F,E,N),ie&&kt.render(E),_r(v,E,N);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(_,E,N),ue.resetDefaultState(),R=-1,I=null,w.pop(),w.length>0?(p=w[w.length-1],$===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ya(E,N,H,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Wt.intersectsSprite(E)){G&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const ft=J.update(E),wt=E.material;wt.visible&&v.push(E,ft,wt,H,Ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Wt.intersectsObject(E))){const ft=J.update(E),wt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ct.copy(ft.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(wt)){const St=ft.groups;for(let Lt=0,Dt=St.length;Lt<Dt;Lt++){const Tt=St[Lt],le=wt[Tt.materialIndex];le&&le.visible&&v.push(E,ft,le,H,Ct.z,Tt)}}else wt.visible&&v.push(E,ft,wt,H,Ct.z,null)}}const ot=E.children;for(let ft=0,wt=ot.length;ft<wt;ft++)ya(ot[ft],N,H,G)}function _r(E,N,H,G){const F=E.opaque,ot=E.transmissive,ft=E.transparent;p.setupLightsView(H),$===!0&&at.setGlobalState(_.clippingPlanes,H),G&&Nt.viewport(x.copy(G)),F.length>0&&xs(F,N,H),ot.length>0&&xs(ot,N,H),ft.length>0&&xs(ft,N,H),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function yr(E,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new fn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?ps:Di,minFilter:cn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ot=p.state.transmissionRenderTarget[G.id],ft=G.viewport||x;ot.setSize(ft.z,ft.w);const wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),ie&&kt.render(H);const St=_.toneMapping;_.toneMapping=Yi;const Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),$===!0&&at.setGlobalState(_.clippingPlanes,G),xs(E,H,G),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Tt=0,le=N.length;Tt<le;Tt++){const me=N[Tt],_e=me.object,Je=me.geometry,se=me.material,Rt=me.group;if(se.side===ve&&_e.layers.test(G.layers)){const Le=se.side;se.side=Oe,se.needsUpdate=!0,wr(_e,H,G,Je,se,Rt),se.side=Le,se.needsUpdate=!0,Dt=!0}}Dt===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(B,W),Lt!==void 0&&(G.viewport=Lt),_.toneMapping=St}function xs(E,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=E.length;F<ot;F++){const ft=E[F],wt=ft.object,St=ft.geometry,Lt=G===null?ft.material:G,Dt=ft.group;wt.layers.test(H.layers)&&wr(wt,N,H,St,Lt,Dt)}}function wr(E,N,H,G,F,ot){E.onBeforeRender(_,N,H,G,F,ot),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,N,H,G,E,ot),F.transparent===!0&&F.side===ve&&F.forceSinglePass===!1?(F.side=Oe,F.needsUpdate=!0,_.renderBufferDirect(H,N,G,F,E,ot),F.side=Ki,F.needsUpdate=!0,_.renderBufferDirect(H,N,G,F,E,ot),F.side=ve):_.renderBufferDirect(H,N,G,F,E,ot),E.onAfterRender(_,N,H,G,F,ot)}function vs(E,N,H){N.isScene!==!0&&(N=Ht);const G=Bt.get(E),F=p.state.lights,ot=p.state.shadowsArray,ft=F.state.version,wt=Et.getParameters(E,F.state,ot,N,H),St=Et.getProgramCacheKey(wt);let Lt=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",jt),Lt=new Map,G.programs=Lt);let Dt=Lt.get(St);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===ft)return Sr(E,wt),Dt}else wt.uniforms=Et.getUniforms(E),E.onBeforeCompile(wt,_),Dt=Et.acquireProgram(wt,St),Lt.set(St,Dt),G.uniforms=wt.uniforms;const Tt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=at.uniform),Sr(E,wt),G.needsLights=Ah(E),G.lightsStateVersion=ft,G.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function Mr(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ta.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Sr(E,N){const H=Bt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Eh(E,N,H,G,F){N.isScene!==!0&&(N=Ht),C.resetTextureUnits();const ot=N.fog,ft=G.isMeshStandardMaterial?N.environment:null,wt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ji,St=(G.isMeshStandardMaterial?O:M).get(G.envMap||ft),Lt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let _e=Yi;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_e=_.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Je!==void 0?Je.length:0,Rt=Bt.get(G),Le=p.state.lights;if($===!0&&(Y===!0||E!==I)){const ni=E===I&&G.id===R;at.setState(G,E,ni)}let ae=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Le.state.version||Rt.outputColorSpace!==wt||F.isBatchedMesh&&Rt.batching===!1||!F.isBatchedMesh&&Rt.batching===!0||F.isBatchedMesh&&Rt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Rt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Rt.instancing===!1||!F.isInstancedMesh&&Rt.instancing===!0||F.isSkinnedMesh&&Rt.skinning===!1||!F.isSkinnedMesh&&Rt.skinning===!0||F.isInstancedMesh&&Rt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Rt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Rt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Rt.instancingMorph===!1&&F.morphTexture!==null||Rt.envMap!==St||G.fog===!0&&Rt.fog!==ot||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==at.numPlanes||Rt.numIntersection!==at.numIntersection)||Rt.vertexAlphas!==Lt||Rt.vertexTangents!==Dt||Rt.morphTargets!==Tt||Rt.morphNormals!==le||Rt.morphColors!==me||Rt.toneMapping!==_e||Rt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,Rt.__version=G.version);let li=Rt.currentProgram;ae===!0&&(li=vs(G,N,F));let vn=!1,Qe=!1,wa=!1;const ye=li.getUniforms(),ki=Rt.uniforms;if(Nt.useProgram(li.program)&&(vn=!0,Qe=!0,wa=!0),G.id!==R&&(R=G.id,Qe=!0),vn||I!==E){Qt.reverseDepthBuffer?(et.copy(E.projectionMatrix),vc(et),_c(et),ye.setValue(D,"projectionMatrix",et)):ye.setValue(D,"projectionMatrix",E.projectionMatrix),ye.setValue(D,"viewMatrix",E.matrixWorldInverse);const ni=ye.map.cameraPosition;ni!==void 0&&ni.setValue(D,Mt.setFromMatrixPosition(E.matrixWorld)),Qt.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Qe=!0,wa=!0)}if(F.isSkinnedMesh){ye.setOptional(D,F,"bindMatrix"),ye.setOptional(D,F,"bindMatrixInverse");const ni=F.skeleton;ni&&(ni.boneTexture===null&&ni.computeBoneTexture(),ye.setValue(D,"boneTexture",ni.boneTexture,C))}F.isBatchedMesh&&(ye.setOptional(D,F,"batchingTexture"),ye.setValue(D,"batchingTexture",F._matricesTexture,C),ye.setOptional(D,F,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",F._indirectTexture,C),ye.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",F._colorsTexture,C));const Ma=H.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&Ft.update(F,H,li),(Qe||Rt.receiveShadow!==F.receiveShadow)&&(Rt.receiveShadow=F.receiveShadow,ye.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ki.envMap.value=St,ki.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ki.envMapIntensity.value=N.environmentIntensity),Qe&&(ye.setValue(D,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&Th(ki,wa),ot&&G.fog===!0&&dt.refreshFogUniforms(ki,ot),dt.refreshMaterialUniforms(ki,G,Z,V,p.state.transmissionRenderTarget[E.id]),ta.upload(D,Mr(Rt),ki,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ta.upload(D,Mr(Rt),ki,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(D,"center",F.center),ye.setValue(D,"modelViewMatrix",F.modelViewMatrix),ye.setValue(D,"normalMatrix",F.normalMatrix),ye.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ni=G.uniformsGroups;for(let Sa=0,Rh=ni.length;Sa<Rh;Sa++){const br=ni[Sa];U.update(br,li),U.bind(br,li)}}return li}function Th(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ah(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,N,H){Bt.get(E.texture).__webglTexture=N,Bt.get(E.depthTexture).__webglTexture=H;const G=Bt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=Bt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){S=E,A=N,T=H;let G=!0,F=null,ot=!1,ft=!1;if(E){const St=Bt.get(E);if(St.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(St.__hasExternalTextures)C.rebindTextures(E,Bt.get(E.texture).__webglTexture,Bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&Bt.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ft=!0);const Dt=Bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?F=Dt[N][H]:F=Dt[N],ot=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[H]:F=Dt,x.copy(E.viewport),b.copy(E.scissor),k=E.scissorTest}else x.copy(rt).multiplyScalar(Z).floor(),b.copy(pt).multiplyScalar(Z).floor(),k=It;if(Nt.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&Nt.drawBuffers(E,F),Nt.viewport(x),Nt.scissor(b),Nt.setScissorTest(k),ot){const St=Bt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,H)}else if(ft){const St=Bt.get(E.texture),Lt=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Lt)}R=-1},this.readRenderTargetPixels=function(E,N,H,G,F,ot,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){Nt.bindFramebuffer(D.FRAMEBUFFER,wt);try{const St=E.texture,Lt=St.format,Dt=St.type;if(!Qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&H>=0&&H<=E.height-F&&D.readPixels(N,H,G,F,zt.convert(Lt),zt.convert(Dt),ot)}finally{const St=S!==null?Bt.get(S).__webglFramebuffer:null;Nt.bindFramebuffer(D.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,G,F,ot,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){const St=E.texture,Lt=St.format,Dt=St.type;if(!Qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&H>=0&&H<=E.height-F){Nt.bindFramebuffer(D.FRAMEBUFFER,wt);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(N,H,G,F,zt.convert(Lt),zt.convert(Dt),0);const le=S!==null?Bt.get(S).__webglFramebuffer:null;Nt.bindFramebuffer(D.FRAMEBUFFER,le);const me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xc(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(Tt),D.deleteSync(me),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(E.image.width*G),ot=Math.floor(E.image.height*G),ft=N!==null?N.x:0,wt=N!==null?N.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ft,wt,F,ot),Nt.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,G=null,F=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let ot,ft,wt,St,Lt,Dt;H!==null?(ot=H.max.x-H.min.x,ft=H.max.y-H.min.y,wt=H.min.x,St=H.min.y):(ot=E.image.width,ft=E.image.height,wt=0,St=0),G!==null?(Lt=G.x,Dt=G.y):(Lt=0,Dt=0);const Tt=zt.convert(N.format),le=zt.convert(N.type);C.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const me=D.getParameter(D.UNPACK_ROW_LENGTH),_e=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Je=D.getParameter(D.UNPACK_SKIP_PIXELS),se=D.getParameter(D.UNPACK_SKIP_ROWS),Rt=D.getParameter(D.UNPACK_SKIP_IMAGES),Le=E.isCompressedTexture?E.mipmaps[F]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,St),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Lt,Dt,ot,ft,Tt,le,Le.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Lt,Dt,Le.width,Le.height,Tt,Le.data):D.texSubImage2D(D.TEXTURE_2D,F,Lt,Dt,ot,ft,Tt,le,Le),D.pixelStorei(D.UNPACK_ROW_LENGTH,me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Je),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,G=null,F=0){E.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0);let ot,ft,wt,St,Lt,Dt,Tt,le,me;const _e=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(ot=H.max.x-H.min.x,ft=H.max.y-H.min.y,wt=H.max.z-H.min.z,St=H.min.x,Lt=H.min.y,Dt=H.min.z):(ot=_e.width,ft=_e.height,wt=_e.depth,St=0,Lt=0,Dt=0),G!==null?(Tt=G.x,le=G.y,me=G.z):(Tt=0,le=0,me=0);const Je=zt.convert(N.format),se=zt.convert(N.type);let Rt;if(N.isData3DTexture)C.setTexture3D(N,0),Rt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Le=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),li=D.getParameter(D.UNPACK_SKIP_PIXELS),vn=D.getParameter(D.UNPACK_SKIP_ROWS),Qe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,St),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Rt,F,Tt,le,me,ot,ft,wt,Je,se,_e.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,F,Tt,le,me,ot,ft,wt,Je,_e.data):D.texSubImage3D(Rt,F,Tt,le,me,ot,ft,wt,Je,se,_e),D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,li),D.pixelStorei(D.UNPACK_SKIP_ROWS,vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qe),F===0&&N.generateMipmaps&&D.generateMipmap(Rt),Nt.unbindTexture()},this.initRenderTarget=function(E){Bt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Nt.unbindTexture()},this.resetState=function(){A=0,T=0,S=null,Nt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===hr?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===fa?"display-p3":"srgb"}}class ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vh extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Lm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,a=this.stride;n<a;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new P;class la{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),a=he(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ga extends mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Dn;const ss=new P,Un=new P,Nn=new P,kn=new Ot,as=new Ot,_h=new Jt,zs=new P,os=new P,Hs=new P,xl=new Ot,eo=new Ot,vl=new Ot;class ur extends Te{constructor(t=new ga){if(super(),this.isSprite=!0,this.type="Sprite",Dn===void 0){Dn=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lm(e,5);Dn.setIndex([0,1,2,0,2,3]),Dn.setAttribute("position",new la(i,3,0,!1)),Dn.setAttribute("uv",new la(i,2,3,!1))}this.geometry=Dn,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Un.setFromMatrixScale(this.matrixWorld),_h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Un.multiplyScalar(-Nn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const o=this.center;Gs(zs.set(-.5,-.5,0),Nn,o,Un,n,a),Gs(os.set(.5,-.5,0),Nn,o,Un,n,a),Gs(Hs.set(.5,.5,0),Nn,o,Un,n,a),xl.set(0,0),eo.set(1,0),vl.set(1,1);let r=t.ray.intersectTriangle(zs,os,Hs,!1,ss);if(r===null&&(Gs(os.set(-.5,.5,0),Nn,o,Un,n,a),eo.set(0,1),r=t.ray.intersectTriangle(zs,Hs,os,!1,ss),r===null))return;const l=t.ray.origin.distanceTo(ss);l<t.near||l>t.far||e.push({distance:l,point:ss.clone(),uv:ri.getInterpolation(ss,zs,os,Hs,xl,eo,vl,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(s,t,e,i,n,a){kn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(as.x=a*kn.x-n*kn.y,as.y=n*kn.x+a*kn.y):as.copy(kn),s.copy(t),s.x+=as.x,s.y+=as.y,s.applyMatrix4(_h)}class Im extends ze{constructor(t=null,e=1,i=1,n,a,o,r,l,h=Ke,c=Ke,d,u){super(null,o,r,l,h,c,n,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends Se{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fn=new Jt,yl=new Jt,Vs=[],wl=new pn,Dm=new Jt,rs=new L,ls=new Kn;class us extends L{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Dm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),wl.copy(t.boundingBox).applyMatrix4(Fn),this.boundingBox.union(wl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),ls.copy(t.boundingSphere).applyMatrix4(Fn),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,a=i.length+1,o=t*a+1;for(let r=0;r<i.length;r++)i[r]=n[o+r]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(i),t.ray.intersectsSphere(ls)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Fn),yl.multiplyMatrices(i,Fn),rs.matrixWorld=yl,rs.raycast(t,Vs);for(let o=0,r=Vs.length;o<r;o++){const l=Vs[o];l.instanceId=a,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Im(new Float32Array(n*this.count),n,this.count,ar,vi));const a=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const r=this.geometry.morphTargetsRelative?1:1-o,l=n*t;a[l]=r,a.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ms extends mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ml=new Jt,jo=new nh,Ws=new Kn,Xs=new P;class xa extends Te{constructor(t=new Ee,e=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(n),Ws.radius+=a,t.ray.intersectsSphere(Ws)===!1)return;Ml.copy(n).invert(),jo.copy(t.ray).applyMatrix4(Ml);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=u,v=m;g<v;g++){const p=h.getX(g);Xs.fromBufferAttribute(d,p),Sl(Xs,p,l,n,t,e,this)}}else{const u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,v=m;g<v;g++)Xs.fromBufferAttribute(d,g),Sl(Xs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Sl(s,t,e,i,n,a,o){const r=jo.distanceSqToPoint(s);if(r<e){const l=new P;jo.closestPointToPoint(s,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;a.push({distance:h,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fr extends ze{constructor(t,e,i,n,a,o,r,l,h){super(t,e,i,n,a,o,r,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni extends Ee{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const a=[],o=[],r=[],l=[],h=new P,c=new Ot;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const m=i+d/e*n;h.x=t*Math.cos(m),h.y=t*Math.sin(m),o.push(h.x,h.y,h.z),r.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ct extends Ee{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const h=this;n=Math.floor(n),a=Math.floor(a);const c=[],d=[],u=[],m=[];let g=0;const v=[],p=i/2;let f=0;w(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(m,2));function w(){const y=new P,A=new P;let T=0;const S=(e-t)/i;for(let R=0;R<=a;R++){const I=[],x=R/a,b=x*(e-t)+t;for(let k=0;k<=n;k++){const B=k/n,W=B*l+r,j=Math.sin(W),V=Math.cos(W);A.x=b*j,A.y=-x*i+p,A.z=b*V,d.push(A.x,A.y,A.z),y.set(j,S,V).normalize(),u.push(y.x,y.y,y.z),m.push(B,1-x),I.push(g++)}v.push(I)}for(let R=0;R<n;R++)for(let I=0;I<a;I++){const x=v[I][R],b=v[I+1][R],k=v[I+1][R+1],B=v[I][R+1];t>0&&(c.push(x,b,B),T+=3),e>0&&(c.push(b,k,B),T+=3)}h.addGroup(f,T,0),f+=T}function _(y){const A=g,T=new Ot,S=new P;let R=0;const I=y===!0?t:e,x=y===!0?1:-1;for(let k=1;k<=n;k++)d.push(0,p*x,0),u.push(0,x,0),m.push(.5,.5),g++;const b=g;for(let k=0;k<=n;k++){const W=k/n*l+r,j=Math.cos(W),V=Math.sin(W);S.x=I*V,S.y=p*x,S.z=I*j,d.push(S.x,S.y,S.z),u.push(0,x,0),T.x=j*.5+.5,T.y=V*.5*x+.5,m.push(T.x,T.y),g++}for(let k=0;k<n;k++){const B=A+k,W=b+k;y===!0?c.push(W,W+1,B):c.push(W+1,W,B),R+=3}h.addGroup(f,R,y===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class de extends ct{constructor(t=1,e=1,i=32,n=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,i,n,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new de(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zn extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),h(i),c(),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(a.slice(),3)),this.setAttribute("uv",new fe(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const _=new P,y=new P,A=new P;for(let T=0;T<e.length;T+=3)m(e[T+0],_),m(e[T+1],y),m(e[T+2],A),l(_,y,A,w)}function l(w,_,y,A){const T=A+1,S=[];for(let R=0;R<=T;R++){S[R]=[];const I=w.clone().lerp(y,R/T),x=_.clone().lerp(y,R/T),b=T-R;for(let k=0;k<=b;k++)k===0&&R===T?S[R][k]=I:S[R][k]=I.clone().lerp(x,k/b)}for(let R=0;R<T;R++)for(let I=0;I<2*(T-R)-1;I++){const x=Math.floor(I/2);I%2===0?(u(S[R][x+1]),u(S[R+1][x]),u(S[R][x])):(u(S[R][x+1]),u(S[R+1][x+1]),u(S[R+1][x]))}}function h(w){const _=new P;for(let y=0;y<a.length;y+=3)_.x=a[y+0],_.y=a[y+1],_.z=a[y+2],_.normalize().multiplyScalar(w),a[y+0]=_.x,a[y+1]=_.y,a[y+2]=_.z}function c(){const w=new P;for(let _=0;_<a.length;_+=3){w.x=a[_+0],w.y=a[_+1],w.z=a[_+2];const y=p(w)/2/Math.PI+.5,A=f(w)/Math.PI+.5;o.push(y,1-A)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){const _=o[w+0],y=o[w+2],A=o[w+4],T=Math.max(_,y,A),S=Math.min(_,y,A);T>.9&&S<.1&&(_<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),A<.2&&(o[w+4]+=1))}}function u(w){a.push(w.x,w.y,w.z)}function m(w,_){const y=w*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const w=new P,_=new P,y=new P,A=new P,T=new Ot,S=new Ot,R=new Ot;for(let I=0,x=0;I<a.length;I+=9,x+=6){w.set(a[I+0],a[I+1],a[I+2]),_.set(a[I+3],a[I+4],a[I+5]),y.set(a[I+6],a[I+7],a[I+8]),T.set(o[x+0],o[x+1]),S.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),A.copy(w).add(_).add(y).divideScalar(3);const b=p(A);v(T,x+0,w,b),v(S,x+2,_,b),v(R,x+4,y,b)}}function v(w,_,y,A){A<0&&w.x===1&&(o[_]=w.x-1),y.x===0&&y.z===0&&(o[_]=A/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.vertices,t.indices,t.radius,t.details)}}class gs extends Zn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}class Jn extends Zn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jn(t.radius,t.detail)}}class gn extends Zn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gn(t.radius,t.detail)}}class Ii extends Ee{constructor(t=.5,e=1,i=32,n=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const r=[],l=[],h=[],c=[];let d=t;const u=(e-t)/n,m=new P,g=new Ot;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const f=a+p/i*o;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,c.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const p=v*(i+1);for(let f=0;f<i;f++){const w=f+p,_=w,y=w+i+1,A=w+i+2,T=w+1;r.push(_,y,T),r.push(y,A,T)}}this.setIndex(r),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xt extends Ee{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+r,Math.PI);let h=0;const c=[],d=new P,u=new P,m=[],g=[],v=[],p=[];for(let f=0;f<=i;f++){const w=[],_=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;d.x=-t*Math.cos(n+T*a)*Math.sin(o+_*r),d.y=t*Math.cos(o+_*r),d.z=t*Math.sin(n+T*a)*Math.sin(o+_*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(T+y,1-_),w.push(h++)}c.push(w)}for(let f=0;f<i;f++)for(let w=0;w<e;w++){const _=c[f][w+1],y=c[f][w],A=c[f+1][w],T=c[f+1][w+1];(f!==0||o>0)&&m.push(_,y,T),(f!==i-1||l<Math.PI)&&m.push(y,A,T)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class va extends Zn{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new va(t.radius,t.detail)}}class Ve extends Ee{constructor(t=1,e=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const o=[],r=[],l=[],h=[],c=new P,d=new P,u=new P;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){const v=g/n*a,p=m/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),r.push(d.x,d.y,d.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){const v=(n+1)*m+g-1,p=(n+1)*(m-1)+g-1,f=(n+1)*(m-1)+g,w=(n+1)*m+g;o.push(v,p,w),o.push(p,f,w)}this.setIndex(o),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ae extends mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _a extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new K(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yh extends _a{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const io=new Jt,bl=new P,El=new P;class wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(bl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tl=new Jt,hs=new P,no=new P;class Um extends wh{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),i.position.copy(hs),no.copy(i.position),no.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(no),i.updateMatrixWorld(),n.makeTranslation(-hs.x,-hs.y,-hs.z),Tl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class ii extends _a{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Um}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Nm extends wh{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zo extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Al(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=er);const _i={pipe:{id:"pipe",name:"Metal Pipe",category:"Mace",icon:"⌁",damage:24,heavy:42,stamina:15,heavyStamina:24,range:2.55,speed:1,poise:22,crit:1.5,scaling:{str:.55,dex:.15},type:"strike",weight:"Medium",desc:"A length of scavenged plumbing. Heavy enough to break bone. Familiar enough to feel like home.",price:0,ranged:!1},rustySword:{id:"rustySword",name:"Rusted Longsword",category:"Straight Sword",icon:"†",damage:31,heavy:50,stamina:16,heavyStamina:25,range:2.9,speed:1.12,poise:20,crit:1.7,scaling:{str:.35,dex:.6},type:"slash",weight:"Medium",desc:"A soldier's blade, left in the mud when its owner fled. The edge still remembers duty.",price:420,ranged:!1},woodsmanAxe:{id:"woodsmanAxe",name:"Woodsman's Axe",category:"Greataxe",icon:"⚒",damage:68,heavy:112,stamina:27,heavyStamina:39,range:3.25,speed:.74,poise:48,crit:1.9,scaling:{str:.9,dex:.1},type:"slash",weight:"Heavy",desc:"The axe that felled the First Grove. A tree still grows from the haft, warm to the touch.",price:0,ranged:!1,bleed:18},greatsword:{id:"greatsword",name:"Ashen Greatsword",category:"Greatsword",icon:"✝",damage:56,heavy:92,stamina:30,heavyStamina:42,range:3.45,speed:.7,poise:44,crit:1.6,scaling:{str:.85,dex:.2},type:"slash",weight:"Heavy",desc:"Pulled from the ashes of a cathedral. The soot never washes off, and the steel never cools.",price:900,ranged:!1},spear:{id:"spear",name:"Briar Spear",category:"Spear",icon:"↟",damage:26,heavy:41,stamina:13,heavyStamina:22,range:4.05,speed:1.22,poise:16,crit:1.5,scaling:{str:.25,dex:.7},type:"pierce",weight:"Light",desc:"A hunting spear wrapped in thorn-vine. It keeps the world at a polite distance.",price:0,ranged:!1},dagger:{id:"dagger",name:"Glimmer Dagger",category:"Dagger",icon:"‡",damage:15,heavy:24,stamina:8,heavyStamina:14,range:2.15,speed:1.75,poise:8,crit:2.6,scaling:{str:.1,dex:.85},type:"pierce",weight:"Light",desc:"A shard of goblin-glass. It giggles when it draws blood.",price:0,ranged:!1},bow:{id:"bow",name:"Weeping Shortbow",category:"Bow",icon:"⌒",damage:22,heavy:34,stamina:12,heavyStamina:18,range:32,speed:1,poise:10,crit:1.2,scaling:{str:.15,dex:.75},type:"pierce",weight:"Light",desc:"The string is made from something that still weeps. Arrows fly true.",price:700,ranged:!0},staff:{id:"staff",name:"Seer's Ember Staff",category:"Magical Staff",icon:"✦",damage:18,heavy:22,stamina:14,heavyStamina:20,range:2.6,speed:1,poise:10,crit:1.3,scaling:{faith:.9},type:"magic",weight:"Light",desc:"A staff of blackened yew. It whispers the names of stars that no longer exist.",price:1100,ranged:!0,spell:"emberBolt"}},Li={hoodie:{id:"hoodie",name:"Modern Hoodie",slot:"Body",defense:0,weight:0,poise:4,desc:"2026 cotton blend. Not remotely designed for this. Still smells faintly of rain and bus exhaust.",price:0},leather:{id:"leather",name:"Traveler's Jerkin",slot:"Body",defense:7,weight:1,poise:12,desc:"Boiled leather softened with tallow. The stitching is in the shape of a small, protective rune.",price:380},knight:{id:"knight",name:"Rotten Knight Plate",slot:"Body",defense:17,weight:3,poise:34,desc:"The plate is pitted with rot, but the steel beneath remembers every blow it ever turned aside.",price:850},veil:{id:"veil",name:"Ashen Veil",slot:"Body",defense:11,weight:1,poise:18,desc:"A burial shroud woven with silver thread. It hums when the dead draw near.",price:640},mantle:{id:"mantle",name:"Heartwood Mantle",slot:"Body",defense:24,weight:3,poise:42,desc:"Living bark and old leaves. The Hollow Woodsman's last gift. It still grows.",price:0}},Jo={flask:{id:"flask",name:"Ashen Flask",type:"heal",desc:"Restores health. Refills at shrines.",icon:"⚗"},emberBomb:{id:"emberBomb",name:"Ember Bomb",type:"throw",desc:"A clay vessel of sleeping fire. Thrown at enemies.",icon:"◉",price:180},goldenEmber:{id:"goldenEmber",name:"Golden Ember",type:"upgrade",desc:"Permanently adds one flask charge.",icon:"✧",price:1200},sigil:{id:"sigil",name:"Heartwood Sigil",type:"key",desc:"Proof that the First Grove is free. It opens the way to the Weeping Wilds.",icon:"❖"},seerEye:{id:"seerEye",name:"Seer's Eye",type:"key",desc:"A glass eye that watches when you are not looking. Malgraven left it here for you.",icon:"◉"}},Bm={villager:{id:"villager",name:"Infected Villager",hp:95,damage:15,speed:2.15,aggro:15,attackRange:2.3,poise:38,motes:30,xp:30,armorType:"flesh",hitRadius:.55,scale:1,attackCooldown:1.5,elite:!1,lines:["The soil… the soil is in my teeth…","You left the door open. You left it open."]},goblin:{id:"goblin",name:"Glimmer Goblin",hp:64,damage:11,speed:3.45,aggro:17,attackRange:1.95,poise:20,motes:24,xp:24,armorType:"flesh",hitRadius:.42,scale:.72,attackCooldown:1.05,elite:!1,lines:["Shiny! Shiny teeth!","Glimmer glimmer, little knife!"]},hound:{id:"hound",name:"Hollow Hound",hp:82,damage:17,speed:4.35,aggro:19,attackRange:2.5,poise:28,motes:34,xp:34,armorType:"flesh",hitRadius:.55,scale:1,attackCooldown:1.15,elite:!1,quadruped:!0,lines:["…","A wet, hollow bark."]},knight:{id:"knight",name:"Rotten Knight",hp:245,damage:27,speed:1.55,aggro:16,attackRange:3,poise:95,motes:85,xp:90,armorType:"metal",hitRadius:.72,scale:1.12,attackCooldown:2,elite:!1,shield:!0,lines:["For the crown. For the hollow crown.","Kneel. Kneel and be forgiven."]},archer:{id:"archer",name:"Hollow Archer",hp:75,damage:13,speed:2.05,aggro:22,attackRange:17,poise:22,motes:48,xp:48,armorType:"flesh",hitRadius:.48,scale:.98,attackCooldown:2.4,elite:!1,ranged:!0,lines:["The wind is wrong today.","I see you through the trees."]},briarWarden:{id:"briarWarden",name:"The Briar Warden",hp:560,damage:34,speed:1.75,aggro:15,attackRange:3.5,poise:150,motes:420,xp:400,armorType:"bark",hitRadius:.85,scale:1.45,attackCooldown:1.8,elite:!0,bossBar:!0,lines:["The grove is not yours to take.","Root and bone. Root and bone."]}},Qo=[{id:"lore1",title:"A Letter, Never Sent",found:!1,text:"“Dear Elowen — the fields are gold again, but the birds have stopped singing. The king's men came at dusk and took the seed store. They said it was for the seals. What seals? The children are hungry. I am not afraid of the dark anymore. I am afraid of the light going out.” — Tomas, of Hollowmere",summary:"A farmer's unsent letter. The kingdom was already starving before the corruption."},{id:"lore2",title:"The Seven Seals",found:!1,text:"“Seven kings stood at the edge of the world and bound the Devourer Below with seven crowns. Each crown was a kingdom. Each kingdom was a promise. When the last promise is broken, the mouth opens. We have broken six.” — fragment of a stained-glass inscription, Ashenveil Cathedral",summary:"The demon was bound by seven crowns. Six are already broken."},{id:"lore3",title:"Malgraven's Journal",found:!1,text:"“The summoning works. A soul from beyond the veil — untouched by the curse, unclaimed by the Devourer. I will call it a hero. I will give it a sword. It will walk where I cannot. When the moment comes, its untainted soul will be the final key. I am sorry. I have always been sorry. That has never stopped me.” — Malgraven, the Last Seer",summary:"Malgraven summoned you deliberately. Your soul is the final key to his ritual."},{id:"lore4",title:"The Woodsman's Vow",found:!1,text:"“I was the first to kneel. I cut the First Grove to build the first crown. The tree that grows through me now is the forest's answer. It is not punishment. It is memory. When I fall, let the roots take the road south. Let the green things have their revenge.” — carved into the Hollow Woodsman's heartwood",summary:"The Woodsman helped build the crown. The tree in his chest is the forest's revenge."},{id:"lore5",title:"A Modern Relic",found:!1,text:"“His phone survived the crossing. The screen is cracked, but for one moment it lit up: 03:17, 14 NOV 2026, NO SIGNAL. He stared at it for a long time. Then he put it in his pocket, and went to find a weapon. Some people need a reason. Some people only need a direction.” — recovered field note, author unknown",summary:"Your phone still works, barely. The date has not changed since you arrived."},{id:"lore6",title:"The Hollow Crown",found:!1,text:"“The crown was never gold. It was a ring of seven teeth, pulled from the Devourer's first mouth. Whoever wears it rules what remains. Whoever breaks it lets the thing below decide. There is a third way, but no king has ever been brave enough to walk it.” — the Last Page of the Seer's Codex",summary:"A third path exists — beyond the crown and beyond the demon."}],Om={dawn:{id:"dawn",kicker:"ENDING A",title:"A NEW DAWN",text:"You drive the last ember of the Devourer into the earth. The seven crowns shatter like glass, and the sky — the real sky, the one you remember — tears open above Eldoria. The corruption drains from the fields in long black rivers. The villagers do not remember you. The children will grow up believing the hollow tree was only a story. You step through the portal and the rain of 2026 hits your face. Somewhere behind you, a kingdom begins, very slowly, to breathe.",flavor:"You saved a world that will never know your name. That is enough."},crown:{id:"crown",kicker:"ENDING B",title:"THE HOLLOW CROWN",text:"You take the Devourer's power into your chest. It does not hurt. That is the terrible part. The corrupted kneel. The knights rise. The trees bow their heavy heads. You sit upon a throne of roots and teeth, and for a hundred years you are a good king — just, quiet, beloved. Then the first villager disappears. Then the second. You tell yourself it is necessary. The crown is very heavy. It has begun to grow into your skull.",flavor:"You became the thing you were summoned to destroy. Eldoria calls it peace."},veil:{id:"veil",kicker:"ENDING C",title:"BEYOND THE VEIL",text:"You find the truth hidden in Malgraven's last journal: the Devourer is not a demon. It is a wound in the world, and the crowns are stitches. You refuse the wizard's ritual. You refuse the demon's offer. Instead you cut the last thread — and step sideways, through a door that was never meant to open. Behind you, Eldoria folds into a single bright point. Ahead: a country with no name, no kings, and no hunger. You do not know if it is a home. You walk anyway.",flavor:"You rejected both endings offered to you. The unknown is not a curse. It is a door."}},zm=[["Move","W A S D / Left Stick"],["Look / Camera","Mouse / Right Stick"],["Sprint","Shift / Hold B"],["Dodge Roll","Space / B"],["Jump","F / L3"],["Light Attack","Left Click / RB"],["Heavy Attack","Right Click / RT"],["Block / Parry","Q / LB"],["Lock On","Tab / Y"],["Interact / Confirm","E / A"],["Heal (Flask)","R / X"],["Cast Spell","V / D-Pad Up"],["Critical / Riposte","C / R3"],["Swap Weapon","X / Z / D-Pad Left-Right"],["Inventory","I / View"],["Map","M / D-Pad Down"],["Pause","Esc / Start"],["Menus","D-Pad or L-Stick · A select · B back"]],Rl={name:"THE FORGOTTEN SHIRE",sub:"Eldoria · Region I"},De=(s,t,e)=>s<t?t:s>e?e:s,xe=(s,t,e)=>s+(t-s)*e,Hm=(s,t,e)=>De((e-s)/(t-s),0,1),ha=(s,t,e)=>{const i=Hm(s,t,e);return i*i*(3-2*i)},X=(s,t,e,i)=>xe(s,t,1-Math.exp(-e*i)),it=(s=0,t=1)=>s+Math.random()*(t-s),Wi=s=>Math.random()<s,ca=s=>s[Math.floor(Math.random()*s.length)],so=Math.PI*2;function Xi(s,t){let e=(t-s)%so;return e>Math.PI&&(e-=so),e<-Math.PI&&(e+=so),e}function fi(s,t,e,i){return s+Xi(s,t)*(1-Math.exp(-e*i))}function qs(s,t){let e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Mh(s,t){const e=Math.floor(s),i=Math.floor(t),n=s-e,a=t-i,o=n*n*(3-2*n),r=a*a*(3-2*a),l=qs(e,i),h=qs(e+1,i),c=qs(e,i+1),d=qs(e+1,i+1);return xe(xe(l,h,o),xe(c,d,o),r)}function Sh(s,t,e=4){let i=0,n=.5,a=1;for(let o=0;o<e;o++)i+=Mh(s*a,t*a)*n,a*=2.03,n*=.5;return i}function Mi(s=1337){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const ao=new Map;function pr(s,t,e,i,n=1){const a=s+":"+n;if(ao.has(a))return ao.get(a);const o=document.createElement("canvas");o.width=t,o.height=e;const r=o.getContext("2d");i(r,t,e);const l=new fr(o);return l.wrapS=l.wrapT=ia,l.repeat.set(n,n),l.colorSpace=oi,l.anisotropy=2,ao.set(a,l),l}function Gm(){return pr("bark",128,128,(s,t,e)=>{s.fillStyle="#4a3829",s.fillRect(0,0,t,e);for(let i=0;i<70;i++)s.fillStyle=`rgba(${20+Math.random()*25},${15+Math.random()*18},${10+Math.random()*12},${.25+Math.random()*.35})`,s.fillRect(Math.random()*t,Math.random()*e,2+Math.random()*5,12+Math.random()*40)},1)}function Pt(s,t={}){return new Ae({color:s,roughness:.85,metalness:.08,...t})}function Be(s,t=1,e={}){return new Ae({color:s,emissive:s,emissiveIntensity:t,roughness:.5,...e})}function da(s){const t=[];for(const h of s){const c=h.geometry.clone();h.matrix&&c.applyMatrix4(h.matrix);const d=new K(h.color??16777215),u=c.attributes.position.count,m=new Float32Array(u*3);for(let g=0;g<u;g++)m[g*3]=d.r,m[g*3+1]=d.g,m[g*3+2]=d.b;c.setAttribute("color",new Se(m,3)),c.deleteAttribute("uv"),t.push(c)}let e=0;for(const h of t)e+=h.attributes.position.count;const i=new Float32Array(e*3),n=new Float32Array(e*3),a=new Float32Array(e*3),o=[];let r=0;for(const h of t){const c=h.attributes.position.array,d=h.attributes.normal.array,u=h.attributes.color.array;if(i.set(c,r*3),n.set(d,r*3),a.set(u,r*3),h.index)for(let m=0;m<h.index.count;m++)o.push(h.index.array[m]+r);else for(let m=0;m<h.attributes.position.count;m++)o.push(r+m);r+=h.attributes.position.count}const l=new Ee;return l.setAttribute("position",new Se(i,3)),l.setAttribute("normal",new Se(n,3)),l.setAttribute("color",new Se(a,3)),l.setIndex(o),l}function be(s=16764023,t=1){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),n=i.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,`rgba(${s>>16&255},${s>>8&255},${s&255},.95)`),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,64,64);const a=new fr(e),o=new ga({map:a,color:s,transparent:!0,blending:Fe,depthWrite:!1}),r=new ur(o);return r.scale.setScalar(t),r}function Cl(s){const t=Math.floor(s%60);return`${Math.floor(s/60)}:${String(t).padStart(2,"0")}`}const Pl=250,oo=108,re={x:0,z:-102,r:31},ke=[[8,112],[7,96],[6,84],[2,74],[0,64],[4,54],[10,44],[8,33],[2,24],[-6,14],[-12,4],[-11,-8],[-4,-22],[2,-36],[4,-52],[1,-68],[0,-82]];function xn(s,t){let e=999,i=0,n=0,a=0;for(let o=0;o<ke.length-1;o++){const[r,l]=ke[o],[h,c]=ke[o+1],d=h-r,u=c-l,m=d*d+u*u;let g=((s-r)*d+(t-l)*u)/m;g=De(g,0,1);const v=r+d*g,p=l+u*g,f=Math.hypot(s-v,t-p);f<e&&(e=f,i=v,n=p,a=o+g)}return{d:e,x:i,z:n,t:a}}function cs(s,t,e,i,n,a,o){const r=Math.hypot(e-n,i-a),l=1-ha(o*.55,o,r);return xe(s,t,l)}function bt(s,t){let e=1.5*Math.sin(s*.045)*Math.cos(t*.038)+.9*Math.sin((s+t)*.072)+.55*Math.sin(s*.16+1.2)*Math.sin(t*.13+.4)+(Sh(s*.018+2,t*.018-3,3)-.5)*1.6;const i=Math.max(0,Math.max(Math.abs(s),Math.abs(t))-88);e+=Math.pow(i,1.7)*.08,e=cs(e,1.15,s,t,7,88,18),e=cs(e,1.55,s,t,3,53,25),e=cs(e,.5,s,t,re.x,re.z,re.r+10),e=cs(e,1,s,t,-2,72,12),e=cs(e,1,s,t,1,-68,10);const n=xn(s,t);if(n.d<8){const a=1-ha(2.2,8,n.d),o=1.25+Math.sin(n.t*1.7)*.25;e=xe(e,o,a*.72)}return e}function Vm(s){const e=new yi(Pl,Pl,150,150);e.rotateX(-Math.PI/2);const i=e.attributes.position,n=new Float32Array(i.count*3);new K;for(let l=0;l<i.count;l++){const h=i.getX(l),c=i.getZ(l),d=bt(h,c);i.setY(l,d);const u=xn(h,c),m=Sh(h*.08,c*.08,3),g=Mh(h*.35,c*.35);let v=.21+m*.1,p=.3+m*.1,f=.145+m*.05;h<-18&&c>-45&&c<64&&(v*=.72,p*=.78,f*=.8);const w=Math.hypot(h-re.x,c-re.z);if(w<re.r+8){const _=1-ha(re.r-10,re.r+8,w);v=xe(v,.17,_*.65),p=xe(p,.13,_*.65),f=xe(f,.15,_*.5)}if(u.d<5.4){const _=1-ha(1.4,5.4,u.d);v=xe(v,.48+g*.1,_),p=xe(p,.36+g*.07,_),f=xe(f,.22+g*.04,_)}Math.max(Math.abs(h),Math.abs(c))>96&&(v=xe(v,.28,.7),p=xe(p,.27,.7),f=xe(f,.26,.7)),n[l*3]=v,n[l*3+1]=p,n[l*3+2]=f}e.setAttribute("color",new Se(n,3)),e.computeVertexNormals();const a=new Ae({vertexColors:!0,roughness:1,metalness:0,flatShading:!1}),o=new L(e,a);o.receiveShadow=!1,s.add(o);const r=new L(new Ni(240,48),new ee({color:1118991}));return r.rotation.x=-Math.PI/2,r.position.y=-8,s.add(r),o}function Wm(s,t,e=0){return Math.hypot(s-re.x,t-re.z)<re.r+e}const ai=new P;class Xm{constructor(t){this.game=t,this.el={};const e=["hud","hp-fill","hp-lag","st-fill","fp-fill","flask-count","flask-icon","buff-icons","motes-count","objective-text","weapon-name","armor-name","lock-reticle","enemy-bars","interact-prompt","interact-text","interact-key","boss-bar","boss-name","boss-sub","boss-fill","boss-lag","boss-phase","subtitle","toasts","damage-flash","hint","contextual","cinematic","cinematic-title","cinematic-lines","title-screen","btn-new","btn-continue","btn-controls","btn-credits","title-saveinfo","loading","load-fill","load-status","menu-overlay","menu-title","menu-body","menu-footer","menu-close","dialogue","dialogue-name","dialogue-text","dialogue-options","dialogue-portrait","dialogue-hint","death-screen","death-line","death-motes","btn-respawn","victory-banner","victory-title","victory-sub","ending-screen","ending-kicker","ending-title","ending-text","ending-flavor","btn-ending-continue","controls-screen","controls-grid","controls-close","fade","lowhp","region-name","region-sub","gamepad-hint"];for(const i of e)this.el[i]=document.getElementById(i);this.toastQueue=[],this.dialogueState=null,this.currentMenu=null,this.subtitleTimer=0,this.floatPool=[],this.bossRef=null,this.eliteRef=null,this.deathShown=!1,this._lastEnemyBars=new Map,this.gpFocusEls=[],this.gpFocusIndex=0,this.gpContextKey="",this.gpContextSig="",this.gpNavDir=0,this.gpRepeatTimer=0,this.gpConfirmLocked=!1,this.lastDevice="keyboard",this.bind(),this.buildControls()}bind(){this.el["btn-new"].addEventListener("click",()=>{this.game.audio.init(),this.game.audio.ui(),this.game.startNewGame()}),this.el["btn-continue"].addEventListener("click",()=>{this.game.audio.init(),this.game.audio.ui(),this.game.continueGame()}),this.el["btn-controls"].addEventListener("click",()=>{this.game.audio.ui(),this.showControls()}),this.el["btn-credits"].addEventListener("click",()=>{this.game.audio.ui(),this.showCredits()}),this.el["controls-close"].addEventListener("click",()=>{this.hideControls()}),this.el["menu-close"].addEventListener("click",()=>{this.game.closeMenu()}),this.el["btn-respawn"].addEventListener("click",()=>{this.game.respawn()}),this.el["btn-ending-continue"].addEventListener("click",()=>{this.game.returnToThreshold()}),window.addEventListener("keydown",t=>this.onKeyDown(t)),document.getElementById("game-canvas").addEventListener("click",()=>{!this.game.uiBlocking&&!this.game.cinematic&&this.game.audio.resume()}),window.addEventListener("gpadchange",t=>{var i,n;const e=this.el["gamepad-hint"];e&&(clearTimeout(this._gpHintTimer),t.detail?(e.textContent="XBOX CONTROLLER CONNECTED · A SELECT · B BACK",e.classList.remove("hidden"),this._gpHintTimer=setTimeout(()=>e.classList.add("hidden"),4500),(n=(i=this.game.input).rumble)==null||n.call(i,.35,.2,140)):e.classList.add("hidden"))})}buildControls(){this.el["controls-grid"].innerHTML=zm.map(([t,e])=>`<div class="control-row"><span>${t}</span><span class="control-key">${e}</span></div>`).join("")}onKeyDown(t){var e;if(this.dialogueState){if(t.code==="Escape"){t.preventDefault(),this.closeDialogue();return}if(/^Digit[1-9]$/.test(t.code)){const i=+t.code.slice(5)-1,n=this.el["dialogue-options"].children[i];n&&(t.preventDefault(),n.click());return}if(t.code==="KeyE"||t.code==="Enter")if(t.preventDefault(),(e=this.dialogueState.node.options)!=null&&e.length){const i=this.el["dialogue-options"].querySelector(".dialogue-option");i&&i.click()}else this.closeDialogue()}}setLoading(t,e){this.el["load-fill"].style.width=`${Math.round(t*100)}%`,e&&(this.el["load-status"].textContent=e)}finishLoading(){this.el.loading.classList.add("done"),setTimeout(()=>this.el.loading.classList.add("hidden"),800)}updateTitleSlot(t,e){this.el["btn-continue"].classList.toggle("hidden",!t),t&&e?this.el["title-saveinfo"].textContent=`Level ${e.level} · ${e.motes} motes · ${e.deaths} deaths · ${Cl(e.playtime)}`:t?this.el["title-saveinfo"].textContent="A journey awaits.":this.el["title-saveinfo"].textContent=""}showTitle(){this.el["title-screen"].classList.remove("hidden"),this.el.hud.classList.add("hidden"),this.el["menu-overlay"].classList.add("hidden"),this.el["ending-screen"].classList.add("hidden"),this.el["death-screen"].classList.add("hidden"),this.el.dialogue.classList.add("hidden"),this.el.dialogue.classList.add("hidden")}hideTitle(){this.el["title-screen"].classList.add("hidden")}showHUD(){this.el.hud.classList.remove("hidden")}hideHUD(){this.el.hud.classList.add("hidden")}showCinematic(){this.el.cinematic.classList.remove("hidden"),this.hideHUD()}hideCinematic(){this.el.cinematic.classList.add("hidden"),this.el["cinematic-lines"].innerHTML="",this.el["cinematic-title"].classList.add("hidden")}showCinematicTitle(t=!0){this.el["cinematic-title"].classList.toggle("hidden",!t)}setCinematicLine(t){this.el["cinematic-lines"].innerHTML=t?`<div class="cine-line">${t}</div>`:""}subtitle(t,e=4){this.el.subtitle.textContent=t,this.el.subtitle.classList.remove("hidden"),this.subtitleTimer=e}update(t){this.subtitleTimer>0&&(this.subtitleTimer-=t,this.subtitleTimer<=0&&this.el.subtitle.classList.add("hidden")),this.updateGamepadUI(t)}setRegion(t,e){this.el["region-name"].textContent=t,this.el["region-sub"].textContent=e}setObjective(t){this.el["objective-text"].textContent=t}setMotes(t){this.el["motes-count"].textContent=Math.floor(t).toLocaleString("en-US")}setWeapon(t){this.el["weapon-name"].textContent=t}setArmor(t){this.el["armor-name"].textContent=t}updateVitals(t){const e=Math.max(0,t.hp/t.maxHp),i=Math.max(0,t.stamina/t.maxStamina),n=Math.max(0,t.focus/t.maxFocus);this.el["hp-fill"].style.transform=`scaleX(${e})`,this.el["hp-lag"].style.transform=`scaleX(${e})`,this.el["st-fill"].style.transform=`scaleX(${i})`,this.el["fp-fill"].style.transform=`scaleX(${n})`,this.el["flask-count"].textContent=t.stats.flaskUses,this.el.lowhp.classList.toggle("on",e<.3&&!t.dead),this.el["flask-icon"].style.opacity=t.stats.flaskUses>0?1:.35}setInteract(t){if(!t){this.el["interact-prompt"].classList.add("hidden");return}this.el["interact-text"].textContent=t,this.el["interact-key"].textContent=this.lastDevice==="gamepad"?"A":"E",this.el["interact-prompt"].classList.remove("hidden")}contextual(t){if(!t){this.el.contextual.classList.add("hidden");return}this.el.contextual.textContent=t,this.el.contextual.classList.remove("hidden")}hideContextual(){this.el.contextual.classList.add("hidden")}hint(t,e=5){if(!t){this.el.hint.classList.add("hidden");return}this.el.hint.textContent=t,this.el.hint.classList.remove("hidden"),clearTimeout(this._hintTimer),this._hintTimer=setTimeout(()=>this.el.hint.classList.add("hidden"),e*1e3)}toast(t,e=""){const i=document.createElement("div");i.className="toast "+e,i.textContent=t,this.el.toasts.appendChild(i),setTimeout(()=>i.remove(),3200)}floatText(t,e,i="enemy"){let n=this.floatPool.find(a=>!a._active);n||(n=document.createElement("div"),n.className="float-text",this.el.hud.appendChild(n),this.floatPool.push(n)),n._active=!0,n._life=.9,n._pos=t.clone?t.clone():new P(t.x,t.y,t.z),n.textContent=e,n.className="float-text "+i,n.style.opacity="1",this.floatPool.length>30&&this.floatPool.shift().remove()}updateFloatTexts(t){const e=this.game.camera;for(const i of this.floatPool){if(!i._active)continue;if(i._life-=t,i._pos.y+=t*1.5,i._life<=0){i._active=!1,i.style.opacity="0";continue}if(ai.copy(i._pos).project(e),ai.z>1){i.style.opacity="0";continue}const n=(ai.x*.5+.5)*window.innerWidth,a=(-ai.y*.5+.5)*window.innerHeight;i.style.transform=`translate(-50%,-50%) translate(${n}px,${a}px)`,i.style.opacity=String(Math.min(1,i._life*2))}}damageFlash(){this.el["damage-flash"].classList.add("on"),clearTimeout(this._damageTimer),this._damageTimer=setTimeout(()=>this.el["damage-flash"].classList.remove("on"),130)}showLock(t){if(!t){this.el["lock-reticle"].classList.add("hidden");return}if(ai.copy(t).project(this.game.camera),ai.z>1){this.el["lock-reticle"].classList.add("hidden");return}this.el["lock-reticle"].classList.remove("hidden"),this.el["lock-reticle"].style.left=(ai.x*.5+.5)*window.innerWidth+"px",this.el["lock-reticle"].style.top=(-ai.y*.5+.5)*window.innerHeight+"px"}updateEnemyBars(t){const e=this.game.camera,i=window.innerWidth,n=window.innerHeight,a=new Set;for(const o of t){if(!o.alive||o.isBoss)continue;if(!(o.pos.distanceTo(this.game.player.pos)<30&&(o.aggro||o.health<o.maxHealth))){o.barEl&&(o.barEl.style.display="none");continue}if(!o.barEl){const d=document.createElement("div");d.className="enemy-bar",d.innerHTML=`<div class="name">${o.def.name}</div><div class="fill"></div>`,this.el["enemy-bars"].appendChild(d),o.barEl=d}a.add(o);const h=o.pos.clone();if(h.y+=2*(o.def.scale||1)+.4,ai.copy(h).project(e),ai.z>1){o.barEl.style.display="none";continue}o.barEl.style.display="block",o.barEl.style.left=(ai.x*.5+.5)*i+"px",o.barEl.style.top=(-ai.y*.5+.5)*n+"px";const c=o.barEl.querySelector(".fill");c.style.width=Math.max(0,o.health/o.maxHealth*100)+"%"}for(const[o,r]of this._lastEnemyBars)a.has(o)||(r.remove(),o.barEl===r&&(o.barEl=null));this._lastEnemyBars=new Map(t.filter(o=>o.barEl).map(o=>[o,o.barEl]))}showBossBar(t){this.bossRef=t,this.eliteRef=null,this.el["boss-name"].textContent=t.name,this.el["boss-sub"].textContent=t.sub,this.el["boss-phase"].textContent="I",this.el["boss-bar"].classList.remove("hidden"),this.updateBossBar()}updateBossBar(){if(!this.bossRef)return;const t=Math.max(0,this.bossRef.health/this.bossRef.maxHealth);this.el["boss-fill"].style.width=t*100+"%",this.el["boss-lag"].style.width=t*100+"%"}setBossPhase(t){this.el["boss-phase"].textContent=t===1?"I":"II"}hideBossBar(){this.el["boss-bar"].classList.add("hidden"),this.bossRef=null}showEliteBar(t){this.bossRef&&this.bossRef.active||(this.eliteRef=t,this.el["boss-name"].textContent=t.def.name.toUpperCase(),this.el["boss-sub"].textContent="Hidden Mini-Boss",this.el["boss-phase"].textContent="",this.el["boss-bar"].classList.remove("hidden"),this.el["boss-fill"].style.width=t.health/t.maxHealth*100+"%",this.el["boss-lag"].style.width=t.health/t.maxHealth*100+"%")}updateEliteBar(){if(!this.eliteRef)return;const t=Math.max(0,this.eliteRef.health/this.eliteRef.maxHealth);this.el["boss-fill"].style.width=t*100+"%",this.el["boss-lag"].style.width=t*100+"%"}hideEliteBar(){this.bossRef||(this.el["boss-bar"].classList.add("hidden"),this.eliteRef=null)}showDeath(t,e){this.deathShown=!0,this.hideHUD(),this.el["death-screen"].classList.remove("hidden"),this.el["death-line"].textContent=e||"The shire remembers your name. It will not remember your face.",this.el["death-motes"].textContent=t>0?`${t} motes remain where you fell.`:"No motes were lost.",this.game.input.releaseLock()}hideDeath(){this.deathShown=!1,this.el["death-screen"].classList.add("hidden"),this.showHUD()}banner(t,e,i=4200){this.el["victory-title"].textContent=t,this.el["victory-sub"].textContent=e||"",this.el["victory-banner"].classList.remove("hidden"),clearTimeout(this._bannerTimer),this._bannerTimer=setTimeout(()=>this.el["victory-banner"].classList.add("hidden"),i)}openMenu(t,e,i="",n=!1){this.currentMenu={title:t,bodyHTML:e},this.el["menu-title"].textContent=t,this.el["menu-body"].innerHTML=e,this.el["menu-footer"].innerHTML=i,this.el["menu-overlay"].classList.remove("hidden"),document.querySelector(".menu-frame").classList.toggle("wide",n),this.game.input.releaseLock()}closeMenuUI(){this.el["menu-overlay"].classList.add("hidden"),this.currentMenu=null}showPause(t){const e=`
      <div class="pause-menu">
        <button class="menu-btn primary" data-act="resume">RESUME</button>
        <button class="menu-btn" data-act="inventory">INVENTORY &amp; EQUIPMENT</button>
        <button class="menu-btn" data-act="map">MAP OF THE SHIRE</button>
        <button class="menu-btn" data-act="controls">CONTROLS</button>
        <button class="menu-btn" data-act="savequit">SAVE &amp; RETURN TO TITLE</button>
      </div>
      <p class="shrine-note" style="margin-top:22px">${t||""}</p>`;this.openMenu("PAUSED",e,`<span>“The crown is hollow. So is the king.”</span><span>${Cl(this.game.state.playtime)} · A select · B close</span>`),this.el["menu-body"].querySelectorAll("[data-act]").forEach(i=>i.addEventListener("click",()=>this.game.menuAction(i.dataset.act)))}showInventory(){const t=this.game,e=t.state.player,i=_i[e.equippedWeapon],n=Li[e.equippedArmor],a=e.weapons.map(c=>{const d=_i[c];return`<div class="inv-item ${c===e.equippedWeapon?"equipped":""}" data-weapon="${c}">
        <div class="item-name">${d.icon} ${d.name}</div>
        <div class="item-meta">${d.category} · ${Math.round(t.player.attackPower*(d.damage/t.player.weapon.damage))} AR · ${d.weight}</div>
        ${c===e.equippedWeapon?'<span class="item-tag">EQUIPPED</span>':""}
      </div>`}).join(""),o=e.armor.map(c=>{const d=Li[c];return`<div class="inv-item ${c===e.equippedArmor?"equipped":""}" data-armor="${c}">
        <div class="item-name">${d.name}</div>
        <div class="item-meta">Defense ${d.defense} · Poise ${d.poise}</div>
        ${c===e.equippedArmor?'<span class="item-tag">EQUIPPED</span>':""}
      </div>`}).join(""),r=Object.entries(e.items).filter(([,c])=>c>0).map(([c,d])=>{const u=Jo[c]||{name:c,desc:"",icon:"·"};return`<div class="inv-item"><div class="item-name">${u.icon||"·"} ${u.name} ×${d}</div><div class="item-meta">${u.desc}</div></div>`}).join("")||'<div class="inv-item"><div class="item-meta">No consumables.</div></div>',l=Qo.map(c=>t.state.lore.includes(c.id)?`<div class="lore-entry" data-lore="${c.id}"><h4>${c.title}</h4><p>${c.summary}</p></div>`:'<div class="lore-entry locked"><h4>???</h4><p>An undiscovered page.</p></div>').join(""),h=`
      <div class="menu-columns">
        <div>
          <div class="panel-title">ATTRIBUTES</div>
          <div class="stat-row"><span>Level</span><b>${e.level}</b></div>
          <div class="stat-row"><span>Vigor</span><b>${e.vigor}</b></div>
          <div class="stat-row"><span>Endurance</span><b>${e.endurance}</b></div>
          <div class="stat-row"><span>Strength</span><b>${e.strength}</b></div>
          <div class="stat-row"><span>Dexterity</span><b>${e.dexterity}</b></div>
          <div class="stat-row"><span>Faith</span><b>${e.faith}</b></div>
          <div class="stat-row"><span>Health</span><b>${Math.round(t.player.hp)} / ${t.player.maxHp}</b></div>
          <div class="stat-row"><span>Stamina</span><b>${Math.round(t.player.maxStamina)}</b></div>
          <div class="stat-row"><span>Attack Power</span><b>${Math.round(t.player.attackPower)}</b></div>
          <div class="stat-row"><span>Defense</span><b>${t.player.defense}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(e.motes).toLocaleString("en-US")}</b></div>
          <div class="stat-row"><span>Deaths</span><b>${t.state.deaths}</b></div>
          <div class="panel-title" style="margin-top:22px">ARMOR</div>
          <div class="inv-grid">${o}</div>
        </div>
        <div>
          <div class="panel-title">EQUIPPED</div>
          <div class="stat-row"><span>Weapon</span><b>${i.name}</b></div>
          <div class="stat-row"><span>Armor</span><b>${n.name}</b></div>
          <div class="stat-row"><span>Flask</span><b>${e.flaskUses} / ${e.maxFlask}</b></div>
          <div class="panel-title" style="margin-top:22px">WEAPONS</div>
          <div class="inv-grid" style="grid-template-columns:1fr">${a}</div>
          <div class="panel-title" style="margin-top:22px">ITEMS</div>
          <div class="inv-grid" style="grid-template-columns:1fr">${r}</div>
        </div>
      </div>
      <div class="panel-title" style="margin-top:24px">LOR E · PAGES OF ELDORIA</div>
      <div>${l}</div>`;this.openMenu("INVENTORY",h,"<span>Select a weapon or armor to equip it.</span><span>I / B to close</span>",!0),this.el["menu-body"].querySelectorAll("[data-weapon]").forEach(c=>c.addEventListener("click",()=>{t.equipWeapon(c.dataset.weapon),this.showInventory()})),this.el["menu-body"].querySelectorAll("[data-armor]").forEach(c=>c.addEventListener("click",()=>{t.equipArmor(c.dataset.armor),this.showInventory()})),this.el["menu-body"].querySelectorAll("[data-lore]").forEach(c=>c.addEventListener("click",()=>this.showLore(c.dataset.lore)))}showLore(t){const e=Qo.find(i=>i.id===t);e&&(this.openMenu(e.title.toUpperCase(),`<p style="font-size:16px;line-height:1.75;font-style:italic;color:#c9bca4;white-space:pre-wrap">${e.text}</p>`,"<span>Recovered page</span><span>ESC / B to close</span>"),this.currentMenu={title:e.title,lore:!0})}showLevelUp(){const t=this.game,e=t.state.player,i=t.levelCost(),n=[["vigor","Vigor","Increases maximum health."],["endurance","Endurance","Increases stamina and resistance."],["strength","Strength","Improves heavy weapon damage."],["dexterity","Dexterity","Improves fast weapon damage."],["faith","Faith","Improves focus and spells."]],a=`
      <div class="menu-columns">
        <div>
          <div class="panel-title">THE HOLLOW TREE SHRINE</div>
          <p style="font-size:14px;line-height:1.65;color:#a99e88;font-style:italic">The flame accepts what the world has taken. Spend motes to deepen your body and sharpen your soul.</p>
          <div class="stat-row" style="margin-top:16px"><span>Level</span><b>${e.level}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(e.motes).toLocaleString("en-US")}</b></div>
          <div class="stat-row"><span>Next level</span><b>${i} motes</b></div>
          <div class="stat-row"><span>Health</span><b>${t.player.maxHp}</b></div>
          <div class="stat-row"><span>Stamina</span><b>${t.player.maxStamina}</b></div>
          <div class="stat-row"><span>Focus</span><b>${t.player.maxFocus}</b></div>
        </div>
        <div>
          <div class="panel-title">RAISE ATTRIBUTE</div>
          <div class="level-attrs">
            ${n.map(([o,r,l])=>`<button class="attr-btn" data-attr="${o}" ${e.motes<i?"disabled":""}><span>${r}</span><span><span class="attr-val">${e[o]}</span> <span class="plus">+</span></span></button><div class="attr-desc">${l}</div>`).join("")}
          </div>
        </div>
      </div>`;this.openMenu("LEVEL UP",a,`<span>Each level grants one attribute point.</span><span>${e.motes<i?"Not enough motes":"Choose wisely"}</span>`,!0),this.el["menu-body"].querySelectorAll("[data-attr]").forEach(o=>o.addEventListener("click",()=>{t.levelUp(o.dataset.attr)&&this.showLevelUp()}))}showShop(){const t=this.game,e=t.state.player,n=t.shopStock().map(a=>{const o=a.type==="weapon"?e.weapons.includes(a.id):a.type==="armor"?e.armor.includes(a.id):!1;return`<div class="shop-item">
        <div><div class="si-name">${a.name}</div><div class="si-desc">${a.desc}</div></div>
        <button class="menu-btn" data-buy="${a.id}" data-kind="${a.type}" ${o||e.motes<a.price?"disabled":""}>${o?"OWNED":`${a.price} ✦`}</button>
      </div>`}).join("");this.openMenu("MARROW'S WARES",n,`<span>Motes: ${Math.floor(e.motes).toLocaleString("en-US")}</span><span>“No refunds. The dead are poor customers.”</span>`,!0),this.el["menu-body"].querySelectorAll("[data-buy]").forEach(a=>a.addEventListener("click",()=>{t.buy(a.dataset.buy,a.dataset.kind)&&this.showShop()}))}showMap(){const e=`
      <div class="map-wrap">
        <div class="map-canvas"><canvas id="map-cv"></canvas></div>
        <div>
          <div class="panel-title">THE FORGOTTEN SHIRE</div>
          <div class="map-legend">
            <div class="lg"><span class="dot" style="background:#c9a45c"></span> Shrine</div>
            <div class="lg"><span class="dot" style="background:#8fb0d8"></span> Survivor</div>
            <div class="lg"><span class="dot" style="background:#b0733d"></span> Chest</div>
            <div class="lg"><span class="dot" style="background:#a44c9c"></span> Corruption</div>
            <div class="lg"><span class="dot" style="background:#e7cd92"></span> You</div>
          </div>
          <div class="panel-title" style="margin-top:22px">THREAD OF FATE</div>
          <p style="font-size:13px;line-height:1.6;color:#a99e88;font-style:italic">${this.game.objectiveText()}</p>
          <div class="panel-title" style="margin-top:22px">REGIONS OF ELDORIA</div>
          <div style="font-size:12px;line-height:1.9;color:#7d7567;font-style:italic">
            I. The Forgotten Shire<br/>
            <span style="opacity:.35">II. The Weeping Wilds · sealed</span><br/>
            <span style="opacity:.35">III. The Kingdom of Ashenveil · sealed</span><br/>
            <span style="opacity:.35">IV. The Frostbitten Reach · sealed</span><br/>
            <span style="opacity:.35">V. The Shattered Heavens · sealed</span><br/>
            <span style="opacity:.35">VI. The Black Spire · sealed</span>
          </div>
        </div>
      </div>`;this.openMenu("MAP",e,"<span>The world is not finished. It is waiting.</span><span>M / B to close</span>",!0);const i=document.getElementById("map-cv");i&&this.drawMap(i)}drawMap(t){const e=this.game,i=t.getBoundingClientRect(),n=Math.min(2,window.devicePixelRatio||1);t.width=i.width*n,t.height=i.height*n;const a=t.getContext("2d");a.scale(n,n);const o=i.width,r=i.height,l=(f,w)=>[o*.5+f/250*o*.9,r*.5+w/250*r*.9],h=a.createRadialGradient(o*.45,r*.4,10,o*.5,r*.5,o*.7);h.addColorStop(0,"#231f18"),h.addColorStop(1,"#0c0b0d"),a.fillStyle=h,a.fillRect(0,0,o,r);for(let f=0;f<240;f++)a.fillStyle=`rgba(201,164,92,${Math.random()*.035})`,a.fillRect(Math.random()*o,Math.random()*r,1,1);a.fillStyle="rgba(52,68,45,.5)";for(const[f,w,_]of[[-48,25,36],[-60,-20,32],[40,10,30],[55,55,26],[-40,70,22],[48,-45,30]]){const[y,A]=l(f,w);a.beginPath(),a.arc(y,A,_/250*o,0,Math.PI*2),a.fill()}const[c,d]=l(re.x,re.z);a.strokeStyle="rgba(156,92,255,.4)",a.lineWidth=1,a.beginPath(),a.arc(c,d,re.r/250*o,0,Math.PI*2),a.stroke(),a.fillStyle="rgba(90,44,120,.18)",a.fill(),a.strokeStyle="rgba(201,164,92,.5)",a.lineWidth=2.2,a.setLineDash([5,7]),a.beginPath(),ke.forEach(([f,w],_)=>{const[y,A]=l(f,w);_?a.lineTo(y,A):a.moveTo(y,A)}),a.stroke(),a.setLineDash([]);const u=(f,w,_,y=3,A="")=>{const[T,S]=l(f,w);a.fillStyle=_,a.beginPath(),a.arc(T,S,y,0,Math.PI*2),a.fill(),A&&(a.font="9px Georgia",a.fillStyle="rgba(220,210,190,.6)",a.textAlign="center",a.fillText(A,T,S-7))};for(const f of e.world.shrines)u(f.x,f.z,"#c9a45c",3.5,f.id==="tree"?"SHRINE":"");for(const f of e.world.chests){const[w,_]=l(f.x,f.z);a.fillStyle="#b0733d",a.fillRect(w-2,_-2,4,4)}for(const f of e.npcs)u(f.x,f.z,"#8fb0d8",2.5,f.id==="marrow"?"MARROW":"");const[m,g]=l(0,-102);a.fillStyle="rgba(160,60,60,.9)",a.font="13px Georgia",a.textAlign="center",a.fillText("☠",m,g);const[v,p]=l(e.player.pos.x,e.player.pos.z);a.save(),a.translate(v,p),a.rotate(-e.player.yaw),a.fillStyle="#f0e6d0",a.beginPath(),a.moveTo(0,-7),a.lineTo(4.5,5),a.lineTo(0,3),a.lineTo(-4.5,5),a.closePath(),a.fill(),a.restore(),a.strokeStyle="rgba(231,205,146,.35)",a.beginPath(),a.arc(v,p,10,0,Math.PI*2),a.stroke(),a.fillStyle="rgba(201,164,92,.65)",a.font="10px Georgia",a.textAlign="center",a.fillText("N",o/2,16),a.beginPath(),a.moveTo(o/2,20),a.lineTo(o/2-3,28),a.lineTo(o/2+3,28),a.closePath(),a.fill()}showEndings(t){const e=`
      <p style="font-size:15px;line-height:1.7;color:#b9ae9a;font-style:italic;margin-top:0">The seer's echo splits into three threads. Each is a choice you have not yet made — a shape the future might take if you reach the bottom of the world.</p>
      <div class="ending-choice">
        <button class="menu-btn" data-ending="dawn">A NEW DAWN<small>Destroy the Devourer. Open the way home. Save Eldoria.</small></button>
        <button class="menu-btn" data-ending="crown">THE HOLLOW CROWN<small>Take the Devourer's power. Rule what remains.</small></button>
        <button class="menu-btn" data-ending="veil" ${t.veil?"":"disabled"}>BEYOND THE VEIL ${t.veil?"":`<small style="color:#6d6558">Locked — find three pages of Eldoria's truth.</small>`}<small>Reject both. Walk through the door that was never meant to open.</small></button>
      </div>`;this.openMenu("THE THREE THREADS",e,`<span>An echo is not a promise.</span><span>${t.veil?"All threads visible":`Pages recovered: ${this.game.state.lore.length} / 3`} · A select · B close</span>`,!0),this.el["menu-body"].querySelectorAll("[data-ending]").forEach(i=>i.addEventListener("click",()=>{i.disabled||this.game.chooseEnding(i.dataset.ending)}))}showEnding(t){this.closeMenuUI(),this.hideHUD(),this.el["ending-screen"].classList.remove("hidden"),this.el["ending-kicker"].textContent=t.kicker,this.el["ending-title"].textContent=t.title,this.el["ending-text"].textContent=t.text,this.el["ending-flavor"].textContent=t.flavor}hideEnding(){this.el["ending-screen"].classList.add("hidden")}showControls(){this.el["controls-screen"].classList.remove("hidden"),this.game.audio.ui()}hideControls(){this.el["controls-screen"].classList.add("hidden")}showCredits(){this.openMenu("CREDITS",`
      <div style="line-height:1.9;font-size:14px;color:#b7ac97">
        <p style="font-style:italic;color:#d8cdb6">THE HOLLOW CROWN</p>
        <p>A playable dark-fairytale vertical slice.</p>
        <p style="margin-top:18px;font-size:12px;color:#8c8373">Design, code, procedural world, characters, animation, music and sound — generated for this build.<br/>
        Built with Three.js and the Web Audio API. No external art assets.<br/>
        Keyboard + mouse and Xbox-style controller supported.</p>
        <p style="margin-top:18px;font-size:12px;color:#6f685b">“An ordinary human. A kingdom devoured from within. The only way home is through the dark.”</p>
      </div>`,"<span>Thank you for playing.</span><span>ESC to close</span>")}openDialogue(t){var i;const e=t.dialogue();e&&((i=e.onOpen)==null||i.call(e),this.dialogueState={npc:t,data:e,node:e.nodes[e.startNode]},this.el.dialogue.classList.remove("hidden"),this.el["dialogue-name"].textContent=t.name,this.el["dialogue-portrait"].textContent=t.id==="marrow"?"☾":t.id==="wisp"?"✦":"◉",this.refreshInputHints(),this.renderDialogue())}renderDialogue(){const t=this.dialogueState;if(!t)return;const e=t.node;this.el["dialogue-text"].textContent=e.text;const i=this.el["dialogue-options"];if(i.innerHTML="",e.options&&e.options.length)e.options.forEach((n,a)=>{if(n.condition&&!n.condition())return;const o=document.createElement("button");o.className="dialogue-option",o.textContent=`${a+1}. ${n.label}`,o.addEventListener("click",()=>this.chooseDialogue(n)),i.appendChild(o)});else{const n=document.createElement("button");n.className="dialogue-option",n.textContent="Continue",n.addEventListener("click",()=>this.closeDialogue()),i.appendChild(n)}}chooseDialogue(t){const e=this.dialogueState;if(e){if(this.game.audio.ui(),t.next){const i=e.data.nodes[t.next];if(i){e.node=i,this.renderDialogue();return}}if(t.action){this.game.dialogueAction(t.action,e.npc);return}}}closeDialogue(){this.dialogueState=null,this.el.dialogue.classList.add("hidden"),this.game.closeDialogue()}updateGamepadUI(t){const e=this.game.input;if(!e)return;if(e.lastDevice!==this.lastDevice&&(this.lastDevice=e.lastDevice,this.refreshInputHints()),e.lastDevice!=="gamepad"){this.clearGpFocus();return}const i=this.gpContext();if(!i){this.clearGpFocus();return}if(i.key!==this.gpContextKey){if(this.gpContextKey=i.key,this.gpContextSig=i.sig,this.gpFocusEls=this.gpCollect(i.el,i.selector,i.extra),this.gpFocusIndex=0,this.gpNavDir=0,this.gpRepeatTimer=.35,this.applyGpFocus(),this.gpConfirmLocked=i.key!=="title"&&!!(this.game.uiBlocking||this.dialogueState),this.gpConfirmLocked)return}else if(this.gpFocusEls.length===0)this.gpFocusEls=this.gpCollect(i.el,i.selector,i.extra),this.gpFocusIndex=0,this.applyGpFocus();else if(i.sig!==this.gpContextSig){this.gpContextSig=i.sig;const l=this.gpFocusEls[this.gpFocusIndex];this.gpFocusEls=this.gpCollect(i.el,i.selector,i.extra);const h=this.gpFocusEls.indexOf(l);this.gpFocusIndex=h>=0?h:Math.min(this.gpFocusIndex,this.gpFocusEls.length-1),this.gpFocusIndex<0&&(this.gpFocusIndex=0),this.applyGpFocus()}if(this.gpConfirmLocked){this.gpConfirmLocked=!1;return}if(e.navCancel&&i.cancel){i.cancel(),this.clearGpFocus(!0);return}if(e.navConfirm){this.activateGpFocus();return}const a=e.navY,o=e.navX;let r=0;e.wasPressed("GP12")||e.wasPressed("GP14")?r=-1:e.wasPressed("GP13")||e.wasPressed("GP15")?r=1:Math.abs(a)>.55?r=a<0?-1:1:Math.abs(o)>.55&&(r=o<0?-1:1),r!==this.gpNavDir?(this.gpNavDir=r,r&&(this.moveGpFocus(r),this.gpRepeatTimer=.42)):r?(this.gpRepeatTimer-=t,this.gpRepeatTimer<=0&&(this.moveGpFocus(r),this.gpRepeatTimer=.14)):this.gpRepeatTimer=.42}gpContext(){var e,i;const t=n=>!!n&&!n.classList.contains("hidden")&&n.getClientRects().length>0;return this.dialogueState&&t(this.el.dialogue)?{key:"dialogue",el:this.el.dialogue,selector:".dialogue-option",sig:`${((i=(e=this.dialogueState.node)==null?void 0:e.text)==null?void 0:i.length)||0}:${this.el["dialogue-options"].children.length}`,cancel:()=>this.closeDialogue()}:t(this.el["controls-screen"])?{key:"controls",el:this.el["controls-screen"],selector:"#controls-close",sig:"controls",cancel:()=>this.hideControls()}:t(this.el["death-screen"])?{key:"death",el:this.el["death-screen"],selector:"#btn-respawn",sig:"death",cancel:null}:t(this.el["ending-screen"])?{key:"ending",el:this.el["ending-screen"],selector:"#btn-ending-continue",sig:"ending",cancel:()=>this.game.returnToThreshold()}:t(this.el["menu-overlay"])?{key:"menu",el:this.el["menu-overlay"],selector:"#menu-body button:not([disabled]), #menu-body [data-weapon], #menu-body [data-armor], #menu-body [data-lore]",extra:"#menu-close",sig:`${this.el["menu-title"].textContent}:${this.el["menu-body"].innerHTML.length}`,cancel:()=>this.game.closeMenu()}:t(this.el["title-screen"])?{key:"title",el:this.el["title-screen"],selector:".title-menu .menu-btn:not(.hidden)",sig:`${this.el["btn-new"].classList.contains("hidden")}:${this.el["btn-continue"].classList.contains("hidden")}`,cancel:null}:null}gpCollect(t,e,i){if(!t)return[];const n=o=>!o.disabled&&!o.classList.contains("hidden")&&o.getClientRects().length>0,a=Array.from(t.querySelectorAll(e)).filter(n);if(i){const o=Array.from(t.querySelectorAll(i)).filter(n);for(const r of o)a.includes(r)||a.push(r)}return a}applyGpFocus(){var e;for(const i of this.gpFocusEls)i.classList.remove("gp-focused");const t=this.gpFocusEls[this.gpFocusIndex];t&&(t.classList.add("gp-focused"),(e=t.scrollIntoView)==null||e.call(t,{block:"nearest",inline:"nearest"}))}clearGpFocus(t=!1){for(const e of this.gpFocusEls)e.classList.remove("gp-focused");this.gpFocusEls=[],this.gpFocusIndex=0,this.gpNavDir=0,t&&(this.gpContextKey="",this.gpContextSig="")}moveGpFocus(t){this.gpFocusEls.length&&(this.gpFocusIndex=(this.gpFocusIndex+t+this.gpFocusEls.length)%this.gpFocusEls.length,this.applyGpFocus(),this.game.audio.ui())}activateGpFocus(){const t=this.gpFocusEls[this.gpFocusIndex];!t||t.disabled||(this.game.audio.ui(),t.click())}refreshInputHints(){const t=this.lastDevice==="gamepad";this.el["interact-key"]&&(this.el["interact-key"].textContent=t?"A":"E"),this.el["dialogue-hint"]&&(this.el["dialogue-hint"].textContent=t?"[A] choose · [B] leave · D-pad / L-stick select":"[E] continue · [1-4] choose · [ESC] leave")}setBossVisible(t){this.el["boss-bar"].classList.toggle("hidden",!t)}}const qm=.18,Ym=.14,$m=.5;function Ll(s,t,e){const i=Math.hypot(s,t);if(i<=e)return{x:0,y:0,mag:0};const n=Math.min(1,(i-e)/(1-e));return{x:s/i*n,y:t/i*n,mag:n}}class Km{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.released=new Set,this.mouseDX=0,this.mouseDY=0,this.mouse=[!1,!1,!1],this.mousePressed=[!1,!1,!1],this.wheel=0,this.pointerLocked=!1,this.sensitivity=.0022,this.moveX=0,this.moveY=0,this.lookX=0,this.lookY=0,this.gamepad=null,this.gpButtons=[],this.gpPrev=[],this.gpConnected=!1,this.gpId="",this.gpMapping="",this.gpMoveX=0,this.gpMoveY=0,this.gpLookX=0,this.gpLookY=0,this.gpNavX=0,this.gpNavY=0,this.lastDevice="keyboard",this._lastGpInput=0,this._lastRumble=0,this.enabled=!0,this.onPointerLockChange=null,window.addEventListener("keydown",e=>{var i;this.lastDevice="keyboard",(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),e.code==="Escape"&&this.pointerLocked&&((i=document.exitPointerLock)==null||i.call(document))}),window.addEventListener("keyup",e=>{this.keys.delete(e.code),this.released.add(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse=[!1,!1,!1]}),t.addEventListener("mousedown",e=>{this.lastDevice="keyboard",this.mouse[e.button]=!0,this.mousePressed[e.button]=!0,e.button===0&&!this.pointerLocked&&this.enabled&&this.requestLock()}),window.addEventListener("mouseup",e=>{this.mouse[e.button]=!1}),window.addEventListener("mousemove",e=>{this.pointerLocked?(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY):this.mouse[2]&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY),Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastDevice="keyboard")}),t.addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{var e;this.pointerLocked=document.pointerLockElement===this.canvas,(e=this.onPointerLockChange)==null||e.call(this,this.pointerLocked),this.pointerLocked||(this.mouse=[!1,!1,!1])}),window.addEventListener("gamepadconnected",e=>{this.gpConnected=!0,this.gamepad=e.gamepad,this.gpId=e.gamepad.id||"",this.gpMapping=e.gamepad.mapping||"",this.lastDevice="gamepad",window.dispatchEvent(new CustomEvent("gpadchange",{detail:!0,gamepad:e.gamepad}))}),window.addEventListener("gamepaddisconnected",()=>{this.gpConnected=!1,this.gamepad=null,this.gpButtons=[],this.gpPrev=[],this.gpMoveX=this.gpMoveY=this.gpLookX=this.gpLookY=this.gpNavX=this.gpNavY=0,window.dispatchEvent(new CustomEvent("gpadchange",{detail:!1}))})}requestLock(){var t,e;(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}releaseLock(){var t;document.pointerLockElement===this.canvas&&((t=document.exitPointerLock)==null||t.call(document))}pollGamepad(){if(!navigator.getGamepads)return;const t=navigator.getGamepads();let e=null;for(const l of t)if(l&&l.connected&&(e=l,l.mapping==="standard"))break;if(!e){this.gpConnected&&(this.gpConnected=!1,this.gamepad=null,this.gpButtons=[],this.gpPrev=[],window.dispatchEvent(new CustomEvent("gpadchange",{detail:!1})));return}this.gpConnected||(this.lastDevice="gamepad",window.dispatchEvent(new CustomEvent("gpadchange",{detail:!0,gamepad:e}))),this.gpConnected=!0,this.gamepad=e,this.gpId=e.id||"",this.gpMapping=e.mapping||"";const i=Ll(e.axes[0]||0,e.axes[1]||0,qm),n=Ll(e.axes[2]||0,e.axes[3]||0,Ym),a=n.mag>0?Math.pow(n.mag,1.35)/n.mag:0;this.gpMoveX=i.x,this.gpMoveY=i.y,this.gpNavX=i.x,this.gpNavY=i.y,this.gpLookX=n.x*a,this.gpLookY=n.y*a;const o=e.buttons.map(l=>!!l&&(l.pressed||l.value>$m));this.gpButtons=o;let r=!1;for(let l=0;l<o.length;l++)o[l]&&!this.gpPrev[l]&&(this.pressed.add("GP"+l),r=!0),!o[l]&&this.gpPrev[l]&&(this.released.add("GP"+l),r=!0);this.gpPrev=o,(r||i.mag>0||n.mag>0||this.isDown("GP12")||this.isDown("GP13")||this.isDown("GP14")||this.isDown("GP15"))&&(this.lastDevice="gamepad",this._lastGpInput=performance.now())}update(){if(!this.enabled){this.moveX=this.moveY=this.lookX=this.lookY=0,this.pressed.clear(),this.released.clear(),this.mousePressed=[!1,!1,!1],this.mouseDX=this.mouseDY=0,this.wheel=0;return}this.pollGamepad();let t=0,e=0;(this.isDown("KeyW")||this.isDown("ArrowUp"))&&(e+=1),(this.isDown("KeyS")||this.isDown("ArrowDown"))&&(e-=1),(this.isDown("KeyD")||this.isDown("ArrowRight"))&&(t+=1),(this.isDown("KeyA")||this.isDown("ArrowLeft"))&&(t-=1),(this.gpMoveX||this.gpMoveY)&&(t=this.gpMoveX,e=-this.gpMoveY);const i=Math.hypot(t,e);i>1&&(t/=i,e/=i),this.moveX=t,this.moveY=e,this.lookX=this.gpLookX||0,this.lookY=this.gpLookY||0}endFrame(){this.pressed.clear(),this.released.clear(),this.mousePressed=[!1,!1,!1],this.mouseDX=0,this.mouseDY=0,this.wheel=0}isDown(t){return this.keys.has(t)||this.gpButtons&&t.startsWith("GP")&&this.gpButtons[+t.slice(2)]}wasPressed(t){return this.pressed.has(t)}wasReleased(t){return this.released.has(t)}mouseDown(t){return this.mouse[t]}mouseWasPressed(t){return this.mousePressed[t]}rumble(t=.45,e=.2,i=120){var r;const n=this.gamepad,a=n==null?void 0:n.vibrationActuator;if(!(a!=null&&a.playEffect))return;const o=performance.now();if(!(o-this._lastRumble<45)){this._lastRumble=o;try{const l=a.playEffect("dual-rumble",{startDelay:0,duration:i,strongMagnitude:Math.max(0,Math.min(1,t)),weakMagnitude:Math.max(0,Math.min(1,e))});(r=l==null?void 0:l.catch)==null||r.call(l,()=>{})}catch{}}}get navX(){let t=this.gpNavX||0;return this.isDown("GP15")&&(t=1),this.isDown("GP14")&&(t=-1),t}get navY(){let t=this.gpNavY||0;return this.isDown("GP12")&&(t=-1),this.isDown("GP13")&&(t=1),t}get navConfirm(){return this.wasPressed("GP0")}get navCancel(){return this.wasPressed("GP1")}get navMenu(){return this.wasPressed("GP9")}get attackLight(){return this.mouseWasPressed(0)||this.wasPressed("KeyJ")||this.wasPressed("GP5")}get attackHeavy(){return this.mouseWasPressed(2)||this.wasPressed("KeyK")||this.wasPressed("GP7")||this.wasPressed("GP6")}get blockHeld(){return this.mouseDown(2)||this.isDown("KeyQ")||this.isDown("GP4")}get blockPressed(){return this.mouseWasPressed(2)||this.wasPressed("KeyQ")||this.wasPressed("GP4")}get dodge(){return this.wasPressed("Space")||this.wasPressed("KeyL")||this.wasPressed("GP1")}get jump(){return this.wasPressed("KeyF")||this.wasPressed("GP10")}get sprintHeld(){return this.isDown("ShiftLeft")||this.isDown("ShiftRight")||this.isDown("GP1")||this.isDown("GP10")}get lockPressed(){return this.wasPressed("Tab")||this.wasPressed("GP3")||this.mouseWasPressed(1)}get interact(){return this.wasPressed("KeyE")||this.wasPressed("GP0")}get heal(){return this.wasPressed("KeyR")||this.wasPressed("GP2")}get spell(){return this.wasPressed("KeyV")||this.wasPressed("GP12")}get critical(){return this.wasPressed("KeyC")||this.wasPressed("GP11")}get inventory(){return this.wasPressed("KeyI")||this.wasPressed("GP8")}get map(){return this.wasPressed("KeyM")||this.wasPressed("GP13")}get pause(){return this.wasPressed("Escape")||this.wasPressed("GP9")}get weaponNext(){return this.wasPressed("KeyX")||this.wasPressed("GP15")||this.wheel>0}get weaponPrev(){return this.wasPressed("KeyZ")||this.wasPressed("GP14")||this.wheel<0}get confirm(){return this.wasPressed("Enter")||this.wasPressed("KeyE")||this.wasPressed("GP0")}get skip(){return this.wasPressed("Escape")||this.wasPressed("Enter")||this.wasPressed("GP0")||this.wasPressed("GP1")||this.wasPressed("GP9")}consumePressed(t){this.pressed.delete(t)}}const Il=[0,2,3,5,7,8,10],Ie=(s,t=146.83)=>t*Math.pow(2,s/12);class jm{constructor(){this.ctx=null,this.ready=!1,this.theme="none",this.muted=!1,this.timers=[],this.musicStep=0,this.beat=0,this.volume=.7,this.intensity=0}init(){if(this.ready)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=18,i.ratio.value=5,i.attack.value=.004,i.release.value=.22,i.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(i),this.musicBus=e.createGain(),this.musicBus.gain.value=.55,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=.5,this.ambBus.connect(this.master),this.delay=e.createDelay(1.2),this.delay.delayTime.value=.42,this.delayFb=e.createGain(),this.delayFb.gain.value=.28,this.delay.connect(this.delayFb),this.delayFb.connect(this.delay),this.delayWet=e.createGain(),this.delayWet.gain.value=.26,this.delay.connect(this.delayWet),this.delayWet.connect(this.master);const n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);const a=this.noiseBuf.getChannelData(0);for(let o=0;o<n;o++)a[o]=Math.random()*2-1;this.ready=!0,this.startAmbient(),e.state==="suspended"&&e.resume()}resume(){var t;((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&this.master.gain.linearRampToValueAtTime(t?0:this.volume,this.ctx.currentTime+.2)}noiseSource(t=!1){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=t,e}startAmbient(){if(!this.ready)return;const t=this.ctx,e=this.noiseSource(!0),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=.6;const n=t.createGain();n.gain.value=.055;const a=t.createOscillator();a.frequency.value=.07;const o=t.createGain();o.gain.value=180,a.connect(o),o.connect(i.frequency),e.connect(i),i.connect(n),n.connect(this.ambBus),e.start(),a.start();const r=t.createOscillator();r.type="sine",r.frequency.value=48;const l=t.createGain();l.gain.value=.028,r.connect(l),l.connect(this.ambBus),r.start();const h=t.createOscillator();h.type="triangle",h.frequency.value=72.5;const c=t.createGain();c.gain.value=.012,h.connect(c),c.connect(this.ambBus),h.start(),this.timers.push(setInterval(()=>{this.theme==="boss"||Math.random()<.35||(this.chirp(),this.chirpDelay=setTimeout(()=>this.chirp(),it(120,380)))},it(4200,9e3))),this.timers.push(setInterval(()=>{Math.random()<.3&&this.creak()},11e3))}chirp(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=t.createOscillator();i.type="sine";const n=t.createGain(),a=it(1700,3100);i.frequency.setValueAtTime(a,e),i.frequency.exponentialRampToValueAtTime(a*it(1.2,1.6),e+.06),i.frequency.exponentialRampToValueAtTime(a*.8,e+.14),n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.035,e+.02),n.gain.exponentialRampToValueAtTime(1e-4,e+.2),i.connect(n),n.connect(this.ambBus),i.start(e),i.stop(e+.23)}creak(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=this.noiseSource(),n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=it(180,420),n.Q.value=4;const a=t.createGain();a.gain.value=.02,i.connect(n),n.connect(a),a.connect(this.ambBus),i.start(e),i.stop(e+.6)}tone({freq:t=220,type:e="sine",dur:i=.3,gain:n=.1,at:a=0,slide:o=null,bus:r=null,attack:l=.01,release:h=null,detune:c=0,filter:d=null}){if(!this.ready)return;const u=this.ctx,m=u.currentTime+a,g=u.createOscillator();g.type=e,g.frequency.setValueAtTime(t,m),g.detune.value=c,o&&g.frequency.exponentialRampToValueAtTime(Math.max(20,o),m+i);const v=u.createGain(),p=r||this.sfxBus;let f=g;if(d){const w=u.createBiquadFilter();w.type=d.type||"lowpass",w.frequency.value=d.freq||800,w.Q.value=d.q||1,f.connect(w),f=w}return f.connect(v),v.connect(p),v.gain.setValueAtTime(1e-4,m),v.gain.linearRampToValueAtTime(n,m+l),v.gain.exponentialRampToValueAtTime(1e-4,m+i),g.start(m),g.stop(m+i+.05),{o:g,g:v}}noiseBurst({dur:t=.2,gain:e=.2,freq:i=1200,q:n=.8,at:a=0,type:o="bandpass",bus:r=null,slide:l=null}){if(!this.ready)return;const h=this.ctx,c=h.currentTime+a,d=this.noiseSource(),u=h.createBiquadFilter();u.type=o,u.frequency.setValueAtTime(i,c),u.Q.value=n,l&&u.frequency.exponentialRampToValueAtTime(l,c+t);const m=h.createGain();m.gain.setValueAtTime(e,c),m.gain.exponentialRampToValueAtTime(1e-4,c+t),d.connect(u),u.connect(m),m.connect(r||this.sfxBus),d.start(c),d.stop(c+t+.05)}setTheme(t){if(this.theme===t||(this.theme=t,this.musicStep=0,this.beat=0,!this.ready)||(this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime),this.musicBus.gain.linearRampToValueAtTime(t==="none"?0:.5,this.ctx.currentTime+1.2),clearInterval(this.musicTimer),t==="none"))return;const e=t==="boss"?210:t==="title"?620:520;this.musicTimer=setInterval(()=>this.musicTick(),e),this.musicTick()}musicTick(){if(!this.ready||this.theme==="none")return;const t=this.theme,e=this.musicStep++;t==="title"?this.titleMusic(e):t==="explore"?this.exploreMusic(e):t==="boss"?this.bossMusic(e):t==="victory"&&this.victoryMusic(e)}pad(t,e,i=.04,n="sine",a=0,o=0){this.tone({freq:t,type:n,dur:e,gain:i,at:a,attack:e*.3,bus:this.musicBus,detune:o,filter:{type:"lowpass",freq:900}}),this.tone({freq:t*1.004,type:"triangle",dur:e,gain:i*.4,at:a,attack:e*.35,bus:this.musicBus})}titleMusic(t){const e=[0,-4,-7,-2],i=Ie(e[Math.floor(t/4)%4],73.42);if(t%4===0&&(this.pad(i,3.8,.05,"sine"),this.pad(Ie(e[Math.floor(t/4)%4]+7,73.42),3.8,.03,"sine"),this.pad(Ie(e[Math.floor(t/4)%4]+12,73.42),3.8,.018,"triangle")),t%8===3||t%8===6){const n=Ie(ca([12,15,19,24])+e[Math.floor(t/4)%4],73.42);this.tone({freq:n,type:"sine",dur:2.4,gain:.022,bus:this.musicBus,at:0,attack:.4,filter:{type:"lowpass",freq:1200}})}}exploreMusic(t){const i=[0,-2,-4,-5][Math.floor(t/8)%4];if(t%8===0){const n=Ie(i,98);this.pad(n/2,4.6,.038,"sine"),this.pad(n*1.1892,4.4,.02,"triangle"),this.pad(n*1.4983,4.2,.014,"sine")}if(t%4===2){const n=Il[Math.floor(Math.random()*Il.length)]+12+i;this.tone({freq:Ie(n,98),type:"sine",dur:2.2,gain:.026,bus:this.musicBus,attack:.18,filter:{type:"lowpass",freq:1600}})}t%16===6&&this.tone({freq:Ie(i+3,98),type:"triangle",dur:3.4,gain:.013,bus:this.musicBus,attack:.5})}bossMusic(t){const e=t%16,n=[0,0,3,0,5,3,0,-2][e%8]-12;e%2===0&&this.tone({freq:Ie(n,73.42),type:"sawtooth",dur:.22,gain:.05,bus:this.musicBus,filter:{type:"lowpass",freq:420,q:3},attack:.005}),(e===0||e===6||e===10)&&(this.noiseBurst({dur:.3,gain:.16,freq:90,q:.7,type:"lowpass",bus:this.musicBus}),this.tone({freq:56,type:"sine",dur:.4,gain:.2,bus:this.musicBus,slide:32})),(e===4||e===12)&&this.noiseBurst({dur:.16,gain:.1,freq:1800,q:1,bus:this.musicBus}),e%2===1&&this.noiseBurst({dur:.06,gain:.035,freq:6e3,q:1.4,bus:this.musicBus}),(e===0||e===8)&&(this.tone({freq:Ie(-5,146.83),type:"sawtooth",dur:2.1,gain:.025,bus:this.musicBus,attack:.3,filter:{type:"lowpass",freq:760}}),this.tone({freq:Ie(-1,146.83),type:"sawtooth",dur:2.1,gain:.018,bus:this.musicBus,attack:.35,filter:{type:"lowpass",freq:700}}),this.tone({freq:Ie(2,146.83),type:"sawtooth",dur:2.1,gain:.014,bus:this.musicBus,attack:.4,filter:{type:"lowpass",freq:680}})),e===14&&Math.random()<.4&&this.tone({freq:Ie(12,146.83),type:"sine",dur:.8,gain:.02,bus:this.musicBus,at:.06})}victoryMusic(t){const e=[0,4,7,12];t%8===0&&(this.pad(Ie(0,110),4.5,.04,"sine"),this.pad(Ie(4,110),4.2,.024,"sine"),this.pad(Ie(7,110),4.2,.018,"triangle")),t%16===4&&this.tone({freq:Ie(ca(e)+12,110),type:"sine",dur:2.6,gain:.028,bus:this.musicBus,attack:.2})}swing(t=!1){this.noiseBurst({dur:t?.26:.16,gain:t?.16:.1,freq:t?420:900,slide:t?180:400,q:1.2})}hit(t=!1){t?(this.noiseBurst({dur:.18,gain:.18,freq:3200,q:4}),this.tone({freq:780,type:"square",dur:.18,gain:.05,slide:220})):(this.noiseBurst({dur:.16,gain:.17,freq:500,q:.9,type:"lowpass"}),this.tone({freq:120,type:"sine",dur:.2,gain:.18,slide:48}))}block(){this.noiseBurst({dur:.12,gain:.16,freq:2600,q:3}),this.tone({freq:440,type:"triangle",dur:.14,gain:.06,slide:300})}parry(){this.tone({freq:1320,type:"sine",dur:.5,gain:.1,slide:980}),this.tone({freq:1760,type:"sine",dur:.35,gain:.06}),this.noiseBurst({dur:.1,gain:.14,freq:4200,q:3})}dodge(){this.noiseBurst({dur:.22,gain:.08,freq:700,slide:250,q:1})}step(){this.noiseBurst({dur:.06,gain:.02,freq:240,type:"lowpass"})}jump(){this.tone({freq:180,type:"sine",dur:.18,gain:.04,slide:240})}heal(){for(let t=0;t<4;t++)this.tone({freq:520+t*120,type:"sine",dur:.9,gain:.03,at:t*.08,slide:700+t*150})}death(){this.tone({freq:90,type:"sawtooth",dur:1.8,gain:.1,slide:26,filter:{type:"lowpass",freq:300}}),this.noiseBurst({dur:1.6,gain:.08,freq:200,type:"lowpass"})}pickup(){this.tone({freq:880,type:"sine",dur:.3,gain:.05}),this.tone({freq:1320,type:"sine",dur:.4,gain:.04,at:.08})}interact(){this.tone({freq:420,type:"triangle",dur:.14,gain:.035})}levelup(){[0,4,7,12].forEach((t,e)=>this.tone({freq:Ie(t,262),type:"sine",dur:1.2,gain:.045,at:e*.13}))}ui(){this.tone({freq:620,type:"sine",dur:.08,gain:.025})}roar(){this.tone({freq:65,type:"sawtooth",dur:1.6,gain:.16,slide:44,filter:{type:"lowpass",freq:500,q:3}}),this.noiseBurst({dur:1.5,gain:.12,freq:300,type:"lowpass"})}arrow(){this.noiseBurst({dur:.18,gain:.07,freq:1800,slide:500,q:2})}spell(){for(let t=0;t<3;t++)this.tone({freq:300+t*220,type:"sine",dur:.6,gain:.035,at:t*.04,slide:900+t*200})}souls(){this.tone({freq:760,type:"sine",dur:.5,gain:.04,slide:1200}),this.tone({freq:1140,type:"sine",dur:.55,gain:.025,at:.06,slide:1600})}bossDeath(){this.roar(),this.tone({freq:55,type:"sine",dur:3.2,gain:.2,slide:24}),this.noiseBurst({dur:2.6,gain:.14,freq:400,type:"lowpass"})}gate(){this.tone({freq:120,type:"sawtooth",dur:1.4,gain:.06,slide:50,filter:{type:"lowpass",freq:400}}),this.noiseBurst({dur:1.2,gain:.06,freq:800})}}const Zm=new jm,mr="hollow_crown_save_v1",Jm="hollow_crown_settings_v1";function ea(){return{version:1,createdAt:Date.now(),playtime:0,player:{level:7,vigor:10,endurance:10,strength:10,dexterity:10,faith:8,motes:0,pos:{x:7,z:92},yaw:Math.PI,hpRatio:1,flaskUses:3,maxFlask:3,weapons:["pipe"],armor:["hoodie"],equippedWeapon:"pipe",equippedArmor:"hoodie",items:{emberBomb:1},spellUnlocked:!1,maxHpBonus:0},openedChests:[],collectedMotes:[],xp:0,flags:{introSeen:!1,bossDefeated:!1,eliteDefeated:!1,gateOpened:!1,merchantMet:!1,wispMet:!1,firstShrine:!1,foundSword:!1,foundGreatsword:!1,seerEchoSeen:!1,blessingUsed:!1},lore:[],quests:{mainStage:0,merchantQuest:0,wispQuest:0},lastShrine:"tree",deaths:0,ending:null,seenEndings:[],discovered:["shire"]}}function Dl(){try{return!!localStorage.getItem(mr)}catch{return!1}}function tr(){var s;try{const t=localStorage.getItem(mr);if(!t)return null;const e=JSON.parse(t);if(!e||e.version!==1)return null;const i=ea();return{...i,...e,player:{...i.player,...e.player,items:{...i.player.items,...((s=e.player)==null?void 0:s.items)||{}}},flags:{...i.flags,...e.flags},quests:{...i.quests,...e.quests}}}catch{return null}}function Qm(s){try{return localStorage.setItem(mr,JSON.stringify(s)),!0}catch{return!1}}function tg(){try{return JSON.parse(localStorage.getItem(Jm))||{muted:!1,sensitivity:1,quality:"high"}}catch{return{muted:!1,sensitivity:1,quality:"high"}}}function Ul(){const s=tr();return s?{level:s.player.level,motes:s.player.motes,deaths:s.deaths,playtime:s.playtime,boss:s.flags.bossDefeated,ending:s.ending}:null}const qt={box:new xt(1,1,1),cyl:new ct(.5,.5,1,8),cyl6:new ct(.5,.5,1,6),cone:new de(.5,1,8),sphere:new Xt(.5,10,8),ico:new Jn(.5,1),dodec:new gs(.5,0),tetra:new va(.5),plane:new yi(1,1)};function gr(s,t,e,i=0,n=0,a=0,o=1,r=1,l=1){return new Jt().compose(new P(s,t,e),new wi().setFromEuler(new je(i,n,a)),new P(o,r,l))}function bh(s,t,e,i){s.push({geometry:t,color:e,matrix:i})}function Ut(s,t,e,i,n,a,o,r,l=0,h=null,c=0,d=0){let u=gr(a,o,r,c,l,d,e,i,n);h&&u.premultiply(h),bh(s,qt.box,t,u)}function Zt(s,t,e,i,n,a,o=0,r=0,l=0,h=1,c=1,d=1,u=null){let m=gr(i,n,a,o,r,l,h,c,d);u&&m.premultiply(u),bh(s,t,e,m)}function We(s,t,e,i="merged"){if(!s.length)return null;const n=da(s),a=new L(n,t);return a.name=i,e.add(a),a}function eg(s){const t={top:{value:new K(2505813)},mid:{value:new K(9214624)},horizon:{value:new K(15255694)},bottom:{value:new K(6120784)},sunDir:{value:new P(-.35,.23,-.9).normalize()},sunColor:{value:new K(16768416)},time:{value:0}},e=new Ui({side:Oe,depthWrite:!1,uniforms:t,vertexShader:"varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vWorld;
      uniform vec3 top, mid, horizon, bottom, sunColor; uniform vec3 sunDir; uniform float time;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
        vec3 dir = normalize(vWorld);
        float h = dir.y;
        vec3 col;
        if (h > 0.0) {
          float t = pow(clamp(h*1.25,0.0,1.0), 0.65);
          col = mix(horizon, mid, smoothstep(0.0,0.28,h));
          col = mix(col, top, smoothstep(0.18,0.85,h));
        } else {
          col = mix(horizon, bottom, smoothstep(0.0,0.35,-h));
        }
        float sd = max(dot(dir, sunDir), 0.0);
        col += sunColor * (pow(sd, 220.0)*1.8 + pow(sd, 16.0)*0.22 + pow(sd, 4.0)*0.05);
        // faint high cloud bands
        float band = sin(dir.x*5.0 + dir.z*3.0 + time*0.003) * sin(dir.z*7.0 - dir.x*2.0);
        col += vec3(0.08,0.07,0.06) * smoothstep(0.55,1.0,band) * smoothstep(0.05,0.5,h) * 0.3;
        // pale moon
        vec3 moonDir = normalize(vec3(0.55, 0.62, 0.55));
        float md = max(dot(dir, moonDir), 0.0);
        col += vec3(0.75,0.82,0.9) * pow(md, 800.0) * 1.5;
        col += vec3(0.28,0.33,0.4) * pow(md, 40.0) * 0.18;
        // stars
        float st = step(0.9975, hash(floor(dir.xz*640.0)));
        col += vec3(0.8,0.85,0.95) * st * smoothstep(0.2,0.7,h) * 0.7;
        gl_FragColor = vec4(col, 1.0);
      }`}),i=new L(new Xt(380,32,20),e);i.frustumCulled=!1,s.add(i);const n=be(16768416,90);n.position.set(-130,85,-260),n.material.opacity=.9,s.add(n);const a=[],o=Mi(77);for(let c=0;c<26;c++){const d=c/26*Math.PI*2+o()*.2,u=150+o()*60,m=24+o()*44,g=30+o()*40;Zt(a,qt.cone,new K(2963776),Math.cos(d)*u,m*.32-6,Math.sin(d)*u,0,o()*6,0,g,m,g)}Zt(a,qt.cyl,new K(2436396),120,35,-120,0,0,0,5,90,5),Zt(a,qt.ico,new K(2437933),120,82,-120,0,0,0,40,26,40);const r=da(a),l=new ee({vertexColors:!0,fog:!0}),h=new L(r,l);return h.renderOrder=-1,s.add(h),{update(c){t.time.value=c}}}function ig(s){const t=new yh(12044246,3814180,1.05);s.add(t);const e=new Zo(16766880,1.6);e.position.set(-55,60,-80),s.add(e);const i=new Zo(5667476,.65);i.position.set(50,30,60),s.add(i);const n=new km(4278871,.35);return s.add(n),{sun:e,hemi:t,rim:i}}function ng(s){const t=Mi(1201),e=[],i=[],n=[];for(let R=0;R<360;R++){const I=(t()*2-1)*118,x=(t()*2-1)*118,b=xn(I,x).d,k=Math.hypot(I-re.x,x-re.z),B=Math.hypot(I-7,x-88),W=I>-32&&I<40&&x>28&&x<76;if(b<7.5||k<re.r+6||B<12||W&&t()>.2)continue;const j=bt(I,x),V=t()*Math.PI*2,Z=.75+t()*.8,z=I<-15?t()<.45?"pine":"oak":t()<.26?"pine":"oak",lt={x:I,y:j,z:x,rot:V,s:Z};z==="oak"?e.push(lt):t()<.78?i.push(lt):n.push(lt)}const a=[[-55,55,2.2],[42,20,1.9],[-70,-20,2],[62,62,1.7],[48,-55,1.8],[-38,72,1.6]];for(const[R,I,x]of a)e.push({x:R,y:bt(R,I),z:I,rot:it(0,6),s:x});const o=new ct(.32,.55,5.6,7);o.translate(0,2.8,0);const r=Pt(16777215,{map:Gm(),roughness:1}),l=new us(o,r,e.length+i.length),h=new Jn(1,1),c=Pt(16777215,{roughness:1,flatShading:!0}),d=new us(h,c,(e.length+i.length)*2),u=new de(1,2.8,7),m=new us(u,c,i.length*3);let g=0,v=0,p=0;const f=new K,w=new Jt,_=new wi,y=new P,A=new P,T=(R,I)=>{for(const x of R)if(_.setFromEuler(new je(0,x.rot,0)),y.set(x.x,x.y,x.z),A.set(x.s,x.s,x.s),w.compose(y,_,A),l.setMatrixAt(g,w),f.setHSL(.08+t()*.03,.33+t()*.15,.24+t()*.09),l.setColorAt(g,f),g++,I==="oak")for(let k=0;k<2;k++){const B=k===0?0:(t()-.5)*1.8,W=k===0?0:(t()-.5)*1.8,j=5.4*x.s+(k===0?.8:.2);y.set(x.x+B*x.s,x.y+j,x.z+W*x.s),A.set((2.3-k*.4)*x.s,(1.75-k*.2)*x.s,(2.3-k*.4)*x.s),w.compose(y,_,A),d.setMatrixAt(v,w),f.setHSL(.23+t()*.05,.26+t()*.12,.16+t()*.09),d.setColorAt(v,f),v++}else for(let b=0;b<3;b++){y.set(x.x,x.y+(5.2+b*1.55)*x.s,x.z);const k=(1.9-b*.42)*x.s;A.set(k,(1.45-b*.18)*x.s,k),w.compose(y,_,A),m.setMatrixAt(p,w),f.setHSL(.31+t()*.04,.22,.105+t()*.05),m.setColorAt(p,f),p++}};T(e,"oak"),T(i,"pine"),l.count=g,d.count=v,m.count=p,l.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0,s.add(l,d,m);const S=[];for(const R of n){Zt(S,qt.cyl,new K(3814187),R.x,R.y+2.4*R.s,R.z,0,0,0,.5*R.s,4.8*R.s,.5*R.s);for(let I=0;I<4;I++)Zt(S,qt.cyl,new K(3616810),R.x,R.y+(3.4+I*.5)*R.s,R.z,it(-.9,.9),it(0,6),it(-.6,.6),.16*R.s,2.2*R.s,.16*R.s)}return We(S,new Ae({vertexColors:!0,roughness:1}),s,"deadTrees"),{count:e.length+i.length}}function sg(s){const t=Mi(512),e=[],i=[],n=[],a=[];for(let d=0;d<42;d++){let u=(t()*2-1)*110,m=(t()*2-1)*110;if(d<26&&(u=-78+t()*68,m=-28+t()*88),Math.hypot(u-re.x,m-re.z)<34||xn(u,m).d<4)continue;const g=bt(u,m),v=d<10?2.2+t()*3.4:.45+t()*1.5,p=v*2.6;Zt(n,qt.cyl,new K(14208699),u,g+p*.5,m,0,0,0,v*.34,p,v*.34),Zt(n,qt.cyl,new K(12629666),u,g+p*.9,m,0,0,0,v*.48,v*.4,v*.48);const f=t()<.42,w=qt.sphere,_=g+p*.96,y=f?Wi(.5)?7329476:11829472:Wi(.5)?13064782:14207392;Zt(f?i:e,w,new K(y),u,_,m,0,t()*6,0,v*2.1,v*.72,v*2.1),Zt(e,qt.cyl,new K(15260868),u,_-v*.18,m,0,0,0,v*1.35,v*.12,v*1.35);for(let A=0;A<4;A++)a.push({x:u+(t()-.5)*v*1.4,y:_+v*.28,z:m+(t()-.5)*v*1.4,s:v*(.08+t()*.08)})}We(n,new Ae({vertexColors:!0,roughness:.95}),s,"mushroomStems"),We(e,new Ae({vertexColors:!0,roughness:.85}),s,"mushroomCaps"),We(i,new Ae({vertexColors:!0,emissive:5013380,emissiveIntensity:.55,roughness:.7}),s,"glowCaps");const o=a.map(d=>{const u=new Jt().compose(new P(d.x,d.y,d.z),new wi,new P(d.s,d.s,d.s));return{geometry:qt.sphere,color:9437155,matrix:u}});We(o,new ee({vertexColors:!0}),s,"mushroomSpots");const r=[];for(let d=0;d<220;d++){const u=-72+t()*58,m=-24+t()*84;r.push(u,bt(u,m)+t()*7+.5,m)}const l=new Ee;l.setAttribute("position",new fe(r,3));const h=new ms({color:9699304,size:.1,transparent:!0,opacity:.8,blending:Fe,depthWrite:!1}),c=new xa(l,h);return s.add(c),{points:c}}function ag(s){const t=Mi(888),e=new de(.09,.42,5),i=new Ae({roughness:.9}),n=new us(e,i,620),a=new de(.14,1.1,3),o=new Ae({roughness:1,flatShading:!0}),r=new us(a,o,1100);let l=0,h=0;const c=new Jt,d=new wi,u=new P,m=new P,g=new K;for(let v=0;v<1400;v++){const p=(t()*2-1)*112,f=(t()*2-1)*112;if(Math.hypot(p-7,f-88)<7||Wm(p,f,2)&&t()<.9)continue;const w=bt(p,f);if(!(xn(p,f).d<4.2)){if(d.setFromEuler(new je(0,t()*6,0)),t()<.32&&l<620){const y=.6+t()*1.2;u.set(p,w+.25*y,f),m.set(y,y,y),c.compose(u,d,m),n.setMatrixAt(l,c),g.setHSL(ca([.95,.08,.13,.48,.68,.78]),.55,.55+t()*.14),n.setColorAt(l,g),l++}else if(h<1100){const y=.5+t()*1.1;u.set(p,w+.4*y,f),m.set(y,y,y),c.compose(u,d,m),r.setMatrixAt(h,c),g.setHSL(.24+t()*.06,.28+t()*.15,.16+t()*.1),r.setColorAt(h,g),h++}}}return n.count=l,r.count=h,n.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,s.add(n,r),{flowers:n,grass:r}}function og(s,t){const e=Mi(404),i=[];for(let n=0;n<90;n++){const a=(e()*2-1)*112,o=(e()*2-1)*112;if(xn(a,o).d<5||Math.hypot(a-re.x,o-re.z)<34)continue;const r=bt(a,o),l=.4+e()*2.4;Zt(i,qt.dodec,new K().setHSL(.1,.08,.28+e()*.12),a,r+l*.25,o,e()*3,e()*3,e()*3,l,l*.75,l),l>1.6&&t.push({x:a,z:o,r:l*.75,type:"rock"})}We(i,new Ae({vertexColors:!0,roughness:.95}),s,"rocks")}function rg(s,t,e,i,n,a=1){const o=bt(e,i),r=gr(e,o,i,0,n,0,a,a,a),l=new K(12101256),h=new K(4928547),c=new K(7170144),d=new K(4797498);Ut(s,c,8.4,.7,6.8,0,.35,0,0,r),Ut(s,l,7.4,3.4,5.8,0,2.25,0,0,r);for(const u of[-3.55,3.55])for(const m of[-2.8,2.8])Ut(s,h,.22,3.5,.22,u,2.25,m,0,r);for(const u of[-2.82,2.82]){Ut(s,h,7.4,.18,.16,0,3.85,u,0,r),Ut(s,h,7.4,.16,.16,0,.75,u,0,r),Ut(s,h,.16,3.4,.16,0,2.25,u,0,r);for(const m of[-1.8,1.8])Ut(s,h,.16,3.4,.16,m,2.25,u,0,r)}for(const u of[-3.57,3.57])Ut(s,h,.16,.18,5.8,u,3.85,0,0,r),Ut(s,h,.16,.16,5.8,u,.75,0,0,r);Ut(s,h,3.4,.17,.12,-1.9,1.55,2.85,0,r,0,.55),Ut(s,h,3.4,.17,.12,1.9,1.55,2.85,0,r,0,-.55),Ut(s,d,4.65,.22,6.8,-2.05,4.85,0,0,r,0,.58),Ut(s,d,4.65,.22,6.8,2.05,4.85,0,0,r,0,-.58),Ut(s,d,.25,.8,6.9,0,5.6,0,0,r),Zt(s,qt.tetra,l,0,4.35,0,0,Math.PI/4,0,4.2,2.6,4.2,r),Ut(s,c,.9,2.4,.9,2.2,5,-1.4,0,r),Ut(s,new K(3815477),.5,.5,.5,2.2,6.3,-1.4,0,r),Ut(s,new K(3154198),1.25,2.3,.14,0,1.55,2.93,0,r),Ut(s,new K(7232058),.18,.18,.1,.4,1.45,3.02,0,r);for(const u of[-2.1,2.1])Ut(t,new K(16761962),1,1.1,.08,u,2.55,2.94,0,r),Ut(s,h,1.25,.13,.14,u,2.55,2.99,0,r),Ut(s,h,.13,1.3,.14,u,2.55,2.99,0,r);for(const u of[-3.72,3.72])Ut(t,new K(16759135),.08,.95,1,u,2.5,0,0,r);return a>.9&&(Ut(s,l,2.8,2.2,3.4,4.6,1.3,.7,0,r),Ut(s,d,3.3,.18,3.9,4.6,2.55,.7,0,r,0,-.22),Ut(t,new K(16763770),.06,.65,.7,6.02,1.35,.7,0,r)),{x:e,z:i,r:4.5*a}}function lg(s,t,e){const i=[],n=[],a=[[21,58,.2,1],[-15,63,-.4,.95],[28,43,.5,.9],[-23,43,-.2,1.05],[14,30,.1,.85],[-18,31,.4,.9],[36,55,-.5,.8],[9,72,-.1,.72]];for(const[m,g,v,p]of a){const f=rg(i,n,m,g,v,p);t.push({x:m,z:g,r:f.r,type:"house"})}We(i,new Ae({vertexColors:!0,roughness:.85,flatShading:!1}),s,"cottages"),We(n,new ee({vertexColors:!0}),s,"cottageWindows");const o=[],r=2,l=50,h=bt(r,l);Zt(o,qt.cyl,new K(7038558),r,h+.55,l,0,0,0,3,1.1,3),Zt(o,qt.cyl,new K(1779763),r,h+1.06,l,0,0,0,2.2,.12,2.2);for(const[m,g]of[[-1.15,0],[1.15,0]])Ut(o,new K(4929062),.22,3.2,.22,r+m,h+2.3,l,0,null);Ut(o,new K(4929062),2.5,.22,.22,r,h+3.8,l,0,null),Zt(o,qt.cyl,new K(7035717),r,h+3.2,l,0,0,Math.PI/2,.2,2.2,.2),t.push({x:r,z:l,r:1.8,type:"well"});for(const[m,g,v]of[[-7,56,.2],[16,52,-.4]]){const p=bt(m,g);Ut(o,new K(5914664),4.2,.16,2.2,m,p+2.2,g,v);for(const[f,w]of[[-1.8,-.8],[1.8,-.8],[-1.8,.8],[1.8,.8]])Ut(o,new K(4862752),.15,2.2,.15,m+f,p+1.1,g+w,v);Ut(o,new K(6958898),4.4,.1,2.5,m,p+2.35,g,v),Ut(o,new K(9058874),4,.5,.06,m,p+1.9,g+1.2,v)}const c=Mi(90);for(let m=0;m<18;m++){const g=4+(c()*2-1)*24,v=42+(c()*2-1)*20;if(xn(g,v).d<3.5)continue;const p=bt(g,v);c()<.5?Zt(o,qt.cyl,new K(6046503),g,p+.55,v,0,0,0,.85,1.1,.85):Ut(o,new K(7032110),.9,.9,.9,g,p+.45,v,c()*3)}for(const[m,g,v]of[[25,47,.4],[-12,36,-.9]]){const p=bt(m,g);Ut(o,new K(5323042),3.6,.3,1.7,m,p+1,g,v),Ut(o,new K(3942938),.15,.9,1.7,m-1.8,p+1.25,g,v);for(const[f,w]of[[-1.2,-.95],[1.2,-.95],[-1.2,.95],[1.2,.95]])Zt(o,qt.cyl,new K(2960168),m+f,p+.45,g+w,Math.PI/2,0,0,.85,.16,.85);t.push({x:m,z:g,r:2.2,type:"cart"})}for(let m=0;m<12;m++){const g=m/12*(ke.length-2),v=Math.floor(g),p=g-v,f=ke[v][0],w=ke[v][1],_=ke[v+1][0],y=ke[v+1][1],A=f+(_-f)*p+(m%2?5.2:-5.2),T=w+(y-w)*p;if(A>20||A<-20||T<25||T>75)continue;const S=bt(A,T),R=Math.atan2(_-f,y-w);Ut(o,new K(5849127),.14,1.15,.14,A,S+.58,T,R),Ut(o,new K(5849127),2.4,.1,.1,A+Math.sin(R)*1.2,S+.75,T+Math.cos(R)*1.2,R),Ut(o,new K(5849127),2.4,.1,.1,A+Math.sin(R)*1.2,S+.45,T+Math.cos(R)*1.2,R)}for(const[m,g,v]of[[18,54,8269620],[-14,61,3034468],[24,46,6969894]]){const p=bt(m,g);Zt(o,qt.cyl,new K(4863266),m,p+2.6,g,0,0,0,.13,5.2,.13),Ut(o,new K(v),.08,2.2,1.1,m+.45,p+4.1,g)}for(let m=0;m<9;m++){const g=-31+c()*11,v=22+c()*16,p=bt(g,v);Ut(o,new K(7170658),.65,1.3+c()*.6,.18,g,p+.7,v,c()*.4),c()<.5&&Ut(o,new K(5854799),1.1,.16,.22,g,p+.35,v,0)}We(o,new Ae({vertexColors:!0,roughness:.9}),s,"villageProps");const d=pr("smoke",64,64,(m,g,v)=>{const p=m.createRadialGradient(32,32,0,32,32,32);p.addColorStop(0,"rgba(170,170,165,.4)"),p.addColorStop(1,"rgba(120,120,115,0)"),m.fillStyle=p,m.fillRect(0,0,g,v)}),u=[];for(const[m,g,v,p]of a){const f=new ur(new ga({map:d,transparent:!0,opacity:.25,depthWrite:!1})),w=bt(m,g);f.position.set(m+2.2*p,w+7*p,g-1.4*p),f.scale.setScalar(2.4*p),s.add(f),u.push(f)}return{smoke:u}}function hg(s,t){const n=bt(-3,74),a=[];Zt(a,qt.cyl,new K(4864554),-3,n+4,74,0,0,0,4.8,12,4.8),Zt(a,qt.cyl,new K(3812640),-3,n+8.2,74,0,0,0,3.2,5,3.2);for(let l=0;l<9;l++){const h=l/9*Math.PI*2;Zt(a,qt.cyl,new K(4469797),-3+Math.cos(h)*2.6,n+.6,74+Math.sin(h)*2.6,Math.PI/2+.25,-h,0,.9,4.4,.9)}const o=new L(new Ni(1.55,16),new ee({color:525829}));o.position.set(-3,n+3.1,74+2.42),s.add(o);for(let l=0;l<7;l++){const h=l/7*Math.PI*2+.3;Zt(a,qt.cyl,new K(4272677),-3+Math.cos(h)*2,n+10.5,74+Math.sin(h)*2,.6,-h,.3,.55,7,.55),Zt(a,qt.ico,new K(3360047),-3+Math.cos(h)*5.6,n+14.6,74+Math.sin(h)*5.6,0,0,0,4.4,2.6,4.4)}We(a,new Ae({vertexColors:!0,roughness:1}),s,"hollowTree"),t.push({x:-3,z:74,r:4.6,type:"tree"});const r=[];for(let l=0;l<7;l++){const h=l/7*Math.PI*2,c=-3+Math.cos(h)*7,d=74+Math.sin(h)*7;Zt(r,qt.sphere,new K(9437155),c,bt(c,d)+.25,d,0,0,0,.18,.18,.18)}We(r,new ee({vertexColors:!0}),s,"treeGlow")}function ro(s,t,e,i,n,a){const o=bt(i,n),r=new At,l=Pt(9274998,{roughness:.95}),h=Pt(4867388,{roughness:1}),c=Pt(10255423,{metalness:.6,roughness:.4}),d=new L(new ct(2.5,2.9,.5,10),l);d.position.y=.25,r.add(d);const u=new L(new ct(1.7,2.2,.5,10),h);u.position.y=.7,r.add(u);const m=new L(new ct(.85,.6,.55,10),c);m.position.y=1.2,r.add(m);const g=be(16758878,3.2);g.position.y=2,r.add(g);const v=new L(new de(.25,.9,6),Be(16766603,2.5));v.position.y=1.85,r.add(v);const p=new At,f=new L(new xt(.12,2.4,.04),Pt(11186354,{metalness:.8,roughness:.35}));f.position.y=1.2,p.add(f);const w=new L(new xt(1,.1,.14),c);w.position.y=2.3,p.add(w);const _=new L(new ct(.07,.07,.55,6),h);_.position.y=2.62,p.add(_);const y=new L(new Xt(.12,8,6),c);y.position.y=2.92,p.add(y),p.position.set(2,0,0),p.rotation.z=.18,r.add(p);for(let T=0;T<6;T++){const S=T/6*Math.PI*2,R=new L(new ct(.06,.08,.3+Math.random()*.3,5),Pt(14076329));R.position.set(Math.cos(S)*2.3,.55,Math.sin(S)*2.3),r.add(R);const I=new L(new Xt(.05,5),Be(16757854,2));I.position.set(Math.cos(S)*2.3,.85,Math.sin(S)*2.3),r.add(I)}const A=new ii(16756830,2.2,18,2);return A.position.y=2.4,r.add(A),r.position.set(i,o,n),s.add(r),{id:t,name:e,x:i,z:n,y:o,radius:3.4,group:r,flame:g,light:A,base:d,phase:it(0,6)}}function cg(s,t){const e=[],i=[],n=re.x,a=re.z,o=re.r;for(let y=0;y<16;y++){const A=y/16*Math.PI*2+.07,T=o-1.4,S=n+Math.cos(A)*T,R=a+Math.sin(A)*T,I=bt(S,R);y%3===0?(Zt(e,qt.cyl,new K(7038556),S,I+1.9,R,0,A,.08,1.6,4.4,1.6),Ut(e,new K(5854283),2.2,.5,2.2,S,I+4.15,R,A),t.push({x:S,z:R,r:1.3,type:"pillar"})):Zt(e,qt.dodec,new K(5591370),S,I+.5,R,it(0,3),it(0,3),0,1.8,1.4,1.8)}for(let y=0;y<20;y++){const A=it(0,Math.PI*2),T=it(8,o-3),S=n+Math.cos(A)*T,R=a+Math.sin(A)*T,I=bt(S,R);Zt(e,qt.cyl,new K(2760736),S,I+.18,R,Math.PI/2,A,.2,.35,it(3,8),.35),y%4===0&&Zt(i,qt.sphere,new K(10247423),S,I+.3,R,0,0,0,.22,.22,.22)}const r=0,l=-128,h=bt(r,l);Zt(e,qt.cyl,new K(3155228),r,h+9,l,0,0,0,7,26,7),t.push({x:r,z:l,r:5.5,type:"tree"});for(let y=0;y<11;y++){const A=it(0,Math.PI*2);Zt(e,qt.cyl,new K(2826522),r+Math.cos(A)*2.2,h+16+it(0,6),l+Math.sin(A)*2.2,it(.4,1.2),-A,it(-.3,.3),.6,it(5,12),.6)}const c=0,d=-70,u=bt(c,d);for(const y of[-2.6,2.6])Ut(e,new K(6183504),1.3,6.2,1.4,c+y,u+3.1,d,0),t.push({x:c+y,z:d,r:1,type:"arch"});Ut(e,new K(4933439),7.2,1.1,1.7,c,u+6.6,d,0),Zt(e,qt.cone,new K(5262403),c,u+7.7,d,0,0,0,7.8,2.2,1.8),We(e,new Ae({vertexColors:!0,roughness:.92}),s,"arenaProps"),We(i,new ee({vertexColors:!0}),s,"arenaGlow");const m=pr("gate",128,128,(y,A,T)=>{const S=y.createLinearGradient(0,0,0,T);S.addColorStop(0,"rgba(210,190,230,0)"),S.addColorStop(.5,"rgba(180,150,220,.55)"),S.addColorStop(1,"rgba(120,90,160,.25)"),y.fillStyle=S,y.fillRect(0,0,A,T);for(let R=0;R<60;R++)y.fillStyle=`rgba(220,210,255,${Math.random()*.25})`,y.fillRect(Math.random()*A,Math.random()*T,1,3+Math.random()*9)}),g=new L(new yi(4.8,6),new ee({map:m,transparent:!0,side:ve,depthWrite:!1,blending:Fe}));g.position.set(c,u+3.1,d),s.add(g);const v=new ii(10247423,1.4,12,2);v.position.set(c,u+3,d),s.add(v);const p=new L(new Ii(6.8,7.3,48),new ee({color:6109810,transparent:!0,opacity:.5,side:ve}));p.rotation.x=-Math.PI/2,p.position.set(n,bt(n,a)+.06,a),s.add(p);const f=new L(new Ii(11.2,11.4,48),new ee({color:7160959,transparent:!0,opacity:.25,side:ve}));f.rotation.x=-Math.PI/2,f.position.set(n,bt(n,a)+.05,a),s.add(f);const w=[];for(const[y,A]of[[-14,-84],[14,-84],[-19,-112],[19,-112]]){const T=bt(y,A),S=new L(new ct(.12,.18,3.2,6),Pt(4078131));S.position.set(y,T+1.6,A),s.add(S);const R=new L(new ct(.6,.35,.4,8),Pt(5326650));R.position.set(y,T+3.2,A),s.add(R);const I=be(16747338,4.2);I.position.set(y,T+3.9,A),s.add(I),w.push(I);const x=new ii(16742973,1,12,2);x.position.set(y,T+3.8,A),s.add(x)}const _=new ii(9063641,1.5,55,1.5);return _.position.set(n,14,a+6),s.add(_),{gate:g,gateLight:v,ring:p,ring2:f,flames:w,gatePos:{x:c,y:u,z:d}}}function dg(s){const t=[],e=[],i=Mi(300),n=[];for(let o=3;o<ke.length-2;o+=2){const[r,l]=ke[o],h=o%4===1?1:-1,c=r+h*4.2,d=l+(i()-.5)*2,u=bt(c,d);Zt(t,qt.cyl,new K(4600868),c,u+1.4,d,0,0,0,.14,2.8,.14),Ut(t,new K(3025186),.55,.7,.55,c,u+3,d),Zt(e,qt.sphere,new K(16757598),c,u+3,d,0,0,0,.3,.3,.3),n.push({x:c,y:u+3,z:d})}for(let o=0;o<70;o++){const r=i()*(ke.length-2),l=Math.floor(r),h=r-l,c=ke[l][0],d=ke[l][1],u=ke[l+1][0],m=ke[l+1][1],g=i()<.5?-1:1,v=c+(u-c)*h+g*(3.2+i()*1.4),p=d+(m-d)*h+(i()-.5)*2,f=bt(v,p);Zt(t,qt.dodec,new K().setHSL(.1,.06,.3+i()*.12),v,f+.1,p,i(),i(),i(),.3+i()*.35,.2,.3+i()*.3)}const a=[[8,78,8020537],[0,58,7231283],[-12,10,7165491]];for(const[o,r,l]of a){const h=bt(o,r);Ut(t,new K(4863266),.16,2.6,.16,o,h+1.3,r),Ut(t,new K(l),1.8,.6,.1,o+.7,h+2.2,r)}return We(t,new Ae({vertexColors:!0,roughness:.95}),s,"pathDressing"),We(e,new ee({vertexColors:!0}),s,"pathLanternGlow"),{lanterns:n}}function ug(s,t,e,i){const n=bt(t,e),a=new At,o=new L(new ct(.35,.45,.18,6),Pt(5920074));o.position.y=.09,a.add(o);const r=new L(new xt(.55,.04,.72),Pt(14274483));r.position.y=.24,r.rotation.y=it(0,3),a.add(r);const l=be(16767370,1.8);return l.position.y=.55,a.add(l),a.position.set(t,n,e),s.add(a),{id:i,x:t,y:n,z:e,radius:2,group:a,glow:l,kind:"lore"}}function Ys(s,t,e,i,n=1){const a=bt(e,i),o=new At,r=Pt(5913378,{roughness:.85}),l=Pt(4801853,{metalness:.6,roughness:.5}),h=new L(new xt(1.5,.8,.9),r);h.position.y=.4,o.add(h);const c=new L(new xt(1.55,.3,.95),r);c.position.set(0,.9,-.05),c.rotation.x=-.08,o.add(c);for(const m of[-.55,.55]){const g=new L(new xt(.12,.85,.98),l);g.position.set(m,.42,0),o.add(g)}const d=new L(new xt(.22,.28,.1),l);d.position.set(0,.62,.47),o.add(d);const u=be(16765034,1.1);return u.position.y=1.1,o.add(u),o.position.set(e,a,i),o.scale.setScalar(n),s.add(o),{id:t,x:e,y:a,z:i,radius:2.2,group:o,glow:u,kind:"chest",opened:!1,lid:c}}function mi(s,t,e,i=80){const n=bt(t,e),a=new At,o=be(16764782,2);o.position.y=.7,a.add(o);const r=new L(new gn(.16,0),Be(16768138,2.4));return r.position.y=.7,a.add(r),a.position.set(t,n,e),s.add(a),{x:t,y:n,z:e,radius:2,group:a,amount:i,kind:"mote",taken:!1,core:r}}function fg(s,t,e){const i=bt(t,e),n=new At,a=new L(new Ve(2.4,.07,6,24),Be(12175572,.6));a.position.set(0,2.6,0),n.add(a);const o=new L(new Ni(2.35,32),new ee({color:12562908,transparent:!0,opacity:.28,side:ve,blending:Fe}));o.position.y=2.6,n.add(o);const r=be(13088511,12);return r.position.y=2.6,n.add(r),n.position.set(t,i,e),s.add(n),{x:t,y:i,z:e,radius:4,group:n,ring:a,disc:o,glow:r,kind:"gate"}}function pg(s){const t=Mi(19),e=340,i=[],n=new Float32Array(e*3),a=new Float32Array(e);for(let h=0;h<e;h++){const c=(t()*2-1)*100,d=(t()*2-1)*100;i.push([c,bt(c,d),d]),n[h*3]=c,n[h*3+1]=bt(c,d)+1+t()*9,n[h*3+2]=d,a[h]=t()*6.28}const o=new Ee;o.setAttribute("position",new Se(n,3));const r=new ms({color:16767370,size:.11,transparent:!0,opacity:.85,blending:Fe,depthWrite:!1}),l=new xa(o,r);return s.add(l),{pts:l,phase:a,base:i,update(h){const c=l.geometry.attributes.position;for(let d=0;d<e;d++){const[u,m,g]=i[d];c.setX(d,u+Math.sin(h*.3+a[d])*2.2),c.setY(d,m+1.4+Math.sin(h*.55+a[d]*1.7)*1.2+d%5*1.2),c.setZ(d,g+Math.cos(h*.27+a[d])*2.2)}c.needsUpdate=!0}}}function mg(s){const t=Mi(44),e=180,i=new Float32Array(e*3),n=new Float32Array(e);for(let l=0;l<e;l++)i[l*3]=(t()*2-1)*80,i[l*3+1]=2+t()*14,i[l*3+2]=(t()*2-1)*80,n[l]=t()*100;const a=new Ee;a.setAttribute("position",new Se(i,3));const o=new ms({color:15976409,size:.13,transparent:!0,opacity:.55,depthWrite:!1}),r=new xa(a,o);return s.add(r),{pts:r,phase:n,update(l){const h=r.geometry.attributes.position;for(let c=0;c<e;c++){const d=i[c*3]+Math.sin(l*.18+n[c])*3,u=i[c*3+2]+l*.22%160-80;h.setX(c,d),h.setZ(c,u),h.setY(c,2+(i[c*3+1]+l*.35+n[c])%16)}h.needsUpdate=!0}}}function gg(s){const t=[],e=[];Vm(s);const i=eg(s);ig(s),ng(s);const n=sg(s);ag(s),og(s,t);const a=lg(s,t);hg(s,t);const o=[ro(s,"tree","Hollow Tree Shrine",3.5,81),ro(s,"village","Hollowmere Shrine",-12,46),ro(s,"grove","First Grove Shrine",9,-61)];for(const S of o)t.push({x:S.x,z:S.z,r:2.9,type:"shrine"});const r=cg(s,t);dg(s);const l=pg(s),h=mg(s),c=o.map(S=>({...S,kind:"shrine"}));e.push(...c);const d=[["lore1",18,61],["lore2",-28,27],["lore3",-48,3],["lore4",7,-65],["lore5",13,87],["lore6",50,-45]];for(const[S,R,I]of d){const x=ug(s,R,I,S);e.push(x)}const u=[Ys(s,"chest_sword",30,44.5),Ys(s,"chest_armor",-31,30),Ys(s,"chest_greatsword",-59,20),Ys(s,"chest_staff",45,-47)];e.push(...u);const m=[mi(s,14,66,90),mi(s,-20,32,110),mi(s,24,20,120),mi(s,-24,-26,140),mi(s,16,-46,130),mi(s,-42,-18,160),mi(s,36,8,100),mi(s,-54,40,150)];e.push(...m);const g=mi(s,-34,24,0);g.kind="locket",g.taken=!1,g.group.visible=!1;const v=g.group.children[0];v&&v.material.color.set(10217727),e.push(g);const p=mi(s,0,-99,0);p.kind="echo",p.taken=!1,p.group.visible=!1,p.group.children.forEach(S=>{var R;(R=S.material)!=null&&R.color&&S.material.color.set(11897855)}),e.push(p);const f=fg(s,0,-72.5);f.group.visible=!1;const A={colliders:t,interactables:e,shrines:c,chests:u,motes:m,locket:g,echo:p,gate:f,npcSpots:[{id:"marrow",name:"Marrow, the Ragpicker",x:16,z:49,yaw:-.6},{id:"wisp",name:"The Wisp",x:-25,z:14,yaw:.8}],spawns:[{type:"villager",x:9,z:64,patrol:7},{type:"villager",x:15,z:53,patrol:6},{type:"villager",x:-7,z:43,patrol:7},{type:"villager",x:26,z:50,patrol:5},{type:"villager",x:6,z:34,patrol:7},{type:"villager",x:22,z:65,patrol:6},{type:"goblin",x:-18,z:31,patrol:9},{type:"goblin",x:-31,z:37,patrol:8},{type:"goblin",x:-25,z:16,patrol:10},{type:"goblin",x:-8,z:22,patrol:8},{type:"hound",x:12,z:20,patrol:9},{type:"hound",x:-15,z:-3,patrol:10},{type:"hound",x:18,z:35,patrol:8},{type:"knight",x:2,z:-38,patrol:5},{type:"knight",x:-5,z:-20,patrol:4},{type:"knight",x:29,z:53,patrol:5},{type:"archer",x:13,z:70,patrol:4},{type:"archer",x:-27,z:-15,patrol:5},{type:"briarWarden",x:-48,z:5,patrol:7,elite:!0}],bossSpawn:{x:0,z:-109},arena:r,colliderVersion:1};new K;function T(S,R){i.update(S),l.update(S),h.update(S);for(const I of o)I.flame.position.y=2+Math.sin(S*2.2+I.phase)*.1,I.flame.scale.setScalar(3.2+Math.sin(S*4+I.phase)*.25),I.light.intensity=2+Math.sin(S*3.1+I.phase)*.35,I.group.children.forEach(x=>{var b,k;(b=x.material)!=null&&b.emissiveIntensity&&((k=x.geometry)==null?void 0:k.type)==="SphereGeometry"&&(x.material.emissiveIntensity=1.4+Math.sin(S*4+I.phase)*.7)});for(const I of u)I.opened||(I.glow.material.opacity=.75+Math.sin(S*2+I.x)*.2);for(const I of d);for(const I of e)I.kind==="lore"&&!I.taken&&(I.glow.scale.setScalar(1.8+Math.sin(S*2+I.x)*.15),I.group.rotation.y=Math.sin(S*.5+I.z)*.08),I.kind==="mote"&&!I.taken&&(I.core.rotation.y+=R*1.6,I.core.position.y=.7+Math.sin(S*2+I.x)*.1,I.group.children[0].position.y=I.core.position.y),I.kind==="echo"&&(I.group.rotation.y+=R*.5,I.group.children.forEach(x=>{x.material&&(x.material.opacity=.7+Math.sin(S*2)*.2)})),I.kind==="locket"&&(I.group.rotation.y+=R*1.2);a.smoke.forEach((I,x)=>{I.position.y+=R*.12,I.material.opacity=.22+Math.sin(S*.7+x)*.06,I.position.y>bt(I.position.x,I.position.z)+11&&(I.position.y=bt(I.position.x,I.position.z)+6.5)}),f.disc.material.opacity=.22+Math.sin(S*1.4)*.08,f.ring.rotation.z+=R*.25,r.gate.material.opacity=.5+Math.sin(S*.9)*.12,r.ring.rotation.z+=R*.03,r.ring2.rotation.z-=R*.02,r.flames.forEach((I,x)=>{I.scale.setScalar(4.2+Math.sin(S*5+x)*.35)}),n.points.material.opacity=.55+Math.sin(S*1.4)*.2}return A.update=T,A}new P;new P;class xg{constructor(t,e){this.game=t,this.scene=e,this.stats=t.state.player,this.pos=new P(this.stats.pos.x,bt(this.stats.pos.x,this.stats.pos.z),this.stats.pos.z),this.yaw=this.stats.yaw??Math.PI,this.vel=new P,this.vy=0,this.grounded=!0,this.maxHp=100,this.hp=100,this.maxStamina=100,this.stamina=100,this.maxFocus=50,this.focus=50,this.poise=40,this.poiseBuildup=0,this.state="idle",this.stateTime=0,this.busy=!1,this.attack=null,this.combo=0,this.comboTimer=0,this.rollDir=new P,this.invuln=0,this.parryWindow=0,this.blocking=!1,this.staminaDelay=0,this.healUsed=!1,this.hasHitThisSwing=new Set,this.sprinting=!1,this.locked=null,this.dead=!1,this.deathTime=0,this.footTimer=0,this.animTime=0,this.hitFlash=0,this.staggerTime=0,this.castTime=0,this.weapon=_i[this.stats.equippedWeapon]||_i.pipe,this.armor=Li[this.stats.equippedArmor]||Li.hoodie,this.speedMult=1,this.guardBreak=0,this.perfectDodges=0,this.attackMoveSpeed=0,this.lockTarget=null,this.recalcStats(!0),this.buildModel(),this.setWeapon(this.weapon.id),this.setArmorVisual(),this.scene.add(this.root)}recalcStats(t=!1){const e=this.stats;this.maxHp=Math.round(94+e.vigor*8.5+e.level*2.2+e.maxHpBonus),this.maxStamina=Math.round(78+e.endurance*5.6),this.maxFocus=Math.round(36+e.faith*5.2);const i=this.hp?this.hp/this.maxHp:e.hpRatio??1,n=this.stamina?this.stamina/this.maxStamina:1;t?(this.hp=this.maxHp,this.stamina=this.maxStamina,this.focus=this.maxFocus):(this.hp=De(this.maxHp*i,1,this.maxHp),this.stamina=De(this.maxStamina*n,0,this.maxStamina),this.focus=Math.min(this.focus,this.maxFocus)),this.armor=Li[e.equippedArmor]||Li.hoodie,this.poise=24+this.armor.poise,this.speedMult=1-(this.armor.weight||0)*.025,this.syncStats()}syncStats(){this.stats.hpRatio=this.hp/this.maxHp,this.stats.flaskUses=this.flaskUses??this.stats.flaskUses}get flaskUses(){return this.stats.flaskUses}set flaskUses(t){this.stats.flaskUses=De(t,0,this.stats.maxFlask)}get attackPower(){const t=this.weapon,e=this.stats,i=1+(t.scaling.str||0)*e.strength*.026+(t.scaling.dex||0)*e.dexterity*.026+(t.scaling.faith||0)*e.faith*.03;return t.damage*i*(1+e.level*.006)}get heavyPower(){const t=this.weapon,e=this.stats,i=1+(t.scaling.str||0)*e.strength*.026+(t.scaling.dex||0)*e.dexterity*.026+(t.scaling.faith||0)*e.faith*.03;return t.heavy*i*(1+e.level*.006)}get critPower(){return this.attackPower*(this.weapon.crit||1.5)*2.1}get defense(){return this.armor.defense||0}buildModel(){const t=Pt(12291178,{roughness:.8}),e=Pt(2899280,{roughness:.95}),i=Pt(2306369,{roughness:.95}),n=Pt(2764602,{roughness:.95}),a=Pt(13617336,{roughness:.75}),o=Pt(9252657,{roughness:.7}),r=Pt(2366230,{roughness:1}),l=Pt(7830913,{metalness:.75,roughness:.38}),h=Pt(4929318,{roughness:.9});this.mats=[t,e,i,n,a,o,r,l,h];const c=new At,d=new At;c.add(d),this.root=c,this.pivot=d;const u=new At;u.position.y=1.03,d.add(u),this.torso=u;const m=new L(new xt(.58,.66,.36),e);m.position.y=.25,u.add(m);const g=new L(new xt(.5,.22,.33),i);g.position.y=-.13,u.add(g);const v=new L(new xt(.34,.17,.03),i);v.position.set(0,.1,.19),u.add(v);const p=new L(new Ve(.2,.09,6,12),i);p.rotation.x=Math.PI/2,p.position.y=.58,u.add(p);const f=new L(new ct(.085,.1,.16,6),t);f.position.y=.63,u.add(f);const w=new At;w.position.y=.82,u.add(w),this.head=w;const _=new L(new Xt(.205,12,10),t);_.scale.set(1,1.08,.95),w.add(_);const y=new L(new Xt(.213,10,8),r);y.scale.set(1,.7,1),y.position.y=.07,w.add(y);const A=new L(new xt(.33,.1,.12),r);A.position.set(0,.16,.12),A.rotation.x=-.18,w.add(A);for(const Z of[-.075,.075]){const z=new L(new Xt(.022,6,5),Pt(1381653));z.position.set(Z,.02,.18),w.add(z)}const T=new L(new Ve(.13,.025,4,10,Math.PI),Pt(1776415));T.position.set(0,.6,0),T.rotation.z=Math.PI,u.add(T);const S=new L(new xt(.36,.46,.17),h);S.position.set(0,.22,-.23),u.add(S);const R=new L(new xt(.05,.62,.04),h);R.position.set(.22,.25,.1),R.rotation.z=.15,u.add(R);const I=R.clone();I.position.x=-.22,I.rotation.z=-.15,u.add(I);const x=Z=>{const z=new At;z.position.set(Z*.36,.48,0),u.add(z);const lt=new L(new ct(.092,.078,.42,7),e);lt.position.y=-.21,z.add(lt);const rt=new At;rt.position.y=-.42,z.add(rt);const pt=new L(new ct(.075,.065,.38,7),i);pt.position.y=-.19,rt.add(pt);const It=new L(new Xt(.082,8,6),t);return It.position.y=-.4,rt.add(It),{shoulder:z,elbow:rt,hand:It}};this.armL=x(-1),this.armR=x(1);const b=new L(new ct(.083,.075,.12,7),e);b.position.y=-.33,this.armL.elbow.add(b);const k=Z=>{const z=new At;z.position.set(Z*.155,.94,0),d.add(z);const lt=new L(new ct(.115,.095,.44,7),n);lt.position.y=-.22,z.add(lt);const rt=new At;rt.position.y=-.44,z.add(rt);const pt=new L(new ct(.09,.075,.42,7),n);pt.position.y=-.21,rt.add(pt);const It=new At;It.position.y=-.43,rt.add(It);const Wt=new L(new xt(.19,.13,.34),a);Wt.position.set(0,0,.07),It.add(Wt);const $=new L(new xt(.2,.05,.35),o);$.position.set(0,-.07,.07),It.add($);const Y=new L(new xt(.12,.03,.06),Pt(15657696));return Y.position.set(0,.045,.2),It.add(Y),{hip:z,knee:rt,foot:It}};this.legL=k(-1),this.legR=k(1);const B=new At;B.position.y=-.38,this.armR.elbow.add(B),this.weaponMount=B,this.weaponMeshes={};const W=new L(new xt(.11,.2,.02),Pt(1710621,{emissive:1253418,emissiveIntensity:.5}));W.position.set(-.16,.02,.2),u.add(W),this.phone=W,be(0,2);const j=new L(new Ni(.55,18),new ee({color:0,transparent:!0,opacity:.28,depthWrite:!1}));j.rotation.x=-Math.PI/2,j.position.y=.03,c.add(j),this.shadow=j,this.dust=[];const V=new ee({color:10193516,transparent:!0,opacity:0,depthWrite:!1});for(let Z=0;Z<3;Z++){const z=new L(new Ni(.28,8),V.clone());z.rotation.x=-Math.PI/2,z.position.y=.02,c.add(z),this.dust.push(z)}this.buildWeaponModels(),c.position.copy(this.pos),c.rotation.y=this.yaw}buildWeaponModels(){this.weaponMeshes={};const t=Pt(11054768,{metalness:.8,roughness:.3}),e=Pt(5593436,{metalness:.7,roughness:.4}),i=Pt(4928288,{roughness:.9}),n=Pt(10585160,{metalness:.7,roughness:.35}),a=(T,S)=>(S.visible=!1,S.position.set(0,0,0),this.weaponMount.add(S),this.weaponMeshes[T]=S,S);let o=new At,r=new L(new ct(.045,.05,1.25,7),e);r.position.y=.46,o.add(r);let l=new L(new ct(.07,.07,.09,7),Pt(7236190));l.position.y=-.16,o.add(l),a("pipe",o),o=new At,r=new L(new xt(.075,1,.025),Pt(9142899,{metalness:.6,roughness:.6})),r.position.y=.58,o.add(r);const h=new L(new de(.055,.14,4),r.material);h.position.y=1.14,o.add(h),o.add(new L(new xt(.28,.055,.06),n)),r=new L(new ct(.028,.028,.24,6),i),r.position.y=-.14,o.add(r);const c=new L(new Xt(.045,6),n);c.position.y=-.27,o.add(c),a("rustySword",o),o=new At,r=new L(new ct(.042,.05,1.55,7),i),r.position.y=.32,o.add(r);const d=new L(new xt(.55,.38,.09),e);d.position.set(.27,.92,0),d.rotation.z=-.1,o.add(d);const u=new L(new xt(.12,.44,.11),t);u.position.set(.51,.92,0),o.add(u);const m=new L(new Jn(.09,0),Pt(4877117));m.position.set(.1,.62,.06),o.add(m),a("woodsmanAxe",o),o=new At,r=new L(new xt(.13,1.5,.04),Pt(7435898,{metalness:.8,roughness:.3})),r.position.y=.82,o.add(r);const g=new L(new de(.09,.2,4),r.material);g.position.y=1.68,o.add(g),o.add(new L(new xt(.46,.075,.08),n)),r=new L(new ct(.035,.035,.34,6),i),r.position.y=-.2,o.add(r),a("greatsword",o),o=new At,r=new L(new ct(.028,.032,2.3,6),i),r.position.y=.55,o.add(r);const v=new L(new de(.06,.35,5),t);v.position.y=1.85,o.add(v);const p=new L(new ct(.045,.045,.22,6),Pt(4020783));p.position.y=1.55,o.add(p),a("spear",o),o=new At,r=new L(new xt(.055,.44,.02),Pt(12175830,{metalness:.8,roughness:.25})),r.position.y=.3,o.add(r);const f=new L(new de(.04,.12,4),r.material);f.position.y=.58,o.add(f),o.add(new L(new xt(.17,.04,.04),n)),r=new L(new ct(.025,.025,.16,5),i),r.position.y=-.08,o.add(r),a("dagger",o),o=new At;const w=new L(new Ve(.52,.022,4,14,Math.PI*1.15),i);w.rotation.z=-Math.PI*.075,w.position.y=.5,o.add(w);const _=new L(new ct(.004,.004,1,3),Pt(14208432));_.position.set(-.02,.5,0),o.add(_),a("bow",o),o=new At,r=new L(new ct(.035,.045,1.9,6),Pt(3287590)),r.position.y=.6,o.add(r);const y=new L(new gn(.16),Be(14256714,2));y.position.y=1.65,o.add(y);const A=new L(new Ve(.18,.02,4,10),n);A.position.y=1.65,A.rotation.x=.6,o.add(A),a("staff",o)}setWeapon(t){this.weapon=_i[t]||_i.pipe,this.stats.equippedWeapon=this.weapon.id;for(const e in this.weaponMeshes)this.weaponMeshes[e].visible=e===this.weapon.id;this.updateWeaponPose()}setArmorVisual(){if(!this.mats)return;const t=this.stats.equippedArmor,e={hoodie:2899280,leather:5192232,knight:6447978,veil:4012869,mantle:4147759}[t]??2899280;this.mats[1].color.setHex(e),this.mats[2].color.setHex(new K(e).multiplyScalar(.8))}updateWeaponPose(){if(!this.weaponMeshes)return;const t=this.weapon,e=this.weaponMeshes[t.id];e&&(t.id==="pipe"?(e.rotation.set(-.25,0,-.35),e.position.set(.02,-.36,.05)):t.id==="woodsmanAxe"?(e.rotation.set(-.2,0,-.28),e.position.set(.02,-.34,0)):t.id==="spear"?e.rotation.set(-.26,0,-.26):t.id==="bow"?e.rotation.set(0,0,.2):e.rotation.set(-.15,0,-.2))}update(t,e,i,n){if(this.animTime+=t,this.dead){this.updateDeath(t);return}this.stateTime+=t,this.comboTimer=Math.max(0,this.comboTimer-t),this.comboTimer===0&&(this.combo=0),this.hitFlash=Math.max(0,this.hitFlash-t),this.parryWindow=Math.max(0,this.parryWindow-t),this.invuln=Math.max(0,this.invuln-t),this.guardBreak=Math.max(0,this.guardBreak-t),this.staggerTime=Math.max(0,this.staggerTime-t),this.poiseBuildup=Math.max(0,this.poiseBuildup-t*8);const a=!this.game.uiBlocking&&!this.game.cinematic;if(this.blocking=!1,this.staggerTime>0){this.state="stagger",this.applyPhysics(t,0,0),this.animate(t),this.updateMaterialFlash();return}a&&(e.pause&&this.game.openPause(),e.lockPressed&&this.game.toggleLock(),e.weaponNext&&this.game.cycleWeapon(1),e.weaponPrev&&this.game.cycleWeapon(-1),e.inventory&&this.game.openInventory(),e.map&&this.game.openMap(),e.interact&&this.game.tryInteract(),e.heal&&this.tryHeal(),e.spell&&this.trySpell());const o=!this.busy&&this.state!=="roll"&&this.state!=="heal"&&this.state!=="cast"&&this.state!=="crit"&&this.state!=="hit";a&&o?(e.attackLight?this.beginAttack("light"):e.attackHeavy?this.beginAttack("heavy"):e.critical?this.game.tryCritical():e.dodge?this.beginRoll():e.jump&&this.grounded&&this.jump(),e.blockHeld&&(this.blocking=!0,e.blockPressed&&(this.parryWindow=.3))):a&&e.blockHeld&&!this.busy&&(this.blocking=!0);let r=e.moveX,l=e.moveY,h=4.35*this.speedMult;if(this.sprinting=!1,e.sprintHeld&&(r||l)&&this.stamina>4&&!this.blocking&&this.grounded&&(h=7.75*this.speedMult,this.sprinting=!0),(this.state==="idle"||this.state==="move"||this.state==="block")&&(this.state=Math.abs(r)+Math.abs(l)>.05?"move":"idle"),this.state==="attack"?(this.updateAttack(t),h*=.18):this.state==="roll"?(this.updateRoll(t),r=0,l=0):this.state==="heal"?(this.updateHeal(t),h*=.25):this.state==="cast"?(this.updateCast(t),h*=.2):this.state==="crit"&&(this.updateCrit(t),h*=.1),this.blocking&&(h*=.48),this.sprinting&&(r||l))this.stamina=Math.max(0,this.stamina-12*t),this.staminaDelay=.7;else if(this.state!=="roll"&&this.state!=="attack"&&(this.staminaDelay=Math.max(0,this.staminaDelay-t),this.staminaDelay<=0)){const g=(16+this.stats.endurance*.35)*(this.blocking?.55:1)*(this.armor.weight>2?.8:1);this.stamina=Math.min(this.maxStamina,this.stamina+g*t)}this.focus=Math.min(this.maxFocus,this.focus+.6*t);let c=0,d=0;if(r||l){const g=-Math.sin(i),v=-Math.cos(i),p=Math.cos(i),f=-Math.sin(i);c=g*l+p*r,d=v*l+f*r;const w=Math.hypot(c,d)||1;c/=w,d/=w}const u=this.game.lockTarget;if(u&&u.alive&&!u.isBoss){const g=u.pos.x-this.pos.x,v=u.pos.z-this.pos.z,p=Math.atan2(g,v);this.yaw=fi(this.yaw,p,8,t)}else if((r||l)&&this.state!=="attack"&&this.state!=="roll"&&this.state!=="crit")this.yaw=fi(this.yaw,Math.atan2(c,d),12,t);else if(this.game.lockTarget&&this.game.lockTarget.alive&&!this.game.lockTarget.isBoss){const g=this.game.lockTarget.pos.x-this.pos.x,v=this.game.lockTarget.pos.z-this.pos.z;this.yaw=fi(this.yaw,Math.atan2(g,v),8,t)}this.state==="roll"&&(c=this.rollDir.x,d=this.rollDir.z),this.applyPhysics(t,c*h,d*h),this.updateShadow(),this.animate(t);const m=Math.hypot(this.vel.x,this.vel.z);this.grounded&&m>1.2&&(this.footTimer-=t*(this.sprinting?1.8:1),this.footTimer<=0&&(this.footTimer=.38,this.game.audio.step(),this.puffDust())),this.syncStats(),this.updateMaterialFlash()}applyPhysics(t,e,i){if(this.state==="roll"){const r=11.5*(1-Math.min(1,this.stateTime/.52)*.75);this.vel.x=this.rollDir.x*r,this.vel.z=this.rollDir.z*r}else{const r=this.grounded?14:4;this.vel.x=X(this.vel.x,e,r,t),this.vel.z=X(this.vel.z,i,r,t)}this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const n=Math.hypot(this.pos.x,this.pos.z);n>oo&&(this.pos.x*=oo/n,this.pos.z*=oo/n);const a=.38;for(const r of this.game.world.colliders){const l=this.pos.x-r.x,h=this.pos.z-r.z,c=Math.hypot(l,h),d=a+r.r;if(c<d&&c>1e-4){const u=d-c;this.pos.x+=l/c*u,this.pos.z+=h/c*u}}if(this.game.boss&&this.game.boss.active&&!this.game.boss.dead){const r=this.pos.x-this.game.boss.center.x,l=this.pos.z-this.game.boss.center.z,h=Math.hypot(r,l),c=this.game.boss.arenaRadius-.5;h>c&&(this.pos.x=this.game.boss.center.x+r/h*c,this.pos.z=this.game.boss.center.z+l/h*c)}const o=bt(this.pos.x,this.pos.z);this.grounded?this.pos.y=o:(this.vy-=20*t,this.pos.y+=this.vy*t,this.pos.y<=o&&(this.pos.y=o,this.vy=0,this.grounded=!0,this.game.audio.step(),this.game.shake(.1))),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}updateShadow(){const t=bt(this.pos.x,this.pos.z);this.shadow.position.y=t-this.pos.y+.035;const e=De((this.pos.y-t)/3,0,1);this.shadow.material.opacity=.3*(1-e),this.shadow.scale.setScalar(1-e*.5)}puffDust(){for(const t of this.dust)if(t.material.opacity<.03){t.material.opacity=.28,t.position.set((Math.random()-.5)*.4,.05,(Math.random()-.5)*.4),t.scale.setScalar(.5+Math.random()*.5),t.userData.life=.35;break}}updateDust(t){for(const e of this.dust)e.material.opacity>.01&&(e.material.opacity-=t*1.2,e.scale.multiplyScalar(1+t*1.8),e.position.y+=t*.3)}beginAttack(t){if(this.busy||this.stamina<=0)return;if(this.weapon.ranged){if(t==="heavy"||this.stamina<this.weapon.stamina)return;this.stamina-=this.weapon.stamina,this.staminaDelay=.8,this.state="attack",this.stateTime=0,this.busy=!0,this.attack={kind:"ranged",duration:1.05,fired:!1,heavy:!1},this.game.audio.swing(!1);return}const e=t==="heavy",i=e?this.weapon.heavyStamina:this.weapon.stamina;if(this.stamina<i*.6){this.game.toast("Not enough stamina","blood");return}this.stamina=Math.max(0,this.stamina-i),this.staminaDelay=.9,this.combo=e?0:this.combo%3+1,this.comboTimer=1.4;const n=this.weapon.speed||1,a=(e?1.1:.72)/n;this.state="attack",this.stateTime=0,this.busy=!0,this.attack={kind:t,duration:a,hit:!1,heavy:e,dir:this.yaw,step:this.combo},this.hasHitThisSwing.clear(),this.game.audio.swing(e||this.weapon.weight==="Heavy");const o=e?2.4:1.4;this.vel.x+=Math.sin(this.yaw)*o,this.vel.z+=Math.cos(this.yaw)*o}updateAttack(t){const e=this.attack;if(!e){this.busy=!1,this.state="idle";return}const i=this.stateTime/e.duration;!e.hit&&i>(e.heavy?.5:.4)&&(e.hit=!0,e.kind==="ranged"?(this.weapon.spell?this.game.fireSpell():this.game.fireArrow(),e.fired=!0):this.game.playerMeleeHit(this,e.heavy,this.weapon)),i>=1&&(this.busy=!1,this.attack=null,this.state="idle")}updateRoll(t){this.stateTime>.55&&(this.state="idle",this.busy=!1,this.vel.multiplyScalar(.5))}beginRoll(){if(this.busy||this.stamina<18||!this.grounded)return;this.stamina-=22,this.staminaDelay=.8,this.state="roll",this.stateTime=0,this.busy=!0,this.invuln=.36;const t=this.game.lastInputX||0,e=this.game.lastInputY||0;let i=Math.sin(this.yaw),n=Math.cos(this.yaw);if(t||e){const a=this.game.cameraRig.yaw;i=-Math.sin(a)*e+Math.cos(a)*t,n=-Math.cos(a)*e-Math.sin(a)*t;const o=Math.hypot(i,n);i/=o,n/=o,this.yaw=Math.atan2(i,n)}this.rollDir.set(i,0,n),this.game.audio.dodge()}jump(){this.busy||this.stamina<8||(this.stamina-=8,this.staminaDelay=.6,this.vy=6.9,this.grounded=!1,this.state="jump",this.busy=!1,this.game.audio.jump(),setTimeout(()=>{this.state==="jump"&&(this.state="idle")},300))}tryHeal(){if(this.busy||this.stats.flaskUses<=0||this.hp>=this.maxHp){this.stats.flaskUses<=0&&this.game.toast("The Ashen Flask is empty","blood");return}this.stats.flaskUses--,this.state="heal",this.stateTime=0,this.busy=!0,this.healUsed=!1,this.game.audio.heal()}updateHeal(t){if(!this.healUsed&&this.stateTime>.55){this.healUsed=!0;const e=Math.round(this.maxHp*.46);this.hp=Math.min(this.maxHp,this.hp+e),this.game.spawnHealBurst(this.pos),this.game.floatText(this.pos,`+${e}`,"heal"),this.game.audio.souls()}this.stateTime>1.15&&(this.state="idle",this.busy=!1)}trySpell(){if(!this.stats.spellUnlocked){this.game.toast("You have not learned any incantations","blood");return}if(this.busy||this.focus<25){this.focus<25&&this.game.toast("Not enough focus","blood");return}this.focus-=25,this.state="cast",this.stateTime=0,this.busy=!0,this.castFired=!1,this.game.audio.spell()}updateCast(t){!this.castFired&&this.stateTime>.45&&(this.castFired=!0,this.game.fireSpell(!0)),this.stateTime>.95&&(this.state="idle",this.busy=!1)}startCritical(t){this.busy||!t||(this.state="crit",this.stateTime=0,this.busy=!0,this.critTarget=t,this.game.audio.swing(!0))}updateCrit(t){if(!this.critApplied&&this.stateTime>.45&&this.critTarget){this.critApplied=!0;const e=this.critTarget;if(e&&e.alive){const i=this.critPower;e.takeDamage(i,this.pos,{critical:!0,source:this}),this.game.spawnBloodBurst(e.pos,18),this.game.audio.hit(e.armorType==="metal"),this.game.shake(.35),this.game.hitstop(.09)}}this.stateTime>1.15&&(this.state="idle",this.busy=!1,this.critApplied=!1,this.critTarget=null)}takeDamage(t,e,i={}){if(this.dead)return!1;if(this.invuln>0)return this.state==="roll"&&this.stateTime>.04&&this.stateTime<.38&&!i.aoe&&(this.perfectDodges++,this.focus=Math.min(this.maxFocus,this.focus+12),this.game.onPerfectDodge()),!1;const n=e?this.pos.x-e.x:0,a=e?this.pos.z-e.z:0,r=Math.sin(this.yaw)*n+Math.cos(this.yaw)*a>=-.25;if(this.blocking&&r&&!i.unblockable){if(this.parryWindow>0&&!i.aoe)return this.parryWindow=0,this.game.onParry(i.source),this.game.audio.parry(),this.stamina=Math.min(this.maxStamina,this.stamina+15),!1;const h=t*(this.weapon.category==="Greatsword"?1.05:.9)/(1+this.stats.endurance*.015);if(this.stamina>=h*.5){this.stamina=Math.max(0,this.stamina-h),this.staminaDelay=1.1;const c=t*.12;return this.hp-=c,this.game.audio.block(),this.game.shake(.16),this.game.spawnSparkBurst(e||this.pos,6),this.game.floatText(this.pos,"BLOCKED","block"),this.stamina<=0&&(this.staggerTime=.6,this.game.toast("GUARD BROKEN","blood")),this.hp<=0&&this.die(),!1}else this.stamina=0,this.staggerTime=.8,this.game.toast("GUARD BROKEN","blood"),t*=.7}const l=t*(1-Math.min(.55,this.defense*.018));return this.hp-=l,this.poiseBuildup+=t*.7,this.hitFlash=.2,this.game.onPlayerHurt(l,e),this.game.audio.hit(!1),this.game.floatText(this.pos,Math.round(l),"damage"),this.poiseBuildup>this.poise?(this.staggerTime=.5,this.poiseBuildup=0):i.noStun||(this.staggerTime=.22,this.state="hit"),this.hp<=0&&(this.hp=0,this.die()),!0}die(){this.dead||(this.dead=!0,this.deathTime=0,this.state="dead",this.busy=!0,this.game.onPlayerDeath(),this.game.audio.death())}updateDeath(t){this.deathTime+=t;const e=Math.min(1,this.deathTime/1);this.pivot.rotation.z=xe(0,-1.35,e),this.pivot.position.y=xe(0,-.45,e),this.armR.shoulder.rotation.x=xe(this.armR.shoulder.rotation.x,-.4,e)}respawn(t,e){this.dead=!1,this.hp=this.maxHp,this.stamina=this.maxStamina,this.focus=this.maxFocus,this.stats.flaskUses=this.stats.maxFlask,this.poiseBuildup=0,this.staggerTime=0,this.invuln=1,this.pivot.rotation.set(0,0,0),this.pivot.position.y=0;const i=t||{x:3.5,z:81};this.pos.set(i.x,bt(i.x,i.z),i.z),this.vel.set(0,0,0),this.vy=0,this.grounded=!0,this.root.position.copy(this.pos),this.state="idle",this.busy=!1,this.attack=null,this.syncStats()}animate(t){const e=this.animTime,i=Math.hypot(this.vel.x,this.vel.z),n=i>.5&&this.grounded,a=De(i/7.5,0,1.2);let o=0,r=0,l=0;if(this.state==="roll"){const h=De(this.stateTime/.55,0,1);this.pivot.rotation.x=h*Math.PI*2,this.pivot.position.y=Math.sin(h*Math.PI)*.38,this.armL.shoulder.rotation.x=-1.4,this.armR.shoulder.rotation.x=-1.2,this.legL.hip.rotation.x=-1.5,this.legR.hip.rotation.x=-1.3,this.legL.knee.rotation.x=1.8,this.legR.knee.rotation.x=1.6,this.torso.rotation.x=.5;return}else this.pivot.rotation.x=X(this.pivot.rotation.x,0,14,t),this.pivot.position.y=X(this.pivot.position.y,0,14,t);if(this.state==="attack"&&this.attack){const h=this.attack,c=De(this.stateTime/h.duration,0,1),d=h.heavy?.42:.32;if(h.step===2)this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-1.9+c*1,22,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,.5-c*.4,22,t),this.torso.rotation.y=X(this.torso.rotation.y,.5-c*.9,18,t),this.torso.rotation.x=X(this.torso.rotation.x,-.1,12,t);else if(h.step===3)this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,c<.45?-2.7:c<.6?.6:.55,20,t),this.torso.rotation.x=X(this.torso.rotation.x,c<.45?-.25:.35,15,t),this.torso.rotation.y=X(this.torso.rotation.y,0,15,t);else if(h.heavy)this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,c<.5?-2.9:.75,17,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,-.15,12,t),this.torso.rotation.x=X(this.torso.rotation.x,c<.5?-.3:.4,14,t),this.torso.rotation.y=X(this.torso.rotation.y,c<.5?.5:-.4,14,t);else{const u=this.combo===2?.8:-.9,m=this.combo===2?-1:1,g=u+(m-u)*(c<d?Nl(c/d)*.35:Nl((c-d)/(1-d))*.65+.35);this.torso.rotation.y=X(this.torso.rotation.y,g*.9,28,t),this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-.55,18,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,this.combo===2?-.9:1.1,22,t),this.armR.elbow.rotation.x=X(this.armR.elbow.rotation.x,-.45,18,t)}this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,-.6,12,t),this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,.18,10,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-.18,10,t);return}if(this.state==="heal"){this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,-2.3,12,t),this.armL.elbow.rotation.x=X(this.armL.elbow.rotation.x,-.9,12,t),this.head.rotation.x=X(this.head.rotation.x,-.35,8,t),this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-.2,8,t),this.torso.rotation.x=X(this.torso.rotation.x,-.08,8,t);return}if(this.state==="cast"){this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-2.2,12,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,-.35,12,t),this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,-1.1,12,t),this.torso.rotation.x=X(this.torso.rotation.x,-.1,8,t);return}if(this.blocking)this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,-1.9,18,t),this.armL.shoulder.rotation.z=X(this.armL.shoulder.rotation.z,-.25,18,t),this.armL.elbow.rotation.x=X(this.armL.elbow.rotation.x,-1.1,18,t),this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-.85,16,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,.4,16,t),this.armR.elbow.rotation.x=X(this.armR.elbow.rotation.x,-.6,16,t),this.torso.rotation.y=X(this.torso.rotation.y,-.15,10,t);else if(n){const h=e*(this.sprinting?13:8.5);o=Math.sin(h)*(this.sprinting?.9:.58)*(.5+a*.5),r=Math.sin(h)*.45,l=Math.abs(Math.cos(h))*.05*(this.sprinting?2:1),this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,o,18,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-o,18,t),this.legL.knee.rotation.x=X(this.legL.knee.rotation.x,Math.max(0,-o)*1.2,18,t),this.legR.knee.rotation.x=X(this.legR.knee.rotation.x,Math.max(0,o)*1.2,18,t),this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,r,14,t),this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-r*.7-.12,14,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,-.25,12,t),this.torso.rotation.x=X(this.torso.rotation.x,this.sprinting?.18:.06,8,t),this.torso.rotation.y=X(this.torso.rotation.y,-r*.22,10,t)}else{const h=Math.sin(e*2.1)*.018;this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,.02,8,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-.02,8,t),this.legL.knee.rotation.x=X(this.legL.knee.rotation.x,.03,8,t),this.legR.knee.rotation.x=X(this.legR.knee.rotation.x,.03,8,t),this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,.06+h,8,t),this.armR.shoulder.rotation.x=X(this.armR.shoulder.rotation.x,-.16+h,8,t),this.armR.shoulder.rotation.z=X(this.armR.shoulder.rotation.z,-.18,8,t),this.armL.shoulder.rotation.z=X(this.armL.shoulder.rotation.z,.08,8,t),this.torso.rotation.x=X(this.torso.rotation.x,h,6,t),this.torso.rotation.y=X(this.torso.rotation.y,0,6,t),this.head.rotation.x=X(this.head.rotation.x,0,6,t)}this.state!=="heal"&&(this.head.rotation.x=X(this.head.rotation.x,0,6,t)),this.grounded||(this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,-.55,10,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-.2,10,t),this.legL.knee.rotation.x=X(this.legL.knee.rotation.x,.9,10,t),this.legR.knee.rotation.x=X(this.legR.knee.rotation.x,.5,10,t),this.armL.shoulder.rotation.x=X(this.armL.shoulder.rotation.x,-.6,10,t)),this.pivot.position.y=X(this.pivot.position.y,l,16,t),this.phone.material.emissiveIntensity=.35+Math.sin(e*1.3)*.2,this.updateDust(t)}updateMaterialFlash(){const t=this.hitFlash>0;for(const e of this.mats)e.emissive&&(t?(e.emissive.setHex(8000532),e.emissiveIntensity=.55):e.userData.baseEmissive?(e.emissive.setHex(e.userData.baseEmissive),e.emissiveIntensity=e.userData.baseIntensity):(e.emissive.setHex(0),e.emissiveIntensity=0))}}function Nl(s){return s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2}new P;class vg{constructor(t,e,i){this.game=t,this.def=Bm[e],this.defId=e,this.spawn=new P(i.x,bt(i.x,i.z),i.z),this.pos=this.spawn.clone(),this.yaw=it(0,Math.PI*2),this.alive=!0,this.scene=t.scene,this.patrolR=i.patrol||6,this.state="patrol",this.stateTime=0,this.attackCooldown=it(.4,1.6),this.alertLevel=0,this.attack=null,this.staggerTimer=0,this.returnTimer=0,this.patrolTarget=this.pickPatrol(),this.patrolWait=it(.5,2),this.speed=this.def.speed,this.walk=0,this.hitFlash=0,this.deathTimer=0,this.health=this.def.hp,this.maxHealth=this.def.hp,this.poise=this.def.poise,this.maxPoise=this.def.poise,this.canBeCrit=!1,this.vel=new P,this.aggro=!1,this.leash=30,this.radius=.55,this.attackToken=0,this.rangedCooldown=0,this.deadDrop=!1,this.buildModel(),this.root.position.copy(this.pos),this.scene.add(this.root),this.barEl=null,this.isBoss=!1,this.isElite=!!this.def.elite,this.isElite&&(this.radius=.85)}pickPatrol(){const t=it(0,Math.PI*2),e=it(2,this.patrolR||6);return new P(this.spawn.x+Math.cos(t)*e,0,this.spawn.z+Math.sin(t)*e)}buildModel(){this.root=new At,this.body=new At,this.root.add(this.body),this.mats=[],this.eyeMats=[],this.armL=this.armR=this.legL=this.legR=this.head=this.torso=null,this.weaponMount=null;const t=(i,n={})=>{const a=Pt(i,n);return this.mats.push(a),a.userData.baseEmissive=0,a},e=(i=16735034)=>{const n=Be(i,2.2);return this.eyeMats.push(n),n};if(this.def.quadruped)this.buildHound(t,e);else switch(this.defId){case"villager":this.buildHumanoid({skin:9149048,tunic:5720887,pants:3814443,eye:16735034,hat:!0,weapon:"pitchfork"},t,e);break;case"goblin":this.buildHumanoid({skin:7841898,tunic:4865108,pants:3025203,eye:6746320,bigHead:!0,bigEars:!0,weapon:"dagger",scale:.76},t,e);break;case"knight":this.buildHumanoid({skin:3947584,tunic:6053475,pants:4540236,eye:16742970,armored:!0,cape:!0,weapon:"sword",shield:!0,scale:1.12},t,e);break;case"archer":this.buildHumanoid({skin:8225896,tunic:3753263,pants:2962728,eye:14221178,hood:!0,weapon:"bow",scale:.98},t,e);break;case"briarWarden":this.buildHumanoid({skin:5918776,tunic:4147756,pants:3355935,eye:11075434,armored:!0,bark:!0,weapon:"club",scale:1.5},t,e);break;default:this.buildHumanoid({skin:9149048,tunic:5720887,pants:3814443,eye:16735034,weapon:"pitchfork"},t,e)}this.addTelegraph(),this.addAlertIcon()}buildHumanoid(t,e,i){const n=t.scale||1;this.body.scale.setScalar(n);const a=e(t.skin,{roughness:.9}),o=e(t.tunic,{roughness:.95}),r=e(t.pants,{roughness:.95}),l=e(9342868,{metalness:.75,roughness:.35}),h=e(2763047,{roughness:.9}),c=i(t.eye),d=new At;d.position.y=1,this.body.add(d),this.torso=d;const u=new L(new xt(.55,.7,.33),t.armored?l:o);if(u.position.y=.22,d.add(u),t.bark)for(let _=0;_<7;_++){const y=new L(new ct(.04,.07,.5,4),h);y.position.set(it(-.3,.3),it(-.1,.5),it(-.18,.18)),y.rotation.set(it(-.5,.5),it(0,3),it(-.5,.5)),d.add(y)}if(t.cape){const _=new L(new yi(.7,1,1,3),e(4989990,{side:ve,roughness:1}));_.position.set(0,-.02,-.22),_.rotation.x=.1,d.add(_)}if(t.hat){const _=new L(new ct(.42,.44,.04,8),e(6247732));_.position.y=.6,d.add(_);const y=new L(new ct(.2,.23,.26,8),_.material);y.position.y=.73,d.add(y)}if(t.armored){for(const y of[-.32,.32]){const A=new L(new Xt(.18,7,6),l);A.position.set(y,.42,0),A.scale.set(1,.7,.9),d.add(A)}const _=new L(new ct(.32,.33,.1,8),h);_.position.y=-.15,d.add(_)}const m=new L(new ct(.07,.09,.12,5),a);m.position.y=.62,d.add(m);const g=new At;if(g.position.y=t.bigHead?.82:.76,d.add(g),this.head=g,t.armored){const _=new L(new xt(.34,.38,.34),l);g.add(_);const y=new L(new xt(.28,.1,.03),h);y.position.set(0,-.02,.18),g.add(y);const A=new L(new de(.05,.32,5),e(7023403));A.position.y=.27,g.add(A);for(const S of[-.07,.07]){const R=new L(new Xt(.03,6,5),c);R.position.set(S,.02,.19),g.add(R)}const T=new L(new Ve(.19,.025,4,8,Math.PI),l);T.rotation.z=Math.PI,T.position.y=.16,g.add(T)}else{const _=new L(new Xt(t.bigHead?.29:.23,10,8),a);_.scale.set(1,.95,.92),g.add(_);const y=new L(new xt(.2,.08,.16),e(5985349));y.position.set(0,-.13,.08),g.add(y);for(const A of[-.08,.08]){const T=new L(new Xt(t.bigHead?.042:.028,6,5),c);T.position.set(A,.02,t.bigHead?.25:.2),g.add(T);const S=be(t.eye,.28);S.position.copy(T.position),g.add(S),this.eyeMats.push(S.material)}if(t.bigEars)for(const A of[-1,1]){const T=new L(new de(.12,.5,4),a);T.position.set(A*.25,.08,0),T.rotation.z=A*-1.1,g.add(T)}if(t.hood){const A=new L(new Xt(.32,8,7,0,Math.PI*2,0,Math.PI*.66),o);A.position.y=.02,g.add(A)}if(t.weapon==="pitchfork"){const A=new L(new ct(.28,.3,.03,7),e(4866344));A.position.y=.18,g.add(A)}}if(!t.armored&&!t.hood)for(let _=0;_<4;_++){const y=new L(new de(.035,.18,4),h);y.position.set(it(-.16,.16),.2,it(-.1,.1)),y.rotation.z=it(-.4,.4),g.add(y)}const v=_=>{const y=new At;y.position.set(_*.34,.45,0),d.add(y);const A=new L(new ct(.085,.072,.4,6),t.armored?l:a);A.position.y=-.2,y.add(A);const T=new At;T.position.y=-.4,y.add(T);const S=new L(new ct(.07,.06,.36,6),t.armored?l:a);S.position.y=-.18,T.add(S);const R=new L(new Xt(.075,7,5),a);return R.position.y=-.37,T.add(R),{sh:y,el:T}};if(this.armL=v(-1),this.armR=v(1),t.shield){const _=new L(new ct(.32,.32,.07,8),e(6117968,{metalness:.5,roughness:.5}));_.rotation.x=Math.PI/2,_.position.set(-.08,-.3,.05),this.armL.el.add(_);const y=new L(new xt(.16,.16,.03),e(7023403));y.position.set(-.08,-.3,.1),this.armL.el.add(y)}const p=_=>{const y=new At;y.position.set(_*.16,.95,0),this.body.add(y);const A=new L(new ct(.105,.085,.44,6),t.armored?l:r);A.position.y=-.22,y.add(A);const T=new At;T.position.y=-.44,y.add(T);const S=new L(new ct(.085,.07,.4,6),t.armored?l:r);S.position.y=-.2,T.add(S);const R=new L(new xt(.18,.12,.3),h);return R.position.set(0,-.42,.06),T.add(R),{hip:y,knee:T}};this.legL=p(-1),this.legR=p(1);const f=new At;f.position.y=-.36,this.armR.el.add(f),this.weaponMount=f;const w=e(4928290,{roughness:.9});if(t.weapon==="pitchfork"){const _=new L(new ct(.028,.035,1.55,5),w);_.position.y=.55,f.add(_);for(const y of[-.09,0,.09]){const A=new L(new ct(.018,.022,.32,4),l);A.position.set(y,1.45,0),f.add(A)}f.rotation.set(-.2,0,-.2)}else if(t.weapon==="dagger"){const _=new L(new xt(.05,.34,.02),l);_.position.y=.22,f.add(_),f.rotation.set(-.3,0,-.3)}else if(t.weapon==="sword"){const _=new L(new xt(.07,1.05,.03),l);_.position.y=.62,f.add(_);const y=new L(new de(.045,.16,4),l);y.position.y=1.22,f.add(y);const A=new L(new xt(.32,.06,.08),h);f.add(A);const T=new L(new ct(.03,.03,.24,5),w);T.position.y=-.16,f.add(T),f.rotation.set(-.25,0,-.2)}else if(t.weapon==="bow"){const _=new L(new Ve(.55,.022,4,14,Math.PI*1.1),w);_.rotation.z=-.08,f.add(_);const y=new L(new ct(.004,.004,1.02,3),e(14208432));y.position.set(-.02,.02,0),f.add(y),f.rotation.set(0,0,.2)}else if(t.weapon==="club"){const _=new L(new ct(.06,.08,1.9,5),w);_.position.y=.7,f.add(_);const y=new L(new gs(.28),e(4602405));y.position.y=1.7,f.add(y);for(let A=0;A<5;A++){const T=new L(new de(.05,.3,4),e(6115635));T.position.set(it(-.25,.25),1.7+it(-.2,.2),it(-.25,.25)),T.rotation.set(it(-1,1),0,it(-1,1)),f.add(T)}f.rotation.set(-.2,0,-.25)}if(this.defId==="briarWarden"){for(const y of[-1,1]){const A=new L(new ct(.03,.05,.7,4),e(4010786));A.position.set(y*.18,.27,0),A.rotation.z=y*-.5,g.add(A);const T=new L(new ct(.02,.03,.35,4),A.material);T.position.set(y*.3,.5,0),T.rotation.z=y*.5,g.add(T)}const _=new L(new Ve(.25,.025,4,10),Be(10354522,1.6));_.rotation.x=Math.PI/2,_.position.y=.32,g.add(_)}}buildHound(t,e){const i=t(4078128,{roughness:.95}),n=t(3025444,{roughness:1}),a=t(10064252,{roughness:.8}),o=e(16726574),r=new L(new xt(.52,.48,1.15),i);r.position.y=.82,this.body.add(r);const l=new L(new xt(.6,.56,.5),i);l.position.set(0,.88,.35),this.body.add(l);const h=new At;h.position.set(0,.94,.72),this.body.add(h),this.head=h;const c=new L(new xt(.34,.32,.45),n);h.add(c);const d=new L(new xt(.2,.16,.35),a);d.position.set(0,-.05,.32),h.add(d);const u=new L(new xt(.19,.08,.3),a);u.position.set(0,-.17,.28),u.name="jaw",h.add(u);for(const v of[-.09,.09]){const p=new L(new Xt(.035,6,5),o);p.position.set(v,.06,.2),h.add(p);const f=be(16726574,.3);f.position.set(v,.06,.24),h.add(f),this.eyeMats.push(f.material)}for(let v=0;v<4;v++){const p=new L(new de(.06,.25,4),a);p.position.set(it(-.15,.15),.32,-.2+v*.18),h.parent.add(p)}const m=new L(new ct(.03,.07,.8,4),n);m.position.set(0,1,-.7),m.rotation.x=.8,this.body.add(m);const g=(v,p)=>{const f=new At;f.position.set(v,.68,p),this.body.add(f);const w=new L(new ct(.07,.055,.4,5),n);w.position.y=-.2,f.add(w);const _=new At;_.position.y=-.4,f.add(_);const y=new L(new ct(.05,.04,.34,5),i);y.position.y=-.17,_.add(y);const A=new L(new xt(.12,.08,.22),a);return A.position.set(0,-.34,.05),_.add(A),{hip:f,knee:_}};this.legL=g(-.2,.38),this.legR=g(.2,.38),this.legL2=g(-.2,-.42),this.legR2=g(.2,-.42)}addTelegraph(){const t=new ee({color:16730666,transparent:!0,opacity:0,side:ve,depthWrite:!1,blending:Fe}),e=new L(new Ii(.55,.72,24),t);e.rotation.x=-Math.PI/2,e.position.y=.04,this.root.add(e),this.telegraph=e}addAlertIcon(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.fillStyle="#e8cf92",e.font="bold 52px Georgia",e.textAlign="center",e.textBaseline="middle",e.fillText("!",32,34);const i=new fr(t),n=new ga({map:i,transparent:!0,depthWrite:!1}),a=new ur(n);a.position.y=2.4,a.scale.setScalar(.45),a.visible=!1,this.root.add(a),this.alertIcon=a}update(t,e){if(!this.alive){this.updateDeath(t);return}this.stateTime+=t,this.attackCooldown=Math.max(0,this.attackCooldown-t),this.rangedCooldown=Math.max(0,this.rangedCooldown-t),this.hitFlash=Math.max(0,this.hitFlash-t),this.poise=Math.min(this.maxPoise,this.poise+t*9),this.alertIcon.visible&&this.stateTime>1.1&&(this.alertIcon.visible=!1);const i=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),n=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.atan2(n,a);if(this.distToPlayer=i,e.dead&&(this.aggro=!1,this.state!=="return"&&this.state!=="patrol"&&this.setState("return")),!this.aggro&&!e.dead&&this.state!=="stagger"){const r=Math.cos(Xi(this.yaw,o)),l=e.sprinting&&i<24;(i<this.def.aggro&&(i<4.5||r>.15||e.sprinting)||l)&&this.alert(e)}switch(this.alertLevel=this.aggro?1:0,this.state){case"patrol":this.updatePatrol(t);break;case"idle":this.updateIdle(t);break;case"chase":this.updateChase(t,e,i,o);break;case"attack":this.updateAttack(t,e,i,o);break;case"stagger":this.updateStagger(t);break;case"return":this.updateReturn(t);break}this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.vel.x=X(this.vel.x,0,6,t),this.vel.z=X(this.vel.z,0,6,t),this.resolveCollisions(),this.pos.y=bt(this.pos.x,this.pos.z),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.updateAnimation(t)}setState(t){this.state=t,this.stateTime=0}alert(t){var e,i,n,a;if(!this.aggro){this.aggro=!0,this.setState("chase"),this.alertIcon.visible=!0,this.stateTime=0,(i=(e=this.game.audio).roar)==null||i.call(e),this.def.elite?this.game.audio.roar():(a=(n=this.game.audio).tone)==null||a.call(n,{freq:180,type:"triangle",dur:.25,gain:.025}),this.isElite&&this.game.showEliteBar(this);for(const o of this.game.enemies)o===this||!o.alive||o.aggro||o.pos.distanceTo(this.pos)<12&&(o.aggro=!0,o.setState("chase"))}}updatePatrol(t){if(this.patrolWait>0){this.patrolWait-=t;return}const e=this.patrolTarget.x-this.pos.x,i=this.patrolTarget.z-this.pos.z,n=Math.hypot(e,i);if(n<.7){this.patrolWait=it(1.2,3.4),this.patrolTarget=this.pickPatrol();return}const a=this.def.speed*.34;this.vel.x=e/n*a,this.vel.z=i/n*a,this.yaw=fi(this.yaw,Math.atan2(e,i),5,t)}updateIdle(t){this.stateTime>2&&(this.setState("patrol"),this.patrolTarget=this.pickPatrol())}updateChase(t,e,i,n){if(Math.hypot(this.pos.x-this.spawn.x,this.pos.z-this.spawn.z)>this.leash||e.dead){this.aggro=!1,this.setState("return"),this.isElite&&this.game.hideEliteBar();return}if(this.def.ranged){this.updateArcherChase(t,e,i,n);return}this.yaw=fi(this.yaw,n,6,t);const o=this.def.attackRange;if(i>o*.9){const r=this.def.speed*(i>8?1.15:1);this.vel.x=Math.sin(n)*r,this.vel.z=Math.cos(n)*r}else{const r=Math.sin(this.game.time*.8+this.spawn.x)>0?1:-1;this.vel.x=Math.cos(n)*this.def.speed*.28*r,this.vel.z=-Math.sin(n)*this.def.speed*.28*r,this.attackCooldown<=0&&this.game.canEnemyAttack(this)&&this.startAttack()}this.separation()}updateArcherChase(t,e,i,n){this.yaw=fi(this.yaw,n,6,t),i<5?(this.vel.x=-Math.sin(n)*this.def.speed,this.vel.z=-Math.cos(n)*this.def.speed):i>16?(this.vel.x=Math.sin(n)*this.def.speed,this.vel.z=Math.cos(n)*this.def.speed):this.rangedCooldown<=0&&this.game.canEnemyAttack(this)&&this.startAttack("ranged"),this.separation()}separation(){for(const t of this.game.enemies){if(t===this||!t.alive)continue;const e=this.pos.x-t.pos.x,i=this.pos.z-t.pos.z,n=Math.hypot(e,i);n<1.3&&n>.01&&(this.vel.x+=e/n*.8,this.vel.z+=i/n*.8)}}startAttack(t="melee"){var a,o;this.state="attack",this.stateTime=0,this.attackCooldown=this.def.attackCooldown+it(0,.5);const e=t==="ranged",i=this.def.elite,n={kind:t,windup:e?1.15:i?.85:this.defId==="knight"?.9:this.defId==="goblin"?.35:.55,active:e?.1:.18,recover:e?.7:i?.75:.55,damage:this.def.damage*(i?1.15:1),range:e?30:i?4.2:this.def.attackRange+.55,cone:e?.9:i?.95:.72,fired:!1,lunging:this.defId==="hound"||i&&t==="melee"};i&&Wi(.4)&&(n.kind="aoe",n.windup=1,n.damage=this.def.damage*1.3,n.range=5),this.attack=n,this.faceLocked=this.yaw,(o=(a=this.game.audio).swing)==null||o.call(a,i),this.telegraph.visible=!0,this.telegraph.material.opacity=0,this.telegraph.scale.setScalar(.6),this.alertIcon.visible=!1}updateAttack(t,e,i,n){const a=this.attack;if(!a){this.setState("chase");return}const o=this.stateTime;if(a.kind!=="ranged"&&(this.yaw=fi(this.yaw,n,3.2,t)),o<a.windup){const r=o/a.windup;this.telegraph.material.opacity=.18+r*.55;const l=.5+r*(a.range/1.4);this.telegraph.scale.setScalar(l),this.telegraph.material.color.setHex(a.kind==="aoe"?11816191:16730666),a.lunging&&(this.attackLunge=!0)}else if(!a.fired){if(a.fired=!0,this.telegraph.material.opacity=0,this.telegraph.visible=!1,a.kind==="ranged")this.game.enemyFireArrow(this,e);else if(a.kind==="aoe")this.game.enemyAoe(this,a);else{const r=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),l=Math.cos(Xi(this.yaw,Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)));if(r<=a.range+.6&&l>a.cone-.5&&!e.dead&&e.takeDamage(a.damage,this.pos,{source:this}),a.lunging){const h=this.defId==="hound"?7:4;this.vel.x+=Math.sin(this.yaw)*h,this.vel.z+=Math.cos(this.yaw)*h}}this.game.spawnAttackArc(this,a.range,a.kind==="aoe"?11816191:16738874)}o>a.windup+a.active+a.recover&&(this.attack=null,this.setState("chase"))}updateStagger(t){this.stateTime>this.staggerTimer&&(this.canBeCrit=!1,this.setState("chase"))}updateReturn(t){const e=this.spawn.x-this.pos.x,i=this.spawn.z-this.pos.z,n=Math.hypot(e,i);if(n<.8){this.health=this.maxHealth,this.poise=this.maxPoise,this.setState("patrol"),this.patrolTarget=this.pickPatrol(),this.patrolWait=it(.5,2),this.root.visible=!0;return}const a=this.def.speed*1.3;this.vel.x=e/n*a,this.vel.z=i/n*a,this.yaw=fi(this.yaw,Math.atan2(e,i),8,t)}resolveCollisions(){for(const e of this.game.world.colliders){const i=this.pos.x-e.x,n=this.pos.z-e.z,a=Math.hypot(i,n),o=this.radius+e.r;if(a<o&&a>.001){const r=o-a;this.pos.x+=i/a*r,this.pos.z+=n/a*r}}const t=this.game.player;if(t&&!t.dead){const e=this.pos.x-t.pos.x,i=this.pos.z-t.pos.z,n=Math.hypot(e,i),a=this.radius+.42;if(n<a&&n>.001){const o=a-n;this.pos.x+=e/n*o,this.pos.z+=i/n*o}}}takeDamage(t,e,i={}){if(!this.alive)return;let n=t;const a=e?this.pos.x-e.x:0,o=e?this.pos.z-e.z:0,l=Math.sin(this.yaw)*a+Math.cos(this.yaw)*o>-.1;if(this.def.shield&&l&&this.state!=="stagger"&&this.state!=="attack"&&!i.critical&&(n*=.4,this.game.spawnSparkBurst(this.pos.clone().add(new P(0,1.1,0)),8),this.game.audio.block(),this.game.floatText(this.pos,"GUARD","block")),i.critical&&(n*=1),this.health-=n,this.poise-=i.poise??18,this.hitFlash=.18,this.aggro=!0,(this.state==="patrol"||this.state==="idle")&&this.alert(this.game.player),this.game.floatText(this.pos,Math.round(n),"enemy"),this.game.audio.hit(this.def.armorType==="metal"),this.game.spawnBloodBurst(this.pos.clone().add(new P(0,.9*(this.def.scale||1),0)),Math.min(14,4+n*.15),this.def.armorType==="metal"?16765562:8003359),i.critical||this.game.shake(.1),!i.noKnock&&n>20){const h=Math.hypot(a,o)||1;this.vel.x+=a/h*2.2,this.vel.z+=o/h*2.2}if(this.isElite&&this.game.showEliteBar(this),this.health<=0){this.die(i);return}this.poise<=0&&(this.poise=this.maxPoise,this.stagger(i.critical?2.2:1.35,i.source))}stagger(t,e){var i,n;this.alive&&(this.setState("stagger"),this.staggerTimer=t,this.canBeCrit=!0,this.attack=null,this.telegraph.visible=!1,this.vel.set(0,0,0),this.game.floatText(this.pos,"STAGGERED","crit"),this.isElite&&this.game.showEliteBar(this),(n=(i=this.game.audio).parry)==null||n.call(i))}die(t={}){var i,n;if(!this.alive)return;this.alive=!1,this.state="dead",this.deathTimer=0,this.root.rotation.y=this.yaw,this.telegraph.visible=!1,this.attack=null,this.game.audio.hit(!1),(n=(i=this.game.audio).tone)==null||n.call(i,{freq:120,type:"sawtooth",dur:.8,gain:.06,slide:40}),this.game.spawnBloodBurst(this.pos.clone().add(new P(0,.8,0)),22,7214357),this.game.spawnSoulBurst(this.pos.clone().add(new P(0,.8,0)),this.def.elite?36:14);const e=Math.round(this.def.motes*it(.85,1.25));this.game.addMotes(e,this.pos),this.game.addXP(this.def.xp),this.game.onEnemyKilled(this),this.isElite&&(this.game.hideEliteBar(),this.game.showBanner("ELITE VANQUISHED","The Briar Warden has fallen.")),this.defId==="briarWarden"?this.game.giveLoot("spear","Briar Spear",this.pos):this.defId==="goblin"&&Wi(.09)?this.game.giveLoot("dagger","Glimmer Dagger",this.pos):this.defId==="archer"&&Wi(.12)?this.game.giveLoot("bow","Weeping Shortbow",this.pos):this.defId==="knight"&&Wi(.2)?this.game.giveLoot("knight","Rotten Knight Plate",this.pos,"armor"):Wi(.12)&&this.game.giveItem("emberBomb",1),setTimeout(()=>{this.root&&this.root.parent&&this.root.parent.remove(this.root)},5200)}updateDeath(t){this.deathTimer+=t;const e=Math.min(1,this.deathTimer/.5);this.def.quadruped?this.root.rotation.z=xe(0,1.2,e):this.root.rotation.x=xe(0,-1.35,e),this.deathTimer>3.8&&(this.root.position.y-=t*.4)}updateAnimation(t){const e=this.game.time,i=Math.hypot(this.vel.x,this.vel.z),n=i>.25,a=e*(5+i*1.5)+this.spawn.x,o=De(i/(this.def.speed||1),0,1);this.walk+=t*(n?6+i:2);const r=Math.sin(a)*(.45+o*.35);if(this.state==="stagger"){this.body.rotation.x=X(this.body.rotation.x,-.55,10,t),this.body.rotation.z=X(this.body.rotation.z,.2,10,t),this.armL&&(this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,.6,8,t),this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,.6,8,t)),this.legL&&(this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,.3,8,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-.3,8,t));return}if(this.body.rotation.x=X(this.body.rotation.x,0,8,t),this.body.rotation.z=X(this.body.rotation.z,0,8,t),this.def.quadruped){[this.legL,this.legR,this.legL2,this.legR2].forEach((c,d)=>{if(!c)return;const u=r*(d%2===0?1:-1)*(d>1?-1:1);c.hip.rotation.x=X(c.hip.rotation.x,u,14,t),c.knee.rotation.x=X(c.knee.rotation.x,Math.max(0,-u)*.8,14,t)}),this.head.rotation.x=X(this.head.rotation.x,this.state==="attack"?-.35:Math.sin(e*2)*.06,8,t);const h=this.head.getObjectByName("jaw");h&&(h.rotation.x=this.state==="attack"?X(h.rotation.x,.55,12,t):X(h.rotation.x,0,8,t));return}if(this.legL&&(this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,r,12,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-r,12,t),this.legL.knee.rotation.x=X(this.legL.knee.rotation.x,Math.max(0,-r)*1.1,12,t),this.legR.knee.rotation.x=X(this.legR.knee.rotation.x,Math.max(0,r)*1.1,12,t)),this.armL)if(this.state==="attack"&&this.attack){const l=this.attack,h=this.stateTime,c=l.windup;h<c?(this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-2.5,9,t),this.armR.sh.rotation.z=X(this.armR.sh.rotation.z,-.4,9,t),this.torso.rotation.x=X(this.torso.rotation.x,-.18,8,t),this.torso.rotation.y=X(this.torso.rotation.y,.35,8,t),this.defId==="archer"&&(this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,-1.5,9,t),this.armR.el.rotation.x=X(this.armR.el.rotation.x,-.6,9,t))):(this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,.7,18,t),this.armR.sh.rotation.z=X(this.armR.sh.rotation.z,.5,18,t),this.torso.rotation.x=X(this.torso.rotation.x,.3,14,t),this.torso.rotation.y=X(this.torso.rotation.y,-.4,14,t)),this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,-.4,8,t)}else this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,-r*.6,10,t),this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,r*.5-.18,10,t),this.armR.sh.rotation.z=X(this.armR.sh.rotation.z,-.18,8,t),this.torso.rotation.x=X(this.torso.rotation.x,0,6,t),this.torso.rotation.y=X(this.torso.rotation.y,-r*.15,8,t);this.head&&(this.head.rotation.y=X(this.head.rotation.y,Math.sin(e*.7+this.spawn.z)*.15,5,t)),this.body.position.y=n?Math.abs(Math.cos(a))*.045*o:Math.sin(e*2+this.spawn.x)*.015,this.updateFlash()}updateFlash(){var t,e;for(const i of this.mats)this.hitFlash>0?((t=i.emissive)==null||t.setHex(9050640),i.emissiveIntensity!==void 0&&(i.emissiveIntensity=.55)):((e=i.emissive)==null||e.setHex(0),i.emissiveIntensity!==void 0&&(i.emissiveIntensity=0))}dispose(){var t,e;(t=this.root)!=null&&t.parent&&this.root.parent.remove(this.root),(e=this.barEl)!=null&&e.parentNode&&this.barEl.parentNode.removeChild(this.barEl)}}class kl{constructor(t){this.game=t,this.name="THE HOLLOW WOODSMAN",this.sub="Keeper of the First Grove",this.center=new P(re.x,0,re.z),this.arenaRadius=re.r-1,this.spawn=new P(0,0,-111),this.pos=this.spawn.clone(),this.yaw=Math.PI,this.radius=2,this.maxHealth=1500,this.health=this.maxHealth,this.maxPoise=260,this.poise=this.maxPoise,this.active=!1,this.dead=!1,this.isBoss=!0,this.state="dormant",this.stateTime=0,this.cooldown=2.5,this.phase=1,this.attack=null,this.introActive=!1,this.vel=new P,this.hitFlash=0,this.poiseBuildup=0,this.staggerTimer=0,this.deathTimer=0,this.deathCinematic=!1,this.alerted=!1,this.rootHitOnce=!1,this.armorType="bark",this.barEl=null,this.buildModel(),this.root.position.copy(this.pos),this.scene=t.scene,this.scene.add(this.root)}buildModel(){const t=new At;this.root=t;const e=new At;t.add(e),this.body=e,this.mats=[];const i=(Y,et={})=>{const st=Pt(Y,et);return this.mats.push(st),st},n=i(6958895,{roughness:.95}),a=i(4858916,{roughness:.95}),o=i(3028032,{roughness:1}),r=i(4928804,{roughness:.95}),l=i(10193773,{roughness:1}),h=i(4930087,{roughness:1}),c=i(3812638,{roughness:1}),d=i(7106677,{metalness:.7,roughness:.42}),u=i(4079941,{metalness:.65,roughness:.5}),m=i(4680505,{roughness:1}),g=i(6127429,{roughness:1}),v=Be(16756782,2.3),p=Be(16751150,1.8);this.eyeMats=[v,p];const f=Y=>{const et=new At;et.position.set(Y*.75,3,0),e.add(et);const st=new L(new ct(.46,.38,1.55,7),o);st.position.y=-.75,et.add(st);const Mt=new At;Mt.position.y=-1.5,et.add(Mt);const Ct=new L(new ct(.35,.3,1.4,7),o);Ct.position.y=-.7,Mt.add(Ct);const Ht=new L(new xt(.75,.5,1.25),r);Ht.position.set(0,-1.45,.28),Mt.add(Ht);const ie=new L(new xt(.72,.22,.35),u);return ie.position.set(0,-1.6,.85),Mt.add(ie),{hip:et,knee:Mt}};this.legL=f(-1),this.legR=f(1);const w=new At;w.position.y=3.4,e.add(w),this.torso=w;const _=new L(new xt(2.55,2.5,1.35),n);_.position.y=.9,w.add(_);const y=new L(new xt(2.2,.8,1.2),a);y.position.y=-.35,w.add(y);const A=new L(new xt(1.8,1.9,.08),r);A.position.set(0,.1,.7),w.add(A);const T=new L(new xt(2.45,.35,1.32),r);T.position.y=-.55,w.add(T);const S=new L(new xt(.45,.45,.1),d);S.position.set(0,-.55,.68),w.add(S);for(const Y of[-1.35,1.35]){const et=new L(new gs(.48,0),h);et.position.set(Y,1.7,0),et.scale.set(1.1,.7,1),w.add(et);for(let st=0;st<3;st++){const Mt=new L(new de(.1,.5,4),c);Mt.position.set(Y+it(-.25,.25),1.95,it(-.2,.2)),Mt.rotation.z=it(-.6,.6),w.add(Mt)}}const R=new At;R.position.y=2.35,w.add(R),this.head=R;const I=new L(new xt(.9,.9,.85),l);R.add(I);const x=new L(new xt(.98,.2,.12),c);x.position.set(0,.15,.44),R.add(x);for(const Y of[-.22,.22]){const et=new L(new Xt(.08,6,5),v);et.position.set(Y,.04,.44),R.add(et);const st=be(16756782,.7);st.position.set(Y,.04,.5),R.add(st),this.eyeMats.push(st.material)}for(let Y=0;Y<9;Y++){const et=new L(new de(.07,it(.5,1),4),h);et.position.set(it(-.35,.35),-.45,it(.25,.45)),et.rotation.x=Math.PI+it(-.2,.2),R.add(et)}for(const Y of[-1,1]){const et=new L(new ct(.06,.13,1.5,5),h);et.position.set(Y*.35,.65,0),et.rotation.z=Y*-.55,R.add(et);const st=new L(new ct(.04,.07,.9,4),h);st.position.set(Y*.8,1.15,0),st.rotation.z=Y*.25,R.add(st)}const b=new At;b.position.set(.15,1.2,-.1),w.add(b),this.tree=b;const k=new L(new ct(.3,.5,3,7),h);k.position.y=1.2,k.rotation.z=-.14,b.add(k);for(let Y=0;Y<7;Y++){const et=Y/7*Math.PI*2,st=new L(new ct(.07,.14,1.7,5),c);st.position.set(Math.cos(et)*.45,2.2+it(-.4,.7),Math.sin(et)*.45),st.rotation.set(Math.cos(et)*.9,0,Math.sin(et)*-.9),b.add(st)}for(let Y=0;Y<9;Y++){const et=new L(new Jn(it(.35,.7),0),Wi(.5)?m:g);et.position.set(it(-1.4,1.4),2.4+it(0,1.4),it(-1.2,1.2)),b.add(et)}const B=new L(new gn(.26),p);B.position.set(.15,1.35,.35),w.add(B),this.heart=B;const W=be(16747054,4.5);W.position.copy(B.position),w.add(W),this.heartGlow=W;const j=Y=>{const et=new At;et.position.set(Y*1.45,1.55,0),w.add(et);const st=new L(new ct(.3,.27,1.45,7),n);st.position.y=-.72,et.add(st);const Mt=new At;Mt.position.y=-1.45,et.add(Mt);const Ct=new L(new ct(.26,.23,1.35,7),l);Ct.position.y=-.68,Mt.add(Ct);const Ht=new L(new Xt(.32,8,7),l);return Ht.position.y=-1.4,Mt.add(Ht),{sh:et,el:Mt,hand:Ht}};this.armL=j(-1),this.armR=j(1);const V=new At;V.position.y=-1.4,this.armR.el.add(V),this.weaponMount=V;const Z=new L(new ct(.12,.17,5.6,7),h);Z.position.y=1.2,V.add(Z);const z=new L(new xt(2.4,1.6,.3),u);z.position.set(1,3.6,0),V.add(z);const lt=new L(new xt(.5,1.9,.16),d);lt.position.set(2.15,3.6,0),V.add(lt);const rt=new L(new xt(.7,1.9,.18),d);rt.position.set(2,3.6,0),rt.rotation.z=.3,V.add(rt);const pt=new L(new Ve(.45,.05,4,10),p);pt.position.set(1.1,3.6,.18),V.add(pt),V.rotation.set(-.4,0,-.35);for(let Y=0;Y<8;Y++){const et=Y/8*Math.PI*2,st=new L(new ct(.08,.2,it(1.2,2.2),4),c);st.position.set(Math.cos(et)*1.1,.1,Math.sin(et)*1.1),st.rotation.set(Math.PI/2,et,0),t.add(st)}const It=new L(new Xt(3.4,16,12),new ee({color:16742958,transparent:!0,opacity:0,blending:Fe,side:Oe,depthWrite:!1}));It.position.y=3.4,t.add(It),this.aura=It;const Wt=be(16738862,12);Wt.position.y=3.6,Wt.material.opacity=.12,t.add(Wt),this.auraGlow=Wt;const $=new L(new Ii(.8,1,32),new ee({color:16730666,transparent:!0,opacity:0,side:ve,depthWrite:!1,blending:Fe}));$.rotation.x=-Math.PI/2,$.position.y=.06,t.add($),this.telegraph=$,t.traverse(Y=>{Y.isMesh&&Y.material&&(Y.frustumCulled=!1)})}beginIntro(){this.introActive=!0,this.state="intro",this.stateTime=0,this.alerted=!0,this.game.audio.roar(),this.game.showBossBar(this)}activate(){this.active=!0,this.introActive=!1,this.state="idle",this.stateTime=0,this.cooldown=1.6,this.game.audio.setTheme("boss")}update(t,e){if(this.dead){this.updateDeath(t);return}if(this.stateTime+=t,this.hitFlash=Math.max(0,this.hitFlash-t),this.poise=Math.min(this.maxPoise,this.poise+t*7),!this.active){this.idleAnim(t);return}if(this.introActive){this.introAnim(t);return}if(this.state==="phaseChange"){this.phaseChangeUpdate(t);return}if(this.state==="stagger"){this.staggerTimer-=t,this.body.rotation.x=X(this.body.rotation.x,-.55,8,t),this.body.rotation.z=X(this.body.rotation.z,.18,8,t),this.staggerTimer<=0&&(this.state="idle",this.body.rotation.x=0,this.body.rotation.z=0,this.poise=this.maxPoise,this.game.hideContextual()),this.root.position.copy(this.pos);return}if(this.state==="dead")return;const i=e.pos.x-this.pos.x,n=e.pos.z-this.pos.z,a=Math.hypot(i,n),o=Math.atan2(i,n);if(this.yaw=fi(this.yaw,o,2.6,t),this.cooldown=Math.max(0,this.cooldown-t),this.dist=a,this.attack)this.updateAttack(t,e,a,o);else if(this.state!=="charge"){if(this.attackCooldown!==void 0&&this.state==="attack")return;if(a>7.5){const c=this.phase===2?2.6:1.8;this.vel.x=Math.sin(o)*c,this.vel.z=Math.cos(o)*c}else if(a<4.2)this.vel.x=-Math.sin(o)*1.1,this.vel.z=-Math.cos(o)*1.1;else{const c=Math.sin(this.game.time*.6)>0?1:-1;this.vel.x=Math.cos(o)*.8*c,this.vel.z=-Math.sin(o)*.8*c}this.cooldown<=0&&a<18&&this.chooseAttack(a)}this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.vel.x=X(this.vel.x,0,4,t),this.vel.z=X(this.vel.z,0,4,t);const r=this.pos.x-this.center.x,l=this.pos.z-this.center.z,h=Math.hypot(r,l);if(h>this.arenaRadius-2){const c=(this.arenaRadius-2)/h;this.pos.x=this.center.x+r*c,this.pos.z=this.center.z+l*c}this.pos.y=bt(this.pos.x,this.pos.z),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.walkAnim(t,a),this.updateAura(t),this.health<=this.maxHealth*.5&&this.phase===1&&this.enterPhase2()}chooseAttack(t){const e=Math.random();this.phase===1?t<7?this.startAttack(e<.55?"sweep":"slam"):this.startAttack(e<.6?"charge":"sweep"):t<7?this.startAttack(e<.32?"sweep":e<.58?"slam":e<.8?"roots":"summon"):this.startAttack(e<.42?"charge":e<.72?"roots":"slam")}startAttack(t){this.state="attack",this.attack={kind:t,t:0,hit:!1,phase:"windup"},this.attack.t=0;const e={sweep:1.05,slam:1.25,charge:.8,roots:1.15,summon:1.1}[t]||1;this.attack.windup=e,this.attack.recover=t==="charge"?.9:.85,this.attack.range=t==="sweep"?8.2:t==="slam"?6.8:t==="roots"?30:8,this.attack.damage={sweep:34,slam:42,charge:30,roots:27,summon:0}[t]||30,this.attack.kind=t,this.attack.hit=!1,this.cooldown=t==="summon"?5:this.phase===2?1.8:2.6,this.game.audio.swing(!0),this.telegraph.visible=!0,this.telegraph.material.opacity=0,t==="roots"||t==="summon"?this.telegraph.material.color.setHex(10247423):this.telegraph.material.color.setHex(16730666),this.game.bossTelegraph(this,t)}updateAttack(t,e,i,n){const a=this.attack;if(!a)return;a.t+=t;const o=a.t;if(o<a.windup){const r=o/a.windup;this.telegraph.material.opacity=.2+r*.5,this.telegraph.scale.setScalar(.8+r*8),this.telegraph.rotation.z+=t*(a.kind==="roots"?2:.6),this.yaw=fi(this.yaw,n,1.7,t),this.windupAnim(t,a,r)}else a.hit?o>a.windup+a.recover&&(this.attack=null,this.state="idle",this.body.rotation.x=0,this.body.rotation.z=0,this.game.hideContextual()):(a.hit=!0,this.telegraph.visible=!1,this.impact(a,e),this.impactAnim(a));if(a.kind==="charge"&&o>a.windup&&o<a.windup+.85){const r=this.phase===2?14:10;this.vel.x=Math.sin(this.yaw)*r,this.vel.z=Math.cos(this.yaw)*r,!a.chargeHit&&i<4.6&&(a.chargeHit=!0,e.takeDamage(a.damage,this.pos,{source:this}),this.game.shake(.35))}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}impact(t,e){const i=e.pos.x-this.pos.x,n=e.pos.z-this.pos.z,a=Math.hypot(i,n),o=Math.cos(Xi(this.yaw,Math.atan2(i,n)));this.game.shake(t.kind==="slam"?.6:.35),this.game.audio.hit(!0),t.kind==="sweep"?(this.game.bossArcEffect(this.pos,this.yaw,8,16730666),a<8.2&&o>.1&&e.takeDamage(t.damage,this.pos,{source:this})):t.kind==="slam"?(this.game.bossShockwave(this.pos,0),a<7&&e.takeDamage(t.damage,this.pos,{source:this}),this.game.bossRootRing(this.pos,16738858)):t.kind==="charge"?this.game.shake(.3):t.kind==="roots"?this.game.bossRootEruption(this.pos,e.pos,this.phase===2?5:3,t.damage):t.kind==="summon"&&this.game.bossSummon(this,this.phase===2?3:2)}windupAnim(t,e,i){e.kind==="sweep"?(this.torso.rotation.y=X(this.torso.rotation.y,-1,6,t),this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-.5,6,t),this.armR.sh.rotation.z=X(this.armR.sh.rotation.z,-.7,6,t),this.body.rotation.z=X(this.body.rotation.z,-.08,5,t)):e.kind==="slam"?(this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-2.9,6,t),this.torso.rotation.x=X(this.torso.rotation.x,-.2,6,t),this.body.position.y=X(this.body.position.y,-.2,4,t)):e.kind==="charge"?(this.body.rotation.x=X(this.body.rotation.x,.3,6,t),this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-.9,6,t)):(e.kind==="roots"||e.kind==="summon")&&(this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-2.6,5,t),this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,-2.2,5,t),this.torso.rotation.x=X(this.torso.rotation.x,-.25,5,t),this.heartGlow.material.opacity=.5+i*.5)}impactAnim(t){t.kind==="sweep"?(this.torso.rotation.y=1.15,this.armR.sh.rotation.x=.4,this.armR.sh.rotation.z=1):t.kind==="slam"?(this.armR.sh.rotation.x=.9,this.body.position.y=-.4):(t.kind==="roots"||t.kind==="summon")&&(this.armR.sh.rotation.x=.2,this.armL.sh.rotation.x=.2)}enterPhase2(){this.phase=2,this.state="phaseChange",this.stateTime=0,this.attack=null,this.telegraph.visible=!1,this.game.audio.roar(),this.game.shake(1.2),this.game.showBanner("THE GROVE REMEMBERS","The Hollow Woodsman has entered his second phase."),this.game.audio.setTheme("boss"),this.game.setBossPhase(2),this.game.spawnSoulBurst(this.pos.clone().add(new P(0,4,0)),60)}phaseChangeUpdate(t){const e=De(this.stateTime/2.4,0,1);this.body.position.y=-Math.sin(e*Math.PI)*.4,this.aura.material.opacity=.04+e*.12,this.heartGlow.material.opacity=e,this.heartGlow.scale.setScalar(3+e*4),this.stateTime>2.4&&(this.state="idle",this.cooldown=.8),this.root.position.copy(this.pos)}walkAnim(t,e){var l,h;const i=this.game.time,n=Math.hypot(this.vel.x,this.vel.z),a=De(n/2.4,0,1),o=i*2.4,r=Math.sin(o)*.4*a;this.legL.hip.rotation.x=X(this.legL.hip.rotation.x,r,5,t),this.legR.hip.rotation.x=X(this.legR.hip.rotation.x,-r,5,t),this.legL.knee.rotation.x=X(this.legL.knee.rotation.x,Math.max(0,-r)*.8,5,t),this.legR.knee.rotation.x=X(this.legR.knee.rotation.x,Math.max(0,r)*.8,5,t),this.body.position.y=X(this.body.position.y,Math.abs(Math.cos(o))*.07*a+Math.sin(i*1.1)*.02,4,t),this.attack||(this.torso.rotation.x=X(this.torso.rotation.x,0,5,t),this.torso.rotation.y=X(this.torso.rotation.y,0,5,t),this.body.rotation.z=X(this.body.rotation.z,0,5,t),this.body.rotation.x=X(this.body.rotation.x,0,5,t),this.armR.sh.rotation.x=X(this.armR.sh.rotation.x,-r*.3-.2,4,t),this.armR.sh.rotation.z=X(this.armR.sh.rotation.z,-.35,4,t),this.armL.sh.rotation.x=X(this.armL.sh.rotation.x,r*.25-.1,4,t),this.heartGlow.material.opacity=.55+Math.sin(i*1.4)*.15);for(const c of this.mats)this.hitFlash>0?((l=c.emissive)==null||l.setHex(8002058),c.emissiveIntensity!==void 0&&(c.emissiveIntensity=.6)):((h=c.emissive)==null||h.setHex(0),c.emissiveIntensity!==void 0&&(c.emissiveIntensity=0))}idleAnim(t){const e=this.game.time;this.body.position.y=Math.sin(e*.8)*.03,this.torso.rotation.x=Math.sin(e*.6)*.015,this.heartGlow.material.opacity=.5+Math.sin(e*1.6)*.15,this.aura.material.opacity=0,this.root.position.copy(this.pos)}introAnim(t){const e=this.stateTime;this.body.position.y=Math.sin(e*4)*.08,this.torso.rotation.x=X(this.torso.rotation.x,e<2.2?-.2:0,4,t),e>.6&&e<.9&&this.game.shake(.4),this.root.position.copy(this.pos)}updateAura(t){this.phase===2&&(this.aura.material.opacity=.08+Math.sin(this.game.time*2.2)*.04,this.aura.rotation.y+=t*.2,this.auraGlow.material.opacity=.18+Math.sin(this.game.time*2.6)*.05)}takeDamage(t,e,i={}){!this.active||this.dead||this.introActive||this.state!=="phaseChange"&&(this.health-=t,this.poiseBuildup+=t*.55,this.hitFlash=.15,this.game.updateBossBar(),this.game.floatText(this.pos.clone().add(new P(0,6.2,0)),Math.round(t),"enemy"),this.game.spawnBloodBurst(this.pos.clone().add(new P(0,4.4,0)),10,16756782),this.game.spawnSparkBurst(this.pos.clone().add(new P(0,4.2,0)),6),this.game.audio.hit(!0),this.poiseBuildup>this.maxPoise&&(this.poiseBuildup=0,this.stagger()),this.health<=0&&(this.health=0,this.die()))}stagger(){this.state="stagger",this.staggerTimer=1.9,this.attack=null,this.telegraph.visible=!1,this.game.showContextual("Press C to deliver a critical blow"),this.game.audio.parry(),this.game.floatText(this.pos.clone().add(new P(0,6.6,0)),"STAGGERED","crit")}canCrit(){return this.state==="stagger"}die(){this.dead=!0,this.active=!1,this.state="dead",this.deathTimer=0,this.attack=null,this.telegraph.visible=!1,this.game.audio.bossDeath(),this.game.audio.setTheme("victory"),this.game.slowmo(.45,3.2),this.game.shake(1.4),this.game.hideBossBar(),this.game.hideContextual(),this.game.onBossDeath(this)}updateDeath(t){this.deathTimer+=t;const e=De(this.deathTimer/2.8,0,1);this.body.rotation.z=xe(0,1.25,Math.min(1,e*1.4)),this.body.position.y=-e*.8,this.aura.material.opacity=Math.max(0,.2-e*.2),this.heartGlow.material.opacity=Math.max(0,1-e)}dispose(){var t;(t=this.root)!=null&&t.parent&&this.root.parent.remove(this.root)}}class Fl{constructor(t,e,i,n,a,o){this.game=t,this.id=e,this.name=i,this.x=n,this.z=a,this.y=bt(n,a),this.yaw=o,this.radius=2.8,this.scene=t.scene,this.bob=it(0,6),this.buildModel(),this.root.position.set(n,this.y,a),this.root.rotation.y=o,t.scene.add(this.root)}buildModel(){this.root=new At;const t=(e,i={})=>Pt(e,i);if(this.id==="marrow"){const e=t(4208686,{roughness:1}),i=t(7027246),n=t(10256740),a=t(2433823),o=t(4995363),r=t(10189628,{metalness:.6,roughness:.4}),l=new L(new ct(.32,.46,1.15,7),e);l.position.y=.58,this.root.add(l);const h=new L(new Xt(.34,8,7),e);h.position.y=1.12,h.scale.set(1.25,.55,.9),this.root.add(h);const c=new L(new ct(.07,.09,.12,5),n);c.position.y=1.24,this.root.add(c);const d=new L(new Xt(.2,9,8),n);d.position.y=1.43,this.root.add(d);const u=new L(new de(.045,.13,4),n);u.position.set(0,1.41,.18),u.rotation.x=Math.PI/2,this.root.add(u);for(const R of[-.07,.07]){const I=new L(new Xt(.018,5),a);I.position.set(R,1.47,.18),this.root.add(I)}const m=new L(new ct(.42,.45,.045,9),o);m.position.y=1.57,m.rotation.z=.08,this.root.add(m);const g=new L(new ct(.17,.2,.28,8),o);g.position.set(.02,1.72,0),g.rotation.z=.08,this.root.add(g);const v=new L(new de(.13,.35,5),t(8023126));v.position.set(0,1.28,.12),v.rotation.x=Math.PI,this.root.add(v);const p=new L(new Ve(.19,.06,5,10),i);p.position.y=1.26,p.rotation.x=Math.PI/2,this.root.add(p);for(const R of[-1,1]){const I=new L(new ct(.06,.05,.55,5),e);I.position.set(R*.32,.85,.05),I.rotation.z=R*.25,this.root.add(I)}const f=new At;f.position.set(.54,.55,.12),this.root.add(f);const w=new L(new Ve(.11,.012,4,8),r);w.position.y=.2,f.add(w);const _=new L(new ct(.14,.14,.25,6),r);_.position.y=.02,f.add(_);const y=be(16757076,1.8);y.position.y=.02,f.add(y),this.lantern=y;const A=new ii(16755023,1.2,7,2);A.position.y=.02,f.add(A);const T=new L(new ct(.025,.035,1.8,5),o);T.position.set(-.52,.8,.12),T.rotation.z=-.08,this.root.add(T);const S=new L(new Xt(.1,7),Be(16764794,1.8));S.position.set(-.6,1.68,.12),this.root.add(S)}else if(this.id==="wisp"){const e=t(2965314,{roughness:1,transparent:!0,opacity:.75,side:ve}),i=new L(new de(.38,1.2,7,1,!0),e);i.position.y=.65,this.root.add(i);const n=new L(new Xt(.26,8,7,0,Math.PI*2,0,Math.PI*.6),e);n.position.y=1.24,this.root.add(n);const a=new L(new Xt(.13,8,7),Be(10944492,2.4));a.position.y=1.12,this.root.add(a),this.core=a;const o=be(9043936,3.4);o.position.y=1.1,this.root.add(o),this.glow=o;const r=new ii(7536598,1.2,9,2);r.position.y=1.1,this.root.add(r);const l=[];for(let h=0;h<5;h++){const c=new L(new de(.08,it(.4,.8),4),e);c.position.set(it(-.3,.3),it(.25,.6),it(-.2,.2)),c.rotation.z=it(-.4,.4),this.root.add(c),l.push(c)}this.tatters=l,this.light=r}else if(this.id==="echo"){const e=t(3810640,{roughness:.7,transparent:!0,opacity:.7,side:ve}),i=new L(new de(.55,2.2,8,1,!0),e);i.position.y=1.1,this.root.add(i);const n=new L(new Xt(.4,9,8,0,Math.PI*2,0,Math.PI*.62),e);n.position.y=2.2,this.root.add(n);for(const h of[-.12,.12]){const c=new L(new Xt(.045,6),Be(12946175,2.5));c.position.set(h,2.18,.3),this.root.add(c)}const a=new L(new ct(.035,.05,2.6,6),t(2563376));a.position.set(.55,1.3,.1),this.root.add(a);const o=new L(new gn(.2),Be(12552959,2.2));o.position.set(.55,2.7,.1),this.root.add(o),this.orb=o;const r=be(10447615,7);r.position.y=1.6,this.root.add(r),this.glow=r;const l=new ii(10316031,1.6,14,2);l.position.y=1.8,this.root.add(l)}}update(t,e){if(this.bob+=t,this.id==="wisp"||this.id==="echo"?(this.root.position.y=this.y+.25+Math.sin(e*.9+(this.id==="wisp"?0:2))*.15,this.core&&(this.core.rotation.y+=t*1.4),this.orb&&(this.orb.rotation.y+=t*1.6,this.orb.position.y=2.7+Math.sin(e*1.3)*.1),this.glow&&(this.glow.material.opacity=.6+Math.sin(e*1.6)*.2),this.tatters&&this.tatters.forEach((i,n)=>{i.rotation.z=Math.sin(e*1.2+n)*.3})):(this.root.position.y=this.y,this.lantern&&(this.lantern.material.opacity=.7+Math.sin(e*3.4)*.15),this.headBob=Math.sin(e*.8)*.01),this.id==="marrow"){const i=this.game.player;if(i&&i.pos.distanceTo(this.root.position)<6){const n=Math.atan2(i.pos.x-this.x,i.pos.z-this.z);this.root.rotation.y+=(n-this.root.rotation.y)*Math.min(1,t*2.5)}}}dialogue(){const t=this.game,e=t.state;if(this.id==="marrow")return e.flags.merchantMet?e.quests.merchantQuest===0?{nodes:{start:{text:"Still breathing. Good. The woods have been quieter since you went up the road, and I do not trust quiet. Listen — I have a favor. My sister lived by the old graveyard west of the village. She wore a little silver locket, shaped like a bird. If you find it, bring it back. I will make it worth your while.",options:[{label:"I will look for the locket.",action:"quest_accept"},{label:"Show me your wares.",action:"shop"},{label:"Not now.",action:"close"}]}},startNode:"start"}:e.quests.merchantQuest===1?{nodes:{start:{text:"The locket was by the graves, near the leaning stone. Silver bird. My sister's name was Wren. She would have liked you, I think. You have the same look — like you are not sure whether you are lost or exactly where you are meant to be.",options:[{label:"I found the locket.",action:"quest_complete",condition:()=>t.hasLocket},{label:"Still looking.",action:"close"},{label:"Show me your wares.",action:"shop"}]}},startNode:"start"}:e.flags.bossDefeated?{nodes:{start:{text:"The grove is quiet. I walked up to the gate this morning, and the fog was gone. You did that. I do not know what you are, stranger, but the shire owes you a debt it can never pay. Take the road north. The Weeping Wilds are waiting, and they are worse.",options:[{label:"Show me your wares.",action:"shop"},{label:"What waits in the Wilds?",next:"wilds"},{label:"Goodbye, Marrow.",action:"close"}]},wilds:{text:"Mushrooms the size of houses. Spiders that weave their webs out of dreams. A queen in the roots who loves her children very much. Keep your blade close and your torch closer. And stranger — if you find a woman made of mycelium, do not let her touch your face.",options:[{label:"Show me your wares.",action:"shop"},{label:"I will be careful.",action:"close"}]}},startNode:"start"}:{nodes:{start:{text:"The road north is still closed. The woodsman waits in the old grove. If you are going to face him, spend your motes first — the dead do not need shopping money.",options:[{label:"Show me your wares.",action:"shop"},{label:"Tell me about the locket.",action:"locket_hint"},{label:"I will return.",action:"close"}]},locket_hint:{text:"West of the village. Past the well, past the flowers, into the leaning stones. Look for a bird made of silver. My sister would have wanted it found by someone who still remembers how to be gentle.",options:[{label:"I will find it.",action:"close"},{label:"Show me your wares.",action:"shop"}]}},startNode:"start"}:{nodes:{start:{text:"You came out of the hill with a metal stick and a dead phone. I have seen a great many things in this shire, stranger, but never a man dressed like a folded bedsheet. Sit. Sit, before the woods notice you.",options:[{label:"Where am I?",next:"where"},{label:"What happened to these people?",next:"corruption"},{label:"I need supplies.",action:"shop"},{label:"Not now.",action:"close"}]},where:{text:"Eldoria. The Forgotten Shire, if you want the local name. It was a fairytale once. Probably still is, from a distance. The woodsman at the north end has a tree where his heart should be, and the tree is the least frightening thing in this valley.",options:[{label:"Who is the woodsman?",next:"woodsman"},{label:"I need supplies.",action:"shop"},{label:"I have to go.",action:"close"}]},woodsman:{text:"The Hollow Woodsman. He kept the First Grove before the rot came. Now he keeps the gate to the Weeping Wilds, and he does not distinguish between travelers and saplings. If you mean to leave this valley, you will have to put him down. I am sorry. He was kind, once.",options:[{label:"How do I kill him?",next:"advice"},{label:"I need supplies.",action:"shop"},{label:"I have to go.",action:"close"}]},advice:{text:"He is slow. Be patient. When the tree in his chest blazes orange, he is about to call the roots — that is when you should be somewhere else. And when you stagger him, strike the heartwood. That is the only honest part of him left.",options:[{label:"I need supplies.",action:"shop"},{label:"Thank you.",action:"close"}]},corruption:{text:"The soil went sour seven winters ago. Then the knights came to collect the seed. Then the children stopped singing. It is not a plague, stranger. It is a hunger. It starts in the roots and ends in the teeth. Some of my neighbors still remember their names. Most do not.",options:[{label:"Is there a cure?",next:"cure"},{label:"I need supplies.",action:"shop"},{label:"I have to go.",action:"close"}]},cure:{text:"The old stories say seven crowns hold something under the kingdom. A mouth. A hunger with a name nobody says aloud. If the crowns fail, there is no cure — only a witness. Perhaps that is what you are. A witness with a metal stick.",options:[{label:"I need supplies.",action:"shop"},{label:"I will find the woodsman.",action:"close"}]}},startNode:"start",onOpen:()=>{e.flags.merchantMet=!0}};if(this.id==="wisp"){const i=e.lore.length;return e.flags.bossDefeated&&i>=3?{nodes:{start:{text:"You found the pages. The ones the wizard tried to burn. Then you already know what waits at the end of the road — and what he means to do with you. There is a third door, hollow one. It is not on any map. When the time comes, look for the seam in the world.",options:[{label:"Who are you?",next:"who"},{label:"I understand.",action:"close"}]},who:{text:"I was the first thing Malgraven summoned. He was younger then, and kinder, and he still believed he could save everyone. I am what is left of that belief. Go north. The Weeping Wilds will try to eat your name. Do not let them.",options:[{label:"I will remember.",action:"close"}]}},startNode:"start"}:{nodes:{start:{text:"A little flame in a dead wood. You are colder than the others. Cleaner. The wizard's summoning left no rot on you — that is why the trees are afraid. Find the scattered pages, hollow one. Three truths will open the third door.",options:[{label:"Who is Malgraven?",next:"malgraven"},{label:"What is the Devourer?",next:"devourer"},{label:"I have pages to find.",action:"close"}]},malgraven:{text:"The Last Seer of Eldoria. He pulled you across the veil because your soul is untouched by the curse. He will call it salvation. It is a ritual, and you are the final ingredient. Do not trust the voice that sounds like help.",options:[{label:"What is the Devourer?",next:"devourer"},{label:"I will be careful.",action:"close"}]},devourer:{text:"The thing beneath the seven crowns. Not a demon — a wound. The kings stitched it shut with their kingdoms, and the stitches are failing one by one. Malgraven thinks he can use you to cut it out. The demon thinks it can use you to open wider. Both of them are wrong about what you are.",options:[{label:"What am I?",next:"whatami"},{label:"I have pages to find.",action:"close"}]},whatami:{text:"A person from a place with no magic, standing in a fairytale with a piece of pipe. That is the most dangerous thing in Eldoria. Now go and find the pages before the forest forgets how to whisper.",options:[{label:"I will find them.",action:"close"}]}},startNode:"start"}}return this.id==="echo"?{nodes:{start:{text:"You killed the woodsman. Good. The gate will open now, and the Weeping Wilds will sing to you with a thousand wet mouths. But before you go — look. I left a thread of fate in the grove. Touch it, and see the three endings that wait at the bottom of the world. Consider it a courtesy. I am not often courteous.",options:[{label:"Show me the threads of fate.",action:"endings"},{label:"Why did you bring me here?",next:"why"},{label:"I am not ready.",action:"close"}]},why:{text:"Because you are unbroken. Because every soul in this kingdom is already food, and you are still a knife. Because I am old, and frightened, and I have run out of better ideas. That is the truth, hero. I hope you can forgive me. I doubt it.",options:[{label:"Show me the threads of fate.",action:"endings"},{label:"I will never forgive you.",action:"close"}]}},startNode:"start"}:null}}const _g=new xt(1,1,1);function Bn(s,t,e,i,n,a,o,r,l=0){const h=new Jt().compose(new P(a,o,r),new wi().setFromEuler(new je(0,l,0)),new P(e,i,n));s.push({geometry:_g,color:t,matrix:h})}class yg{constructor(t){this.game=t,this.time=0,this.duration=24,this.done=!1,this.shake=0,this.flash=0,this.scene=new vh,this.scene.background=new K(724244),this.scene.fog=new ma(724245,.028),this.camera=new $e(48,16/9,.1,300),this.camera.position.set(7,2.6,14),this.camera.lookAt(0,1.8,0),this.build(),this.captions=[[1.2,"November 14, 2026. 3:17 AM."],[4.5,"The city was asleep."],[7,"The sky was not."],[11,"Something on the other side had been waiting."],[15.5,"It knew his name."],[19,"Then the rain stopped."]],this.captionIndex=0,this.lightning=0}build(){const e=new L(new yi(160,160),new Ae({color:1514018,roughness:.3,metalness:.5}));e.rotation.x=-Math.PI/2,this.scene.add(e);const i=Pt(1974312,{roughness:.55,metalness:.2});for(const[_,y,A,T]of[[0,6,18,5],[0,-6,18,5],[12,0,5,30],[-12,0,5,30]]){const S=new L(new xt(A,.22,T),i);S.position.set(_,.11,y),this.scene.add(S)}const n=[],a=[],o=Mi(2026);for(let _=0;_<26;_++){const y=_%2===0?-1:1,A=-38+_/26*82+o()*3,T=y*(13+o()*16),S=12+o()*34,R=7+o()*9,I=7+o()*9;Bn(n,new K().setHSL(.6,.09,.1+o()*.07),R,S,I,T,S/2,A),Bn(n,new K(789776),R*.3,1.2,I*.3,T,S+.6,A);const x=Math.max(2,Math.floor(R/2.2)),b=Math.max(3,Math.floor(S/3.2));for(let k=0;k<x;k++)for(let B=0;B<b;B++){if(o()<.62)continue;const W=o()<.18?16765578:o()<.5?10471656:14201962;Bn(a,new K(W),.5,.7,.06,T-R/2+1.2+k*(R-2.4)/Math.max(1,x-1),2+B*3,A-I/2-.04),Bn(a,new K(W),.5,.7,.06,T-R/2+1.2+k*(R-2.4)/Math.max(1,x-1),2+B*3,A+I/2+.04)}if(o()<.45){const k=[16727406,3725055,16753213,10116095][Math.floor(o()*4)];Bn(a,new K(k),.12,2.2,1.1,T-y*(R/2+.1),2.2+o()*2,A);const B=new ii(k,5.5,22,2);B.position.set(T-y*3,3.2,A),this.scene.add(B)}}for(let _=0;_<18;_++){const y=(o()*2-1)*90,A=-80-o()*40;Bn(n,new K(592398),8+o()*14,20+o()*60,10,y,10+o()*30,A)}const r=da(n),l=new L(r,new Ae({vertexColors:!0,roughness:.8,metalness:.15}));this.scene.add(l);const h=da(a),c=new L(h,new ee({vertexColors:!0}));this.scene.add(c),this.winMesh=c;for(const[_,y]of[[-6,5],[6,-5],[-6,-18],[6,18]]){const A=new L(new ct(.08,.12,6,5),Pt(1776672,{metalness:.6,roughness:.4}));A.position.set(_,3,y),this.scene.add(A);const T=new L(new xt(1.5,.1,.1),A.material);T.position.set(_+(_<0?.7:-.7),5.9,y),this.scene.add(T);const S=new L(new Xt(.16,6),Be(16761466,2.2));S.position.set(_+(_<0?1.4:-1.4),5.85,y),this.scene.add(S);const R=new ii(16757096,8,24,2);R.position.copy(S.position),this.scene.add(R)}this.buildProtagonist();const d=1800,u=new Float32Array(d*3);for(let _=0;_<d;_++)u[_*3]=(o()*2-1)*60,u[_*3+1]=o()*40,u[_*3+2]=(o()*2-1)*60;const m=new Ee;m.setAttribute("position",new Se(u,3));const g=new ms({color:10466504,size:.045,transparent:!0,opacity:.55,depthWrite:!1});this.rain=new xa(m,g),this.scene.add(this.rain);for(let _=0;_<12;_++){const y=new L(new Ni(it(.8,2.6),12),new ee({color:1844273,transparent:!0,opacity:.4}));y.rotation.x=-Math.PI/2,y.position.set(it(-9,9),.235,it(-15,15)),this.scene.add(y)}this.rift=new At;const v=new L(new yi(4,7),new ee({color:9129215,transparent:!0,opacity:.4,blending:Fe,side:ve}));this.rift.add(v),this.riftPlane=v;const p=new L(new Ve(2.6,.08,6,40),Be(12880639,2.5));p.scale.set(1,1.35,1),this.rift.add(p),this.riftTorus=p;const f=be(10116095,18);this.rift.add(f),this.riftGlow=f;const w=new ii(9129215,0,30,2);this.rift.add(w),this.riftLight=w,this.rift.position.set(0,4.5,-9),this.rift.scale.setScalar(.01),this.scene.add(this.rift),this.debris=[];for(let _=0;_<20;_++){const y=new L(new xt(it(.1,.4),it(.1,.4),it(.1,.4)),Pt(2763568,{roughness:.8}));y.position.set(it(-3,3),it(1,5),it(-2,2)),y.visible=!1,this.scene.add(y),this.debris.push({mesh:y,speed:it(.3,1.2),phase:it(0,6)})}this.scene.add(new yh(4939654,1315352,1.15)),this.dir=new Zo(11125480,.95),this.dir.position.set(-10,30,20),this.scene.add(this.dir),this.street=new ii(16760954,7,34,2),this.street.position.set(0,5,2),this.scene.add(this.street)}buildProtagonist(){const t=new At;this.protagonist=t;const e=Pt(12159849),i=Pt(3229276,{roughness:.95}),n=Pt(2764602,{roughness:.95}),a=Pt(13683131),o=Pt(2300695),r=new L(new xt(.5,.62,.3),i);r.position.y=1.2,t.add(r);const l=new L(new Ve(.17,.08,5,10),i);l.position.y=1.52,l.rotation.x=Math.PI/2,t.add(l);const h=new L(new Xt(.19,10,8),e);h.position.y=1.68,t.add(h);const c=new L(new Xt(.2,9,7),o);c.position.y=1.75,c.scale.set(1,.65,1),t.add(c);for(const g of[-1,1]){const v=new L(new ct(.07,.06,.55,6),i);v.position.set(g*.32,1.05,.02),v.rotation.z=g*.1,t.add(v);const p=new L(new Xt(.07,6),e);p.position.set(g*.36,.76,.04),t.add(p);const f=new L(new ct(.09,.075,.58,6),n);f.position.set(g*.14,.5,0),t.add(f);const w=new L(new xt(.16,.12,.3),a);w.position.set(g*.14,.17,.05),t.add(w)}const d=new L(new xt(.09,.17,.02),Be(9419992,1.2));d.position.set(.36,.78,.1),d.rotation.set(-.3,.3,0),t.add(d);const u=be(10475263,1.6);u.position.set(.36,.8,.16),t.add(u);const m=new ii(10475263,.8,4,2);m.position.set(.36,.85,.3),t.add(m),t.position.set(0,0,0),t.rotation.y=Math.PI,this.scene.add(t),this.phoneGlow=u,this.phoneLight=m}update(t){if(this.done)return;this.time+=t;const e=this.time,i=this.rain.geometry.attributes.position;for(let r=0;r<i.count;r++){let l=i.getY(r)-t*(22+r%7);l<0&&(l=40,i.setX(r,(Math.random()*2-1)*60),i.setZ(r,(Math.random()*2-1)*60)),i.setY(r,l)}i.needsUpdate=!0;const n=this.camera;let a,o;if(e<5){const r=e/5;a=new P(8-r*1.5,2.6-r*.4,15-r*3),o=new P(0,1.6,0)}else if(e<9){const r=(e-5)/4;a=new P(6.5-r*4.5,2.2-r*.35,12-r*6),o=new P(0,1.55+r*.2,0)}else if(e<15){const r=(e-9)/6;a=new P(2-r*1,1.85+r*.5,6-r*3.5),o=new P(0,1.6+r*.9,0)}else{const r=Math.min(1,(e-15)/6);a=new P(1-r*.2,2.35+r*1.2,2.5+r*5),o=new P(0,2+r*2.2,-1)}if(this.shake=Math.max(0,this.shake-t*2),this.shake>0&&(a.x+=(Math.random()-.5)*this.shake,a.y+=(Math.random()-.5)*this.shake),n.position.lerp(a,1-Math.exp(-3.2*t)),n.lookAt(o),this.lightning=Math.max(0,this.lightning-t*6),Math.random()<t*.08&&(this.lightning=1),this.lightning>0?this.dir.intensity=.95+this.lightning*4:this.dir.intensity=.95,e>8){const r=Math.min(1,(e-8)/5);this.rift.scale.setScalar(.01+r*1),this.rift.rotation.z=Math.sin(e*.3)*.1,this.riftPlane.material.opacity=.25+r*.45+Math.sin(e*8)*.08,this.riftTorus.rotation.z+=t*.25,this.riftGlow.material.opacity=.2+r*.5,this.riftLight.intensity=r*5,this.rift.position.x=Math.sin(e*.7)*.2,e>10&&(this.shake=Math.max(this.shake,.06+r*.1))}if(e>12){const r=Math.min(1,(e-12)/5);this.protagonist.position.y=r*r*2.4,this.protagonist.rotation.y=Math.PI+r*1.2,this.protagonist.rotation.z=Math.sin(e*2)*.1*r,this.phoneGlow.material.opacity=1-r*.7;for(const l of this.debris){l.mesh.visible=!0;const h=e*l.speed+l.phase;l.mesh.position.set(Math.cos(h)*(2+l.speed*2),1+h*.4%4,Math.sin(h)*(2+l.speed*2)),l.mesh.rotation.x+=t*3,l.mesh.rotation.y+=t*2}}if(e>17&&e<18.2){const r=(e-17)/1.2;this.game.ui.el.fade.classList.add("flash"),this.game.ui.el.fade.style.opacity=String(r)}else e>=18.2&&e<20.5?(this.game.ui.el.fade.classList.add("on"),this.game.ui.el.fade.style.opacity="1",this.game.ui.setCinematicLine("")):e>=20.5&&(this.game.ui.el.fade.classList.remove("flash"),this.game.ui.el.fade.classList.remove("on"),this.game.ui.el.fade.style.opacity="0");for(;this.captionIndex<this.captions.length&&e>=this.captions[this.captionIndex][0];){const r=this.captions[this.captionIndex++];r[1]&&e<18.2&&this.game.ui.setCinematicLine(r[1]),this.captionIndex===4&&this.game.ui.showCinematicTitle(!1)}e>18.2&&this.captionIndex<this.captions.length&&(this.captionIndex=this.captions.length,this.game.ui.setCinematicLine("")),e>this.duration&&this.finish()}finish(){this.done||(this.done=!0,this.game.ui.el.fade.classList.remove("flash"),this.game.ui.el.fade.classList.remove("on"),this.game.ui.el.fade.style.opacity="0",this.game.endIntro())}dispose(){this.scene.traverse(t=>{var e,i;if(t.geometry&&t.geometry.dispose(),t.material){const n=Array.isArray(t.material)?t.material:[t.material];for(const a of n)(e=a.map)==null||e.dispose(),(i=a.dispose)==null||i.call(a)}})}}const wg=new Xt(.09,5,4),Mg=new va(.1),Sg=new xt(.12,.12,.12);class bg{constructor(t,e){this.game=t,this.scene=e,this.particles=[],this.rings=[],this.arcs=[],this.telegraphs=[],this.spikes=[]}spawnParticles(t,e,i,n={}){const{speed:a=3,life:o=.7,size:r=1,gravity:l=6,spread:h=1,shape:c="sphere",glow:d=!1}=n;if(this.particles.length>380)for(let u=0;u<e;u++){const m=this.particles.shift();m&&this.scene.remove(m.mesh)}for(let u=0;u<e;u++){const m=c==="shard"?Mg:c==="cube"?Sg:wg,g=new ee({color:i,transparent:!0,opacity:1,blending:d?Fe:dn,depthWrite:!1}),v=new L(m,g);v.position.set(t.x+it(-.3,.3),t.y+it(-.2,.4),t.z+it(-.3,.3));const p=(.4+Math.random()*.9)*r;v.scale.setScalar(p),this.scene.add(v);const f=it(0,Math.PI*2),w=it(.2,1.4)*a,_=new P(Math.cos(f)*it(.2,1)*a*h,w,Math.sin(f)*it(.2,1)*a*h);this.particles.push({mesh:v,mat:g,v:_,life:o*it(.7,1.3),maxLife:o,gravity:l,size:p})}}blood(t,e=10,i=8003359){this.spawnParticles(t,e,i,{speed:3.2,life:.65,gravity:12,shape:"sphere"})}sparks(t,e=8){this.spawnParticles(t,e,16767114,{speed:4.4,life:.35,gravity:8,size:.8,glow:!0,shape:"cube"})}souls(t,e=18){this.spawnParticles(t,e,10479824,{speed:1.6,life:1.3,gravity:-1.5,size:1.1,glow:!0,shape:"sphere"})}heal(t){this.spawnParticles(t.clone().add(new P(0,1,0)),18,16761962,{speed:1.2,life:1.1,gravity:-2,glow:!0})}ring(t,e=16742970,i={}){const{radius:n=8,duration:a=.7,height:o=.08,width:r=.18,inner:l=0}=i,h=new Ii(.7,1,48),c=new ee({color:e,transparent:!0,opacity:.85,side:ve,depthWrite:!1,blending:Fe}),d=new L(h,c);d.rotation.x=-Math.PI/2,d.position.set(t.x,bt(t.x,t.z)+o,t.z),this.scene.add(d),this.rings.push({mesh:d,mat:c,t:0,duration:a,radius:n})}swirl(t,e=10247423,i=7){this.ring(t,e,{radius:i,duration:1.1,width:.35})}arc(t,e,i=8,n=16730666){const a=new Ii(.8,1,32,1,0,Math.PI*1.15),o=new ee({color:n,transparent:!0,opacity:.8,side:ve,depthWrite:!1,blending:Fe}),r=new L(a,o);r.rotation.x=-Math.PI/2,r.rotation.z=-e-Math.PI*.575+Math.PI/2,r.position.set(t.x,bt(t.x,t.z)+.1,t.z),r.scale.setScalar(i),this.scene.add(r),this.arcs.push({mesh:r,mat:o,t:0,duration:.45,range:i})}telegraph(t,e,i,n,a){const o=bt(t.x,t.z)+.07,r=new L(new Ni(e,30),new ee({color:n,transparent:!0,opacity:.18,side:ve,depthWrite:!1,blending:Fe}));r.rotation.x=-Math.PI/2,r.position.set(t.x,o,t.z),this.scene.add(r);const l=new L(new Ii(e*.9,e,32),new ee({color:n,transparent:!0,opacity:.8,side:ve,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.set(t.x,o+.01,t.z),this.scene.add(l),this.telegraphs.push({disc:r,ring:l,t:0,duration:i,radius:e,color:n,onDone:a,pos:t.clone()})}spikes(t,e=10247423,i=2.1){const n=bt(t.x,t.z);for(let a=0;a<7;a++){const o=a/7*Math.PI*2+it(-.3,.3),r=it(.2,i*.7),l=it(1.4,3.4),h=new L(new de(it(.14,.32),l,5),new Ae({color:3878206,emissive:e,emissiveIntensity:.5,roughness:.8}));h.position.set(t.x+Math.cos(o)*r,n+l/2,t.z+Math.sin(o)*r),h.rotation.z=it(-.2,.2),h.scale.y=.02,this.scene.add(h),this.spikes.push({mesh:h,t:0,duration:.9,targetScale:1}),this.sparks(new P(h.position.x,n+.4,h.position.z),3)}}rootRing(t,e=16742970){const i=bt(t.x,t.z);for(let n=0;n<14;n++){const a=n/14*Math.PI*2,o=it(4,9),r=new L(new de(.18,it(1.2,2.8),4),new Ae({color:3943200,emissive:e,emissiveIntensity:.25,roughness:1}));r.position.set(t.x+Math.cos(a)*o,i+.8,t.z+Math.sin(a)*o),r.rotation.z=it(-.6,.6),r.scale.y=.02,this.scene.add(r),this.spikes.push({mesh:r,t:0,duration:1,targetScale:1})}}update(t){var e;for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];n.life-=t,n.v.y-=n.gravity*t,n.mesh.position.addScaledVector(n.v,t),n.v.multiplyScalar(1-t*.8),n.mat.opacity=Math.max(0,n.life/n.maxLife),n.mesh.scale.setScalar(n.size*Math.max(.2,n.life/n.maxLife)),n.life<=0&&(this.scene.remove(n.mesh),n.mat.dispose(),this.particles.splice(i,1))}for(let i=this.rings.length-1;i>=0;i--){const n=this.rings[i];n.t+=t;const a=n.t/n.duration;n.mesh.scale.setScalar(1+a*n.radius),n.mat.opacity=Math.max(0,.85*(1-a)),a>=1&&(this.scene.remove(n.mesh),n.mat.dispose(),this.rings.splice(i,1))}for(let i=this.arcs.length-1;i>=0;i--){const n=this.arcs[i];n.t+=t;const a=n.t/n.duration;n.mat.opacity=Math.max(0,.75*(1-a)),n.mesh.scale.setScalar(n.range*(.6+a*.4)),a>=1&&(this.scene.remove(n.mesh),n.mat.dispose(),this.arcs.splice(i,1))}for(let i=this.telegraphs.length-1;i>=0;i--){const n=this.telegraphs[i];n.t+=t;const a=Math.min(1,n.t/n.duration);n.disc.material.opacity=.12+a*.22,n.ring.scale.setScalar(.86+Math.sin(n.t*12)*.03),n.ring.material.opacity=.5+Math.sin(n.t*10)*.3,a>=1&&((e=n.onDone)==null||e.call(n),this.scene.remove(n.disc),this.scene.remove(n.ring),n.disc.geometry.dispose(),n.disc.material.dispose(),n.ring.geometry.dispose(),n.ring.material.dispose(),this.telegraphs.splice(i,1))}for(let i=this.spikes.length-1;i>=0;i--){const n=this.spikes[i];n.t+=t;const a=Math.min(1,n.t/.2);n.mesh.scale.y=a*n.targetScale,n.t>n.duration&&(n.mesh.position.y-=t*5,n.t>n.duration+.4&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.spikes.splice(i,1)))}}}class Eg{constructor(t){this.canvas=t,this.audio=Zm,this.input=new Km(t),this.ui=new Xm(this),this.mode="loading",this.state=ea(),this.uiBlocking=!1,this.cinematic=!1,this.bossIntro=null,this.bossIntroTime=0,this.clock=new Fm,this.time=0,this.playtime=0,this.enemies=[],this.npcs=[],this.projectiles=[],this.lockTarget=null,this.lastInputX=0,this.lastInputY=0,this.hitstopTimer=0,this.slowmoTimer=0,this.slowmoScale=1,this.shakeAmount=0,this.combatLog=[],this.hasLocket=!1,this.bloodstain=null,this.boss=null,this.intro=null,this.uiBlockingKind=null,this.attractTime=0,this.settings=tg(),this.deathTimer=0,this.deathScreenShown=!1,this.rewardGiven=!1,this.pendingRewards=[],this._lastPointerHint=0,this.interactTarget=null,this.currentShrine=null,this.chapterEndingShown=!1,this._hudHidden=!1,this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.loop=this.loop.bind(this),this._lastTime=performance.now()}async init(){this.renderer=new Pm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.4)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=oi,this.renderer.toneMapping=Hl,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!1,this.scene=new vh,this.scene.fog=new ma(10134682,.0068),this.camera=new $e(58,window.innerWidth/window.innerHeight,.08,600),this.camera.position.set(0,5,100);const t=async(i,n,a)=>{this.ui.setLoading(i,n),await new Promise(o=>setTimeout(o,30)),a==null||a()};await t(.08,"The kingdom remembers its shape…"),await t(.22,"Growing the First Grove…",()=>{this.world=gg(this.scene)}),await t(.48,"Casting the first shadows…",()=>{this.effects=new bg(this,this.scene)}),await t(.62,"Waking the hollow things…");const e=tr();e&&(this.state=e),this.applyStateToPlayer(!0),await t(.76,"Lighting the shrines…",()=>{this.resetActors()}),await t(.9,"Sharpening the pipe…"),await t(1,"The crown is waiting."),this.ui.updateTitleSlot(Dl(),Ul()),this.ui.finishLoading(),this.ui.showTitle(),this.ui.hideHUD(),this.mode="title",this.attractCamera=!0,this.audio.setTheme("none"),window.__HOLLOW_CROWN__=this,requestAnimationFrame(this.loop)}resize(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}applyStateToPlayer(t=!0){var i,n;this.player||(this.player=new xg(this,this.scene)),this.player.stats=this.state.player,this.player.setWeapon(this.state.player.equippedWeapon),this.player.setArmorVisual(),this.player.recalcStats(t),t||(this.player.hp=De(this.player.maxHp*(this.state.player.hpRatio??1),this.player.maxHp*.25,this.player.maxHp),this.player.focus=this.player.maxFocus),this.player.flaskUses=this.state.player.flaskUses??this.state.player.maxFlask;const e=this.state.player.pos||{x:7,z:92};this.player.pos.set(e.x,bt(e.x,e.z),e.z),this.player.yaw=this.state.player.yaw??Math.PI,this.player.pivot.rotation.set(0,0,0),this.player.root.position.copy(this.player.pos),this.player.root.rotation.y=this.player.yaw,this.ui.setMotes(this.state.player.motes),this.ui.setWeapon(((i=_i[this.state.player.equippedWeapon])==null?void 0:i.name)||"Metal Pipe"),this.ui.setArmor(((n=Li[this.state.player.equippedArmor])==null?void 0:n.name)||"Modern Hoodie"),this.ui.setRegion(Rl.name,Rl.sub),this.ui.setObjective(this.objectiveText())}resetActors(){var t,e,i,n,a,o,r,l,h;for(const c of this.enemies)(t=c.dispose)==null||t.call(c);this.enemies=[],this.boss&&((i=(e=this.boss).dispose)==null||i.call(e),this.boss=null);for(const c of this.npcs)(n=c.root)!=null&&n.parent&&c.root.parent.remove(c.root);this.npcs=[];for(const c of this.projectiles)c.mesh.parent&&c.mesh.parent.remove(c.mesh);this.projectiles=[],(o=(a=this.bloodstain)==null?void 0:a.mesh)!=null&&o.parent&&this.bloodstain.mesh.parent.remove(this.bloodstain.mesh),this.bloodstain=null,this.lockTarget=null,this.hasLocket=!1;for(const c of this.world.chests){const d=(r=this.state.openedChests)==null?void 0:r.includes(c.id);c.opened=!!d,c.lid.rotation.x=d?-1.1:-.08,c.glow.visible=!d,c.group.userData.opened=!!d}for(const c of this.world.interactables)if(c.kind==="lore"&&(c.taken=this.state.lore.includes(c.id),c.group.visible=!c.taken),c.kind==="mote"){const d=this.world.motes.indexOf(c);c.taken=(l=this.state.collectedMotes)==null?void 0:l.includes("mote_"+d),c.group.visible=!c.taken}for(let c=0;c<this.world.motes.length;c++){const d=this.world.motes[c];d.taken=(h=this.state.collectedMotes)==null?void 0:h.includes("mote_"+c),d.group.visible=!d.taken}this.world.locket.taken=this.hasLocket,this.world.locket.group.visible=this.state.quests.merchantQuest===1&&!this.hasLocket,this.world.echo.group.visible=!1,this.world.echo.taken=!0;for(const c of this.world.spawns)c.elite&&this.state.flags.eliteDefeated||this.spawnEnemy(c.type,c);this.state.flags.bossDefeated?(this.world.gate.group.visible=!0,this.setGateColor(10485732)):(this.boss=new kl(this),this.ui.hideBossBar(),this.world.gate.group.visible=!0,this.setGateColor(13088511));for(const c of this.world.npcSpots)this.npcs.push(new Fl(this,c.id,c.name,c.x,c.z,c.yaw));this.state.flags.bossDefeated&&this.createEcho(),this.ui.setMotes(this.state.player.motes),this.bossIntro&&(this.bossIntro=null,this.cinematic=!1,this.ui.hideCinematic())}createEcho(){const t=new Fl(this,"echo","Malgraven, the Last Seer",0,-98,0);this.npcs.push(t),this.echoNpc=t,this.world.echo.group.visible=!0}setGateColor(t){const e=this.world.gate;e.ring.material.color.setHex(t),e.glow.material.color.setHex(t),e.disc.material.color.setHex(t),e.group.children.forEach(i=>{var n;(n=i.material)!=null&&n.color&&i!==e.ring&&i!==e.disc&&i.material.color.setHex(t)})}startNewGame(){this.audio.init(),this.audio.setTheme("title"),this.state=ea(),this.applyStateToPlayer(!0),this.resetActors(),this.mode="intro",this.ui.hideTitle(),this.ui.showCinematic(),this.ui.showCinematicTitle(!0),this.ui.el["cinematic-title"].querySelector("p").textContent="Chapter I · The Forgotten Shire",this.ui.setCinematicLine(""),this.intro=new yg(this),this.introTime=0,this.ui.el.fade.classList.add("on"),this.ui.el.fade.style.opacity="1",setTimeout(()=>{this.mode==="intro"&&(this.ui.el.fade.classList.remove("on"),this.ui.el.fade.style.opacity="0")},140),this.ui.setObjective("Find the First Shrine beneath the hollow tree."),this.player.respawn({x:7,z:92}),this.player.invuln=999,this.input.releaseLock(),this.uiBlocking=!1,this.cinematic=!0,clearTimeout(this._titleTimer),this._titleTimer=setTimeout(()=>this.ui.showCinematicTitle(!1),4200)}endIntro(){var t;this.mode==="intro"&&(clearTimeout(this._titleTimer),(t=this.intro)==null||t.dispose(),this.intro=null,this.mode="play",this.cinematic=!1,this.ui.hideCinematic(),this.ui.showHUD(),this.ui.el.fade.classList.add("on"),setTimeout(()=>{this.ui.el.fade.classList.remove("on"),this.ui.el.fade.style.opacity=""},50),this.audio.setTheme("explore"),this.state.flags.introSeen=!0,this.player.invuln=1.5,this.player.pos.set(7,bt(7,92),92),this.player.yaw=Math.PI,this.player.root.position.copy(this.player.pos),this.player.root.rotation.y=this.player.yaw,this.cameraRig.yaw=0,this.cameraRig.pitch=.2,this.setCameraImmediate(),this.ui.banner("THE FORGOTTEN SHIRE","Chapter I · Eldoria",5200),this.ui.subtitle("You wake beneath a tree that was not there a moment ago. The rain has followed you.",5),this.ui.setObjective(this.objectiveText()),this.ui.hint("WASD to move · Mouse to look · Space to roll · Click to capture the mouse",9),this.saveGame(),this.updateTitleSlot())}continueGame(){const t=tr();this.audio.init(),t?this.state=t:this.state=ea(),this.ui.hideTitle(),this.ui.showHUD(),this.ui.el.fade.classList.add("on"),setTimeout(()=>{this.ui.el.fade.classList.remove("on")},60),this.applyStateToPlayer(!1),this.resetActors(),this.mode="play",this.cinematic=!1,this.uiBlocking=!1,this.audio.setTheme("explore");const e=this.world.shrines.find(i=>i.id===this.state.lastShrine)||this.world.shrines[0];e&&(this.player.pos.set(e.x,bt(e.x,e.z+3),e.z+3),this.player.root.position.copy(this.player.pos)),this.cameraRig.yaw=this.player.yaw+Math.PI,this.cameraRig.pitch=.2,this.setCameraImmediate(),this.ui.setObjective(this.objectiveText()),this.ui.banner("THE FORGOTTEN SHIRE","You return to the last flame.",4e3),this.ui.hint("Click to capture the mouse",5),this.setCameraImmediate(),this.updateTitleSlot()}returnToTitle(){this.saveGame(),this.mode="title",this.attractCamera=!0,this.ui.showTitle(),this.ui.hideHUD(),this.ui.closeMenuUI(),this.ui.hideEnding(),this.uiBlocking=!1,this.cinematic=!1,this.input.releaseLock(),this.audio.setTheme("title"),this.lockTarget=null,this.updateTitleSlot(),this.mode="title",this.player.respawn({x:7,z:92}),this.player.invuln=0}updateTitleSlot(){this.ui.updateTitleSlot(Dl(),Ul())}saveGame(){!this.player||this.mode==="intro"||(this.state.player.pos={x:this.player.pos.x,z:this.player.pos.z},this.state.player.yaw=this.player.yaw,this.state.player.hpRatio=De(this.player.hp/this.player.maxHp,.05,1),this.state.player.flaskUses=this.player.stats.flaskUses,this.state.playtime=(this.state.playtime||0)+this.playtime,this.playtime=0,this.currentShrine&&(this.state.lastShrine=this.currentShrine),Qm(this.state))}saveAndQuit(){this.saveGame(),this.returnToTitle(),this.audio.ui()}loop(t){var n;requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this._lastTime)/1e3||.016);this._lastTime=t,this.input.update(),this.lastInputX=this.input.moveX,this.lastInputY=this.input.moveY,this.hitstopTimer>0&&(this.hitstopTimer=Math.max(0,this.hitstopTimer-e)),this.slowmoTimer>0&&(this.slowmoTimer=Math.max(0,this.slowmoTimer-e));let i=e;if(this.hitstopTimer>0?i=e*.03:this.slowmoTimer>0&&(i=e*this.slowmoScale),this.time+=e,this.mode==="intro"&&this.intro){const a=this.intro;a.update(e),this.introTime+=e,this.input.skip&&this.introTime>1.2&&a.finish(),this.ui.update(e),this.mode==="intro"&&this.intro===a&&this.renderer.render(a.scene,a.camera),this.input.endFrame();return}if(this.mode==="title"){this.updateTitleScene(e),this.ui.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.mode==="ending"){this.updateSceneAmbient(e),this.ui.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.mode==="dead"){if(this.deathTimer+=e,this.updateSceneAmbient(e),this.boss&&this.boss.active&&this.boss.update(i,this.player),this.player.updateDeath(e),this.updateProjectiles(i),this.effects.update(i),this.updateCamera(i),this.ui.update(e),this.ui.updateEnemyBars(this.enemies),!this.deathScreenShown&&this.deathTimer>1.4){this.deathScreenShown=!0;const a=this._lostMotes||0;this.ui.showDeath(a,this.deathLine())}this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.uiBlocking){this.ui.currentMenu&&(this.input.pause||this.input.confirm)&&this.input.pause&&this.closeMenu(),this.updateSceneAmbient(e),this.ui.update(e),this.ui.updateEnemyBars(this.enemies),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.bossIntro){this.updateBossIntro(e),this.updateSceneAmbient(e),(n=this.boss)==null||n.update(e,this.player),this.player.animTime+=e,this.player.animate(e),this.ui.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.cinematic){this.updateSceneAmbient(e),this.ui.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(this.input.pause){this.openPause(),this.input.endFrame();return}this.playtime+=e,this.player.update(i,this.input,this.cameraRig.yaw,this.ui),this.updateLock();for(const a of this.enemies)(a.alive||a.deathTimer<5.2)&&a.update(i,this.player);this.boss&&this.boss.update(i,this.player),this.updateProjectiles(i),this.effects.update(i),this.world.update(this.time,e),this.updatePickups(),this.updateInteract(),this.updateCamera(i),this.updateBossTriggers(),this.ui.update(e),this.ui.updateVitals(this.player),this.ui.updateEnemyBars(this.enemies),this.ui.updateFloatTexts(e),this.boss&&this.boss.active&&this.ui.updateBossBar(),this.ui.eliteRef&&this.ui.updateEliteBar(),this.lockTarget?this.ui.showLock(this.lockTarget.pos.clone().add(new P(0,this.lockTarget.isBoss?4:1.4,0))):this.ui.showLock(null),this.updateContextual(),this.renderer.render(this.scene,this.camera),this.input.endFrame()}updateSceneAmbient(t){this.world.update(this.time,t);for(const e of this.enemies)e.alive||e.updateDeath(t);this.boss&&this.boss.dead&&this.boss.updateDeath(t);for(const e of this.npcs)e.update(t,this.time);this.player.animTime+=t,this.mode!=="dead"&&this.player.animate(t),this.effects.update(t)}updateTitleScene(t){this.attractTime+=t,this.world.update(this.time,t);for(const l of this.npcs)l.update(t,this.time);this.player&&(this.player.animTime+=t,this.player.animate(t));const e=.35+Math.sin(this.attractTime*.04)*.3,i=new P(-2,2.4,76),n=16,a=i.x+Math.cos(e)*n,o=i.z+Math.sin(e)*n,r=4.8+Math.sin(this.attractTime*.15)*.5;this.camera.position.set(a,r,o),this.camera.lookAt(i),this.camera.fov=52,this.camera.updateProjectionMatrix()}get cameraRig(){return this._rig||(this._rig={yaw:0,pitch:.2,distance:5.9}),this._rig}updateCamera(t){if(this.intro||this.bossIntro)return;const e=this.cameraRig,i=this.player;if(!i)return;this.input.pointerLocked&&(e.yaw-=this.input.mouseDX*this.input.sensitivity*(this.settings.sensitivity||1),e.pitch+=this.input.mouseDY*this.input.sensitivity*(this.settings.sensitivity||1)*1.1),this.input.lookX&&(e.yaw-=this.input.lookX*t*2.6),this.input.lookY&&(e.pitch+=this.input.lookY*t*1.6),e.pitch=De(e.pitch,.03,.72);const n=i.pos.clone().add(new P(0,1.62,0));let a=e.distance;if(this.input.sprintHeld&&(i.vel.x||i.vel.z)&&!this.lockTarget&&(a+=.35),this.lockTarget&&this.lockTarget.alive){const d=this.lockTarget,u=Math.atan2(d.pos.x-i.pos.x,d.pos.z-i.pos.z)+Math.PI;e.yaw=fi(e.yaw,u,5,t),e.pitch=X(e.pitch,d.isBoss?.18:.22,3,t);const m=d.pos.clone().add(new P(0,d.isBoss?4.2:1.1,0));n.lerp(m,.22)}else!this.input.pointerLocked&&!i.sprinting&&(this.input.moveX||this.input.moveY);const o=Math.cos(e.pitch)*a,r=new P(Math.sin(e.yaw)*o,Math.sin(e.pitch)*a+.35,Math.cos(e.yaw)*o);let l=n.clone().add(r);const h=bt(l.x,l.z);l.y<h+.7&&(l.y=h+.7);for(const d of this.world.colliders){const u=l.x-d.x,m=l.z-d.z;if(Math.hypot(u,m)<d.r+.35){const g=Math.hypot(u,m)||1;l.x=d.x+u/g*(d.r+.4),l.z=d.z+m/g*(d.r+.4),l.y=Math.max(l.y,h+1.2)}}this.shakeAmount=Math.max(0,this.shakeAmount-t*2.5),this.shakeAmount>0&&(l.x+=(Math.random()-.5)*this.shakeAmount,l.y+=(Math.random()-.5)*this.shakeAmount,l.z+=(Math.random()-.5)*this.shakeAmount),this.camera.position.lerp(l,1-Math.exp(-10*t));const c=n.clone();this.lockTarget&&this.lockTarget.alive&&c.lerp(this.lockTarget.pos.clone().add(new P(0,this.lockTarget.isBoss?4.2:1.2,0)),.55),this.camera.lookAt(c),this.camera.fov=xe(this.camera.fov,58,1-Math.exp(-4*t)),this.camera.updateProjectionMatrix(),this.cameraRig.yaw=e.yaw}setCameraImmediate(){const t=this.cameraRig,e=this.player;if(!e)return;const i=e.pos.clone().add(new P(0,1.62,0)),n=Math.cos(t.pitch)*t.distance,a=new P(Math.sin(t.yaw)*n,Math.sin(t.pitch)*t.distance+.35,Math.cos(t.yaw)*n);this.camera.position.copy(i.clone().add(a)),this.camera.lookAt(i),this.camera.fov=58,this.camera.updateProjectionMatrix()}shake(t){this.shakeAmount=Math.max(this.shakeAmount,t)}hitstop(t){this.hitstopTimer=Math.max(this.hitstopTimer,t)}slowmo(t,e){this.slowmoScale=t,this.slowmoTimer=e}updateBossTriggers(){if(!this.boss||this.state.flags.bossDefeated||this.bossIntro)return;(Math.hypot(this.player.pos.x-re.x,this.player.pos.z-re.z)<re.r-1||this.player.pos.z<-74)&&this.beginBossEncounter()}beginBossEncounter(){!this.boss||this.state.flags.bossDefeated||this.bossIntro||(this.bossIntro={t:0},this.bossIntro.t=0,this.cinematic=!0,this.input.releaseLock(),this.lockTarget=null,this.boss.beginIntro(),this.ui.showCinematic(),this.ui.setCinematicLine('<span style="font-family:var(--serif);font-size:30px;letter-spacing:.18em;font-style:normal;color:#e7cd92">THE HOLLOW WOODSMAN</span><br><span style="font-size:12px;letter-spacing:.28em;color:#9d917b">KEEPER OF THE FIRST GROVE</span>'),this.ui.setObjective("Defeat the Hollow Woodsman."),this.audio.setTheme("boss"),this.audio.roar(),this.shake(.4))}updateBossIntro(t){const e=this.bossIntro;if(!e)return;e.t+=t,this.bossIntroTime=e.t;const i=this.boss,n=e.t,a=De(n/7.5,0,1),o=-.55+a*1.35,r=19-a*8,l=i.pos.clone().add(new P(Math.sin(o)*r,5.5+Math.sin(a*Math.PI)*3,Math.cos(o)*r));l.y=Math.max(l.y,bt(l.x,l.z)+1.2),this.camera.position.lerp(l,1-Math.exp(-2.5*t)),this.camera.lookAt(i.pos.clone().add(new P(0,4.4,0))),this.camera.fov=xe(this.camera.fov,46,1-Math.exp(-2*t)),this.camera.updateProjectionMatrix(),n>4.9&&!i.active&&(i.activate(),this.ui.setCinematicLine('<span style="font-family:var(--serif);font-size:22px;letter-spacing:.2em;font-style:normal;color:#e7cd92">THE GROVE HAS NOT FORGOTTEN YOU.</span>'),this.audio.roar(),this.shake(.7)),(n>7.4||this.input.skip&&n>1)&&(i.active||i.activate(),this.endBossIntro())}endBossIntro(){this.bossIntro=null,this.cinematic=!1,this.ui.hideCinematic(),this.ui.showHUD(),this.ui.setObjective("Defeat the Hollow Woodsman."),this.ui.hint("Lock on with Tab · Roll through his attacks · Punish after the tree flares",7),this.cameraRig.yaw=Math.atan2(this.boss.pos.x-this.player.pos.x,this.boss.pos.z-this.player.pos.z)+Math.PI,this.setCameraImmediate(),this.audio.setTheme("boss"),this.input.requestLock()}updatePickups(){const t=this.player;for(let e=0;e<this.world.motes.length;e++){const i=this.world.motes[e];i.taken||Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<2.2&&(i.taken=!0,i.group.visible=!1,this.state.collectedMotes||(this.state.collectedMotes=[]),this.state.collectedMotes.push("mote_"+e),this.addMotes(i.amount,i.group.position),this.audio.pickup())}if(this.world.locket&&!this.world.locket.taken&&this.state.quests.merchantQuest===1){const e=this.world.locket;Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<2.4&&(e.taken=!0,e.group.visible=!1,this.hasLocket=!0,this.state.quests.merchantQuest=2,this.ui.toast("Wren's Locket recovered","gold"),this.ui.floatText(e.group.position,"WREN'S LOCKET","item"),this.audio.pickup())}if(this.bloodstain){const e=this.bloodstain;Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<2.4&&(this.addMotes(e.amount,e.mesh.position),this.ui.toast(`Recovered ${e.amount} motes`,"gold"),this.audio.souls(),e.mesh.parent&&e.mesh.parent.remove(e.mesh),this.bloodstain=null)}}updateInteract(){const t=this.player;let e=null,i=1e9;const n=(a,o,r,l)=>{const h=Math.hypot(t.pos.x-a.x,t.pos.z-a.z);h<o&&h<i&&(i=h,e={obj:a,text:r,action:l})};for(const a of this.npcs)n(a,3.2,`Speak with ${a.id==="marrow"?"Marrow":a.id==="wisp"?"the Wisp":"the Seer's Echo"}`,()=>this.openDialogue(a));for(const a of this.world.shrines)n(a,4.4,`Rest at ${a.name}`,()=>this.openShrine(a));for(const a of this.world.chests)a.opened||n(a,2.9,"Open the chest",()=>this.openChest(a));for(const a of this.world.interactables)a.kind==="lore"&&!a.taken&&n(a,2.7,"Read the recovered page",()=>this.readLore(a));if(this.world.gate.group.visible){const a=this.world.gate;n(a,4.8,this.state.flags.bossDefeated?"Touch the Weeping Gate":"Enter the First Grove",()=>this.useGate())}this.bloodstain&&n(this.bloodstain,2.8,"Recover your lost motes",()=>{this.addMotes(this.bloodstain.amount,this.bloodstain.mesh.position),this.audio.souls(),this.bloodstain.mesh.parent&&this.bloodstain.mesh.parent.remove(this.bloodstain.mesh),this.bloodstain=null}),this.interactTarget=e,this.ui.setInteract(e?e.text:null),this.input.interact&&e&&(e.action(),this.input.consumePressed("KeyE"),this.input.consumePressed("GP2"))}tryInteract(){this.interactTarget&&this.interactTarget.action()}openChest(t){if(t.opened)return;t.opened=!0,t.lid.rotation.x=-1.1,t.glow.visible=!1,this.state.openedChests||(this.state.openedChests=[]),this.state.openedChests.push(t.id),this.audio.pickup(),this.ui.toast("Chest opened","gold");const e={chest_sword:()=>{this.addWeapon("rustySword"),this.addMotes(160)},chest_armor:()=>{this.addArmor("leather"),this.addItem("emberBomb",2)},chest_greatsword:()=>{this.addWeapon("greatsword")},chest_staff:()=>{this.addWeapon("staff"),this.unlockSpell(),this.addItem("emberBomb",1)}}[t.id];e==null||e()}readLore(t){if(t.taken)return;t.taken=!0,t.group.visible=!1,this.state.lore.includes(t.id)||this.state.lore.push(t.id),this.audio.pickup();const e=Qo.find(i=>i.id===t.id);this.ui.toast(`Recovered: ${(e==null?void 0:e.title)||"a torn page"}`,"gold"),this.ui.floatText(t.group.position,"PAGE RECOVERED","item"),this.state.lore.length===3&&(this.ui.toast("The truth stirs. The Wisp will want to speak with you.","gold"),this.ui.banner("THE VEIL THINS","Three pages of Eldoria's truth recovered. A third path is now visible.",5e3)),this.openLoreUI(t.id)}openLoreUI(t){this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.ui.showLore(t),this.ui.currentMenu={title:"LORE",lore:!0}}openDialogue(t){this.uiBlocking=!0,this.uiBlockingKind="dialogue",this.input.releaseLock(),this.ui.openDialogue(t),this.audio.ui()}closeDialogue(){this.uiBlocking=!1,this.uiBlockingKind=null,this.ui.dialogueState=null,this.ui.el.dialogue.classList.add("hidden")}dialogueAction(t,e){if(t==="close"){this.ui.closeDialogue();return}if(t==="shop"){this.ui.closeDialogue(),this.openShop();return}if(t==="quest_accept"){this.state.quests.merchantQuest=1,this.world.locket.group.visible=!0,this.ui.toast("Quest accepted: A Silver Bird","gold"),this.ui.setObjective("Find Wren's locket by the graves west of the village."),this.saveGame(),this.ui.closeDialogue();return}if(t==="quest_complete"){if(!this.hasLocket){this.ui.closeDialogue();return}this.state.quests.merchantQuest=3,this.addMotes(600),this.addArmor("leather"),this.ui.toast("Quest complete: A Silver Bird","gold"),this.ui.toast("Received Traveler's Jerkin","gold"),this.ui.banner("A SMALL KINDNESS","Marrow will remember this.",4e3),this.ui.setObjective(this.objectiveText()),this.saveGame(),this.ui.closeDialogue();return}if(t==="endings"){this.ui.closeDialogue(),this.openEndings();return}}openShrine(t){var i;this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.currentShrine=t.id;const e=`
      <div class="menu-columns">
        <div>
          <div class="panel-title">${t.name.toUpperCase()}</div>
          <p style="font-size:14px;line-height:1.65;color:#a99e88;font-style:italic">The flame bends toward you. Somewhere beneath the ash, something old is listening.</p>
          <div class="stat-row" style="margin-top:16px"><span>Level</span><b>${this.state.player.level}</b></div>
          <div class="stat-row"><span>Motes</span><b>${Math.floor(this.state.player.motes).toLocaleString("en-US")}</b></div>
          <div class="stat-row"><span>Flask</span><b>${((i=this.player)==null?void 0:i.stats.flaskUses)??0} / ${this.state.player.maxFlask}</b></div>
          <div class="stat-row"><span>Deaths</span><b>${this.state.deaths}</b></div>
          <div class="panel-title" style="margin-top:22px">REST</div>
          <p style="font-size:12px;line-height:1.6;color:#857d6d;font-style:italic">Resting restores health and flask charges, and calls the hollow things back to their places. All ordinary enemies will return.</p>
        </div>
        <div>
          <div class="panel-title">THE FLAME</div>
          <div class="shrine-actions">
            <button class="menu-btn primary" data-sh="rest">REST &amp; SAVE</button>
            <button class="menu-btn" data-sh="level">LEVEL UP</button>
            <button class="menu-btn" data-sh="leave">LEAVE</button>
          </div>
          <p class="shrine-note">“The shrine remembers. That is all a shrine can do.”</p>
        </div>
      </div>`;this.ui.openMenu(t.name.toUpperCase(),e,`<span>${this.objectiveText()}</span><span>E to close</span>`,!0),this.ui.el["menu-body"].querySelector('[data-sh="rest"]').addEventListener("click",()=>this.restAtShrine(t)),this.ui.el["menu-body"].querySelector('[data-sh="level"]').addEventListener("click",()=>{this.ui.showLevelUp()}),this.ui.el["menu-body"].querySelector('[data-sh="leave"]').addEventListener("click",()=>this.closeMenu()),this.audio.ui()}restAtShrine(t){this.currentShrine=t.id,this.state.lastShrine=t.id,this.state.flags.firstShrine=!0,this.player.hp=this.player.maxHp,this.player.stamina=this.player.maxStamina,this.player.focus=this.player.maxFocus,this.player.stats.flaskUses=this.state.player.maxFlask,this.state.player.hpRatio=1,this.player.pos.set(t.x,bt(t.x,t.z+3.3),t.z+3.3),this.player.root.position.copy(this.player.pos),this.player.vel.set(0,0,0),this.resetEnemiesOnly(),this.boss&&!this.state.flags.bossDefeated&&this.resetBoss(),this.state.player.pos={x:this.player.pos.x,z:this.player.pos.z},this.saveGame(),this.ui.closeMenuUI(),this.uiBlocking=!1,this.uiBlockingKind=null,this.ui.banner(t.name.toUpperCase(),"The flame is lit. You are restored.",4e3),this.ui.toast("Game saved","gold"),this.audio.levelup(),this.ui.setObjective(this.objectiveText()),this.input.requestLock()}resetEnemiesOnly(){var t;for(const e of this.enemies)(t=e.dispose)==null||t.call(e);this.enemies=[];for(const e of this.world.spawns)e.elite&&this.state.flags.eliteDefeated||this.spawnEnemy(e.type,e);this.ui.hideEliteBar()}levelUp(t){const e=this.levelCost(),i=this.state.player;return i.motes<e?(this.ui.toast("Not enough motes","blood"),!1):(i.motes-=e,i[t]++,i.level++,this.player.recalcStats(!1),this.player.hp=Math.min(this.player.maxHp,this.player.hp+this.player.maxHp*.18),this.ui.setMotes(i.motes),this.audio.levelup(),this.ui.toast(`Level ${i.level} · ${t.toUpperCase()} increased`,"gold"),this.saveGame(),!0)}levelCost(){const t=this.state.player.level;return Math.round(70+t*44+Math.pow(t,1.45)*4)}openShop(){this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.ui.showShop()}shopStock(){return[{id:"rustySword",type:"weapon",name:"Rusted Longsword",desc:"Straight sword · reliable · 31 damage",price:420},{id:"spear",type:"weapon",name:"Briar Spear",desc:"Spear · long reach · 26 damage",price:520},{id:"bow",type:"weapon",name:"Weeping Shortbow",desc:"Bow · ranged · 22 damage",price:700},{id:"staff",type:"weapon",name:"Seer's Ember Staff",desc:"Staff · casts Ember Bolt · 18 damage",price:1100},{id:"leather",type:"armor",name:"Traveler's Jerkin",desc:"Light armor · 7 defense · 12 poise",price:380},{id:"veil",type:"armor",name:"Ashen Veil",desc:"Medium armor · 11 defense · 18 poise",price:640},{id:"emberBomb",type:"item",name:"Ember Bomb",desc:"A clay vessel of sleeping fire.",price:180},{id:"goldenEmber",type:"item",name:"Golden Ember",desc:"Permanently adds one flask charge.",price:1200}]}buy(t,e){const i=this.state.player,n=this.shopStock().find(a=>a.id===t&&a.type===e);return!n||i.motes<n.price||e==="weapon"&&i.weapons.includes(t)||e==="armor"&&i.armor.includes(t)?!1:t==="goldenEmber"&&i.maxFlask>=6?(this.ui.toast("The flask cannot hold more fire","blood"),!1):(i.motes-=n.price,e==="weapon"?this.addWeapon(t):e==="armor"?this.addArmor(t):t==="goldenEmber"?(i.maxFlask++,i.flaskUses=i.maxFlask,this.ui.toast("The Ashen Flask has grown","gold")):this.addItem(t,1),this.ui.setMotes(i.motes),this.audio.pickup(),this.ui.toast(`${n.name} acquired`,"gold"),this.saveGame(),!0)}openInventory(){this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.ui.showInventory()}openMap(){this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.ui.showMap()}openPause(){var t;this.mode!=="play"||this.cinematic||(this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.state.playtime=(this.state.playtime||0)+this.playtime,this.playtime=0,this.ui.showPause(`Last shrine: ${((t=this.world.shrines.find(e=>e.id===this.state.lastShrine))==null?void 0:t.name)||"None"} · ${this.state.deaths} deaths`),this.audio.ui())}menuAction(t){this.audio.ui(),t==="resume"?this.closeMenu():t==="inventory"?this.ui.showInventory():t==="map"?this.ui.showMap():t==="controls"?this.ui.showControls():t==="savequit"&&this.saveAndQuit()}closeMenu(){this.ui.closeMenuUI(),this.ui.hideControls(),this.uiBlocking=!1,this.uiBlockingKind=null,this.currentShrine=null,this.mode==="play"&&!this.cinematic&&this.input.requestLock()}openEndings(){this.closeDialogueSilently(),this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.state.flags.seerEchoSeen=!0,this.ui.showEndings({veil:this.state.lore.length>=3})}closeDialogueSilently(){this.ui.dialogueState=null,this.ui.el.dialogue.classList.add("hidden")}chooseEnding(t){const e=Om[t];e&&(t==="veil"&&this.state.lore.length<3||(this.state.ending=t,this.state.seenEndings||(this.state.seenEndings=[]),this.state.seenEndings.includes(t)||this.state.seenEndings.push(t),this.uiBlocking=!1,this.uiBlockingKind=null,this.ui.closeMenuUI(),this.ui.hideHUD(),this.mode="ending",this.cinematic=!1,this.input.releaseLock(),this.audio.setTheme("victory"),this.audio.levelup(),this.ui.showEnding(e),this.saveGame()))}returnToThreshold(){this.ui.hideEnding(),this.returnToTitle()}openChapterEnd(){this.uiBlocking=!0,this.uiBlockingKind="menu",this.input.releaseLock(),this.ui.openMenu("THE WEEPING WILDS",`
      <div style="text-align:center;padding:12px 6px 4px">
        <div class="ending-kicker">CHAPTER I COMPLETE</div>
        <h1 style="font-family:var(--serif);font-weight:400;font-size:42px;letter-spacing:.12em;color:#e7cd92;margin:8px 0">THE WEEPING WILDS</h1>
        <div class="ending-rule"></div>
        <p style="font-size:16px;line-height:1.7;color:#b9ae9a;font-style:italic;max-width:560px;margin:0 auto">
          Beyond the gate, the shire gives way to a forest of enormous mushrooms, glowing spores, and a queen who loves her children very much. The road to Ashenveil lies deeper still — and beneath it all, the Devourer turns in its sleep.
        </p>
        <p style="font-size:12px;line-height:1.6;color:#7d7567;font-style:italic;margin-top:22px">
          This is the end of the playable vertical slice. Regions II–VI, the final boss, and the full campaign are sealed beyond the gate.
        </p>
      </div>`,"<span>Chapter II awaits.</span><span>“Do not let the forest eat your name.”</span>",!0),this.ui.el["menu-footer"];const e=document.createElement("div");e.style.cssText="display:flex;gap:8px;flex-wrap:wrap;width:100%;margin-top:8px";const i=document.createElement("button");i.className="menu-btn",i.textContent="WITNESS THE THREE THREADS",i.onclick=()=>this.openEndings();const n=document.createElement("button");n.className="menu-btn",n.textContent="REMAIN IN THE SHIRE",n.onclick=()=>this.closeMenu();const a=document.createElement("button");a.className="menu-btn",a.textContent="RETURN TO TITLE",a.onclick=()=>this.returnToTitle(),e.append(i,n,a),this.ui.el["menu-body"].appendChild(e)}useGate(){this.state.flags.bossDefeated?(this.openChapterEnd(),this.audio.gate()):this.beginBossEncounter()}objectiveText(){return this.state.flags.bossDefeated?"The First Grove is free. Touch the Weeping Gate and leave the Shire behind.":this.boss&&(this.boss.active||this.bossIntro)?"Defeat the Hollow Woodsman.":this.state.quests.merchantQuest===1?"Find Wren's locket by the graves west of the village.":this.state.flags.firstShrine?"Follow the road north. The Hollow Woodsman waits in the First Grove.":"Find the First Shrine beneath the hollow tree."}spawnEnemy(t,e){const i=new vg(this,t,e);return this.enemies.push(i),i}playerMeleeHit(t,e,i){const n=e?t.heavyPower:t.attackPower,a=i.range,o=e?i.poise*1.35:i.poise;let r=!1;for(const l of this.enemies){if(!l.alive||t.hasHitThisSwing.has(l))continue;const h=l.pos.x-t.pos.x,c=l.pos.z-t.pos.z;if(Math.hypot(h,c)>a+l.radius||Math.abs(Xi(t.yaw,Math.atan2(h,c)))>(e?1.35:1))continue;t.hasHitThisSwing.add(l);const g=Math.abs(Xi(l.yaw,Math.atan2(t.pos.x-l.pos.x,t.pos.z-l.pos.z)))>2&&!l.aggro;let v=n*(e?1:t.combo===3?1.35:1);g&&(v*=(i.crit||1.5)*1.4),l.takeDamage(v,t.pos,{poise:o,source:t,critical:g}),g&&(this.ui.toast("BACKSTAB","gold"),this.hitstop(.08),this.slowmo(.7,.25)),r=!0}if(this.boss&&this.boss.active&&!this.boss.dead&&!t.hasHitThisSwing.has("boss")){const l=this.boss,h=l.pos.x-t.pos.x,c=l.pos.z-t.pos.z;Math.hypot(h,c)<a+2.4&&Math.abs(Xi(t.yaw,Math.atan2(h,c)))<1.1&&(t.hasHitThisSwing.add("boss"),l.takeDamage(n*(e?1.05:1),t.pos,{poise:o,source:t}),r=!0)}r&&(this.hitstop(.055),this.shake(e?.32:.16),this.audio.hit(!1))}tryCritical(){var i,n;let t=null,e=1e9;for(const a of this.enemies){if(!a.alive||!a.canBeCrit)continue;const o=Math.hypot(a.pos.x-this.player.pos.x,a.pos.z-this.player.pos.z);o<3.3&&o<e&&(e=o,t=a)}if(this.boss&&((n=(i=this.boss).canCrit)!=null&&n.call(i))){const a=Math.hypot(this.boss.pos.x-this.player.pos.x,this.boss.pos.z-this.player.pos.z);a<7&&a<e&&(t=this.boss)}t&&(this.player.startCritical(t),this.ui.hideContextual())}updateContextual(){var i,n;if(this.player.busy){this.ui.hideContextual();return}let t=null,e=1e9;for(const a of this.enemies){if(!a.alive||!a.canBeCrit)continue;const o=Math.hypot(a.pos.x-this.player.pos.x,a.pos.z-this.player.pos.z);o<3.2&&o<e&&(e=o,t=a)}this.boss&&((n=(i=this.boss).canCrit)!=null&&n.call(i))&&Math.hypot(this.boss.pos.x-this.player.pos.x,this.boss.pos.z-this.player.pos.z)<7&&(t=this.boss),t?this.ui.contextual("C — CRITICAL BLOW"):this.ui.hideContextual()}onPerfectDodge(){var t,e;this.slowmo(.3,.45),this.ui.toast("PERFECT DODGE","gold"),this.ui.contextual("PERFECT DODGE"),setTimeout(()=>this.ui.hideContextual(),900),this.audio.parry(),(e=(t=this.input).rumble)==null||e.call(t,.15,.45,90)}onParry(t){var e,i,n,a;this.slowmo(.25,.5),this.ui.toast("PARRY","gold"),t&&t.stagger&&t.stagger(1.9,this.player),t===this.boss&&((i=(e=this.boss).stagger)==null||i.call(e)),this.spawnSparkBurst(this.player.pos.clone().add(new P(0,1.3,0)),18),this.hitstop(.08),this.shake(.25),(a=(n=this.input).rumble)==null||a.call(n,.55,.35,150)}onPlayerHurt(t,e){var i,n;this.ui.damageFlash(),this.shake(.26),this.audio.hit(!1),this.hitstop(.04),(n=(i=this.input).rumble)==null||n.call(i,Math.min(.9,.35+t/120),.3,170)}onEnemyKilled(t){t.def.elite&&(this.state.flags.eliteDefeated=!0,this.ui.toast("The Briar Warden has fallen","gold"),this.saveGame())}onPlayerDeath(){this.state.deaths++;const t=Math.floor(this.state.player.motes);this._lostMotes=t,this.state.player.motes=0,this.ui.setMotes(0),this.mode="dead",this.deathTimer=0,this.deathScreenShown=!1,this.lockTarget=null,this.input.releaseLock(),t>0&&this.dropBloodstain(t),this.audio.setTheme("none")}dropBloodstain(t){var o,r;(r=(o=this.bloodstain)==null?void 0:o.mesh)!=null&&r.parent&&this.bloodstain.mesh.parent.remove(this.bloodstain.mesh);const e=new At,i=be(16764782,3.2);i.position.y=.8,e.add(i);const n=new L(new gn(.22),new ee({color:16770728}));n.position.y=.8,e.add(n);const a=new ii(16757834,1.4,8,2);a.position.y=1,e.add(a),e.position.set(this.player.pos.x,bt(this.player.pos.x,this.player.pos.z),this.player.pos.z),this.scene.add(e),this.bloodstain={mesh:e,x:this.player.pos.x,z:this.player.pos.z,amount:t,core:n}}deathLine(){return ca(["The shire remembers your name. It will not remember your face.","The roots drink deep. They are always thirsty.","You were not the first traveler. You will not be the last.","The crown is hollow. So is the ground beneath it."])}respawn(){this.ui.hideDeath(),this.deathScreenShown=!1,this.deathTimer=0;const t=this.world.shrines.find(i=>i.id===this.state.lastShrine)||this.world.shrines[0],e=t?{x:t.x,z:t.z+3.3}:{x:7,z:92};this.player.respawn(e,t),this.player.invuln=2,this.state.player.hpRatio=1,this.state.player.flaskUses=this.state.player.maxFlask,this.mode="play",this.cinematic=!1,this.ui.showHUD(),this.ui.el.fade.classList.add("on"),setTimeout(()=>this.ui.el.fade.classList.remove("on"),80),this.resetEnemiesOnly(),this.boss&&!this.state.flags.bossDefeated&&this.resetBoss(),this.audio.setTheme("explore"),this.cameraRig.yaw=this.player.yaw+Math.PI,this.setCameraImmediate(),this.ui.setObjective(this.objectiveText()),this.saveGame(),this.input.requestLock(),this.audio.levelup()}resetBoss(){var t,e;this.boss&&((e=(t=this.boss).dispose)==null||e.call(t),this.boss=null),this.boss=new kl(this),this.bossIntro=null,this.cinematic=!1,this.ui.hideCinematic(),this.ui.hideBossBar(),this.world.gate.group.visible=!0,this.setGateColor(13088511)}onBossDeath(t){this.rewardGiven||(this.rewardGiven=!0,this.state.flags.bossDefeated=!0,this.state.flags.gateOpened=!0,this.state.player.motes+=3e3,this.ui.setMotes(this.state.player.motes),this.addWeapon("woodsmanAxe"),this.addArmor("mantle"),this.addItem("sigil",1),this.ui.toast("The Hollow Woodsman has fallen","gold"),this.ui.toast("Woodsman's Axe acquired","gold"),this.ui.toast("Heartwood Mantle acquired","gold"),this.ui.toast("3,000 motes absorbed","gold"),this.ui.setObjective("Return to the gate. The Weeping Wilds await."),this.ui.banner("GREAT ENEMY FELLED","The Hollow Woodsman has fallen. The First Grove is free.",7e3),this.setGateColor(10485732),this.world.gate.group.visible=!0,this.createEcho(),this.audio.setTheme("victory"),this.saveGame(),this.updateTitleSlot(),setTimeout(()=>{this.mode==="play"&&this.ui.subtitle("The gate opens. Something on the other side is singing.",6)},3500),this.input.releaseLock())}showBanner(t,e){this.ui.banner(t,e)}showBossBar(t){this.ui.showBossBar(t)}updateBossBar(){this.boss?this.ui.updateBossBar():this.ui.updateEliteBar()}setBossPhase(t){this.ui.setBossPhase(t)}hideBossBar(){this.ui.hideBossBar()}showEliteBar(t){this.ui.showEliteBar(t)}hideEliteBar(){this.ui.hideEliteBar()}showContextual(t){this.ui.contextual(t)}hideContextual(){this.ui.hideContextual()}toast(t,e){this.ui.toast(t,e)}floatText(t,e,i){this.ui.floatText(t,e,i)}spawnHealBurst(t){this.effects.heal(t)}spawnBloodBurst(t,e,i){this.effects.blood(t,e,i)}spawnSparkBurst(t,e){this.effects.sparks(t,e)}spawnSoulBurst(t,e){this.effects.souls(t,e)}spawnAttackArc(t,e,i){this.effects.arc(t.pos,t.yaw,e,i)}bossTelegraph(t,e){e==="slam"?this.effects.telegraph(t.pos,7,1.25,16730666,()=>{}):e==="roots"&&this.effects.swirl(t.pos,10247423,5)}bossArcEffect(t,e,i,n){this.effects.arc(t,e,i,n)}bossShockwave(t){this.effects.ring(t,16742970,{radius:15,duration:.8})}bossRootRing(t,e){this.effects.rootRing(t,e)}bossRootEruption(t,e,i,n){for(let a=0;a<i;a++){const o=it(0,Math.PI*2),r=it(0,5),l=new P(e.x+Math.cos(o)*r,0,e.z+Math.sin(o)*r);this.effects.telegraph(l,2.3,1+a*.14,10247423,()=>{this.effects.spikes(l,10247423,2.2),Math.hypot(this.player.pos.x-l.x,this.player.pos.z-l.z)<2.4&&!this.player.dead&&this.player.takeDamage(n,l,{source:this.boss,aoe:!0})})}}bossSummon(t,e){for(let i=0;i<e;i++){const n=it(0,Math.PI*2),a=it(4,8),o={x:t.pos.x+Math.cos(n)*a,z:t.pos.z+Math.sin(n)*a,patrol:2},r=this.spawnEnemy("villager",o);r.aggro=!0,r.setState("chase"),this.effects.spikes(new P(o.x,0,o.z),10247423,2)}this.ui.toast("The grove sends its children","blood")}enemyAoe(t,e){this.effects.ring(t.pos,11816191,{radius:e.range,duration:.6}),this.effects.rootRing(t.pos,11816191),Math.hypot(this.player.pos.x-t.pos.x,this.player.pos.z-t.pos.z)<e.range&&!this.player.dead&&this.player.takeDamage(e.damage,t.pos,{source:t,aoe:!0})}canEnemyAttack(t){if(t.def.elite)return!0;let e=0;for(const i of this.enemies)i!==t&&i.alive&&i.state==="attack"&&i.stateTime<.8&&e++;return e<2}fireArrow(){const t=this.player,e=this.getAimDir(t),i=t.pos.clone().add(new P(0,1.35,0)).add(e.clone().multiplyScalar(.5)),n=t.attackPower*1.15;this.spawnProjectile({pos:i,dir:e,speed:26,damage:n,owner:"player",type:"arrow",color:14207392}),this.audio.arrow()}fireSpell(t=!1){const e=this.player,i=this.getAimDir(e),n=e.pos.clone().add(new P(0,1.45,0)).add(i.clone().multiplyScalar(.6)),a=28+this.state.player.faith*5.2+(t?14:0);this.spawnProjectile({pos:n,dir:i,speed:19,damage:a,owner:"player",type:"spell",color:16751164}),this.audio.spell()}getAimDir(t){if(this.lockTarget&&this.lockTarget.alive){const e=this.lockTarget.pos.clone();return e.y+=this.lockTarget.isBoss?3.6:1,e.sub(t.pos.clone().add(new P(0,1.3,0))).normalize()}return new P(Math.sin(t.yaw),.02,Math.cos(t.yaw)).normalize()}spawnProjectile({pos:t,dir:e,speed:i,damage:n,owner:a,type:o,color:r}){const l=new At;if(o==="arrow"){const h=new L(new ct(.018,.018,.8,4),new ee({color:5915688}));h.rotation.x=Math.PI/2,l.add(h);const c=new L(new de(.045,.16,4),new ee({color:12174278}));c.rotation.x=Math.PI/2,c.position.z=.45,l.add(c);const d=new L(new xt(.09,.01,.14),new ee({color:r}));d.position.z=-.38,l.add(d)}else{const h=new L(new Xt(.16,8,6),new ee({color:r,blending:Fe,transparent:!0,opacity:.95}));l.add(h);const c=be(r,1.6);l.add(c)}l.position.copy(t),l.quaternion.setFromUnitVectors(new P(0,0,1),e.clone().normalize()),this.scene.add(l),this.projectiles.push({mesh:l,vel:e.clone().normalize().multiplyScalar(i),damage:n,owner:a,type:o,life:3,color:r})}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){const i=this.projectiles[e];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);const n=i.mesh.position;i.type==="spell"&&this.effects.spawnParticles(n,1,i.color,{speed:.4,life:.35,gravity:0,size:.7,glow:!0});let a=i.life<=0;if(!a&&n.y<bt(n.x,n.z)+.1&&(a=!0,this.effects.sparks(n,6)),!a)if(i.owner==="player"){for(const o of this.enemies){if(!o.alive)continue;const r=o.pos.clone();if(r.y+=.9*(o.def.scale||1),n.distanceTo(r)<o.radius+.35){o.takeDamage(i.damage,this.player.pos,{poise:14,source:this.player}),this.effects.sparks(n,8),a=!0;break}}if(!a&&this.boss&&this.boss.active&&!this.boss.dead){const o=this.boss.pos.clone();o.y+=4,n.distanceTo(o)<3.2&&(this.boss.takeDamage(i.damage,this.player.pos,{poise:12,source:this.player}),this.effects.sparks(n,10),a=!0)}}else{const o=this.player.pos.clone();o.y+=1,n.distanceTo(o)<.8&&(this.player.takeDamage(i.damage,this.player.pos,{source:null}),this.effects.sparks(n,5),a=!0)}a&&(this.scene.remove(i.mesh),this.projectiles.splice(e,1))}}enemyFireArrow(t,e){const i=t.pos.clone().add(new P(0,1.5*(t.def.scale||1),0)),a=e.pos.clone().add(new P(0,1.1,0)).sub(i).normalize();a.x+=it(-.04,.04),a.z+=it(-.04,.04),a.normalize(),this.spawnProjectile({pos:i,dir:a,speed:22,damage:t.def.damage*1.15,owner:"enemy",type:"arrow",color:10462351}),this.audio.arrow()}addMotes(t,e){this.state.player.motes+=Math.round(t),this.ui.setMotes(this.state.player.motes),e&&this.ui.floatText(e,`+${Math.round(t)} ✦`,"motes")}addXP(t){this.state.xp=(this.state.xp||0)+t}addWeapon(t){var e;this.state.player.weapons.includes(t)||(this.state.player.weapons.push(t),this.ui.toast(`Weapon acquired: ${((e=_i[t])==null?void 0:e.name)||t}`,"gold")),t==="staff"&&this.unlockSpell()}addArmor(t){var e;this.state.player.armor.includes(t)||(this.state.player.armor.push(t),this.ui.toast(`Armor acquired: ${((e=Li[t])==null?void 0:e.name)||t}`,"gold"))}addItem(t,e=1){this.state.player.items[t]=(this.state.player.items[t]||0)+e,Jo[t]&&this.ui.toast(`${Jo[t].name} ×${e}`,"gold")}giveLoot(t,e,i,n="weapon"){n==="armor"?this.addArmor(t):this.addWeapon(t),i&&this.ui.floatText(i,e.toUpperCase(),"item")}giveItem(t,e){this.addItem(t,e)}unlockSpell(){this.state.player.spellUnlocked||(this.state.player.spellUnlocked=!0,this.ui.toast("Incantation learned: Ember Bolt","gold"),this.ui.banner("AN OLD WORD","Press V to cast Ember Bolt. It costs focus.",4200))}equipWeapon(t){this.state.player.weapons.includes(t)&&(this.state.player.equippedWeapon=t,this.player.setWeapon(t),this.ui.setWeapon(_i[t].name),this.audio.ui())}equipArmor(t){this.state.player.armor.includes(t)&&(this.state.player.equippedArmor=t,this.player.setArmorVisual(),this.player.recalcStats(!1),this.ui.setArmor(Li[t].name),this.audio.ui())}cycleWeapon(t){const e=this.state.player.weapons;if(e.length<=1)return;let i=e.indexOf(this.state.player.equippedWeapon);i=(i+t+e.length)%e.length,this.equipWeapon(e[i]),this.ui.toast(_i[e[i]].name,"")}toggleLock(){if(this.lockTarget){this.lockTarget=null,this.audio.ui();return}let t=null,e=1e9;const i=[...this.enemies.filter(n=>n.alive)];this.boss&&this.boss.active&&!this.boss.dead&&i.push(this.boss);for(const n of i){const a=n.pos.x-this.player.pos.x,o=n.pos.z-this.player.pos.z,r=Math.hypot(a,o);if(r>34)continue;const l=Math.abs(Xi(this.cameraRig.yaw,Math.atan2(a,o)+Math.PI));(r<4||l<1.2)&&r<e&&(e=r,t=n)}this.lockTarget=t,t?(this.audio.ui(),this.ui.toast(t.isBoss?"LOCKED: THE HOLLOW WOODSMAN":`LOCKED: ${t.def.name.toUpperCase()}`,"")):this.ui.toast("No target","blood")}updateLock(){this.lockTarget&&(!this.lockTarget.alive||this.lockTarget.isBoss&&!this.lockTarget.active)&&(this.lockTarget=null),this.lockTarget&&Math.hypot(this.lockTarget.pos.x-this.player.pos.x,this.lockTarget.pos.z-this.player.pos.z)>40&&(this.lockTarget=null)}}const Bl=async()=>{var e;const s=document.getElementById("game-canvas");if(!s)throw new Error("Missing #game-canvas");const t=new Eg(s);window.__HOLLOW_CROWN__=t;try{await t.init(),(e=document.getElementById("loading"))==null||e.classList.add("hidden")}catch(i){console.error("[THE HOLLOW CROWN] Failed to start:",i),window.__HOLLOW_CROWN_ERROR__=i;const n=document.getElementById("loading");if(n){n.classList.remove("done"),n.style.opacity="1";const a=document.getElementById("load-status");a&&(a.textContent="The crown could not be lit. See console for details.",a.style.color="#c26a5f")}}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bl,{once:!0}):Bl();
