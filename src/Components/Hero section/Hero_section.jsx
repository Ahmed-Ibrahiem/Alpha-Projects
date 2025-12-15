import Master_button from "../Master button/Master_button";

const Hero_section = () => {
  return (
    <div className="relative bg-[#f9f6f2] ">
      <div className="content relative z-10  pt-[70px] pb-[120px] container  flex flex-col lg:flex-row items-center justify-between">
        {/* Start Content Search and master button */}
        <div className="banner_main_content flex flex-col gap-[20px] max-w-[100%] lg:max-w-[700px] ">
          <h1 className="text-[35px] text-center sm:text-[50px] lg:text-left xl:text-[58px] font-extrabold text-black ">
            <span className="text-secondary">3000+</span> Courses Upgrade Your
            Learning Skills and Upgrade Life
          </h1>
          <p className="text-[18px] text-gray-400">
            Learn 100% online with world class universities and industry experts
          </p>
          <div className="search_box w-full lg:w-[85%] flex flex-wrap gap-[20px] sm:gap-0 justify-center relative items-center">
            <div className="search relative grow">
              <input
                type="text"
                placeholder="Search our 10,000+ courses"
                className=" w-full p-[10px_20px] text-[14px] lg:p-[15px_30px] lg:text-[18px] bg-white pl-[40px] sm:pl-[40px] lg:pl-[40px] outline-none border-1 border-transparent focus:border-primary  transition-all duration-300 "
              />
              <i className="fa-solid fa-magnifying-glass absolute top-[50%] left-[10px] translate-y-[-50%] text-[18px] text-secondary "></i>
            </div>
            <Master_button text={"Search Now"} />
          </div>
        </div>
        {/* Start main banner image */}
        <div className="banner_img">
          <img src="/banner_image.png" alt="" />
        </div>

        {/* Shaps Part */}
        <div className="shap_one absolute z-[-1] top-0 left-[40%] w-[max(15vw,100px)] animate-one">
          <img src="/lamp_shap.png" alt="" />
        </div>
        <div className="shap_two absolute z-[-1] top-[40%] left-[40%] translate-[-40%_-40%]  w-[max(15vw,100px)] ">
          <img src="/shap_two.png" alt="" />
        </div>
        <div className="shap_three absolute z-[-1] top-[79%] left-[30%] translate-[-79%_-43%]  w-[max(10vw,80px)] animate-one">
          <img src="/shap_three.png" alt="" />
        </div>
      </div>
      <div className="elipse w-[0] h-[0] absolute right-[35%] top-[20%] shadow-[0_0_200px_50px] shadow-primary "></div>

      {/* Start Hero Section Footer */}
      <div
        className="text-white font-bold hero_section_footer flex items-center justify-center p-[10px_20px] rounded-[100px]
       bg-black absolute bottom-[20px] left-[50%] w-[95%] translate-x-[-50%] z-[11] lg:left-[30px] lg:translate-x-[0] lg:w-fit lg:bottom-[-30px]  "
      >
        <h1 className="text-[12px] lg:text-[20px]">
          <span className="text-[14px] lg:text-[32px]">405,879</span> people are
          learning on alpha today
        </h1>
      </div>
    </div>
  );
};

export default Hero_section;
