import React from "react";

const SkillIcon = ({ path }) => {
 return (
 <div className="flex items-center justify-center w-[80px] md:w-[90px] 2xl:w-[110px] h-[80px] md:h-[90px] 2xl:h-[110px] rectangle rounded-lg bg-[#292929]">
 <img src={path} className="w-[74px] md:w-[10px] 2xl:w-[200px] h-[60px]" />
 </div>
 );
};

export default SkillIcon;