// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const horn = document.querySelector('#horn-select');
  const audio = document.getElementsByClassName("hidden");
  const imgs = document.getElementsByTagName("img");
  horn.addEventListener('input', function() {
    if(horn.value != "select") {
      imgs[0].src = "assets/images/" + horn.value + ".svg";
      audio.src = "assets/audio/" + horn.value + ".mp3";
     }
   });
  const vol = document.getElementById('volume');
  vol.addEventListener('change', function() {
    if(vol.value == 0) {
      imgs[1].src = "assets/icons/volume-level-0.svg";
      audio.volume = 0.0;
      //console.log(audio.volume);
    }
    else if(vol.value >= 1 && vol.value < 33) {
      imgs[1].src = "assets/icons/volume-level-1.svg";
      audio.volume = (vol.value / 100);
      //console.log(audio.volume);
    }
    else if(vol.value >= 33 && vol.value < 67) {
      imgs[1].src = "assets/icons/volume-level-2.svg";
      audio.volume = (vol.value / 100);
      //console.log(audio.volume);
    }
    else {
      imgs[1].src = "assets/icons/volume-level-3.svg";
      audio.volume = (vol.value / 100);
      //console.log(audio.volume);
    }
  });
  
}