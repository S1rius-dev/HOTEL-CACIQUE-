(function () {
  // === Navbar ===
  const NAV_PATH = "navbar.html"; // Ajusta la ruta según tu estructura
  fetch(NAV_PATH)
    .then(resp => resp.text())
    .then(html => {
      document.getElementById("navbar-placeholder").innerHTML = html;

      // Marcar activo el link correspondiente
      const links = document.querySelectorAll("#navbar-placeholder .nav-link");
      const currentFile = window.location.pathname.split("/").pop() || "index.html";
      links.forEach(link => {
        if (link.getAttribute("href") === currentFile) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Error cargando navbar:", err));

  // === Footer ===
  const FOOTER_PATH = "footer.html"; // Ajusta la ruta según tu estructura
  fetch(FOOTER_PATH)
    .then(resp => resp.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    })
    .catch(err => console.error("Error cargando footer:", err));
})();
