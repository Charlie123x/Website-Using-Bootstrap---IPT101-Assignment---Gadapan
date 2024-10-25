(function() {
    emailjs.init("wJX7PDg_ocIW4EP6s");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_ba1dhoh', 'template_j6i4ed5', this)
        .then(function() {
            alert('Message Sent Successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});