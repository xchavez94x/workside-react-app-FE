import React from "react";

import styles from "./Checkbox.module.css";

function Checkbox({ changed, label, name }) {
    return (
        <div className={styles.checkbox} >
            <label 
                className={styles.checkbox__label} >
                <input
                    type="checkbox"
                    name={name}
                    onChange={changed}
                />
                <span>
                    {label}
                </span>
            </label>
        </div>
    )
}

export default Checkbox;