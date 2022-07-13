import React, { useMemo } from 'react';

import { NavLink } from 'react-router-dom';

import styles from "./MobileMenu.module.css";
import { addClasses } from "../../utilities/addClass";

const MobileMenu = ({ show }) => {

    return (
        <div
            className={useMemo(() => addClasses(show, styles.hide, styles.mobileMenu).join(' '))}
        >
            <div className={styles.links} >
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? styles.active : ""
                    }}
                >
                    Search jobs
                </NavLink>
                <NavLink
                    to="/"
                >
                    Post a job
                </NavLink>
                <NavLink
                    to="/"
                >
                    Sponsor us
                </NavLink>
                <NavLink
                    to="/account"
                    className={({ isActive }) => {
                        return isActive ? styles.active : ""
                    }}
                >
                    account
                </NavLink>
            </div>
        </div>
    )
}

export default MobileMenu