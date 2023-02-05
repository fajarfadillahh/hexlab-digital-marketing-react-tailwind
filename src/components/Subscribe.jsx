import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import icon
import SubscribeIcon from "../assets/images/icons/icon-postbox.png";

const Subscribe = () => {
  return (
    <section className="subscribe section relative">
      <div className="subscribe__container container grid gap-12">
        <div className="subscribe__data text-center">
          <img
            src={SubscribeIcon}
            alt="subscribe icon"
            className="subscribe__icon mx-auto w-32 pb-4 drop-shadow-lg"
          />
          <p className="subscribe__subtitle section-subtitle">Subscribe</p>
          <h1 className="subscribe__title section-title">
            Subscribe to get the latest news about us
            <span className="text-blue-600">.</span>
          </h1>
          <p className="subscribe__text section-text">
            We recommended you to subscribe to our newspaper, drop your email
            below to get daily update about us.
          </p>
        </div>

        <form className="subscribe__form flex items-center justify-between gap-2 rounded-full border-[1.5px] border-gray-300 p-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="subscribe__input h-[52px] w-full px-2 text-[15px] font-semibold text-gray-900 outline-none placeholder:font-medium placeholder:text-gray-400"
          />
          <Link to="/" className="subscribe__button button button-fill">
            Subscribe
            <RiArrowRightCircleLine className="inline-flex text-[1.5rem]" />
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
