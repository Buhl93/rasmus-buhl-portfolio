import React, { Component } from "react";

import Header from "../components/Header/Header";
import MyWork from "../components/MyWork/MyWork";
import NavBar from "../components/Navigation/NavBar/NavBar";
import ContactForm from "../components/ContactForm/ContactForm";
import AboutMe from "../components/AboutMeSection/AboutMe";
import classes from "./MainPage.module.css";
import SideBarToggle from "../components/SideBar/SideBarToggle/SideBarToggle";
import SideBar from '../components/SideBar/SideBar';
import Backdrop from '../components/Backdrop/Backdrop';
import MobileView from '../components/MobileView/MobileView'

export default class MainPage extends Component {
  state = {
    SideBarOpen: false,
  };

  sideBarToggleHandler = () => {
    this.setState((prevState) => {
      return { SideBarOpen: !prevState.SideBarOpen };
    });
  }

  render() {
    return (
      <>
      <div className={classes.WebView}>
          <div className={classes.OuterWrapper}>
            <div className={classes.InnerWrapper}>
              <div className={classes.Layout}>
                <MyWork />
                <ContactForm />
                <AboutMe />
              </div>
            </div>
          </div>  
          <Header />
          <NavBar />
          <SideBarToggle sideBarToggle={this.sideBarToggleHandler}/>
          <SideBar sideBarOpen={this.state.SideBarOpen}/>
          <Backdrop sideBarOpen={this.state.SideBarOpen} toggle={this.sideBarToggleHandler}/>
      </div>
      <div className={classes.MobileView}>
        <MobileView />
      </div>
        
      </>
    );
  }
}
