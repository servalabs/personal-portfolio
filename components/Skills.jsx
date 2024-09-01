import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.jpg";
import sk2 from "../assets/sk-2.jpg";
import sk3 from "../assets/sk-3.jpg";
import sk4 from "../assets/sk-4.jpg";
import sk5 from "../assets/sk-5.jpg";
import sk6 from "../assets/sk-6.jpg";
import sk7 from "../assets/sk-7.jpg";
import sk8 from "../assets/sk-8.jpg";
import sk9 from "../assets/sk-9.jpg";
import sk10 from "../assets/sk-10.jpg";
import sk11 from "../assets/sk-11.jpg";
import sknode from "../assets/sk-12.jpg";
import skmongo from "../assets/sk-13.jpg";
import skkotlin from "../assets/sk-14.jpg";
import skjava from "../assets/sk-15.jpg";
import skgit from "../assets/sk-16.jpg";
import skmysql from "../assets/sk-17.jpg";
import skpython from "../assets/sk-18.jpg";
import net from "../assets/sk-19.jpg";
import cicd from "../assets/sk-20.jpg";

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
            className="bg-[#111111] py-[100px] md:py-[200px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                { 
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sknode} />
                    <SkillIcon path={skmongo} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk1} />
                    <SkillIcon path={skkotlin} />
                    <SkillIcon path={skjava} />
                    <SkillIcon path={skgit} />
                    <SkillIcon path={skmysql} />
                    <SkillIcon path={skpython} />
                    <SkillIcon path={net} />
                    <SkillIcon path={cicd} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} /> 
                </Div>
                   }

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                    <Service
                            num="1"
                            title="Servalabs (2024-Present)"
                            desc="An interesting venture, I'm trying to democratize AI and compute power while making it such that people buy for actual features and convenience AND in the process they become independent."
                            data={[
                                "Founder",
                                "Homeserver",
                                "Docker",
                                "Self Hosting",
                                "Smart Homes",
                            ]}
                        />
                                                <Service
                            num="2"
                            title="TechGG (2021-Present)"
                            desc="Helping companies in product development and post-production reviews while occasionally posting on the website."
                            data={[
                                "Founder",
                                "Product Design",
                                "Marketing",
                            ]}
                        />
                         <Service
                            num="3"
                            title="Consultant"
                            desc="Helped various companies in marketing, efficient utitlization of review units and helped them get asymmetric returns."
                            data={[
                                "Marketing",
                                "Media Reviews"

                            ]}
                        />            
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
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
                {/* SERVICES SECTION END */}

              {/*<Portfolio /> to be reinstated once I actually have something*/}
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
