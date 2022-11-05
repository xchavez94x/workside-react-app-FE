import React, { useState } from 'react';

import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import styles from "./PostJob.module.css";

const PostJob = () => {
    const [ inputs, setInputs ] = useState([
        {
            label: "Job title",
            type: "text",
            config: {
                type: "text",
                name: "title",
                placeholder: "Please enter the job title!"
            }
        },
        {
            label: "Job description",
            type: "textarea",
            config: {
                
                name: "description",
                placeholder: "Please enter the job description!"
            }
        },
        {
            label: "Job requirements",
            type: "text",
            config: {
                type: "text",
                name: "requirement",
                placeholder: "Please enter the job requirements!"
            }
        }
    ])
    return (
        <div className={styles.post_job}>
            <h1>Post a job</h1>
            <FormContainer>
                { inputs.map((input, index) => {
                    return (
                        <Input 
                            key={index}
                            label={input.label}
                            type={input.type}
                            config={input.config}
                        />
            )
        }) }
            </FormContainer>
        </div>
        
    )
}

export default PostJob