import{i as u,g,o as m,O as a,b as f,f as r}from"./index-dd468b12-d916cc71.js";/* empty css             */u(r);const o=g(),n=document.getElementById("quickstart-sign-in"),s=document.getElementById("quickstart-sign-in-status"),c=document.getElementById("quickstart-account-details"),d=document.getElementById("quickstart-oauthtoken");function h(){if(o.currentUser)o.signOut();else{const t=new a("apple.com");t.addScope("email"),t.addScope("name"),f(o,t).then(function(e){e.user;const i=a.credentialFromResult(e);i.accessToken;const l=i.idToken;d.textContent=l??null}).catch(function(e){const i=e.code;e.message,e.email,e.credential,i==="auth/account-exists-with-different-credential"?alert("You have already signed up with a different auth provider for that email."):console.error(e)})}n.disabled=!0}m(o,function(t){t?(t.displayName,t.email,t.emailVerified,t.isAnonymous,t.uid,t.providerData,s.textContent="Signed in",n.textContent="Log out",c.textContent=JSON.stringify(t,null,"  ")):(s.textContent="Signed out",n.textContent="Log in with Apple",c.textContent="null",d.textContent="null"),n.disabled=!1});n.addEventListener("click",h,!1);
