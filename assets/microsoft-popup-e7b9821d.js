import{i as l,g,c as f,o as m,O as a,b as h,s as r,f as p}from"./index-dd468b12-d916cc71.js";/* empty css             */l(p);const o=g();window.location.hostname==="localhost"&&f(o,"http://127.0.0.1:9099");const i=document.getElementById("quickstart-sign-in"),d=document.getElementById("quickstart-oauthtoken"),s=document.getElementById("quickstart-sign-in-status"),c=document.getElementById("quickstart-account-details");function C(){if(o.currentUser)r(o);else{const t=new a("microsoft.com");t.addScope("User.Read"),h(o,t).then(function(n){const e=a.credentialFromResult(n),u=e==null?void 0:e.accessToken;e==null||e.idToken,n.user,d.textContent=u??""}).catch(function(n){const e=n.code;n.message,n.email,n.credential,e==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(n)})}i.disabled=!0}m(o,function(t){t?(t.displayName,t.email,t.emailVerified,t.isAnonymous,t.uid,t.providerData,s.textContent="Signed in",i.textContent="Log out",c.textContent=JSON.stringify(t,null,"  ")):(s.textContent="Signed out",i.textContent="Log in with Microsoft",c.textContent="null",d.textContent="null"),i.disabled=!1});i.addEventListener("click",C,!1);
