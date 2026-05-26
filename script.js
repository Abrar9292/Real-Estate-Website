document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PROPERTY FILTER
    ========================== */

    const filterButtons = document.querySelectorAll(".property-filter-btn");
    const propertyItems = document.querySelectorAll(".property-item");

    filterButtons.forEach((button) => {

        button.addEventListener("click", function () {

            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            propertyItems.forEach((item) => {

                const category = item.getAttribute("data-category");

                if (filterValue === "all" || filterValue === category) {

                    item.style.display = "block";
                    item.style.animation = "fadeIn 0.6s ease";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

    /* =========================
       PROPERTY SEARCH
    ========================== */

    const propertySearch = document.getElementById("propertySearch");

    if (propertySearch) {

        propertySearch.addEventListener("keyup", function () {

            const value = propertySearch.value.toLowerCase();

            propertyItems.forEach((item) => {

                const title = item.querySelector("h4")
                    .innerText
                    .toLowerCase();

                if (title.includes(value)) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    }

    /* =========================
       WISHLIST
    ========================== */

    document.querySelectorAll(".wishlist-btn")
        .forEach((btn) => {

            btn.addEventListener("click", function () {

                btn.classList.toggle("active");

                if (btn.classList.contains("active")) {

                    btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;

                    showToast("Property Added To Wishlist");

                } else {

                    btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;

                    showToast("Property Removed");

                }

            });

        });

    /* =========================
       CONTACT FORM
    ========================== */

    const contactForm = document.getElementById("estateContactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            showToast("Luxury Property Visit Booked Successfully!");

            contactForm.reset();

        });

    }

    /* =========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {

        counter.innerText = "0";

        const target = Number(counter.getAttribute("data-target"));

        const increment = Math.ceil(target / 80);

        function updateCounter() {

            const current = Number(counter.innerText);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 25);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

    /* =========================
       NAVBAR EFFECT
    ========================== */

    window.addEventListener("scroll", function () {

        const navbar = document.querySelector(".estate-navbar");

        if (navbar) {

            if (window.scrollY > 50) {

                navbar.style.padding = "14px 0";
                navbar.style.background = "rgba(15,23,42,0.98)";

            } else {

                navbar.style.padding = "18px 0";
                navbar.style.background = "rgba(15,23,42,0.92)";

            }

        }

    });

    /* =========================
       PROPERTY CARD EFFECT
    ========================== */

    const propertyCards = document.querySelectorAll(".property-card");

    propertyCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px) scale(1)";

        });

    });

    /* =========================
       SEARCH BUTTON
    ========================== */

    const searchBtn = document.getElementById("searchPropertyBtn");

    if (searchBtn) {

        searchBtn.addEventListener("click", function () {

            showToast("Premium Property Search Activated!");

        });

    }

    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".property-card, .stat-card, .agent-card, .testimonial-card, .location-card"
    );

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                element.classList.add("active-reveal");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* =========================
       DARK MODE
    ========================== */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        if (localStorage.getItem("estateTheme") === "dark") {

            document.body.classList.add("dark-mode");

            themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

        }

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("estateTheme", "dark");

                themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

                showToast("Dark Mode Enabled");

            } else {

                localStorage.setItem("estateTheme", "light");

                themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;

                showToast("Light Mode Enabled");

            }

        });

    }

    /* =========================
       BACK TO TOP
    ========================== */

    const backTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (backTop) {

            if (window.scrollY > 300) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        }

    });

    if (backTop) {

        backTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* =========================
       TOAST
    ========================== */

    function showToast(message) {

        const toastBox = document.getElementById("toastBox");

        if (!toastBox) return;

        const toast = document.createElement("div");

        toast.className = "custom-toast";

        toast.innerText = message;

        toastBox.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 2500);

    }

    /* =========================
       PRELOADER
    ========================== */

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        if (preloader) {

            preloader.style.display = "none";

        }

    }, 700);

});

/* =========================
   ANIMATION STYLE
========================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn {

    from {
        opacity:0;
        transform:translateY(25px);
    }

    to {
        opacity:1;
        transform:translateY(0);
    }

}

.active-reveal{

    animation:fadeIn 0.8s ease forwards;

}

`;

document.head.appendChild(style);