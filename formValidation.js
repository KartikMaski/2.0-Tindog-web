function loadjQueryAndSetupForm() {
    if (window.jQuery) {
        formValidators();
        setupAdditionalJQueryOperations();
    } else {
        const script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
        script.integrity = "sha384-oP6Yo9J8TIDGvLU4X9XxlEACrd6U3B9S8Vw4Ve1w2XJ8c3Vj8p5cfjpZqekPpM6x9";
        script.crossOrigin = "anonymous";
        script.onload = function() {
            formValidators();
            setupAdditionalJQueryOperations();
        };
        document.head.appendChild(script);
    }
}

function changeBackgroundColor() {
    const containerDiv = document.getElementById('contactme');
    const currentColor = containerDiv.style.backgroundColor;

    if (currentColor === 'rgb(240, 248, 255)' || currentColor === '') {
        containerDiv.style.backgroundColor = "#ffebcd";
    } else {
        containerDiv.style.backgroundColor = "#f0f8ff";
    }
}

function changeImage() {
    const containerDiv = document.getElementById('contactme');
    const currentImage = containerDiv.style.backgroundImage;

    if (currentImage.includes("Everest_North_Face")) {
        containerDiv.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mt._Everest_as_seen_from_Drukair2_PLW_edit.jpg/800px-Mt._Everest_as_seen_from_Drukair2_PLW_edit.jpg')";
        $("#setBackgroundImageButton").text("Revert Image");
    } else {
        containerDiv.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/660px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg')";
        $("#setBackgroundImageButton").text("Change Image");
    }
}


function formValidators() {
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

function setupAdditionalJQueryOperations() {
    $(document).ready(function() {
        $("#changeBackgroundButton").click(function() {
            $(this).text(function(_, text) {
                return text === "Change Background Color" ? "Revert Background Color" : "Change Background Color";
            });
            changeBackgroundColor();
        });

        $("#setBackgroundImageButton").click(function() {
            changeImage();
        });

        $("#submitButton").click(function() {
            let name = $("input[name='name']").val();
            let email = $("input[name='email']").val();
            let subject = $("input[name='subject']").val();
            let message = $("textarea[name='message']").val();
            alert(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
        });

        $("form[name='contactForm']").attr("data-submitted", "true");
    });
}

loadjQueryAndSetupForm();
