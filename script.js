// Function to make header editable
function makeEditable(elementId) {
    const element = document.getElementById(elementId);
    element.contentEditable = true;
    element.focus();
    document.getElementById("saveBtn").style.display = "inline-block";
}

// Function to save changes
function saveChanges(elementId) {
    const element = document.getElementById(elementId);
    element.contentEditable = false;
    localStorage.setItem(elementId, element.innerHTML);
    document.getElementById("saveBtn").style.display = "none";
}

// Load stored content from localStorage
function loadContent(elementId) {
    const storedContent = localStorage.getItem(elementId);
    if (storedContent) {
        document.getElementById(elementId).innerHTML = storedContent;
    }
}

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
  if (document.referrer.includes("paypal.com")) {
    whatsappBtn.style.display = "inline-block";
  }
});

// Add event listener to WhatsApp button to share the link
document.getElementById("whatsappBtn").addEventListener("click", function() {
  var url = window.location.href;
  window.location.href = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Check out this site: " + url);
});

// Make header editable on click
document.getElementById("header").onclick = function() {
    makeEditable("header");
};

// Save changes on save button click
document.getElementById("saveBtn").onclick = function() {
    saveChanges("header");
};

// Load content on page load
window.onload = function() {
    loadContent("header");
};
// scripts.js
// scripts.js
