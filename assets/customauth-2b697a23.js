import{i as u,g as d,c as g,o as m,h as l,s as h,f as r}from"./index-dd468b12-d916cc71.js";/* empty css             */u(r);const n=d();window.location.hostname==="localhost"&&g(n,"http://127.0.0.1:9099");const i=document.getElementById("tokentext"),o=document.getElementById("quickstart-sign-in"),a=document.getElementById("quickstart-sign-in-status"),s=document.getElementById("quickstart-account-details");function f(){if(n.currentUser)h(n);else{const t=i.value;if(t.length<10){alert("Please enter a token in the text area");return}l(n,t).catch(function(e){const c=e.code;e.message,c==="auth/invalid-custom-token"?alert("The token you provided is not valid."):console.error(e)})}o.disabled=!0}m(n,function(t){t?(t.displayName,t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,a.textContent="Signed in",o.textContent="Sign out",s.textContent=JSON.stringify(t,null,"  ")):(a.textContent="Signed out",o.textContent="Sign in",s.textContent="null"),o.disabled=!1});o.addEventListener("click",f,!1);function k(t){const e=location.hash.match(new RegExp(t+"=([^&]*)"));return e?e[1]:null}i.value=k("token")||"";i.value&&l(n,i.value);
