import React from 'react';
import NavItem from '../NavItem';

import styles from "./Navbar.module.css";
import Logo from "../../assets/images/Logo.svg";
import BurgerMenu from "../../assets/images/Hamburger-Menu.svg"

const Navbar = ({ burgerClicked }) => {
    const navItems = [
        { path: "/", label: "Main" },
        { path: "/post-job", label: "Post a job" },
    ];
    
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
                { navItems.map((item, index) => {
                    const { path, label } = item;
                    return <NavItem 
                        key={index} 
                        path={path} 
                        label={label} 
                        styelsClassname={styles.active} />
                }) }
                
            </div>
            <div
                className={styles.account}
            >
                <NavItem 
                    path="/account" 
                    label="Account" 
                    styelsClassname={styles.active} />
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