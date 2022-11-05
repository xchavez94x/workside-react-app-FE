function validateInput(value, rules) {
    let isValid = false;
    const { minLength, isEmail } = rules;
    if(value.length >= minLength) {
        isValid = true
    }
    if(value.length > minLength && isEmail) {
        isValid = validateEmail(value)
    }
    return isValid
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
}

export default validateInput;