function loadjQueryAndSetupForm() {
    if (window.jQuery) {
        setupFormValidationAndHandlers();
    } else {
        const script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
        script.integrity = "sha384-oP6Yo9J8TIDGvLU4X9XxlEACrd6U3B9S8Vw4Ve1w2XJ8c3Vj8p5cfjpZqekPpM6x9";
        script.crossOrigin = "anonymous";
        script.onload = setupFormValidationAndHandlers;
        document.head.appendChild(script);
    }
}

function setupFormValidationAndHandlers() {
    function validateForm() {
        const form = document.forms["contactForm"];
        const name = form["name"].value.trim();
        const email = form["email"].value.trim();
        const subject = form["subject"].value.trim();
        const message = form["message"].value.trim();
        const wordCount = message.split(/\s+/).length;

        if (!name || !email || !subject || !message) {
            alert("All fields must be filled out");
            return false;
        }
        if (wordCount > 250) {
            alert("Message cannot exceed 250 words");
            return false;
        }

        return true;
    }

    function updateWordCount() {
        const message = $("textarea[name='message']").val().trim();
        const wordCount = message.split(/\s+/).length;
        $("#wordCount").text(`Word count: ${wordCount}/250`).css("color", wordCount > 250 ? "red" : "black");
    }

    $(document).ready(function() {
        $("textarea[name='message']").on("input", updateWordCount);
        $("form[name='contactForm']").on("submit", function(event) {
            if (!validateForm()) event.preventDefault();
        });
    });
}

// Call the function to load jQuery and set up form handlers
loadjQueryAndSetupForm();
