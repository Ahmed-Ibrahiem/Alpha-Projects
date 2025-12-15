import { Link } from "react-router-dom";
import { courses } from "../../assets/assets";
import Courses_card_style_two from "../Course Card Style Two/Courses_card_style_two";
import Section_header from "../Section Header/Section_header";

const Popular_courses_two = () => {
  return (
    <div className="popular_courses_two_area">
      <div className="container py-[50px]">
        <Section_header
          title={"Popular Courses"}
          desc={"Enhance your skills with best Online courses"}
        />
        <div className="courses mt-[50px] max-w-[100%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]">
          {courses.map((course_info) => {
            return (
              <Courses_card_style_two
                key={course_info.id}
                course_data={course_info}
              />
            );
          })}
        </div>
        <h1 className="text-[18px] text-gray-400 mt-[50px] mx-auto w-fit text-center">
          Career & we will guide you through that.{" "}
          <Link className="text-secondary">Register Free Now!</Link>
        </h1>
      </div>
    </div>
  );
};

export default Popular_courses_two;
