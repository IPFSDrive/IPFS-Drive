(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[22],{364:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(3),a=n(334),o=function(){return function(e){Object(a.getAllProviders)().then((function(t){return e({type:r.y,payload:t.providers})}))}},c=function(){return function(e){Object(a.getAllConfigDump)().then((function(t){return e({type:r.u,status:r.L,payload:t})}),(function(t){return e({type:r.u,status:r.J,payload:t})}))}}},688:function(e,t){},836:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n(32),o=n(68),c=n(67),l=n(326),i=n(0),s=n.n(i),u=n(83),m=n(50),p=n(360),f=n(779),d=n(110),h=n(85),b=n(39),g=n(13),E=n(51),v=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e,a){var o;Object(r.a)(this,n),(o=t.call(this,e,a)).onUpdateClicked=function(){var e=o.state.remote.name;o.props.history.push("/newdrive/edit/"+e)};var c=o.props,l=c.remote,i=c.remoteName;return l.name=i,o.state={remote:l},o.onDeleteClicked=o.onDeleteClicked.bind(Object(d.a)(o)),o.onUpdateClicked=o.onUpdateClicked.bind(Object(d.a)(o)),o}return Object(a.a)(n,[{key:"onDeleteClicked",value:function(){var e=this.state.remote.name,t=this.props.refreshHandle;window.confirm("Are you sure you wish to delete ".concat(e,"? You cannot restore it once it is deleted."))&&h.a.post(E.a.deleteConfig,{name:e}).then((function(e){t(),b.b.info("Config deleted")}),(function(e){b.b.error("Error deleting config")}))}},{key:"render",value:function(){var e=this.state.remote,t=e.name,n=e.type,r=this.props.sequenceNumber;return s.a.createElement("tr",{"data-test":"configRowComponent"},s.a.createElement("th",{scope:"row"},r),s.a.createElement("td",null,t),s.a.createElement("td",null,n),s.a.createElement("td",null,s.a.createElement(p.a,{className:"bg-info mr-2",onClick:this.onUpdateClicked},"Update"),s.a.createElement(p.a,{className:"bg-danger",onClick:this.onDeleteClicked},"Delete")))}}]),n}(s.a.Component),y=Object(g.g)(v),C=n(107),k=n(364);n(678);function j(e){for(var t=e.remotes,n=e.refreshHandle,r=[],a=1,o=0,c=Object.entries(t);o<c.length;o++){var i=Object(l.a)(c[o],2),u=i[0],m=i[1];r.push(s.a.createElement(y,{sequenceNumber:a,key:u,remoteName:u,remote:m,refreshHandle:n})),a++}return r}var O=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.getConfigDump()}},{key:"render",value:function(){var e=this;var t="".split(",").map((function(e,t){return s.a.createElement("span",{style:{"margin-left":"20px"}},s.a.createElement("i",{className:["nav-icon "+e.toString().replace(".","")],key:t,style:{"font-size":"20px"}})," ",e)}));return s.a.createElement("div",{"data-test":"showConfigComponent"},s.a.createElement(u.a,null,s.a.createElement(m.a,{lg:8,className:"mb-4"},s.a.createElement(p.a,{color:"primary",className:"float-left",onClick:function(){return e.props.history.push("/simplenewdrive")}},"Create a New Config")),s.a.createElement(m.a,{lg:4})),t,s.a.createElement(f.a,{responsive:!0,className:"table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"No."),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Actions"))),s.a.createElement("tbody",null,s.a.createElement(j,{remotes:this.props.remotes,refreshHandle:this.props.getConfigDump}))))}}]),n}(s.a.PureComponent);t.default=Object(C.b)((function(e){return{remotes:e.config.configDump,hasError:e.config.hasError,error:e.config.error}}),{getConfigDump:k.a})(O)}}]);
//# sourceMappingURL=22.c42f70e3.chunk.js.map