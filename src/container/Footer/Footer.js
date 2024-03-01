import React from "react";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="app__footer">
            <h2 className="head-text">Take A Coffee & Chat With Me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:ntthuyvy73@gmail.com" className="p-text">
                        ntthuyvy73@gmail.com
                    </a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel:0356203225" className="p-text">
                        0356203225
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppWrap(Footer, "contact");
