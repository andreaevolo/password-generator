const { default: buttonLoader } = require("./utils/buttonLoader")

const signupBtn = document.getElementById('signup__button')

const getSignupInputsValue = () => {
    const signupInputs = document.querySelectorAll('#signup__form input')
    const data = {}
    signupInputs.forEach(input => {
        data[input.name] = input.value
    })
    console.log(data)
    return data;
}

const signup = () => {
    return fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(getSignupInputsValue())
    })
}

signupBtn.addEventListener('click', async e => {
    e.preventDefault();
    const btnLoader = new buttonLoader(signupBtn);
    try {
        btnLoader.startLoader()
    const res = await signup();
    if(res.ok) {
        const { token } = await res.json()
        document.cookie = `token=${token}`
        window.location = '/index.html'
        btnLoader.stopLoader();
    }
    } catch (error) {
        console.log(error)
        btnLoader.stopLoader();
    }
})