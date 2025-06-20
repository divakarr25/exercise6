

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load theme or default
const savedTheme = localStorage.getItem("theme") || "cyberpunk";
applyTheme(savedTheme);

// Theme toggle
toggleBtn.addEventListener("click", () => {
  const current = body.classList.contains("cyberpunk") ? "cyberpunk" : "futuristic";
  const next = current === "cyberpunk" ? "futuristic" : "cyberpunk";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function applyTheme(theme) {
  body.classList.remove("cyberpunk", "futuristic");
  body.classList.add(theme);
}

// 🌀 Button click navigation
function navigate(page, label) {
  const msg = document.getElementById("responseMessage");
  msg.textContent = '✅ Navigating to ${label}...';
  setTimeout(() => {
    window.location.href = page;
  }, 1000);
}