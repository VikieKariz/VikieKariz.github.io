document.addEventListener('DOMContentLoaded', function() {
    checkReferral();
});

function checkReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const referral = urlParams.get('referral');

    if (referral === 'paypal') {
        document.getElementById('share-button').style.display = 'block';
    }
}

function shareLink() {
    const link = "https://www.example.com";
    navigator.clipboard.writeText(link).then(function() {
        alert('Link copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
￼Enter
