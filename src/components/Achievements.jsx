import React from "react";
import { achievements } from "../data";
import NumInc from "./NumInc";
import dashedCircle from "../assets/dashed-circle.jpg";
import Div from "./Div";

const Achievements = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[25px] 2xl:gap-[50px] p-[20px]  relative">
            {achievements.map((item) => (
                <Div
                    key={item.id}
                    className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px]"
                >
                    <img
                        src={dashedCircle}
                        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
                    />
                    <div className="flex items-center text-white relative">
                        <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
                            <div className="text-[54px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex">
                                <NumInc num={item.year} />+
                            </div>
                            <div
                                className="text-[24px] lg:text-[18px] leading-[28px] lg:leading-[26px] text-[#AAAAAA] md:text-white"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                        </div>
                    </div>
                </Div>
            ))}
        </div>
    );
};

export default Achievements;
