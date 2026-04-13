import { useState } from "react";
import { Link } from "react-router-dom";
const Header_navbar = ({ style }) => {
  const initial_value = ["Home", "Courses", "Blogs", "About Us", "Contact Us"];

  const [menu, set_menu] = useState(initial_value);

  return (
    <>
      {menu.map((link, index) => {
        return (
          <li className={`${style} ${index == menu.length - 1 && 'border-none'}` } key={index}>
            <Link className="w-full inline-block" to={`${link.split(" ").join("_").toLocaleLowerCase()}`}>
              {link}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Header_navbar;
