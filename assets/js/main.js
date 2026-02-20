document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     CONTACT FORM (без сервера)
  ============================== */

  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (form && success) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.reset();
      success.style.display = "block";

      setTimeout(() => {
        success.style.display = "none";
      }, 5000);
    });
  }


  /* ==============================
     BURGER MENU
  ============================== */

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      burger.setAttribute("aria-expanded", isOpen);
      burger.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.textContent = "☰";
      });
    });
  }


  /* ==============================
     FAQ ACCORDION
  ============================== */

  const faqButtons = document.querySelectorAll(".faq__q");

  if (faqButtons.length) {
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {

        const item = btn.closest(".faq__item");
        if (!item) return;

        const isOpen = item.classList.contains("open");

        // Закрыть все
        document.querySelectorAll(".faq__item").forEach((el) => {
          el.classList.remove("open");
          const icon = el.querySelector(".faq__icon");
          if (icon) icon.textContent = "+";
        });

        // Открыть текущий
        if (!isOpen) {
          item.classList.add("open");
          const icon = item.querySelector(".faq__icon");
          if (icon) icon.textContent = "–";
        }
      });
    });
  }

});