// Function to check if "Post Link" contains "lyntr"
function validateLink() {
    const postLinkInput = document.querySelector('input[placeholder*="Post Link"]');
    const getViewsButton = document.querySelector('.get-views-btn');
    
    // Check if the "Post Link" contains "lyntr"
    if (postLinkInput.value.includes('lyntr')) {
        getViewsButton.disabled = false;
        getViewsButton.style.opacity = '1'; // Make the button fully visible
        getViewsButton.style.cursor = 'pointer'; // Change cursor to pointer
    } else {
        getViewsButton.disabled = true;
        getViewsButton.style.opacity = '0.5'; // Make the button semi-transparent
        getViewsButton.style.cursor = 'not-allowed'; // Change cursor to not-allowed
    }
}

// Add event listener to "Post Link" input field to validate on every change
document.querySelector('input[placeholder*="Post Link"]').addEventListener('input', validateLink);

// Initial validation on page load
validateLink();

// Existing code for button click behavior
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
    event.preventDefault(); // Prevent the default form submission

    alert("Your Likes / Views are being sent now!");

    // Redirect to the Rickroll after 3 seconds
    setTimeout(function() {
        window.location.href = "https://youtu.be/q-Y0bnx6Ndw?si=OU0AQ1yGC1ENIK8j";
    }, 1000);
});
