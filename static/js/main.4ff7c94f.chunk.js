(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=(n(93),n(56)),i=n(25),s=n(38),u=(n(94),n(95),n(18)),m=n(14),p=n(21),h=n(22),d=n(23),f=n(5),g=n(148),E=n(149),v=n(152),b=n(150),O=n(75),j=n(2),C=n(160),y=Object(i.f)((function(e){var t=e.history,n=(e.location,e.match,e.staticContext,e.to),a=e.onClick,r=Object(j.a)(e,["history","location","match","staticContext","to","onClick"]);return o.a.createElement(C.a,Object.assign({},r,{onClick:function(e){a&&a(e),t.push(n)}}))})),w=n(55),S=n.n(w),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleMenu=function(e){n.setState({anchorElement:e.currentTarget,isNavOpen:!0})},n.handleClose=function(){n.setState({anchorElement:null,isNavOpen:!1})},n.handleNav=function(e){},n.state={isNavOpen:!1,anchorElement:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.isNavOpen,a=t.anchorElement;return o.a.createElement("div",{className:null===e||void 0===e?void 0:e.root},o.a.createElement(g.a,{position:"static"},o.a.createElement(E.a,null,o.a.createElement(b.a,{edge:"start",onClick:this.handleMenu,className:null===e||void 0===e?void 0:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(S.a,null)),o.a.createElement(O.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,open:n,onClose:this.handleClose},o.a.createElement(y,{to:"/Projects",onClick:this.handleClose},"Projects"),o.a.createElement(y,{to:"/Gas",onClick:this.handleClose},"Gas Money"),o.a.createElement(y,{to:"/About",onClick:this.handleClose},"About Me"),o.a.createElement(y,{to:"/Resume",onClick:this.handleClose},"Resume"),o.a.createElement(y,{to:"/",onClick:this.handleClose},"Home")),o.a.createElement(v.a,{variant:"h6",className:null===e||void 0===e?void 0:e.title},"Elijah Kaufman's Website"))))}}]),t}(o.a.Component),x=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))(k),F=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,"About Me")}}]),t}(o.a.Component),M=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,"Welcome to the landing page")}}]),t}(o.a.Component),A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).calculateCost=function(){var e=n.state.response,t=0;if(e){var a=(e.routes[0].legs[0].distance.value/1e3*.621371).toFixed(2),o=(e.routes[0].legs[0].duration.value/60).toFixed(2);t=.35*parseInt(a)+.3*parseInt(o)+5}return t.toFixed(2)},n.directionsCallback=function(e){var t=0;null!==e&&("OK"===e.status?n.setState({response:e},(function(){return t=n.calculateCost()})):console.log("response: ",e)),n.props.AfterDirectionFetch(t)},n.state={response:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.from,n=e.to,a=e.showMap,r=this.state.response;return o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Miles: ".concat(r.routes[0].legs[0].distance.text)),o.a.createElement("p",null,"Time: ".concat(r.routes[0].legs[0].duration.text))),o.a.createElement(s.c,{id:"ElyGasMoney",center:{lat:this.props.lat,lng:this.props.long},zoom:12,mapContainerStyle:{width:"100%",height:"400px"}},""!==t&&""!==n&&a&&o.a.createElement(s.b,{options:{destination:n,origin:t,travelMode:"DRIVING"},callback:this.directionsCallback}),null!==r&&o.a.createElement(s.a,{options:{directions:r}})))}}]),t}(o.a.Component),G=n(76),I=n(155),N=n(154),T=n(156),_=n(157),L=n(31),W=n(158),R=n(159),B=n(74),D=n.n(B),z=n(153),P=n(70),q=n.n(P),V=n(71),K=n.n(V);var J={current:null},H=Object(z.a)((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}}));var $=function(e){var t=H(),n=o.a.useState(""),a=Object(L.a)(n,2),r=a[0],c=a[1],l=o.a.useState([]),i=Object(L.a)(l,2),s=i[0],u=i[1],m=o.a.useState([]),p=Object(L.a)(m,2);p[0],p[1],o.a.createRef(),!J.current&&window.google&&(J.current=new window.google.maps.places.AutocompleteService);var h=function(e){c(e.target.value)},d=o.a.useMemo((function(){return K()((function(e,t){J.current.getPlacePredictions(e,t)}),400)}),[]);o.a.useEffect((function(){var e=!0;if(!J.current&&window.google&&(J.current=new window.google.maps.places.AutocompleteService),J.current){if(""!==r)return d({input:r},(function(t){e&&u(t||[])})),function(){e=!1};u([])}}),[r,d]);var f=s.map((function(e){return[e.place_id,e.description,e.structured_formatting]}));return o.a.createElement(R.a,{id:"input"+e.label,options:f,getOptionLabel:function(e){return"string"===typeof e?e:e[1]},debug:!0,freeSolo:!0,style:{width:300},value:r,onChange:function(t,n){n&&(e.onOptionSelect(n[0]),c(n))},renderInput:function(t){return o.a.createElement(W.a,Object.assign({},t,{label:e.label,variant:"outlined",onChange:h,fullWidth:!0}))},renderOption:function(e,n){var a=e[2].main_text_matched_substrings,r=q()(e[2].main_text,a.map((function(e){return[e.offset,e.offset+e.length]})));return o.a.createElement(N.a,{container:!0,alignItems:"center"},o.a.createElement(N.a,{item:!0},o.a.createElement(D.a,{className:t.icon})),o.a.createElement(N.a,{item:!0,xs:!0},r.map((function(e,t){return o.a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),o.a.createElement(v.a,{variant:"body2",color:"textSecondary"},e[2].secondary_text)))}})},Q=(o.a.createRef(),o.a.createRef(),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).autocompleteService={current:null},n.getLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){n.setState({lat:e.coords.latitude,long:e.coords.longitude})}))},n.updateMap=function(){var e=n.state,t=e.from,a=e.to,o=e.fromLoc,r=e.toLoc,c=o||t,l=r||a;console.log(c,l),n.setState({origin:c,destination:l,showMap:!0})},n.afterDirections=function(e){n.setState({origin:"",destination:"",cost:e})},n.setFrom=function(e){n.setState({from:e})},n.setFromCoords=function(e){var t="https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(e,"&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc");fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){return e.json()})).then((function(e){n.setState({fromLoc:e.result.geometry.location})})).catch((function(e){return e}))},n.setTo=function(e){n.setState({to:e})},n.setToCoords=function(e){var t="https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(e,"&fields=name,geometry&key=AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc");fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){return e.json()})).then((function(e){e&&e.result&&e.result.geometry&&e.result.geometry.location&&n.setState({toLoc:e.result.geometry.location})})).catch((function(e){return e}))},n.componentDidMount=function(){n.getLocation(),"undefined"!==typeof window&&(document.querySelector("#google-maps")||(!n.autocompleteService.current&&window.google&&(n.autocompleteService.current=new window.google.maps.places.AutocompleteService),n.autocompleteService.current||console.log("auto complete null")))},n.handleSubmit=function(e){void 0!==e&&(console.log("An essay was submitted:",e),e.preventDefault())},n.state={from:"",to:"",fromLoc:null,toLoc:null,destination:"",origin:"",cost:0,lat:0,long:0,showMap:!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=(t.from,t.to,t.origin),a=t.destination,r=t.cost,c=t.lat,l=t.long;this.state.fromLoc;console.log("Selected",n);this.state.toLoc;return console.log("Selected",a),o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,null,o.a.createElement(I.a,{maxWidth:"md",stlye:{textAlign:"center"}},o.a.createElement(I.a,{maxWidth:"sm"},o.a.createElement(N.a,null,o.a.createElement(v.a,null,"Gas Money"),o.a.createElement(T.a,null,o.a.createElement("br",null),o.a.createElement("form",null,o.a.createElement(I.a,null,o.a.createElement($,{onOptionSelect:this.setFromCoords,label:"From"}),o.a.createElement("br",null),o.a.createElement($,{onOptionSelect:this.setToCoords,label:"To"})),o.a.createElement("br",null),o.a.createElement(I.a,{maxWidth:"sm"},o.a.createElement(_.a,{size:"m",variant:"contained",color:"primary",onClick:function(){return e.updateMap()}},"Calculate Price"))),o.a.createElement("br",null)),o.a.createElement(G.a,null,o.a.createElement("br",null),o.a.createElement(I.a,{maxWidth:"sm"},o.a.createElement("p",null,"cost: ".concat(r)),o.a.createElement("div",{id:"mapSomething",style:{height:"400px"}},o.a.createElement(A,{from:n,to:a,lat:c,long:l,showMap:!0,AfterDirectionFetch:this.afterDirections})))),o.a.createElement("br",null))))))}}]),t}(o.a.Component));var U=function(){return o.a.createElement(l.a,null,o.a.createElement(s.d,{id:"script-loader",googleMapsApiKey:"AIzaSyCmFG2_lNsVip681FctETIpGuqiFnABTCc",libraries:["places"]},o.a.createElement(x,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:Object(i.f)(M)}),o.a.createElement(i.a,{path:"/About",component:Object(i.f)(F)}),o.a.createElement(i.a,{path:"/Gas",component:Object(i.f)(Q)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,n){e.exports=n(110)},93:function(e,t,n){},94:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},95:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.4ff7c94f.chunk.js.map