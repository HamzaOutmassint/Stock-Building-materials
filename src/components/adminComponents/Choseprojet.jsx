import React from "react";
import Logo from "../../assets/Logo.svg";
export default function Choseprojet() {
  return (
    <div className="p-4   ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  lg:pt-24  gap-4 ">
        <div className="bg-[#1F2025] space-y-10 py-36 ">
          <div><img src={Logo} alt="" /></div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Realtoric</span>
          </div>
        </div>
        <div className=" bg-[#1F2025] space-y-10 py-36 ">
          <div><img src={Logo} alt="" /></div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Project atlas</span>
          </div>
        </div>
        <div className="  bg-[#1F2025] space-y-10 py-36 ">
          <div><img src={Logo} alt="" /></div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Meta Houses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
