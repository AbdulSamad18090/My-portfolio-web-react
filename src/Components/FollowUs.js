import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

export default function FollowUs() {
  return (
    <div className="p-4">
      <h1 className="text-[20px]">Follow me on</h1>
      <div className="py-4 flex gap-2">
        <AiFillGithub className="text-[50px] hover:cursor-pointer" />
        <AiFillLinkedin className="text-[50px] hover:cursor-pointer" />
        <SiUpwork className="text-[50px] hover:cursor-pointer" />
      </div>
    </div>
  );
}
