import getFormInputValues from "./utils/getFormInputsValues";
import displayFormErrors from "./utils/displayFormErrors";
import clearFormErrors from "./utils/clearFormErrors";

const loginForm = document.getElementById('login__form')
const loginBtn = document.getElementById('login__button');


loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(getFormInputValues(loginForm))
        })
        if (res.ok) {
            const {token} = await res.json()
            console.log(token)
            document.cookie = `token=${token}`
            window.location = '/index.html'
            if(loginForm.querySelector('p')) {
                clearFormErrors(loginForm)
            }
            return;
        }
        const {errors} = await res.json()
        displayFormErrors(loginForm, errors)
    } catch (error) {
        console.error(error);
    }
})