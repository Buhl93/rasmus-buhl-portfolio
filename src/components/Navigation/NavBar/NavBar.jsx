import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.NavBar}>
      <ul className={classes.Profiles}>
        <li>
          <a
            href="https://www.linkedin.com/in/rasmus-buhl-jakobsen-686980104"
            target="_blank"
          >
            <i class="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Buhl93" target="_blank">
            <i class="lab la-github"></i>
          </a>
        </li>
      </ul>
      <ul className={classes.NavItems}>
        <li className={classes.MyWork}>
          <a  href="#MyWork">My Work</a>
        </li>
        <li className={classes.ContactMe}>
          <a  href="#ContactMe">Contact Me</a>
        </li>
        <li className={classes.AboutMe}>
          <a  href="#AboutMe">About e</a>
        </li>
      </ul>
    </div>
  );
}
