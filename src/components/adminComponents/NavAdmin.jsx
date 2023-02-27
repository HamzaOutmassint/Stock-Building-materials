import React, { useState } from "react";
import Navcontr from "../../assets/Navcontr.png";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.png";
import user from "../../assets/user.png";
import adduser from "../../assets/add-user.png";

export default function Nav() {
  const [show, setShow] = useState(false);
  function showsetting() {
    setShow(!show);
  }
  return (
    <div className="p-4 relative ">
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
          <button onClick={showsetting}>
            <img src={setting} alt="" className="w-14 " />
          </button>
          <div
            className={`absolute right-10 space-y-4  bg-[#4C4D53] p-6 rounded-lg  ${
              show == false ? "hidden" : "block"
            }`}
          >
            <div className="flex items-center gap-2">
              <img src={user} alt="" className="w-8" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Votre compte
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={adduser} alt="" className="w-8" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Add new worker
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={logout} alt="" className="w-8" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Déconnexion
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
