import getCookie from './utils/cookies';
import showAlert from './alert';
import buttonLoader from './utils/buttonLoader';

const generatePasswordBtn = document.getElementById("generate__password");
const passwordInput = document.getElementById("password");
const radioButtons = document.querySelectorAll('input[type="radio"]');


const getRadioButtonValue = (checkboxes) => {
    let value = null;
    checkboxes.forEach(checkbox => {
        
        if (checkbox.checked) {
            value = checkbox.value;
        }
    })
    return value;
}

const getPassword = () => {
    generatePasswordBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const btnLoader = new buttonLoader(generatePasswordBtn)
        btnLoader.startLoader();

        try {
            const res = await fetch(`http://localhost:3000/password?length=${getRadioButtonValue(radioButtons)}`, {
                headers: {
                    'Authorization': `Bearer ${getCookie('token')}`
                }
            });
            if (!res.ok) {
                throw res.status;
            }
            let jsonRes = await res.json();
            showAlert('Password generation completed.')
            passwordInput.value = jsonRes.password;
            btnLoader.stopLoader()
        } catch (error) {
            window.location = '/login.html'
            console.error(error);
            btnLoader.startLoader()
        }
    })
}

export default getPassword;