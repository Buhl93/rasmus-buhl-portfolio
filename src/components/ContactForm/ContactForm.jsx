import classes from "./ContactForm.module.css";
import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    Name: "",
    Email: "",
    Message: "",
  };

  handleNameChange = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      Message: event.target.value,
    });
  };

  render() {
    return (
      <div className={classes.ContactForm}>
        <h2 className={classes.HeadLine}>Contact Me</h2>
        <form className={classes.Form}>
          <div className={classes.Input}>
            <label>Name</label>
            <input
              type="text"
              value={this.state.Name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Email</label>
            <input
              type="email"
              value={this.state.Email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Company (optional)</label>
            <input
              type="email"
              value={this.state.Email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Message</label>
            <textarea
              type="text"
              value={this.state.Message}
              onChange={this.handleMessageChange}
            />
          </div>
          <div className={classes.Button}>
            <button>Send</button>
          </div>
        </form>
        <div className={classes.RightSideLine}></div>
      </div>
    );
  }
}
