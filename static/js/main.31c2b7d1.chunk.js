(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),c=n.n(r),i=(n(16),n(6)),o=n(9),u=n(1),s=n(2),f=n(4),h=n(3),d=n(5);var m=function(e){var t=e.value,n=e.onDivClicked;return l.a.createElement("div",{className:"board-cell",onClick:n},t)},v=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCells",value:function(){var e=this.props,t=e.cells,n=e.onCellClicked;return t.map(function(e,t){return l.a.createElement(m,{value:e,key:"cell-"+t,onDivClicked:function(){n(t)}})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"board"},this.renderCells())}}]),t}(l.a.Component);n(17);function p(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].filter(function(t){var n=Object(i.a)(t,3),a=n[0],l=n[1],r=n[2];return e[a]&&e[a]===e[l]&&e[l]===e[r]}),n=Object(i.a)(t,1)[0];return n?e[n[0]]:null}var C=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(h.a)(t).call(this))).handleClick=function(t){var n=e.state,a=n.cells,l=n.whoNext,r=n.stepCounter,c=n.winner;(a=Object(o.a)(a))[t]||c||(a[t]=l,p(a),l="X"===l?"O":"X",r+=1,c=p(a),e.setState({cells:a,whoNext:l,stepCounter:r,winner:c}))},e.resetGame=function(){e.setState({cells:Array(9).fill(null),stepCounter:0,whoNext:"X",winner:null})},e.state={cells:Array(9).fill(null),stepCounter:0,whoNext:"X",winner:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.state,n=t.cells,a=t.whoNext,r=t.winner,c=t.stepCounter;return e=r?"Player ".concat(r," wins!"):9===c?"It is a DRAW!":"Player ".concat(a,", your turn! "),l.a.createElement("div",{className:"Game"},l.a.createElement("h1",null," Tic Tac Toe, step: ",c," "),l.a.createElement("h3",null," ",e),l.a.createElement("button",{onClick:this.resetGame}," Reset"),l.a.createElement(v,{cells:n,onCellClicked:this.handleClick}))}}]),t}(l.a.Component);c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.31c2b7d1.chunk.js.map