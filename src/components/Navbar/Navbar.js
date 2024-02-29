import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { data } from "../../constants";

import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* logo */}
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
      </div>

      {/* menu */}
      <ul className="app__navbar-links">
        {data.MENU.map((item, index) => (
          <li key={`link${index}`} className="p-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* toggle menu */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />

            <ul>
              {data.MENU.map((item, index) => (
                <li key={`link${index}`} className="p-text">
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
