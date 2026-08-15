document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");


            const icon =
                mobileMenuBtn.querySelector("i");


            if (mobileMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            const icon =
                mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



    /* =====================================================
       START TEST BUTTONS
    ===================================================== */

    const testButtons = [

        document.getElementById("startTestBtn"),

        document.getElementById("testimonialBtn"),

        document.getElementById("finalTestBtn")

    ];


    testButtons.forEach(function (button) {

        if (!button) {
            return;
        }


        button.addEventListener("click", function () {

            /*
             * For now we show an alert.
             *
             * Later this can be changed to:
             *
             * window.location.href =
             * "/career-test/";
             */

            alert(
                "Welcome to SkillByte! 🚀\n\n" +
                "Career Discovery Test is coming next."
            );

        });

    });



    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 5px 20px rgba(30,30,70,.06)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });



    /* =====================================================
       PATH CARD CLICK
    ===================================================== */

    const pathCards =
        document.querySelectorAll(".path-card");


    pathCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const career =
                this.querySelector("strong").innerText;


            console.log(
                "Selected career path:",
                career
            );

        });

    });

});
