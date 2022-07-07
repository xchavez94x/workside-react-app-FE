import React from 'react'

import styles from "./Card.module.css";
import Location from "../../assets/images/Location.svg";
import CompanyLogo from "../../assets/images/First-Job-Logo.svg";
import Button from '../Button';
import ListItem from '../ListItem';

function Card() {
    return (
        <div
            className={styles.card}
        >
            <div className={styles.card__logo} >
                <img
                    src={CompanyLogo}
                    alt="Company logo"
                />
            </div>
            <div className={styles.card__title}
            >
                <h5>
                    Looking for a freelance frontend developer
                </h5>
                <p>
                    <img
                        src={Location}
                        alt="location"
                    />
                    <span>
                        Virginia, USA
                    </span>
                </p>
            </div>
            <div className={styles.card__info} >
                <div
                    className={styles.card__buttons}
                >
                    <Button
                        type="tag"
                        label="Web dev"
                    />
                    <Button
                        type="tag"
                        label="SEO"
                    />
                </div>
                <div className={styles.card__status}>
                    <ListItem status="verified" />
                </div>
            </div>
        </div>
    )
}

export default Card;