import classes from "./AboutMe.module.css";
import React from "react";

export default function AboutMe() {
  return (
    <div className={classes.AboutMeContainer}>
      <div className={classes.LeftSideLine}></div>
      <a name="AboutMe">
        <div id="AboutMe"></div>
      </a>
      <h2 className={classes.HeadLine}>About Me</h2>
      <div className={classes.Layout}>
        <div className={classes.Circle}></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
