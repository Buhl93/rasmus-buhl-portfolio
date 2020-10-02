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
          Hi, I’m Rasmus. <br />
          <br /> I am a passionate web developer and designer currently located
          in Copenhagen, Denmark. <br />
          <br /> I focus on creating creative designs and thought through user
          experiences. <br />
          <br /> Feel free to take a look at some of my projects and please
          contact me if you would like to know more or if you have any
          questions.
        </p>
      </div>
    </div>
  );
}
