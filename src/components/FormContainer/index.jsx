import React from 'react';

import style from "./FormContainer.module.css";
import Button from "../Button"
import CustomLink from '../CustomLink';

function FormContainer({method, submitted, children, setModeClicked, mode }) {
    const checkLabel = mode => {
        let label;
        mode === "signup" ? label = "Login" : label = "Register";
        return label
    }
    return (
        <form 
            className={style.form}
            method={method}
            onSubmit={submitted}
        >
            { children }
            <div className={style.button}>
                <Button label="Submit" />
            </div>
            <CustomLink 
                to="/account"
                label={checkLabel(mode)}
                clicked={setModeClicked}
            />
        </form>
    )
}

export default FormContainer;