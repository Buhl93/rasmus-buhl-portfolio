import React, { Component } from "react";

import Header from "../components/Header/Header";
import MyWork from "../components/MyWork/MyWork";
import NavBar from "../components/Navigation/NavBar/NavBar";
import ContactForm from "../components/ContactForm/ContactForm";
import AboutMe from "../components/AboutMeSection/AboutMe";
import ContactLabels from "../components/ContactLabels/ContactLabels";
import classes from "./MainPage.module.css";

export default class MainPage extends Component {
  state = {
    YahtzeeCardOpen: false,
  };

  showYahtzeeCardHandler = () => {
    this.setState((prevState) => {
      return { YahtzeeCardOpen: !prevState.YahtzeeCardOpen };
    });
  };

  render() {
    return (
      <>
        <div className={classes.OuterWrapper}>
          <div className={classes.InnerWrapper}>
            <div className={classes.Layout}>
              <MyWork
                yahtzeeShow={this.state.YahtzeeCardOpen}
                yahtzeeCardToggle={this.showYahtzeeCardHandler}
              />
              <ContactForm />
              <AboutMe />
            </div>
          </div>
        </div>
        <Header />
        <NavBar />
      </>
    );
  }
}
