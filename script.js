console.log('Hello World!');
// scripts.js
// scripts.js
document.getElementById('popupButton').addEventListener('click', function() {
    document.getElementById('popupBox').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('popupBox').style.display = 'none';
});

window.addEventListener('click', function(event) {
    var popup = document.getElementById('popupBox');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});

function redirectToPayPal() {
    window.location.href = "https://www.paypal.com/";
}
