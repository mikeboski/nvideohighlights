(this.webpackJsonpscorebat_matches=this.webpackJsonpscorebat_matches||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(11),r=n.n(s),c=(n(18),n(3)),i=n(4),l=n(6),u=n(5),h=n(8),d=n(7),m=n(9),p=n.n(m),w=(n(21),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){n.setState({value:e.target.value}),n.props.searchTermChange(e.target.value)},n.state={value:""},n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{style:{margin:"20px"}},o.a.createElement("input",{placeholder:"Search",value:this.state.value,onChange:this.handleInputChange,style:{width:"500px",height:"20px"}})))}}]),t}(a.Component)),f=n(12),b=(n(24),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).rowClick=function(e,t){if(t){var a=new Set;return{onClick:function(e){e.ctrlKey?(a=n.state.selectedRows,t._index=t.index,a.push(t),n.setState({selectedRows:a})):(a=[],t._index=t.index,a.push(t)),n.setState({selectedRows:a},(function(){n.props.rowClicked(n.state.selectedRows)}))},style:{background:n.state.selectedRows.some((function(e){return e._index===t.index}))&&"#9bdfff"}}}return""},n.state={selectedRows:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{data:this.props.rows,columns:this.props.columns,getTrProps:this.rowClick})}}]),t}(a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t;if(this.props.selectedRow?t=this.props.selectedRow:this.props.rows.length&&(t=this.props.rows[0]),t){e=[];for(var n=0;n<t.videos.length;n++)e.push(t.videos[n].embed)}else e="<h1></h1>";return o.a.createElement("div",{style:{width:"40%",height:"40%",margin:"auto",paddingTop:"20px"}},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"highlights-list"},["One","Two","Three","Four","Five"].map((function(e){return o.a.createElement("div",{key:e,className:"video-thumb"},e)})))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(){fetch("https://www.scorebat.com/video-api/v1").then((function(e){return e.json()})).then((function(e){p.a.forEach(e,(function(e,t){e.competitionName=e.competition.name,e.side1Name=e.side1.name,e.side2Name=e.side2.name,e.numVideos=e.videos.length})),n.setState({rows:e})}))},n.getColumns=function(){n.setState({columns:[{Header:"Title",accessor:"title"},{Header:"Team1",accessor:"side1Name"},{Header:"Team2",accessor:"side2Name"},{Header:"League",accessor:"competitionName"},{Header:"# Videos",accessor:"numVideos"}]})},n.onClickRow=function(e){n.setState({selectedRow:e[0].original})},n.searchTermChange=function(e){n.setState({searchTerm:e})},n.state={rows:[],columns:[],selectedRow:null,searchTerm:""},n.searchTermChange=n.searchTermChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.getColumns()}},{key:"render",value:function(){var e,t=this.state,n=t.rows,a=t.columns,s=t.selectedRow,r=t.searchTerm;return e=r?p.a.filter(n,(function(e){return e.competitionName.toLowerCase().includes(r.toLowerCase())||e.side1Name.toLowerCase().includes(r.toLowerCase())||e.side2Name.toLowerCase().includes(r.toLowerCase())||e.title.toLowerCase().includes(r.toLowerCase())})):n,o.a.createElement("div",{className:"App"},o.a.createElement(v,{selectedRow:s,rows:n}),o.a.createElement(g,null),o.a.createElement(w,{searchTermChange:this.searchTermChange}),o.a.createElement(b,{rows:e,columns:a,rowClicked:this.onClickRow}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.097da266.chunk.js.map