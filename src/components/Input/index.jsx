import React from 'react';
import {toggleClass} from "../../utilities/addClass";

import style from "./Input.module.css";

const Input = ({ label, changed, clicked, config, value, isValid, isTouched, type, refrence}) => {
    let inputType ;
    switch(type) {
        case "text":
            inputType = (
                <input 
                className={toggleClass(isValid, isTouched, style.invalid, style.input__element)}
                onClick={clicked}
                {...config}
                onChange={changed}
                value={value}
                ref={refrence}
            />  
            )
            break;
        case "textarea":
            inputType = (
                <textarea 
                    cols="30" 
                    rows="10"
                    className={toggleClass(isValid, isTouched, style.invalid, style.input__element)}
                    onClick={clicked}
                    {...config}
                    onChange={changed}
                    value={value}
                    >
                    
                </textarea>
                )
                break
        default: 
        inputType = (
            <input 
            className={toggleClass(isValid, isTouched, style.invalid, style.input__element)}
            onClick={clicked}
            {...config}
            onChange={changed}
            value={value}
        />  
        )
    }
    return (
        <div 
            className={style.input}
        >
            <label 
                className={style.input__label} 
            >
                {label}
            </label>
            {inputType}
        </div>
    )
}

export default Input;   