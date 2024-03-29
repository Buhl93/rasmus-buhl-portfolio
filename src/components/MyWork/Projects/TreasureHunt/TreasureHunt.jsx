import React from "react";
import classes from "./TreasureHunt.module.css";
import TreasureHuntImg from "../../../../assets/images/TreasureHuntMockup.jpg";

export default function BarberShop(props) {
  return (
    <div className={classes.Layout}>
      <div>
        <h3 className={classes.HeadLine}>Treasure Hunt</h3>
      </div>

      <div className={classes.Card}>
        <div className={classes.Scrollabe}>
          <a href="https://epic-wing-92008b.netlify.app" target="_blank">
            <img
              src={TreasureHuntImg}
              alt="Yatze"
              className={classes.Image}
              onClick={props.yahtzeeCardToggle}
            />
          </a>

          <div className={classes.TechsLayout}>
            <i class="lab la-js-square"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-html5"></i>
            <i class="lab la-sass"></i>
          </div>
          <div>
            <ul className={classes.Features}>
              <li>Mobile First</li>
              <li>One page feeling</li>
              <li>Combines with Real World</li>
              <li>Escape Room</li>
            </ul>
          </div>
          <p className={classes.Info}>Scroll for more info</p>
          <div className={classes.TextArea}>
            <p>
              <span className={classes.Developed}>Developed 2019</span>
              <div className={classes.Icon}>
                <i class="las la-skull"></i>
              </div>
              I love escape rooms and puzzles, so I decided to create my
              own escape room / treasure hunt. <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-map"></i>
              </div>
              In combination with real physical puzzles, this website served as a tool for inputting answers.
              The website is quite simple - inputting the right answer and a message appears, leading
              on to the next part of the treasure hunt. <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-puzzle-piece"></i>
              </div>
              The goal was to create a one-page feeling website, without the use of frameworks.
              <br />
              <br />
              Answers to riddles: <br /> - House (XXX) = 30
              <br /> - Key (?) = En tryllenøgle
              <br /> - Dice = 189
            </p>
          </div>
          <div className={classes.SpaceBottom}></div>
        </div>

        <div className={classes.GitWebButtons}>
          <a href="https://github.com/Buhl93/TreasureHunt" target="_blank">
            Code
          </a>
          <a href="https://epic-wing-92008b.netlify.app" target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
