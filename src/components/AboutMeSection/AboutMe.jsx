import classes from './AboutMe.module.css'
import React from 'react'

export default function AboutMe() {
    return (
        <div className={classes.AboutMeContainer}>
             <div className={classes.LeftSideLine}></div>
            <h2 className={classes.HeadLine}>About Me</h2>
            
        </div>
    )
}
