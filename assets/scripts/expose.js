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
      audio[0].src = "assets/audio/" + horn.value + ".mp3";
      //console.log(audio[0]);
      //console.log(imgs[0]);
     }
   });
  const vol = document.getElementById('volume');
  vol.addEventListener('change', function() {
    if(vol.value == 0) {
      imgs[1].src = "assets/icons/volume-level-0.svg";
      audio[0].volume = 0.0;
      //console.log(audio[0].volume);
    }
    else if(vol.value >= 1 && vol.value < 33) {
      imgs[1].src = "assets/icons/volume-level-1.svg";
      audio[0].volume = (vol.value / 100);
      //console.log(audio[0].volume);
    }
    else if(vol.value >= 33 && vol.value < 67) {
      imgs[1].src = "assets/icons/volume-level-2.svg";
      audio[0].volume = (vol.value / 100);
      //console.log(audio[0].volume);
    }
    else {
      imgs[1].src = "assets/icons/volume-level-3.svg";
      audio[0].volume = (vol.value / 100);
      //console.log(audio[0].volume);
    }
  });
  const button = document.querySelector('button');
  button.addEventListener('click', function() {
    if(audio.value != "select") {
      if(horn.value == "party-horn" && audio.value != 0)
        jsConfetti.addConfetti();
      audio[0].play();
    }
  });
}