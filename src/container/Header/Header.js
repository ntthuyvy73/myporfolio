import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const skills = [images.dotnet, images.react, images.sass];

const Header = () => {
    return (
        <div className="app__flex app__header">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <h1 className="header-text">Thuy Vy</h1>
                    </div>

                    <div className="tags-cmp app__flex">
                        <p className="p-text">Fullstack .NET</p>
                    </div>

                    <div className="tags-cmp app__flex">
                        <p className="p-text">Web Developer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="circle"
                ></motion.img>
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-skills"
            >
                {skills.map((skill, index) => (
                    <div
                        className="circle-cmp app__flex"
                        key={`circle-skill+ $(index)`}
                    >
                        <img src={skill} alt="" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
