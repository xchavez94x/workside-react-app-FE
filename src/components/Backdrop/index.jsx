import React from 'react';

import styles from "./Backdrop.module.css";

const Backdrop = ({ show, clicked}) => {
    return (
        <div 
            className={show ? styles.backdrop : ""}
            onClick={clicked}
        >
            
        </div>
    )
}

export default Backdrop