import React from "react";
import BG from "../../assets/images/BG.jpg";
import Rasmusbuhllogo from "../../assets/images/Rasmusbuhllogo.svg";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.HeaderContainer}>
      <img className={classes.Bg} src={BG} alt="BG" />
      <div className={classes.HeaderText}>
        <h1 className={classes.Name}>Rasmus Buhl</h1>
        <h2 className={classes.Tag}>
          Web Developer <span>&</span> Designer
        </h2>
        
      </div>
      <div className={classes.HeaderTextMirror}>
        <h1 className={classes.NameMirror}>Rasmus Buhl</h1>

        <h2 className={classes.TagMirror}>
          Web Developer <span>&</span> Designer
        </h2>
      </div>
      <div className={classes.ScrollIndicator}>
        <div className={classes.OuterScroll}>
          <div className={classes.InnerScroll}></div>
        </div>
      </div>
      
    </div>
  );
}
