import React from 'react';
import Input from '../Input';
import styles from "./styles.module.css";

export default function Seacrh() {
    return (
        <div className={styles.container}>
            <h1>
                Search jobs 
            </h1>
            <Input />
        </div>
    )
}
