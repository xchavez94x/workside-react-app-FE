import React from 'react';

import styles from "./Main.module.css";
import Filters from '../../components/Filters';
import CardsContainer from '../../components/CardsContainer';
import SingleJobCard from '../../components/SingleJobCard';

const Main = ({ children }) => {
    return (
        <div
            className={styles.main}
        >
            <Filters />
            <CardsContainer />
            <SingleJobCard />
        </div>
    )
}

export default Main