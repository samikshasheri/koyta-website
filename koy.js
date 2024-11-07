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
        console.log("Menu opened");
        banner.classList.add("banner-shifted");
    });

    navbarCollapse.addEventListener("hide.bs.collapse", function () {
        console.log("Menu closed");
        banner.classList.remove("banner-shifted");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const aboutElements = document.querySelectorAll(".about-left, .about-right, .service-area");
 
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-animation");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    aboutElements.forEach(element => observer.observe(element));
});
