import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.NavBar}>
      <ul className={classes.Profiles}>
        <li>
          <a
            href="https://www.linkedin.com/in/rasmus-buhl-jakobsen-686980104/"
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
        <li>
          <a href="#MyWork">My Work</a>
        </li>
        <li>
          <a href="#ContactMe">Contact Me</a>
        </li>
        <li>
          <a href="#AboutMe">About Me</a>
        </li>
      </ul>
    </div>
  );
}
