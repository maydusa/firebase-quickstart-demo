import{i as a,g as u,c,o as l,s as g,a as d,f as m}from"./index-9a76d29a-1ab19980.js";/* empty css             */a(m);const n=u();window.location.hostname==="localhost"&&c(n,"http://127.0.0.1:9099");const e=document.getElementById("quickstart-sign-in"),o=document.getElementById("quickstart-sign-in-status"),i=document.getElementById("quickstart-account-details");function f(){n.currentUser?g(n):d(n).catch(function(t){const s=t.code;t.message,s==="auth/operation-not-allowed"?alert("You must enable Anonymous auth in the Firebase Console."):console.error(t)}),e.disabled=!0}l(n,function(t){t?(t.isAnonymous,t.uid,o.textContent="Signed in",e.textContent="Sign out",i.textContent=JSON.stringify(t,null,"  ")):(o.textContent="Signed out",e.textContent="Sign in",i.textContent="null"),e.disabled=!1});e.addEventListener("click",f,!1);