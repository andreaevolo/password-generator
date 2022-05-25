import ButtonLoader from "./utils/buttonLoader"
import getFormInputValues from "./utils/getFormInputsValues"
import displayFormErrors from "./utils/displayFormErrors"

const signupForm = document.getElementById('singup__form')
const signupBtn = document.getElementById('signup__button')



const signup = () => {
    return fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(getFormInputValues(signupForm))
    })
}

signupBtn.addEventListener('click', async e => {
    e.preventDefault();
    const btnLoader = new ButtonLoader(signupBtn);
    try {
        btnLoader.startLoader()
    const res = await signup();
    if(res.ok) {
        const { token } = await res.json()
        document.cookie = `token=${token}`
        window.location = '/index.html'
        btnLoader.stopLoader();
        if(signupForm.querySelector('p')) {
            clearFormErrors(signupForm)
        }
        return;
    }
    const { errors } = await res.json()
    displayFormErrors(signupForm, errors)
    } catch (error) {
        console.log(error)
        btnLoader.stopLoader();
    }
})