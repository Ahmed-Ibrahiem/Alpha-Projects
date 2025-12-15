import { Link } from "react-router-dom";

const Courses_card_style_two = ({ course_data }) => {
  return (
    <div className="card group shadow-(--card-shadow) relative main-animate-card ">
      <div className="top relative h-[170px] sm:h-[300px] md:h-[180px] elements-center-row overflow-hidden lg:h-[200px]! ">
        <img
          src={course_data.image}
          alt=""
          className=" min-w-[400px] group-hover:rotate-[-10deg] group-hover:scale-[1.1]   object-contain "
        />
        <div
          className={`price absolute right-0 bottom-0 rounded-[10px_0_0_0] w-[100px] h-[50px]
         elements-center-row bg-secondary text-white text-[22px] ms:text-[26px] font-bold ${
           course_data.price == 0 ? "bg-primary!" : ""
         } `}
        >
          <span>
            {course_data.price == 0 ? "Free" : `${course_data.price} $`}{" "}
          </span>
        </div>
      </div>
      <div className="course-info p-[20px] flex flex-col gap-[15px]">
        <div className="head flex-wrap gap-[5px] element-justify-between text-[14px] text-gray-400">
          <div className="students-count flex items-center gap-[10px] ">
            <i className="fa-solid fa-user-group text-secondary"></i>
            <span>{course_data.students} Students</span>
          </div>
          <div className="date flex items-center gap-[10px]">
            <i className="fa-solid fa-clock text-secondary "></i>
            <span>{course_data.date}</span>
          </div>
        </div>
        <Link
          className="text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[20px] font-bold text-black line-clamp-2 
        group-hover:text-primary leading-[1.3]"
        >
          {course_data.title}
        </Link>
        <p className="leading-[1.8] text-[16px] text-gray-400 line-clamp-4">
          {course_data.description}
        </p>
      </div>
    </div>
  );
};

export default Courses_card_style_two;
