const Opportunities_card = ({ card_info, style }) => {
  return (
    <div
      className={` box_one max-h-fit sm:h-[350px] elements-center-col mx-[5px]
       shadow-[0px_4px_25px] shadow-[rgba(34,86,102,0.07)] group p-[40px_20px] z-10
        relative main-animate-card text-center elements-center-col gap-[20px] bg-white
        ${style}`}
    >
      <div
        className="icon elements-center-row w-[70px] h-[70px] rounded-[10px]
             text-[36px] text-primary bg-[#c242601a] group-hover:text-white group-hover:bg-secondary"
      >
        <i className={`fa-solid fa-${card_info.icon}`}></i>
      </div>
      <h1 className="text-[20px] sm:text-[22px] xl:text-[24px] text-black font-bold leading-[1.3] w-[70%] ">
        {card_info.title}
      </h1>
      <p className="text-[16px] lg:text-[18px] text-gray-400 leading-[1.8] line-clamp-2 ">
        {card_info.description}
      </p>
    </div>
  );
};

export default Opportunities_card;
