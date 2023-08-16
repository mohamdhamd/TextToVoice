let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // console.log(voices)
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.onchange=function(){
    speech.voice=voices[voiceSelect.value];
}




document.querySelector("button").onclick = function () {
    // console.log("hello");
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}