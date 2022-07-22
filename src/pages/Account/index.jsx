import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../store/actions';
import { inputChangedHandler, submitHandler } from "../../utilities/helpers";
import validateInput from "../../utilities/validateInput";

import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import style from "./Account.module.css"

const Account = () => {
    const [inputs, setInputs] = useState([
        {
            label: "Firstname",
            config: {
                type: "text",
                name: "firstname",
                placeholder: "Please enter your first name"
            },
            value: "",
            rules: {
                minLength: 5
            },
            isValid: false
        },
        {
            label: "Lastname",
            config: {
                type: "text",
                name: "lastname",
                placeholder: "Please enter your last name"
            },
            rules: {
                minLength: 1
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
            rules: {
                minLength: 1
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
            rules: {
                minLength: 1
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
            rules: {
                minLength: 1
            },
            value: "",
        }
    ]);
    const [touched, setTouched] = useState(false)

    const isLoading = useSelector(state => state.users.loading);
    const dispatch = useDispatch();

    let renderedinputElemets = (
        inputs.map((input, index) => {
            return (
                <Input 
                    key={index}
                    label={input.label}
                    config={input.config}
                    value={input.value}
                    changed={(event) => inputChangedHandler(event, index, setInputs, inputs)}
                    isValid={validateInput(input.value, input.rules)}
                    clicked={() => setTouched(true)}
                    isTouched={touched}
                />
            )
        })
    )
    return (
        <div
            className={style.account}
        >
            <FormContainer
                submitted={(event) => submitHandler(event, dispatch, register, inputs)}
            >
                { isLoading ?  <Loader /> : renderedinputElemets }
            </FormContainer>
        </div>
    )
}

export default Account