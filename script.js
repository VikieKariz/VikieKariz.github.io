// Function to make elements editable
function makeEditable(element) {
    element.contentEditable = true;
    element.focus();
    document.getElementById("saveBtn").style.display = "inline-block";
}

// Function to save changes
function saveChanges() {
    var editableElements = document.getElementsByClassName("editable");
    for (var i = 0; i < editableElements.length; i++) {
        var element = editableElements[i];
        localStorage.setItem('editable-' + i, element.innerHTML);
        element.contentEditable = false;
    }
    document.getElementById("saveBtn").style.display = "none";
}

// Load stored content from localStorage
function loadContent() {
    var editableElements = document.getElementsByClassName("editable");
    for (var i = 0; i < editableElements.length; i++) {
        var storedContent = localStorage.getItem('editable-' + i);
        if (storedContent) {
            editableElements[i].innerHTML = storedContent;
        }
    }
}

// Make elements editable on click
document.addEventListener("DOMContentLoaded", function() {
    var editableElements = document.getElementsByClassName("editable");
    for (var i = 0; i < editableElements.length; i++) {
        editableElements[i].onclick = function() {
            makeEditable(this);
        };
    }
});

// Save changes on save button click
document.getElementById("saveBtn").onclick = function() {
    saveChanges();
};

// Load content on page load
window.onload = function() {
    loadContent();
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Check the referrer and display WhatsApp button if redirected from PayPal
document.addEventListener("DOMContentLoaded", function() {
  var whatsappBtn = document.getElementById("whatsappBtn");
  var referrer = document.referrer;
  if (referrer && referrer.includes("paypal.com")) {
    whatsappBtn.style.display = "inline-block";
  } else {
    whatsappBtn.style.display = "none"; // Ensure it is hidden if not from PayPal
  }
});

// Add event listener to WhatsApp button to share the link
document.getElementById("whatsappBtn").addEventListener("click", function() {
  var url = window.location.href;
  window.location.href = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Check out this site: " + url);
}
