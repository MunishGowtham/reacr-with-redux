import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const activeLink = { color: 'red' }
    return (
        <>
            <NavLink to="/" activeStyle={activeLink} exact>
                Home
            </NavLink>{' '}
            {' | '}
            <NavLink to="/courses" activeStyle={activeLink}>
                Courses
            </NavLink>{' '}
            {' | '}
            <NavLink to="/about" activeStyle={activeLink}>
                About
            </NavLink>
        </>
    )
}

export default Header
