import Master_button from "../master-button/Master_button";
import Header_navbar from "../header-navbar/Header_navbar";
import Header_search_box from "../header-search-box/Header_search_box";
import { useEffect, useState } from "react";
import Responsive_actions from "../responsive-actions/Responsive_actions";
import Responsive_buttons from "../responsive-buttons/Responsive_buttons";
import Responsive_navbar from "../responsive-navbar/Responsive_navbar";

const Header = () => {
  const [responsive_navbar, set_responsive_navbar] = useState(false);
  const [responsive_actions, set_responsive_actions] = useState(false);
  const [header_is_sticky, set_header_is_sticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        set_header_is_sticky(true);
      } else {
        set_header_is_sticky(false);
      }
    });
  }, []);

  const toggle_responsive_navbar_status = () => {
    set_responsive_navbar(!responsive_navbar);
    // close responsive_navbar
    set_responsive_actions(false);
  };

  const toggle_responsive_actionsr_status = () => {
    set_responsive_actions(!responsive_actions);
    set_responsive_navbar(false);
  };

  return (
    <div className={`${header_is_sticky ? "h-[77px]" : ""}`}>
      <header
        className={`header py-[20px] xl:py-[10px] bg-white ${
          header_is_sticky
            ? "fixed z-[999] top-0 left-0 w-full transition duration-300 animate-FadeInDown"
            : "relative"
        }`}
      >
        <div className="container relative flex items-center justify-between  ">
          <div className="left_part flex items-center gap-[50px]">
            <div className="logo_box w-[100px] md:w-[140px] object-contain  ">
              <img src="/logo.png" className="max-w-[100%] " alt="" />
            </div>
            <Header_search_box style={`hidden sm:hidden xl:flex`} />
          </div>
          {/* set navbar */}
          <nav className="hidden xl:flex">
            <ul className="flex items-center gap-[30px]">
              <Header_navbar
                style={
                  "text-black md:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-all durati py-[25px]"
                }
              />
            </ul>
          </nav>
          {/* Login and account */}
          <div className="right_part hidden xl:flex items-center gap-[30px]">
            {/* set master buttom */}
            <Master_button text={"Get Start"} />
            <button
              className=" w-[35px] h-[35px] border-1 border-gray-600 rounded-[50%] flex items-center hover:text-white
          justify-center text-[16px] hover:bg-primary hover:border-primary transition duration-300 cursor-pointer text-black"
            >
              <i className="fa-regular fa-user"></i>
            </button>
          </div>
          {/* Responsive Elements */}
          <Responsive_buttons
            responsive_navbar={responsive_navbar}
            toggle_responsive_actionsr_status={
              toggle_responsive_actionsr_status
            }
            toggle_responsive_navbar_status={toggle_responsive_navbar_status}
          />
          <Responsive_navbar responsive_navbar={responsive_navbar} />
          <Responsive_actions responsive_actions={responsive_actions} />
        </div>
      </header>
    </div>
  );
};

export default Header;
