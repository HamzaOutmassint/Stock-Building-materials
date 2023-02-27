import React from "react";
import Nav from "./NavAdmin";
export default function Controllerpage() {
  return (
    <div>
      <Nav />
      <div className="p-4">
        <section>
            <div className="flex justify-end gap-10">
                <div>
                    <input className="bg-[#3C3D42] text-white p-3 h-10 rounded-xl w-56" type="text" placeholder="Search for ... " />
                </div>
                <div className="flex gap-4 items-center">
                    <label htmlFor="date" className="text-white font-mono font-semibold text-lg">Date : </label>
                    <input className="bg-[#3C3D42] p-3 h-10 w-56 text-center rounded-xl text-white" type="date"  id="date" />
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
