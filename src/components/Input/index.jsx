import React from 'react';

import style from "./Input.module.css";

const Input = ({ label, changed, clicked, name, value, type, placeholder }) => {
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
                className={style.input__element} 
                onClick={clicked}
                name={name}
                type={type}
                value={value}
                onChange={changed}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;   