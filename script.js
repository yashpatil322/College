document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            navbar.style.padding = "5px 40px"; // Shrink navbar slightly on scroll
        } else {
            navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
            navbar.style.padding = "10px 40px";
        }
    });
});