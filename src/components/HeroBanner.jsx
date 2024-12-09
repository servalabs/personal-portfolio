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
            className="w-full min-h-screen relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop w-[1120px] h-[1119px] absolute left-[1000px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop w-[1120px] h-[1119px] absolute left-[105px] top-[500px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR MOBILE START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR MOBILE END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-left justify-left mt-1 2xl:mt-4 relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-4" />
                        </div>
                        <div className="text-white">hi@saumyas.com</div>
                    </div>
                </motion.div>
                <motion.div
                    className="hidden md:flex items-center justify-center mt-0 2xl:mt-1 relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <ul className="flex text-lg 2xl:text-2xl bg-[rgba(0,0,0,0.2)] rounded-lg">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            Intro
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                        >
                            <Link to="https://blog.saumyas.com" className="nav-link">Blogs</Link>
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
                    <h1 className="text-[50px] md:text-[80px] 2xl:text-[90px] leading-[50px] md:leading-[90px] 2xl:leading-[100px] font-oswald uppercase text-white">
                        Founder by profession
                        <br className="hidden md:block" />
                        Polymath by passion
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-white relative"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-4">
                        Hello👋, I'm{" "}
                        <span className="font-semibold">Saumya Shah,</span>
                    </div>
                    <div className="max-w-[510px] mx-auto md:mx-0">
                        A polymath and outcome-driven founder
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* NUMBER BLOCK START */}
                <motion.div
                    className="flex gap-8 justify-center md:justify-start relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    {/* STARTUPS */}
                    <div className="flex items-center gap-3">
                        <div className="text-[40px] md:text-[60px] font-light text-white">2</div>
                        <div className="leading-tight text-white">
                            STARTUPS
                        </div>
                    </div>
                    {/* PARTNERSHIPS */}
                    <div className="flex items-center gap-3">
                        <div className="text-[40px] md:text-[60px] font-light text-white">25+</div>
                        <div className="leading-tight text-white">
                            PARTNERSHIPS
                        </div>
                    </div>
                </motion.div>
                {/* NUMBER BLOCK END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className="
                        w-[275px] md:w-[200px] lg:w-[300px] 2xl:w-[400px]
                        h-auto
                        absolute
                        top-[400px] md:top-[100px]
                        right-[2px] md:right-10 lg:right-0 2xl:right-0
                    "
                    initial={{ y: 200, x: "-20%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={man} alt="" className="object-cover rounded-2xl w-full" />

                    {/* HIRE ME BUTTON START */}
                    <div
                        className="
                            absolute
                            top-[240px] md:top-[240px] lg:top-[340px] 2xl:top-[440px]
                            -right-10
                            w-[80px] md:w-[110px]
                            h-[80px] md:h-[110px]
                            rounded-full
                            bg-white/[0.7]
                            flex flex-col justify-center items-center gap-1
                            backdrop-blur-sm
                            cursor-pointer
                            transition-transform
                            active:scale-90
                        "
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

            {/* SOCIAL ICONS START */}
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
            {/* SOCIAL ICONS END */}
        </div>
    );
};

export default HeroBanner;
