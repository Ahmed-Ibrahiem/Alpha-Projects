import { Swiper } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Custom_swiper = ({ children, style, ...props }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      {...props}
      className={`cursor-grab ${style}`}
    >
      {children}
    </Swiper>
  );
};

export default Custom_swiper;
