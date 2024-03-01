import React from "react";
import { motion } from "framer-motion";

import { AiFillEye } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

import { AppWrap } from "../../wrapper";
import * as data from "../../constants/data";

import "./Skills.scss";

const Skills = () => {
    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div
                    className="app__skills-list"
                    whileInView={{}}
                ></motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills");
