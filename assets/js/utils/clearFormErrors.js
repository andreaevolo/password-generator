const clearFormErrors = (form) => {
    
   form.querySelectorAll('p').forEach((error) => {
       error.remove()
   })
}

export default clearFormErrors