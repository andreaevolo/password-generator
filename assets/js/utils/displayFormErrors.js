const displayFormErrors = (form, errors) => {
    let returnError = (msg) => `<p class="formError">${msg}</p>`
    
   form.querySelectorAll('input').forEach((input, index) => {
       input.insertAdjacentHTML("afterend", returnError(errors[index].message))
   })
}

export default displayFormErrors