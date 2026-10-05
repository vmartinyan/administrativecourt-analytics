(function () {
  const menuEl = document.getElementById("menu");
  const sidebarEl = document.getElementById("sidebar");
  const titleEl = document.getElementById("title");
  const pageEl = document.getElementById("page");

  function select(id) {
    activateMenuItem(menuEl, id);
    titleEl.textContent = labels[id].join(" / ");
    renderView(pageEl, id);
    sidebarEl.classList.remove("show");
    location.hash = id;
  }

  function showHome() {
    menuEl.querySelectorAll("a.active").forEach(a => a.classList.remove("active"));
    titleEl.textContent = "";
    renderHome(pageEl);
    sidebarEl.classList.remove("show");
    history.replaceState(null, "", location.pathname + location.search);
  }

  const labels = buildMenu(menuEl, MENU, select);

  document.getElementById("burger").addEventListener("click",
    () => sidebarEl.classList.toggle("show"));
  document.getElementById("brand").addEventListener("click", showHome);

  const hashId = location.hash.slice(1);
  if (labels[hashId]) select(hashId);
  else showHome();
})();
