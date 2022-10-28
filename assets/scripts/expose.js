// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const horn = document.querySelector('#horn-select');
  const audio = document.getElementsByClassName("hidden");
  const imgs = document.getElementsByTagName("img");
  horn.addEventListener('input', function() {
    if (horn.value != "select") {
      imgs[0].src = "assets/images/" + horn.value + ".svg";
      audio.src = "assets/audio/" + horn.value + ".mp3";
     }
   });
  
}