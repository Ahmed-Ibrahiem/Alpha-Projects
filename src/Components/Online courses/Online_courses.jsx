import React from "react";
import Opportunities_card from "../Opportunities card/Opportunities_card";
import { opportunities_cards_info } from "../../assets/assets";

const Online_courses = () => {
  return (
    <div className="container py-[100px] mx-auto ">
      <div className="online_courses_area element-justify-between flex-wrap gap-[20px] lg:gap-0">
        <div className="left w-full lg:w-[43%]">
          <p className="text-[18px] text-primary mb-[20px]">
            Over 6000+ learning programs available
          </p>
          <h1 className="leading-[1.4] text-[30px] mb-[20px] sm:text-[36px] font-extrabold text-balance text-black">
            Flexible online
            <span className="relative underline_theme"> courses& </span>
            learning skill growth
          </h1>
          <span className="leading-[1.8] text-[18px] block mb-[20px] text-gray-400">
            Step into the world of modern education — learn coding, design,
            marketing, and more. Build real-world skills at your pace with
            expert-led lessons and lifetime access.
          </span>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-start gap-[10px] text-[18px] text-black ">
              <i className="fa-solid fa-check-double pt-[5px] text-primary"></i>
              <p>Learn anywhere, anytime with full flexibility</p>
            </div>
            <div className="flex items-start gap-[10px] text-[18px] text-black ">
              <i className="fa-solid fa-check-double pt-[5px] text-primary"></i>
              <p>Get certificates to boost your professional profile</p>
            </div>
          </div>
        </div>
        <div className="right relative w-full lg:w-[57%] pl-0 lg:pl-[30px] xl:pl-[100px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2! gap-[20px]">
          {opportunities_cards_info.map((card_info, index) => {
            return (
              <Opportunities_card
                key={index}
                card_info={card_info}
                style={index == 0 ? "lg:mb-[70px]" : "lg:mt-[70px]"}
              />
            );
          })}
          <div className="elipse w-[0] z-0 h-[0] absolute left-[50%] top-[50%]  shadow-[0_0_200px_50px] shadow-primary "></div>
        </div>
      </div>
    </div>
  );
};

export default Online_courses;
