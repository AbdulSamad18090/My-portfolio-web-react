import React from "react";

export default function Newsletter() {
  return (
    <div className="p-4">
      <h1 className="text-[20px]">Subscribe to get important updates</h1>
      <input
        type="email"
        placeholder="Email"
        className="py-3 px-2 my-2 border border-[#6254f3] shadow shadow-[#6254f3] w-full"
      />
      <button className="bg-[#6254f3] text-white py-2 w-[130px] my-4 hover:opacity-90 transition-[400ms ">
        SUBSCRIBE
      </button>
    </div>
  );
}
