import React from "react";
import classes from "./Ecommerce.module.css";
import JiggerboxImg from "../../../../assets/images/JiggerboxMockup.png";

export default function Ecommerce(props) {
  return (
    <div className={classes.Layout}>
      <div>
        <h3 className={classes.HeadLine}>Jiggerbox ecommerce</h3>
      </div>

      <div className={classes.Card}>
        <div className={classes.Scrollabe}>
          <a href="https://clever-mcnulty-472ab7.netlify.app/" target="_blank">
            <img src={JiggerboxImg} alt="Yatze" className={classes.Image} />
          </a>

          <div className={classes.TechsLayout}>
            <i class="lab la-js-square"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-html5"></i>
            <i class="lab la-react"></i>
          </div>
          <div>
            <ul className={classes.Features}>
                <li>Mobile First</li>
                <li>Full Stack</li>
                <li>Firebase</li>
                <li>React Router</li>
                <li>Thunk middleware</li>
                <li>Redux</li>
            </ul>
          </div>
          <p className={classes.Info}>Scroll for more info</p>
          <div className={classes.TextArea}>
            <p>
                <span className={classes.Developed}>Developed 2021 (Work in progress)</span>
              <div className={classes.Icon}>
                <i className="las la-store"></i>
              </div>
              Jiggerbox is an full stack ecommerce selling cocktail boxes. It is build with React and 
              Redux for state management with Thunk for asynchronous code and React Router for routing. Firebase is used for backend. 
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-money-bill-wave-alt"></i>
              </div>
              It includes user authentication, product filtering, basket handling and price calculation.
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-cash-register"></i>
              </div>
              Upcoming features will be payment integration with Stripe, more filter options, search functionality, 
              order history, pagination.
              <br />
              <br />
              <div className={classes.Icon}>
                <i class="las la-mobile"></i>
              </div>
              The site is developed with a mobile first approach.
              <br />
              <br />
            </p>
          </div>
          <div className={classes.SpaceBottom}></div>
        </div>

        <div className={classes.GitWebButtons}>
          <a href="https://github.com/Buhl93/jiggerbox-webstore" target="_blank">
            Code
          </a>
          <a href="https://upstir-ecommerce.web.app/" target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
