(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[15],{356:function(e,t,a){"use strict";var n=a(6),r=a(12),i=a(0),s=a.n(i),o=a(4),c=a.n(o),l=a(37),u=a.n(l),d=a(29),m={tag:d.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},v=function(e){var t=e.className,a=e.cssModule,i=e.color,o=e.body,c=e.inverse,l=e.outline,m=e.tag,v=e.innerRef,g=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.m)(u()(t,"card",!!c&&"text-white",!!o&&"card-body",!!i&&(l?"border":"bg")+"-"+i),a);return s.a.createElement(m,Object(n.a)({},g,{className:f,ref:v}))};v.propTypes=m,v.defaultProps={tag:"div"},t.a=v},357:function(e,t,a){"use strict";var n=a(6),r=a(12),i=a(0),s=a.n(i),o=a(4),c=a.n(o),l=a(37),u=a.n(l),d=a(29),m={tag:d.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},v=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,o=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(t,"card-body"),a);return s.a.createElement(o,Object(n.a)({},c,{className:l,ref:i}))};v.propTypes=m,v.defaultProps={tag:"div"},t.a=v},364:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(3),r=a(334),i=function(){return function(e){Object(r.getAllProviders)().then((function(t){return e({type:n.y,payload:t.providers})}))}},s=function(){return function(e){Object(r.getAllConfigDump)().then((function(t){return e({type:n.u,status:n.L,payload:t})}),(function(t){return e({type:n.u,status:n.J,payload:t})}))}}},399:function(e,t,a){"use strict";var n=a(31),r=a(32),i=a(110),s=a(68),o=a(67),c=a(0),l=a.n(c),u=a(833),d=a(823),m=a(824),v=a(825),g=a(360),f=a(108),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).toggle=r.toggle.bind(Object(i.a)(r)),r}return Object(r.a)(a,[{key:"toggle",value:function(){this.props.closeModal()}},{key:"render",value:function(){var e=this.props.isVisible;return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement(u.a,{isOpen:e,toggle:this.toggle},l.a.createElement(d.a,{toggle:this.toggle,"data-test":"modalHeader"},"Configuring your drive."),l.a.createElement(m.a,{"data-test":"modalBody"},"A page will open for you with the authentication for your drive. This modal will automatically dismiss upon successful creation"),l.a.createElement(v.a,{"data-test":"modalFooter"},l.a.createElement(g.a,{color:"primary",onClick:this.toggle},"Done")," "))))}}]),a}(l.a.Component);p.defaultProps={isVisible:!0},t.a=p},401:function(e,t,a){"use strict";var n=a(6),r=a(12),i=a(0),s=a.n(i),o=a(4),c=a.n(o),l=a(37),u=a.n(l),d=a(29),m={children:c.a.node,tag:d.q,className:c.a.string,cssModule:c.a.object,valid:c.a.bool,tooltip:c.a.bool},v={tag:"div",valid:void 0},g=function(e){var t=e.className,a=e.cssModule,i=e.valid,o=e.tooltip,c=e.tag,l=Object(r.a)(e,["className","cssModule","valid","tooltip","tag"]),m=o?"tooltip":"feedback",v=Object(d.m)(u()(t,i?"valid-"+m:"invalid-"+m),a);return s.a.createElement(c,Object(n.a)({},l,{className:v}))};g.propTypes=m,g.defaultProps=v,t.a=g},402:function(e,t){e.exports="data:image/png;base64,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"},403:function(e,t){e.exports="data:image/png;base64,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"},834:function(e,t,a){"use strict";a.r(t);var n=a(326),r=a(86),i=a.n(r),s=a(111),o=a(1),c=a(9),l=a(31),u=a(32),d=a(110),m=a(68),v=a(67),g=a(0),f=a.n(g),p=a(456),h=a(457),A=a(50),S=a(350),I=a(401),E=a(318),b=a(83),k=a(360),y=a(356),B=a(357),N=(a(399),a(85)),C=a(84),R=a(379),O=a.n(R),V=function(e,t){var a=t.trim().toLowerCase(),n=a.length;return 0===n?e:0===n?[]:e.filter((function(e){return e.Description.toLowerCase().slice(0,n)===a}))},w=function(e){return e.Prefix},x=function(e){return f.a.createElement("div",null,e.Description)},Q=(f.a.Component,a(39)),J=a(364),j=a(107),P=a(38),T=a(108),Z=a(51);a(402),a(403);function D(e){var t=e.key,a=e.id,n=e.label,r=e.changeHandler,i=e.type,s=e.value,o=e.name,c=e.placeholder,l=e.isValid,u=void 0!==l&&l;return f.a.createElement(p.a,{key:t,row:!0},f.a.createElement(h.a,{for:a,sm:5},n),f.a.createElement(A.a,{sm:7},f.a.createElement(S.a,{type:i,value:s,name:o,placeholder:c,id:a,onChange:r,valid:u,invalid:!u,required:!0}),f.a.createElement(I.a,{valid:!0},"Sweet! that name is available"),f.a.createElement(I.a,null,"Sad! That name is already assigned or empty")))}var G=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e,n){var r;return Object(l.a)(this,a),(r=t.call(this,e,n)).toggle=function(e){var t=e.target.name;r.setState(Object(c.a)({},t,!r.state[t]))},r.handleInputChange=function(e){var t=e.target.name,a=e.target.value,n=r.state.optionTypes[t];r.setState({formValues:Object(o.a)(Object(o.a)({},r.state.formValues),{},Object(c.a)({},t,a))});var i=!0,s="";"SizeSuffix"===n?(i=Object(C.q)(a))||(s="The valid input is size( off | {unit}{metric} eg: 10G, 100M, 10G100M etc.)"):"Duration"===n?(i=Object(C.o)(a))||(s="The valid input is time ({unit}{metric} eg: 10ms, 100m, 10h15ms etc.)"):"int"===n&&((i=Object(C.p)(a))||(s="The valid input is int (100,200,300 etc)")),!r.state.required[t]||a&&""!==a||(i=!1)||(s+=" This field is required"),r.setState((function(e){return{isValid:Object(o.a)(Object(o.a)({},e.isValid),{},Object(c.a)({},t,i)),formErrors:Object(o.a)(Object(o.a)({},e.formErrors),{},Object(c.a)({},t,s))}}))},r.changeDriveType=function(e,t){var a=t.newValue,n=r.props.providers,i=a,s={},o={},c={},l={},u={};if(void 0!==i&&""!==i){var d=Object(C.f)(n,i);void 0!==d&&d.Options.forEach((function(e){var t=e.DefaultStr,a=e.Type,n=e.Name,r=e.Required;0===e.Hide&&(s[n]=t,o[n]=a,u[n]=r,c[n]=!(r&&(!t||""===t)),l[n]="")})),r.setState({drivePrefix:i,formValues:s,optionTypes:o,isValid:c,formErrors:l,required:u})}else r.setState({drivePrefix:i})},r.openSetupDrive=function(e){e&&e.preventDefault(),r.setState({colSetup:!0})},r.editAdvancedOptions=function(e){r.setState({advancedOptions:!r.state.advancedOptions})},r.clearForm=function(e){r.setState({driveName:"",drivePrefix:""})},r.changeS3Key=function(e){var t=!0;e&&0!==(e=e.trim()).length||(t=!1),r.setState({s3Key:e||"",s3KeyIsValid:t})},r.changeW3sToken=function(e){var t=!0;e&&0!==(e=e.trim()).length||(t=!1),r.setState({w3sToken:e||"",w3sTokenIsValid:t})},r.changeS3Secret=function(e){var t=!0;e&&0!==(e=e.trim()).length||(t=!1),r.setState({s3Secret:e||"",s3SecretIsValid:t})},r.changeS3StorageUrl=function(e){var t=!0;e&&0!==(e=e.trim()).length||(t=!1),r.setState({s3StorageUrl:e||"",s3StorageUrlIsValid:t})},r.changeName=function(e){var t=r.state.driveNameIsEditable,a=e.target.value;t&&Object(C.n)(a)?r.setState({driveName:a},(function(){void 0===a||""===a?r.setState({driveNameIsValid:!1}):N.a.post(Z.a.getConfigForRemote,{name:a}).then((function(e){var t=r.state.formErrors,a=Object(C.j)(e.data);t.driveName=a?"":"Duplicate",r.setState({formErrors:t,driveNameIsValid:a})}))})):r.setState((function(e){return{formErrors:Object(o.a)(Object(o.a)({},e.formErrors),{},{driveName:"Cannot edit name"})}}))},r.openAdvancedSettings=function(e){r.state.advancedOptions?r.setState({colAdvanced:!0}):r.configEndDiv.scrollIntoView({behavior:"smooth"})},r.onW3sTokenSubmit=function(){console.log("in"),r.setState({},(function(){r.state.driveNameIsValid&&r.state.w3sTokenIsValid&&(r.changeDriveType({},{newValue:"w3s"}),r.setState({formValues:Object(o.a)(Object(o.a)({},r.state.formValues),{},{env_auth:!1,w3s_token:r.state.w3sToken,secret_access_key:r.state.s3Secret,w3s_server_url:"https://api.web3.storage"})},(function(){console.log(r.state.formValues),r.handleSubmitW3s(null)})))}))},r.onS3Submit=function(){r.changeS3Key(r.state.s3Key),r.changeS3Secret(r.state.s3Secret),r.changeS3StorageUrl(r.state.s3StorageUrl),r.setState({},(function(){r.state.s3KeyIsValid&&r.state.s3SecretIsValid&&r.state.s3StorageUrlIsValid&&r.state.driveNameIsValid&&(r.changeDriveType({},{newValue:"s3"}),r.setState({formValues:Object(o.a)(Object(o.a)({},r.state.formValues),{},{env_auth:!1,access_key_id:r.state.s3Key,secret_access_key:r.state.s3Secret,endpoint:r.state.s3StorageUrl,acl:"private",storage_class:"STANDARD"})},(function(){console.log(r.state.formValues),r.handleSubmit(null)})))}))},r.gotoNextStep=function(){if(r.state.driveNameIsValid){var e=r.state,t=e.currentStepNumber,a=e.advancedOptions;a&&3===t||!a&&2===t?r.handleSubmit(null):r.setCurrentStep(t+1)}},r.gotoPrevStep=function(){var e=r.state.currentStepNumber;r.setCurrentStep(e-1)},r.setCurrentStep=function(e){r.setState({currentStepNumber:e})},r.StepShowCase=function(e){var t=e.currentStepNumber,a=["Set up Remote Config","Set up Drive","Advanced Config"];return f.a.createElement(E.a,{className:"timeline"},f.a.createElement(b.a,null,a.map((function(e,n){return n+=1,f.a.createElement(f.a.Fragment,{key:n},f.a.createElement(A.a,{className:"text-center "+(t===n?"step-active":""),md:2,sm:4},f.a.createElement("button",{className:"btn btn-step-count",onClick:function(){return r.setCurrentStep(n)}},n),f.a.createElement("h4",null,e)),n!==a.length&&f.a.createElement(A.a,{md:3,className:"d-none d-md-block"},f.a.createElement("div",{className:"timeline-divider align-middle"})))}))))},r.onItemClick=function(e){"S3"===e&&(r.setState({isShowS3Item:!r.state.isShowS3Item}),r.setState({isShowW3sItem:!r.state.isShowW3sItem})),"w3s"===e&&(r.setState({isShowS3Item:!r.state.isShowS3Item}),r.setState({isShowW3sItem:!r.state.isShowW3sItem})),"Advanced"===e&&r.setState({isShowAdvancedItem:!r.state.isShowAdvancedItem})},r.onGetKeyClick=function(e){window.require("electron").shell.openExternal("https://www.ipfsdrive.com/docs#s3"),e.preventDefault()},r.onGetKeyClickW3s=function(e){window.require("electron").shell.openExternal("https://www.ipfsdrive.com/docs#getW3sToken"),e.preventDefault()},r.state={colRconfig:!0,colSetup:!1,colAdvanced:!1,driveName:"",driveNameS3:"",driveNameW3s:"",driveNameIsEditable:!0,advancedOptions:!1,formValues:{},formValuesValid:{},required:{},authModalIsVisible:!1,drivePrefix:"",driveNameIsValid:!1,formErrors:{driveName:""},optionTypes:{},isValid:{},currentStepNumber:1,isShowW3sItem:!0,w3sTokenIsValid:!0,w3sToken:"",isShowS3Item:!1,isShowAdvancedItem:!1,s3Key:"",s3KeyIsValid:!0,s3Secret:"",s3SecretIsValid:!0,s3StorageUrl:"",s3StorageUrlIsValid:!0},r.configCheckInterval=null,r.handleSubmit=r.handleSubmit.bind(Object(d.a)(r)),r.toggleAuthModal=r.toggleAuthModal.bind(Object(d.a)(r)),r.startAuthentication=r.startAuthentication.bind(Object(d.a)(r)),r.checkConfigStatus=r.checkConfigStatus.bind(Object(d.a)(r)),r}return Object(u.a)(a,[{key:"checkConfigStatus",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.driveName,e.prev=1,e.next=4,N.a.post(Z.a.getConfigForRemote,{name:t});case 4:a=e.sent,Object(C.j)(a.data)||(clearInterval(this.configCheckInterval),this.configCheckInterval=null,this.toggleAuthModal(),this.props.history.push("/Configs")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Q.b.error("Error creating config. ".concat(e.t0),{autoClose:!1});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"validateForm",value:function(){var e=this.state,t=e.driveNameIsValid,a=e.drivePrefix,r=e.isValid,i=!0;t||(i=!1),""===a&&(i=!1);for(var s=0,o=Object.entries(r);s<o.length;s++){var c=Object(n.a)(o[s],2),l=c[0],u=c[1];if(!l||!u){i=!1;break}}return i}},{key:"toggleAuthModal",value:function(){this.setState((function(e,t){return{authModalIsVisible:!e.authModalIsVisible}}))}},{key:"startAuthentication",value:function(){this.toggleAuthModal(),null===this.configCheckInterval?this.configCheckInterval=setInterval(this.checkConfigStatus,P.f):console.error("Interval already running. Should not start a new one")}},{key:"stopAuthentication",value:function(){this.setState((function(e,t){return{authModalIsVisible:!1}})),clearInterval(this.configCheckInterval)}},{key:"handleSubmit",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,s,o,c,l,u,d,m,v,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),a=this.state,r=a.formValues,s=a.drivePrefix,o=this.props.providers,!this.validateForm()){e.next=39;break}if(void 0===s||""===s){e.next=37;break}if(void 0===(c=Object(C.f)(o,s))){e.next=37;break}l=c.Options,u={},d=function(){var e=Object(n.a)(v[m],2),t=e[0],a=e[1];if("token"===t)return u[t]=a,"continue";var r=l.find((function(e,a,n){return t===e.Name}));r&&(a!==r.DefaultStr&&(u[t]=a))},m=0,v=Object.entries(r);case 11:if(!(m<v.length)){e.next=18;break}if("continue"!==d()){e.next=15;break}return e.abrupt("continue",15);case 15:m++,e.next=11;break;case 18:if(g={parameters:u,name:this.state.driveName,type:this.state.drivePrefix},this.startAuthentication(),e.prev=20,this.props.match.params.drivePrefix){e.next=28;break}return e.next=25,N.a.post(Z.a.createConfig,g);case 25:Q.b.info("Config created"),e.next=31;break;case 28:return e.next=30,N.a.post(Z.a.updateConfig,g);case 30:Q.b.info("Config Updated");case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(20),Q.b.error("Error creating config. ".concat(e.t0),{autoClose:!1}),this.stopAuthentication();case 37:e.next=40;break;case 39:Q.b.warn("Check for errors before submitting.",{autoClose:!1});case 40:case"end":return e.stop()}}),e,this,[[20,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmitW3s",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,s,o,c,l,u,d,m,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),a=this.state.formValues,r=this.props.providers,s=this.validateForm(),console.log(s),"w3s",o=Object(C.f)(r,"w3s"),console.log(o),void 0===o){e.next=34;break}c=o.Options,l={},u=function(){var e=Object(n.a)(m[d],2),t=e[0],a=e[1];if("token"===t)return l[t]=a,"continue";var r=c.find((function(e,a,n){return t===e.Name}));r&&(a!==r.DefaultStr&&(l[t]=a))},d=0,m=Object.entries(a);case 14:if(!(d<m.length)){e.next=21;break}if("continue"!==u()){e.next=18;break}return e.abrupt("continue",18);case 18:d++,e.next=14;break;case 21:return v={parameters:l,name:this.state.driveName,type:this.state.drivePrefix},this.startAuthentication(),e.prev=23,this.props.match.params.drivePrefix,e.next=27,N.a.post(Z.a.createConfig,v);case 27:Q.b.info("Config created"),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(23),Q.b.error("Error creating config. ".concat(e.t0),{autoClose:!1}),this.stopAuthentication();case 34:case"end":return e.stop()}}),e,this,[[23,30]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.drivePrefix;(!this.props.providers||this.props.providers.length<1)&&this.props.getProviders(),t&&(this.setState({driveName:t,driveNameIsValid:!0,driveNameIsEditable:!1}),N.a.post(Z.a.getConfigForRemote,{name:t}).then((function(t){console.log(t),e.changeDriveType(void 0,{newValue:t.data.type}),e.setState((function(e){return{formValues:Object(o.a)(Object(o.a)({},e.formValues),t.data)}}))})))}},{key:"componentWillUnmount",value:function(){clearInterval(this.configCheckInterval),this.configCheckInterval=null}},{key:"render",value:function(){var e=this,t=this.state,a=(t.drivePrefix,t.advancedOptions,t.driveName),n=(t.driveNameS3,t.driveNameW3s,t.driveNameIsValid),r=(t.currentStepNumber,this.state),i=r.s3KeyIsValid,s=r.s3SecretIsValid,o=r.s3StorageUrlIsValid,c=this.state,l=c.s3Key,u=c.s3Secret,d=c.s3StorageUrl,m=this.state,v=m.w3sToken,g=m.w3sTokenIsValid;this.props.providers;return f.a.createElement("div",{"data-test":"newDriveComponent"},f.a.createElement(T.a,null,f.a.createElement("div",null,this.state.isShowW3sItem&&f.a.createElement("i",{className:"icon-arrow-down"}),!this.state.isShowW3sItem&&f.a.createElement("i",{className:"icon-arrow-right"}),f.a.createElement(k.a,{color:"link",onClick:function(){return e.onItemClick("w3s")}},"Web3 storage")),this.state.isShowW3sItem?f.a.createElement("div",null,f.a.createElement(y.a,null,f.a.createElement(B.a,null,f.a.createElement(D,{label:"Name of this drive (For your reference)",changeHandler:this.changeName,value:a,placeholder:"Enter a name",name:"name",id:"driveName",isValid:n}),f.a.createElement(D,{label:"API Token",changeHandler:function(t){return e.changeW3sToken(t.target.value)},value:v,placeholder:"Enter web3 storage token",name:"w3sToken",id:"w3sTokenName",isValid:g}),f.a.createElement("div",{className:"clearfix"},f.a.createElement("div",{className:"float-right"},f.a.createElement("a",{href:"javascript:void(0)",target:"_blank",onClick:this.onGetKeyClickW3s},"Get Key From Storage Server"),f.a.createElement(k.a,{className:"ml-3 btn-blue",onClick:this.onW3sTokenSubmit},"Submit")))))):"",f.a.createElement("div",null,this.state.isShowS3Item&&f.a.createElement("i",{className:"icon-arrow-down"}),!this.state.isShowS3Item&&f.a.createElement("i",{className:"icon-arrow-right"}),f.a.createElement(k.a,{color:"link",onClick:function(){return e.onItemClick("S3")}},"S3 compatible")),this.state.isShowS3Item?f.a.createElement("div",null,f.a.createElement(y.a,null,f.a.createElement(B.a,null,f.a.createElement(D,{label:"Name of this drive (For your reference)",changeHandler:this.changeName,value:a,placeholder:"Enter a name",name:"nameS3",id:"driveName",isValid:n}),f.a.createElement(D,{label:"Key",changeHandler:function(t){return e.changeS3Key(t.target.value)},value:l,placeholder:"Enter a key",name:"s3Key",id:"s3KeyName",isValid:i}),f.a.createElement(D,{label:"Secret",changeHandler:function(t){return e.changeS3Secret(t.target.value)},value:u,placeholder:"Enter a Secret",name:"s3Secret",id:"s3SecretName",isValid:s}),f.a.createElement(D,{label:"Url",changeHandler:function(t){return e.changeS3StorageUrl(t.target.value)},value:d,placeholder:"Enter a Storage Url",name:"s3StorageUrl",id:"s3StorageUrlName",isValid:o}),f.a.createElement("div",{className:"clearfix"},f.a.createElement("div",{className:"float-right"},f.a.createElement("a",{href:"javascript:void(0)",target:"_blank",onClick:this.onGetKeyClick},"Get Key From Storage Server"),f.a.createElement(k.a,{className:"ml-3 btn-blue",onClick:this.onS3Submit},"Submit")))))):"",f.a.createElement("div",null,this.state.isShowAdvancedItem&&f.a.createElement("i",{className:"icon-arrow-down"}),!this.state.isShowAdvancedItem&&f.a.createElement("i",{className:"icon-arrow-right"}),f.a.createElement(k.a,{color:"link",onClick:function(){return e.props.history.push("/newdrive")}},"Advanced"))))}}]),a}(f.a.Component);G.defaultProps={isEdit:!1};t.default=Object(j.b)((function(e){return{providers:e.config.providers}}),{getProviders:J.b})(G)}}]);
//# sourceMappingURL=15.6b8afd94.chunk.js.map