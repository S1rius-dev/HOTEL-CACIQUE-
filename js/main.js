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
  // === Sidebar + Sección activa ===

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("article[id]");
    const navLinks = document.querySelectorAll("aside .list-group-item");

    // Usamos IntersectionObserver para detectar la visibilidad de cada sección
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quitar activo de todos
          navLinks.forEach(link => link.classList.remove("active"));
          sections.forEach(sec => sec.classList.remove("section-active"));

          // Activar el enlace correspondiente
          const link = document.querySelector(`aside .list-group-item[href="#${entry.target.id}"]`);
          if (link) link.classList.add("active");

          // Activar el estilo en la sección
          entry.target.classList.add("section-active");
        }
      });
    }, { threshold: 0.6 }); // 60% visible para marcar como activa

    sections.forEach(section => observer.observe(section));
  });
})();