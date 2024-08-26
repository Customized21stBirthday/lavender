// Function to show the message after a delay
function showMessage() {
    var message = document.getElementById('surpriseMessage');
    message.style.display = 'block';
}

// Set a timeout to show the message after 3 seconds (3000 milliseconds)
setTimeout(function() {
    console.log('Delay complete');
    showMessage();
}, 3000);
