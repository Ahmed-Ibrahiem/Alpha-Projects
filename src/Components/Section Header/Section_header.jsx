import React from "react";

const Section_header = ({ title, desc }) => {
  return (
    <div className="head elements-center-col gap-[10px]">
      <span className="text-[18px] text-primary">{title}</span>
      <h1 className="text-[22px] sm:text-[30px] text-center lg:text-[36px] text-black font-extrabold ">
        {desc}
      </h1>
    </div>
  );
};

export default Section_header;
