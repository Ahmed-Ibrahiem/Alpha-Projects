import { Link } from "react-router-dom";

const Feature_card = ({ feature_data }) => {
  return (
    <div
      className="feature_card group flex cursor-pointer relative z-20 flex-col gap-[20px] p-[30px] h-fit sm:h-[420px] w-[100%] bg-[#F5F6F9]
     main-animate-card "
    >
      <div className="img_box flex items-center justify-center relative  w-[100px] h-[100px] ">
        <img
          src={feature_data.icon}
          className=" relative z-[5] object-contain w-[50px] "
          alt={feature_data.title}
        />
        {/* shap */}
        <img
          src={feature_data.shap}
          className="  object-contain absolute top-[-10px] left-[-10px] "
          alt=""
        />
      </div>
      <h1 className="text-[26px]  text-black font-bold sm:line-clamp-2">
        {feature_data.title}
      </h1>
      <p className="text-[18px] text-gray-600 sm:line-clamp-4 ">
        {feature_data.desc}
      </p>
      <Link
        className="text-primary font-bold text-[18px] sm:absolute sm:bottom-[20px] sm:left-[30px] 
        group-hover:tracking-[0.5px] group-hover:scale-[1.01] transition-all duration-300
      "
      >
        Start Now
      </Link>
    </div>
  );
};

export default Feature_card;
