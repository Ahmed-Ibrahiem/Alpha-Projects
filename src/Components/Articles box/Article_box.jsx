import { Link } from "react-router-dom";
import my_img from "../../assets/articlate_1.jpg";

const Article_box = ({ article_data }) => {
  return (
    <Link className="box group">
      <div className="top relative h-fit">
        <div className="box_img  mb-[40px] h-[250px] overflow-hidden elements-center-row">
          <img
            src={article_data.image}
            alt={article_data.title}
            className="min-h-[400px]! min-w-[400px]! cursor-pointer object-contain "
          />
        </div>
        <span className="p-[8px_20px] text-[16px] text-white bg-secondary absolute bottom-[-20px] right-[20px]">
          {article_data.date}
        </span>
      </div>
      <h1
        className="text-[20px] md:text-[22px] xl:text-[24px] font-bold text-black leading-[1.4] block mb-[20px]
      group-hover:text-primary"
      >
        {article_data.title}
      </h1>
      <div className="flex items-center gap-[10px] text-[16px] text-gray-400">
        <i className="fa-solid fa-user text-primary "></i>
        <span>By {article_data.author}</span>
      </div>
    </Link>
  );
};

export default Article_box;
