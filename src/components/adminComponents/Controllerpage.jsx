import React, { useState } from "react";
import AdminTable from "./AdminTable";
import Nav from "./NavAdmin";

export default function Controllerpage() {
  const [searchname, setSearchname] = useState("");
  const [searchdate, setSearchdate] = useState("");
  

  return (
    <div className=" ">
      <Nav />
      <div className="p-2  ">
        <section className="pb-2">
          <div className="flex  sm:justify-end gap-3">
            <div>
              <input
                className="bg-[#3C3D42] pl-1 h-9 rounded-xl sm:w-64 focus:outline none p-1 text-white text-xs"
                type="text"
                onChange={(e) => setSearchname(e.target.value)}
                placeholder="Search for ... "
              />
              
            </div>
            <div className="flex gap-4 items-center">
              <select name="" id="" onChange={(e) => setSearchdate(e.target.value)} defaultValue="all_data"
                className="bg-[#3C3D42] p-3 h-9 sm:w-64 md:w-40 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs"
              >
                <option value="all_data">All date</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </section>
        <div className=" ">
          <AdminTable searchname={searchname}  />
        </div>
      </div>
    </div>
  );
}
