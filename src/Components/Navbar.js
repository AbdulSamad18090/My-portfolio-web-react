import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [istoggle, setIsToggle] = useState(false);
  return (
    <>
      <nav>
        <AiOutlineMenu
          className="text-[#6254f3] md:hidden block my-4 hover:cursor-pointer"
          onClick={() => {
            setIsToggle(!istoggle);
          }}
        />
        <ul className="hidden md:flex gap-4 w-full my-3">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-[#6254f3] transition-[400ms]"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="hover:text-[#6254f3] transition-[400ms]"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Services"}
              className="hover:text-[#6254f3] transition-[400ms]"
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="hover:text-[#6254f3] transition-[400ms]"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav
        className={
          istoggle
            ? "absolute top-0 left-0 right-0 text-center bg-[#f9f9ff] transition-[400ms]"
            : "absolute top-[-100%] left-0 right-0 text-center transition-[400ms]"
        }
      >
        <AiOutlineClose
          className="flex float-right m-2 text-[#6254f3] hover:cursor-pointer"
          onClick={() => {
            setIsToggle(!istoggle);
          }}
        >
          x
        </AiOutlineClose>
        <ul className="block md:flex w-full justify-between py-10 px-20 text-black">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-[#6254f3]"
              onClick={() => {
                setIsToggle(false);
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className="hover:text-[#6254f3]"
              onClick={() => {
                setIsToggle(false);
              }}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Services"}
              className="hover:text-[#6254f3]"
              onClick={() => {
                setIsToggle(false);
              }}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="hover:text-[#6254f3]"
              onClick={() => {
                setIsToggle(false);
              }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
