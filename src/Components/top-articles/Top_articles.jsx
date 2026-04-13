import Section_header from "../section-header/Section_header";
import Master_button from "../master-button/Master_button";
import Article_box from "../articles-box/Article_box";
import { articles_info } from "../../assets/assets";

const Top_articles = () => {
  return (
    <div>
      <div className="container elements-center-col">
        <Section_header
          title={"Top Articles"}
          desc={"Want To Learn More? Read Blog"}
        />
        <Master_button text={"View All"} />
        <div className="boxs mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {articles_info.map((article) => {
            return <Article_box key={article.id} article_data={article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Top_articles;
