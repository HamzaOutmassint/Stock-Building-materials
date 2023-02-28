import React from 'react'
import Nav from "./NavAdmin"
export default function DetailsController(){
    return(
        <div>
           <Nav/>
           <div className="p-2  ">
        <section className="pb-2">
          <div className="flex  justify-start gap-6">
            <div>
            <select
                name=""
                id=""
                onChange={(e) => setSearchdate(e.target.value)}
                className="bg-[#3C3D42]  px-14 h-9 w-full 'bg-[#4B484C] rounded-xl focus:outline none p-1 text-white text-xs"
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
                className="bg-[#3C3D42]  px-14  h-9 w-full 'bg-[#4B484C] rounded-xl focus:outline none p-1 text-white text-xs"
              >
                <option selected>All date</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </section>
        
      </div>
        </div>
    )
}