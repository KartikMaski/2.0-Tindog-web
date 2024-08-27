function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const subject = document.forms["contactForm"]["subject"].value;
    const message = document.forms["contactForm"]["message"].value;

    const wordCount = message.trim().split(" ").length;
    
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

function updateWordCount() {
    const message = document.forms["contactForm"]["message"].value;
    const wordCount = message.trim().split(" ").length;

    document.getElementById("wordCount").textContent = `Word count: ${wordCount}/250`;

    if (wordCount > 250) {
        document.getElementById("wordCount").style.color = "red";
    } else {
        document.getElementById("wordCount").style.color = "black";
    }
}

// Attach event listener to the message textarea
document.addEventListener("DOMContentLoaded", function() {
    document.forms["contactForm"]["message"].addEventListener("input", updateWordCount);
});
