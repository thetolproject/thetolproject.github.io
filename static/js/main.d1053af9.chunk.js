(this["webpackJsonpthe-tol-project"]=this["webpackJsonpthe-tol-project"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"name":"the-tol-project","version":"0.0.0","private":true,"homepage":"https://thetolproject.github.io/","scripts":{"build":"react-scripts build","build:db":"ts-node scripts/database.ts","prebuild:db":"npx rimraf temp && npx mkdirp temp/img","deploy":"gh-pages -d build -r https://github.com/thetolproject/thetolproject.github.io.git","predeploy":"npm run build","depcheck":"depcheck","eject":"react-scripts eject","exports":"ts-prune -e","lint":"eslint ./src ./scripts","lint:fix":"npm run lint -- --fix","start":"react-scripts start","test":"npm run build && npm run lint && npm run exports"},"devDependencies":{"@types/google-spreadsheet":"^3.1.5","@types/node":"^16.10.3","@types/react":"^17.0.27","@types/react-dom":"^17.0.9","@types/react-latex":"^2.0.0","@types/underscore":"^1.11.3","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","axios":"^0.24.0","csstype":"^3.0.9","depcheck":"^1.4.2","dotenv":"^10.0.0","eslint":"^7.32.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","fraction.js":"^4.1.2","gh-pages":"^3.2.3","google-spreadsheet":"^3.1.15","googleapis":"^39.2.0","mkdirp":"^1.0.4","prettier":"^2.4.1","react":"^17.0.2","react-collapsible":"^2.8.4","react-dom":"^17.0.2","react-icons":"^4.3.1","react-latex":"^2.0.0","react-scripts":"4.0.3","react-timer-hook":"^3.0.5","react-to-print":"^2.14.0","rimraf":"^3.0.2","ts-node":"^10.3.0","ts-prune":"^0.10.1","typescript":"^4.4.3","underscore":"^1.13.1"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(3),r=n.n(i),s=n(14),c=n.n(s),o=n(4),a=n(15),l=n.n(a),d=n(26),j=n(27),u=n.n(j),b=n(12),x=n(16),p=n(8),O=n.n(p),f={ing:{name:"Inglese",order:1,sample:30,minutes:15,coeff:new O.a("1/3")},mat:{name:"Matematica",order:2,sample:25,minutes:75,coeff:2.6},com:{name:"Comprensione verbale",order:3,sample:1,sub:5,minutes:10,coeff:3},fis:{name:"Fisica",order:4,sample:5,minutes:10,coeff:2}},h=1,g=-.25,m=0;function v(e){return f[e].name}var y={quesiti_ING:"ing",quesiti_MAT:"mat",quesiti_COM:"com",quesiti_FIS:"fis"};function S(){return(S=Object(d.a)(l.a.mark((function e(){var t,n,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/PoliNetworkOrg/TheTOLProjectData/main/database.json");case 2:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===t;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=t.data;case 11:if((null===(r=e.t2)||void 0===r||null===(n=r.meta)||void 0===n?void 0:n.version)==x.version){e.next=14;break}throw new Error("Database version doesn't match application.\nDatabase: ".concat(null===r||void 0===r||null===(i=r.meta)||void 0===i?void 0:i.version,"\nApp: ").concat(x.version));case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return"https://raw.githubusercontent.com/PoliNetworkOrg/TheTOLProjectData/main/img/".concat(e)}var I=n(5),k="1px 0 0 0 #606060, 0 1px 0 0 #606060, 1px 1px 0 0 #606060, /* corner */ 1px 0 0 0 #606060 inset, 0 1px 0 0 #606060 inset",T="#F3F3EE",A="#D5DFE4",C="#069",D="yellow",z="#00D700",L="#009527",q="red",F={fontFamily:"Verdana, Roboto",color:"#333"};function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(I.a)(Object(I.a)({},F),t.filter((function(e){return e})).reduce((function(e,t){return Object(I.a)(Object(I.a)({},e),t)}),{}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return("number"==typeof e?e:parseFloat(e.round(t?2:0).toString())).toLocaleString("it-IT",{minimumFractionDigits:t?2:0,maximumFractionDigits:2}).replace(/\./g,",")}var N=n(28),Q=n.n(N),M=n(1);function R(e){var t=e.text;return Object(M.jsx)(Q.a,{children:t})}var _=P();function U(e){var t=e.db;return Object(M.jsx)("div",{children:Object.entries(t).filter((function(e){return"meta"!=Object(o.a)(e,1)[0]})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(M.jsxs)("div",{style:_,children:[Object(M.jsxs)("h3",{children:["Section: ",n]}),Object(M.jsx)("ul",{children:i.filter((function(e){return e.text||"com"==n})).map((function(e){return Object(M.jsxs)("div",{children:[Object(M.jsx)(R,{text:e.text}),Object(M.jsx)("br",{}),Object(M.jsxs)("p",{children:["Valid: ",e.validated+""]}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.a}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.b}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.c}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.d}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.e}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]},n+e.id+(e.sub||""))}))})]},n)}))})}function W(e){var t=e.hidden,n=e.display,i=e.internal;return Object(M.jsxs)("div",{hidden:t,children:[Object(M.jsx)("h3",{children:n}),Object(M.jsx)("blockquote",{children:i+""})]})}var B=P({display:"flex",fontFamily:" Arial",fontSize:"9.5pt",alignItems:"center"}),G=P({display:"inline-block",marginBlock:0,margin:0,fontFamily:"Arial"}),J=P({display:"flex"}),V=P(J,{float:"left",marginRight:"2px"}),H=P(J,{float:"right",marginLeft:"2px"});function K(e){return Object(M.jsxs)("button",{style:P(B,e.style||{}),onClick:e.onClick,children:[Object(M.jsx)("span",{style:V,children:e.leftIcon&&e.leftIcon()}),Object(M.jsx)("p",{style:G,children:e.label}),Object(M.jsx)("span",{style:H,children:e.rightIcon&&e.rightIcon()})]})}var X=n.p+"static/media/logo.34b8e2e9.webp",Y=P({height:"70px",display:"flex",alignItems:"center",justifyContent:"space-between"}),Z=P({flex:1,fontSize:"18pt",display:"inline-block"}),$=P(Z,{display:"flex",justifyContent:"center"}),ee=P({flex:1,display:"flex",alignItems:"center",gap:"10px",margin:"5px"}),te=P({height:"60px"}),ne=P({display:"flex",flex:1,justifyContent:"flex-end"});function ie(e){var t=e.viewState;return Object(M.jsxs)("div",{style:Y,children:[Object(M.jsxs)("div",{style:ee,children:[Object(M.jsx)("img",{src:X,alt:"logo",style:te}),Object(M.jsx)("h1",{style:Z,children:"PoliNetwork"})]}),Object(M.jsx)("h1",{style:$,children:"The TOL Project"}),Object(M.jsx)("div",{style:ne,children:Object(M.jsx)(K,{label:"Toggle database view",onClick:function(){var e=Object(o.a)(t,2),n=e[0],i=e[1];i("dbPreview"==n?"INFO-start":"dbPreview")}})})]})}var re=n(29),se=n.n(re),ce=n(30),oe=n.n(ce),ae=P({margin:"10px"}),le=P({background:T,margin:"5px"});function de(e){var t,n=Object(i.useState)(null===(t=e.startOpen)||void 0===t||t),r=Object(o.a)(n,2),s=r[0],c=r[1];return Object(M.jsx)("div",{style:P(ae,e.outerDivStyle),children:Object(M.jsx)(oe.a,{trigger:Object(M.jsx)(K,{label:e.label,onClick:function(){return c(!s)}}),open:s,onOpen:e.onOpen,onClose:e.onClose,easing:"ease-in-out",children:Object(M.jsx)("div",{style:P(le,e.contentStyle),children:e.children})})})}n(65);var je=P({display:"flex",flexDirection:"column",padding:"15px",gap:"10px"}),ue=P(),be=P({display:"flex",justifyContent:"center"});function xe(e){var t=Object(i.useRef)();return Object(M.jsx)(de,{label:"Correzione estesa",startOpen:!1,children:Object(M.jsxs)("div",{style:je,children:[Object(M.jsx)(se.a,{documentTitle:"TheTOLProject ".concat((new Date).toLocaleString()),content:function(){return t.current},trigger:function(){return Object(M.jsx)("div",{style:be,children:Object(M.jsx)(K,{label:"Stampa/salva correzione"})})}}),Object(M.jsx)("div",{ref:t,style:ue,children:Object(M.jsxs)("div",{children:[Object.entries(e.questions).sort((function(e,t){return f[e[0]].order-f[t[0]].order})).map((function(t){var n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:"page-break"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:f[i].name}),Object(M.jsx)("ol",{children:r.map((function(t){return Object(M.jsx)("div",{children:Object(M.jsxs)("li",{children:[Object(M.jsx)(R,{text:"\n                            ".concat(t.text," [").concat(t.id).concat(t.sub?"-"+t.sub:"","]\n                            ").trim()})," ",Object(M.jsx)("u",{children:function(){var n,r=null===(n=e.answers[i].find((function(e){return(null===e||void 0===e?void 0:e.id)==t.id&&(null===e||void 0===e?void 0:e.sub)==t.sub})))||void 0===n?void 0:n.letter;return r?r==t.correct?"Esatta":"Errata":"Senza risposta"}()})]})},t.id+(t.sub||0))}))})]})]},i)}))," ",Object(M.jsx)("div",{className:"page-break"}),Object(M.jsxs)("div",{children:[e.resultTable,Object(M.jsx)("br",{}),"Hai delle domande sui quesiti e la loro risoluzione? Falle sul"," ",Object(M.jsx)("a",{href:"https://t.me/joinchat/_zugEikozmcyMzA0",target:"_blank",rel:"noreferrer noopener",children:"Gruppo preparazione TOL di PoliNetwork"}),"!",Object(M.jsx)("br",{}),"Per fare riferimento alla domanda manda, assieme al testo, anche l'ID (il numero che trovi fra [] dopo il testo)."]})]})})]})})}var pe=P({display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"11pt"}),Oe=P({alignSelf:"center"}),fe=P({borderSpacing:0}),he=P({padding:"5px",paddingInline:"10px",textAlign:"center",border:"thin solid ".concat(A),borderSpacing:"0px",fontSize:"9.5pt"}),ge=P(he,{fontWeight:"bold",backgroundColor:T,textAlign:"left"}),me=P({textAlign:"center"}),ve=P({margin:"2px",padding:"10px",textAlign:"justify"});function ye(e){var t,n=e.answers,i=e.questions,r=Object.fromEntries(Object.entries(i).map((function(e){var t=Object(o.a)(e,2),i=t[0],r=t[1],s=0,c=0,a=0;r.forEach((function(e){var t=n[i].find((function(t){return t&&t.id==e.id&&t.sub==e.sub}));t&&t.letter?t.letter==e.correct?s++:a++:c++}));var l=r.length,d=f[i].sample,j=f[i].sub||1,u=f[i].coeff;return[i,{total:l,correct:s,notGiven:c,wrong:a,weight:u,score:new O.a(h*s+g*a+m*c).div(l).mul(d*j)}]}))),s=Object.entries(r).map((function(e){var t=Object(o.a)(e,2)[1];return t.score.mul(t.weight)})).reduce((function(e,t){return e.add(t)}),new O.a(0)),c=s.compare(60)>=0,a=(null===(t=r.ing)||void 0===t?void 0:t.correct)>=24,l=function(){return Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(M.jsxs)("p",{style:me,children:[Object(M.jsx)("br",{}),"Esito:"," ",c?"Superato".concat(a?"":" (OFA TENG)"):"Non superato ".concat(a?"(OFA TEST)":"(OFA TEST + OFA TENG)"),Object(M.jsx)("br",{}),"Punteggio calcolato: ",E(s,!0)," /"," ",E(100,!0),Object(M.jsx)("br",{}),"Punteggio arrotondato: ",E(s)," /"," ",E(100)]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{style:Oe,children:Object(M.jsxs)("table",{style:fe,children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{}),Object(M.jsx)("td",{style:ge,children:"Punteggio sezione"}),Object(M.jsx)("td",{style:ge,children:"N\xb0 quesiti"}),Object(M.jsx)("td",{style:ge,children:"Esatti"}),Object(M.jsx)("td",{style:ge,children:"Errati"}),Object(M.jsx)("td",{style:ge,children:"Senza risposta"})]}),Object.entries(r).sort((function(e,t){return f[e[0]].order-f[t[0]].order})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{style:ge,children:v(n)}),Object(M.jsx)("td",{style:he,children:E(i.score,!0)}),Object(M.jsx)("td",{style:he,children:i.total}),Object(M.jsx)("td",{style:he,children:i.correct}),Object(M.jsx)("td",{style:he,children:i.wrong}),Object(M.jsx)("td",{style:he,children:i.notGiven})]},n)}))]})}),Object(M.jsx)("br",{})]})};return Object(M.jsxs)("div",{style:pe,children:[l(),Object(M.jsx)(de,{label:"Come viene calcolato il punteggio",startOpen:!1,children:Object(M.jsxs)("p",{style:ve,children:["Il ",Object(M.jsx)("b",{children:"punteggio massimo"})," conseguibile"," ",Object(M.jsxs)("b",{children:["\xe8 di ",E(100,!0)]})," e viene espresso fino alla seconda cifra decimale.",Object(M.jsx)("br",{}),"L'attribuzione di ",Object(M.jsx)("b",{children:"OFA TEST"})," (Obblighi Formativi Aggiunti) avviene quando il punteggio test, arrotondato all'intero pi\xf9 vicino,"," ",Object(M.jsxs)("b",{children:["\xe8 minore di ",E(60)]}),".",Object(M.jsx)("br",{}),"L'attribuzione di ",Object(M.jsx)("b",{children:"OFA TENG"})," avviene quando, considerando la sola sezione di ",f.ing.name,", il numero di risposte corrette"," ",Object(M.jsxs)("b",{children:["\xe8 inferiore a ",E(24)]}),".",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Il ",Object(M.jsx)("b",{children:"punteggio"})," della prova viene calcolato attribuendo:",Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[E(h)," punto ad ogni risposta esatta"]}),Object(M.jsxs)("li",{children:[E(g)," punti ad ogni risposta errata"]}),Object(M.jsxs)("li",{children:[E(m)," punti per ogni risposta non data"]})]}),"e assegnando",Object(M.jsx)("ul",{children:Object.entries(f).map((function(e,t){var n=Object(o.a)(e,2)[1];return Object(M.jsxs)("li",{children:["peso"," ","number"==typeof n.coeff?E(n.coeff):n.coeff.toFraction()," ","ad ogni quesito di ",n.name]},t)}))}),"Il ",Object(M.jsx)("b",{children:"punteggio"})," complessivo viene arrotondato all'intero pi\xf9 vicino (es: il punteggio 59,49 viene arrotondato a 59, il punteggio 59,50 a 60)"]})}),Object(M.jsx)(xe,{answers:e.answers,questions:e.questions,resultTable:l()})]})}var Se=P({display:"flex",flexDirection:"column",alignItems:"center",margin:"10px"}),we=P({textAlign:"center",display:"block"});function Ie(e){return Object(M.jsxs)("div",{style:Se,children:[Object(M.jsx)("p",{children:"Paragrafo sullo scopo del progetto etc. etc."}),Object(M.jsxs)("p",{children:[Object(M.jsx)("span",{style:we,children:"DISCLAIMER"}),"\"The TOL Project\" (Progetto) non \xe8 in alcun modo collegato al Politecnico di Milano ma \xe8 gestito gratuitamente da studenti. Gli autori del Progetto non si assumono alcuna responsabilit\xe0, n\xe9 garantiscono espressamente o implicitamente l'accuratezza o l'affidabilit\xe0 dei contenuti di questo sito ai fini del superamento del test di ammissione del Politecnico di Milano.",Object(M.jsx)("span",{style:we,children:"---"}),'"The TOL Project" (Project) is in no way connected to Politecnico di Milano but is managed free of charge by students. The authors of the Project do not assume any responsibility, nor do they expressly or implicitly guarantee the accuracy or reliability of the contents of this site for the purpose of passing the admission test at Politecnico di Milano.']}),Object(M.jsx)("div",{children:Object(M.jsx)(K,{label:"Inizia il test",onClick:e.startTest})})]})}function ke(e){var t=e.viewState[0];return"INFO-start"==t?Object(M.jsx)(Ie,{startTest:function(){e.viewState[1]("TOL-startSec")}}):"INFO-end"==t?Object(M.jsx)(ye,{answers:e.answers,questions:e.questions}):Object(M.jsx)("div",{})}var Te=n(31),Ae=P({fontSize:"11pt"});function Ce(e){var t=e.tmpAnswerState;return e.currentQuestion?Object(M.jsxs)("div",{children:[Object(M.jsx)(De,{letter:"a",letterState:t,text:e.currentQuestion.answers.a}),Object(M.jsx)(De,{letter:"b",letterState:t,text:e.currentQuestion.answers.b}),Object(M.jsx)(De,{letter:"c",letterState:t,text:e.currentQuestion.answers.c}),Object(M.jsx)(De,{letter:"d",letterState:t,text:e.currentQuestion.answers.d}),Object(M.jsx)(De,{letter:"e",letterState:t,text:e.currentQuestion.answers.e}),Object(M.jsx)(De,{letter:void 0,letterState:t,text:"Non so"})]}):Object(M.jsxs)("span",{style:Ae,children:[Object(M.jsx)("br",{}),"No answers to display \xaf\\_(\u30c4)_/\xaf"]})}function De(e){var t,n=P({fontWeight:"bold",textAlign:"center",verticalAlign:"middle",paddingInline:"10px"}),i=P({width:"2em",float:"left",display:"inline-block"});return Object(M.jsx)("tr",{style:Ae,children:Object(M.jsxs)("label",{children:[Object(M.jsxs)("td",{style:n,children:[Object(M.jsxs)("span",{style:i,children:[(null===(t=e.letter)||void 0===t?void 0:t.toUpperCase())||"?"," "]}),Object(M.jsx)("input",{type:"radio",value:e.letter,checked:e.letter==e.letterState[0],onChange:function(t){e.letterState[1](t.target.value||void 0)}})]}),Object(M.jsx)("td",{children:Object(M.jsx)(R,{text:e.text})})]})})}var ze=n(32),Le=P({display:"flex",flex:1,justifyContent:"flex-end",fontSize:"9.5pt",verticalAlign:"middle",gap:"10px",paddingBlock:"10px"}),qe=P({display:"flex",alignItems:"center"}),Fe=P({color:L});function Pe(e){var t=Object(o.a)(e.tmpFlaggedState,2),n=t[0],i=t[1];return e.currentQuestion?Object(M.jsxs)("div",{style:Le,children:[Object(M.jsxs)("label",{style:qe,children:[Object(M.jsx)("input",{type:"checkbox",checked:n,onChange:function(){i(!n)}}),Object(M.jsx)("span",{children:"Da rivedere"})]}),Object(M.jsx)(K,{label:"Conferma e vai alla successiva",leftIcon:function(){return Object(M.jsx)(ze.a,{style:Fe})},onClick:function(){e.updateAnswer({id:e.currentQuestion.id,sub:e.currentQuestion.sub,letter:e.tmpAnswerState[0],flagged:n})}})]}):Object(M.jsx)("div",{style:Le})}var Ee=n(17),Ne=P({display:"flex",justifyContent:"space-between"}),Qe=P({display:"flex"}),Me=P({display:"flex",padding:"1em",gap:"5px"}),Re=P({textAlign:"left",fontSize:"11pt",minWidth:"4em",padding:"7.5px"}),_e=P(Re,{fontWeight:"bold",width:"7.1em",paddingLeft:0}),Ue=P(Re,{textAlign:"center",marginInline:"5px",boxShadow:k}),We=P({height:"17.5px",width:"17.5px",color:C}),Be=P({paddingBlock:0});function Ge(e){var t,n,i,r,s,c;return Object(M.jsxs)("div",{style:Ne,children:[Object(M.jsxs)("div",{style:Qe,children:[Object(M.jsxs)("p",{style:_e,children:["Domanda ",e.questionIndex+1]}),Object(M.jsx)("p",{style:Object(I.a)(Object(I.a)({},Ue),{},{backgroundColor:(null===(t=e.currentAnswer)||void 0===t?void 0:t.flagged)?D:(null===(n=e.currentAnswer)||void 0===n?void 0:n.letter)?z:"inherit"}),children:((null===(i=e.currentAnswer)||void 0===i||null===(r=i.letter)||void 0===r?void 0:r.toUpperCase())||"")+((null===(s=e.currentAnswer)||void 0===s?void 0:s.flagged)?"?":"")||" "}),Object(M.jsxs)("p",{style:Re,children:["Risposta ",(null===(c=e.currentAnswer)||void 0===c?void 0:c.letter)?"":"non ","data"]})]}),Object(M.jsxs)("div",{style:Me,children:[Object(M.jsx)(K,{label:"precedente",onClick:function(){return e.shiftQuestionIndex(-1)},style:Be,leftIcon:function(){return Object(M.jsx)(Ee.a,{style:We})}}),Object(M.jsx)(K,{label:"successiva",onClick:function(){return e.shiftQuestionIndex(1)},style:Be,rightIcon:function(){return Object(M.jsx)(Ee.b,{style:We})}})]})]})}var Je=P({margin:"2px",padding:"10px",textAlign:"justify"}),Ve=P({padding:"1px",margin:0});function He(e){return Object(M.jsx)(de,{label:e.label,startOpen:e.startOpen,children:Object(M.jsx)("div",{style:Je,children:e.longText.trim().split("\n").map((function(e,t){return Object(M.jsx)("p",{style:Ve,children:e},t)}))})})}var Ke=P({marginBlock:0,display:"flex",flexDirection:"column"}),Xe=P({padding:"10px",display:"flex",flexDirection:"column",gap:"15px"}),Ye=P({display:"flex",flexDirection:"column",gap:"5px"}),Ze=P({maxHeight:"500px",width:"fit-content"});function $e(e){var t,n,i=e.question;return i?Object(M.jsxs)("div",{style:{marginBottom:(null===(t=i.attachments)||void 0===t?void 0:t.length)?0:"15px"},children:[i.track&&Object(M.jsx)(He,{label:"mostra/nascondi brano",longText:i.track}),Object(M.jsxs)("div",{style:Ke,children:[Object(M.jsx)(R,{text:i.text}),(null===(n=i.attachments)||void 0===n?void 0:n.length)&&Object(M.jsx)(de,{label:"mostra/nascondi allegati",contentStyle:Xe,children:i.attachments.map((function(e,t){return Object(M.jsxs)("span",{style:Ye,children:[Object(M.jsxs)("p",{style:Ke,children:["Allegato ",t+1,":"]}),Object(M.jsx)("img",{src:w(e),style:Ze})]},t+1)}))})]})]}):Object(M.jsx)("span",{style:Ke,children:"No question to display \xaf\\_(\u30c4)_/\xaf"})}var et=P({display:"flex",fontSize:"9.5pt",textDecoration:"none",color:C});function tt(e){return Object(M.jsx)("a",Object(I.a)(Object(I.a)({style:et},e.active?{href:"#"}:{}),{},{children:e.sectionQuestions.map((function(t,n){var i=e.sectionAnswers.find((function(e){return e&&e.id==t.id&&(!t.sub||t.sub==e.sub)}));return Object(M.jsx)(ct,{index:n,letter:null===i||void 0===i?void 0:i.letter,flagged:(null===i||void 0===i?void 0:i.flagged)||!1,onClick:function(){e.active&&e.currentQuestionIndexState[1](n)},selected:e.active&&e.currentQuestionIndexState[0]==n},n)}))}))}var nt=P({display:"flex",flexShrink:1,flexDirection:"column",alignContent:"baseline",textAlign:"center",width:"4em"}),it=P({padding:"0.3em",height:"1.2em",boxShadow:k}),rt=P({outline:"5px solid ".concat(C),marginInline:"4px",color:"black"}),st=P({margin:"auto"});function ct(e){var t;return Object(M.jsxs)("div",{style:Object(I.a)(Object(I.a)({},nt),{},{backgroundColor:T},e.selected?rt:{}),onClick:e.onClick,children:[Object(M.jsx)("div",{style:Object(I.a)(Object(I.a)({},it),{},{borderBottom:"thin solid #606060"},e.selected?{fontWeight:"bold"}:{}),children:Object(M.jsx)("p",{style:st,children:e.index+1})}),Object(M.jsx)("div",{style:Object(I.a)(Object(I.a)({},it),{},{backgroundColor:e.flagged?D:e.letter?z:"white"}),children:Object(M.jsxs)("p",{style:st,children:[(null===(t=e.letter)||void 0===t?void 0:t.toUpperCase())||" ",e.flagged&&"?"]})})]})}var ot=n(34),at=P({display:"flex",paddingTop:"10px",paddingBottom:"20px",alignItems:"center",flexDirection:"column"});function lt(e){var t=f[e.section];return Object(M.jsxs)("div",{style:at,children:[Object(M.jsxs)("p",{children:["Sezione conclusa: ",t.name,Object(M.jsx)("br",{}),"-"," ",E(e.sectionAnswers.reduce((function(e,t){return t.letter?e+1:e}),0))," ","/ ",E(e.sectionQuestions.length)," risposte date",Object(M.jsx)("br",{}),"- Tempo utilizzato:"," ",Math.floor(e.secondsUsed/60%60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",Math.floor(e.secondsUsed/60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",(e.secondsUsed%60).toLocaleString(void 0,{minimumIntegerDigits:2})," ","/ ",Math.floor(t.minutes/60),":",t.minutes%60,":00 (",Math.floor((60*t.minutes-e.secondsUsed)/60/60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",Math.floor((60*t.minutes-e.secondsUsed)/60%60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",((60*t.minutes-e.secondsUsed)%60).toLocaleString(void 0,{minimumIntegerDigits:2})," ","rimanente)"]}),Object(M.jsx)(K,{label:t.order==Math.max.apply(Math,Object(ot.a)(Object.values(f).map((function(e){return e.order}))))?"Vedi esito del test":"Prossima sezione",onClick:e.goToNextSection})]})}var dt=P({display:"flex",paddingTop:"10px",paddingBottom:"20px",alignItems:"center",flexDirection:"column"});function jt(e){var t=f[e.section];return Object(M.jsxs)("div",{style:dt,children:[Object(M.jsxs)("p",{children:["Stai per iniziare: ",t.name,Object(M.jsx)("br",{}),"-"," ","com"==e.section?"".concat(E(t.sample)," bran").concat(t.sample>1?"i":"o",", "):"",E("com"==e.section?t.sub||0:t.sample)," ","domande",Object(M.jsx)("br",{}),"- ",E(t.minutes)," minuti",Object(M.jsx)("br",{}),"- Peso sezione:"," ","number"==typeof t.coeff?E(t.coeff):t.coeff.toFraction()]}),Object(M.jsx)(K,{label:"Inzia sezione",onClick:e.startSection})]})}var ut=n(33),bt=P({color:L,display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}),xt=P({display:"flex",fontWeight:"bold",color:"inherit",border:"2px solid",borderRadius:"4px",height:"1.75em",fontSize:"1.25em",alignItems:"center",paddingInline:"10px"}),pt=P({color:q}),Ot=P({color:"inherit",height:"2.5em",width:"auto"}),ft=P({display:"flex",fontSize:"0.75em",maxWidth:"12em",textAlign:"left",wordWrap:"normal"});function ht(e){var t=e.timer;return Object(M.jsxs)("div",{style:Object(I.a)(Object(I.a)({},bt),60*(60*t.hours+t.minutes)+t.seconds<60&&(t.hours+t.minutes+t.seconds!=0||e.expired)?pt:{}),children:[Object(M.jsx)(ut.a,{style:Ot}),Object(M.jsxs)("div",{style:xt,children:[t.hours.toLocaleString(void 0,{minimumIntegerDigits:2}),":",t.minutes.toLocaleString(void 0,{minimumIntegerDigits:2}),":",t.seconds.toLocaleString(void 0,{minimumIntegerDigits:2})]}),Object(M.jsxs)("p",{style:ft,children:["Tempo rimanente",Object(M.jsx)("br",{})," per la sezione corrente"]})]})}var gt=P({display:"flex",alignItems:"center",justifyContent:"space-between"}),mt=P({display:"flex",alignItems:"baseline",flexDirection:"row",gap:"15px",fontSize:"11pt"});function vt(e){var t=e.currentSection;return Object(M.jsxs)("div",{style:gt,children:[Object(M.jsxs)("div",{style:mt,children:[Object(M.jsx)("div",{children:Object(M.jsxs)("p",{children:["Sezione: ",Object(M.jsx)("b",{children:v(t)})," ",Object(M.jsx)("br",{}),"Riposte: ",e.answers[t].length," /"," ",e.questions[t].length," (",e.answers[t].reduce((function(e,t){return e+(t.flagged?1:0)}),0)," ","da rivedere)"]})}),e.active&&Object(M.jsx)(K,{label:"Chiudi sezione",onClick:e.closeSection})]}),Object(M.jsx)(ht,{timer:e.timer,expired:e.timerExpired})]})}var yt=P({display:"flex",flexDirection:"column"});function St(e){var t=Object(i.useState)(0),n=Object(o.a)(t,2),r=n[0],s=n[1],c=Object(i.useState)(!1),a=Object(i.useState)(),l=Object(i.useState)(!1),d=Object(i.useState)(!1),j=Object(o.a)(e.sectionState,2),u=j[0],b=j[1],x=Object(o.a)(e.viewState,2),p=x[0],O=x[1],h=Object(o.a)(e.answersState,2),g=h[0],m=h[1],v=Object(o.a)(e.timeRecordState,2),y=v[0],S=v[1],w=e.questions[e.sectionState[0]],k=w[r],T=g[u][r],A=!d[0]&&(a[0]!=(null===T||void 0===T?void 0:T.letter)||c[0]!=((null===T||void 0===T?void 0:T.flagged)||!1)),C=function(){alert('Se prima non premi "Conferma e vai alla successiva" la risposta non verr\xe0 salvata.'),d[1](!0)},D=function(){if(A)return C();O("TOL-secRecap"),z(0),a[1](void 0),c[1](!1);var e=g;e[u]=e[u].map((function(e){return Object(I.a)(Object(I.a)({},e),{},{flagged:!1})})),m(e);var t=y;t[u]=60*f[u].minutes-(60*(60*q.hours+q.minutes)+q.seconds),S(t),q.restart(new Date,!1)},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(A&&!t)C();else{var n=g[u][e];c[1]((null===n||void 0===n?void 0:n.flagged)||!1),a[1]((null===n||void 0===n?void 0:n.letter)||void 0),d[1](!1),s(e)}},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(r+e+w.length)%w.length||0;return z(n,t)},q=Object(Te.useTimer)({expiryTimestamp:wt(f[u].minutes),autoStart:!1,onExpire:function(){D(),l[1](!0)}}),F=[r,z];if(!e.questions)return Object(M.jsx)("span",{children:"Loading..."});return Object(M.jsxs)("div",{children:[Object(M.jsx)(vt,{active:"TOL-testing"==p,answers:g,closeSection:D,currentSection:u,questions:e.questions,timer:q,timerExpired:l[0]}),Object(M.jsx)(tt,{active:"TOL-testing"==p,currentQuestionIndexState:F,sectionAnswers:g[u],sectionQuestions:w}),"TOL-startSec"==p?Object(M.jsx)(jt,{section:u,startSection:function(){O("TOL-testing"),q.start()}}):"TOL-testing"==p?Object(M.jsxs)("div",{style:yt,children:[Object(M.jsx)(Ge,{currentAnswer:T,questionIndex:r,shiftQuestionIndex:L,sectionQuestions:w}),Object(M.jsx)($e,{question:k}),Object(M.jsx)(Ce,{currentAnswer:T,currentQuestion:k,tmpAnswerState:a}),Object(M.jsx)(Pe,{currentQuestion:k,tmpAnswerState:a,tmpFlaggedState:c,updateAnswer:function(e){var t=g;t[u][r]=e,m(t),L(1,!0)}})]}):"TOL-secRecap"==p?Object(M.jsx)(lt,{goToNextSection:function(){var e=function(e){var t=Object.entries(f).sort((function(e,t){return e[1].order-t[1].order})),n=t.findIndex((function(t){return t[0]==e}));return(t[n+1]||[])[0]}(u);e?(b(e),q.restart(wt(f[e].minutes),!1),l[1](!1),O("TOL-startSec")):O("INFO-end")},section:u,secondsUsed:y[u]||0,sectionAnswers:g[u],sectionQuestions:e.questions[u]}):Object(M.jsx)("div",{})]})}function wt(e){var t=new Date;return t.setSeconds(t.getSeconds()+60*e),t}var It=P({height:"15px",backgroundColor:C}),kt=P({color:"white",margin:"auto .5em",fontSize:"9.5pt"});function Tt(e){return Object(M.jsx)("div",{style:It,children:Object(M.jsx)("p",{style:kt,children:e.text||""})})}function At(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(),c=Object(o.a)(s,2),a=c[0],l=c[1],d=Object(i.useState)("INFO-start"),j=Object(o.a)(d,2),u=j[0],x=j[1],p=Object(i.useState)("ing"),O=Object(i.useState)({ing:[],mat:[],com:[],fis:[]}),h=Object(i.useState)({}),g=Object(i.useState)([]),m=Object(o.a)(g,2),v=m[0],w=m[1];return Object(i.useEffect)((function(){n||function(){return S.apply(this,arguments)}().then((function(e){r(e),l(function(e){return Object.fromEntries(Object.entries(e).filter((function(e){var t=Object(o.a)(e,1)[0];return Object.values(y).includes(t)})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1].filter((function(e){return e.validated})),r=b.a.shuffle(b.a.uniq(i.map((function(e){return e.id})))).slice(0,f[n].sample);return[n,b.a.shuffle(i.filter((function(e){return r.includes(e.id)})))]})))}(e))})).catch((function(e){w(["There has been an issue while fetching the database data. Please retry later.",e])}))})),Object(M.jsxs)("div",{children:[Object(M.jsx)(ie,{viewState:[u,x]}),Object(M.jsx)(Tt,{}),Object(M.jsxs)("div",{style:{paddingInline:"7.5px"},children:[Object(M.jsx)(W,{hidden:!v[0],display:v[0]||"",internal:v[1]}),"dbPreview"==u&&n?Object(M.jsx)(U,{db:n}):u.startsWith("TOL")&&a?Object(M.jsx)(St,{answersState:O,questions:a,sectionState:p,timeRecordState:h,viewState:[u,x]}):u.startsWith("INFO")&&a?Object(M.jsx)(ke,{answers:O[0],questions:a,viewState:[u,x]}):void 0]}),Object(M.jsx)(Tt,{})]})}c.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(At,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d1053af9.chunk.js.map