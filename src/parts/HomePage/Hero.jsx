import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import HeroImg from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero relative pt-32 pb-16">
      {/* gradient accents */}
      <div className="absolute -top-20 -left-48 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-300 blur-[100px]" />

      <div className="hero__container container grid gap-12">
        <div className="hero__data text-center">
          <h1 className="hero__title section-title text-[72px]">
            We're
            <br />
            <span className="relative">
              digital
              <div className="absolute bottom-6 left-0 -z-10 h-4 w-full rounded-full bg-blue-600" />
            </span>{" "}
            products
            <br />
            creators<span className="text-blue-600">.</span>
          </h1>
          <p className="hero__text section-text pb-8">
            Proper business solution for your business
            <br />
            strategy and corporation.
          </p>
          <Link to="/" className="hero__button button button-fill">
            Let's get started
            <RiArrowRightCircleLine className="button-icon" />
          </Link>
        </div>

        <img src={HeroImg} alt="hero img" className="hero__img" />
      </div>
    </section>
  );
};

export default Hero;
