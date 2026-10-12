const nav = document.querySelector("[data-nav]");
const menuBtn = document.querySelector("[data-menu]");
const searchBtn = document.querySelector("[data-search]");
const searchOverlay = document.querySelector("[data-search-overlay]");
const searchInput = document.querySelector("[data-search-input]");
const searchResults = document.querySelector("[data-search-results]");

const pages = [
  { title: "Inicio", href: "index.html" },
  { title: "Nosotros", href: "nosotros.html" },
  { title: "Programas de Estudio", href: "programas.html" },
  { title: "CEPRETEC", href: "cepretec.html" },
  { title: "Información", href: "informacion.html" },
  { title: "Contacto", href: "contacto.html" },
  { title: "Login", href: "login.html" },
  { title: "Noticias y Comunicados", href: "noticias.html" },
  { title: "Inicio de Clases - Etapa I", href: "noticia-inicio-clases.html" },
  { title: "Resultados CEPRETEC", href: "noticia-resultados.html" },
  { title: "Enfermería técnica", href: "programas.html#enfermeria" },
  { title: "Farmacia técnica", href: "programas.html#farmacia" },
  { title: "Mecatrónica Automotriz", href: "programas.html#mecatronica" },
  { title: "Electrónica Industrial", href: "programas.html#electronica" },
  { title: "Arquitectura de Plataformas y servicios TI", href: "programas.html#ti" },
  { title: "Asistencia Administrativa", href: "programas.html#administrativa" },
  { title: "Guía oficial de Turismo", href: "programas.html#turismo" }
];

menuBtn?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

searchBtn?.addEventListener("click", () => {
  searchOverlay?.classList.add("open");
  searchInput?.focus();
});

searchOverlay?.addEventListener("click", (event) => {
  if (event.target === searchOverlay) {
    searchOverlay.classList.remove("open");
  }
});

searchInput?.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = "";
    return;
  }
  const matches = pages.filter((page) => page.title.toLowerCase().includes(q)).slice(0, 6);
  searchResults.innerHTML = matches
    .map((page) => `<a href="${page.href}">${page.title}</a>`)
    .join("") || `<p>No se encontraron resultados.</p>`;
});

document.querySelectorAll("[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const alertBox = form.querySelector("[data-alert]");
    if (alertBox) {
      alertBox.style.display = "block";
      alertBox.textContent = form.dataset.success || "Enviado correctamente.";
    }
    form.reset();
  });
});
