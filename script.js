function showDetails() {
    // Get form values
    const guestName = document.getElementById('guestName').value;
    const email = document.getElementById('email').value;
    const arrivalDate = document.getElementById('arrivalDate').value;
    const departureDate = document.getElementById('departureDate').value;
    const roomType = document.getElementById('roomType').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Create details message
    const detailsMessage = `
        <strong>Guest Name:</strong> ${guestName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Arrival Date:</strong> ${arrivalDate}<br>
        <strong>Departure Date:</strong> ${departureDate}<br>
        <strong>Room Type:</strong> ${roomType}<br>
        <strong>Payment Method:</strong> ${paymentMethod}
    `;

    // Display modal with details
    document.getElementById('bookingDetails').innerHTML = detailsMessage;
    document.getElementById('detailsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

function printDetails() {
    window.print();
}