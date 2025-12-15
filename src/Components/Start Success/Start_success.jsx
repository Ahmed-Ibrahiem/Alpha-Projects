import Section_header from "../Section Header/Section_header";
import success_image from "../../assets/success_image.png";
import Success_boxs from "../Success boxs/Success_boxs";

const Start_success = () => {
  return (
    <div className="py-[100px] bg-[#F2F0EF] ">
      <div className="container">
        <Section_header
          title={"Start To Success"}
          desc={"Start your journey & Achieve your goal"}
        />
        <div className="success_area elements-center-row flex-wrap">
          <div className="left w-[100%] lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[20px] gap-x-[30px] ">
            <Success_boxs />
          </div>
          <div className="right w-[100%] lg:w-[50%] relative">
            <img
              src={success_image}
              alt="Success Image"
              className="relative z-[5]"
            />
            <div className="elipse w-[0] z-0 h-[0] absolute left-[50%] top-[50%]  shadow-[0_0_200px_50px] shadow-primary "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start_success;
