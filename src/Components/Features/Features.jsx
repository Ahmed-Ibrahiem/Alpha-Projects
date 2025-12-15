import { features_info } from "../../assets/assets";
import Feature_card from "../Feature Card/Feature_card";

const Features = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[30px] ">
      {features_info.map((feature_data, index) => {
        return <Feature_card key={index} feature_data={feature_data} />;
      })}
    </div>
  );
};

export default Features;
