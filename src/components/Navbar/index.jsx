import React from 'react';

import NavItem from '../NavItem';
import styles from "./Navbar.module.css";
import Logo from "../../assets/images/Logo.svg";
import BurgerMenu from "../../assets/images/Hamburger-Menu.svg"
import { navItems } from '../../utilities/constants';

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
<<<<<<< HEAD
                { navItems.map(({ path, label }, index) => {
                    return <NavItem 
                        key={index} 
                        path={path} 
                        label={label} 
                        styelsClassname={styles.active} />
                }) }
                
=======
                <NavLink 
                    to="/" 
                    className={ ({isActive}) => {
                        return isActive ? styles.active : ""
                    }}
                >
                    Search jobs
                </NavLink>
                <NavLink 
                    to="/post-job"
                    className={({isActive}) => isActive ? styles.active : ""}
                >
                    Post a job
                </NavLink>
>>>>>>> safty-users
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