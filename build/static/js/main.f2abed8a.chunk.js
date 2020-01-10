(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{22:function(e,a,t){e.exports=t(33)},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),s=(t(27),t(3)),o=t(4),i=t(6),m=t(5),u=t(7),p=t(12),h=t(10),E=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 jumbotron"},r.a.createElement("h1",{className:"text-center"}," About Us"),r.a.createElement("h2",{className:"text-center"},r.a.createElement("u",null," OUR STORY "))),r.a.createElement("div",{className:"col-md-12  "},r.a.createElement("p",{className:" text-bold well"},"This is a sample web Application ..musics taken from spotify")))}}]),a}(n.Component),d=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={artistQuery:""},t.searchArtist=function(){t.props.search(t.state.artistQuery)},t.handleKeyPress=function(e){"Enter"===e.key&&t.searchArtist()},t.updateArtistHistory=function(e){t.setState({artistQuery:e.target.value})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 well text-center"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"search",className:"form-control",placeholder:"Search Here for an artist",onChange:this.updateArtistHistory,onKeyPress:this.handleKeyPress})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.searchArtist},"Search"))))}}]),a}(n.Component),b=function(e){var a=e.artist;if(!a)return null;var t=a.name,n=a.followers,c=a.genres,l=a.images;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"panel panel-pimary"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h1",{className:"text-center"},t)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("img",{src:l[0]&&l[0].url,style:{width:300},alt:"",className:"img-responsive img-thumbnail text-center"}),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Followers ",r.a.createElement("span",{className:"pull-right"},n.total)),r.a.createElement("li",{className:"list-group-item"},"Geners ",r.a.createElement("span",{className:"pull-right"},c.join(","))))))))},v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={playing:!1,audio:null,playingPreviewUrl:null},t.playAudio=function(e){return function(){var a=new Audio(e);t.state.playing?(t.state.audio.pause(),t.state.playingPreviewUrl===e?t.setState({playing:!1}):(a.play(),t.setState({audio:a,playingPreviewUrl:e}))):(a.play(),t.setState({playing:!0,audio:a,playingPreviewUrl:e}))}},t.trackIcon=function(e){return e.preview_url?t.state.playing&&t.state.playingPreviewUrl===e.preview_url?r.a.createElement("span",{className:"glyphicon glyphicon-pause"}):r.a.createElement("span",{className:"glyphicon glyphicon-play"}):r.a.createElement("span",{className:"text-danger"},"N/A")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.tracks;return r.a.createElement("div",{className:"row"},a.map((function(a){var t=a.id,n=a.name,c=a.album,l=a.preview_url;return r.a.createElement("div",{key:t,onClick:e.playAudio(l),className:"col-md-6"},r.a.createElement("div",{className:"panel panel-info"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h1",{className:"panel-title"},n)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("img",{src:c.images[0].url,alt:"",className:"img-responsive img-thumbnail"})),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h3",{style:{cursor:"pointer"}}," ",e.trackIcon(a)," "))))})))}}]),a}(n.Component),f="https://spotify-api-wrapper.appspot.com",y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={artist:null,tracks:[]},t.searchArtist=function(e){fetch("".concat(f,"/artist/").concat(e)).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.artists.total>0){var a=e.artists.items[0];t.setState({artist:a}),fetch("".concat(f,"/artist/").concat(a.id,"/top-tracks")).then((function(e){return e.json()})).then((function(e){console.log(e.tracks),t.setState({tracks:e.tracks})})).catch((function(e){return alert(console.error.message)}))}})).catch((function(e){return alert(console.error.message)}))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.searchArtist("Ilayaraja")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 jumbotron text-center"},r.a.createElement("h1",null,"Music "))),r.a.createElement(d,{search:this.searchArtist}),r.a.createElement(b,{artist:this.state.artist}),r.a.createElement(v,{tracks:this.state.tracks}))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 jumbotron"},r.a.createElement("h1",{className:"text-center r"}," Contact us")),r.a.createElement("div",{className:"col-md-12 jumbotron  "},r.a.createElement("form",{action:"",className:"form-group"},r.a.createElement("label",{for:"name"}," Name "),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"form-control",placeholder:"Enter your name"}),r.a.createElement("label",{for:"email"}," Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control",placeholder:"enter your email"}),r.a.createElement("label",{for:"text-area"},"message "),r.a.createElement("textarea",{row:"4",name:"message",id:"message",className:"form-control",placeholder:"enter your message"},"  ")),r.a.createElement("button",{className:"btn btn-info"}," submit")))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("nav",{className:"navbar navbar-info"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},"React Music Player"),r.a.createElement("button",{className:"navbar-toggle","data-target":"#menu","data-toggle":"collapse"},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}))),r.a.createElement("div",{className:"navbar-collapse collapse",id:"menu"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/music"},"Music Player")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact"},"Contact")))))),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/music",component:y}),r.a.createElement(h.a,{exact:!0,path:"/about",component:E}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:N}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f2abed8a.chunk.js.map