document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      details.classList.toggle("hidden");
    });
  });
});
