import React from 'react';

import style from "./FormContainer.module.css";
import Button from "../Button"

function FormContainer({method, submitted, children}) {
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
            
        </form>
    )
}

export default FormContainer;