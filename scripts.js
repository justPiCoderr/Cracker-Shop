function addToCart(productName) {
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    message.textContent = `${productName} has been added to your cart!`;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Handle order form submission
function handleOrderSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    message.textContent = 'Order placed successfully!';
    popup.style.display = 'block';

    // Reset the form after displaying the popup
    document.getElementById('orderForm').reset();
;
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    message.textContent = 'Your message has been sent!';
    popup.style.display = 'block';

    // Reset the form after displaying the popup
    document.getElementById('contactForm').reset();

    
}

// Close the popup if the user clicks anywhere outside of it
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
