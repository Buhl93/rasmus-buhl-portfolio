import React, { Component } from "react";

import Header from "../components/Header/Header";
import MyWork from "../components/MyWork/MyWork";
import classes from "./MainPage.module.css";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <div className={classes.Header}>
          <Header />
        </div>
        <div>
          <MyWork />
        </div>
      </>
    );
  }
}
