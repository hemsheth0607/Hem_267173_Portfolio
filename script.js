// Dark Mode Feature
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }

});


// Mobile Menu Feature
let menuBtn = document.getElementById("menuBtn");
let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("show");

});


// Contact Form Validation
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {

        result.innerText = "Please fill all the fields.";
        result.style.color = "red";

    } else {

        result.innerText = "Thank you! Your message is submitted.";
        result.style.color = "green";

        contactForm.reset();

    }

});
