import React from "react";
import YatzeImg from "../../assets/images/Yahtzee.PNG";
import ShoppingImg from "../../assets/images/Shopping.jpg";
import BurgerImg from "../../assets/images/Burger.jpg";

import classes from "./MyWork.module.css";

export default function MyWork() {
  return (
    <div>
      <p className={classes.MyWork}>My Work</p>
      <div className={classes.Row}>
        <div>
          <div>
            <h3>Yahtzee Game</h3>
            <p className={classes.DescriptiveText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <a href="https://clever-mcnulty-472ab7.netlify.app">
          <img src={YatzeImg} alt="Yatze" className={classes.Image} />
        </a>
      </div>
      <div className={classes.Row}>
        <img src={ShoppingImg} alt="Shop" className={classes.Image} />
        <div>
          <p className={classes.DescriptiveText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className={classes.Row}>
        <div>
          <p className={classes.DescriptiveText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <img src={BurgerImg} alt="Burger" className={classes.Image} />
      </div>
    </div>
  );
}
