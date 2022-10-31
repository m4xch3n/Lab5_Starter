// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

function init() {
  window.addEventListener('load', function() {
    const voices = document.querySelector("#voice-select");
    //console.log(voices);
    let vox = synth.getVoices();
    //console.groupCollapsed(vox);
    vox.forEach(element => {
      voices.add(new Option(element.name));
    });
    //console.log(voices);
  });
  const button = document.querySelector('button');
  const textarea = document.getElementById("text-to-speek");
  console.log(button);
  button.addEventListener('click', function() {
    console.log(textarea.value);
  });
}