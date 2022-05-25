import "./copyPassword";
import getPassword from "./getGeneratedPassword";

const passwordInput = document.getElementById('password');
const checkboxes = document.querySelectorAll('input[type="radio"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        passwordInput.value = ''
    })
})

window.addEventListener('DOMContentLoaded', e => {
    getPassword();
})