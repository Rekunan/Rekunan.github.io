function NoteDensity(AR, BPM) {
  return Preempt(AR) / 3 * BPM / 10000;
}

function Preempt(AR) {
  if (AR < 5) { return 1200 + 600 * (5 - AR) / 5; }
  else { return 1200 - 750 * (AR - 5) / 5; }
}

function densityFunc() {
  document.getElementById("Density").innerHTML = NoteDensity(parseFloat(document.getElementById("AR").value), parseFloat(document.getElementById("BPM").value));
}