const man = document.getElementById("man");
const woman = document.getElementById("woman");
const card = document.getElementById("card");
const countEl = document.getElementById("count");
const speech = document.getElementById("speech");
const forgiveBtn = document.getElementById("forgiveBtn");
const ending = document.getElementById("ending");
const intro = document.getElementById("intro");

let count = 0;
let forgiven = false;

man.classList.add("squatting");

const squatTimer = setInterval(() => {
  if (forgiven) return;
  count++;
  countEl.textContent = count;

  const lines = [
    "Sorry... 🥺",
    "Sach mein sorry...",
    "Galti ho gayi... 😔",
    "Please maan jao ❤️",
    "Last wala... pakka! 🥹"
  ];
  speech.textContent = lines[count % lines.length];

  if (count >= 12) {
    clearInterval(squatTimer);
    speech.textContent = "Ab toh maaf kar do na... 🥺❤️";
  }
}, 750);

forgiveBtn.addEventListener("click", () => {
  if (forgiven) return;
  forgiven = true;

  man.classList.remove("squatting");
  card.classList.add("hug-mode");
  intro.classList.add("hide");
  speech.textContent = "Maaf kar diya! ❤️";

  // Let the couple move together before the emotional ending.
  setTimeout(() => {
    speech.textContent = "Come here... 🥹";
  }, 600);

  setTimeout(() => {
    ending.classList.add("show");
  }, 1500);

  forgiveBtn.disabled = true;
});
