import{i as l,g as u,d as g,F as c,o as r,e as f,s as m,f as h}from"./index-dd468b12-d916cc71.js";/* empty css             */l(h);const e=u(),n=document.getElementById("quickstart-sign-in"),o=document.getElementById("quickstart-oauthtoken"),a=document.getElementById("quickstart-sign-in-status"),s=document.getElementById("quickstart-account-details");function k(){if(e.currentUser)m(e);else{const t=new c;t.addScope("user_likes"),f(e,t)}n.disabled=!0}g(e).then(function(t){if(!t)return;const i=c.credentialFromResult(t);if(i){const d=i.accessToken;o.textContent=d??""}else o.textContent="null";t.user}).catch(function(t){const i=t.code;t.message,t.email,t.credential,i==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(t)});r(e,function(t){t?(t.displayName,t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,a.textContent="Signed in",n.textContent="Log out",s.textContent=JSON.stringify(t,null,"  ")):(a.textContent="Signed out",n.textContent="Log in with Facebook",s.textContent="null",o.textContent="null"),n.disabled=!1});n.addEventListener("click",k,!1);
