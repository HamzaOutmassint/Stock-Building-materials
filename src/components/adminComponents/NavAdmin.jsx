import React, { useState } from "react";
import Navcontr from "../../assets/Navcontr.png";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.png";
import user from "../../assets/user.png";
import adduser from "../../assets/add-user.png";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-2 relative ">
      <div className="w-full bg-[#1F2025] p-3 rounded-lg flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex items-center">
            <img
              src={Navcontr}
              alt=""
              className="w-12 bg-[#93FBA4] rounded-full"
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-mono font-bold ">Salaheddine elfatimi</span>
            <span className="font-mono font-thin ">admin</span>
          </div>
        </div>
        <div className="flex">
          <button onClick={()=>setShow(!show)}>
            <img src={setting} alt="" className="w-12 " />
          </button>
          <div
            className={`absolute right-10 -bottom-40   bg-[#4C4D53] py-6 rounded-lg z-40  ${
              show == false ? "hidden" : "block"
            }`}
          >
            <NavLink  className="flex items-center gap-2 px-6 py-1 mb-1 hover:bg-[#696b73]">
              <img src={user} alt="" className="w-6" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Votre compte
              </span>
            </NavLink>
            
            <NavLink to={"../Add_new_worker"} className="flex items-center gap-2 px-6 py-1 mb-1 hover:bg-[#696b73]">
              <img src={adduser} alt="" className="w-6" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Add new worker
              </span>
            </NavLink>
            <NavLink to="/" className="flex items-center gap-2 px-6 py-1 hover:bg-[#696b73]">
              <img src={logout} alt="" className="w-6" />
              <span className="text-center font-mono font-bold text-white text-xl">
                Déconnexion
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
