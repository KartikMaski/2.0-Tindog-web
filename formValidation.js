// Function to load jQuery dynamically
function loadjQuery(callback) {
    if (window.jQuery) {
        // jQuery is already loaded
        if (callback) callback();
    } else {
        // Create a script element to load jQuery
        var script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
        script.integrity = "sha384-oP6Yo9J8TIDGvLU4X9XxlEACrd6U3B9S8Vw4Ve1w2XJ8c3Vj8p5cfjpZqekPpM6x9";
        script.crossOrigin = "anonymous";
        script.onload = function() {
            if (callback) callback();
        };
        document.head.appendChild(script);
    }
}

// Load jQuery and execute code
loadjQuery(function() {
    // Validate form function
    function validateForm() {
        const name = document.forms["contactForm"]["name"].value;
        const email = document.forms["contactForm"]["email"].value;
        const subject = document.forms["contactForm"]["subject"].value;
        const message = document.forms["contactForm"]["message"].value;

        const wordCount = message.trim().split(/\s+/).length; // Updated to handle multiple spaces
        
        if (name === "") {
            alert("Name must be filled out");
            return false;
        }
        if (email === "") {
            alert("Email must be filled out");
            return false;
        }
        if (subject === "") {
            alert("Subject must be filled out");
            return false;
        }
        if (message === "") {
            alert("Message must be filled out");
            return false;
        }
        if (wordCount > 250) {
            alert("Message cannot exceed 250 words");
            return false;
        }

        return true;
    }
    
    // Update word count display function
    function updateWordCount() {
        const message = $("textarea[name='message']").val();
        const wordCount = message.trim().split(/\s+/).length; // Updated to handle multiple spaces

        $("#wordCount").text(`Word count: ${wordCount}/250`);

        if (wordCount > 250) {
            $("#wordCount").css("color", "red");
        } else {
            $("#wordCount").css("color", "black");
        }
    }

    // Attach event listener to the message textarea
    $(document).ready(function() {
        $("textarea[name='message']").on("input", updateWordCount);

        // Handle form submission
        $("form[name='contactForm']").on("submit", function(event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    });
});
