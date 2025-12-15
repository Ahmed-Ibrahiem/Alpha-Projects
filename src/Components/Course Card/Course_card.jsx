import React from "react";
import { Link } from "react-router-dom";

const Course_card = ({ course_data }) => {
  return (
    <div className="course group flex-wrap w-[100%] sm:min-w-[350px] sm:w-[30%] sm:max-w-[90%] relative main-animate-card flex flex-col grow gap-[20px] bg-white ">
      <Link className="box_img w-[100%] h-[240px] overflow-hidden before:duration-700! relative">
        <img
          src={course_data.image}
          alt=""
          className=" object-contain "
        />
      </Link>

      <div className="card_info absolute bottom-[160px]  mx-auto w-[90%] p-[20px] self-center bg-white shadow-[3px_3px_10px] shadow-gray-200   ">
        <div className="title flex items-center gap-[10px] mb-[15px] ">
          <div className="w-[30px] h-[30px] rounded-[50%] elements-center-row bg-secondary text-white text-[14px] ">
            <i className="fa-solid fa-user"></i>
          </div>
          <p className="text-18px text-gray-400">{course_data.instructor}</p>
        </div>
        <Link className="text-[20px] sm:text-[24px] font-bold text-black hover:text-primary ">
          {course_data.title}
        </Link>
        <div
          className={`price w-[70px] h-[70px] absolute top-[-35px] right-[20px] elements-center-row bg-secondary text-white text-[20px]
         rounded-[50%] font-bold group-hover:bg-primary group-hover:transform-[rotateY(360deg)] duration-500! shadow-[1px_1px_10px] shadow-gray-200 ${
           course_data.price == 0 ? "bg-primary!" : ""
         }`}
        >
          <span>
            {course_data.price == 0 ? "Free" : `${course_data.price} $`}{" "}
          </span>
        </div>
      </div>

      <div className="desc mt-[100px] text-[18px]  text-gray-400 line-clamp-2 px-[20px] ">
        {course_data.description}
      </div>
      <div className="footer text-gray-400 m-[20px] mt-0 pt-[20px] element-justify-between border-t-1 border-gray-200">
        <div className="date flex items-center gap-[10px]">
          <i className="fa-solid fa-clock  text-secondary"></i>
          <span>{course_data.date}</span>
        </div>
        <div className="students flex items-center gap-[10px] ">
          <i className="fa-solid fa-people-group text-secondary"></i>
          <span>{course_data.students} Students</span>
        </div>
      </div>
    </div>
  );
};

export default Course_card;
