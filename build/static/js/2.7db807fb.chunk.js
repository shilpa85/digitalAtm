(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},35:function(e){e.exports=[{id:"1",username:"username1",password:"password1"},{id:"2",username:"username2",password:"password2"}]},38:function(e,t,n){"use strict";n.r(t);var r=n(32);var a=n(10),s=n(11),o=n(13),u=n(12),c=n(14),l=n(1),i=n.n(l),p=n(35),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).onChangeHandler=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}({},n.state.user,Object(r.a)({},e.target.name,e.target.value));n.setState({user:t})},n.loginHandler=function(e){e.preventDefault();var t=JSON.stringify(p),r=JSON.parse(t);console.log(r);var a=r.find(function(e){return e.username===n.state.user.username&&e.password===n.state.user.password});void 0!==a&&(localStorage.setItem("token",a.username),n.props.history.push("/account"))},n.state={user:{username:"",password:""}},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",null,i.a.createElement("div",{className:"container"},i.a.createElement("label",{for:"uname"},"Username"),i.a.createElement("input",{type:"text",value:this.state.user.username,onChange:this.onChangeHandler,placeholder:"Enter Username",name:"username",required:!0}),i.a.createElement("label",{for:"psw"},"Password"),i.a.createElement("input",{type:"password",value:this.state.user.password,onChange:this.onChangeHandler,placeholder:"Enter Password",name:"password",required:!0}),i.a.createElement("button",{type:"submit",onClick:this.loginHandler},"Login"))))}}]),t}(i.a.Component);t.default=m}}]);
//# sourceMappingURL=2.7db807fb.chunk.js.map