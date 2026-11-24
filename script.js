
// Mobile Navigation Menu

let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

// Close menu after clicking a link

let links = document.querySelectorAll(".navbar a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

// Contact Form

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = encodeURIComponent(
        "Message from " + name
    );

    let body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    let myEmail = "your-email@example.com";

    document.getElementById("formMessage").textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

});
