import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) => (
  <div
    className={props.sideBarOpen ? classes.Backdrop : null}
    onClick={props.toggle}
  ></div>
);

export default backdrop;