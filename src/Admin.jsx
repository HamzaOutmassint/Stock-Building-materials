import React from "react";
import { Route, Routes } from "react-router-dom";
import Choseprojet from "./components/adminComponents/Choseprojet";
import Chose_worker_bloc from "./components/adminComponents/Chose_worker_bloc"
import Controller from "./components/adminComponents/Controllerpage"
import Add_new_worker from "./components/adminComponents/Add_new_worker"
// import Login from "./components/adminComponents/Login";
export default () => {
  return (
    <div>
      <div className="">
        <Routes>

        {/* <Route path="*" element={<Login />} /> */}
        <Route path="*" element={<Choseprojet />} />
        <Route path="/Chose_worker_bloc" element={<Chose_worker_bloc />} />
        <Route path="/Controllerpage" element={<Controller />} />
        <Route path="/Add_new_worker" element={<Add_new_worker />} />

        </Routes>
      </div>
    </div>
  );
};
