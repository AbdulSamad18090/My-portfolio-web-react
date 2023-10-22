import React from "react";

export default function Form() {
  return (
    <div className="py-10 px-2 flex flex-col items-center">
      <input
        type="text"
        placeholder="Name"
        className="py-3 px-2 my-2 border border-[#6254f3] shadow shadow-[#6254f3] md:w-[400px] w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="py-3 px-2 my-2 border border-[#6254f3] shadow shadow-[#6254f3] md:w-[400px] w-full"
      />
      <textarea className="py-3 px-2 my-2 border border-[#6254f3] shadow shadow-[#6254f3] md:w-[400px] w-full" cols="30" rows="4" placeholder="Message"></textarea>
      <button className="bg-[#6254f3] text-white py-2 px-10 my-4 hover:opacity-90 transition-[400ms ">
        SEND
      </button>
    </div>
  );
}
