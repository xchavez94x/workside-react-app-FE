import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({ to, label, clicked }) {
    return (
        <Link
            to={to}
            onClick={clicked}
        >
            {label}
        </Link>
    )
}

export default CustomLink