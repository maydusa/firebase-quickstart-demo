import{i as g,g as f,R as m,x as w,f as p}from"./index-9a76d29a-1ab19980.js";/* empty css             */g(p);const s=f(),o=document.getElementById("phone-number"),I=document.getElementById("sign-in-button"),l=document.getElementById("sign-in-form");function b(n){if(n.preventDefault(),d()){window.signingIn=!0,i();const r=u(),h=window.recaptchaVerifier;w(s,r,h).then(function(e){window.signingIn=!1,i(),a();const c=window.prompt("Enter the verification code you received by SMS");c&&e.confirm(c).then(function(){window.close()}).catch(function(t){console.error("Error while checking the verification code",t),window.alert(`Error while checking the verification code:

`+t.code+`

`+t.message)})}).catch(function(e){window.signingIn=!1,console.error("Error during signInWithPhoneNumber",e),window.alert(`Error during signInWithPhoneNumber:

`+e.code+`

`+e.message),i(),a()})}}function u(){return o.value}function d(){const n=/^\+[0-9\s\-\(\)]+$/;return u().search(n)!==-1}async function a(){const n=await window.recaptchaVerifier.render();grecaptcha.reset(n)}function i(){I.disabled=!d()||!!window.signingIn}l.addEventListener("submit",b);o.addEventListener("keyup",i);o.addEventListener("change",i);window.recaptchaVerifier=new m(s,"recaptcha-container");
