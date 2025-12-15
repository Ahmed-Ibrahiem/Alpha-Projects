import { Link } from "react-router-dom";
import apple_store from "../../assets/apple-store.jpg";
import google_play from "../../assets/google-play.jpg";
const Footer = () => {
  const center_of_footer = [
    {
      title: "Our Company",
      links: [
        "Our Company",
        "About Us",
        "Contact Us",
        "Community",
        "Student Perks",
      ],
    },
    {
      title: "About Us",
      links: ["HTML", "Design", "JavaScript", "Development", "Art & Design"],
    },
    {
      title: "About Us",
      links: [
        "Web Development",
        "Web Design",
        "Life Skills",
        "Health & Food",
        "Business",
      ],
    },
  ];
  return (
    <div className="mt-[100px] bg-[#F5F6F9] px-0 pt-[100px] md:px-[50px] lg:px-[100px]">
      <div className="container flex gap-[40px] flex-wrap">
        <div className="left w-full lg:w-[33.33%] text-[16px] md:text-[18px] text-gray-400 flex flex-col gap-[20px]">
          <img
            src="/logo.png"
            className="h-[50px] object-contain w-fit"
            alt=""
          />
          <p>
            Break into a new field like information technology or data prior
            experience necessary.
          </p>
          <p>
            <span className="text-black">Location :</span> 32D, Jenmark road,
            Franklin. USA
          </p>
          <p>
            {" "}
            <span className="text-black">Phone :</span> +11 0988 1234 5678
          </p>
          <p>
            <span className="text-black">Email :</span> contact@info.com
          </p>
          <div className="social_media flex items-center gap-[10px] flex-wrap">
            <Link className="w-[40px] h-[40px] text-[18px] elements-center-row text-white bg-gray-500 hover:bg-primary hover:rounded-[5px]">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link className="w-[40px] h-[40px] text-[18px] elements-center-row text-white bg-gray-500 hover:bg-primary hover:rounded-[5px]">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link className="w-[40px] h-[40px] text-[18px] elements-center-row text-white bg-gray-500 hover:bg-primary hover:rounded-[5px]">
              <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link className="w-[40px] h-[40px] text-[18px] elements-center-row text-white bg-gray-500 hover:bg-primary hover:rounded-[5px]">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
        <div className="center grow flex flex-wrap justify-between gap-[40px] ">
          {center_of_footer.map((box, box_in) => {
            return (
              <div key={box_in} className="div group">
                <h1 className="text-[18px] lg:text-[20px] font-bold text-black pb-[15px] mb-[25px] relative footer-head-amimate w-fit group-hover:before:w-full duration-200 ">
                  {box.title}
                </h1>
                <ul className="text-[16px] lg:text-[18px] text-gray-400 flex flex-col gap-[20px]">
                  {box.links.map((link , link_in) => {
                    return (
                      <li
                        className="hover:text-primary duration-100"
                        key={link_in}
                      >
                        <Link>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="group">
            <h1 className="text-[18px] lg:text-[20px] font-bold text-black pb-[15px] mb-[25px] relative footer-head-amimate w-fit group-hover:before:w-full duration-200 ">
              Download App
            </h1>
            <ul className="text-[16px] lg:text-[18px] text-gray-400 flex flex-col gap-[20px]">
              <li>
                <Link>
                  <img src={apple_store} alt="apple_store" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={google_play} alt="google_play" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="copy_right w-full text-center text-gray-400 text-[16px] lg:text-[18px] mt-[50px] py-[30px]
        border-t-2 border-gray-200"
        >
          <p>
            © <span className="text-black">Alpha</span> All Rights Reserved by
            <span className="text-primary"> HiTailwind.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
