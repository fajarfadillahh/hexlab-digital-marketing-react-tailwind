import React from "react";

// import testimonial data
import { testimonialData } from "../Data";

// import images
import TestimonialIcon from "../assets/images/icons/icon-falling-star.png";
import TestimonialComma from "../assets/images/icons/icon-comma.png";
import { RiStarFill } from "react-icons/ri";

const Testimonial = () => {
  return (
    <section className="testimonial section relative">
      <div className="testimonial__container container grid gap-12">
        <div className="testimonial__data text-center">
          <img
            src={TestimonialIcon}
            alt="testimonial icon"
            className="testimonial__icon mx-auto w-16 pb-4 drop-shadow-lg"
          />
          <p className="testimonial__subtitle section-subtitle">Testimonials</p>
          <h1 className="testimonial__title section-title pb-0">
            What our <br />
            clients say
            <br />
            about us<span className="text-blue-600">.</span>
          </h1>
        </div>

        <div className="testimonial__group grid grid-cols-[0.8fr] justify-center gap-8">
          {testimonialData.map((item, index) => {
            return (
              <div key={index} className="testimonial__content grid gap-6">
                <div className="testimonial__content-wrapper">
                  <img
                    src={TestimonialComma}
                    alt="comma icon"
                    className="testimonial__content-comma w-10 pb-2"
                  />
                  <p className="testimonial__content-text section-text">
                    {item.comment}
                  </p>
                </div>

                <div>
                  <img
                    src={item.profileImg}
                    alt="profile img"
                    className="testimonial__content-img w-16 pb-4"
                  />
                  <h3 className="testimonial__content-name section-title pb-1 text-[32px]">
                    {item.name}
                  </h3>
                  <p className="testimonial__content-profession section-text pb-3">
                    {item.profession}
                  </p>
                  <div className="testimonial__content-rating inline-flex w-max items-start gap-2 text-[1.3rem] text-yellow-400">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
