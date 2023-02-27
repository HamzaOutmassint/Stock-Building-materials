import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handelSbmite(){
    (username=="root"&&password=="1234")?navigate("./Choseprojet"):alert("errur");
    
    
  }
  return (
    <div className=" flex  justify-center items-center h-screen text-white p-4">
      <div className=" space-y-8 ">
        <div>
          <h1 className=" text-center font-extrabold font-mono text-3xl">
            Admin Login
          </h1>
        </div>
        <div  className="space-y-4">
          <div>
            <label htmlFor="username" className=" text-lg font-mono ">
              Username :
            </label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              id="username"
              className="bg-[#4B484C] w-full h-10 rounded-md text-center"
            />
          </div>
          <div>
            <label htmlFor="password" className=" text-lg font-mono ">
              Password :
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              className="bg-[#4B484C] w-full h-10 rounded-md text-center"
            />
          </div>
          <div className="float-right">
            <button onClick={handelSbmite} className="bg-[#93FBA4] text-black py-2 px-8 rounded-md text-base font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
