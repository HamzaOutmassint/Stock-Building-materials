import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import building from "../../assets/buildings.png";
import Controler from "../../assets/Controller.png";

export default function Chose_worker_bloc() {
    const [chose,setChose]=useState("");

    
    console.log(chose)
  return (
    <div className="p-4">
      <div className="grid  grid-cols-1 md:grid-cols-2  md:pt-20  gap-20">
        <NavLink
        to={"../Controllerpage"}
          onClick={(e) => setChose(e.currentTarget.id)}
          id="Controller"
          className=" bg-[#1F2025] space-y-10 py-28   rounded-lg shadow-2xl"
        >
          <div className="w-52 m-auto">
            <img src={Controler} alt="" />
          </div>
          <div className=" text-center text-white font-mono font-extrabold text-3xl">
            <span>Controller</span>
          </div>
        </NavLink>
        <NavLink
        to={"../Blocpage"}
          onClick={(e) => setChose(e.currentTarget.id)}
          id="Apartment"
          className=" bg-[#1F2025] space-y-10 py-28 rounded-lg shadow-2xl"
        >
          <div className="w-52 m-auto">
            <img src={building} alt="" />
          </div>
          <div className=" text-center text-white font-mono font-extrabold text-3xl">
            <span>Apartment complex</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
