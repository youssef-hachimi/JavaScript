const usernameField = document.getElementById('username');
const emailField = document.getElementById('emailAddress');
const ageField = document.getElementById('userAge');
const submitButton = document.getElementById('submitButton');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailErrorMessage');
const ageError = document.getElementById('ageErrorMessage');

function checkForm() {
    let formIsValid = true;

    // Username validation
    if (usernameField.value.length < 3 || usernameField.value.length > 20) {
        usernameError.textContent = "The username must be between 3 and 20 characters long.";
        usernameField.classList.add('error');
        formIsValid = false;
    } else {
        usernameError.textContent = "";
        usernameField.classList.remove('error');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailField.classList.add('error');
        formIsValid = false;
    } else {
        emailError.textContent = "";
        emailField.classList.remove('error');
    }

    // Age validation
    const userAge = parseInt(ageField.value, 10);
    if (isNaN(userAge) || userAge < 18 || userAge > 100) {
        ageError.textContent = "Age must be between 18 and 100.";
        ageField.classList.add('error');
        formIsValid = false;
    } else {
        ageError.textContent = "";
        ageField.classList.remove('error');
    }

    return formIsValid;
}

submitButton.addEventListener('click', () => {
    if (checkForm()) {
        alert("Form successfully validated!");
    } else {
        alert("Please fix the errors in the form.");
    }
});
