// ? returning a specific icon for checking the status in the job card
export const checkStatus = (status, firstIcon, seconsIcon) => {
    /**
     * @param status > string
     * @param firstIcon > link to the icon 
     * @param secondIcon > link to the icon 
     * @returns a single icon
     */
    return status === "verified" ? firstIcon : seconsIcon
}

export const inputChangedHandler = (event, index, setStatecb, inputs) => {
    let inputElements = [...inputs];
    let singleinputElement = inputElements[index]
    singleinputElement.value = event.target.value;
    inputElements[index] = singleinputElement;
    setStatecb(inputElements)
}

export const submitHandler = (event, dispatch, func, inputs) => {
    event.preventDefault();
    const data = {
        contact: {}
    }
    for( let key in inputs ) {
        data.contact[inputs[key].config.name] = inputs[key].value
    }
    dispatch(func(data))
}

export const setIsTouched = (inputs, index, setStateCb) => {
    let copiedInputs = [...inputs];
    let singleInput = copiedInputs[index];
    singleInput.isTouched = true
    copiedInputs[index] = singleInput;
    setStateCb(copiedInputs)
}