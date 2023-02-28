import React from "react";
import NavAdmin from "./NavAdmin";
export default function Add_new_Worker() {
  return (
    <div >
      <NavAdmin />
      <div className=" container ">
      <div className=" items-center flex flex-col">
        <div className=" flex flex-col gap-8 ">
          <div className=" text-white">
            <h1 className=" font-mono font-extrabold text-4xl">
              Add new Controlle
            </h1>
          </div>
          <div className=" space-y-3">
            <div className="flex flex-col text-white">
              <label htmlFor="Full_name">Full Name : </label>
              <input
                type="text"
                id="Full_name"
                className="bg-[#4B484C] rounded-md h-10 w-auto"
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="Id_Card :">Id Card : </label>
              <input
                type="text"
                id="Id_Card"
                className="bg-[#4B484C] rounded-md h-10 w-auto"
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="Address">Address : </label>
              <input
                type="text"
                id="Address"
                className="bg-[#4B484C] rounded-md h-10 w-auto"
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="specialty">Specialty : </label>
              <select
                className="bg-[#4B484C] rounded-md h-10 w-auto"
                name=""
                id="specialty"
              >
                <option value="" selected>
                  ...
                </option>
              </select>
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="phone_number">Phone number : </label>
              <input
                type="telephone"
                id="phone_number"
                className="bg-[#4B484C] rounded-md h-10 w-auto"
              />
            </div>

            <div className="flex flex-col text-white">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                className="bg-[#4B484C] rounded-md h-10 w-auto"
              />
            </div>
          </div>
          <div className="">
            <button className=" bg-[#6e92e8] hover:bg-[#4774dc] px-6 py-2 rounded-lg text-white">
              Add Controller
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
