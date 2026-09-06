// Select the action buttons from the Hero section
const viewWorkBtn = document.getElementById('viewWorkBtn');
const contactBtn = document.getElementById('contactBtn');

// Add a click listener for the "View My Work" button
if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', () => {
        alert('Projects section coming soon!');
    });
}

// Add a click listener for the "Contact Me" button
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        alert('Thanks for reaching out! You can connect with me anytime.');
    });
}
