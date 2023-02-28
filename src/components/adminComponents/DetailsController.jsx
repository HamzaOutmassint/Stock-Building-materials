import React, { useState } from "react";
import Nav from "./NavAdmin";
import Details from "../../assets/Details.png";
import gmail from "../../assets/gmail.png";
import home from "../../assets/home.png";
import phone from "../../assets/phone-call.png";
import worker from "../../assets/worker.png";
export default function DetailsController() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Nav />
      <div className="p-4  ">
        <section className="pb-2 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between gap-2">
          <div className="flex items-center gap-6">
            <div>
              <select
                name=""
                id=""
                onChange={(e) => setSearchdate(e.target.value)}
                className="bg-[#3C3D42] p-3  h-9 sm:w-64 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs"
              >
                <option selected>All Bloc</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <select
                name=""
                id=""
                onChange={(e) => setSearchdate(e.target.value)}
                className="bg-[#3C3D42] p-3  h-9 sm:w-64 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs"
              >
                <option selected>All date</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className="flex gap-1 items-center "
            >
              <img src={Details} alt="" className="w-6 h-6" />
              <span className="text-center font-mono font-extrabold text-white uppercase">
                Salaheddine elsfatimi
              </span>
            </button>
            <div
              className={`absolute right-4  mt-4  bg-[#4C4D53] py-6 rounded-lg z-40  ${
                show == false ? "hidden" : "block"
              }`}
            >
              <div className="  space-y-4 px-4">
                <div className="flex gap-2 items-center">
                  <img src={phone} alt="" className="w-6 h-6" />
                  <span className="font-mono  text-white">
                    Phone number: 0650402456
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={gmail} alt="" className="w-6 h-6" />
                  <span className="font-mono  text-white">
                    gmail: hamzaSlah@gmail.com
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={home} alt="" className="w-6 h-6" />
                  <span className="font-mono  text-white">
                    Address: mhamid9 marrakech
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={worker} alt="" className="w-6 h-6" />
                  <span className="font-mono  text-white">
                    specialty: Electricity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
