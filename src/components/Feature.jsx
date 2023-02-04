import React from "react";

// import feature data
import { featureData } from "../Data";

const Feature = () => {
  return (
    <section className="feature section relative">
      {/* gradient accent */}
      <div className="absolute top-72 -left-56 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-b from-green-500/80 to-yellow-300/80 blur-[100px]" />

      <div className="feature__container container grid gap-12">
        <div className="feature__data text-center">
          <p className="feature__subtitle section-subtitle">What we do?</p>
          <h1 className="feature__title section-title">
            We're team of creatives who are excited about unique ideas.
          </h1>
        </div>

        <div className="feature__group grid grid-cols-[0.8fr] justify-center gap-8">
          {featureData.map((item, index) => {
            return (
              <div
                key={index}
                className="feature__content grid justify-items-center gap-6"
              >
                <img
                  src={item.icon}
                  alt="feature icon"
                  className="feature__content w-16"
                />

                <div className="feature__content-data text-center">
                  <p className="feature__content-subtitle section-subtitle pb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="feature__content-title section-title text-[32px]">
                    {item.title}
                    <span className="text-blue-600">.</span>
                  </h3>
                  <p className="feature__content-text section-text mx-auto max-w-[180px]">
                    {item.text}
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

export default Feature;
