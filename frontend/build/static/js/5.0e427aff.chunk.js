(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{46:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return d}));var a=n(18);var r="REQUIRE",i="MINLENGTH",c="MAXLENGTH",l="EMAIL",s=function(){return{type:r}},u=function(e){return{type:i,val:e}},o=function(){return{type:l}},d=function(e,t){var n,s=!0,u=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw c}}}}(t);try{for(u.s();!(n=u.n()).done;){var o=n.value;o.type===r&&(s=s&&e.trim().length>0),o.type===i&&(s=s&&e.trim().length>=o.val),o.type===c&&(s=s&&e.trim().length<=o.val),"MIN"===o.type&&(s=s&&+e>=o.val),"MAX"===o.type&&(s=s&&+e<=o.val),o.type===l&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return s}},52:function(e,t,n){"use strict";var a=n(11),r=n(44),i=n(0),c=n(46),l=(n(53),n(1)),s=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(i.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],c=n[1],u=e.id,o=e.onInput,d=r.value,p=r.isValid;Object(i.useEffect)((function(){o(u,d,p)}),[u,o,d,p]);var b=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},f=function(){c({type:"TOUCH"})},j="input"===e.element?Object(l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:b,onBlur:f,value:r.value}):Object(l.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:b,onBlur:f,value:r.value});return Object(l.jsxs)("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),children:[Object(l.jsx)("label",{htmlFor:e.id,children:e.label}),j,!r.isValid&&r.isTouched&&Object(l.jsx)("p",{children:e.errorText})]})}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(11),r=n(55),i=n(44),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},s=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],s=r[1];return[i,Object(c.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,n){},57:function(e,t,n){"use strict";var a=n(11),r=n(0),i=(n(58),n(45)),c=n(1);t.a=function(e){var t=Object(r.useState)(),n=Object(a.a)(t,2),l=n[0],s=n[1],u=Object(r.useState)(),o=Object(a.a)(u,2),d=o[0],p=o[1],b=Object(r.useState)(),f=Object(a.a)(b,2),j=f[0],v=f[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(l)}}),[l]);return Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("input",{type:"file",id:e.id,ref:O,style:{display:"none"},accept:".jpg,.png,.jpeg,",onChange:function(t){var n,a=j;t.target.files&&1===t.target.files.length?(n=t.target.files[0],s(n),v(!0),a=!0):(v(!1),a=!1),e.onInput(e.id,n,a)}}),Object(c.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(c.jsxs)("div",{className:"image-upload__preview",children:[d&&Object(c.jsx)("img",{src:d,alt:"Preview"}),!d&&Object(c.jsx)("p",{children:"Please pick an image."})]}),Object(c.jsx)(i.a,{type:"button",onClick:function(){O.current.click()},children:"Pick Image"})]}),!j&&Object(c.jsx)("p",{children:e.errorText})]})}},58:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),i=n(48),c=n(11),l=n(0),s=n.n(l),u=n(2),o=n(52),d=n(46),p=(n(56),n(50)),b=n(17),f=n(45),j=n(54),v=n(51),O=n(12),h=n(57),m=n(1);t.default=function(){var e=Object(l.useContext)(O.a),t=Object(v.a)(),n=t.isLoading,a=t.error,y=t.sendRequest,x=t.clearError,g=Object(j.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),T=Object(c.a)(g,2),V=T[0],I=T[1],A=Object(u.g)(),w=function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",V.inputs.title.value),a.append("description",V.inputs.description.value),a.append("address",V.inputs.address.value),a.append("image",V.inputs.image.value),t.next=9,y("http://localhost:5000/api/places","POST",a,{Authorization:"Bearer "+e.token});case 9:A.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(p.a,{error:a,onClear:x}),n&&Object(m.jsx)(b.a,{asOverlay:!0}),Object(m.jsxs)("form",{className:"place-form",onSubmit:w,children:[Object(m.jsx)(o.a,{id:"title",type:"text",label:"Title",element:"input",validators:[Object(d.c)()],errorText:"please enter a valid title.",onInput:I}),Object(m.jsx)(h.a,{center:!0,id:"image",onInput:I,errorText:"Please provide an image."}),Object(m.jsx)(o.a,{id:"description",label:"Description",element:"textarea",validators:[Object(d.b)(5)],errorText:"please enter a valid description (atleast 5 character long).",onInput:I}),Object(m.jsx)(o.a,{id:"address",label:"Address",element:"input",validators:[Object(d.c)()],errorText:"please enter a valid address.",onInput:I}),Object(m.jsx)(f.a,{type:"submit",disabled:!V.isValid,children:"Add Place"})]})]})}}}]);
//# sourceMappingURL=5.0e427aff.chunk.js.map