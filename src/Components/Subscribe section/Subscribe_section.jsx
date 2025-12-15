import subscribe_image from "../../assets/subscribe_image.png";
import Master_button from "../Master button/Master_button";
import loading from "../../assets/loading.png";

const Subscribe_section = () => {
  return (
    <div className="subscribe_area my-[50px]">
      <div className="container relative py-[50px] xl:py-0 md:px-[90px]! bg-linear-[29.39deg,#FF6573_3.66%,#FBA290_95.47%] lg:px-[90px] elements-center-row flex-wrap
      gap-[20px] lg:gap-0">
        <div className="left w-[100%] lg:w-[57%] text-white flex flex-col gap-[20px]">
          <h3 className="text-[24px] md:text-[30px] w-[90%] lg:text-[36px] font-bold">
            Subscribe to our Newsletter
          </h3>
          <p className="text-[16px] lg:text-[18px] w-[90%] ">
            Break into a new field like information technology or data science.
          </p>
          <form
            onSubmit={(e) => e.defaultPrevented()}
            className="search_box max-w-[550px] flex items-center gap-[20px] flex-wrap"
          >
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="text-[16px] lg:text-[18px] bg-white h-full p-[15px_30px] outline-0 text-black "
            />
            <Master_button
              text={"Subscribe"}
              style={"bg-black! bg-linear-0!"}
            />
          </form>
        </div>
        <div className="right w-[100%] lg:w-[43%] ">
          <img
            src={subscribe_image}
            alt="subscribe_image"
            className="h-full w-full"
          />
        </div>
        <div className="shap_two hidden md:block absolute z-[0] top-[-25px] left-[50%] translate-x-[-50%]  w-[50px]  loading">
          <img src={loading} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe_section;
