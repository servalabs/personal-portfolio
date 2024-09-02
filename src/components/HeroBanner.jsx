import { useRef } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Wrapper from "./Wrapper";
import man from "../assets/saumya.jpg";
import externalLinkIcon from "../assets/external-link-icon.png";
import gmailIcon from "../assets/email-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    const socialIconsStyle = {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    };

    const iconStyle = {
        margin: '10px',
        fontSize: '24px',
        color: '#333',
    };
    return (
        <div
            id="hero"
            className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-left justify-left mt-[5px] 2xl:mt-[15px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[5px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>s@saumyas.com</div>
                    </div>
                </motion.div>
                <motion.div
                    className="hidden md:flex items-center justify-center mt-[0px] 2xl:mt-[2px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <ul className="flex 2xl:text-[30px] bg-[rgba(0,0,0,0.5)] rounded-[10px]">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            Intro
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                        ><Link to="https://blog.saumyas.com" className="nav-link">Blogs</Link>
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("skills")}
                        >
                            XP
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("contact")}
                        >
                            PM
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <motion.div
                 className="flex justify-left text-left mt-10 md:mt-20 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[50px] md:text-[120px] 2xl:text-[90px] leading-[50px] md:leading-[125px]  2xl:leading-[120px] font-oswald uppercase relative">
                        Founder by profession
                        <br className="invisible md:visible" />

                        Polymath by passion
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-4">
                        Hello👋, I'm{" "}
                        <span className="font-semibold">Saumya Shah,</span>
                    </div>
                    <div className="max-w-[510px]">
                        A polymath and outcome-driven founder
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}

                <motion.div
                    className="hidden md:flex gap-8 relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[60px] font-light">2</div>
                        <div className="leading-[42px]">
                            STARTUPS
                        </div>
                    </div>
                    {/* END */}

                    {/* START */}
                    <div className="flex items-center gap-3">
                        <div className="text-[60px] font-light">25+</div>
                        <div className="leading-[42px]">
                            PARTNERSHIPS
                        </div>
                    </div>
                    {/* END */}
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className=" 
                          w-[275px] h-[70px] 
                        md:w-[200px] md:h-[220px]          
                            
                        2xl:w-[400px] 2xl:h-[450px]         
                        absolute 
                        top-[400px] right-[2px]
                        md:top-[100px]                    
                        md:right-10 lg:right-0 2xl:right-0"


                    initial={{ y: 200, x: "-20%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={man} alt="" className=" object-cover rounded-2xl" />

                    {/* HIRE ME BUTTON START */}
                    <div
                        className="absolute top-[240px] -right-10 2xl:top-[440px] 2xl:-right-10 w-[110px] h-[110px] rounded-full bg-white/[0.7] flex flex-col justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90 rounded-lg"
                        onClick={() => scrollTo("contact")}
                    >
                        <img
                            src={externalLinkIcon}
                            alt=""
                            className="w-[20px]"
                        />
                        <div className="text-black">PM</div>
                    </div>
                    {/* HIRE ME BUTTON END */}
                </motion.div>
                {/* PERSON BLOCK END */}
            </Wrapper>
            <div style={socialIconsStyle}>
                <a href="https://www.linkedin.com/in/saumyashhah/" style={iconStyle}>
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/servalabs/" style={iconStyle}>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/saumyashhah/" style={iconStyle}>
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </div>
    );
};

export default HeroBanner;
