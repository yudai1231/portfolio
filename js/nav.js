window.addEventListener("scroll", function () {
    var nav = document.querySelector(".site_nav");
    nav.classList.toggle("scroll-nav", window.scrollY > 0);
});