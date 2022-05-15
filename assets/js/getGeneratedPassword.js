import showAlert from './alert';

const generatePasswordBtn = document.getElementById("generate__password");
const passwordInput = document.getElementById("password");
const radioButtons = document.querySelectorAll('input[type="radio"]');


const getRadioButtonValue = (checkboxes) => {
    let value = null;
    checkboxes.forEach(checkbox => {
        console.log(checkbox.checked)
        if (checkbox.checked) {
            value = checkbox.value;
        }
    })
    return value;
}

const getPassword = () => {
    generatePasswordBtn.addEventListener("click", async (e) => {
        e.preventDefault();

        generatePasswordBtn.setAttribute("aria-busy", "true")
        console.log(generatePasswordBtn.ariaBusy)
        try {
            const res = await fetch(`http://localhost:8000/password?length=${getRadioButtonValue(radioButtons)}`);
            if (!res.ok) {
                throw res.status;
            }
            let jsonRes = await res.json();
            showAlert('Password generation completed.')
            passwordInput.value = jsonRes.password;
            generatePasswordBtn.setAttribute("aria-busy", "false")
        } catch (error) {
            console.error(error);
            generatePasswordBtn.setAttribute("aria-busy", "false")
        }
    })
}

export default getPassword;