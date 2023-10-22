import React from "react";
import Introduction from "./Introduction";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Introduction image="/images/hero.svg" />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
