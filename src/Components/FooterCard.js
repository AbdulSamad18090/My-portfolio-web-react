import React from "react";

export default function FooterCard() {
  return (
    <div className=" translate-y-[50%] md:grid grid-cols-3 py-10 md:px-20 px-4 md:mx-40 lg:mx-60 mx-2 bg-[#f9f9ff]  shadow-md shadow-[#838383] border border-[#dfdfff] rounded-[10px]">
      <div className="col-span-2 text-[20px]">
        Ready to get started? <br className="md:block hidden" /> Talk to us
        today
      </div>
      <div className="">
        <button className="bg-[#6254f3] text-white py-2 w-[150px] my-4 hover:scale-95 transition-[400ms]">
          GET STARTED
        </button>
      </div>
    </div>
  );
}
