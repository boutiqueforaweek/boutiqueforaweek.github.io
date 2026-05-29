// Vanilla replacement for the only two Bootstrap JS components this site used:
// the Offcanvas mobile/tablet nav drawer and the offcanvas submenu toggles.
// It toggles the same Bootstrap CSS classes (`.show` on `.offcanvas` and
// `.dropdown-menu`), so no CSS changes are needed and PurgeCSS keeps those rules
// (they appear in the static markup). At >=xl the navbar is a static horizontal
// bar via pure CSS and top-level links navigate directly — no JS runs there.
(function () {
  "use strict";

  var xl = window.matchMedia("(min-width: 1200px)");

  // --- Offcanvas drawer -----------------------------------------------------
  var toggler = document.querySelector(
    '.navbar-toggler[data-bs-target="#navbarOffcanvas"]'
  );
  var panel = document.getElementById("navbarOffcanvas");

  function isOpen() {
    return panel.classList.contains("show");
  }

  function open() {
    panel.classList.add("show");
    document.body.style.overflow = "hidden";
    toggler.setAttribute("aria-expanded", "true");
    var close = panel.querySelector('[data-bs-dismiss="offcanvas"]');
    if (close) close.focus();
  }

  function close(returnFocus) {
    panel.classList.remove("show");
    document.body.style.overflow = "";
    toggler.setAttribute("aria-expanded", "false");
    if (returnFocus) toggler.focus();
  }

  if (toggler && panel) {
    toggler.setAttribute("aria-expanded", "false");

    toggler.addEventListener("click", function () {
      isOpen() ? close() : open();
    });

    panel.querySelectorAll('[data-bs-dismiss="offcanvas"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        close(true);
      });
    });

    // Click outside the open drawer closes it (no styled backdrop to catch it).
    document.addEventListener("click", function (e) {
      if (!isOpen()) return;
      if (panel.contains(e.target) || toggler.contains(e.target)) return;
      close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) close(true);
    });

    // Resizing up to the expanded (xl) layout clears any leftover drawer state.
    xl.addEventListener("change", function (e) {
      if (e.matches) close();
    });
  }

  // --- Offcanvas submenu toggles (the mobile chevron buttons) ---------------
  // Only the `.split-toggle` chevrons open submenus. The desktop
  // `.nav-link.dropdown-toggle` links keep their now-inert data-bs-toggle
  // attribute and simply navigate to the section page.
  document.querySelectorAll(".navbar-nav .split-toggle").forEach(function (btn) {
    var item = btn.closest(".nav-item");
    var menu = item && item.querySelector(".dropdown-menu");
    if (!menu) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var willOpen = !menu.classList.contains("show");

      // Accordion behavior: close any other open submenu first (matches the
      // single-open-at-a-time behavior of the old Bootstrap dropdowns).
      document
        .querySelectorAll(".navbar-nav .dropdown-menu.show")
        .forEach(function (other) {
          if (other === menu) return;
          other.classList.remove("show");
          var t = other.closest(".nav-item").querySelector(".split-toggle");
          if (t) t.setAttribute("aria-expanded", "false");
        });

      menu.classList.toggle("show", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });
})();
