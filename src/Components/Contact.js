import React from "react";
import Map from "./Map";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="py-10 text-center">
      <h1 className="font-extrabold md:text-[40px] text-[30px] my-10">
        Feel Free To Contact Us
      </h1>
      <Map />
      <Form/>
    </div>
  );
};

export default Contact;
