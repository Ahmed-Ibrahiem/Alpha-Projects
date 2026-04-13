
const Responsive_buttons = ({
  toggle_responsive_actionsr_status,
  toggle_responsive_navbar_status,
  responsive_navbar,
}) => {
  return (
    <div className="flex items-center justify-center gap-[20px] xl:hidden ">
      <button
        className=" text-[30px] cursor-pointer text-black "
        onClick={toggle_responsive_actionsr_status}
      >
        <i className="fa-solid fa-ellipsis"></i>
      </button>
      <button
        onClick={toggle_responsive_navbar_status}
        className="responsive_navbar_btn text-[25px] cursor-pointer text-black"
      >
        <i
          className={`${
            responsive_navbar ? "fa-solid fa-xmark" : "fa-solid fa-bars"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default Responsive_buttons;
