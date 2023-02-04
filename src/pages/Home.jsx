import React from "react";

// import components
import Header from "../components/Header";
import Feature from "../components/Feature";

// import parts
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Feature />
        <About />
      </div>
    </>
  );
};

export default Home;
