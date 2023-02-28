import React, { useState } from "react";
import AdminTable from "./AdminTable";
import Nav from "./NavAdmin";

export default function Controllerpage() {
  const [searchnmame, setSearchname] = useState("");
  const [searchdate, setSearchdate] = useState("");
  console.log(searchdate);
  console.log(searchnmame);

  return (
    <div className=" ">
      <Nav />
      <div className="p-2  ">
        <section className="pb-2">
          <div className="flex  sm:justify-end gap-6">
            <div>
              <input
                className="bg-[#3C3D42] pl-3 h-9 rounded-xl  md:w-64 bg-[#4B484C] focus:outline none p-1 text-white text-xs"
                type="text"
                onChange={(e) => setSearchname(e.target.value)}
                placeholder="Search for ... "
              />
            </div>
            <div className="flex gap-4 items-center">
              <select
                name=""
                id=""
                onChange={(e) => setSearchdate(e.target.value)}
                className="bg-[#3C3D42] p-3 h-9 md:w-64  text-center rounded-xl font-mono  font-medium focus:outline none p-1 text-white text-xs"
              >
                <option selected>All date</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </section>
        <div className=" ">
          <AdminTable />
        </div>
      </div>
    </div>
  );
}
