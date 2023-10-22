import React from "react";

export default function Card(props) {
  return (
    <div
      className=" border border-[#6254f3] rounded shadow-md shadow-[#6254f3] w-full h-[200px] flex justify-center items-center  opacity-70 hover:scale-95 cursor-pointer transition-[400ms]"
      style={{
        background: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white text-black py-2 md:text-[20px] text-[13px] w-full font-extrabold">
        {props.title}
      </div>
    </div>
  );
}
