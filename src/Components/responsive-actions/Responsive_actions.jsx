import Master_button from "../master-button/Master_button";
import Header_search_box from "../header-search-box/Header_search_box";

const Responsive_actions = ({ responsive_actions }) => {
  return (
    <div
      className={`responsive_menu z-[50] xl:hidden absolute overflow-auto p-[20px] flex flex-col items-center justify-center gap-[20px] transition-all 
    duration-500 top-[100%] left-[50%] translate-x-[-50%] w-[95%] bg-white shadow-gray-200 shadow-[0_0_10px] ${
      responsive_actions
        ? "visible opacity-100 scale-x-[1]"
        : "opacity-0 scale-x-0 invisible"
    } `}
    >
      <Master_button text={"Get Start"} />
      <button
        className=" w-[35px] h-[35px] border-1 border-gray-600 rounded-[50%] flex items-center hover:text-white
          justify-center text-[16px] hover:bg-primary hover:border-primary transition duration-300 cursor-pointer text-black"
      >
        <i className="fa-regular fa-user"></i>
      </button>
      <Header_search_box style={`w-full flex`} />
    </div>
  );
};

export default Responsive_actions;
