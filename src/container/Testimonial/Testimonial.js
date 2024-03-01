import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {} from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import * as data from "../../constants/data";

import "./Testimonial.scss";

const Testimonial = () => {
    const [brands, setBrands] = useState();
    const [testimonial, setTestimonial] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTestimonial(data.Testimonial);
    }, []);

    return (
        <>
            {testimonial.length && (
                <>
                    <div className="app_testimonial-item app__flex">
                        <img src />
                    </div>
                </>
            )}
        </>
    );
};

export default AppWrap(Testimonial, "testimonial");
