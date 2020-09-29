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
Mit navn er Rasmus, jeg er 27 år gammel og er bosat i København.
Jeg er en ambitiøs Frontend udvikler der har fokus på eksekvering, godt design og brugervenlighed. 
Nogle af mine projekter kan ses på denne side, jeg håber du synes om dem.
        </p>
      </div>
    </div>
  );
}
