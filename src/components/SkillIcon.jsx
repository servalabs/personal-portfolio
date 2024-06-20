import React from "react";

const SkillIcon = ({ path }) => {
    return (
        <div className="flex items-center justify-center w-[10px] md:w-[90px] 2xl:w-[110px] h-[70px] md:h-[90px] 2xl:h-[110px] rectangle rounded-lg bg-[#292929]">
            <img src={path} className="w-[34px] md:w-[100px] 2xl:w-[200px] h-[60px]" />
        </div>
    );
};

export default SkillIcon;
