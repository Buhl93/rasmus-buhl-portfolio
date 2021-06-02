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
            <img src={YatzeImg} alt="Yatze" className={classes.Image} />
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
            <span className={classes.Developed}>Developed 2020</span>
              <div className={classes.Icon}>
                <i className="las la-lightbulb"></i>
              </div>
              This game was created so that one could compete
              over a game of Yahtzee, without the need og dice, any time anywhere. 
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-cogs"></i>
              </div>
              The scoreboard auto detects the dice that has been saved.
              I reckoned that manually typing in scores was cumbersome..
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-dice"></i>
              </div>
              The user simply has to click/tap on the dice one wants to save, after which the user clicks/taps the box in the scoreboard
              that should be scored.
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-hourglass-half"></i>
              </div>
              Future functionalities:
              <br />
              - Tutorial section.
              <br />
              - Game rules section.
              <br />- Super Yahtzee scoreboard.
            </p>
          </div>
          <div className={classes.SpaceBottom}></div>
        </div>

        <div className={classes.GitWebButtons}>
          <a href="https://github.com/Buhl93/yahtzee-game" target="_blank">
            Code
          </a>
          <a href="https://clever-mcnulty-472ab7.netlify.app/" target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
