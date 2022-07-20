import React from 'react';

import style from "./Input.module.css";

const Input = ({ label, changed, clicked, config, value }) => {
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
                {...config}
                onChange={changed}
                value={value}
            />
        </div>
    )
}

export default Input;   