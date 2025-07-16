
let countdown = 5;
const counter = document.getElementById("countdown");
const interval = setInterval(() => {
  countdown--;
  counter.textContent = countdown;
  if (countdown <= 0) {
    clearInterval(interval);
    window.location.href = "https://example.com/voxnova.exe"; // cambia con link reale
  }
}, 1000);
