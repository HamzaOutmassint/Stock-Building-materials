import React, { useState } from "react";
import Nav from "./NavAdmin";
import ControlleTable from "./DetailsCotrollerTable"
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneIcon from '@mui/icons-material/Phone';

export default function DetailsController() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Nav />
      <div className="p-2">
        <section className="pb-2 flex flex-col md:items-center space-y-4 md:space-y-0 md:flex-row md:justify-between gap-2">
          <div className="flex items-center gap-6">
            <div>
              <select defaultValue="all_bloc" onChange={(e) => setSearchdate(e.target.value)} className="bg-[#3C3D42] p-3  h-9 sm:w-64 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs">
                <option value='all_bloc'>All Bloc</option>
                <option value="1">1</option>
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <select defaultValue="all_date" onChange={(e) => setSearchdate(e.target.value)} className="bg-[#3C3D42] p-3  h-9 sm:w-64 text-center rounded-xl font-mono  font-medium focus:outline none  text-white text-xs">
                <option value="all_date">All date</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div>
          <button onClick={() => setShow(!show)} className="flex gap-1 items-center ">
              <span className="text-center font-mono font-extrabold text-white uppercase hover:text-[#b1b5ca]">
                Salaheddine elsfatimi
              </span>
            </button>
            <div className={`absolute right-4  mt-4  bg-[#4C4D53] py-6 rounded-lg z-40  ${ show == false ? "hidden" : "block"}`}>
              <div className="space-y-1 px-3">
                <div className="flex gap-2 items-center">
                    <PhoneIcon style={{'fontSize':"25px","marginRight":"5px","color":"#fff"}}/>
                    <span className="font-mono  text-white">
                      <span className="font-semibold">Phone:</span> 0650402456
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                  <MailOutlineRoundedIcon style={{'fontSize':"25px","marginRight":"5px","color":"#fff"}}/>
                  <span className="font-mono  text-white">
                  <span className="font-semibold">Email:</span> hamzasalah@gmail.com
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <LocationOnOutlinedIcon style={{'fontSize':"25px","marginRight":"5px","color":"#fff"}}/>
                  <span className="font-mono  text-white">
                  <span className="font-semibold">Address:</span> mhamid9 marrakech
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <EngineeringOutlinedIcon style={{'fontSize':"25px","marginRight":"5px","color":"#fff"}}/>
                  <span className="font-mono  text-white">
                  <span className="font-semibold">specialty:</span> Electricity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ControlleTable/>
      </div>
    </div>
  );
}
