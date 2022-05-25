
const getFormInputValues = (form) => {
    const inputs = form.querySelectorAll('input')
    const values = {}
    inputs.forEach(input => {
        values[input.id] = input.value
    })
    return values
}

export default getFormInputValues
