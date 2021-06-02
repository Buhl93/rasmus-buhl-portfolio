import React from 'react'
import classes from './MobileView.module.css'

import JiggerboxImg from "./../../assets/images/JiggerboxMockup.png";
import YatzeImg from "./../../assets/images/YatzyMockup.jpg";
import TreasureHuntImg from "./../../assets/images/TreasureHuntMockup.jpg";

const MobileView = () => {
    return (
        <div className={classes.MobileView}>
            <div className={classes.Header}>
                <h2>Rasmus Buhl</h2>
                <h4>Web developer and Designer</h4>
            </div>
            
            <div className={classes.Line}></div>
            <h3>My Work</h3>
            <div className={classes.CardLayout}>
                <h4>Jiggerbox ecommerce</h4>
                <img className={classes.Img} src={JiggerboxImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://upstir-ecommerce.web.app/" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/jiggerbox-webstore" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div className={classes.CardLayout}>
                <h4>Yahtzee Game</h4>
                <img className={classes.Img} src={YatzeImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://clever-mcnulty-472ab7.netlify.app/" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/yahtzee-game" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div className={classes.CardLayout}>
                <h4>Treasure Hunt</h4>
                <img className={classes.Img} src={TreasureHuntImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://epic-wing-92008b.netlify.app" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/TreasureHunt" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div className={classes.Line}></div>
            <div className={classes.Contact}>
                <h3>Contact Information</h3>
                <p>Email: buhl.jakobsen@gmail.com</p>
                <p>phone: +45 61 85 40 60</p>
            </div>
            

        </div>
    )
}

export default MobileView
