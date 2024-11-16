const toggleMode = document.getElementById("toggle-mode");
const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme == "luxury") {
    toggleMode.checked = true;
  } else {
    toggleMode.checked = false;
  }
}

toggleMode.addEventListener("input", () => {
  if (toggleMode.checked) {
    document.documentElement.setAttribute("data-theme", "luxury");
  } else {
    document.documentElement.setAttribute("data-theme", "wireframe");
  }

  localStorage.setItem(
    "theme",
    document.documentElement.getAttribute("data-theme")
  );
});
