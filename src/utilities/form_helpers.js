import {login, register} from "../store/actions/users"

export const inputChangedHandler = (event, index, setStatecb, inputs) => {
    let inputElements = [...inputs];
    let singleinputElement = inputElements[index]
    singleinputElement.value = event.target.value;
    inputElements[index] = singleinputElement;
    setStatecb(inputElements)
}

export const submitHandler = (event, dispatch, mode, inputs) => {
    event.preventDefault();
    const data = {
        contact: {}
    }
    for( let key in inputs ) {
        data.contact[inputs[key].config.name] = inputs[key].value
    }
    if( mode === "signup") {
        dispatch(register(data))
    } else if(mode === "login") {
        dispatch(login(data))
    }
    
}

export const changeModeHandler = (mode, setMode) => {
    if( mode === "signup") {
        setMode('login')
    } else {
        setMode('signup')
    }
}

export const setIsTouched = (inputs, index, setStateCb) => {
    let copiedInputs = [...inputs];
    let singleInput = copiedInputs[index];
    singleInput.isTouched = true
    copiedInputs[index] = singleInput;
    setStateCb(copiedInputs)
}

export const checkInputsMode = (mode, cb) => {
    if( mode === 'signup') {
        cb([
            {
                label: "Firstname",
                config: {
                    type: "text",
                    name: "firstname",
                    placeholder: "Please enter your first name"
                },
                value: "",
                rules: {
                    minLength: 2
                },
                isValid: false, 
                isTouched: false
            },
            {
                label: "Last name",
                config: {
                    type: "text",
                    name: "lastname",
                    placeholder: "Please enter your last name"
                },
                rules: {
                    minLength: 2
                },
                value: "",
                isValid: false, 
                isTouched: false
            },
            {
                label: "E-mail",
                config: {
                    type: "email",
                    name: "email",
                    placeholder: "Please enter your valid E-mail"
                },
                rules: {
                    minLength: 1,
                    isEmail: true
                },
                value: "",
                isValid: false, 
                isTouched: false
            },
            {
                label: "Password",
                config: {
                    type: "password",
                    name: "password",
                    placeholder: "Please choose a secure password"
                },
                rules: {
                    minLength: 8
                },
                value: "",
                isValid: false, 
                isTouched: false
            },
            {
                label: "Password confirm",
                config: {
                    type: "password",
                    name: "confirmPassword",
                    placeholder: "Please re-enter your password"
                },
                rules: {
                    minLength: 8
                },
                value: "",
                isValid: false, 
                isTouched: false
            }
        ])
    } else if(mode === "login") {
        cb([
            {
                label: "E-mail",
                config: {
                    type: "email",
                    name: "email",
                    placeholder: "Please enter your E-mail"
                },
                rules: {
                    minLength: 1,
                    isEmail: true
                },
                value: "",
                isValid: false, 
                isTouched: false
    
            },
            {
                label: "Password",
                config: {
                    type: "password",
                    name: "password",
                    placeholder: "Please choose a secure password"
                },
                rules: {
                    minLength: 8
                },
                value: "",
                isValid: false, 
                isTouched: false
            },
        ])
    }
} 