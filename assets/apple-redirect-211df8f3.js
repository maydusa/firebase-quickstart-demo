import{i as l,g as u,d as g,O as c,o as r,e as f,s as m,f as h}from"./index-9a76d29a-1ab19980.js";/* empty css             */l(h);const n=u(),i=document.getElementById("quickstart-sign-in"),a=document.getElementById("quickstart-sign-in-status"),s=document.getElementById("quickstart-account-details"),o=document.getElementById("quickstart-oauthtoken");function p(){if(n.currentUser)m(n);else{const t=new c("apple.com");t.addScope("email"),t.addScope("name"),f(n,t)}i.disabled=!0}g(n).then(function(t){if(!t)return;const e=c.credentialFromResult(t);if(e){e.accessToken;const d=e.idToken;o.textContent=d??null}else o.textContent="null";t.user}).catch(function(t){const e=t.code;t.message,t.email,t.credential,e==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(t)});r(n,function(t){t?(t.displayName,t.email,t.emailVerified,t.isAnonymous,t.uid,t.providerData,a.textContent="Signed in",i.textContent="Log out",s.textContent=JSON.stringify(t,null,"  ")):(a.textContent="Signed out",i.textContent="Log in with Apple",s.textContent="null",o.textContent="null"),i.disabled=!1});i.addEventListener("click",p,!1);
