import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import building from "../../assets/buildings.png";
import Controler from "../../assets/Controller.png";

export default function Chose_worker_bloc() {
    const [chose,setChose]=useState("");
    const navigate=useNavigate();
    chose=="Controller"?navigate("../Controllerpage"):"";
    console.log(chose)
  return (
    <div className="p-8">
      <div className="grid  grid-cols-1 md:grid-cols-2    gap-20">
        <button
          onClick={(e) => setChose(e.currentTarget.id)}
          id="Controller"
          className=" bg-[#1F2025] space-y-10 py-28  rounded-lg shadow-2xl"
        >
          <div className="w-72 m-auto">
            <img src={Controler} alt="" />
          </div>
          <div className=" text-center text-white font-mono font-extrabold text-5xl">
            <span>Controller</span>
          </div>
        </button>
        <button
          onClick={(e) => setChose(e.currentTarget.id)}
          id="Apartment"
          className=" bg-[#1F2025] space-y-10 py-28 rounded-lg shadow-2xl"
        >
          <div className="w-72 m-auto">
            <img src={building} alt="" />
          </div>
          <div className=" text-center text-white font-mono font-extrabold text-5xl">
            <span>Apartment complex</span>
          </div>
        </button>
      </div>
    </div>
  );
}
