import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { Abouts } from "../../constants/data";

const About = () => {
  return (
    <div className="app__profiles">
      {Abouts.map((item, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profiles-item"
          key={item.title + index}
        >
          <img src={item.imgUrl} alt="" />
          <h2 className="bold-text"> {item.title}</h2>
         
        </motion.div>
      ))}
    </div>
  );
};

export default About;
