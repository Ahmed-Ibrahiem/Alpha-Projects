import Header_navbar from "../Header navbar/Header_navbar";

const Responsive_navbar = ({responsive_navbar}) => {
  return (
    <div
      className={`responsive_menu z-[50] absolute overflow-auto transition-all duration-300 top-[100%] left-[50%] translate-x-[-50%] w-[95%] bg-white shadow-gray-200 shadow-[0_0_10px] ${
        responsive_navbar ? "visible h-[178px]" : " h-0  invisible "
      } `}
    >
      <ul className="flex flex-col w-full ">
        <Header_navbar
          style={
            "p-[10px_20px] border-b-1 border-b-softSecondary transition-all duration-300 text-black hover:text-primary cursor-pointer"
          }
        />
      </ul>
    </div>
  );
};

export default Responsive_navbar;
