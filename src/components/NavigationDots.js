import React from "react";
import { data } from "../constants";

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {data.MENU.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={
                        active === item
                            ? {
                                  backgroundColor: "#313BAC",
                              }
                            : {}
                    }
                ></a>
            ))}
        </div>
    );
};

export default NavigationDots;
