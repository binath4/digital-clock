let hour12 = true;

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggle");
const themeBtn = document.getElementById("theme");

function updateClock() {
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12
  });

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  timeEl.textContent = timeFormatter.format(now);
  dateEl.textContent = dateFormatter.format(now);

  requestAnimationFrame(updateClock);
}

toggleBtn.addEventListener("click", () => {
  hour12 = !hour12;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

requestAnimationFrame(updateClock);
