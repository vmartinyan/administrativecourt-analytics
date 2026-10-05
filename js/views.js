// Default landing page shown when no menu item is selected.
function renderHome(pageEl) {
  pageEl.innerHTML = `
    <div class="empty-page home-page">
      <div class="empty-icon">⚖</div>
      <h2 class="home-title">«Վարչական Դատարան» </br> էլեկտրոնային համակարգի </br> <span class="highlight">Վերլուծական Պորտալ</span></h2>
    </div>`;
}

// Renders page content into the given container.
function renderView(pageEl, id) {
  if (DASHBOARDS[id]) {
    pageEl.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "dash";
    frame.src = `${DASHBOARDS[id]}#bordered=false&titled=false`;
    pageEl.appendChild(frame);
    return;
  }
  pageEl.innerHTML = `
    <div class="empty-page">
      <div class="empty-icon">🚧</div>
      <div class="empty-text">էջը գտնվում է մշակման փուլում</div>
    </div>`;}
