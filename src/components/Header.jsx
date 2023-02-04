import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import header list menu
import { headerList } from "../Data";

const Header = () => {
  // menu open state
  const [menuOpen, setMenuOpen] = useState(false);

  // shadow header states
  const [shadowHeader, setShadowHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setShadowHeader(true);
      } else {
        setShadowHeader(false);
      }
    });
  });

  return (
    <header
      className={`header fixed top-0 left-0 z-50 w-full transition-all duration-400 ${
        shadowHeader ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        {/* header logo */}
        <Link
          to="/"
          className="header__logo text-[20px] font-extrabold text-gray-900"
        >
          Hexlab<span className="text-blue-600">.</span>
        </Link>

        {/* header menu */}
        <div
          className={`header__menu fixed right-[8%] top-20 w-[250px] origin-top-right rounded-3xl bg-white p-6 shadow-[0_0_16px_rgba(0,0,0,0.12)] transition-all duration-400 lg:static lg:right-0 lg:top-0 lg:flex lg:w-auto lg:scale-100 lg:items-center lg:gap-6 lg:bg-transparent lg:p-0 lg:shadow-none ${
            menuOpen ? "scale-100" : "scale-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col lg:mb-0 lg:flex-row lg:gap-6">
            {headerList.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.url}
                  className="header__item flex h-[52px] rounded-full p-4 text-[15px] font-medium text-gray-900 hover:bg-gray-100 lg:h-auto lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-600"
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>

          {/* header buttons */}
          <Link to="/" className="header__button button button-fill">
            Let's talk
          </Link>
        </div>

        {/* header toggle */}
        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] text-gray-900 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </header>
  );
};

export default Header;
