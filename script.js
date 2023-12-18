document.addEventListener('DOMContentLoaded', function () {
    // Get form element
    const bookingForm = document.getElementById('bookingForm');

    // Event listener for form submission
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validate form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const guestsInput = document.getElementById('guests');

        if (validateInput(nameInput) && validateInput(emailInput) && validateInput(guestsInput)) {
            // Form is valid, proceed with booking (you can add your logic here)
            alert('Booking successful!');
            bookingForm.reset(); // Reset the form
        } else {
            // Form is not valid, show an error message (you can customize this part)
            alert('Please fill in all fields with valid information.');
        }
    });

    // Function to validate form inputs
    function validateInput(input) {
        if (input.value.trim() === '') {
            // If the input is empty, show an error
            input.classList.add('error');
            return false;
        } else {
            // If the input is not empty, remove the error class
            input.classList.remove('error');
            return true;
        }
    }
});
