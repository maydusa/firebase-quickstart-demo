import{i as u,g,o as f,t as a,b as h,s as m,f as r}from"./index-dd468b12-d916cc71.js";/* empty css             */u(r);const o=g(),i=document.getElementById("quickstart-sign-in"),d=document.getElementById("quickstart-oauthtoken"),s=document.getElementById("quickstart-sign-in-status"),c=document.getElementById("quickstart-account-details");function p(){if(o.currentUser)m(o);else{const t=new a;t.addScope("https://www.googleapis.com/auth/contacts.readonly"),h(o,t).then(function(n){if(!n)return;const e=a.credentialFromResult(n),l=e==null?void 0:e.accessToken;n.user,d.textContent=l??""}).catch(function(n){const e=n.code;n.message,n.email,n.credential,e==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(n)})}i.disabled=!0}f(o,function(t){t?(t.displayName,t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,s.textContent="Signed in",i.textContent="Sign out",c.textContent=JSON.stringify(t,null,"  ")):(s.textContent="Signed out",i.textContent="Sign in with Google",c.textContent="null",d.textContent="null"),i.disabled=!1});i.addEventListener("click",p,!1);
