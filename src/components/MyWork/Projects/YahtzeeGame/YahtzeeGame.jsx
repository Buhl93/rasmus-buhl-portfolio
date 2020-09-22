import React from "react";
import classes from "./YahtzeeGame.module.css";
import YatzeImg from "../../../../assets/images/YatzyMockup.jpg";

export default function YahtzeeGame(props) {
  return (
    <div className={classes.Layout}>
      <div>
        <h3 className={classes.HeadLine}>Yahtzee Game</h3>
      </div>

      <div className={classes.Card}>
        <div className={classes.Scrollabe}>
          <a href="https://clever-mcnulty-472ab7.netlify.app/" target="_blank">
            <img
              src={YatzeImg}
              alt="Yatze"
              className={classes.Image}
              onClick={props.yahtzeeCardToggle}
            />
          </a>

          <div className={classes.TechsLayout}>
            <i class="lab la-js-square"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-html5"></i>
            <i class="lab la-react"></i>
          </div>
          <div>
            <ul className={classes.Features}>
              <li>Responsive</li>
              <li>Automatic Scoreboard</li>
              <li>Dark Mode</li>
              <li>2 Game Modes</li>
              <li>Local Multiplayer</li>
            </ul>
          </div>
          <p className={classes.Info}>Scroll for more info</p>
          <div className={classes.TextArea}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, a ssentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, a  a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, a ssentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, a
            </p>
          </div>
          <div className={classes.SpaceBottom}>
          </div>
        </div>

        <div className={classes.GitWebButtons}>
          <a href="https://github.com/Buhl93/yahtzee-game" target="_blank">
            Git
          </a>
          <a href="https://clever-mcnulty-472ab7.netlify.app/" target="_blank">
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
