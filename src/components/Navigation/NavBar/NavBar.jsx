import React from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.NavBar}>
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
