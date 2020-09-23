import React from "react";
import classes from "./ContactLabels.module.css";

export default function ContactLabels() {
  return (
    <div className={classes.ContactLabels}>
      <div className={`${classes.Contact} ${classes.Phone}`}>
        <p>+45 61 85 40 60</p>
        <i class="las la-phone"></i>
      </div>
      <div className={`${classes.Contact} ${classes.Email}`}>
        <p>buhl.jakobsen@gmail.com</p>
        <i class="lar la-envelope"></i>
      </div>
    </div>
  );
}
