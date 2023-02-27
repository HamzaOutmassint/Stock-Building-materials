import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export default function Choseprojet() {
  const [projet, setProjet] = useState("");
  const navigate = useNavigate();
  
  projet==""?"":navigate("../Chose_worker_bloc");
  
  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  lg:pt-24  gap-4 ">
        <button
          onClick={(e) => setProjet(e.currentTarget.id)}
          id="Realtoric"
          className="bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
        >
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Realtoric</span>
          </div>
        </button>

        <button
          onClick={(e) => setProjet(e.currentTarget.id)}
          id="atlas"
          className=" bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
        >
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Project atlas</span>
          </div>
        </button>
        <button
          id="Houses"
          onClick={(e) => setProjet(e.currentTarget.id)}
          className="  bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
        >
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="text-center text-white font-extrabold font-mono text-6xl">
            <span>Meta Houses</span>
          </div>
        </button>
      </div>
    </div>
  );
}
