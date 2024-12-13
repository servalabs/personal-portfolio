import Timeline from '../pages/Timeline.jsx';
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Apper from "./Apper";
 
import Achievements from "./Achievements";
 
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[100px] md:py-[00px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                 
                <Apper/>

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                     
                    
                    <Timeline />
                    {/* TIMELINE END */}
                 

                {/* SECTION HEADING START */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[90px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                    <span>Solving</span>
                    <span>Problems</span>
                    <span className="flex items-center gap-2">
                        Through
                        <img
                            src={pattern}
                            className="block md:hidden w-[80px] mt-1"
                        />
                    </span>
                    <span className="flex items-center gap-4">
                        XP {" "}
                        <img
                            src={pattern}
                            className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                        />
                    </span>
                    <span>Intuition</span>
                </div>
                {/* SECTION HEADING END */}
        </div>
                {/* SERVICES SECTION END */ }

    {/*<Portfolio /> to be reinstated once I actually have something*/ }
    <Achievements />
            </Wrapper >
        </div >
    );
};

export default Skills;
