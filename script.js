document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hotel = document.getElementById('hotel').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const nationality = document.getElementById('nationality').value;
    const promoCode = document.getElementById('promo-code').value;

    const confirmation = document.getElementById('confirmation-message');
    const error = document.getElementById('error-message');
    confirmation.style.display = 'none';
    error.style.display = 'none';

    confirmation.textContent = `Your booking at ${hotel} has been confirmed from ${checkIn} to ${checkOut}. Nationality: ${nationality}. Promo Code: ${promoCode || 'None'}.`;
    confirmation.style.display = 'block';
    this.reset();
});


