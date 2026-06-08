function play(freq) {
  const audioCtx = new AudioContext();

  const osc = audioCtx.createOscillator();

  osc.frequency.value = freq;

  osc.connect(audioCtx.destination);

  osc.start();

  osc.stop(audioCtx.currentTime + 1);
}

document.querySelector("#do").addEventListener("click", () => {
  play(261.63);
});

document.querySelector("#mi").addEventListener("click", () => {
  play(329.63);
});

document.querySelector("#sol").addEventListener("click", () => {
  play(392);
});