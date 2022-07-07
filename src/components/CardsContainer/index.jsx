import React from "react";

import Card from "../Card";
import styles from "./CardsContainer.module.css";

function CardsContainer(props) {
    return (
        <div 
            className={styles.cards}
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardsContainer