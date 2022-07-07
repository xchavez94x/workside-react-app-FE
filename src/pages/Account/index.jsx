import React, { useState } from 'react';

import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import style from "./Account.module.css"

const Account = (props) => {
    const [config, setConfig] = useState('');
    const [formType, setFormType] = useState('')
    const [email, setEmail] = useState('')
    const checkStatus = () => {

    }
    const changeHandler = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }
    return (
        <div
            className={style.account}
        >
            <FormContainer>
                <Input
                    label="E-mail"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    changed={(event) => changeHandler(event)}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={email}
                    placeholder="Select a safe password"
                    changed={(event) => changeHandler(event)}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={email}
                    placeholder="Select a safe password"
                    changed={(event) => changeHandler(event)}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={email}
                    placeholder="Select a safe password"
                    changed={(event) => changeHandler(event)}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={email}
                    placeholder="Select a safe password"
                    changed={(event) => changeHandler(event)}
                />
            </FormContainer>
        </div>
    )
}

export default Account