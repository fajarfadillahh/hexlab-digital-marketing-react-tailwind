import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import header list menu
import { headerList } from "../Data";

const Header = () => {
  // menu open state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 z-50 w-full">
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
          className={`header__menu fixed right-[8%] top-20 w-[250px] origin-top-right rounded-3xl bg-white p-6 shadow-[0_0_16px_rgba(0,0,0,0.12)] transition-all duration-400 ${
            menuOpen ? "scale-100" : "scale-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col">
            {headerList.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.url}
                  className="header__item flex h-[52px] rounded-full p-4 text-[15px] font-medium text-gray-900 hover:bg-gray-100"
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
          className="header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </header>
  );
};

export default Header;
