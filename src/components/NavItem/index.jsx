import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({path, styelsClassname, label}) =>{
    return (
        <NavLink 
            to={path} 
            className={({isActive}) => isActive ? styelsClassname : ""} 
        >
            {label}
        </NavLink>
    )
}

export default NavItem