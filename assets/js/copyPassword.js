import showAlert from './alert';

const copyButton = document.getElementById("copy");
const passwordInput = document.getElementById("password");

copyButton.addEventListener("click", async () => {
    const text = passwordInput.value;
    try {
        await navigator.clipboard.writeText(text);
        showAlert('Password copied to clipboard');
    } catch (err) {
        console.log('Failed to copy: ', copy)
    }
})