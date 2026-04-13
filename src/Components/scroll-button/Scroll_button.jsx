import { useEffect, useState } from "react";

const Scroll_button = () => {
  const [is_scroll, set_is_scroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 600) {
        set_is_scroll(true);
      } else {
        set_is_scroll(false);
      }
    });
  }, []);

  const scroll_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scroll_to_top}
      className={`text-[20px] text-white bg-primary rounded-[50%] fixed bottom-[50px] right-[50px]
                w-[45px] h-[45px] elements-center-row z-[50] shadow-[0_0_10px] shadow-softPrimary
                cursor-pointer duration-300 transition ${
                  is_scroll ? "visible opacity-100" : "opacity-0 invisible"
                }`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default Scroll_button;
