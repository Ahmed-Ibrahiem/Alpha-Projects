import { Link } from "react-router-dom";
import pepular_courses_shap from "../../assets/pepular_courses_shap.png";
import Course_card from "../course-card/Course_card";
import { courses } from "../../assets/assets";
import Section_header from "../section-header/Section_header";

const Popular_Courses = () => {
  return (
    <div className="py-[100px] relative mt-[100px] bg-section-background  ">
      <img
        src={pepular_courses_shap}
        alt="pepular_courses_shap"
        className="h-[200px] object-contain absolute top-[-150px] left-[200px] "
      />
      <div className="elements-center-col gap-[50px] container ">
        <Section_header
          title={"Popular Courses"}
          desc={"Discover Your Perfect Program In Our Courses"}
        />
        <div className="courses  flex-wrap mx-auto  gap-[30px] flex elements-justify-center justify-center ">
          {courses.map((course_data, index) => {
            if (index < 3)
              return (
                <Course_card key={course_data.id} course_data={course_data} />
              );
          })}
        </div>
      </div>
      <div className="declaration mt-[50px] max-w-[60%] mx-auto">
        <h1 className="text-[18px] text-gray-400 text-center">
          Enjoy the top notch learning methods and achieve next level skills!
          You are the creator of your own career & we will guide you through
          that.{" "}
          <Link className="text-secondary font-medium ">
            Register Free Now!
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Popular_Courses;
