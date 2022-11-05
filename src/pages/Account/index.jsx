import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { inputChangedHandler, submitHandler } from "../../utilities/form_helpers";
import validateInput from "../../utilities/validateInput";
import { setIsTouched } from "../../utilities/form_helpers";
import useFormElements from '../../hooks/useFormElements';
import { changeModeHandler } from '../../utilities/form_helpers';

import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import style from "./Account.module.css";
import Message from '../../components/Message';

const Account = () => {
    const isLoading = useSelector(state => state.users.loading);
    const dispatch = useDispatch();
    const [mode, setMode] = useState('signup')
    const [formInputs, setFormInputs] = useFormElements(mode);

    let renderedinputElemets = (
        formInputs.map((input, index) => {
            return (
                <Input 
                    key={index}
                    label={input.label}
                    config={input.config}
                    value={input.value}
                    changed={(event) => inputChangedHandler(event, index, setFormInputs, formInputs)}
                    isValid={validateInput(input.value, input.rules)}
                    clicked={() => setIsTouched(formInputs, index, setFormInputs)}
                    isTouched={input.isTouched}
                />
            )
        })
    )
    return (
        <div
            className={style.account}
        >
            <Message />
            <FormContainer
                submitted={(event) => submitHandler(event, dispatch, mode, formInputs)}
                setModeClicked={() => changeModeHandler(mode, setMode)}
                mode={mode}
            >

                { isLoading ?  <Loader /> : renderedinputElemets }
            </FormContainer>
        </div>
    )
}

export default Account