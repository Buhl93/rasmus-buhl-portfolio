import React from "react";
import classes from "./BarberShop.module.css";
import BarberShopImg from "../../../../assets/images/BarberShopMockup.jpg";

export default function BarberShop(props) {
  return (
    <div className={classes.Layout}>
      <div>
        <h3 className={classes.HeadLine}>Barber Shop</h3>
      </div>

      <div className={classes.Card}>
        <div className={classes.Scrollabe}>
          <a href="https://dreamy-lovelace-5f81d8.netlify.app" target="_blank">
            <img
              src={BarberShopImg}
              alt="Yatze"
              className={classes.Image}
              onClick={props.yahtzeeCardToggle}
            />
          </a>

          <div className={classes.TechsLayout}>
            <i class="lab la-js-square"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-html5"></i>
            <i class="lab la-react"></i>
          </div>
          <div>
            <ul className={classes.Features}>
              <li>Clean design</li>
              <li>Booking System mockup</li>
              <li>Dark tones</li>
              <li>Stylized presentation</li>
            </ul>
          </div>
          <p className={classes.Info}>Scroll for more info</p>
          <div className={classes.TextArea}>
            <p>
              <div className={classes.Icon}>
                <i className="las la-cut"></i>
              </div>
              This is my take on a website for a barbershop. The idea was to
              create a website for a place that wants to radiate a down to earth
              and cool atmosphere. <br />
              <br />
              <div className={classes.Icon}>
                <i className="las la-spray-can"></i>
              </div>
              The tones are dark and underplayed. Very simple and designed with
              not too much going on or too many distractions.
              <br />
              <br />
              <div className={classes.Icon}>
                <i className="las la-coffee"></i>
              </div>
              Hopefully the site gives the sense of professionalism, quality and
              a love for the old way of doing things.
              <br />
              <br />
              <div className={classes.Icon}>
                <i className="las la-shower"></i>
              </div>
              Future functionalities:
              <br /> - Responsive design
            </p>
          </div>
          <div className={classes.SpaceBottom}></div>
        </div>

        <div className={classes.GitWebButtons}>
          <a href="https://github.com/Buhl93/-broBarber" target="_blank">
            Code
          </a>
          <a href="https://dreamy-lovelace-5f81d8.netlify.app" target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
