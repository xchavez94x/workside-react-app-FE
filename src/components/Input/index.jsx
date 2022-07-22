import React from 'react';
import {toggleClass} from "../../utilities/addClass";

import style from "./Input.module.css";

const Input = ({ label, changed, clicked, config, value, isValid, isTouched }) => {
    return (
        <div 
            className={style.input}
        >
            <label 
                className={style.input__label} 
            >
                {label}
            </label>
            <input 
                className={toggleClass(isValid, isTouched, style.invalid, style.input__element)}
                onClick={clicked}
                {...config}
                onChange={changed}
                value={value}

            />
        </div>
    )
}

export default Input;   