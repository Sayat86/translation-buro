// Простая "отправка" формы без сервера: показываем сообщение об успехе
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // здесь можно позже сделать реальную отправку на сервер/телеграм-бота
    form.reset();
    success.style.display = "block";

    // спрячем сообщение через 6 секунд
    setTimeout(() => {
      success.style.display = "none";
    }, 6000);
  });
});

// Бургер-меню (для мобильных)
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.textContent = isOpen ? "✕" : "☰";
  });

  // закрывать меню при клике по ссылке
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      burger.textContent = "☰";
    });
  });
});


// FAQ аккордеон
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq__q");

  if (!questions.length) return;

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      // закрываем все остальные (чтобы открывался только один)
      questions.forEach((b) => {
        if (b !== btn) {
          b.classList.remove("faq__item-open");
          const icon = b.querySelector(".faq__icon");
          if (icon) icon.textContent = "+";
        }
      });

      // переключаем текущий
      const isOpen = btn.classList.toggle("faq__item-open");
      const icon = btn.querySelector(".faq__icon");
      if (icon) icon.textContent = isOpen ? "–" : "+";
    });
  });
});
