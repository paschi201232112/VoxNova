
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

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const validCodes = ["VOXPRO123", "SUPPORT2025", "GAMERFREE10"];
  const status = document.getElementById("codeStatus");

  if (validCodes.includes(code)) {
    status.textContent = "✅ Codice valido! Funzione Pro sbloccata.";
  } else {
    status.style.color = "red";
    status.textContent = "❌ Codice non valido.";
  }
}
