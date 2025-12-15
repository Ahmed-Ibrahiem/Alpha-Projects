import { Link } from "react-router-dom";
import instructor_image from "../../assets/Instructor_image.png";
import Master_button from "../Master button/Master_button";
import loading from '../../assets/loading.png'


const Instructor_area = () => {
  return (
    <div className="my-[50px] ">
      <div className="container relative max-w-[95%] elements-center-row py-[50px] px-[30px] flex-wrap bg-[#f5f6f9] gap-[20px] md:gap-0">
        <div className="left relative z-[5] w-full md:w-[45%]">
          <img src={instructor_image} alt="" />
        </div>
        <div className="right relative z-[5] w-full md:w-[55%] elements-center-row">
          <div className="content md:pl-[100px] lg:pl-[180px] flex flex-col gap-[20px]">
            <Link className="text-[18px] text-primary">Join as instructor</Link>
            <h1 className="text-[26px] sm:text-[30px] lg:text-[36px] text-black font-extrabold ">
              Become an instructor Join the millions learning
            </h1>
            <Master_button text={"Start Teaching Today"} />
          </div>
        </div>
        {/* Start Shaps */}
        <div className="shap_two hidden md:block absolute z-[0] top-[50%] left-[40%] translate-[-50%_-50%]  w-[max(12vw,90px)] animate-one ">
          <img src="/shap_two.png" alt="" />
        </div>
        <div className="shap_two hidden md:block absolute z-[0] top-[30%] left-[40%] translate-[-30%_-40%]  w-[50px]  loading">
          <img src={loading} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instructor_area;
