document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       BURGER MENU
    ========================================= */

    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    if (burger && nav) {

        burger.addEventListener("click", () => {

            nav.classList.toggle("open");

            const isOpen = nav.classList.contains("open");

            burger.setAttribute("aria-expanded", isOpen);

            burger.innerHTML = isOpen ? "✕" : "☰";

            document.body.classList.toggle("menu-open");

        });

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                burger.setAttribute("aria-expanded", "false");

                burger.innerHTML = "☰";

                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 30){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });


    /* =========================================
       REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        "section, .card, .service-card-large, .pricing-card"
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if(top < window.innerHeight - 80){

                element.classList.add("visible");

            }

        });

    };

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);


    /* =========================================
       CONTACT FORM
    ========================================= */

    const form = document.querySelector(".modern-form");

    if(form){

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const button = form.querySelector("button");

            button.innerHTML = "Отправлено ✓";

            button.style.background = "#16a34a";

            form.reset();

            setTimeout(() => {

                button.innerHTML = "Отправить заявку";

                button.style.background = "";

            }, 3000);

        });

    }


    /* =========================================
       FLOATING BUTTONS ANIMATION
    ========================================= */

    const floatingButtons = document.querySelectorAll(".floating");

    floatingButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform =
                "scale(1.12) translateY(-5px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "scale(1) translateY(0px)";

        });

    });


    /* =========================================
       SMOOTH SECTION PARALLAX
    ========================================= */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if(hero){

            const offset = window.scrollY * 0.3;

            hero.style.backgroundPositionY =
                `${offset}px`;

        }

    });

});