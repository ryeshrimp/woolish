import{S as P,i as S,s as A,e as T,f as k,g as c,h as m,j as y,k as x,l as b,o as N,n as v,p as j,q as M,r as $,u as I,c as B,m as C,t as L,a as O,d as F}from"./vendor.095b192b.js";function U(o){var n;let t,s,e=((n=o[0])==null?void 0:n.toFixed(4))+"",a;return{c(){t=T("a"),s=k("$"),a=k(e),c(t,"target","_BLANK"),c(t,"href","https://www.dextools.io/app/ether/pair-explorer/0x7b12d855445073987d45ea97b1af3554f05e4ef4"),c(t,"class","svelte-bfvxw1")},m(r,u){m(r,t,u),y(t,s),y(t,a)},p(r,u){var i;u&1&&e!==(e=((i=r[0])==null?void 0:i.toFixed(4))+"")&&x(a,e)},d(r){r&&b(t)}}}function V(o){let t,s=o[0]&&U(o);return{c(){s&&s.c(),t=N()},m(e,a){s&&s.m(e,a),m(e,t,a)},p(e,[a]){e[0]?s?s.p(e,a):(s=U(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:v,o:v,d(e){s&&s.d(e),e&&b(t)}}}function W(o,t,s){let e,a,n;const r=async()=>{e=(await(await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",{method:"GET",headers:{Accept:"application/json"}})).json()).USD,a=(await(await fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",{method:"POST",headers:{Accept:"application/json"},body:'{"query":"\\n  {\\n    pool(id: \\"0x7b12d855445073987d45ea97b1af3554f05e4ef4\\") {\\n      sqrtPrice\\n    }\\n  }\\n"}'})).json()).data.pool.sqrtPrice**2/2**192,s(0,n=a*e)};return j(()=>{const u=setInterval(()=>r(),1e4);return()=>clearInterval(u)}),r(),e=null,a=null,s(0,n=null),[n]}class z extends P{constructor(t){super();S(this,t,W,V,A,{})}}let g;window.ethereum?g=new window.Web3(window.ethereum):window.web3&&(g=new window.Web3(window.web3.currentProvider));const K=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"controller",type:"address"}],name:"addController",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"controller",type:"address"}],name:"removeController",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],q=async o=>{try{return await g.eth.getTransactionReceipt(o)}catch{return null}},D=async o=>{try{return(await g.eth.getBlock(o)).timestamp}catch{return null}},Y=async()=>{try{const o=await g.eth.getBlockNumber();let s=await new g.eth.Contract(K,"0x8355dbe8b0e275abad27eb843f3eaf3fc855e525").getPastEvents({event:"Transfer",fromBlock:o-600,toBlock:"latest",topics:["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]});const e=new Set;let a={};const n=[...s].reverse(),r=n.filter((i,d)=>{var p;return e.add(i.blockNumber),d===0?!0:i.transactionHash!==((p=n[d-1])==null?void 0:p.transactionHash)});for(let i of s){const d=s.indexOf(i),p=await q(i.transactionHash);s[d].logs=p.logs}for(let i of e)a[i]=await D(i);return r.map(i=>{var d,p,w,_;return i.timestamp=a[i.blockNumber],((d=i.returnValues)==null?void 0:d.from)==="0x0000000000000000000000000000000000000000"?(i.source="POUCH CLAIM",(p=i.logs)==null||p.forEach(h=>{h.topics.includes("0x7479a7843bdace382d2299e185f766e52dbba87577c9a9f881008f44398bc287")&&(i.source="UNSTAKE")}),i.wool=parseFloat((i.returnValues.value/1e18).toFixed(3))):((w=i.returnValues)==null?void 0:w.to)==="0x0000000000000000000000000000000000000000"?(i.source="STAKE",i.wool=parseFloat((i.returnValues.value/1e18).toFixed(3))):(i.source="TRANSFER(?)",(_=i.logs)==null||_.forEach(h=>{h.topics.includes("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925")&&(i.source="SELL"),h.topics.includes("0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c")&&(i.source="BUY")}),i.wool=parseFloat((i.returnValues.value/1e18).toFixed(3))),{source:i.source,amount:i.wool,tx:i.transactionHash,timestamp:i.timestamp}})}catch(o){return console.log(o),null}};function R(o,t,s){const e=o.slice();return e[3]=t[s],e}function G(o){let t;return{c(){t=T("div"),t.textContent="Install metamask to retrieve live stats",c(t,"class","metamask-error svelte-1uzehuj")},m(s,e){m(s,t,e)},p:v,d(s){s&&b(t)}}}function J(o){let t,s=o[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=H(R(o,s,a));return{c(){t=T("section");for(let a=0;a<e.length;a+=1)e[a].c();c(t,"class","svelte-1uzehuj")},m(a,n){m(a,t,n);for(let r=0;r<e.length;r+=1)e[r].m(t,null)},p(a,n){if(n&3){s=a[0];let r;for(r=0;r<s.length;r+=1){const u=R(a,s,r);e[r]?e[r].p(u,n):(e[r]=H(u),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(a){a&&b(t),I(e,a)}}}function H(o){let t,s=new Date(o[3].timestamp*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})+"",e,a,n,r,u=o[3].source+"",i,d,p,w=o[3].amount.toLocaleString()+"",_,h,E;return{c(){t=T("span"),e=k(s),a=M(),n=T("a"),r=T("div"),i=k(u),d=M(),p=T("p"),_=k(w),h=M(),c(t,"class","svelte-1uzehuj"),$(r,"background-color",o[1](o[3].source)),c(r,"class","svelte-1uzehuj"),c(p,"class","svelte-1uzehuj"),c(n,"href",E="https://etherscan.io/tx/"+o[3].tx),c(n,"target","_BLANK"),$(n,"border-bottom","1px solid "+o[1](o[3].source)),c(n,"class","svelte-1uzehuj")},m(l,f){m(l,t,f),y(t,e),m(l,a,f),m(l,n,f),y(n,r),y(r,i),y(n,d),y(n,p),y(p,_),y(n,h)},p(l,f){f&1&&s!==(s=new Date(l[3].timestamp*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})+"")&&x(e,s),f&1&&u!==(u=l[3].source+"")&&x(i,u),f&1&&$(r,"background-color",l[1](l[3].source)),f&1&&w!==(w=l[3].amount.toLocaleString()+"")&&x(_,w),f&1&&E!==(E="https://etherscan.io/tx/"+l[3].tx)&&c(n,"href",E),f&1&&$(n,"border-bottom","1px solid "+l[1](l[3].source))},d(l){l&&b(t),l&&b(a),l&&b(n)}}}function Q(o){let t;function s(n,r){return n[0]?J:G}let e=s(o),a=e(o);return{c(){a.c(),t=N()},m(n,r){a.m(n,r),m(n,t,r)},p(n,[r]){e===(e=s(n))&&a?a.p(n,r):(a.d(1),a=e(n),a&&(a.c(),a.m(t.parentNode,t)))},i:v,o:v,d(n){a.d(n),n&&b(t)}}}function X(o,t,s){let e;const a=async()=>{s(0,e=await Y())};j(()=>{const r=setInterval(()=>a(),1e4);return()=>clearInterval(r)}),a();const n=r=>r==="STAKE"?"#ff9f43":r==="UNSTAKE"?"#feca57":r==="SELL"?"#ee5253":r==="POUCH CLAIM"?"#0abde3":r==="BUY"?"#1dd1a1":r==="TRANSFER(?)"?"#eee":"#fff";return s(0,e=[]),[e,n]}class Z extends P{constructor(t){super();S(this,t,X,Q,A,{})}}function ee(o){let t,s,e,a;return t=new z({}),e=new Z({}),{c(){B(t.$$.fragment),s=M(),B(e.$$.fragment)},m(n,r){C(t,n,r),m(n,s,r),C(e,n,r),a=!0},p:v,i(n){a||(L(t.$$.fragment,n),L(e.$$.fragment,n),a=!0)},o(n){O(t.$$.fragment,n),O(e.$$.fragment,n),a=!1},d(n){F(t,n),n&&b(s),F(e,n)}}}class ne extends P{constructor(t){super();S(this,t,null,ee,A,{})}}export{ne as default};
