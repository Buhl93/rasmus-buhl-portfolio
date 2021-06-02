import React from 'react'
import classes from './MobileView.module.css'

import YatzeImg from "./../../assets/images/YatzyMockup.jpg";

const MobileView = () => {
    return (
        <div className={classes.MobileView}>
            <h2>Rasmus Buhl</h2>
            <h4>Web developer and Designer</h4>
            <div className={classes.Line}></div>
            <h3>My Work</h3>
            <div>
                <h4>Jiggerbox ecommerce</h4>
                <img className={classes.Img} src={YatzeImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://upstir-ecommerce.web.app/" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/jiggerbox-webstore" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div>
                <h4>Jiggerbox ecommerce</h4>
                <img className={classes.Img} src={YatzeImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://upstir-ecommerce.web.app/" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/jiggerbox-webstore" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div>
                <h4>Jiggerbox ecommerce</h4>
                <img className={classes.Img} src={YatzeImg} alt="" />
                <div className={classes.Buttons}>
                    <button>
                        <a href="https://upstir-ecommerce.web.app/" target="_blank">Website</a>
                    </button>
                    <button>
                        <a href="https://github.com/Buhl93/jiggerbox-webstore" target="_blank">Code</a>
                    </button>
                </div>
            </div>
            <div className={classes.Line}></div>
            <h3>Contact Information</h3>
            <p>buhl.jakobsen@gmail.com</p>
            <p>phone: +45 61 85 40 60</p>

        </div>
    )
}

export default MobileView
