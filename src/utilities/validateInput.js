function validateInput(value, rules) {
    let isValid = false;
    const { minLength } = rules;
    if(value.length > minLength) {
        isValid = true
    }
    console.log(isValid)
    return isValid
}

export default validateInput;