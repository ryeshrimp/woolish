import{S as D,i as j,s as C,e as h,f as E,g as d,h as f,j as T,k as N,l as m,o as L,n as k,p as x,q as M,r as A,u as G,c as F,m as O,t as $,a as H,d as R}from"./vendor.095b192b.js";function U(i){var s;let e,n,t=((s=i[0])==null?void 0:s.toFixed(4))+"",r;return{c(){e=h("a"),n=E("$"),r=E(t),d(e,"target","_BLANK"),d(e,"href","https://www.dextools.io/app/ether/pair-explorer/0x7b12d855445073987d45ea97b1af3554f05e4ef4"),d(e,"class","svelte-bfvxw1")},m(l,o){f(l,e,o),T(e,n),T(e,r)},p(l,o){var c;o&1&&t!==(t=((c=l[0])==null?void 0:c.toFixed(4))+"")&&N(r,t)},d(l){l&&m(e)}}}function z(i){let e,n=i[0]&&U(i);return{c(){n&&n.c(),e=L()},m(t,r){n&&n.m(t,r),f(t,e,r)},p(t,[r]){t[0]?n?n.p(t,r):(n=U(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:k,o:k,d(t){n&&n.d(t),t&&m(e)}}}function J(i,e,n){let t,r,s;const l=async()=>{t=(await(await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",{method:"GET",headers:{Accept:"application/json"}})).json()).USD,r=(await(await fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",{method:"POST",headers:{Accept:"application/json"},body:'{"query":"\\n  {\\n    pool(id: \\"0x7b12d855445073987d45ea97b1af3554f05e4ef4\\") {\\n      sqrtPrice\\n    }\\n  }\\n"}'})).json()).data.pool.sqrtPrice**2/2**192,n(0,s=r*t)};return x(()=>{const o=setInterval(()=>l(),1e4);return()=>clearInterval(o)}),l(),t=null,r=null,n(0,s=null),[s]}class Q extends D{constructor(e){super();j(this,e,J,z,C,{})}}let S;window.ethereum?S=new window.Web3(window.ethereum):window.web3&&(S=new window.Web3(window.web3.currentProvider));const X=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"controller",type:"address"}],name:"addController",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"controller",type:"address"}],name:"removeController",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],Z=async i=>{try{return await S.eth.getTransactionReceipt(i)}catch{return null}},ee=async i=>{try{return(await S.eth.getBlock(i)).timestamp}catch{return null}},I=async(i,e)=>{let t=await new S.eth.Contract(X,"0x8355dbe8b0e275abad27eb843f3eaf3fc855e525").getPastEvents({event:"Transfer",topics:["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"],fromBlock:i,toBlock:e});const r=new Set;let s={};const l=[...t].reverse(),o=l.filter((a,p)=>{var w;return r.add(a.blockNumber),p===0?!0:a.transactionHash!==((w=l[p-1])==null?void 0:w.transactionHash)});for(let a of t){const p=t.indexOf(a),w=await Z(a.transactionHash);t[p].logs=w.logs}for(let a of r)s[a]=await ee(a);return o.map(a=>{var p,w,_,v;return a.timestamp=s[a.blockNumber],((p=a.returnValues)==null?void 0:p.from)==="0x0000000000000000000000000000000000000000"?(a.source="POUCH CLAIM",(w=a.logs)==null||w.forEach(g=>{g.topics.includes("0x7479a7843bdace382d2299e185f766e52dbba87577c9a9f881008f44398bc287")&&(a.source="UNSTAKE")}),a.wool=parseFloat((a.returnValues.value/1e18).toFixed(3))):((_=a.returnValues)==null?void 0:_.to)==="0x0000000000000000000000000000000000000000"?(a.source="STAKE",a.wool=parseFloat((a.returnValues.value/1e18).toFixed(3))):(a.source="TRANSFER(?)",(v=a.logs)==null||v.forEach(g=>{g.topics.includes("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925")&&(a.source="SELL"),g.topics.includes("0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c")&&(a.source="BUY")}),a.wool=parseFloat((a.returnValues.value/1e18).toFixed(3))),{source:a.source,amount:a.wool,tx:a.transactionHash,timestamp:a.timestamp,blockNumber:a.blockNumber}})},te=async(i=[])=>{if(i.length<=0)return[];const e=i[i.length-1].blockNumber-600,n=i[i.length-1].blockNumber-1,t=await I(e,n);return i.concat(t)},V=async(i=600)=>{try{const e=await S.eth.getBlockNumber();return await I(e-i,"latest")}catch(e){return console.log(e),null}};function W(i,e,n){const t=i.slice();return t[6]=e[n],t[8]=n,t}function ne(i){let e;return{c(){e=h("div"),e.textContent="Install metamask to retrieve live stats",d(e,"class","notice svelte-14jmsyc")},m(n,t){f(n,e,t)},p:k,d(n){n&&m(e)}}}function ae(i){let e;return{c(){e=h("div"),e.textContent="loading events..",d(e,"class","notice svelte-14jmsyc")},m(n,t){f(n,e,t)},p:k,d(n){n&&m(e)}}}function se(i){let e,n,t,r=i[1],s=[];for(let o=0;o<r.length;o+=1)s[o]=q(W(i,r,o));let l=i[0]&&Y();return{c(){e=h("section");for(let o=0;o<s.length;o+=1)s[o].c();n=M(),l&&l.c(),t=L(),d(e,"id","events"),d(e,"class","svelte-14jmsyc")},m(o,c){f(o,e,c);for(let a=0;a<s.length;a+=1)s[a].m(e,null);f(o,n,c),l&&l.m(o,c),f(o,t,c)},p(o,c){if(c&6){r=o[1];let a;for(a=0;a<r.length;a+=1){const p=W(o,r,a);s[a]?s[a].p(p,c):(s[a]=q(p),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}o[0]?l||(l=Y(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(o){o&&m(e),G(s,o),o&&m(n),l&&l.d(o),o&&m(t)}}}function K(i){let e,n=new Date(i[6].timestamp*1e3).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric"})+"",t;return{c(){e=h("div"),t=E(n),d(e,"class","date svelte-14jmsyc")},m(r,s){f(r,e,s),T(e,t)},p(r,s){s&2&&n!==(n=new Date(r[6].timestamp*1e3).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric"})+"")&&N(t,n)},d(r){r&&m(e)}}}function q(i){let e=i[8]>0&&new Date(i[6].timestamp*1e3).getDay()!==new Date(i[1][i[8]-1].timestamp*1e3).getDay(),n,t,r=new Date(i[6].timestamp*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})+"",s,l,o,c,a=i[6].source+"",p,w,_,v=i[6].amount.toLocaleString()+"",g,B,P,y=e&&K(i);return{c(){y&&y.c(),n=M(),t=h("span"),s=E(r),l=M(),o=h("a"),c=h("div"),p=E(a),w=M(),_=h("p"),g=E(v),B=M(),d(t,"class","svelte-14jmsyc"),A(c,"background-color",i[2](i[6].source)),d(c,"class","svelte-14jmsyc"),d(_,"class","svelte-14jmsyc"),d(o,"href",P="https://etherscan.io/tx/"+i[6].tx),d(o,"target","_BLANK"),A(o,"border-bottom","1px solid "+i[2](i[6].source)),d(o,"class","svelte-14jmsyc")},m(u,b){y&&y.m(u,b),f(u,n,b),f(u,t,b),T(t,s),f(u,l,b),f(u,o,b),T(o,c),T(c,p),T(o,w),T(o,_),T(_,g),T(o,B)},p(u,b){b&2&&(e=u[8]>0&&new Date(u[6].timestamp*1e3).getDay()!==new Date(u[1][u[8]-1].timestamp*1e3).getDay()),e?y?y.p(u,b):(y=K(u),y.c(),y.m(n.parentNode,n)):y&&(y.d(1),y=null),b&2&&r!==(r=new Date(u[6].timestamp*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})+"")&&N(s,r),b&2&&a!==(a=u[6].source+"")&&N(p,a),b&2&&A(c,"background-color",u[2](u[6].source)),b&2&&v!==(v=u[6].amount.toLocaleString()+"")&&N(g,v),b&2&&P!==(P="https://etherscan.io/tx/"+u[6].tx)&&d(o,"href",P),b&2&&A(o,"border-bottom","1px solid "+u[2](u[6].source))},d(u){y&&y.d(u),u&&m(n),u&&m(t),u&&m(l),u&&m(o)}}}function Y(i){let e;return{c(){e=h("div"),e.textContent="loading more..",d(e,"class","loading svelte-14jmsyc")},m(n,t){f(n,e,t)},d(n){n&&m(e)}}}function re(i){let e;function n(s,l){return s[1]&&s[1].length>0?se:s[1]&&s[1].length==0?ae:ne}let t=n(i),r=t(i);return{c(){r.c(),e=L()},m(s,l){r.m(s,l),f(s,e,l)},p(s,[l]){t===(t=n(s))&&r?r.p(s,l):(r.d(1),r=t(s),r&&(r.c(),r.m(e.parentNode,e)))},i:k,o:k,d(s){r.d(s),s&&m(e)}}}function ie(i,e,n){let t,r;const s=async()=>{n(1,t=await V()),t.length<30&&await o()},l=async()=>{(await V(100)).forEach(p=>{const w=t.find(_=>p.tx===_.tx);Boolean(w)||t.unshift(p),n(1,t=t.sort((_,v)=>v.timestamp-_.timestamp))})},o=async()=>{r||(n(0,r=!0),n(1,t=await te(t)),n(0,r=!1))};x(async()=>{window.onscroll=async()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight&&await o()};const a=setInterval(()=>l(),1e4);return()=>clearInterval(a)}),s();const c=a=>a==="STAKE"?"#ff9f43":a==="UNSTAKE"?"#feca57":a==="SELL"?"#ee5253":a==="POUCH CLAIM"?"#0abde3":a==="BUY"?"#1dd1a1":a==="TRANSFER(?)"?"#eee":"#fff";return n(1,t=[]),n(0,r=!1),[r,t,c]}class oe extends D{constructor(e){super();j(this,e,ie,re,C,{})}}function le(i){let e,n,t,r;return e=new Q({}),t=new oe({}),{c(){F(e.$$.fragment),n=M(),F(t.$$.fragment)},m(s,l){O(e,s,l),f(s,n,l),O(t,s,l),r=!0},p:k,i(s){r||($(e.$$.fragment,s),$(t.$$.fragment,s),r=!0)},o(s){H(e.$$.fragment,s),H(t.$$.fragment,s),r=!1},d(s){R(e,s),s&&m(n),R(t,s)}}}class ce extends D{constructor(e){super();j(this,e,null,le,C,{})}}export{ce as default};
