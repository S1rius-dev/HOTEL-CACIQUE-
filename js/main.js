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

(function highlightActiveSection() {

  document.addEventListener("DOMContentLoaded", () => {

    const sections = Array.from(document.querySelectorAll("article[id]"));
    const navLinks = Array.from(document.querySelectorAll("aside .list-group-item"));

    function updateActiveSection() {
      let closestSection = null;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 120); 
        // 120 px = margen para navbar fija y un poco de espacio visual

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        const id = closestSection.getAttribute("id");

        // Quitar active de todos
        navLinks.forEach(link => link.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("section-active"));

        // Activar el link correspondiente
        const activeLink = document.querySelector(`aside .list-group-item[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");

        // Activar la sección
        closestSection.classList.add("section-active");
      }
    }

    // Ejecutar al cargar
    updateActiveSection();

    // Ejecutar cada vez que se hace scroll
    window.addEventListener("scroll", updateActiveSection);
  });

})();
