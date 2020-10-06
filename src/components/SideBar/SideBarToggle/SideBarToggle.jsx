import classes from "./SideBarToggle.module.css";
import React from "react";

export default function SideBarToggle(props) {
  return (
    <div className={classes.Toggle} onClick={props.sideBarToggle}>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
    </div>
  );
}
