const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    "There are no mistakes, just happy accidents.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "Why fit in when you were born to stand out?",
    "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
    "Be yourself; everyone else is already taken",
    "Turn your wounds into wisdom",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "You must be the change you wish to see in the world.",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});