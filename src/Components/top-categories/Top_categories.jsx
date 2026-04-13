import { categories_info } from "../../assets/assets";
import Section_header from "../section-header/Section_header";

const Top_categories = () => {
  return (
    <div className="pb-[100px]">
      <div className="container">
        <Section_header
          title={"Top Categories"}
          desc={"Top Categories you want to learn"}
        />

        <div className="categories  grid gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[50px]">
          {categories_info.map((categ) => {
            return (
              <div
                className="box bg-[#F1F3F8] cursor-pointer p-[30px] flex items-center gap-[20px] relative main-animate-card before:bg-secondary!"
                key={categ.id}
              >
                <img
                  src={categ.image}
                  className="w-[30px] lg:w-[40px] xl:w-[50px] h-[30px] lg:h-[40px] xl:h-[50px]"
                  alt=""
                />
                <h1 className="text-[18px] line-clamp-1 text-black font-extrabold lg:text-[16px] xl:text-[18px]">
                  {categ.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top_categories;
