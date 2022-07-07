import React from 'react';

import styles from "./FiltersList.module.css";
import Checkbox from '../Checkbox';

const FilterList = ({ config, change }) => {
    
    let item = config?.map((item, index) => {
        return (
            <div
                key={index}
                className={styles.filters__item}
            >
            <h3>
                {item.header}
            </h3>
                { item?.params?.map(( param, index ) => {
                    return (
                        <Checkbox
                            key={index}
                            label={param.label}
                            changed={change}
                            name={param.name}
                        />
                    )
                }) 
            }
        </div>
        )
    });

    return item;
}

export default FilterList
