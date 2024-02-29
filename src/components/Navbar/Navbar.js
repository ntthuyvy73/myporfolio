import React from "react";
import images from "../../constants/images";
import { data } from "../../constants";

const Navbar = () => {
    return (
        <nav className="app__navbar">
            {/* logo */}
            <div>
                <img src={images.logo} alt="" />
            </div>
            <ul className="app__navbar-links">
                {data.MENU.map((item, index) => (
                    <li key={`link${index}`}>{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
