import React from "react";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.HeaderText}>
      <h1 className={classes.Name}>Rasmus Buhl</h1>
      <h2>Web Developer & UI/UX Designer</h2>
      <li><a href="">My Work</a></li>
      <li><a href="">About me</a></li>
      <li><a href="">Contact</a></li>
    </div>
  );
}
