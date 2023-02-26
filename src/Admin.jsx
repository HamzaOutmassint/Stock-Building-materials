import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/adminComponents/Login";
export default () => {
  return (
    <div>
      <div >
        <Routes>

        <Route path="*" element={<Login />} />

        </Routes>
      </div>
    </div>
  );
};
