import classes from "./ContactForm.module.css";
import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    Name: "",
    Email: "",
    Company: "",
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

  handleCompanyChange = (event) => {
    this.setState({
      Company: event.target.value,
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
        <a name="ContactMe">
          <div id="ContactMe"></div>
        </a>
        <h2 className={classes.HeadLine}>Contact Me</h2>
        <form className={classes.Form} method="POST" data-netlify="true">
          <div className={classes.Input}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.Name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.Email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Company (optional)</label>
            <input
              type="text"
              name="company"
              id="company"
              value={this.state.Company}
              onChange={this.handleCompanyChange}
            />
          </div>
          <div className={classes.Input}>
            <label>Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={this.state.Message}
              onChange={this.handleMessageChange}
            />
          </div>
          <div className={classes.SpamFilter}>
            <div data-netlify-recaptcha="true"></div>
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
