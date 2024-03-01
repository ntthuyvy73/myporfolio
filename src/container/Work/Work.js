import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";

import { AppWrap } from "../../wrapper";
import "./Work.scss";
import * as data from "../../constants/data";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState(false);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [filterWorks, setFilterWorks] = useState([]);

    const MAINWORKS = ["Backend", "Database", "Frontend", "All"];

    useEffect(() => {
        setActiveFilter("all");

        setFilterWorks(data.Works);
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 1 }]);
        if (item.toLowerCase() === "all") {
            setFilterWorks(data.Works);
        } else {
            setFilterWorks(
                data.Works.filter((work) =>
                    work.type.toLowerCase().includes(item.toLowerCase())
                )
            );
        }
    };

    return (
        <>
            <h2 className="head-text">My Creative</h2>

            <div className="app__work-filter">
                {MAINWORKS.map((item, index) => (
                    <div
                        key={item + index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item.toLowerCase()
                                ? "item-active"
                                : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWorks.map((item, index) => (
                    <div
                        key={item + index}
                        className="app__work-item app__flex"
                    >
                        <div className="app__work-img app__flex">
                            <img src={item.imgUrl} alt={item.title} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(Work, "work");
