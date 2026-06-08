const btn = document.querySelector("#play");

btn.addEventListener("click", () => {
  const audioCtx = new AudioContext();

  const osc = audioCtx.createOscillator();

  osc.frequency.value = 440;

  osc.connect(audioCtx.destination);

  osc.start();

  osc.stop(audioCtx.currentTime + 1);
});