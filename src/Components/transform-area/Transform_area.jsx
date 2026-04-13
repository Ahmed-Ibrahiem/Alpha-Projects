import { transform_box_info } from "../../assets/assets";
import Section_header from "../section-header/Section_header";

const Transform_area = () => {
  return (
    <div className="transform_area my-[50px] py-[50px]">
      <div className="container">
        <Section_header
          title={"Transform Your Life"}
          desc={"Improving lives through learning"}
        />
        <div className="transform_area_content element-justify-between flex-wrap gap-[20px] md:gap-0 mt-[50px]">
          {transform_box_info.map((box) => {
            return (
              <div
                key={box.id}
                className="box flex flex-col gap-[20px] w-full md:w-[32%]  "
              >
                <img src={box.image} className="w-[35px]" alt="" />
                <h1 className="text-[20px] lg:text-[24px] line-clamp-1 text-black font-bold">
                  {box.title}
                </h1>
                <p className="text-[16px] lg:text-[18px] line-clamp-2 leading-[1.8] text-gray-400">
                  {box.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transform_area;
