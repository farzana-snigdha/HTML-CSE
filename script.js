document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdowns
    const dropdowns = document.querySelectorAll(".dropdown");

    // Add event listeners to each dropdown
    dropdowns.forEach(function (dropdown) {
        const link = dropdown.querySelector("a");
        const submenu = dropdown.querySelector(".dropdown-menu");

        link.addEventListener("click", function (e) {
            e.preventDefault();
            submenu.classList.toggle("show");
        });

        link.addEventListener("blur", function () {
            submenu.classList.remove("show");
        });
    });
});
