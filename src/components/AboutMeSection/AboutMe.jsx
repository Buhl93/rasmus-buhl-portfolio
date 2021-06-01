import classes from "./AboutMe.module.css";
import React from "react";
import portrait from "../../assets/images/profilbillede2.jpg";
import ResumeDA from "../../assets/Resume/ResumeDA.pdf";
import ResumeEN from "../../assets/Resume/ResumeEN.pdf";

export default function AboutMe() {
  return (
    <div className={classes.AboutMeContainer}>
      <div className={classes.LeftSideLine}></div>
      <a name="AboutMe">
        <div id="AboutMe"></div>
      </a>
      <h2 className={classes.HeadLine}>About Me</h2>
      <div className={classes.Layout}>
        <img className={classes.Portrait} src={portrait} alt="portrait" />
        <p>
          Hi, I’m Rasmus. <br />
          <br /> I am a passionate web developer and designer currently located
          in Copenhagen, Denmark. <br />
          <br /> I focus on creating creative designs and thought through user
          experiences. <br />
          <br /> Feel free to take a look at my projects and
          contact me if you would like to know more or if you have any
          questions.
        </p>
      </div>
      <div className={classes.ResumeButtons}>
        <button className={classes.ResumeButton}>
          <a href={ResumeDA} download>
            Get my Resume | Danish
          </a>
        </button>
        <button className={classes.ResumeButton}>
          <a href={ResumeEN} download>
            Get my Resume | English
          </a>
        </button>
      </div>
      
    </div>
  );
}
