(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(16),n(6)),u=n(3),i=n(4),s=n(8),p=n(5),v=n(9),m=n(7),f=function(e){var t=e.buttonType,n=e.onClick,a=e.value;return r.a.createElement("button",{className:t,onClick:function(){return n(a)},type:"button"},a)};f.defaultProps={buttonType:""};var k=f,h=function(e){var t=e.onClick,n=e.value;return r.a.createElement(k,{buttonType:"digit",onClick:t,value:n})},b=function(e){var t=e.onClick;return Object(m.a)(Array(10).keys()).map(function(e){return r.a.createElement(h,{key:"dig_".concat(e),onClick:t,value:e})})},d=function(e){var t=e.onClick,n=e.value;return r.a.createElement(k,{buttonType:"operator",onClick:t,value:n})},C=function(e){var t=e.onClick;return["+","-","*","/"].map(function(e){return r.a.createElement(d,{key:"op_".concat(e),onClick:t,value:e})})},E=function(e){var t=e.onClick;return r.a.createElement(k,{buttonType:"reset",onClick:t,value:"RESET"})},w=function(e){var t=e.value;return r.a.createElement("div",{className:"result"},t)},y=function(e){var t=e.onClick;return r.a.createElement(k,{buttonType:"operator",onClick:t,value:"="})},g=["+","-","*","/"],O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={latestValue:"",result:""},n.isOperator=function(e){return g.includes(e)},n.isAllowed=function(e){var t=n.state,a=t.latestValue;return(""!==t.result||!n.isOperator(e))&&(!n.isOperator(a)||!n.isOperator(e))},n.updateResult=function(e){n.isAllowed(e)&&n.setState(function(t){return{latestValue:e,result:"".concat(t.result).concat(e)}})},n.onSumUp=function(){for(var e=n.state.result,t=n.isOperator(e[e.length-1])?e.substring(0,e.length-1):e,a="",r=t[0],o=[],c=1;c<=t.length;c+=1){var u=t.charAt(c);n.isOperator(u)?(o.push([Number(a),u]),a="",console.log("x is op",o)):(a+=u,console.log("x not op",a))}console.log(o),o.forEach(function(e){var t=Object(l.a)(e,2),n=t[0];switch(t[1]){case"+":r+=n;break;case"-":r-=n;break;case"*":r*=n;break;case"/":r/=n}}),n.setState({latestValue:"",result:r.toString()})},n.resetState=function(){n.setState({latestValue:"",result:""})},n}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.result;return r.a.createElement("div",{className:"main-container"},r.a.createElement(w,{value:e}),r.a.createElement(b,{onClick:this.updateResult}),r.a.createElement(C,{onClick:this.updateResult}),r.a.createElement(y,{onClick:this.onSumUp}),r.a.createElement(E,{onClick:this.resetState}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.80e354b3.chunk.js.map