import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/adminComponents/Admin";
export default () => {
  return (
    <div>
      <div >
        <Routes>

        <Route path="*" element={<Admin />} />

        </Routes>
      </div>
    </div>
  );
};
