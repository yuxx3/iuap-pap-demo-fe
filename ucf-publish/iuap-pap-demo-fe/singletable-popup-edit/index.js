/*! build:ucf hash:1bce2cbc62b120d1f8a5, chunkhash:ebb9187eb1dfc6c394f7, name:singletable-popup-edit/index, filebase:index.js, query:, file:singletable-popup-edit/index.js */!function(O){function e(e){for(var a,t,n=e[0],r=e[1],l=e[2],o=0,s=[];o<n.length;o++)t=n[o],L[t]&&s.push(L[t][0]),L[t]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(O[a]=r[a]);for(j&&j(e);s.length;)s.shift()();return h.push.apply(h,l||[]),i()}function i(){for(var e,a=0;a<h.length;a++){for(var t=h[a],n=!0,r=1;r<t.length;r++){var l=t[r];0!==L[l]&&(n=!1)}n&&(h.splice(a--,1),e=A(A.s=t[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,a){!function(e,a){if(!q[e]||!p[e])return;for(var t in p[e]=!1,a)Object.prototype.hasOwnProperty.call(a,t)&&(N[t]=a[t]);0==--c&&0===d&&g()}(e,a),t&&t(e,a)};var l,n=!0,D="1bce2cbc62b120d1f8a5",a=1e4,C={},V=[],r=[];var o=[],_="idle";function H(e){_=e;for(var a=0;a<o.length;a++)o[a].call(null,e)}var s,N,T,c=0,d=0,u={},p={},q={};function Y(e){return+e+""===e?+e:e}function m(e){if("idle"!==_)throw new Error("check() is only allowed in idle status");return n=e,H("check"),(l=a,l=l||1e4,new Promise(function(a,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=A.p+""+D+".hot-update.json";n.open("GET",r,!0),n.timeout=l,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)a();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(n.responseText)}catch(e){return void t(e)}a(e)}}})).then(function(e){if(!e)return H("idle"),null;p={},u={},q=e.c,T=e.h,H("prepare");var a=new Promise(function(e,a){s={resolve:e,reject:a}});for(var t in N={},L)f(t);return"prepare"===_&&0===d&&0===c&&g(),a});var l}function f(e){var a,t;q[e]?(p[e]=!0,c++,a=e,(t=document.createElement("script")).charset="utf-8",t.src=A.p+""+a+"."+D+".hot-update.js",document.head.appendChild(t)):u[e]=!0}function g(){H("ready");var a=s;if(s=null,a)if(n)Promise.resolve().then(function(){return E(n)}).then(function(e){a.resolve(e)},function(e){a.reject(e)});else{var e=[];for(var t in N)Object.prototype.hasOwnProperty.call(N,t)&&e.push(Y(t));a.resolve(e)}}function E(t){if("ready"!==_)throw new Error("apply() is only allowed in ready status");var e,a,n,d,r;function l(e){for(var a=[e],t={},n=a.slice().map(function(e){return{chain:[e],id:e}});0<n.length;){var r=n.pop(),l=r.id,o=r.chain;if((d=F[l])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:l};if(d.hot._main)return{type:"unaccepted",chain:o,moduleId:l};for(var s=0;s<d.parents.length;s++){var i=d.parents[s],c=F[i];if(c){if(c.hot._declinedDependencies[l])return{type:"declined",chain:o.concat([i]),moduleId:l,parentId:i};-1===a.indexOf(i)&&(c.hot._acceptedDependencies[l]?(t[i]||(t[i]=[]),u(t[i],[l])):(delete t[i],a.push(i),n.push({chain:o.concat([i]),id:i})))}}}}return{type:"accepted",moduleId:e,outdatedModules:a,outdatedDependencies:t}}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var o={},s=[],i={},c=function(){console.warn("[HMR] unexpected require("+m.moduleId+") to disposed module")};for(var p in N)if(Object.prototype.hasOwnProperty.call(N,p)){var m;r=Y(p);var f=!1,g=!1,E=!1,h="";switch((m=N[p]?l(r):{type:"disposed",moduleId:p}).chain&&(h="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":t.onDeclined&&t.onDeclined(m),t.ignoreDeclined||(f=new Error("Aborted because of self decline: "+m.moduleId+h));break;case"declined":t.onDeclined&&t.onDeclined(m),t.ignoreDeclined||(f=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+h));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(m),t.ignoreUnaccepted||(f=new Error("Aborted because "+r+" is not accepted"+h));break;case"accepted":t.onAccepted&&t.onAccepted(m),g=!0;break;case"disposed":t.onDisposed&&t.onDisposed(m),E=!0;break;default:throw new Error("Unexception type "+m.type)}if(f)return H("abort"),Promise.reject(f);if(g)for(r in i[r]=N[r],u(s,m.outdatedModules),m.outdatedDependencies)Object.prototype.hasOwnProperty.call(m.outdatedDependencies,r)&&(o[r]||(o[r]=[]),u(o[r],m.outdatedDependencies[r]));E&&(u(s,[m.moduleId]),i[r]=c)}var b,v=[];for(a=0;a<s.length;a++)r=s[a],F[r]&&F[r].hot._selfAccepted&&v.push({module:r,errorHandler:F[r].hot._selfAccepted});H("dispose"),Object.keys(q).forEach(function(e){!1===q[e]&&delete L[e]});for(var y,j,M=s.slice();0<M.length;)if(r=M.pop(),d=F[r]){var w={},P=d.hot._disposeHandlers;for(n=0;n<P.length;n++)(e=P[n])(w);for(C[r]=w,d.hot.active=!1,delete F[r],delete o[r],n=0;n<d.children.length;n++){var S=F[d.children[n]];S&&(0<=(b=S.parents.indexOf(r))&&S.parents.splice(b,1))}}for(r in o)if(Object.prototype.hasOwnProperty.call(o,r)&&(d=F[r]))for(j=o[r],n=0;n<j.length;n++)y=j[n],0<=(b=d.children.indexOf(y))&&d.children.splice(b,1);for(r in H("apply"),D=T,i)Object.prototype.hasOwnProperty.call(i,r)&&(O[r]=i[r]);var k=null;for(r in o)if(Object.prototype.hasOwnProperty.call(o,r)&&(d=F[r])){j=o[r];var x=[];for(a=0;a<j.length;a++)if(y=j[a],e=d.hot._acceptedDependencies[y]){if(-1!==x.indexOf(e))continue;x.push(e)}for(a=0;a<x.length;a++){e=x[a];try{e(j)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:r,dependencyId:j[a],error:e}),t.ignoreErrored||k||(k=e)}}}for(a=0;a<v.length;a++){var I=v[a];r=I.module,V=[r];try{A(r)}catch(a){if("function"==typeof I.errorHandler)try{I.errorHandler(a)}catch(e){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:r,error:e,originalError:a}),t.ignoreErrored||k||(k=e),k||(k=a)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:r,error:a}),t.ignoreErrored||k||(k=a)}}return k?(H("fail"),Promise.reject(k)):(H("idle"),new Promise(function(e){e(s)}))}var F={},L={5:0},h=[];function A(e){if(F[e])return F[e].exports;var a,n,t=F[e]={i:e,l:!1,exports:{},hot:(a=e,n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:l!==a,active:!0,accept:function(e,a){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=a||function(){};else n._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)n._declinedDependencies[e[a]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=n._disposeHandlers.indexOf(e);0<=a&&n._disposeHandlers.splice(a,1)},check:m,apply:E,status:function(e){if(!e)return _;o.push(e)},addStatusHandler:function(e){o.push(e)},removeStatusHandler:function(e){var a=o.indexOf(e);0<=a&&o.splice(a,1)},data:C[a]},l=void 0,n),parents:(r=V,V=[],r),children:[]};return O[e].call(t.exports,t,t.exports,function(a){var t=F[a];if(!t)return A;var n=function(e){return t.hot.active?(F[e]?-1===F[e].parents.indexOf(a)&&F[e].parents.push(a):(V=[a],l=e),-1===t.children.indexOf(e)&&t.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+a),V=[]),A(e)},e=function(a){return{configurable:!0,enumerable:!0,get:function(){return A[a]},set:function(e){A[a]=e}}};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(n,r,e(r));return n.e=function(e){return"ready"===_&&H("prepare"),d++,A.e(e).then(a,function(e){throw a(),e});function a(){d--,"prepare"===_&&(u[e]||f(e),0===d&&0===c&&g())}},n.t=function(e,a){return 1&a&&(e=n(e)),A.t(e,-2&a)},n}(e)),t.l=!0,t.exports}A.m=O,A.c=F,A.d=function(e,a,t){A.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(a,e){if(1&e&&(a=A(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)A.d(t,n,function(e){return a[e]}.bind(null,n));return t},A.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(a,"a",a),a},A.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},A.p="",A.h=function(){return D};var b=window.webpackJsonp=window.webpackJsonp||[],v=b.push.bind(b);b.push=e,b=b.slice();for(var y=0;y<b.length;y++)e(b[y]);var j=v;h.push([1616,0]),i()}({1596:function(e,a,t){},1597:function(e,a,t){},1598:function(e,a,t){},1599:function(e,a,t){},1616:function(e,a,t){"use strict";t.r(a);t(165);var n,r,l,o=t(0),I=t.n(o),g=t(3),s=t.n(g),O=t(2),i=t(6),D=t.n(i),c=t(11),d=t.n(c),u=t(12),p=t.n(u),m=t(13),E=t.n(m),f=t(14),h=t.n(f),b=t(15),v=t.n(b),y=t(5),C=t.n(y),V=t(4),j=t(55),M=t(51),w=t(19),P=t(56),S=t(78),k=t(59),x=t.n(k),_=t(63),H=t.n(_),N=t(107),T=t(133),q=t(54),Y=t(26),F=t(7),L=t(49),A=t.n(L),R=(t(1596),Y.a.Item),B=V.Select.Option,U=H.a.YearPicker,z=function(e){function r(){var e,f;d()(this,r);for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(f=E()(this,(e=h()(r)).call.apply(e,[this].concat(t)))).search=function(){f.props.form.validateFields(function(e,a){a.year&&(a.year=a.year.format("YYYY"));var t=a.dept;if(t){var n=JSON.parse(t).refpk;a.dept=n}f.getQuery(a,0)})},f.reset=function(){f.props.form.resetFields()},f.getQuery=function(e,a){var t=Object(F.f)(f.props.queryParam),n=t.pageParams,r=t.whereParams;for(var l in r=Object(F.f)(r),n.pageIndex=0,e){var o=!0,s=!1,i=void 0;try{for(var c,d=r.entries()[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var u=x()(c.value,2),p=u[0];if(l===u[1].key){r.splice(p,1);break}}}catch(e){s=!0,i=e}finally{try{o||null==d.return||d.return()}finally{if(s)throw i}}if((e[l]||0===e[l])&&0===a){var m="LIKE";["code","month"].includes(l)&&(m="EQ"),r.push({key:l,value:e[l],condition:m})}}t.whereParams=r,g.actions.popupEdit.updateState(t),0===a&&g.actions.popupEdit.loadList(t),f.props.onCloseEdit()},f}return v()(r,e),p()(r,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.onCallback,n=a.getFieldProps;return I.a.createElement(N.a,{form:a,reset:this.reset,onCallback:t,search:this.search,intl:this.props.intl},I.a.createElement(Y.a,{size:"sm"},I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0001",defaultMessage:"员工编号"})},I.a.createElement(V.FormControl,D()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0002",defaultMessage:"精确查询"})},n("code",{initialValue:""})))),I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0003",defaultMessage:"员工姓名"})},I.a.createElement(V.FormControl,D()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0004",defaultMessage:"模糊查询"})},n("name",{initialValue:""})))),I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0005",defaultMessage:"部门"})},I.a.createElement(q.a,n("dept",{initialValue:""}))),I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0006",defaultMessage:"年份"})},I.a.createElement(U,D()({},n("year",{initialValue:null}),{format:"YYYY",locale:A.a,placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0007",defaultMessage:"选择年"})}))),I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0008",defaultMessage:"月份"})},I.a.createElement(T.a,n("month",{initialValue:""}))),I.a.createElement(R,{label:I.a.createElement(O.a,{id:"js.com.Sea3.0009",defaultMessage:"是否超标"})},I.a.createElement(V.Select,n("exdeeds",{initialValue:""}),I.a.createElement(B,{value:""},I.a.createElement(O.a,{id:"js.com.Sea3.0010",defaultMessage:"请选择"})),I.a.createElement(B,{value:"0"},I.a.createElement(O.a,{id:"js.com.Sea3.0011",defaultMessage:"未超标"})),I.a.createElement(B,{value:"1"},I.a.createElement(O.a,{id:"js.com.Sea3.0012",defaultMessage:"超标"}))))))}}]),r}(o.Component),G=Y.a.createForm()(Object(O.d)(z)),J=t(9),Q=t.n(J),K=t(18),W=t.n(K),X=t(33),$=t.n(X),Z=t(67),ee=t(34),ae=(t(1597),Y.a.Item),te=V.Select.Option,ne=(H.a.YearPicker,"YYYY-MM-DD HH:mm:ss"),re=[I.a.createElement(O.a,{id:"js.com.Pop.0001",defaultMessage:"新增"}),I.a.createElement(O.a,{id:"js.com.Pop.0002",defaultMessage:"修改"}),I.a.createElement(O.a,{id:"js.com.Pop.0003",defaultMessage:"详情"})],le=function(e){function a(e){var r;return d()(this,a),(r=E()(this,h()(a).call(this,e))).onCloseEdit=function(){r.setState({rowData:{},btnFlag:0}),r.props.onCloseEdit()},r.onSubmitEdit=function(){var t=$()(r),n=t.state.btnFlag;t.props.form.validateFields(function(e,a){e||(a=t.onHandleSaveData(a),r.onCloseEdit(),a.btnFlag=n,g.actions.popupEdit.saveOrder(a))})},r.onHandleSaveData=function(e){var a=$()(r),t=r.state.rowData,n={};return t&&(n=Object.assign({},t,e)),n.year=n.year.format("YYYY"),n.applyTime&&(n.applyTime=n.applyTime.format(ne)),a.onHandleRef(n),n},r.onHandleRef=function(e){for(var a=["dept","postLevel"],t=0,n=a.length;t<n;t++){var r=JSON.parse(e[a[t]]);e[a[t]]=r.refpk}},r.onHandleBtns=function(e){var a=$()(r),t=[{label:I.a.createElement(O.a,{id:"js.com.Pop.0004",defaultMessage:"取消"}),fun:r.onCloseEdit,shape:"border"},{label:I.a.createElement(O.a,{id:"js.com.Pop.0005",defaultMessage:"确定"}),fun:a.onSubmitEdit,colors:"primary"}];return 2==e&&(t=[]),t},r.state={rowData:{},btnFlag:0,cancelFlag:!1},r}var t;return v()(a,e),p()(a,[{key:"componentWillReceiveProps",value:(t=W()(Q.a.mark(function e(a){var t,n,r,l,o,s,i,c,d;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(t=this).props,r=n.btnFlag,l=n.currentIndex,o=a.btnFlag,s=a.currentIndex,i=a.editModelVisible,r!==o||l!==s){t.props.form.resetFields(),this.setState({btnFlag:o}),c={};try{0!==o&&i&&(d=this.props.list,c=d[s]||{})}catch(e){console.log(e)}finally{this.setState({rowData:c})}}case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,a=e.form,t=e.editModelVisible,n=this.state,r=n.rowData,l=n.btnFlag,o=a.getFieldProps,s=a.getFieldError,i=r.code,c=r.serviceYearsCompany,d=r.pickTime,u=r.postLevel,p=r.levelName,m=r.year,f=r.sex,g=r.allowanceStandard,E=r.remark,h=r.deptName,b=r.dept,v=r.exdeeds,y=r.allowanceActual,j=r.allowanceType,M=r.month,w=r.pickType,P=r.name,S=r.serviceYears,k=r.applyTime;console.log("rowData",g);var x=this.onHandleBtns(l);return I.a.createElement(Z.a,{show:t,title:re[l],size:"lg",btns:x,autoFocus:!1,enforceFocus:!1,close:this.onCloseEdit,className:"single-table-pop-model"},I.a.createElement(Y.a,null,I.a.createElement(ae,{label:I.a.createElement(O.a,{id:"js.com.Pop.0006",defaultMessage:"员工编号"})},I.a.createElement(V.FormControl,D()({disabled:!0},o("code",{initialValue:i||""})))),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0007",defaultMessage:"员工姓名"})},I.a.createElement(V.FormControl,D()({disabled:2===l},o("name",{validateTrigger:"onBlur",initialValue:P||"",rules:[{type:"string",required:!0,pattern:/\S+/gi,message:I.a.createElement(O.a,{id:"js.com.Pop.0008",defaultMessage:"请输入员工姓名"})}]}))),I.a.createElement(ee.a,{errorMsg:s("name")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0009",defaultMessage:"员工性别"})},I.a.createElement(V.Select,D()({disabled:2===l},o("sex",{initialValue:void 0!==f?f:0,rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0010",defaultMessage:"请选择员工性别"})}]})),I.a.createElement(te,{value:0},I.a.createElement(O.a,{id:"js.com.Pop.0011",defaultMessage:"女"})),I.a.createElement(te,{value:1},I.a.createElement(O.a,{id:"js.com.Pop.0012",defaultMessage:"男"}))),I.a.createElement(ee.a,{errorMsg:s("sex")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0013",defaultMessage:"部门"})},I.a.createElement(q.a,D()({disabled:2===l,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0014",defaultMessage:"请选择部门"})},o("dept",{initialValue:JSON.stringify({refname:h||"",refpk:b||""}),rules:[{message:I.a.createElement(O.a,{id:"js.com.Pop.0015",defaultMessage:"请选择部门"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}),{backdrop:!1})),I.a.createElement(ee.a,{errorMsg:s("dept")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0016",defaultMessage:"职级"})},I.a.createElement(q.b,D()({disabled:2===l,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0017",defaultMessage:"请选择职级"})},o("postLevel",{initialValue:JSON.stringify({refpk:u?u.toString():"",refname:p?p.toString():""}),rules:[{message:I.a.createElement(O.a,{id:"js.com.Pop.0018",defaultMessage:"请选择职级"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}))),I.a.createElement(ee.a,{errorMsg:s("postLevel")})),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0019",defaultMessage:"工龄"})},I.a.createElement(V.InputNumber,D()({iconStyle:"one",min:0,step:1,disabled:2===l,max:99},o("serviceYears",{initialValue:"number"==typeof S?S:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0020",defaultMessage:"司龄"})},I.a.createElement(V.InputNumber,D()({iconStyle:"one",min:0,step:1,disabled:2===l,max:99},o("serviceYearsCompany",{initialValue:"number"==typeof c?c:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0021",defaultMessage:"年份"})},I.a.createElement(H.a,D()({disabled:2==l},o("year",{initialValue:m?C()(m):C()(),validateTrigger:"onBlur",rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]}),{getCalendarContainer:function(){return document.querySelector(".single-table-pop-model")},format:"YYYY",locale:A.a,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0023",defaultMessage:"选择年"})}))),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0024",defaultMessage:"月份"})},I.a.createElement(T.a,D()({disabled:2===l},o("month",{initialValue:M||1,rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0025",defaultMessage:"请选择月份"})}]}))),I.a.createElement(ee.a,{errorMsg:s("month")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0026",defaultMessage:"补贴类别"})},I.a.createElement(V.Select,D()({disabled:2===l},o("allowanceType",{initialValue:j?j.toString():"1",rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0027",defaultMessage:"请选择补贴类别"})}]})),I.a.createElement(te,{value:"1"},I.a.createElement(O.a,{id:"js.com.Pop.0028",defaultMessage:"电脑补助"})),I.a.createElement(te,{value:"2"},I.a.createElement(O.a,{id:"js.com.Pop.0029",defaultMessage:"住宿补助"})),I.a.createElement(te,{value:"3"},I.a.createElement(O.a,{id:"js.com.Pop.0030",defaultMessage:"交通补助"}))),I.a.createElement(ee.a,{errorMsg:s("allowanceType")})),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0031",defaultMessage:"补贴标准"})},I.a.createElement(V.InputNumber,D()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===l},o("allowanceStandard",{initialValue:g?Number(g):100})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0032",defaultMessage:"实际补贴"})},I.a.createElement(V.InputNumber,D()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===l},o("allowanceActual",{initialValue:y?Number(y):100})))),I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0033",defaultMessage:"是否超标"})},I.a.createElement(V.Select,D()({disabled:2===l},o("exdeeds",{initialValue:v?v.toString():"0",rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0034",defaultMessage:"请选择是否超标"})}]})),I.a.createElement(te,{value:"0"},I.a.createElement(O.a,{id:"js.com.Pop.0035",defaultMessage:"未超标"})),I.a.createElement(te,{value:"1"},I.a.createElement(O.a,{id:"js.com.Pop.0036",defaultMessage:"超标"}))),I.a.createElement(ee.a,{errorMsg:s("exdeeds")})),2<=l?I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0037",defaultMessage:"申请时间"})},I.a.createElement(H.a,D()({className:"form-item",format:ne,disabled:2===l},o("applyTime",{initialValue:k?C()(k):C()(),validateTrigger:"onBlur",rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]})))):null,I.a.createElement(ae,{required:!0,label:I.a.createElement(O.a,{id:"js.com.Pop.0038",defaultMessage:"领取方式"})},I.a.createElement(V.Select,D()({disabled:2===l},o("pickType",{initialValue:w?w.toString():"1",rules:[{required:!0,message:I.a.createElement(O.a,{id:"js.com.Pop.0039",defaultMessage:"请选择领取方式"})}]})),I.a.createElement(te,{value:"1"},I.a.createElement(O.a,{id:"js.com.Pop.0040",defaultMessage:"转账"})),I.a.createElement(te,{value:"2"},I.a.createElement(O.a,{id:"js.com.Pop.0041",defaultMessage:"现金"}))),I.a.createElement(ee.a,{errorMsg:s("pickType")})),2<=l?I.a.createElement(ae,{className:"time",label:I.a.createElement(O.a,{id:"js.com.Pop.0042",defaultMessage:"领取时间"})},I.a.createElement(H.a,D()({className:"form-item",format:ne,disabled:2===l},o("pickTime",{initialValue:d&&C()(d)||"",validateTrigger:"onBlur",rules:[{required:!1,message:I.a.createElement(O.a,{id:"js.com.Pop.0043",defaultMessage:"请选择领取时间"})}]})))):null,I.a.createElement(ae,{label:I.a.createElement(O.a,{id:"js.com.Pop.0044",defaultMessage:"备注"})},I.a.createElement(V.FormControl,D()({disabled:2===l},o("remark",{initialValue:E||""}))))))}}]),a}(o.Component),oe=Y.a.createForm()(Object(O.d)(le)),se=(t(1598),"YYYY-MM-DD HH:mm:ss"),ie=function(e){function a(e){var o;return d()(this,a),(o=E()(this,h()(a).call(this,e))).onRefreshList=function(){g.actions.popupEdit.loadList(o.props.queryParam)},o.freshData=function(e){o.onPageSelect(e,0)},o.onDataNumSelect=function(e,a){o.onPageSelect(a,1)},o.onPageSelect=function(e,a){var t=Object(F.f)(o.props.queryParam),n=Object(F.k)(e,a,t.pageParams),r=n.pageIndex,l=n.pageSize;t.pageParams={pageIndex:r,pageSize:l},o.setState({selectedIndex:0}),g.actions.popupEdit.loadList(t)},o.onClickShowModel=function(e){o.setState({editModelVisible:!0,btnFlag:e})},o.onCloseEdit=function(){o.setState({editModelVisible:!1,btnFlag:-1})},o.onClickDel=function(){0<o.props.list.length?o.setState({delModalVisible:!0,showHoverContent:!1}):Object(F.b)(o.props.intl.formatMessage({id:"js.com.Ind4.0001",defaultMessage:"数据为空，不能删除"}))},o.column=[{title:I.a.createElement(O.a,{id:"js.com.Ind4.0002",defaultMessage:"员工编号"}),dataIndex:"code",key:"code",width:150},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0003",defaultMessage:"员工姓名"}),dataIndex:"name",key:"name",width:120,filterType:"text",filterDropdown:"show",render:function(e,a,t){return I.a.createElement(V.Tooltip,{inverse:!0,overlay:e},I.a.createElement("span",{tootip:e,className:"popTip"},e))}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0004",defaultMessage:"员工性别"}),dataIndex:"sexEnumValue",key:"sexEnumValue",width:150},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0005",defaultMessage:"所属部门"}),dataIndex:"deptName",key:"deptName",width:120},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0006",defaultMessage:"职级"}),dataIndex:"levelName",key:"levelName",width:140},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0007",defaultMessage:"工龄"}),dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right "},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0008",defaultMessage:"司龄"}),dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right "},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0009",defaultMessage:"年份"}),dataIndex:"year",key:"year",width:100,render:function(e,a,t){return I.a.createElement("div",null,e?C()(e).format("YYYY"):"")}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0010",defaultMessage:"月份"}),dataIndex:"monthEnumValue",key:"monthEnumValue",width:100},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0011",defaultMessage:"补贴类别"}),dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0012",defaultMessage:"补贴标准"}),dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,t){return I.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0013",defaultMessage:"实际补贴"}),dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,t){return I.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0014",defaultMessage:"是否超标"}),dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0015",defaultMessage:"申请时间"}),dataIndex:"applyTime",key:"applyTime",width:150,render:function(e,a,t){return I.a.createElement("div",null,e?C()(e).format(se):"")}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0016",defaultMessage:"领取方式"}),dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0017",defaultMessage:"领取时间"}),dataIndex:"pickTime",key:"pickTime",width:150,render:function(e,a,t){return I.a.createElement("div",null,e?C()(e).format(se):"")}},{title:I.a.createElement(O.a,{id:"js.com.Ind4.0018",defaultMessage:"备注"}),dataIndex:"remark",key:"remark",width:100}],o.export=function(){o.grid.exportExcel()},o.resetTableHeight=function(e){var a=0;a=e?Object(F.j)()-420:Object(F.j)()-270,o.setState({tableHeight:a})},o.state={tableHeight:0,selectedIndex:0,editModelVisible:!1,btnFlag:0,delModalVisible:!1,showHoverContent:!1},o}return v()(a,e),p()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){this.onRefreshList()}},{key:"confirmGoBack",value:function(e){if(this.setState({delModalVisible:!1}),1===e){var a=this.props.list[this.state.selectedIndex];g.actions.popupEdit.removeList(a)}}},{key:"render",value:function(){var a=this,t=this,e=t.props,n=e.list,r=e.showLoading,l=e.pageIndex,o=e.totalPages,s=e.total,i=t.state,c=i.editModelVisible,d=i.selectedIndex,u=i.btnFlag,p=i.delModalVisible,m=i.tableHeight,f=i.showHoverContent,g={activePage:l,total:s,items:o,freshData:t.freshData,onDataNumSelect:t.onDataNumSelect},E=!(0<n.length);return I.a.createElement("div",{className:"single-table-popup"},I.a.createElement(M.a,{title:this.props.intl.formatMessage({id:"js.com.Ind4.0019",defaultMessage:"A3 单表弹框编辑示例"})}),I.a.createElement(G,D()({},this.props,{onCloseEdit:this.onCloseEdit,onCallback:this.resetTableHeight})),I.a.createElement("div",{className:"table-header"},I.a.createElement(S.a,{funcCode:"singletable-popupedit"},I.a.createElement(w.a,{role:"add",colors:"primary",className:"ml8",onClick:function(){t.onClickShowModel(0)}},I.a.createElement(O.a,{id:"js.com.Ind4.0020",defaultMessage:"新增"})),I.a.createElement(w.a,{shape:"border",className:"ml8",onClick:t.export},I.a.createElement(O.a,{id:"js.com.Ind4.0021",defaultMessage:"导出"}))),I.a.createElement(P.a,{show:p,context:I.a.createElement(O.a,{id:"js.com.Ind4.0022",defaultMessage:"是否要删除 ?"}),confirmFn:function(){t.confirmGoBack(1)},cancelFn:function(){t.confirmGoBack(2)}})),I.a.createElement("div",{className:"gird-parent"},I.a.createElement(j.a,{ref:function(e){return a.grid=e},data:n,rowKey:function(e,a){return a},columns:this.column,paginationObj:g,selectedRow:this.selectedRow,multiSelect:!1,hoverContent:function(){return f?I.a.createElement(S.a,{funcCode:"singletable-popupedit"},I.a.createElement(w.a,{isAction:!0,role:"update",className:"ml8",disabled:E,onClick:function(){a.setState({showHoverContent:!1}),t.onClickShowModel(1)}},I.a.createElement(O.a,{id:"js.com.Ind4.0023",defaultMessage:"修改"})),I.a.createElement(w.a,{isAction:!0,className:"ml8",disabled:E,onClick:function(){a.setState({showHoverContent:!1}),t.onClickShowModel(2)}},I.a.createElement(O.a,{id:"js.com.Ind4.0024",defaultMessage:"详情"})),I.a.createElement(w.a,{isAction:!0,role:"delete",className:"ml8",disabled:E,onClick:t.onClickDel},I.a.createElement(O.a,{id:"js.com.Ind4.0025",defaultMessage:"删除"}))):null},onRowHover:function(e){t.setState({selectedIndex:e,showHoverContent:!0})},showHeaderMenu:!0,sort:{mode:"multiple",backSource:!0},loading:{show:r},scroll:{y:m},sheetHeader:{height:30,ifshow:!1}})),I.a.createElement(oe,{editModelVisible:c,onCloseEdit:this.onCloseEdit,currentIndex:d,btnFlag:u,list:n}))}}]),a}(o.Component),ce=Object(O.d)(ie),de=t(29),ue=t.n(de),pe=t(22),me={GET_DETAIL:"".concat("/iuap-pap-demo-be","/popup_allowances/list"),SAVE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/insertSelective"),UPDATE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/updateSelective"),DEL_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/deleteBatch"),GET_LIST:"".concat("/iuap-pap-demo-be","/popup_allowances/list")},fe={name:"popupEdit",initialState:{rowPopData:{},showLoading:!1,list:[],pageIndex:0,pageSize:25,totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return ue()({},e,a)}},effects:{loadList:(l=W()(Q.a.mark(function e(r,l){var o,s,i,c,d;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.popupEdit.updateState({showLoading:!0}),o=r||l().popupEdit.queryParam,e.t0=F.o,e.next=5,a=o,t=void 0,t=Object.assign({},a),n=Object(F.f)(t.pageParams),delete t.pageParams,Object(pe.a)(me.GET_LIST,{method:"post",data:t,param:n});case 5:e.t1=e.sent,s=(0,e.t0)(e.t1),i=s.result,c=i.data,d={showLoading:!1,queryParam:o},c&&(d=Object.assign({},d,{list:c.content,pageIndex:c.number+1,totalPages:c.totalPages,total:c.totalElements,pageSize:c.size,rowPopData:0<c.content.length?c.content[0]:{}})),g.actions.popupEdit.updateState(d);case 12:case"end":return e.stop()}var a,t,n},e)})),function(e,a){return l.apply(this,arguments)}),removeList:(r=W()(Q.a.mark(function e(t,n){var r,l,o,s,i,c,d,u,p,m;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.popupEdit.updateState({showLoading:!0}),r=t.id,l=n(),o=l.intl.localeData,s=o["js.sin.src5.0001"]||"删除成功",e.t0=F.o,e.next=8,a=[{id:r}],Object(pe.a)(me.DEL_ORDER,{method:"post",data:a});case 8:e.t1=e.sent,e.t2=s,i=(0,e.t0)(e.t1,e.t2),"success"===i.result.status?(c=n().popupEdit,d=c.queryParam,u=c.list,p=c.totalPages,0<(m=d.pageParams.pageIndex)&&m+1===p&&1===u.length&&(d.pageParams.pageIndex=m-1),g.actions.popupEdit.loadList(d)):g.actions.popupEdit.updateState({showLoading:!1});case 13:case"end":return e.stop()}var a},e)})),function(e,a){return r.apply(this,arguments)}),saveOrder:(n=W()(Q.a.mark(function e(n,r){var l,o,s,i,c,d,u,p,m,f;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g.actions.popupEdit.updateState({showLoading:!0}),l=null,o=n.btnFlag,delete n.btnFlag,s=r(),i=s.intl.localeData,0===o)return c=i["js.sin.src5.0002"]||"保存成功",e.t0=F.o,e.next=11,t=n,Object(pe.a)(me.SAVE_ORDER,{method:"post",data:t});e.next=16;break;case 11:e.t1=e.sent,e.t2=c,d=(0,e.t0)(e.t1,e.t2),u=d.result,l=u.status;case 16:if(1===o)return p=i["js.sin.src5.0003"]||"修改成功",e.t3=F.o,e.next=21,a=n,Object(pe.a)(me.UPDATE_ORDER,{method:"post",data:a});e.next=26;break;case 21:e.t4=e.sent,e.t5=p,m=(0,e.t3)(e.t4,e.t5),f=m.result,l=f.status;case 26:"success"===l?g.actions.popupEdit.loadList():g.actions.popupEdit.updateState({showLoading:!1});case 27:case"end":return e.stop()}var a,t},e)})),function(e,a){return n.apply(this,arguments)})}};s.a.model(fe);var ge=Object(g.connect)(function(e){return e.popupEdit},null)(ce),Ee=t(68);t(1599);Object(g.render)(I.a.createElement(Ee.a,null,I.a.createElement(ge,null)),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map