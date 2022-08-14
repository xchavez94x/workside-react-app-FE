import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideError } from '../../store/reducers/users';

import style from "./Message.module.css";
import Button from "../Button"

// todo: should create an error boundary which displays red error after failed task

function Message () {
    const hasError = useSelector(state => state.users.hasError);
    const errorMessage = useSelector(state => state?.users?.error?.message);
    const dispatch = useDispatch()
    return (
        <div className={ hasError ? style.message : style.hide }>
            
            <h3>
                {errorMessage || "something went wrong"}
            </h3>
            <Button 
                label="X" 
                clicked={() => dispatch(hideError())}
            />
        </div>
    )
}

export default Message