import React, { useMemo } from 'react';

import Checkmark from "../../assets/images/Checkmark.svg";
import BuleCheckmark from "../../assets/images/Checkmark-blue.svg";
import styles from "./ListItem.module.css";
import { checkStatus } from '../../utilities/helpers';

function ListItem({ status, info }) {
    let listItem;
    const memoizedCB = useMemo(() => checkStatus(status, BuleCheckmark, Checkmark))
    if (status !== undefined) {
        listItem = (
            <div className={styles.listItem}>
                <img
                    src={memoizedCB}
                    alt="Icon"
                />
                <span>
                    payment {status}
                </span>
            </div>
        )
    } else {
        listItem = (
            <div className={styles.listItem__requirements}>
                <img
                    src={BuleCheckmark}
                    alt="Icon"
                />
                <p>
                    {info}
                </p>
            </div>
        )
    }
    return listItem
}

export default ListItem;