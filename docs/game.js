!function(e){function t(t){for(var i,c,s=t[0],l=t[1],u=t[2],f=0,h=[];f<s.length;f++)c=s[f],r[c]&&h.push(r[c][0]),r[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(a&&a(t);h.length;)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={0:0},o=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=this.webpackJsonp=this.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var a=l;o.push([0,1]),n()}([function(e,t,n){e.exports=n(6)},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(1),n(4);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e,n){var r,s,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,r=!(l=o(t).call(this,e))||"object"!==i(l)&&"function"!=typeof l?c(s):l,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(c(r),"game",void 0),r}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,Phaser.Scene),n=t,(l=[{key:"preload",value:function(){}},{key:"setTimerEvent",value:function(e,t,n,i){return this.time.delayedCall(Phaser.Math.Between(e,t),n,i||[],this)}}])&&r(n.prototype,l),u&&r(n,u),t}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,h(t).call(this,"BootScene"))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,l),n=t,(i=[{key:"preload",value:function(){this.load.bitmapFont("arcade","./assets/fonts/arcade.png","./assets/fonts/arcade.xml"),this.load.image("flag","./assets/flag.png"),this.load.image("mine","./assets/mine.png")}},{key:"create",value:function(){this.scene.start("TitleScene",{})}}])&&a(n.prototype,i),r&&a(n,r),t}(),y={type:Phaser.AUTO,scale:{parent:"game-container",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:320,height:180},disableContextMenu:!0,render:{pixelArt:!0}};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(d||(d={}));var S=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,w(t).call(this,"TitleScene"))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,l),n=t,(i=[{key:"create",value:function(){var e=this;this.add.bitmapText(10,10,"arcade","Mine sweeper",16),this.add.rectangle(10,50,80,40,3381555,1).setOrigin(0).setInteractive({cursor:"pointer"}).on("pointerup",function(){return e.scene.start("GameScene",{difficulty:d.EASY})},this),this.add.bitmapText(20,60,"arcade","easy",16),this.add.rectangle(100,50,115,40,3355545,1).setOrigin(0).setInteractive({cursor:"pointer"}).on("pointerup",function(){return e.scene.start("GameScene",{difficulty:d.MEDIUM})},this),this.add.bitmapText(110,60,"arcade","medium",16),this.add.rectangle(225,50,80,40,10040115,1).setOrigin(0).setInteractive({cursor:"pointer"}).on("pointerup",function(){return e.scene.start("GameScene",{difficulty:d.HARD})},this),this.add.bitmapText(235,60,"arcade","hard",16),this.add.rectangle(215,150,100,20,3355443,1).setOrigin(0).setInteractive({cursor:"pointer"}).on("pointerup",function(){e.scale.isFullscreen?e.scale.stopFullscreen():(e.scale.startFullscreen(),screen.orientation.lock("landscape-primary"))},this),this.add.bitmapText(225,155,"arcade","fullscreen",8)}}])&&v(n.prototype,i),r&&v(n,r),t}(),x=[0,6750054,6711039,16777062,6750207,16737894,65382,6749952,16777215];function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){function t(e,n,i,r,o){var c,s,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,c=!(l=j(t).call(this,e,n,i,o))||"object"!==T(l)&&"function"!=typeof l?P(s):l,E(P(c),"index",void 0),E(P(c),"hasBomb",!1),E(P(c),"flagged",!1),E(P(c),"flipped",!1),E(P(c),"neighbourBombs",0),E(P(c),"icon",void 0),E(P(c),"number",void 0),E(P(c),"size",void 0),c.size=r,c.setOrigin(0),c.setInteractive({cursor:"pointer"}),c.input.hitArea=new Phaser.Geom.Rectangle(0,0,r,r),c.on("pointerdown",c.clickHandler,P(c)),c}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,Phaser.GameObjects.Image),n=t,(i=[{key:"flipCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.off("pointerdown"),this.removeInteractive(),this.flipped=!0,this.flagged&&(this.flagged=!1,this.icon.destroy()),this.hasBomb?(this.icon=this.scene.add.image(this.x+this.size/2,this.y+this.size/2,"mine").setOrigin(.5).setDepth(5),e&&(this.setTint(16724787),this.scene.events.emit("cell:explode"))):(this.setTint(5592405),this.neighbourBombs?this.number=this.scene.add.bitmapText(this.x+this.size/2,this.y+this.size/2,"arcade",this.neighbourBombs.toString(),8).setOrigin(.5).setTint(x[this.neighbourBombs]).setDepth(5):this.scene.events.emit("cell:empty",this))}},{key:"clickHandler",value:function(e){1===e.buttons?this.flipCell(!0):this.markCell(),this.scene.events.emit("cell:clicked")}},{key:"markCell",value:function(){this.flagged?(this.flagged=!1,this.icon&&this.icon.destroy()):(this.flagged=!0,this.icon=this.scene.add.image(this.x+this.size/2,this.y+this.size/2,"flag").setOrigin(.5).setDepth(5))}}])&&_(n.prototype,i),r&&_(n,r),t}(),C={difficulty:{easy:{bombs:25,cellSize:20,time:999},medium:{bombs:40,cellSize:20,time:300},hard:{bombs:100,cellSize:10,time:300}}};function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){function t(e,n){var i,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=!(o=W(t).call(this,"GameScene"))||"object"!==z(o)&&"function"!=typeof o?M(r):o,D(M(i),"renderTexture",void 0),D(M(i),"cellRowWidth",void 0),D(M(i),"cells",void 0),D(M(i),"timer",void 0),D(M(i),"timeText",void 0),D(M(i),"bombsText",void 0),D(M(i),"difficulty",void 0),i}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,l),n=t,(i=[{key:"create",value:function(e){this.difficulty=C.difficulty[e.difficulty],this.cells=[],this.cellRowWidth=this.scale.gameSize.width/this.difficulty.cellSize,this.renderTexture=this.add.renderTexture(0,0).setVisible(!1),this.createCellTexture(),this.createUI(this.difficulty.bombs),this.createPlayfield(),this.createMines(this.difficulty.bombs),this.bindEvents()}},{key:"bindEvents",value:function(){var e=this;this.events.on("victory",function(){return e.gameover(!0)},this),this.events.on("timeout",function(){return e.gameover(!1)},this),this.events.on("cell:explode",function(){return e.gameover(!1)},this),this.events.on("cell:empty",function(t){e.openEmptyAreas(t)},this),this.events.on("cell:clicked",function(){e.checkScores()},this)}},{key:"gameover",value:function(e){var t=this;this.add.bitmapText(this.scale.gameSize.width/2,20,"arcade",e?"victory":"game over",32).setOrigin(.5,0).setDepth(10),this.add.bitmapText(this.scale.gameSize.width/2,this.scale.gameSize.height-55,"arcade","menu",32).setTint(10092441).setDepth(10).setOrigin(.5,0).setInteractive({cursor:"pointer"}).on("pointerdown",function(){return t.scene.start("TitleScene")},this),this.cells.filter(function(e){return e.hasBomb}).forEach(function(e){return e.flipCell()}),this.cells.forEach(function(e){return e.removeInteractive()}),this.timer.destroy()}},{key:"createPlayfield",value:function(){for(var e=20;e<this.scale.gameSize.height;e+=this.difficulty.cellSize)for(var t=0;t<this.scale.gameSize.width;t+=this.difficulty.cellSize)this.add.existing(this.createCell(t,e))}},{key:"createUI",value:function(e){var t=this;this.timeText=this.add.bitmapText(this.scale.gameSize.width/2,6,"arcade","time:".concat(this.difficulty.time),8).setOrigin(0).setDepth(7),this.bombsText=this.add.bitmapText(6,6,"arcade","bombs:".concat(String(e).padStart(3,"0")),8).setOrigin(0).setDepth(7),this.timer=this.time.addEvent({delay:1e3,repeat:this.difficulty.time,callback:function(){t.timeText.setText("time:".concat(String(t.timer.repeatCount).padStart(3,"0"))),0===t.timer.repeatCount&&(t.timeText.setTint(16724787),t.events.emit("timeout"))},callbackScope:this})}},{key:"checkScores",value:function(){if(this.cells.filter(function(e){return!e.flipped}).length===this.difficulty.bombs)this.events.emit("victory");else{var e=this.cells.filter(function(e){return e.flagged}).length;this.updateBombCounter(e)}}},{key:"updateBombCounter",value:function(e){var t=this.difficulty.bombs-e,n="bombs:".concat(t<0?"-":"").concat(String(Math.abs(t)).padStart(3,"0"));this.bombsText.setText(n),0===t?this.bombsText.setTint(10092441):t<0?this.bombsText.setTint(16724787):this.bombsText.setTint(16777215)}},{key:"createCell",value:function(e,t){var n=new R(this,e,t,this.difficulty.cellSize,"cell");return n.index=this.cells.length,this.cells.push(n),n}},{key:"createMines",value:function(e){for(var t=this,n=0;n<e;n++){var i=this.cells.filter(function(e){return!e.hasBomb});i[Phaser.Math.Between(0,i.length-1)].hasBomb=!0}this.cells.filter(function(e){return e.hasBomb}).forEach(function(e){t.getCellNeighbours(e).forEach(function(e){return e.neighbourBombs++})})}},{key:"createCellTexture",value:function(){var e=this.add.graphics();e.fillStyle(7829367,1).fillRoundedRect(0,0,this.difficulty.cellSize,this.difficulty.cellSize,2).lineStyle(1,0,.2).strokeRoundedRect(0,0,this.difficulty.cellSize,this.difficulty.cellSize,2),this.renderTexture.draw(e).saveTexture("cell"),e.destroy()}},{key:"getCellNeighbours",value:function(e){var t=[],n=-1;return(n=e.index-this.cellRowWidth-1)>-1&&n<this.cells.length&&n%this.cellRowWidth<e.index%this.cellRowWidth&&t.push(this.cells[n]),(n=e.index-this.cellRowWidth)>-1&&n<this.cells.length&&t.push(this.cells[n]),(n=e.index-this.cellRowWidth+1)>-1&&n<this.cells.length&&n%this.cellRowWidth>e.index%this.cellRowWidth&&t.push(this.cells[n]),(n=e.index-1)>-1&&n<this.cells.length&&n%this.cellRowWidth<e.index%this.cellRowWidth&&t.push(this.cells[n]),(n=e.index+1)>-1&&n<this.cells.length&&n%this.cellRowWidth>e.index%this.cellRowWidth&&t.push(this.cells[n]),(n=e.index+this.cellRowWidth-1)>-1&&n<this.cells.length&&n%this.cellRowWidth<e.index%this.cellRowWidth&&t.push(this.cells[n]),(n=e.index+this.cellRowWidth)>-1&&n<this.cells.length&&t.push(this.cells[n]),(n=e.index+this.cellRowWidth+1)>-1&&n<this.cells.length&&n%this.cellRowWidth>e.index%this.cellRowWidth&&t.push(this.cells[n]),t}},{key:"openEmptyAreas",value:function(e){for(var t=[e];t.length>0;){var n=t.shift();this.getCellNeighbours(n).forEach(function(e){e.flipped||e.hasBomb||(e.flipCell(),e.neighbourBombs||t.push(e))})}}}])&&B(n.prototype,i),r&&B(n,r),t}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"KokoGame",function(){return N});var N=function(e){function t(e){var n,i,r,o,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,n=!(r=F(t).call(this,e))||"object"!==G(r)&&"function"!=typeof r?H(i):r,o=H(n),s=!1,(c="debug")in o?Object.defineProperty(o,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[c]=s,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,Phaser.Game),t}();window.onload=function(){var e=new N(y);if("production"!==window.env.buildType){var t=new(n(5));t.setMode(0),t.domElement.style.position="absolute",t.domElement.style.left="0px",t.domElement.style.top="0px",document.body.appendChild(t.domElement),e.events.on("prestep",function(){return t.begin()}),e.events.on("postrender",function(){return t.end()})}e.scene.add("BootScene",b,!0),e.scene.add("TitleScene",S,!1),e.scene.add("GameScene",A,!1)}}]);