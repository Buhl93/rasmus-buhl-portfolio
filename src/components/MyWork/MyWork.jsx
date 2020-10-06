import React from "react";
import ShoppingImg from "../../assets/images/Shopping.jpg";
import BurgerImg from "../../assets/images/Burger.jpg";

import YahtzeeGame from "./Projects/YahtzeeGame/YahtzeeGame";
import BarberShop from "./Projects/BarberShop/BarberShop";
import TreasureHunt from "./Projects/TreasureHunt/TreasureHunt";

import classes from "./MyWork.module.css";

export default function MyWork(props) {
  return (
    <div className={classes.MyWorkContainer}>
      <div className={classes.LeftSideLine}></div>
      <div className={classes.Row}>
        <a name="MyWork">
          <div id="MyWork"></div>
        </a>
        <h2 className={classes.HeadLine}>My Work</h2>

        <YahtzeeGame />
        <BarberShop />
        <TreasureHunt />
      </div>
      <div className={classes.RightSideLine}></div>
    </div>
  );
}
