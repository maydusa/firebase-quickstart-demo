import{i as d,g,c as m,o as u,s as f,j as h,k as w,l as I,m as S,f as r}from"./index-dd468b12-d916cc71.js";/* empty css             */d(r);const o=g();window.location.hostname==="localhost"&&m(o,"http://127.0.0.1:9099");const e=document.getElementById("quickstart-sign-in"),c=document.getElementById("email"),l=document.getElementById("quickstart-sign-in-status"),s=document.getElementById("quickstart-account-details");function p(){if(e.disabled=!0,o.currentUser)f(o).catch(function(t){t.code,t.message,a(t)});else{const t=c.value,n={url:window.location.href,handleCodeInApp:!0};h(o,t,n).then(function(){window.localStorage.setItem("emailForSignIn",t),alert("An email was sent to "+t+". Please use the link in the email to sign-in."),e.disabled=!1}).catch(function(i){i.code,i.message,a(i)})}}function a(t){alert("Error: "+t.message),console.log(t),e.disabled=!1}function E(){if(w(o,window.location.href)){e.disabled=!0;let t=window.localStorage.getItem("emailForSignIn");t||(t=window.prompt("Please provide the email you'd like to sign-in with for confirmation.")),t&&I(o,t,window.location.href).then(function(n){window.history.replaceState({},document.title,window.location.href.split("?")[0]),window.localStorage.removeItem("emailForSignIn"),n.user;const i=S(n);i==null||i.isNewUser,console.log(n)}).catch(function(n){n.code,n.message,a(n)})}}const k=window.localStorage.getItem("emailForSignIn");c.value=k??"";E();u(o,function(t){t?(t.displayName,t.email,t.emailVerified,t.photoURL,t.isAnonymous,t.uid,t.providerData,l.textContent="Signed in",e.textContent="Sign out",s.textContent=JSON.stringify(t,null,"  ")):(l.textContent="Signed out",e.textContent="Sign In without password",s.textContent="null"),e.disabled=!1});e.addEventListener("click",p,!1);