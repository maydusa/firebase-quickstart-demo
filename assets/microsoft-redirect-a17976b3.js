import{i as l,g as u,c as r,d as f,O as c,o as g,e as m,s as h,f as C}from"./index-dd468b12-d916cc71.js";/* empty css             */l(C);const e=u();window.location.hostname==="localhost"&&r(e,"http://127.0.0.1:9099");const i=document.getElementById("quickstart-sign-in"),o=document.getElementById("quickstart-oauthtoken"),a=document.getElementById("quickstart-sign-in-status"),s=document.getElementById("quickstart-account-details");function p(){if(e.currentUser)h(e);else{const t=new c("microsoft.com");t.addScope("User.Read"),m(e,t)}i.disabled=!0}f(e).then(function(t){if(!t)return;const n=c.credentialFromResult(t);if(n){const d=n.accessToken;n.idToken,o.textContent=d??""}else o.textContent="null";t.user}).catch(function(t){const n=t.code;t.message,t.email,t.credential,n==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(t)});g(e,function(t){t?(t.displayName,t.email,t.emailVerified,t.isAnonymous,t.uid,t.providerData,a.textContent="Signed in",i.textContent="Log out",s.textContent=JSON.stringify(t,null,"  ")):(a.textContent="Signed out",i.textContent="Log in with Microsoft",s.textContent="null",o.textContent="null"),i.disabled=!1});i.addEventListener("click",p,!1);
