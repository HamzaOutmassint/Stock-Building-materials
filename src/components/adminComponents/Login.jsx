import React from "react";
export default function Login() {
  return (
    <div className=" flex  justify-center items-center">
      <div>
        <h1 className=" text-center">Admin Login</h1>
        <div>
            <label htmlFor="username">username :</label>
            <input type="text"  id="username"/>
        </div>
      </div>
    </div>
  );
}
