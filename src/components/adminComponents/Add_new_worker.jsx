import React, { useState } from "react";
import NavAdmin from "./NavAdmin";
export default function Add_new_Worker() {
  const [name, setName] = useState("");
  const [idcard, setIdcard] = useState("");
  const [address, setAddress] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleSabmit() {
    console.log(name);
    console.log(idcard);
    console.log(address);
    console.log(specialty);
    console.log(phone);
    console.log(email);
  }

  return (
    <div>
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
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Full_name"
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="Id_Card :">Id Card : </label>
                <input
                  onChange={(e) => setIdcard(e.target.value)}
                  type="text"
                  id="Id_Card"
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="Address">Address : </label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="Address"
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="specialty">Specialty : </label>
                <select
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                  name=""
                  id="specialty"
                >
                  <option value="" selected>
                    ...
                  </option>
                  <option value="Electricity">Electricity</option>
                  <option value="Air_conditioner">Air conditioner</option>
                  <option value="Ventilation">Ventilation</option>
                  <option value="Plumbing">Plumbing</option>
                </select>
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="phone_number">Phone number : </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="telephone"
                  id="phone_number"
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                />
              </div>

              <div className="flex flex-col text-white">
                <label htmlFor="email">Email : </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="bg-[#4B484C] rounded-md h-10 w-auto"
                />
              </div>
            </div>
            <div className="">
              <button
                onClick={handleSabmit}
                className=" bg-[#6e92e8] hover:bg-[#4774dc] px-6 py-2 rounded-lg text-white"
              >
                Add Controller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
