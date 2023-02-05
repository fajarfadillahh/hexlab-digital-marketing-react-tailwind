import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import AboutImg from "../../assets/images/about-img.png";
import AboutIcon from "../../assets/images/icons/icon-color-palette.png";

const About = () => {
  return (
    <section className="about section relative">
      {/* gradient accent */}
      <div className="absolute bottom-60 -right-48 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-pink-400/80 to-purple-400/80 blur-[100px]" />

      <div className="about__container container grid justify-items-center gap-12 sm:max-w-md xl:max-w-4xl xl:grid-cols-2 2xl:max-w-5xl">
        <img src={AboutImg} alt="about img" className="about__img" />

        <div className="about__data text-center xl:text-left">
          <img
            src={AboutIcon}
            alt="about icon"
            className="about__icon mx-auto w-16 pb-4 drop-shadow-lg xl:m-0"
          />
          <p className="about__subtitle section-subtitle">Our team</p>
          <h1 className="about__title section-title">
            Know more <br />
            About team <br />
            Hexlab<span className="text-blue-600">.</span>
          </h1>
          <p className="about__text section-text pb-8">
            Our team digital product creators in tech and design bring skills
            above and beyond the ordinary to every project. User experience,
            Social media marketing, Content management system, and Email
            marketing.
          </p>
          <Link to="/" className="about__button button button-outline">
            Know more
            <RiArrowRightCircleLine className="inline-flex text-[1.5rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
