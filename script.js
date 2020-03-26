window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
});

function removeTransition(e) {
  this.classList.remove("active");
}
const keyes = document.querySelectorAll(".key");
keyes.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
});
