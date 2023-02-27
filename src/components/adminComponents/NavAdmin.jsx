import React from "react";
import Navcontr from "../../assets/Navcontr.png";
import setting from "../../assets/setting.png";

export default function Nav() {
  return (
    <div className="p-4">
      <div className="w-full bg-[#1F2025] p-4 rounded-lg flex justify-between">
        <div className="flex gap-4">
          <div className="">
            <img
              src={Navcontr}
              alt=""
              className="w-14 bg-[#93FBA4] rounded-full"
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-mono font-bold text-xl">
              salaheddine elfatimi
            </span>
            <span className="font-mono font-thin text-md">Worker</span>
          </div>
        </div>
        <div>
          <button>
            <img src={setting} alt="" className="w-14 " />
          </button>
        </div>
      </div>
    </div>
  );
}
