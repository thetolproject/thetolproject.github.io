(this["webpackJsonpthe-tol-project"]=this["webpackJsonpthe-tol-project"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),s=n(19),c=n.n(s),o=n(5),a=n(41),l=n.n(a),d=n(55),j=n(56),u=n.n(j),b=n(38),p=n(42),x=n(26),O=n.n(x),h={ing:{name:"Inglese",order:1,sample:30,minutes:15,coeff:new O.a("1/3")},mat:{name:"Matematica",order:2,sample:25,minutes:75,coeff:2.6},com:{name:"Comprensione verbale",order:3,sample:1,sub:5,minutes:10,coeff:3},fis:{name:"Fisica",order:4,sample:5,minutes:10,coeff:2}},f=1,m=-.25,g=0;function v(e){return h[e].name}var y={quesiti_ING:"ing",quesiti_MAT:"mat",quesiti_COM:"com",quesiti_FIS:"fis"};function S(){return(S=Object(d.a)(l.a.mark((function e(){var t,n,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/PoliNetworkOrg/TheTOLProjectData/main/database.json");case 2:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===t;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=t.data;case 11:if((null===(r=e.t2)||void 0===r||null===(n=r.meta)||void 0===n?void 0:n.version)==p.version){e.next=14;break}throw new Error("Database version doesn't match application.\nDatabase: ".concat(null===r||void 0===r||null===(i=r.meta)||void 0===i?void 0:i.version,"\nApp: ").concat(p.version));case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return"https://raw.githubusercontent.com/PoliNetworkOrg/TheTOLProjectData/main/img/".concat(e)}var k=n(7),I="1px 0 0 0 #606060, 0 1px 0 0 #606060, 1px 1px 0 0 #606060, /* corner */ 1px 0 0 0 #606060 inset, 0 1px 0 0 #606060 inset",T="#F3F3EE",C="#D5DFE4",A="#069",P="yellow",D="#00D700",L="#333",z="#009527",F="red",q={fontFamily:"Verdana, Roboto",color:L};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(k.a)(Object(k.a)({},q),t.filter((function(e){return e})).reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),t)}),{}))}function E(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return("number"==typeof e?e:parseFloat(e.round(t?2:0).toString())).toLocaleString("it-IT",{minimumFractionDigits:t?2:0,maximumFractionDigits:2}).replace(/\./g,",")}var Q=n(57),_=n.n(Q),M=n(1);function R(e){var t=e.text;return Object(M.jsx)(_.a,{children:t})}var B=N();function W(e){var t=e.db;return Object(M.jsx)("div",{children:Object.entries(t).filter((function(e){return"meta"!=Object(o.a)(e,1)[0]})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(M.jsxs)("div",{style:B,children:[Object(M.jsxs)("h3",{children:["Section: ",n]}),Object(M.jsx)("ul",{children:i.filter((function(e){return e.text||"com"==n})).map((function(e){return Object(M.jsxs)("div",{children:[Object(M.jsx)(R,{text:e.text}),Object(M.jsx)("br",{}),Object(M.jsxs)("p",{children:["Valid: ",e.validated+""]}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.a}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.b}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.c}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.d}),Object(M.jsx)("br",{}),Object(M.jsx)(R,{text:e.answers.e}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{})]},n+e.id+(e.sub||""))}))})]},n)}))})}function U(e){var t=e.hidden,n=e.display,i=e.internal;return Object(M.jsxs)("div",{hidden:t,children:[Object(M.jsx)("h3",{children:n}),Object(M.jsx)("blockquote",{children:i+""})]})}var G=n(127),J=n(128),V=n(131),H=n(130),K={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,borderRadius:2,p:4};function X(e){var t=Object(o.a)(e.openState,2),n=t[0],i=t[1];return Object(M.jsx)(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:function(){return i(!1)},closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(M.jsx)(J.a,{in:n,children:Object(M.jsx)(V.a,{sx:K,children:e.children})})})}var Y=N({display:"flex",justifyContent:"center",margin:"15px",gap:"50px",fontSize:"10pt",color:L}),Z=N({color:"inherit",textDecoration:"none"}),$=N();function ee(){var e,t=Object(i.useState)(!1),n=Object(i.useState)(!1),r=Object(i.useState)(!1);return Object(M.jsxs)("div",{style:Y,children:[Object(M.jsx)("a",{href:"https://github.com/PoliNetworkOrg/TheTOLProject/",style:Z,target:"_blank",rel:"noreferrer noopener",children:"Source"}),Object(M.jsx)("a",{href:"#",style:Z,onClick:function(){return t[1](!0)},children:"About"}),Object(M.jsx)("a",{href:"#",style:Z,onClick:function(){return n[1](!0)},children:"License"}),Object(M.jsx)("a",{href:"#",style:Z,onClick:function(){return r[1](!0)},children:"Privacy"}),(e=t,Object(M.jsx)(X,{openState:e,children:Object(M.jsx)("p",{style:$,children:"This a paragraph about the project."})})),te(n),ne(r)]})}function te(e){return Object(M.jsx)(X,{openState:e,children:Object(M.jsxs)("div",{style:$,children:[Object(M.jsx)("a",{rel:"license noreferrer noopener",href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",children:Object(M.jsx)("img",{alt:"Creative Commons License",style:{borderWidth:0,marginLeft:"auto",marginRight:"auto",display:"block"},src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"})}),Object(M.jsx)("br",{}),Object(M.jsx)("span",{"xmlns:dct":"http://purl.org/dc/terms/",property:"dct:title",children:"TheTOLProject"})," ","by"," ",Object(M.jsx)("a",{"xmlns:cc":"http://creativecommons.org/ns#",href:"https://polinetwork.github.io/it/projects/",property:"cc:attributionName",rel:"cc:attributionURL noreferrer noopener",target:"_blank",children:"PoliNetwork"})," ","is licensed under a"," ",Object(M.jsx)("a",{rel:"license noreferrer noopener",href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",children:"Creative Commons Attribution-ShareAlike 4.0 International License"}),".",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Permissions beyond the scope of this license may be available at"," ",Object(M.jsx)("a",{"xmlns:cc":"http://creativecommons.org/ns#",href:"https://github.com/PoliNetworkOrg/TheTOLProject/blob/main/LICENSE",rel:"cc:morePermissions noreferrer noopener",target:"_blank",children:"https://github.com/PoliNetworkOrg/TheTOLProject/blob/main/LICENSE"})]})})}function ne(e){return Object(M.jsx)(X,{openState:e,children:Object(M.jsxs)("p",{style:$,children:["Questo sito utilizza un tracker non invasivo per tener traccia della sua performance, nel rispetto delle norme GDPR. Il sito non salva nessun cookie permanente: ogni dato trasmesso \xe8 in forma anonima e non riconducibile all'utente. Per maggiori informazioni, visita la pagina"," ",Object(M.jsx)("a",{href:"https://panelbear.com/cookie-free-analytics/",target:"_blank",rel:"noreferrer noopener",children:'"Cookie Free Website Analytics" di PanelBear'}),".",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"This website uses a non-invasive tracker to keep track of its performance, complying with GDPR. The website does not store any permanent cookie: transmitted data is anonymized and not traceable to the user. For more info, check out"," ",Object(M.jsx)("a",{href:"https://panelbear.com/cookie-free-analytics/",target:"_blank",rel:"noreferrer noopener",children:'PanelBear\'s "Cookie Free Website Analytics"'})," ","web page."]})})}var ie=N({display:"flex",fontFamily:" Arial",fontSize:"9.5pt",alignItems:"center"}),re=N({display:"inline-block",marginBlock:0,margin:0,fontFamily:"Arial"}),se=N({display:"flex"}),ce=N(se,{float:"left",marginRight:"2px"}),oe=N(se,{float:"right",marginLeft:"2px"});function ae(e){return Object(M.jsxs)("button",{style:N(ie,e.style||{}),onClick:e.onClick,children:[Object(M.jsx)("span",{style:ce,children:e.leftIcon&&e.leftIcon()}),Object(M.jsx)("p",{style:re,children:e.label}),Object(M.jsx)("span",{style:oe,children:e.rightIcon&&e.rightIcon()})]})}var le=n.p+"static/media/logo.34b8e2e9.webp",de=N({height:"70px",display:"flex",alignItems:"center",justifyContent:"space-between"}),je=N({flex:1,fontSize:"18pt",display:"inline-block"}),ue=N(je,{display:"flex",justifyContent:"center"}),be=N({flex:1,display:"flex",alignItems:"center",gap:"10px",margin:"5px",textDecoration:"none"}),pe=N({height:"60px"}),xe=N({display:"flex",flex:1,justifyContent:"flex-end"});function Oe(e){var t=e.viewState;return Object(M.jsxs)("div",{style:de,children:[Object(M.jsxs)("a",{style:be,href:"https://polinetwork.github.io",rel:"noreferrer noopener",target:"_blank",children:[Object(M.jsx)("img",{src:le,alt:"logo",style:pe}),Object(M.jsx)("h1",{style:je,children:"PoliNetwork"})]}),Object(M.jsx)("h1",{style:ue,children:"The TOL Project"}),Object(M.jsx)("div",{style:xe,children:Object(M.jsx)(ae,{label:"Toggle database view",onClick:function(){var e=Object(o.a)(t,2),n=e[0],i=e[1];i("dbPreview"==n?"INFO-start":"dbPreview")}})})]})}var he=n(61),fe=n.n(he),me=n(62),ge=n.n(me),ve=N({margin:"10px"}),ye=N({background:T,margin:"5px"});function Se(e){var t,n=Object(i.useState)(null===(t=e.startOpen)||void 0===t||t),r=Object(o.a)(n,2),s=r[0],c=r[1];return Object(M.jsx)("div",{style:N(ve,e.outerDivStyle),children:Object(M.jsx)(ge.a,{trigger:Object(M.jsx)(ae,{label:e.label,onClick:function(){return c(!s)}}),open:s,onOpen:e.onOpen,onClose:e.onClose,easing:"ease-in-out",children:Object(M.jsx)("div",{style:N(ye,e.contentStyle),children:e.children})})})}n(106);var we=N({display:"flex",flexDirection:"column",padding:"15px",gap:"10px"}),ke=N(),Ie=N({display:"flex",justifyContent:"center"});function Te(e){var t=Object(i.useRef)();return Object(M.jsx)(Se,{label:"Correzione estesa",startOpen:!1,children:Object(M.jsxs)("div",{style:we,children:[Object(M.jsx)(fe.a,{documentTitle:"TheTOLProject ".concat((new Date).toLocaleString()),content:function(){return t.current},trigger:function(){return Object(M.jsx)("div",{style:Ie,children:Object(M.jsx)(ae,{label:"Stampa/salva correzione"})})}}),Object(M.jsx)("div",{ref:t,style:ke,children:Object(M.jsxs)("div",{children:[Object.entries(e.questions).sort((function(e,t){return h[e[0]].order-h[t[0]].order})).map((function(t){var n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(M.jsxs)("div",{children:[Object(M.jsx)("div",{className:"page-break"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("b",{children:h[i].name}),Object(M.jsx)("ol",{children:r.map((function(t){return Object(M.jsx)("div",{children:Object(M.jsxs)("li",{children:[Object(M.jsx)(R,{text:"\n                            ".concat(t.text," [").concat(t.id).concat(t.sub?"-"+t.sub:"","]\n                            ").trim()})," ",Object(M.jsx)("u",{children:function(){var n,r=null===(n=e.answers[i].find((function(e){return(null===e||void 0===e?void 0:e.id)==t.id&&(null===e||void 0===e?void 0:e.sub)==t.sub})))||void 0===n?void 0:n.letter;return r?r==t.correct?"Esatta":"Errata":"Senza risposta"}()})]})},t.id+(t.sub||0))}))})]})]},i)}))," ",Object(M.jsx)("div",{className:"page-break"}),Object(M.jsxs)("div",{children:[e.resultTable,Object(M.jsx)("br",{}),"Hai delle domande sui quesiti e la loro risoluzione? Falle sul"," ",Object(M.jsx)("a",{href:"https://t.me/joinchat/_zugEikozmcyMzA0",target:"_blank",rel:"noreferrer noopener",children:"Gruppo preparazione TOL di PoliNetwork"}),"!",Object(M.jsx)("br",{}),"Per fare riferimento alla domanda manda, assieme al testo, anche l'ID (il numero che trovi fra [] dopo il testo)."]})]})})]})})}var Ce=N({display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"11pt"}),Ae=N({alignSelf:"center"}),Pe=N({borderSpacing:0}),De=N({padding:"5px",paddingInline:"10px",textAlign:"center",border:"thin solid ".concat(C),borderSpacing:"0px",fontSize:"9.5pt"}),Le=N(De,{fontWeight:"bold",backgroundColor:T,textAlign:"left"}),ze=N({textAlign:"center"}),Fe=N({margin:"2px",padding:"10px",textAlign:"justify"});function qe(e){var t,n=e.answers,i=e.questions,r=Object.fromEntries(Object.entries(i).map((function(e){var t=Object(o.a)(e,2),i=t[0],r=t[1],s=0,c=0,a=0;r.forEach((function(e){var t=n[i].find((function(t){return t&&t.id==e.id&&t.sub==e.sub}));t&&t.letter?t.letter==e.correct?s++:a++:c++}));var l=r.length,d=h[i].sample,j=h[i].sub||1,u=h[i].coeff;return[i,{total:l,correct:s,notGiven:c,wrong:a,weight:u,score:new O.a(f*s+m*a+g*c).div(l).mul(d*j)}]}))),s=Object.entries(r).map((function(e){var t=Object(o.a)(e,2)[1];return t.score.mul(t.weight)})).reduce((function(e,t){return e.add(t)}),new O.a(0)),c=s.compare(60)>=0,a=(null===(t=r.ing)||void 0===t?void 0:t.correct)>=24,l=function(){return Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(M.jsxs)("p",{style:ze,children:[Object(M.jsx)("br",{}),"Esito:"," ",c?"Superato".concat(a?"":" (OFA TENG)"):"Non superato ".concat(a?"(OFA TEST)":"(OFA TEST + OFA TENG)"),Object(M.jsx)("br",{}),"Punteggio calcolato: ",E(s,!0)," /"," ",E(100,!0),Object(M.jsx)("br",{}),"Punteggio arrotondato: ",E(s)," /"," ",E(100)]}),Object(M.jsx)("br",{}),Object(M.jsx)("div",{style:Ae,children:Object(M.jsxs)("table",{style:Pe,children:[Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{}),Object(M.jsx)("td",{style:Le,children:"Punteggio sezione"}),Object(M.jsx)("td",{style:Le,children:"N\xb0 quesiti"}),Object(M.jsx)("td",{style:Le,children:"Esatti"}),Object(M.jsx)("td",{style:Le,children:"Errati"}),Object(M.jsx)("td",{style:Le,children:"Senza risposta"})]}),Object.entries(r).sort((function(e,t){return h[e[0]].order-h[t[0]].order})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{style:Le,children:v(n)}),Object(M.jsx)("td",{style:De,children:E(i.score,!0)}),Object(M.jsx)("td",{style:De,children:i.total}),Object(M.jsx)("td",{style:De,children:i.correct}),Object(M.jsx)("td",{style:De,children:i.wrong}),Object(M.jsx)("td",{style:De,children:i.notGiven})]},n)}))]})}),Object(M.jsx)("br",{})]})};return Object(M.jsxs)("div",{style:Ce,children:[l(),Object(M.jsx)(Se,{label:"Come viene calcolato il punteggio",startOpen:!1,children:Object(M.jsxs)("p",{style:Fe,children:["Il ",Object(M.jsx)("b",{children:"punteggio massimo"})," conseguibile"," ",Object(M.jsxs)("b",{children:["\xe8 di ",E(100,!0)]})," e viene espresso fino alla seconda cifra decimale.",Object(M.jsx)("br",{}),"L'attribuzione di ",Object(M.jsx)("b",{children:"OFA TEST"})," (Obblighi Formativi Aggiunti) avviene quando il punteggio test, arrotondato all'intero pi\xf9 vicino,"," ",Object(M.jsxs)("b",{children:["\xe8 minore di ",E(60)]}),".",Object(M.jsx)("br",{}),"L'attribuzione di ",Object(M.jsx)("b",{children:"OFA TENG"})," avviene quando, considerando la sola sezione di ",h.ing.name,", il numero di risposte corrette"," ",Object(M.jsxs)("b",{children:["\xe8 inferiore a ",E(24)]}),".",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Il ",Object(M.jsx)("b",{children:"punteggio"})," della prova viene calcolato attribuendo:",Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:[E(f)," punto ad ogni risposta esatta"]}),Object(M.jsxs)("li",{children:[E(m)," punti ad ogni risposta errata"]}),Object(M.jsxs)("li",{children:[E(g)," punti per ogni risposta non data"]})]}),"e assegnando",Object(M.jsx)("ul",{children:Object.entries(h).map((function(e,t){var n=Object(o.a)(e,2)[1];return Object(M.jsxs)("li",{children:["peso"," ","number"==typeof n.coeff?E(n.coeff):n.coeff.toFraction()," ","ad ogni quesito di ",n.name]},t)}))}),"Il ",Object(M.jsx)("b",{children:"punteggio"})," complessivo viene arrotondato all'intero pi\xf9 vicino (es: il punteggio 59,49 viene arrotondato a 59, il punteggio 59,50 a 60)"]})}),Object(M.jsx)(Te,{answers:e.answers,questions:e.questions,resultTable:l()})]})}var Ne=N({display:"flex",flexDirection:"column",alignItems:"center",margin:"10px"}),Ee=N({textAlign:"center",display:"block"});function Qe(e){return Object(M.jsxs)("div",{style:Ne,children:[Object(M.jsx)("p",{children:"Paragrafo sullo scopo del progetto etc. etc."}),Object(M.jsxs)("p",{children:[Object(M.jsx)("span",{style:Ee,children:"DISCLAIMER"}),"\"The TOL Project\" (Progetto) non \xe8 in alcun modo collegato al Politecnico di Milano ma \xe8 gestito gratuitamente da studenti. Gli autori del Progetto non si assumono alcuna responsabilit\xe0, n\xe9 garantiscono espressamente o implicitamente l'accuratezza o l'affidabilit\xe0 dei contenuti di questo sito ai fini del superamento del test di ammissione del Politecnico di Milano.",Object(M.jsx)("span",{style:Ee,children:"---"}),'"The TOL Project" (Project) is in no way connected to Politecnico di Milano but is managed free of charge by students. The authors of the Project do not assume any responsibility, nor do they expressly or implicitly guarantee the accuracy or reliability of the contents of this site for the purpose of passing the admission test at Politecnico di Milano.']}),Object(M.jsx)("div",{children:Object(M.jsx)(ae,{label:"Inizia il test",onClick:e.startTest})})]})}function _e(e){var t=e.viewState[0];return"INFO-start"==t?Object(M.jsx)(Qe,{startTest:function(){e.viewState[1]("TOL-startSec")}}):"INFO-end"==t?Object(M.jsx)(qe,{answers:e.answers,questions:e.questions}):Object(M.jsx)("div",{})}var Me=n(63),Re=N({fontSize:"11pt"});function Be(e){var t=e.tmpAnswerState;return e.currentQuestion?Object(M.jsxs)("div",{children:[Object(M.jsx)(We,{letter:"a",letterState:t,text:e.currentQuestion.answers.a}),Object(M.jsx)(We,{letter:"b",letterState:t,text:e.currentQuestion.answers.b}),Object(M.jsx)(We,{letter:"c",letterState:t,text:e.currentQuestion.answers.c}),Object(M.jsx)(We,{letter:"d",letterState:t,text:e.currentQuestion.answers.d}),Object(M.jsx)(We,{letter:"e",letterState:t,text:e.currentQuestion.answers.e}),Object(M.jsx)(We,{letter:void 0,letterState:t,text:"Non so"})]}):Object(M.jsxs)("span",{style:Re,children:[Object(M.jsx)("br",{}),"No answers to display \xaf\\_(\u30c4)_/\xaf"]})}function We(e){var t,n=N({fontWeight:"bold",textAlign:"center",verticalAlign:"middle",paddingInline:"10px"}),i=N({width:"2em",float:"left",display:"inline-block"});return Object(M.jsx)("tr",{style:Re,children:Object(M.jsxs)("label",{children:[Object(M.jsxs)("td",{style:n,children:[Object(M.jsxs)("span",{style:i,children:[(null===(t=e.letter)||void 0===t?void 0:t.toUpperCase())||"?"," "]}),Object(M.jsx)("input",{type:"radio",value:e.letter,checked:e.letter==e.letterState[0],onChange:function(t){e.letterState[1](t.target.value||void 0)}})]}),Object(M.jsx)("td",{children:Object(M.jsx)(R,{text:e.text})})]})})}var Ue=n(64),Ge=N({display:"flex",flex:1,justifyContent:"flex-end",fontSize:"9.5pt",verticalAlign:"middle",gap:"10px",paddingBlock:"10px"}),Je=N({display:"flex",alignItems:"center"}),Ve=N({color:z});function He(e){var t=Object(o.a)(e.tmpFlaggedState,2),n=t[0],i=t[1];return e.currentQuestion?Object(M.jsxs)("div",{style:Ge,children:[Object(M.jsxs)("label",{style:Je,children:[Object(M.jsx)("input",{type:"checkbox",checked:n,onChange:function(){i(!n)}}),Object(M.jsx)("span",{children:"Da rivedere"})]}),Object(M.jsx)(ae,{label:"Conferma e vai alla successiva",leftIcon:function(){return Object(M.jsx)(Ue.a,{style:Ve})},onClick:function(){e.updateAnswer({id:e.currentQuestion.id,sub:e.currentQuestion.sub,letter:e.tmpAnswerState[0],flagged:n})}})]}):Object(M.jsx)("div",{style:Ge})}var Ke=n(44),Xe=N({display:"flex",justifyContent:"space-between"}),Ye=N({display:"flex"}),Ze=N({display:"flex",padding:"1em",gap:"5px"}),$e=N({textAlign:"left",fontSize:"11pt",minWidth:"4em",padding:"7.5px"}),et=N($e,{fontWeight:"bold",width:"7.1em",paddingLeft:0}),tt=N($e,{textAlign:"center",marginInline:"5px",boxShadow:I}),nt=N({height:"17.5px",width:"17.5px",color:A}),it=N({paddingBlock:0});function rt(e){var t,n,i,r,s,c;return Object(M.jsxs)("div",{style:Xe,children:[Object(M.jsxs)("div",{style:Ye,children:[Object(M.jsxs)("p",{style:et,children:["Domanda ",e.questionIndex+1]}),Object(M.jsx)("p",{style:Object(k.a)(Object(k.a)({},tt),{},{backgroundColor:(null===(t=e.currentAnswer)||void 0===t?void 0:t.flagged)?P:(null===(n=e.currentAnswer)||void 0===n?void 0:n.letter)?D:"inherit"}),children:((null===(i=e.currentAnswer)||void 0===i||null===(r=i.letter)||void 0===r?void 0:r.toUpperCase())||"")+((null===(s=e.currentAnswer)||void 0===s?void 0:s.flagged)?"?":"")||" "}),Object(M.jsxs)("p",{style:$e,children:["Risposta ",(null===(c=e.currentAnswer)||void 0===c?void 0:c.letter)?"":"non ","data"]})]}),Object(M.jsxs)("div",{style:Ze,children:[Object(M.jsx)(ae,{label:"precedente",onClick:function(){return e.shiftQuestionIndex(-1)},style:it,leftIcon:function(){return Object(M.jsx)(Ke.a,{style:nt})}}),Object(M.jsx)(ae,{label:"successiva",onClick:function(){return e.shiftQuestionIndex(1)},style:it,rightIcon:function(){return Object(M.jsx)(Ke.b,{style:nt})}})]})]})}var st=N({margin:"2px",padding:"10px",textAlign:"justify"}),ct=N({padding:"1px",margin:0});function ot(e){return Object(M.jsx)(Se,{label:e.label,startOpen:e.startOpen,children:Object(M.jsx)("div",{style:st,children:e.longText.trim().split("\n").map((function(e,t){return Object(M.jsx)("p",{style:ct,children:e},t)}))})})}var at=N({marginBlock:0,display:"flex",flexDirection:"column"}),lt=N({padding:"10px",display:"flex",flexDirection:"column",gap:"15px"}),dt=N({display:"flex",flexDirection:"column",gap:"5px"}),jt=N({maxHeight:"500px",width:"fit-content"});function ut(e){var t,n,i=e.question;return i?Object(M.jsxs)("div",{style:{marginBottom:(null===(t=i.attachments)||void 0===t?void 0:t.length)?0:"15px"},children:[i.track&&Object(M.jsx)(ot,{label:"mostra/nascondi brano",longText:i.track}),Object(M.jsxs)("div",{style:at,children:[Object(M.jsx)(R,{text:i.text}),(null===(n=i.attachments)||void 0===n?void 0:n.length)&&Object(M.jsx)(Se,{label:"mostra/nascondi allegati",contentStyle:lt,children:i.attachments.map((function(e,t){return Object(M.jsxs)("span",{style:dt,children:[Object(M.jsxs)("p",{style:at,children:["Allegato ",t+1,":"]}),Object(M.jsx)("img",{src:w(e),style:jt})]},t+1)}))})]})]}):Object(M.jsx)("span",{style:at,children:"No question to display \xaf\\_(\u30c4)_/\xaf"})}var bt=N({display:"flex",fontSize:"9.5pt",textDecoration:"none",color:A});function pt(e){return Object(M.jsx)("a",Object(k.a)(Object(k.a)({style:bt},e.active?{href:"#"}:{}),{},{children:e.sectionQuestions.map((function(t,n){var i=e.sectionAnswers.find((function(e){return e&&e.id==t.id&&(!t.sub||t.sub==e.sub)}));return Object(M.jsx)(mt,{index:n,letter:null===i||void 0===i?void 0:i.letter,flagged:(null===i||void 0===i?void 0:i.flagged)||!1,onClick:function(){e.active&&e.currentQuestionIndexState[1](n)},selected:e.active&&e.currentQuestionIndexState[0]==n},n)}))}))}var xt=N({display:"flex",flexShrink:1,flexDirection:"column",alignContent:"baseline",textAlign:"center",width:"4em"}),Ot=N({padding:"0.3em",height:"1.2em",boxShadow:I}),ht=N({outline:"5px solid ".concat(A),marginInline:"4px",color:"black"}),ft=N({margin:"auto"});function mt(e){var t;return Object(M.jsxs)("div",{style:Object(k.a)(Object(k.a)({},xt),{},{backgroundColor:T},e.selected?ht:{}),onClick:e.onClick,children:[Object(M.jsx)("div",{style:Object(k.a)(Object(k.a)({},Ot),{},{borderBottom:"thin solid #606060"},e.selected?{fontWeight:"bold"}:{}),children:Object(M.jsx)("p",{style:ft,children:e.index+1})}),Object(M.jsx)("div",{style:Object(k.a)(Object(k.a)({},Ot),{},{backgroundColor:e.flagged?P:e.letter?D:"white"}),children:Object(M.jsxs)("p",{style:ft,children:[(null===(t=e.letter)||void 0===t?void 0:t.toUpperCase())||" ",e.flagged&&"?"]})})]})}var gt=n(15),vt=N({display:"flex",paddingTop:"10px",paddingBottom:"20px",alignItems:"center",flexDirection:"column"});function yt(e){var t=h[e.section];return Object(M.jsxs)("div",{style:vt,children:[Object(M.jsxs)("p",{children:["Sezione conclusa: ",t.name,Object(M.jsx)("br",{}),"-"," ",E(e.sectionAnswers.reduce((function(e,t){return t.letter?e+1:e}),0))," ","/ ",E(e.sectionQuestions.length)," risposte date",Object(M.jsx)("br",{}),"- Tempo utilizzato:"," ",Math.floor(e.secondsUsed/60%60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",Math.floor(e.secondsUsed/60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",(e.secondsUsed%60).toLocaleString(void 0,{minimumIntegerDigits:2})," ","/ ",Math.floor(t.minutes/60),":",t.minutes%60,":00 (",Math.floor((60*t.minutes-e.secondsUsed)/60/60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",Math.floor((60*t.minutes-e.secondsUsed)/60%60).toLocaleString(void 0,{minimumIntegerDigits:2}),":",((60*t.minutes-e.secondsUsed)%60).toLocaleString(void 0,{minimumIntegerDigits:2})," ","rimanente)"]}),Object(M.jsx)(ae,{label:t.order==Math.max.apply(Math,Object(gt.a)(Object.values(h).map((function(e){return e.order}))))?"Vedi esito del test":"Prossima sezione",onClick:e.goToNextSection})]})}var St=N({display:"flex",paddingTop:"10px",paddingBottom:"20px",alignItems:"center",flexDirection:"column"});function wt(e){var t=h[e.section];return Object(M.jsxs)("div",{style:St,children:[Object(M.jsxs)("p",{children:["Stai per iniziare: ",t.name,Object(M.jsx)("br",{}),"-"," ","com"==e.section?"".concat(E(t.sample)," bran").concat(t.sample>1?"i":"o",", "):"",E("com"==e.section?t.sub||0:t.sample)," ","domande",Object(M.jsx)("br",{}),"- ",E(t.minutes)," minuti",Object(M.jsx)("br",{}),"- Peso sezione:"," ","number"==typeof t.coeff?E(t.coeff):t.coeff.toFraction()]}),Object(M.jsx)(ae,{label:"Inzia sezione",onClick:e.startSection})]})}var kt=n(65),It=N({color:z,display:"flex",flexDirection:"row",alignItems:"center",gap:"5px"}),Tt=N({display:"flex",fontWeight:"bold",color:"inherit",border:"2px solid",borderRadius:"4px",height:"1.75em",fontSize:"1.25em",alignItems:"center",paddingInline:"10px"}),Ct=N({color:F}),At=N({color:"inherit",height:"2.5em",width:"auto"}),Pt=N({display:"flex",fontSize:"0.75em",maxWidth:"12em",textAlign:"left",wordWrap:"normal"});function Dt(e){var t=e.timer;return Object(M.jsxs)("div",{style:Object(k.a)(Object(k.a)({},It),60*(60*t.hours+t.minutes)+t.seconds<60&&(t.hours+t.minutes+t.seconds!=0||e.expired)?Ct:{}),children:[Object(M.jsx)(kt.a,{style:At}),Object(M.jsxs)("div",{style:Tt,children:[t.hours.toLocaleString(void 0,{minimumIntegerDigits:2}),":",t.minutes.toLocaleString(void 0,{minimumIntegerDigits:2}),":",t.seconds.toLocaleString(void 0,{minimumIntegerDigits:2})]}),Object(M.jsxs)("p",{style:Pt,children:["Tempo rimanente",Object(M.jsx)("br",{})," per la sezione corrente"]})]})}var Lt=N({display:"flex",alignItems:"center",justifyContent:"space-between"}),zt=N({display:"flex",alignItems:"baseline",flexDirection:"row",gap:"15px",fontSize:"11pt"});function Ft(e){var t=e.currentSection;return Object(M.jsxs)("div",{style:Lt,children:[Object(M.jsxs)("div",{style:zt,children:[Object(M.jsx)("div",{children:Object(M.jsxs)("p",{children:["Sezione: ",Object(M.jsx)("b",{children:v(t)})," ",Object(M.jsx)("br",{}),"Riposte: ",e.answers[t].length," /"," ",e.questions[t].length," (",e.answers[t].reduce((function(e,t){return e+(t.flagged?1:0)}),0)," ","da rivedere)"]})}),e.active&&Object(M.jsx)(ae,{label:"Chiudi sezione",onClick:e.closeSection})]}),Object(M.jsx)(Dt,{timer:e.timer,expired:e.timerExpired})]})}var qt=N({display:"flex",flexDirection:"column"});function Nt(e){var t=Object(i.useState)(0),n=Object(o.a)(t,2),r=n[0],s=n[1],c=Object(i.useState)(!1),a=Object(i.useState)(),l=Object(i.useState)(!1),d=Object(i.useState)(!1),j=Object(o.a)(e.sectionState,2),u=j[0],b=j[1],p=Object(o.a)(e.viewState,2),x=p[0],O=p[1],f=Object(o.a)(e.answersState,2),m=f[0],g=f[1],v=Object(o.a)(e.timeRecordState,2),y=v[0],S=v[1],w=e.questions[e.sectionState[0]],I=w[r],T=m[u][r],C=!d[0]&&(a[0]!=(null===T||void 0===T?void 0:T.letter)||c[0]!=((null===T||void 0===T?void 0:T.flagged)||!1)),A=function(){alert('Se prima non premi "Conferma e vai alla successiva" la risposta non verr\xe0 salvata.'),d[1](!0)},P=function(){if(C)return A();O("TOL-secRecap"),D(0),a[1](void 0),c[1](!1);var e=m;e[u]=e[u].map((function(e){return Object(k.a)(Object(k.a)({},e),{},{flagged:!1})})),g(e);var t=y;t[u]=60*h[u].minutes-(60*(60*z.hours+z.minutes)+z.seconds),S(t),z.restart(new Date,!1)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(C&&!t)A();else{var n=m[u][e];c[1]((null===n||void 0===n?void 0:n.flagged)||!1),a[1]((null===n||void 0===n?void 0:n.letter)||void 0),d[1](!1),s(e)}},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(r+e+w.length)%w.length||0;return D(n,t)},z=Object(Me.useTimer)({expiryTimestamp:Et(h[u].minutes),autoStart:!1,onExpire:function(){P(),l[1](!0)}}),F=[r,D];if(!e.questions)return Object(M.jsx)("span",{children:"Loading..."});return Object(M.jsxs)("div",{children:[Object(M.jsx)(Ft,{active:"TOL-testing"==x,answers:m,closeSection:P,currentSection:u,questions:e.questions,timer:z,timerExpired:l[0]}),Object(M.jsx)(pt,{active:"TOL-testing"==x,currentQuestionIndexState:F,sectionAnswers:m[u],sectionQuestions:w}),"TOL-startSec"==x?Object(M.jsx)(wt,{section:u,startSection:function(){O("TOL-testing"),z.start()}}):"TOL-testing"==x?Object(M.jsxs)("div",{style:qt,children:[Object(M.jsx)(rt,{currentAnswer:T,questionIndex:r,shiftQuestionIndex:L,sectionQuestions:w}),Object(M.jsx)(ut,{question:I}),Object(M.jsx)(Be,{currentAnswer:T,currentQuestion:I,tmpAnswerState:a}),Object(M.jsx)(He,{currentQuestion:I,tmpAnswerState:a,tmpFlaggedState:c,updateAnswer:function(e){var t=m;t[u][r]=e,g(t),L(1,!0)}})]}):"TOL-secRecap"==x?Object(M.jsx)(yt,{goToNextSection:function(){var e=function(e){var t=Object.entries(h).sort((function(e,t){return e[1].order-t[1].order})),n=t.findIndex((function(t){return t[0]==e}));return(t[n+1]||[])[0]}(u);e?(b(e),z.restart(Et(h[e].minutes),!1),l[1](!1),O("TOL-startSec")):O("INFO-end")},section:u,secondsUsed:y[u]||0,sectionAnswers:m[u],sectionQuestions:e.questions[u]}):Object(M.jsx)("div",{})]})}function Et(e){var t=new Date;return t.setSeconds(t.getSeconds()+60*e),t}var Qt=N({height:"15px",backgroundColor:A}),_t=N({color:"white",margin:"auto .5em",fontSize:"9.5pt"});function Mt(e){return Object(M.jsx)("div",{style:Qt,children:Object(M.jsx)("p",{style:_t,children:e.text||""})})}function Rt(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)(),c=Object(o.a)(s,2),a=c[0],l=c[1],d=Object(i.useState)("INFO-start"),j=Object(o.a)(d,2),u=j[0],p=j[1],x=Object(i.useState)("ing"),O=Object(i.useState)({ing:[],mat:[],com:[],fis:[]}),f=Object(i.useState)({}),m=Object(i.useState)([]),g=Object(o.a)(m,2),v=g[0],w=g[1];return Object(i.useEffect)((function(){n||function(){return S.apply(this,arguments)}().then((function(e){r(e),l(function(e){return Object.fromEntries(Object.entries(e).filter((function(e){var t=Object(o.a)(e,1)[0];return Object.values(y).includes(t)})).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1].filter((function(e){return e.validated})),r=b.a.shuffle(b.a.uniq(i.map((function(e){return e.id})))).slice(0,h[n].sample);return[n,b.a.shuffle(i.filter((function(e){return r.includes(e.id)})))]})))}(e))})).catch((function(e){w(["There has been an issue while fetching the database data. Please retry later.",e])}))})),Object(M.jsxs)("div",{children:[Object(M.jsx)(Oe,{viewState:[u,p]}),Object(M.jsx)(Mt,{}),Object(M.jsxs)("div",{style:{paddingInline:"7.5px"},children:[Object(M.jsx)(U,{hidden:!v[0],display:v[0]||"",internal:v[1]}),"dbPreview"==u&&n?Object(M.jsx)(W,{db:n}):u.startsWith("TOL")&&a?Object(M.jsx)(Nt,{answersState:O,questions:a,sectionState:x,timeRecordState:f,viewState:[u,p]}):u.startsWith("INFO")&&a?Object(M.jsx)(_e,{answers:O[0],questions:a,viewState:[u,p]}):void 0]}),Object(M.jsx)(Mt,{}),Object(M.jsx)(ee,{})]})}c.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(Rt,{})}),document.getElementById("root"))},42:function(e){e.exports=JSON.parse('{"name":"the-tol-project","version":"0.0.0","private":true,"homepage":"https://thetolproject.github.io/","scripts":{"build":"react-scripts build","build:db":"ts-node scripts/database.ts","prebuild:db":"npx rimraf temp && npx mkdirp temp/img","deploy":"gh-pages -d build -r https://github.com/thetolproject/thetolproject.github.io.git","predeploy":"npm run build","depcheck":"depcheck","eject":"react-scripts eject","exports":"ts-prune -e","lint":"eslint ./src ./scripts","lint:fix":"npm run lint -- --fix","start":"react-scripts start","test":"npm run build && npm run lint && npm run exports"},"devDependencies":{"@emotion/react":"^11.6.0","@emotion/styled":"^11.6.0","@mui/material":"^5.1.1","@types/google-spreadsheet":"^3.1.5","@types/node":"^16.10.3","@types/react":"^17.0.27","@types/react-dom":"^17.0.9","@types/react-latex":"^2.0.0","@types/underscore":"^1.11.3","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","axios":"^0.24.0","csstype":"^3.0.9","depcheck":"^1.4.2","dotenv":"^10.0.0","eslint":"^7.32.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","fraction.js":"^4.1.2","gh-pages":"^3.2.3","google-spreadsheet":"^3.1.15","googleapis":"^39.2.0","mkdirp":"^1.0.4","prettier":"^2.4.1","react":"^17.0.2","react-collapsible":"^2.8.4","react-dom":"^17.0.2","react-icons":"^4.3.1","react-latex":"^2.0.0","react-scripts":"4.0.3","react-timer-hook":"^3.0.5","react-to-print":"^2.14.0","rimraf":"^3.0.2","ts-node":"^10.3.0","ts-prune":"^0.10.1","typescript":"^4.4.3","underscore":"^1.13.1"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[107,1,2]]]);
//# sourceMappingURL=main.4734e080.chunk.js.map