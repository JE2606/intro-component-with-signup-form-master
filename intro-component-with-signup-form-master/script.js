// inputs
const form = document.querySelector('.form');
const firstNameInput = document.querySelector('.firstName__input');
const lastNameInput = document.querySelector('.lastName__input');
const emailInput = document.querySelector('.email__input');
const passwordInput = document.querySelector('.password__input');

// error messages
const firstNameError = document.querySelector('.firstName__error');
const lastNameError = document.querySelector('.lastName__error');
const emailError = document.querySelector('.email__error');
const passwordError = document.querySelector('.password__error');


// form actions

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = [
        { input: firstNameInput, error: firstNameError, message: 'First name cannot be empty' },
        { input: lastNameInput, error: lastNameError, message: 'Last name cannot be empty' },
        { input: emailInput, error: emailError, message: 'Looks like this is not an email' },
        { input: passwordInput, error: passwordError, message: 'Password cannot be empty' }
    ];

    let formIsValid = true;

    fields.forEach(({ input, error, message }) => {
        if (!input.value.trim()) {
            input.classList.add('error');
            error.innerHTML = message;
            formIsValid = false;
        } else {
            input.classList.remove('error');
            error.innerHTML = '';
        }
    });

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailInput.classList.add('error');
        emailError.innerHTML = 'Email cannot be empty';
        formIsValid = false;
    } else if (!validEmail(emailValue)) {
        emailInput.classList.add('error');
        emailInput.placeholder = 'email@example.com';
        emailError.innerHTML = 'Looks like this is not an email';
        formIsValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.innerHTML = '';
    }

    if (formIsValid) {
        form.submit();
    }
});



function validEmail(email) {

    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);

}
