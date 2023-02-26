import React from "react";
import {  Route, Routes } from "react-router-dom";
import Worker from "./component/Worker";
export default () => {
  return (
    <div>
      <div>
     

        <Routes>

        <Route exact path="*" element={<Worker />} />

        </Routes>
      </div>
    </div>
  );
};
