import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="bg-[#f9f9ff] text-center py-20 md:px-10 px-2">
      <h1 className="font-extrabold md:text-[40px] text-[30px]">
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 py-10">
        <Card title="WEB-DEVELOPMENT" image="/images/webdev.jpg" />
        <Card title="DIGITAL MARKETING" image="/images/dmarket.jpg" />
        <Card title="QUALITY ASSURANCE" image="/images/testing.jpg" />
      </div>
    </div>
  );
};

export default Services;
