import React from "react";
import { Route, Routes } from "react-router-dom";
import Choseprojet from "./components/adminComponents/Choseprojet";
import Login from "./components/adminComponents/Login";
export default () => {
  return (
    <div>
      <div >
        <Routes>

        <Route path="*" element={<Login />} />
        <Route path="/Choseprojet" element={<Choseprojet />} />

        </Routes>
      </div>
    </div>
  );
};
