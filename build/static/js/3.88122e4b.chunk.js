(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{32:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return n})},37:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(10),l=a(11),c=a(13),i=a(12),u=a(14),o=a(1),s=a.n(o),d=1e4,w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onChangeHandler=function(e){"withdrawalAmount"===e.target.name&&e.target.value>a.state.ledgerBalance?a.setState({balanceErr:"Insufficient Account Balance"}):a.setState({balanceErr:""}),a.setState(Object(n.a)({},e.target.name,e.target.value))},a.withdrawHandler=function(e){a.state.ledgerBalance<a.state.withdrawalAmount?a.setState({withdrawalMsg:"Insufficient Account Balance."}):a.state.withdrawalPerDay+a.state.withdrawalAmount>d?a.setState({withdrawalMsg:"Daily withdrawal limit exceeds."}):(a.setState(function(e){return{ledgerBalance:e.ledgerBalance-a.state.withdrawalAmount}}),a.setState({withdrawalMsg:"".concat(a.state.withdrawalAmount," INR Debited from your account.")}))},a.cancelHandler=function(e){localStorage.removeItem("token"),a.props.history.push("/login")},a.state={balance:5e3,ledgerBalance:5e3,accountType:"saving",withdrawalAmount:0,balanceErr:"",withdrawalPerDay:0,withdrawalMsg:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null," Available balance is ",this.state.ledgerBalance," INR"),s.a.createElement("span",null,this.state.withdrawalMsg),s.a.createElement("p",null,"Select Account Type:"),s.a.createElement("input",{type:"radio",id:"accountType1",name:"accountType",value:"saving",checked:"saving"==this.state.accountType,onChange:this.onChangeHandler}),s.a.createElement("label",{for:"accountType1"},"Current"),s.a.createElement("input",{type:"radio",id:"accountType2",name:"accountType",value:"current",checked:"current"==this.state.accountType,onChange:this.onChangeHandler}),s.a.createElement("label",{for:"accountType2"},"Saving"),s.a.createElement("br",null),s.a.createElement("label",{for:"withdrawalAmount"},"Enter Withdrawal Amount:"),s.a.createElement("input",{type:"text",id:"withdrawalAmount",name:"withdrawalAmount",value:this.state.withdrawalAmount,onChange:this.onChangeHandler}),s.a.createElement("span",null,this.state.balanceErr),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.withdrawHandler},"Withdraw"),s.a.createElement("button",{onClick:this.cancelHandler},"Cancel"))}}]),t}(s.a.Component);t.default=w}}]);
//# sourceMappingURL=3.88122e4b.chunk.js.map