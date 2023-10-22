import React from "react";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";

export default function Introduction(props) {
  return (
    <div className="sm:grid grid-cols-2 md:m-10 m-2">
      <div className="">
        <p className="text-[#6254f3] my-0 py-0">THIS IS ME</p>
        <h1 className="font-extrabold md:text-[60px] text-[30px] my-0 py-0">
          ABDUL SAMAD
        </h1>
        <Typed
          strings={["FRONT-END WEB DEVELOPER", "DIGITAL MARKETER"]}
          typeSpeed={100}
          backSpeed={70}
          loop
        >
          <input type="text" className="font-bold w-full text-[#6254f3]" />
        </Typed>
        <p className="sm:text-left text-justify">
          As a skilled web developer, I'm proficient in various programming
          languages, such as HTML, CSS, JavaScript and React.js. I have
          experience in creating dynamic, responsive, and user-friendly web
          pages. I have a deep understanding of web development concepts, such
          as web design, user experience, and web standards, and I am up-to-date
          with the latest trends and technologies in the field
          <NavLink
            to={"/about"}
            className="text-[#6254f3] underline hover:font-bold transition-[400ms]"
          >
            ...MORE
          </NavLink>
        </p>
        <NavLink to={"/contact"}>
          <button className="bg-[#6254f3] text-white py-2 px-10 my-4 hover:scale-95 transition-[400ms]">
            HIRE ME
          </button>
        </NavLink>
      </div>

      <img className="h-[350px] w-[100%] md:pl-10" src={props.image} alt="img" />
    </div>
  );
}
