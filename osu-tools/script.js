var AR = document.querySelector('#AR');
var BPM = document.querySelector('#BPM');
var density = document.querySelector('#Density');

function noteDensity(AR, BPM) { return preempt(AR) / 3 * BPM / 10000; }

function preempt(AR) {
  if (AR < 5) { return 1200 + 600 * (5 - AR) / 5; }
  else { return 1200 - 750 * (AR - 5) / 5; }
}

function densityFunc() { density.textContent = noteDensity(AR.value || 0, BPM.value || 0); }

densityFunc(); // Run once at startup

AR.addEventListener('input', densityFunc);
BPM.addEventListener('input', densityFunc);