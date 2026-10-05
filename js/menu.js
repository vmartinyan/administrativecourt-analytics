// Builds the sidebar menu from MENU. Returns the id -> label trail map.
function buildMenu(menuEl, items, onSelect) {
  const labels = {};
  let currentHeader = null;

  function build(list, path, depth) {
    const ul = document.createElement("ul");
    list.forEach(item => {
      const li = document.createElement("li");
      if (item.header) {
        if (depth === 1) currentHeader = item.header;
        li.className = "menu-header";
        li.textContent = item.header;
        ul.appendChild(li);
        return;
      }
      const a = document.createElement("a");
      a.dataset.id = item.id;
      const trail = [...path, item.label];
      labels[item.id] = currentHeader ? [currentHeader, ...trail] : trail;
      const label = document.createElement("span");
      label.className = "label";
      label.textContent = item.label;
      a.appendChild(label);
      if (item.children) {
        const caret = document.createElement("span");
        caret.className = "caret";
        caret.textContent = "▶";
        a.appendChild(caret);
      }
      li.appendChild(a);
      if (item.children && depth < 3) {
        const sub = build(item.children, trail, depth + 1);
        sub.className = "submenu";
        li.appendChild(sub);
        a.addEventListener("click", () => li.classList.toggle("open"));
      } else {
        a.addEventListener("click", () => onSelect(item.id));
      }
      ul.appendChild(li);
    });
    return ul;
  }

  menuEl.appendChild(build(items, [], 1));
  return labels;
}

// Marks an item active and expands all of its ancestors.
function activateMenuItem(menuEl, id) {
  menuEl.querySelectorAll("a.active").forEach(a => a.classList.remove("active"));
  const a = menuEl.querySelector(`a[data-id="${id}"]`);
  a.classList.add("active");
  for (let li = a.parentElement; li && li !== menuEl; li = li.parentElement)
    if (li.tagName === "LI") li.classList.add("open");
}
