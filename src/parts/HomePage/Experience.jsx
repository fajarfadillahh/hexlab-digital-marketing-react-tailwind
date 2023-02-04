import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import experience data
import { experienceData } from "../../Data";

// import images
import ExperienceIcon from "../../assets/images/icons/icon-idea-bulb.png";

const Experience = () => {
  return (
    <section className="experience section relative">
      {/* gradient accents */}
      <div className="absolute top-96 -left-48 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-pink-500/80 to-yellow-300/80 blur-[100px]" />

      <div className="experience__container container grid gap-12">
        <div className="experience__data text-center">
          <img
            src={ExperienceIcon}
            alt="experience icon"
            className="about__icon mx-auto w-16 pb-4 drop-shadow-lg"
          />
          <p className="about__subtitle section-subtitle">Why choose us?</p>
          <h1 className="about__title section-title">
            Experience, <br />
            Creatice, nad helpful<span className="text-blue-600">.</span>
          </h1>
          <p className="about__text section-text pb-8">
            We're digital creative agency located in LA. We focus on creating
            responsive website, web designs, SEO services, UI/UX designs,
            website with all over maintenance, hosting, domain name
            registration, graphic design, and visual identities for your
            business.
          </p>
          <Link to="/" className="about__button button button-outline">
            Know more
            <RiArrowRightCircleLine className="inline-flex text-[1.5rem]" />
          </Link>
        </div>

        <div className="experience__group grid grid-cols-[0.8fr] justify-center gap-8">
          {experienceData.map((item, index) => {
            return (
              <div key={index} className="experience__content grid text-center">
                <h3 className="experience__number text-[48px] font-bold text-blue-600">
                  {item.number}
                </h3>
                <h1 className="experience__title section-title text-[32px]">
                  {item.title}
                </h1>
                <p className="experience__text section-text mx-auto max-w-[230px] pb-0">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
