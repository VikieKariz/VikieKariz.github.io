
document.getElementById('whatsappShareButton').onclick = function() {
    var websiteURL = encodeURIComponent(window.location.href);
    var message = encodeURIComponent('beib checkout this website i designed for you: ');
    var whatsappURL = 'https://api.whatsapp.com/send?text=' + message + websiteURL;
    window.open(whatsappURL, '_blank');
}

