import{i as l,g as u,o as a,s as c,f as d}from"./index-9a76d29a-1ab19980.js";/* empty css             */l(d);const n=u(),e=document.getElementById("sign-in-button"),i=document.getElementById("sign-out-button"),o=document.getElementById("sign-in-status"),s=document.getElementById("account-details");function p(){window.open("phone-simple-popup.html","_blank","height=600px,width=450px,top=100px,left=100px")}function g(){c(n)}function m(){n.currentUser?e.style.display="none":e.style.display="block"}function f(){n.currentUser?i.style.display="block":i.style.display="none"}function y(){const t=n.currentUser;t?(o.textContent="Signed in",s.textContent=JSON.stringify(t,null,"  ")):(o.textContent="Signed out",s.textContent="null")}a(n,function(t){t&&(t.uid,t.email,t.photoURL,t.phoneNumber,t.isAnonymous,t.displayName,t.providerData,t.emailVerified),m(),f(),y()});e.addEventListener("click",p);i.addEventListener("click",g);