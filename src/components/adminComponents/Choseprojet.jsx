import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";



function Choseprojet() {
  return (
    <div className="p-4 container mx-auto">
        <h2 className='capitalize text-white font-semibold flex flex-col text-center text-4xl'>
            company study 
            <span className='font-light text-lg pt-1'>--development research--</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  lg:pt-8  gap-4 ">

            <Link to="../Chose_worker_bloc" className="bg-[#1F2025] hover:bg-[#313239] transition duration-300 space-y-10 py-36 rounded-lg shadow-2xl">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="text-center text-white font-extrabold font-mono text-4xl">
                    <span>Atlas Project</span>
                </div>
            </Link>

            <Link to="/admin#meta-houses-project" className="bg-[#1F2025] hover:bg-[#313239] transition duration-300 space-y-10 py-36 rounded-lg shadow-2xl">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="text-center text-white font-extrabold font-mono text-4xl">
                    <span>Meta Houses</span>
                </div>
            </Link>

            <Link to="/admin#realtoric-project" className="bg-[#1F2025] hover:bg-[#313239] transition duration-300 space-y-10 py-36 rounded-lg shadow-2xl">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="text-center text-white font-extrabold font-mono text-4xl">
                    <span>Realtoric</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Choseprojet






















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/Logo.svg";

// export default function Choseprojet() {
//   const [projet, setProjet] = useState("");
//   const navigate = useNavigate();
  
//   projet==""?"":navigate("../Chose_worker_bloc");
  
//   return (
//     <div className="p-4">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  lg:pt-24  gap-4 ">
//         <button
//           onClick={(e) => setProjet(e.currentTarget.id)}
//           id="Realtoric"
//           className="bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
//         >
//           <div>
//             <img src={Logo} alt="" />
//           </div>
//           <div className="text-center text-white font-extrabold font-mono text-4xl">
//             <span>Realtoric</span>
//           </div>
//         </button>

//         <button
//           onClick={(e) => setProjet(e.currentTarget.id)}
//           id="atlas"
//           className=" bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
//         >
//           <div>
//             <img src={Logo} alt="" />
//           </div>
//           <div className="text-center text-white font-extrabold font-mono text-4xl">
//             <span>Project atlas</span>
//           </div>
//         </button>
//         <button
//           id="Houses"
//           onClick={(e) => setProjet(e.currentTarget.id)}
//           className="  bg-[#1F2025] space-y-10 py-36 rounded-lg shadow-2xl"
//         >
//           <div>
//             <img src={Logo} alt="" />
//           </div>
//           <div className="text-center text-white font-extrabold font-mono text-4xl">
//             <span>Meta Houses</span>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }
