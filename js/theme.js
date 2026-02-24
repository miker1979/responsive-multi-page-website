document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("themeToggle");

  if (!toggleButton) return; // safety check

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleButton.textContent = "Light Mode";
    } else {
      toggleButton.textContent = "Dark Mode";
    }
  });
});