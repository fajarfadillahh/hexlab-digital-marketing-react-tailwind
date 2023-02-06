import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scrolltop fixed right-6 z-50 inline-flex cursor-pointer rounded-lg bg-blue-600 p-3 text-[1.5rem] text-white transition-all duration-400 hover:bg-blue-800 2xl:right-10 ${
        scrollVisible ? "bottom-12 2xl:bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </div>
  );
};

export default ScrollToTop;
