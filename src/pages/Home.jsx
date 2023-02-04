import React from "react";

// import components
import Header from "../components/Header";
import Feature from "../components/Feature";

// import parts
import Hero from "../parts/HomePage/Hero";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Feature />
      </div>
    </>
  );
};

export default Home;
