"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7536],{87536:function(e,t,r){r.d(t,{KN:function(){return j},Qr:function(){return U},U2:function(){return g},cI:function(){return eb},t8:function(){return T}});var a=r(67294),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,f=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,d=(e,t)=>e.has(f(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},Array.isArray(e)||c(e))for(let r in e)t[r]=m(e[r]);else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let a=h(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return v(a)||a===e?v(e[t])?r:e[t]:a};let p={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},_={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},b={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},V=a.createContext(null),A=()=>a.useContext(V);var w=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==_.all&&(t._proxyFormState[i]=!a||_.all),r&&(r[i]=!0),e[i])});return s},S=e=>n(e)&&!Object.keys(e).length,F=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return S(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||_.all))},x=e=>Array.isArray(e)?e:[e],k=(e,t,r)=>r&&t?e===t:!e||!t||e===t||x(e).some(e=>e&&(e.startsWith(t)||t.startsWith(e)));function D(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var C=e=>"string"==typeof e,O=(e,t,r,a,s)=>C(e)?(a&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),g(r,e))):(a&&(t.watchAll=!0),r),E=e=>/^\w*$/.test(e),L=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/));function T(e,t,r){let a=-1,s=E(t)?[t]:L(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}e[t]=i,e=e[t]}return e}let U=e=>e.render(function(e){let t=A(),{name:r,control:s=t.control,shouldUnregister:i}=e,l=d(s._names.array,r),u=function(e){let t=A(),{control:r=t.control,name:s,defaultValue:i,disabled:l,exact:u}=e||{},n=a.useRef(s);n.current=s,D({disabled:l,subject:r._subjects.values,next:e=>{k(n.current,e.name,u)&&f(m(O(n.current,r._names,e.values||r._formValues,!1,i)))}});let[o,f]=a.useState(r._getWatch(s,i));return a.useEffect(()=>r._removeUnmounted()),o}({control:s,name:r,defaultValue:g(s._formValues,r,g(s._defaultValues,r,e.defaultValue)),exact:!0}),n=function(e){let t=A(),{control:r=t.control,disabled:s,name:i,exact:l}=e||{},[u,n]=a.useState(r._formState),o=a.useRef(!0),f=a.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=a.useRef(i);return d.current=i,D({disabled:s,next:e=>o.current&&k(d.current,e.name,l)&&F(e,f.current,r._updateFormState)&&n({...r._formState,...e}),subject:r._subjects.state}),a.useEffect(()=>(o.current=!0,f.current.isValid&&r._updateValid(!0),()=>{o.current=!1}),[r]),w(u,r,f.current,!1)}({control:s,name:r}),f=a.useRef(s.register(r,{...e.rules,value:u}));return a.useEffect(()=>{let e=s._options.shouldUnregister||i,t=(e,t)=>{let r=g(s._fields,e);r&&(r._f.mount=t)};if(t(r,!0),e){let e=m(g(s._options.defaultValues,r));T(s._defaultValues,r,e),v(g(s._formValues,r))&&T(s._formValues,r,e)}return()=>{(l?e&&!s._state.action:e)?s.unregister(r):t(r,!1)}},[r,s,l,i]),{field:{name:r,value:u,onChange:a.useCallback(e=>f.current.onChange({target:{value:o(e),name:r},type:p.CHANGE}),[r]),onBlur:a.useCallback(()=>f.current.onBlur({target:{value:g(s._formValues,r),name:r},type:p.BLUR}),[r,s]),ref:e=>{let t=g(s._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:n,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!g(n.errors,r)},isDirty:{enumerable:!0,get:()=>!!g(n.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!g(n.touchedFields,r)},error:{enumerable:!0,get:()=>g(n.errors,r)}})}}(e));var j=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{};let B=(e,t,r)=>{for(let a of r||Object.keys(e)){let r=g(e,a);if(r){let{_f:e,...a}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else n(a)&&B(a,t)}}};var N=e=>({isOnSubmit:!e||e===_.onSubmit,isOnBlur:e===_.onBlur,isOnChange:e===_.onChange,isOnAll:e===_.all,isOnTouch:e===_.onTouched}),M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),R=(e,t,r)=>{let a=h(g(e,r));return T(a,"root",t[r]),T(e,r,a),e},q=e=>"boolean"==typeof e,H=e=>"file"===e.type,P=e=>"function"==typeof e,I=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},W=e=>C(e),$=e=>"radio"===e.type,G=e=>e instanceof RegExp;let K={value:!1,isValid:!1},Q={value:!0,isValid:!0};var z=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?Q:{value:e[0].value,isValid:!0}:Q:K}return K};let J={isValid:!1,value:null};var X=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,J):J;function Y(e,t,r="validate"){if(W(e)||Array.isArray(e)&&e.every(W)||q(e)&&!e)return{type:r,message:W(e)?e:"",ref:t}}var Z=e=>n(e)&&!G(e)?e:{value:e,message:""},ee=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:f,maxLength:d,minLength:c,min:y,max:m,pattern:h,validate:p,name:_,valueAsNumber:V,mount:A,disabled:w}=e._f,F=g(t,_);if(!A||w)return{};let x=o?o[0]:u,k=e=>{a&&x.reportValidity&&(x.setCustomValidity(q(e)?"":e||""),x.reportValidity())},D={},O=$(u),E=s(u),L=(V||H(u))&&v(u.value)&&v(F)||I(u)&&""===u.value||""===F||Array.isArray(F)&&!F.length,T=j.bind(null,_,r,D),U=(e,t,r,a=b.maxLength,s=b.minLength)=>{let i=e?t:r;D[_]={type:e?a:s,message:i,ref:u,...T(e?a:s,i)}};if(i?!Array.isArray(F)||!F.length:f&&(!(O||E)&&(L||l(F))||q(F)&&!F||E&&!z(o).isValid||O&&!X(o).isValid)){let{value:e,message:t}=W(f)?{value:!!f,message:f}:Z(f);if(e&&(D[_]={type:b.required,message:t,ref:x,...T(b.required,t)},!r))return k(t),D}if(!L&&(!l(y)||!l(m))){let e,t;let a=Z(m),s=Z(y);if(l(F)||isNaN(F)){let r=u.valueAsDate||new Date(F),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;C(a.value)&&F&&(e=l?i(F)>i(a.value):n?F>a.value:r>new Date(a.value)),C(s.value)&&F&&(t=l?i(F)<i(s.value):n?F<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(F?+F:F);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(U(!!e,a.message,s.message,b.max,b.min),!r))return k(D[_].message),D}if((d||c)&&!L&&(C(F)||i&&Array.isArray(F))){let e=Z(d),t=Z(c),a=!l(e.value)&&F.length>+e.value,s=!l(t.value)&&F.length<+t.value;if((a||s)&&(U(a,e.message,t.message),!r))return k(D[_].message),D}if(h&&!L&&C(F)){let{value:e,message:t}=Z(h);if(G(e)&&!F.match(e)&&(D[_]={type:b.pattern,message:t,ref:u,...T(b.pattern,t)},!r))return k(t),D}if(p){if(P(p)){let e=await p(F,t),a=Y(e,x);if(a&&(D[_]={...a,...T(b.validate,a.message)},!r))return k(a.message),D}else if(n(p)){let e={};for(let a in p){if(!S(e)&&!r)break;let s=Y(await p[a](F,t),x,a);s&&(e={...s,...T(a,s.message)},k(s.message),r&&(D[_]=e))}if(!S(e)&&(D[_]={ref:x,...e},!r))return D}}return k(!0),D};function et(e,t){let r=Array.isArray(t)?t:E(t)?[t]:L(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=v(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&S(a)||Array.isArray(a)&&function(e){for(let t in e)if(!v(e[t]))return!1;return!0}(a))&&et(e,r.slice(0,-1)),e}function er(){let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var ea=e=>l(e)||!u(e);function es(e,t){if(ea(e)||ea(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!es(r,e):r!==e)return!1}}return!0}var ei=e=>"select-multiple"===e.type,el=e=>$(e)||s(e),eu=e=>I(e)&&e.isConnected,en=e=>{for(let t in e)if(P(e[t]))return!0;return!1};function eo(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!en(e[r])?(t[r]=Array.isArray(e[r])?[]:{},eo(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ef=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!en(t[s])?v(r)||ea(a[s])?a[s]=Array.isArray(t[s])?eo(t[s],[]):{...eo(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!es(t[s],r[s]);return a})(e,t,eo(t)),ed=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&C(e)?new Date(e):a?a(e):e;function ec(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:H(t)?t.files:$(t)?X(e.refs).value:ei(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?z(e.refs).value:ed(v(t.value)?e.ref.value:t.value,e)}var ey=(e,t,r,a)=>{let s={};for(let r of e){let e=g(t,r);e&&T(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},em=e=>v(e)?e:G(e)?e.source:n(e)?G(e.value)?e.value.source:e.value:e,eh=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ev(e,t,r){let a=g(e,r);if(a||E(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=g(t,a),l=g(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var eg=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),ep=(e,t)=>!h(g(e,t)).length&&et(e,t);let e_={mode:_.onSubmit,reValidateMode:_.onChange,shouldFocusError:!0};function eb(e={}){let t=a.useRef(),[r,u]=a.useState({isDirty:!1,isValidating:!1,isLoading:P(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:P(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,a={...e_,...e},u={submitCount:0,isDirty:!1,isLoading:P(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},f={},c=(n(a.defaultValues)||n(a.values))&&m(a.defaultValues||a.values)||{},b=a.shouldUnregister?{}:m(c),V={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0,F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:er(),array:er(),state:er()},D=e.resetOptions&&e.resetOptions.keepDirtyValues,E=N(a.mode),L=N(a.reValidateMode),U=a.criteriaMode===_.all,j=e=>t=>{clearTimeout(w),w=setTimeout(e,t)},W=async e=>{if(F.isValid||e){let e=a.resolver?S((await J()).errors):await Y(f,!0);e!==u.isValid&&k.state.next({isValid:e})}},$=e=>F.isValidating&&k.state.next({isValidating:e}),G=(e,t)=>{T(u.errors,e,t),k.state.next({errors:u.errors})},K=(e,t,r,a)=>{let s=g(f,e);if(s){let i=g(b,e,v(r)?g(c,e):r);v(i)||a&&a.defaultChecked||t?T(b,e,t?i:ec(s._f)):eo(e,i),V.mount&&W()}},Q=(e,t,r,a,s)=>{let i=!1,l=!1,n={name:e};if(!r||a){F.isDirty&&(l=u.isDirty,u.isDirty=n.isDirty=Z(),i=l!==n.isDirty);let r=es(g(c,e),t);l=g(u.dirtyFields,e),r?et(u.dirtyFields,e):T(u.dirtyFields,e,!0),n.dirtyFields=u.dirtyFields,i=i||F.dirtyFields&&!r!==l}if(r){let t=g(u.touchedFields,e);t||(T(u.touchedFields,e,r),n.touchedFields=u.touchedFields,i=i||F.touchedFields&&t!==r)}return i&&s&&k.state.next(n),i?n:{}},z=(t,a,s,i)=>{let l=g(u.errors,t),n=F.isValid&&q(a)&&u.isValid!==a;if(e.delayError&&s?(r=j(()=>G(t,s)))(e.delayError):(clearTimeout(w),r=null,s?T(u.errors,t,s):et(u.errors,t)),(s?!es(l,s):l)||!S(i)||n){let e={...i,...n&&q(a)?{isValid:a}:{},errors:u.errors,name:t};u={...u,...e},k.state.next(e)}$(!1)},J=async e=>a.resolver(b,a.context,ey(e||A.mount,f,a.criteriaMode,a.shouldUseNativeValidation)),X=async e=>{let{errors:t}=await J();if(e)for(let r of e){let e=g(t,r);e?T(u.errors,r,e):et(u.errors,r)}else u.errors=t;return t},Y=async(e,t,r={valid:!0})=>{for(let s in e){let i=e[s];if(i){let{_f:e,...s}=i;if(e){let s=A.array.has(e.name),l=await ee(i,b,U,a.shouldUseNativeValidation&&!t,s);if(l[e.name]&&(r.valid=!1,t))break;t||(g(l,e.name)?s?R(u.errors,l,e.name):T(u.errors,e.name,l[e.name]):et(u.errors,e.name))}s&&await Y(s,t,r)}}return r.valid},Z=(e,t)=>(e&&t&&T(b,e,t),!es(eS(),c)),en=(e,t,r)=>O(e,A,{...V.mount?b:v(t)?c:C(e)?{[e]:t}:t},r,t),eo=(e,t,r={})=>{let a=g(f,e),i=t;if(a){let r=a._f;r&&(r.disabled||T(b,e,ed(t,r)),i=I(r.ref)&&l(t)?"":t,ei(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):H(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||k.values.next({name:e,values:{...b}})))}(r.shouldDirty||r.shouldTouch)&&Q(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ew(e)},eb=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,u=g(f,l);!A.array.has(e)&&ea(s)&&(!u||u._f)||i(s)?eo(l,s,r):eb(l,s,r)}},eV=(e,r,a={})=>{let s=g(f,e),i=A.array.has(e),n=m(r);T(b,e,n),i?(k.array.next({name:e,values:{...b}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&k.state.next({name:e,dirtyFields:ef(c,b),isDirty:Z(e,n)})):!s||s._f||l(n)?eo(e,n,a):eb(e,n,a),M(e,A)&&k.state.next({...u}),k.values.next({name:e,values:{...b}}),V.mount||t()},eA=async e=>{let t=e.target,s=t.name,i=!0,l=g(f,s);if(l){let n,d;let c=t.type?ec(l._f):o(e),y=e.type===p.BLUR||e.type===p.FOCUS_OUT,m=!eh(l._f)&&!a.resolver&&!g(u.errors,s)&&!l._f.deps||eg(y,g(u.touchedFields,s),u.isSubmitted,L,E),h=M(s,A,y);T(b,s,c),y?(l._f.onBlur&&l._f.onBlur(e),r&&r(0)):l._f.onChange&&l._f.onChange(e);let v=Q(s,c,y,!1),_=!S(v)||h;if(y||k.values.next({name:s,type:e.type,values:{...b}}),m)return F.isValid&&W(),_&&k.state.next({name:s,...h?{}:v});if(!y&&h&&k.state.next({...u}),$(!0),a.resolver){let{errors:e}=await J([s]),t=ev(u.errors,f,s),r=ev(e,f,t.name||s);n=r.error,s=r.name,d=S(e)}else n=(await ee(l,b,U,a.shouldUseNativeValidation))[s],(i=isNaN(c)||c===g(b,s,c))&&(n?d=!1:F.isValid&&(d=await Y(f,!0)));i&&(l._f.deps&&ew(l._f.deps),z(s,d,n,v))}},ew=async(e,t={})=>{let r,s;let i=x(e);if($(!0),a.resolver){let t=await X(v(e)?e:i);r=S(t),s=e?!i.some(e=>g(t,e)):r}else e?((s=(await Promise.all(i.map(async e=>{let t=g(f,e);return await Y(t&&t._f?{[e]:t}:t)}))).every(Boolean))||u.isValid)&&W():s=r=await Y(f);return k.state.next({...!C(e)||F.isValid&&r!==u.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:u.errors,isValidating:!1}),t.shouldFocus&&!s&&B(f,e=>e&&g(u.errors,e),e?i:A.mount),s},eS=e=>{let t={...c,...V.mount?b:{}};return v(e)?t:C(e)?g(t,e):e.map(e=>g(t,e))},eF=(e,t)=>({invalid:!!g((t||u).errors,e),isDirty:!!g((t||u).dirtyFields,e),isTouched:!!g((t||u).touchedFields,e),error:g((t||u).errors,e)}),ex=(e,t={})=>{for(let r of e?x(e):A.mount)A.mount.delete(r),A.array.delete(r),t.keepValue||(et(f,r),et(b,r)),t.keepError||et(u.errors,r),t.keepDirty||et(u.dirtyFields,r),t.keepTouched||et(u.touchedFields,r),a.shouldUnregister||t.keepDefaultValue||et(c,r);k.values.next({values:{...b}}),k.state.next({...u,...t.keepDirty?{isDirty:Z()}:{}}),t.keepIsValid||W()},ek=(e,t={})=>{let r=g(f,e),s=q(t.disabled);return T(f,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),A.mount.add(e),r?s&&T(b,e,t.disabled?void 0:g(b,e,ec(r._f))):K(e,!0,t.value),{...s?{disabled:t.disabled}:{},...a.shouldUseNativeValidation?{required:!!t.required,min:em(t.min),max:em(t.max),minLength:em(t.minLength),maxLength:em(t.maxLength),pattern:em(t.pattern)}:{},name:e,onChange:eA,onBlur:eA,ref:s=>{if(s){ek(e,t),r=g(f,e);let a=v(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=el(a),l=r._f.refs||[];(i?l.find(e=>e===a):a===r._f.ref)||(T(f,e,{_f:{...r._f,...i?{refs:[...l.filter(eu),a,...Array.isArray(g(c,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),K(e,!1,void 0,a))}else(r=g(f,e,{}))._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&!(d(A.array,e)&&V.action)&&A.unMount.add(e)}}},eD=()=>a.shouldFocusError&&B(f,e=>e&&g(u.errors,e),A.mount),eC=(r,a={})=>{let s=r||c,i=m(s),l=r&&!S(r)?i:c;if(a.keepDefaultValues||(c=s),!a.keepValues){if(a.keepDirtyValues||D)for(let e of A.mount)g(u.dirtyFields,e)?T(l,e,g(b,e)):eV(e,g(l,e));else{if(y&&v(r))for(let e of A.mount){let t=g(f,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(I(e)){let t=e.closest("form");if(t){t.reset();break}}}}f={}}b=e.shouldUnregister?a.keepDefaultValues?m(c):{}:i,k.array.next({values:{...l}}),k.values.next({values:{...l}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},V.mount||t(),V.mount=!F.isValid||!!a.keepIsValid,V.watch=!!e.shouldUnregister,k.state.next({submitCount:a.keepSubmitCount?u.submitCount:0,isDirty:a.keepDirty?u.isDirty:!!(a.keepDefaultValues&&!es(r,c)),isSubmitted:!!a.keepIsSubmitted&&u.isSubmitted,dirtyFields:a.keepDirtyValues?u.dirtyFields:a.keepDefaultValues&&r?ef(c,r):{},touchedFields:a.keepTouched?u.touchedFields:{},errors:a.keepErrors?u.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eO=(e,t)=>eC(P(e)?e(b):e,t);return{control:{register:ek,unregister:ex,getFieldState:eF,_executeSchema:J,_getWatch:en,_getDirty:Z,_updateValid:W,_removeUnmounted:()=>{for(let e of A.unMount){let t=g(f,e);t&&(t._f.refs?t._f.refs.every(e=>!eu(e)):!eu(t._f.ref))&&ex(e)}A.unMount=new Set},_updateFieldArray:(e,t=[],r,a,s=!0,i=!0)=>{if(a&&r){if(V.action=!0,i&&Array.isArray(g(f,e))){let t=r(g(f,e),a.argA,a.argB);s&&T(f,e,t)}if(i&&Array.isArray(g(u.errors,e))){let t=r(g(u.errors,e),a.argA,a.argB);s&&T(u.errors,e,t),ep(u.errors,e)}if(F.touchedFields&&i&&Array.isArray(g(u.touchedFields,e))){let t=r(g(u.touchedFields,e),a.argA,a.argB);s&&T(u.touchedFields,e,t)}F.dirtyFields&&(u.dirtyFields=ef(c,b)),k.state.next({name:e,isDirty:Z(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else T(b,e,t)},_getFieldArray:t=>h(g(V.mount?b:c,t,e.shouldUnregister?g(c,t,[]):[])),_reset:eC,_resetDefaultValues:()=>P(a.defaultValues)&&a.defaultValues().then(e=>{eO(e,a.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:e=>{u={...u,...e}},_subjects:k,_proxyFormState:F,get _fields(){return f},get _formValues(){return b},get _state(){return V},set _state(value){V=value},get _defaultValues(){return c},get _names(){return A},set _names(value){A=value},get _formState(){return u},set _formState(value){u=value},get _options(){return a},set _options(value){a={...a,...value}}},trigger:ew,register:ek,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=m(b);if(k.state.next({isSubmitting:!0}),a.resolver){let{errors:e,values:t}=await J();u.errors=e,s=t}else await Y(f);et(u.errors,"root"),S(u.errors)?(k.state.next({errors:{}}),await e(s,r)):(t&&await t({...u.errors},r),eD(),setTimeout(eD)),k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:S(u.errors),submitCount:u.submitCount+1,errors:u.errors})},watch:(e,t)=>P(e)?k.values.subscribe({next:r=>e(en(void 0,t),r)}):en(e,t,!0),setValue:eV,getValues:eS,reset:eO,resetField:(e,t={})=>{g(f,e)&&(v(t.defaultValue)?eV(e,g(c,e)):(eV(e,t.defaultValue),T(c,e,t.defaultValue)),t.keepTouched||et(u.touchedFields,e),t.keepDirty||(et(u.dirtyFields,e),u.isDirty=t.defaultValue?Z(e,g(c,e)):Z()),!t.keepError&&(et(u.errors,e),F.isValid&&W()),k.state.next({...u}))},clearErrors:e=>{e&&x(e).forEach(e=>et(u.errors,e)),k.state.next({errors:e?u.errors:{}})},unregister:ex,setError:(e,t,r)=>{let a=(g(f,e,{_f:{}})._f||{}).ref;T(u.errors,e,{...t,ref:a}),k.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{let r=g(f,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eF}}(e,()=>u(e=>({...e}))),formState:r});let f=t.current.control;return f._options=e,D({subject:f._subjects.state,next:e=>{F(e,f._proxyFormState,f._updateFormState,!0)&&u({...f._formState})}}),a.useEffect(()=>{e.values&&!es(e.values,f._defaultValues)?f._reset(e.values,f._options.resetOptions):f._resetDefaultValues()},[e.values,f]),a.useEffect(()=>{f._state.mount||(f._updateValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),t.current.formState=w(r,f),t.current}}}]);