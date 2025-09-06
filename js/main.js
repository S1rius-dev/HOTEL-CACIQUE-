// main.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    fetch("navbar.html") // 👈 Ajusta la ruta según la ubicación de tu archivo
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(error => console.error("Error cargando el navbar:", error));
  }
});
