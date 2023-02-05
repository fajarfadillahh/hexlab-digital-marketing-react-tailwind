import React from "react";

// import team data
import { teamData } from "../../Data";

// import icon
import TeamIcon from "../../assets/images/icons/icon-color-palette.png";

const Team = () => {
  return (
    <section className="team section relative">
      {/* gradient accent */}
      <div className="absolute top-60 -left-48 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-t from-pink-600/80 to-blue-600/80 blur-[100px]" />

      <div className="team__container container grid gap-12">
        <div className="team__data text-center">
          <img
            src={TeamIcon}
            alt="team icon"
            className="team__icon mx-auto w-16 pb-4 drop-shadow-lg"
          />
          <p className="team__subtitle section-subtitle">Our team</p>
          <h1 className="team__title section-title pb-0">
            Meet with our
            <br />
            awesome team<span className="text-blue-600">.</span>
          </h1>
        </div>

        <div className="team__group grid grid-cols-[0.8fr] justify-center gap-12">
          {teamData.map((item, index) => {
            return (
              <div key={index} className="team__content grid gap-6">
                <img
                  src={item.image}
                  alt="team profile img"
                  className="team__content-profile"
                />

                <div className="team__content-data text-center">
                  <h3 className="team__content-name section-title pb-2 text-[32px]">
                    {item.name}
                  </h3>
                  <p className="team__content-profession section-text pb-0">
                    {item.profession}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
