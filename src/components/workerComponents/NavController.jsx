import Navcontr from "../../assets/Navcontr.png";
import { Link } from "react-router-dom";
import logout from "../../assets/logout.png"


export default function Nav() {

  return (
    <div className="p-4 relative ">
      <div className="w-full bg-[#1F2025] p-3 rounded-lg flex justify-between items-center">
        <div className="flex gap-4">
          <div className="">
            <img
              src={Navcontr}
              alt=""
              className="w-12 bg-[#93FBA4] rounded-full"
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-mono font-bold">
              Salaheddine elfatimi
            </span>
            <span className="font-mono font-thin text-sm">worker</span>
          </div>
        </div>
        <div className="flex">
          <Link to='/' className="bg-[#6e92e8] text-white w-24 justify-between	 p-2 rounded-md flex items-center font-medium hover:bg-[#4774dc] transition duration-300">
            <span>Logout</span>
            <img src={logout} alt="" className="w-5 h-5"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
