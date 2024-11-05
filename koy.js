window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar_top");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarNav");
    const banner = document.querySelector(".banner");

    navbarCollapse.addEventListener("show.bs.collapse", function () {
        banner.classList.add("banner-shifted");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
        banner.classList.remove("banner-shifted");
    });
});


