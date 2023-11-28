let progressBar = document.getElementById('progress-bar');
let phoneContainer = document.getElementById('phone-container');
let phoneDescription = document.getElementById('phone-description');
let selectionCount = 0;
let totalPrice = 0; // Initialize total price

// Price information for each phone
let phonePrices = {
    'images/phone2': 10, 'images/phone3': 30, 'images/phone4': 40,
    'images/basic': 20, 'images/intermediate': 30, 'images/advanced': 40,
    'images/backend': 30, 'images/backend2': 0,
    'images/feature1': 15, 'images/feature1': 10, 'images/feature1': 0,
};

// Initial call to populate the phone images and description
replacePhones();
updateDescription();

function phoneSelected() {
    if (selectionCount < 4) {
        let selectedPhone = this.alt; // 'this' refers to the clicked image
        totalPrice += phonePrices[selectedPhone] || 0; // Add price to total

        phoneContainer.classList.add('fade-out');

        setTimeout(() => {
            phoneContainer.classList.remove('fade-out');
            progressBar.value = ++selectionCount;
            replacePhones();
            updateDescription();
        }, 1000);
    } else {
        // When the selection is complete, show the total price
        phoneDescription.textContent = "Thank you, your total is around " + totalPrice + " MAD";
    }
}

function replacePhones() {
    phoneContainer.innerHTML = '';
    let images = [];

    switch (selectionCount) {
        case 0:
            images = ['images/phone2.png', 'images/phone3.png', 'images/phone4.png']; // Images for screen coverage question
            break;
        case 1:
            images = ['images/basic.png', 'images/intermediate.png', 'images/advanced.png']; // Images for UI design question
            break;
        case 2:
            images = ['images/backend.png', 'images/backend2.png']; // Images for backend support question
            break;
        case 3:
            images = ['images/feature1.png', 'images/feature2.png', 'images/feature3.png']; // Images for advanced features question
            break;
        default:
            images = []; // Default or no images
    }

    images.forEach(src => {
        let img = document.createElement('img');
        img.className = 'phone-img';
        img.src = src;
        img.alt = src.split('.')[0]; // Make sure this matches the keys in phonePrices
        img.onclick = phoneSelected;
        phoneContainer.appendChild(img);
    });
}

function updateDescription() {
    let descriptions = [
        "How extensive do you envision the screen coverage for your app?",
        "What are your preferences for the User Interface (UI) design?",
        "Does your app require backend support?",
        "Which advanced features are you looking to integrate?",
    ];

    let contactButton = document.getElementById('contact-button');

    if (selectionCount < 4) {
        phoneDescription.textContent = descriptions[selectionCount];
        contactButton.style.display = 'none'; // Hide the button
    } else {
        phoneDescription.textContent = "Thank you for customizing your app! Your total cost is approximately "+ totalPrice + "$. Feel free to contact the developer for further details and to bring your app to life!";
        contactButton.style.display = 'block'; // Show the button
    }
}
function contactDeveloper() {
    var phoneNumber = '0655141085'; // Replace with your phone number
    var message = encodeURIComponent("Hello, I'm interested in your app development services."); // Your default message
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank'); // Open in a new tab
}



replacePhones();
updateDescription();
