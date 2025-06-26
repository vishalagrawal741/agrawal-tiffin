function toggleMenu() {
    const menu = document.getElementById("weeklyMenu");
    const btn = document.querySelector(".toggle-menu-btn");

    menu.classList.toggle("open");
    btn.innerText = menu.classList.contains("open") ? "📅 Hide Menu" : "📅 Show Menu";
  }