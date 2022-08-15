import React, { useMemo } from 'react';

import styles from "./MobileMenu.module.css";
import { addClasses } from "../../utilities/addClass";
import { navItems } from "../../utilities/constants";
import NavItem from '../NavItem';

const MobileMenu = ({ show }) => {

    return (
        <div
            className={useMemo(() => addClasses(show, styles.hide, styles.mobileMenu).join(' '))}
        >
            <div className={styles.links} >
                { navItems.map(({ label, path }, index) => {
                    return (
                        <NavItem 
                            key={index}
                            path={path} 
                            label={label}
                        />
                    )
                })}
                <NavItem path="/account" label="Account" />
            </div>
        </div>
    )
}

export default MobileMenu