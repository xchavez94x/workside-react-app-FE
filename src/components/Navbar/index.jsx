import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./Navbar.module.css";
import Logo from "../../assets/images/Logo.svg";
import BurgerMenu from "../../assets/images/Hamburger-Menu.svg"

const Navbar = ({ burgerClicked }) => {
    return (
        <div  
            className={styles.navbar}
        >
            <img 
                src={Logo}
                alt="Logo" 
                className={styles.logo} 
            />
            <div 
                className={styles.links}
            >
                <NavLink 
                    to="/" 
                    className={ ({isActive}) => {
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
            </div>
            <div
                className={styles.account}
            >
                <NavLink 
                    to="/account"
                    className={ ({isActive}) => {
                        return isActive ? styles.active : ""
                    }}    
                >
                    Account
                </NavLink>
            </div>
            <div
                className={styles.burger}
                onClick={burgerClicked}
            >   
                <img 
                    src={BurgerMenu}
                    alt="burger" />
            </div>
        </div>
    )
}


export default Navbar