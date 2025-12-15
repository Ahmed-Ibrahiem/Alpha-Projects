const Master_button = ({ text , style }) => {
  return (
    <button
      className={`p-[10px_20px] text-[14px] lg:p-[15px_30px] lg:text-[18px] bg-linear-[90deg,#fd1e43_0%,#f4197d_100%] text-white font-medium  cursor-pointer relative before:w-[100%] 
            before:h-[100%] before:absolute  before:content-[''] before:left-0 before:bottom-[-100%] before:bg-secondary before:rounded-[50%]
           hover:before:bottom-0 hover:before:rounded-[0] before:transition-all before:duration-500 overflow-hidden before:z-0 
           drop-shadow-[-5px_15px_30px] drop-shadow-softPrimary hover:drop-shadow-softSecondary transition-all duration-300 w-fit
           ${style}`}
    >
      <span className=" relative z-10">{text}</span>
    </button>
  );
};

export default Master_button;
