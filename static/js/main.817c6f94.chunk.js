(this["webpackJsonpmister-bitcoins"]=this["webpackJsonpmister-bitcoins"]||[]).push([[0],{46:function(e,t,a){e.exports=a(76)},55:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),i=a(6),l=(a(55),a(11)),s=a(16),u=a(45),m=Object(i.b)((function(e){return{loggedinUser:e.user.loggedinUser}}))((function(e){var t=e.loggedinUser,a=e.component,n=Object(u.a)(e,["loggedinUser","component"]);return console.log("loggedinUser: ",t),r.a.createElement(s.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(s.a,{to:"/login"})}}))})),h=a(14),p=function(e){return r.a.createElement("nav",{className:"nav-bar-container"},r.a.createElement(h.b,{activeClassName:"active",exact:!0,to:"/"},"HOME"),"|",r.a.createElement(h.b,{to:"/contact"},"contacts"),"|",r.a.createElement(h.b,{to:"/charts"},"Charts"))},d=function(e){return r.a.createElement("section",{className:"footer-container"},r.a.createElement("h2",null,"\xa9 2020 ",r.a.createElement("span",{className:"footer-span1"},"Mister Bitcoins")," - All Rights Reserved ",r.a.createElement("span",{className:"footer-span2"},", Ariel Zissu")))},f=a(9),g=a(4),v=a(5),b=a(8),E=a(7),C=a(2),y=a.n(C),O=a(3),j=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824",imgUrl:"https://robohash.org/21"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888",imgUrl:"https://robohash.org/22"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495",imgUrl:"https://robohash.org/23"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312",imgUrl:"https://robohash.org/24"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258",imgUrl:"https://robohash.org/24"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082",imgUrl:"https://robohash.org/25"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678",imgUrl:"https://robohash.org/26"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663",imgUrl:"https://robohash.org/27"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851",imgUrl:"https://robohash.org/28"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166",imgUrl:"https://robohash.org/29"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295",imgUrl:"https://robohash.org/30"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550",imgUrl:"https://robohash.org/31"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181",imgUrl:"https://robohash.org/32"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376",imgUrl:"https://robohash.org/33"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557",imgUrl:"https://robohash.org/34"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629",imgUrl:"https://robohash.org/35"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529",imgUrl:"https://robohash.org/36"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291",imgUrl:"https://robohash.org/37"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812",imgUrl:"https://robohash.org/38"}];function k(e){return new Promise((function(t,a){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}(),e.imgUrl=function(){var e=38,t="https://robohash.org/".concat(e);return e++,t}(),j.push(e),t(e)}))}var N={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,a){var n=j;e&&e.term&&(n=U(e.term)),t(_(n))}))},getContactById:function(e){return new Promise((function(t,a){var n=j.find((function(t){return t._id===e}));n?t(n):a("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,a){var n=j.findIndex((function(t){return t._id===e}));-1!==n&&j.splice(n,1),t(j)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,a){var n=j.findIndex((function(t){return e._id===t._id}));-1!==n&&(j[n]=e),t(e)}))}(e):k(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};function U(e){return e=e.toLocaleLowerCase(),j.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}function _(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function w(e){return function(){var t=Object(O.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=7;break}return t.next=3,N.getContactById(e);case 3:n=t.sent,a({type:"SET_CURR_CONTACT",contact:n}),t.next=9;break;case 7:r=N.getEmptyContact(),a({type:"SET_CURR_CONTACT",contact:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var S=function(e){var t=e.contact;return r.a.createElement("section",{className:"contact-prev-container"},r.a.createElement("img",{src:t.imgUrl,alt:"Profile"}),r.a.createElement("li",{className:"contact-prev-title"},t.name))};var T=function(e){var t=e.contacts;return r.a.createElement("section",{className:"contact-list-container"},r.a.createElement("ul",{className:"contact-list-contain-prev"},t.map((function(e){return r.a.createElement(h.a,{className:"contact-list-contain-link-prev",to:"/contact/"+e._id,key:e._id},r.a.createElement(S,{contact:e,key:e._id}))}))))},x=a(19),A=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state={term:""},n.onChangeHandler=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(x.a)({},r,a),(function(){n.props.onFilter(Object(f.a)({},n.state))}))},n.state=Object(f.a)({},e.filterBy),n}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"Contact-filter-container"},r.a.createElement("input",{type:"text",placeholder:"Contact Name",onChange:this.onChangeHandler,name:"term",value:this.state.term}))}}]),a}(n.Component),D=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filterBy:{term:""}},e.loadContacts=function(){e.props.loadContacts(e.state.filterBy)},e.onFilterHandler=function(t){e.setState((function(e){return{filterBy:Object(f.a)({},e.filterBy,{},t)}}),e.loadContacts)},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"render",value:function(){var e=this.props.contacts,t=this.state.filterBy;return r.a.createElement("section",{className:"contact-page-container"},r.a.createElement("h2",{className:"contact-page-title"},"Contact Page:"),r.a.createElement(A,{filterBy:t,onFilter:this.onFilterHandler}),r.a.createElement(T,{contacts:e}),r.a.createElement(h.b,{to:"/edit"},r.a.createElement("div",{className:"contact-page-add-btn btn"},"+")))}}]),a}(n.Component),B={loadContacts:function(e){return function(){var t=Object(O.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getContacts(e);case 2:n=t.sent,a({type:"SET_CONTACTS",contacts:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},H=Object(i.b)((function(e){return{contacts:e.contact.contacts}}),B)(D),L=JSON.parse(localStorage.getItem("USER"));function R(){return console.log("gUser in service: ",L),JSON.parse(JSON.stringify(L))}var z={getUser:R,addUser:function(e){return L={name:e,coins:100,moves:[]},localStorage.setItem("USER",JSON.stringify(L)),R()}};function P(){return function(e){var t=z.getUser();console.log("in actions: ",t),e({type:"SET_LOGGEDIN_USER",loggedinUser:t})}}var M=a(27),G=a.n(M);function I(){return(I=Object(O.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G()("https://blockchain.info/tobtc?currency=USD&value=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(O.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("RATE")){e.next=8;break}return console.log("data mining..."),e.next=5,G()("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 5:return a=e.sent,localStorage.setItem("RATE",JSON.stringify(a.data)),e.abrupt("return",a.data);case 8:return t=JSON.parse(t),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F={getRateBTC:function(e){return I.apply(this,arguments)},getCharts:function(){return J.apply(this,arguments)}},W=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={BTC:0},e.loaduser=Object(O.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.loadUser(),t.next=3,F.getRateBTC(e.props.loggedinUser.coins);case 3:a=t.sent,e.setState({BTC:a});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.loaduser()}},{key:"render",value:function(){var e=this.props.loggedinUser,t=this.state.BTC;return!!e&&r.a.createElement("section",{className:"home-page-container"},r.a.createElement("h1",{className:"home-page-title"},"Mister Bitcoins"),r.a.createElement("div",{className:"home-page-name"},e?"Hello ".concat(e.name,"!"):"loading..."),r.a.createElement("div",null,e?r.a.createElement("div",{className:"home-page-coins"},r.a.createElement("img",{src:"./assets/svg/coin.svg",alt:"Coin"}),r.a.createElement("span",null,"Coins:"),e.coins,"$"):"loading..."),r.a.createElement("div",null,t?r.a.createElement("div",{className:"home-page-BTC"},r.a.createElement("img",{src:"./assets/svg/bitcoin.svg",alt:"Bitcoin"}),r.a.createElement("span",null,"BTC:"),t):"loading..."))}}]),a}(n.Component),Y={loadUser:P},q=Object(i.b)((function(e){return{loggedinUser:e.user.loggedinUser}}),Y)(W),V=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={amount:null},e.changeHandle=function(t){console.log(t.target.value),e.setState({amount:t.target.value})},e.onTransfer=function(e){},e}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.contact;return r.a.createElement("section",null,r.a.createElement("h2",{className:"transfer-fund-title"},"Transfer coins to ",r.a.createElement("span",null,e.name,":")),r.a.createElement("div",{className:"transfer-fund-main"},r.a.createElement("h3",{className:"transfer-amount"},"Amount:"),r.a.createElement("input",{className:"transfer-fund-input",type:"number",placeholder:"(Number)",onChange:this.changeHandle}),r.a.createElement("div",{onClick:this.onTransfer(),className:"transfer-fund-btn"},"Transfer")))}}]),a}(n.Component),X=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onGoBackClickHandler=function(t){e.props.history.go(-1)},e.onClickEditHandler=function(){e.props.history.push("/edit/"+e.props.contact._id)},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"loadContact",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,this.props.loadContact(t);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),this.props.history.push("/contact");case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.contact;return r.a.createElement("section",{className:"contact-details-container"},r.a.createElement("div",{className:"contact-details-main-imgs"},r.a.createElement("img",{className:"contact-details-img btn",src:"../assets/svg/back.svg",onClick:this.onGoBackClickHandler,alt:"Go Back"}),r.a.createElement("img",{className:"contact-details-img btn",src:"./assets/svg/pencil.svg",onClick:this.onClickEditHandler,alt:"Edit Contact"})),r.a.createElement("div",{className:"contact-details-container-main"},r.a.createElement("h2",null,"Details Page"),r.a.createElement("img",{src:e?e.imgUrl:null,alt:"Profile"}),r.a.createElement("h3",null," ",e?e.name:"loading..."),r.a.createElement("h3",null," ",e?e.email:"loading..."),r.a.createElement("h3",null," ",e?e.phone:"loading...")),e?r.a.createElement(V,{contact:e}):"")}}]),a}(n.Component),Z={loadContact:w},$=Object(i.b)((function(e){return{contact:e.contact.currContact}}),Z)(X),K=a(40),Q=a(42),ee=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={values:null},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t,a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getCharts();case 2:t=e.sent,a=t.values,(n=a.map((function(e){return e.x=Q(1e3*e.x).format("YYYY-MM-DD"),[e.x,e.y]}))).unshift(["Date","USD"]),this.setState({values:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.values;return r.a.createElement("section",{className:"chart-page-container"},r.a.createElement("h2",{className:"chart-page-title"},"Average USD market price across major bitcoin exchanges"),r.a.createElement(K.a,{width:"500px",height:"300px",chartType:"AreaChart",loader:r.a.createElement("div",null,"Loading Chart"),data:e||[["Date","USD"],["2019-11-03",7286.36],["2019-11-13",6886.25],["2019-11-23",7486.15],["2019-12-03",6686.33]],options:{title:"Company Performance",hAxis:{title:"Year",titleTextStyle:{color:"#333"}},vAxis:{minValue:0},chartArea:{width:"50%",height:"70%"}}}))}}]),a}(n.Component),te=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:null},e.onSaveHandle=function(t){t.preventDefault(),e.props.saveContact(e.state.contact),e.props.history.push("/contact")},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{contact:Object(f.a)({},e.contact,Object(x.a)({},n,r))}}))},e.onGoBackClickHandler=function(t){e.props.history.go(-1)},e.onDeleteHandle=function(t){e.props.deleteContact(e.state.contact._id),e.props.history.push("/contact")},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.loadContact()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.loadContact()}},{key:"componentWillUnmount",value:function(){this.props.clearContact()}},{key:"loadContact",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,this.props.loadContact(t);case 4:a=this.props.currContact,this.setState({contact:Object(f.a)({},a)}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),this.props.history.push("/contact");case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact;return!!e&&r.a.createElement("section",null,r.a.createElement("div",{className:"edit-page-main-imgs"},r.a.createElement("img",{className:"edit-page-img btn",src:"./assets/svg/back.svg",onClick:this.onGoBackClickHandler,alt:"Go Back"}),e._id?r.a.createElement("img",{className:"edit-page-img btn",src:"./assets/svg/delete.svg",onClick:this.onDeleteHandle,alt:"Delete Contact"}):""),e._id?r.a.createElement("section",{className:"edit-page-container"},r.a.createElement("h2",null,"Edit Page"),r.a.createElement("form",{onSubmit:this.onSaveHandle,className:"edit-page-form-main"},r.a.createElement("label",null,"Enter a contact name: "),r.a.createElement("input",{type:"text",value:e.name,name:"name",onChange:this.handleChange}),r.a.createElement("label",null,"Enter email: "),r.a.createElement("input",{type:"text",value:e.email,name:"email",onChange:this.handleChange}),r.a.createElement("label",null,"Enter phone number: "),r.a.createElement("input",{type:"text",value:e.phone,name:"phone",onChange:this.handleChange}),r.a.createElement("button",null,"Save"))):"",e._id?"":r.a.createElement("section",{className:"edit-page-container"},r.a.createElement("h2",null,"Add Page"),r.a.createElement("form",{onSubmit:this.onSaveHandle,className:"edit-page-form-main"},r.a.createElement("label",null,"Enter a contact name: "),r.a.createElement("input",{type:"text",value:e.name,name:"name",onChange:this.handleChange}),r.a.createElement("label",null,"Enter email: "),r.a.createElement("input",{type:"text",value:e.email,name:"email",onChange:this.handleChange}),r.a.createElement("label",null,"Enter phone number: "),r.a.createElement("input",{type:"text",value:e.phone,name:"phone",onChange:this.handleChange}),r.a.createElement("button",null,"Save"))))}}]),a}(n.Component),ae={loadContact:w,clearContact:function(){return function(){var e=Object(O.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_CURR_CONTACT",contact:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},saveContact:function(e){return function(){var t=Object(O.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!!e._id,t.next=3,N.saveContact(e);case 3:return e=t.sent,a(n?{type:"UPDATE_CONTACT",contact:e}:{type:"ADD_CONTACT",contact:e}),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(e){return function(){var t=Object(O.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.deleteContact(e);case 2:a({type:"DELETE_CONTACT",contactId:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ne=Object(i.b)((function(e){return{currContact:e.contact.currContact}}),ae)(te),re=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:""},e.changeHandle=function(t){e.setState({username:t.target.value})},e.loginHandle=function(){e.props.signup(e.state.username),e.setState({username:""}),e.props.history.push("/")},e}return Object(v.a)(a,[{key:"render",value:function(){return this.props.loggedinUser?r.a.createElement(s.a,{to:"/"}):r.a.createElement("section",{className:"login-page-container"},r.a.createElement("img",{src:"./assets/svg/coin1.svg",alt:"Welcome home!"}),r.a.createElement("h2",null,"Please enter your name:"),r.a.createElement("input",{type:"text",placeholder:"Enter name",onChange:this.changeHandle}),r.a.createElement("div",{className:"login-page-btn btn",onClick:this.loginHandle},"Login"))}}]),a}(n.Component),ce={signup:function(e){return function(t){t({type:"SET_LOGGEDIN_USER",loggedinUser:z.addUser(e)})}}},oe=Object(i.b)((function(e){return{loggedinUser:e.user.loggedinUser}}),ce)(re),ie=Object(l.a)();var le={loadUser:P},se=Object(i.b)(null,le)((function(e){return(0,e.loadUser)(),r.a.createElement("section",null,r.a.createElement(s.c,{history:ie},r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(s.d,null,r.a.createElement(m,{path:"/",exact:!0,component:q}),r.a.createElement(s.b,{path:"/login",component:oe}),r.a.createElement(m,{path:"/contact/:id",component:$}),r.a.createElement(m,{path:"/contact",exact:!0,component:H}),r.a.createElement(m,{path:"/edit/:id?",component:ne}),r.a.createElement(m,{path:"/charts",component:ee}),r.a.createElement(s.a,{from:"*",to:"/"})))),r.a.createElement(d,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=a(18),me=a(43),he=a(44),pe={contacts:[],currContact:null};var de={loggedinUser:null};var fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,ge=Object(ue.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(f.a)({},e,{contacts:t.contacts});case"SET_CURR_CONTACT":return Object(f.a)({},e,{currContact:t.contact});case"ADD_CONTACT":return Object(f.a)({},e,{contacts:[].concat(Object(he.a)(e.contacts),[t.contact])});case"UPDATE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"DELETE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGEDIN_USER":return Object(f.a)({},e,{loggedinUser:t.loggedinUser});default:return e}}}),ve=Object(ue.e)(ge,fe(Object(ue.a)(me.a)));o.a.render(r.a.createElement(i.a,{store:ve},r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.817c6f94.chunk.js.map