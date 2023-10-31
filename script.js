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


// JavaScript for tab switching
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const contentId = tab.getAttribute("data-content");
            tabContents.forEach(content => {
                if (content.id === contentId) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });

    // Activate the initial tab
    tabs[0].click();
});


document.addEventListener("DOMContentLoaded", function () {
    const generalMenu = document.getElementById("general-menu");
    const cseMenu = document.getElementById("cse-menu");
    const bscCseLink = document.getElementById("bsc-cse-link");

    // Add a click event listener to the "B.Sc. in CSE" link
    bscCseLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        generalMenu.style.display = "none"; // Hide the general menu
        cseMenu.style.display = "block"; // Show the CSE menu
     });
	
	
	const sweMenu = document.getElementById("swe-menu");
    const bscSweLink = document.getElementById("bsc-swe-link");

    // Add a click event listener to the "B.Sc. in CSE" link
    bscSweLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        generalMenu.style.display = "none"; // Hide the general menu
        cseMenu.style.display = "none"; // Hide the general menu
        sweMenu.style.display = "block"; // Show the CSE menu
     });
	
	
});




