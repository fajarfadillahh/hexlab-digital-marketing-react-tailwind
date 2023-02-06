import React from "react";

// import components
import Header from "../components/Header";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// import parts
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Experience from "../parts/HomePage/Experience";
import Portfolio from "../parts/HomePage/Portfolio";
import Team from "../parts/HomePage/Team";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Feature />
        <About />
        <Experience />
        <Portfolio />
        <Team />
        <Testimonial />
        <Subscribe />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
