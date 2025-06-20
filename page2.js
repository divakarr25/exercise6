document.body.classList.add(localStorage.getItem("theme") || "cyberpunk");

const input = document.getElementById("colorInput");
const button = document.getElementById("checkColor");
const display = document.getElementById("colorDisplay");

button.addEventListener("click", () => {
  const code = input.value.trim();

  // Basic validation
  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(code)) {
    display.textContent = 'Selected Color: ${code}';
    display.style.backgroundColor = code;
    display.style.color = "#000"; // for contrast
  } else {
    display.textContent = "❌ Invalid color code. Use format like #f1f1f1";
    display.style.backgroundColor = "#00000099";
    display.style.color = "#ff0000";
    display.style.color = "#ff00ff"
  }
});