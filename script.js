document.querySelectorAll('.button-group button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        document.querySelectorAll('.button-group button').forEach(function(btn) {
            btn.classList.remove('selected');
        });

        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

document.querySelector('.get-views-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert("Your Likes / Views are being sent now!");
    window.location.reload();
});
