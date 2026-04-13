const Header_search_box = ({ style }) => {
  return (
    <div
      className={`search_box w-[265px] h-[55px] rounded-[5px] gap-[10px] bg-gray-100 p-[20px] items-center justify-between ${style}`}
    >
      <input
        type="text"
        className="grow outline-none border-none text-[16px] text-gray-400"
        placeholder="Search..."
      />
      <i className="fa-solid fa-magnifying-glass text-[20px] text-secondary cursor-pointer"></i>
    </div>
  );
};

export default Header_search_box;
