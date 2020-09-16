import React from 'react'
import classes from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={classes.NavBar}>
            <ul className={classes.NavItems}>
                <li>My Work</li>
                <li>Contact Me</li>
                <li>About Me</li>
            </ul>
            
        </div>
    )
}
