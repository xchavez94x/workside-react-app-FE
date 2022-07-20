import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../store/actions';

import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import style from "./Account.module.css"

const Account = (props) => {
    const [inputs, setInputs] = useState([
        {
            label: "Firstname",
            config: {
                type: "text",
                name: "firstname",
                placeholder: "Please enter your first name"
            },
            value: "",
        },
        {
            label: "Lastname",
            config: {
                type: "text",
                name: "lastname",
                placeholder: "Please enter your last name"
            },
            value: "",
        },
        
        {
            label: "E-mail",
            config: {
                type: "email",
                name: "email",
                placeholder: "Please enter your valid E-mail"
            },
            value: "",

        },
        {
            label: "Password",
            config: {
                type: "password",
                name: "password",
                placeholder: "Please choose a secure password"
            },
            value: "",
        },
        {
            label: "Password confirm",
            config: {
                type: "password",
                name: "confirmPassword",
                placeholder: "Please re-enter your password"
            },
            value: "",
        }
    ]);
    const isLoading = useSelector(state => state.users.loading)
    const dispatch = useDispatch()

    const inputChangedHandler = (event, index) => {
        let inputElements = [...inputs];
        let singleinputElement = inputElements[index]
        singleinputElement.value = event.target.value;
        inputElements[index] = singleinputElement;
        setInputs(inputElements)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            contact: {}
        }
        for( let key in inputs ) {
            data.contact[inputs[key].config.name] = inputs[key].value
        }
        dispatch(register(data))
    }
    let renderedinputElemets = (
        inputs.map((input, index) => {
            return (
                <Input 
                    key={index}
                    label={input.label}
                    config={input.config}
                    value={input.value}
                    changed={(event) => inputChangedHandler(event, index)}
                />
            )
        })
    )
    return (
        <div
            className={style.account}
        >
            <FormContainer
                submitted={(event) => submitHandler(event)}
            >
                { isLoading ?  <Loader /> : renderedinputElemets }
            </FormContainer>
        </div>
    )
}

export default Account