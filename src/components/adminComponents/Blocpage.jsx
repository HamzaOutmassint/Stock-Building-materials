import React, { useState } from "react";
import Nav from "./NavAdmin";
import Bloctable from "./Bloctable"
export default function Blocpage() {
  const [searchnmame, setSearchname] = useState("");
  const [searchbloc, setSearchbloc] = useState("");
  console.log(searchbloc);
  console.log(searchnmame);
  return (
    <div>
      <Nav />
      <div>
        <div className="p-2  ">
          <section className="pb-2">
            <div className="flex   gap-6">
              <div>
                <input
                  className="bg-[#3C3D42]  h-9 rounded-xl sm:w-64  focus:outline none p-1 text-white text-xs"
                  type="text"
                  onChange={(e) => setSearchname(e.target.value)}
                  placeholder="Search for ... "
                />
              </div>
              <div className="flex gap-4 items-center">
                <select
                  name=""
                  id=""
                  onChange={(e) => setSearchbloc(e.target.value)}
                  className="bg-[#3C3D42] p-3  h-9 sm:w-64 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs"
                >
                  <option selected>All Bloc</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </section>
          <Bloctable/>
        </div>
      </div>
    </div>
  );
}
