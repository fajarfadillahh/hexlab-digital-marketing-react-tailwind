import React from "react";

// import components
import Header from "../components/Header";

// import parts
import Hero from "../parts/HomePage/Hero";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
