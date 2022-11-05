import React, { useCa } from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from "./styles.module.css";

export default function Seacrh({ input }) {
    const searchJobsHandler = () => {
            console.log(input.current.value)
        }
    return (
        <div className={styles.container}>
            <h1>
                Search jobs 
            </h1>
            <Input type="text" refrence={input} />
            <Button clicked={searchJobsHandler} type="regular" label="search"/>
        </div>
    )
}
