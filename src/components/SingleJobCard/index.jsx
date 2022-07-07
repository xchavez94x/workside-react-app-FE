import React from 'react';

import styles from "./SingleJobCard.module.css";
import ListItem from '../ListItem';
import Button from "../Button"

const SingleJobCard = () => {
    // later will be passed from qpi call to db 
    const jobRequirements = [
        "4 years of professional working experience.", 
        "Understanding of Next.js, React, and Angular.",
        "Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux."
    ]
    return (
        <div className={[styles.jobcard].join(' ')} >
            <div className={styles.jobcard__title} >
                <h3>
                    Frontend developer
                </h3>
                <p>
                    Virginia, USA
                </p>
                <h5>
                    Posted 4 days ago
                </h5>
            </div>
            <div className={styles.jobcard__info} >
                <h4>
                    Experience
                </h4>
                <h4>
                    Location
                </h4>
                <h4 className={styles.jobcard__info__last}>
                    Salary
                </h4>
                <p>
                    Expert
                </p>
                <p>
                    Virginia USA
                </p>
                <p className={styles.jobcard__info__last}>
                    $100/hr
                </p>
            </div>
            <div className={styles.jobcard__overview} >
                <h4>
                    Company overview
                </h4>
                <p>
                    Dividstar was established in 1932 by Matthew Cohens 
                    in Virginia, United States. Dividstar has been the 
                    leader application for personal finance over the past 
                    10 decades and aim to continue holding that position. 
                    As times continue to evolve, we do too.
                </p>
            </div>
            <div className={styles.jobcard__requirements} >
                <h4>
                    Job Requirements
                </h4>
                <div className={styles.requirements__list} >
                    { 
                        jobRequirements.map(( item, index ) => {
                            return (
                                <ListItem key={index} info={item} />
                            )
                        })
                    }
                </div>  
            </div>
            <div className={styles.jobcard__button}>
                    <Button 
                        type="regular"
                        label="Apply"
                    />
                </div>
        </div>
    )
}

export default SingleJobCard;