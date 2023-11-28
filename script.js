// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select all the cards
    const cards = document.querySelectorAll('.card');

    // Function to add animation
    function animateCard() {
        // 'this' refers to the card that was clicked
        this.classList.add('animate');

        // Remove the animation class after the animation completes (500ms)
        setTimeout(() => {
            this.classList.remove('animate');
        }, 500);
    }

    // Add click event to each card
    cards.forEach(card => {
        card.addEventListener('click', animateCard);
    });
});
function navigateWithTransition() {
    // Add the fade-out class to the body or a container element
    document.body.classList.add('fade-out');

    // Set a timeout to navigate to the new page after the fade-out transition
    setTimeout(function() {
        window.location.href = 'index2.html'; // Replace with your URL
    }, 500); // This should match the duration of the fade-out effect
}
document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let progressBar = entry.target;
                let value = progressBar.getAttribute('data-skill-value');
                progressBar.style.width = value;
            }
        });
    }, { threshold: [0.5] });

    let elements = document.querySelectorAll('.progress-bar');
    elements.forEach(el => observer.observe(el));
});


