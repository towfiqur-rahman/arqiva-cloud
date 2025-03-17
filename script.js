function updateDynamicText() {
  const dynamicTextValue = document.querySelector("input[name='dynamic-text-field']").value
  document.getElementById('dynamic-text').innerHTML = dynamicTextValue;
  document.cookie = "dynamicText=" + dynamicTextValue + "; path=" + window.location.href;
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i <ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf('dynamicText=') == 0) {
       document.getElementById('dynamic-text').innerHTML =  c.substring(12, c.length);
       break;
     }
   }
}, false);