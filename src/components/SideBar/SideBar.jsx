import React from "react";
import classes from "./SideBar.module.css";

export default function SideBar(props) {
  let SideBarClasses = [classes.SideBar, classes.Close];
  if (props.sideBarOpen) {
    SideBarClasses = [classes.SideBar, classes.Open];
  }

  return (
    <div className={SideBarClasses.join(" ")}>
      <a href="#MyWork">My Work</a>

      <a href="#ContactMe">Contact Me</a>

      <a href="#AboutMe">About Me</a>
      <div className={classes.Links}>
        <a
          href="https://www.linkedin.com/in/rasmus-buhl-jakobsen-686980104/"
          target="_blank"
        >
          <i class="lab la-linkedin"></i>
        </a>
        <a href="https://github.com/Buhl93" target="_blank">
          <i class="lab la-github"></i>
        </a>
      </div>
    </div>
  );
}
