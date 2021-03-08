(this["webpackJsonpquoting-bad"]=this["webpackJsonpquoting-bad"]||[]).push([[0],{26:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r(19),n=r.n(c),a=(r(26),r(10)),o=r(11),i=r(13),u=r(12),h=r(2),l=(r(27),r(7)),j=(r(28),r(0)),d=Object(h.f)((function(e){var t=e.location;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("h1",{className:"logo",children:[Object(j.jsx)("span",{className:"logo-block",children:"Qu"}),"oting",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"logo-block",children:"Ba"}),"d"]}),"/"!==t.pathname&&Object(j.jsx)(l.b,{className:"home-link",to:"/",children:"Home"})]})})),b=r(21),m=(r(35),function(e){var t=e.startGame;return Object(j.jsxs)("section",{className:"rules-container",children:[Object(j.jsx)("h2",{className:"headline",children:"RULES"}),Object(j.jsx)("p",{children:"You will be given 10 quotes from Breaking Bad or Better Call Saul and 3 characters."}),Object(j.jsx)("p",{children:"Choose the character that you think authored the quote."}),Object(j.jsx)("p",{children:"Refreshing or leaving the page will start a new game."}),Object(j.jsx)("h3",{children:"Be the one who knocks to start a game."}),Object(j.jsx)("button",{onClick:function(){return t()},className:"knock-button hover-states",children:"KNOCK"})]})}),O={getRandomIndex:function(e){return Math.floor(Math.random()*e.length)},getWrongAnswer:function(e,t){return t&&(e=e.filter((function(e){return e!==t}))),e[this.getRandomIndex(e)]}},g=(r(36),function(e){var t=e.character,r=e.makeGuess;return Object(j.jsx)("article",{className:"card hover-states",id:t,onClick:function(e){return r(e)},children:Object(j.jsx)("h4",{children:t})})}),f=(r(37),function(e){var t=e.characters,r=e.correctAnswer,s=e.makeGuess,c=t.filter((function(e){return e!==r})),n=O.getWrongAnswer(c),a=[n,O.getWrongAnswer(c,n)],o=Math.floor(3*Math.random());a.splice(o,0,r);var i=a.map((function(e,t){return Object(j.jsx)(g,{makeGuess:s,character:e},t)}));return Object(j.jsx)("section",{className:"cards-container",children:r&&t&&i})}),x=function(e){var t=e.isCorrect,r=e.correctAuthor,s=e.gameOver,c=e.scoreGame;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t&&"Correct!"}),Object(j.jsx)("h2",{children:!t&&"S'all good man! You'll get em next time."}),Object(j.jsxs)("p",{children:["It was ",r,"!"]}),s&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:s&&"Game Over!"}),Object(j.jsx)("p",{className:"score",children:s&&"You got ".concat(c()," right")})]})]})},p={getAllQuotes:function(){return fetch("https://www.breakingbadapi.com/api/quotes").then((function(e){return e.json()}))},getCharacters:function(e){return fetch("https://www.breakingbadapi.com/api/characters?name=".concat(e)).then((function(e){return e.json()})).then((function(e){return 0===e.length?"error":e[0].img}))}},v=(r(38),function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).componentDidMount=function(){s.getData()},s.getData=function(){p.getAllQuotes().then((function(e){return s.assignStateFromData(e)})).then((function(){return s.getQuote()})).catch((function(){return s.props.handleError("error")}))},s.assignStateFromData=function(e){var t=s.getCharacters(e);s.setState({quotes:e,characters:t})},s.getCharacters=function(e){return e.reduce((function(e,t){return e.includes(t.author)||e.push(t.author),e}),[])},s.getQuote=function(){var e=s.state.quotes,t=e[O.getRandomIndex(e)],r=e.filter((function(e){return e!==t}));s.setState({quotes:r,currentQuote:t})},s.startGame=function(){s.setState({gameOn:!0})},s.makeGuess=function(e){e.target.closest("article").id===s.state.currentQuote.author&&s.setState({correctAnswers:s.state.correctAnswers+1,guessedCorrect:!0}),s.setState({pastQuotes:[].concat(Object(b.a)(s.state.pastQuotes),[s.state.currentQuote]),hasGuessed:!0}),s.checkForEnd()},s.checkForEnd=function(){s.state.pastQuotes.length+1>9?(s.setState({gameOver:!0}),setTimeout((function(){s.setState(s.baseState),s.getData()}),5e3)):s.switchQuote()},s.switchQuote=function(){setTimeout((function(){s.getQuote(),s.setState({hasGuessed:!1,guessedCorrect:!1})}),3e3)},s.scoreGame=function(){var e=(100*(s.state.correctAnswers/s.state.pastQuotes.length)).toFixed();return"".concat(e,"%")},s.state={quotes:[],characters:[],currentQuote:{},pastQuotes:[],correctAnswers:0,gameOn:!1,hasGuessed:!1,guessedCorrect:!1,gameOver:!1},s.baseState=s.state,s}return Object(o.a)(r,[{key:"render",value:function(){return Object(j.jsxs)("section",{children:[!this.state.gameOn&&!this.state.currentQuote&&Object(j.jsx)("h2",{children:"loading..."}),!this.state.gameOn&&this.state.currentQuote&&Object(j.jsx)(m,{startGame:this.startGame}),this.state.gameOn&&this.state.currentQuote&&!this.state.hasGuessed&&this.state.characters&&Object(j.jsxs)("section",{className:"quote-container",children:[Object(j.jsx)("h2",{className:"headline",children:"QUOTE:"}),Object(j.jsx)("h3",{className:"quote",children:this.state.currentQuote.quote}),Object(j.jsx)(f,{correctAnswer:this.state.currentQuote.author,characters:this.state.characters,makeGuess:this.makeGuess},this.state.currentQuote.id)]}),this.state.gameOn&&this.state.hasGuessed&&Object(j.jsx)(x,{isCorrect:this.state.guessedCorrect,correctAuthor:this.state.currentQuote.author,gameOver:this.state.gameOver,scoreGame:this.scoreGame})]})}}]),r}(s.Component)),w=(r(39),function(){return Object(j.jsxs)("section",{className:"about",children:[Object(j.jsx)("h2",{children:"Created by"}),Object(j.jsxs)("article",{className:"dev",id:"richard",children:[Object(j.jsx)("h3",{className:"dev-name",children:"Richard Tyler"}),Object(j.jsx)("img",{className:"dev-image",src:"https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4",alt:"Richard Tyler"}),Object(j.jsx)("a",{className:"dev-gh",href:"https://github.com/richardltyler",children:"Richard's GitHub"}),Object(j.jsx)("a",{className:"dev-li",href:"https://www.linkedin.com/in/richardltyler/",children:"Richard's LinkedIn"})]}),Object(j.jsx)("h3",{className:"context",children:"Context"}),Object(j.jsx)("p",{className:"why",children:"This app was created to practice using React with Asynchronous Javascript."}),Object(j.jsx)("h3",{children:"Technologies"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"React.js"}),Object(j.jsx)("li",{children:"React-Router"}),Object(j.jsx)("li",{children:"FetchAPI"}),Object(j.jsx)("li",{children:"Cypress.js"})]})]})}),k=(r(40),function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(l.b,{to:"/about",children:"About"})})}),N=(r(41),function(){return Object(j.jsxs)("section",{className:"error",children:[Object(j.jsx)("h2",{children:"Real smooth. Slippin' Jimmy went and got an error."}),Object(j.jsx)("h3",{children:"Try again later or go to About to contact the developers with questions!"})]})}),Q=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.call(this)).handleError=function(t){if(!t.includes("error"))return t;e.setState({error:!0})},e.state={error:!1},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)("img",{className:"heisenberg-background",src:"https://www.pngitem.com/pimgs/m/190-1906199_transparent-heisenberg-clipart-heisenberg-breaking-bad-sketch-hd.png",alt:"heisenburg sketch"}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(h.b,{path:"/error",render:function(){return Object(j.jsx)(N,{})}}),this.state.error&&Object(j.jsx)(h.a,{to:"/error"}),Object(j.jsx)(h.b,{path:"/about",render:function(){return Object(j.jsx)(w,{})}}),Object(j.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(v,{handleError:e.handleError})}})]}),Object(j.jsx)(k,{})]})}}]),r}(s.Component);n.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.76a7d899.chunk.js.map