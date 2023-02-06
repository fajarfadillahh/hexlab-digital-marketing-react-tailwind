import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import portfolio data
import { portfolioData } from "../../Data";

// import images
import PortfolioIcon from "../../assets/images/icons/icon-web-design.png";

const Portfolio = () => {
  return (
    <section className="portfolio section relative">
      {/* gradient accent */}
      <div className="absolute top-96 -right-56 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-b from-green-500/80 to-yellow-300/80 blur-[100px]" />

      <div className="portfolio__container container grid gap-12 2xl:max-w-5xl">
        <div className="portfolio__data text-center">
          <img
            src={PortfolioIcon}
            alt="portfolio icon"
            className="portfolio__icon mx-auto w-16 pb-4 drop-shadow-lg"
          />
          <p className="portfolio__subtitle section-subtitle">Our portfolio</p>
          <h1 className="portfolio__title section-title">
            Check our <br />
            awesome portfolio<span className="text-blue-600">.</span>
          </h1>
          <p className="portfolio__text section-text pb-8">
            See what we do for our clients.
          </p>
          <Link to="/" className="portfolio__button button button-outline">
            Explore all projects
            <RiArrowRightCircleLine className="inline-flex text-[1.5rem]" />
          </Link>
        </div>

        <div className="portfolio__group grid grid-cols-[0.9fr] justify-center gap-12 md:grid-cols-2">
          {portfolioData.map((item, index) => {
            return (
              <div
                key={index}
                className="portfolio__content group grid cursor-pointer gap-6"
              >
                <div className="portfolio__content-overlay relative overflow-hidden">
                  <img
                    src={item.image}
                    alt="portfolio img"
                    className="portfolio__content-img h-full w-full object-cover object-center transition-all duration-400 group-hover:scale-110"
                  />
                </div>

                <div className="portfolio__content-data">
                  <p className="portfolio__content-title section-subtitle pb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="portfolio__content-title section-title pb-0 text-[32px]">
                    {item.title}
                    <span className="text-blue-600">.</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
