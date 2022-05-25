const loginBtn = document.getElementById('login__button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        })
        if (res.ok) {
            const {token} = await res.json()
            console.log(token)
            document.cookie = `token=${token}`
            window.location = '/index.html'
        }
    } catch (error) {
        console.error(error);
    }
})