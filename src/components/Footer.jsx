import React from "react";
import { Link } from "react-router-dom";

// react icons
import {
  RiGithubFill,
  RiInstagramFill,
  RiMoonClearFill,
  RiSunFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

// import custom use color mode hooks
import useColorMode from "../hooks/useColorMode";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <footer className="footer bg-gray-900 pt-24 pb-8">
      <div className="subscribe__container container grid gap-20 2xl:max-w-5xl">
        <div className="subscribe__group grid gap-12 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:justify-items-center">
          <div className="subscribe__content">
            <Link
              to="/"
              className="subscribe__content-logo text-[28px] font-bold text-white"
            >
              Hexlab<span className="text-blue-600">.</span>
            </Link>
            <p className="subscribe__content-text section-text pt-2 text-white">
              Hexlab is digital agency that has evolved to the meet changing
              needs of marketing in the digital age.
            </p>
            <div
              className="footer__theme mt-8 inline-flex h-[52px] cursor-pointer items-center gap-2 rounded-full bg-blue-600 p-4 font-semibold text-white hover:bg-blue-800"
              onClick={() =>
                setColorMode(colorMode === "light" ? "dark" : "light")
              }
            >
              {colorMode === "light" ? (
                <RiMoonClearFill className="inline-flex text-[1.8rem]" />
              ) : (
                <RiSunFill className="inline-flex text-[1.8rem]" />
              )}
              Theme toggle.
            </div>
          </div>

          <div className="subscribe__content">
            <h3 className="subscribe__content-title pb-4 text-[28px] font-bold text-white">
              About<span className="text-blue-600">.</span>
            </h3>

            <ul className="subscribe__content-list flex flex-col gap-2">
              {[
                ["About us", "/about"],
                ["Our team", "/our-team"],
                ["Services", "/services"],
                ["News", "/news"],
                ["What we do", "/what-we-do"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="subscribe__content-link text-[15px] text-white hover:text-blue-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="subscribe__content">
            <h3 className="subscribe__content-title pb-4 text-[28px] font-bold text-white">
              Uses Case<span className="text-blue-600">.</span>
            </h3>

            <ul className="subscribe__content-list flex flex-col gap-2">
              {[
                ["Marketing", "/marketing"],
                ["Social media", "/social-media"],
                ["Publishers", "/publishers"],
                ["Agencies", "/agencies"],
                ["Affiliate", "/affiliate"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="subscribe__content-link text-[15px] text-white hover:text-blue-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="subscribe__content">
            <h3 className="subscribe__content-title pb-4 text-[28px] font-bold text-white">
              Get in touch<span className="text-blue-600">.</span>
            </h3>
            <p className="subscribe__content-text section-text text-white">
              Question or feedback? <br />
              We'd love to hear from you.
            </p>
            <div className="subscribe__content-socials inline-flex w-max items-center gap-4 pt-8 text-[1.8rem] text-white">
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiInstagramFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiTwitterFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiTwitchFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiYoutubeFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>

        <p className="subscribe__copyrights pt-8 text-center text-[15px] leading-text text-white">
          &copy; Copyrights 2023 - Hexlab.com, all rights reserved | Develop by
          Fajar Fadillah A
        </p>
      </div>
    </footer>
  );
};

export default Footer;
