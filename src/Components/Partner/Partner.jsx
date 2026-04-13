import { SwiperSlide } from "swiper/react";
import { partner_info } from "../../assets/assets";
import Custom_swiper from "../custom-swiper/Custom_swiper";
import { Link } from "react-router-dom";
const Partner = () => {
  return (
    <div>
      <div className="partner container md p-[100px_0] flex flex-col gap-[40px] items-center justify-center ">
        <Custom_swiper
          style={
            "flex  text-center container active:cursor-grabbing"
          }
          breakpoints={{
            300: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1250: { slidesPerView: 5 },
            1450: { slidesPerView: 6 },
          }}
        >
          {partner_info.map((partner, index) => {
            return (
              <SwiperSlide
                className="flex! justify-center items-center py-[20px]"
                key={index}
              >
                <img src={partner.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Custom_swiper>
        <div className="text text-center text-[18px] flex justify-center items-center text-gray-400  ">
          <h1 className="w-[90%] text-center">
            Access 5,000+ courses, 100+ SkillSets and 1,900+ Guided Projects
            from top universities and companies.{" "}
            <Link className="font-bold text-primary">Apply Now!</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Partner;
