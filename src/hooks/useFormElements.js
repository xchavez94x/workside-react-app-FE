import { useState, useEffect } from "react";
import { checkInputsMode } from "../utilities/form_helpers";

export default function useFormElements(mode) {
    const [ formInputs, setFormInputs ] = useState([]);
    
    useEffect(() => {
        checkInputsMode(mode, setFormInputs)
    }, [mode])

    return [formInputs, setFormInputs]
}