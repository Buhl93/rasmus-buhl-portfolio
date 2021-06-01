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
              <div className={classes.Icon}>
                <i className="las la-lightbulb"></i>
              </div>
              This game was created since my girlfriend and I love to compete
              over a game of Yahtzee. This inspired me to create a version we
              could easily play everywhere without the use of dice. This is also
              why it is primarily designed to be used on a phone. <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-cogs"></i>
              </div>
              Logic for the scoreboard was created in
              order for it to work as seamlessly as possible. I reckoned that
              manually typing in scores was cumbersome, so I made it autodetect
              what has been rolled.
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-dice"></i>
              </div>
              The user simply has to click/tap on the dice one wants to save, and
              when done, the user just clicks/taps the box in the scoreborad
              that should be scored.
              <br />
              <br />
              It is also possible to delete an input if misplaced. As is it
              possible to cross a box if no score is available from the dice
              rolled. <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-hourglass-half"></i>
              </div>
              Future functionalities:
              <br />
              - Tutorial section.
              <br />
              - Game rules section.
              <br />- Super Yahtzee scoreboard modifications.
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
