import React from "react";
import { seccess_box } from "../../assets/assets";

const Success_boxs = () => {
  return (
    <>
      {seccess_box.map((box) => {
        return (
          <div
            key={box.id}
            className="success_box relative  flex flex-col gap-[5px] my-[25px] p-[20px] pl-[102px] xl:pl-[132px] bg-white"
          >
            <div
              className={`icon absolute w-[65px] top-[-30px] left-[20px] rounded-[10px] xl:w-[92px] h-[120px] elements-center-row 
                ${
                  box.color === "color-1"
                    ? "bg-linear-[29.39deg,#ff6573_3.66%,#fba290_95.47%]"
                    : ""
                }
                ${
                  box.color === "color-2"
                    ? "bg-linear-[29.39deg,#718a96_3.66%,#9cbdc8_95.47%]"
                    : ""
                }
                ${
                  box.color === "color-3"
                    ? "bg-linear-[29.39deg,#5c8db9_3.66%,#b6dcf2_95.47%]"
                    : ""
                }
                ${
                  box.color === "color-4"
                    ? "bg-linear-[29.39deg,#8963cc_3.66%,#bea1f9_95.47%]"
                    : ""
                }
                `}
            >
              <img src={box.icon} alt={box.title} className="max-w-[50%] " />
            </div>
            <h1 className="text-[22px] md:text-[26px] font-extrabold text-black">
              {box.counter}
            </h1>
            <p className="text-gray-400 text-[14px] md:text-[18px]">
              {box.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Success_boxs;
