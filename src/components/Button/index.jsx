import React from "react";

import styles from "./Button.module.css";
import Icon from "../../assets/images/Vector.svg";

function Button({ clicked, label, type }) {
    let btn;
    switch (type) {
        case "regular":
            btn = (
                <button
                    onClick={clicked}
                    className={styles.button}
                >
                    {label}
                </button>
            );
            break;
        case "tag":
            btn = (
                <button
                    onClick={clicked}
                    className={styles.tag}
                >
                    {label}
                </button>
            );
            break;
        case "filter":
            btn = (
                <button className={styles.filter}>
                    <span>
                        {label}
                    </span>
                    <img
                        src={Icon}
                        alt="icon"
                    />
                </button>
            );
            break;
        default:
            btn = (
                <button
                    onClick={clicked}
                    className={styles.button}
                >
                    {label}
                </button>
            )
    }
    return btn
}

export default Button;