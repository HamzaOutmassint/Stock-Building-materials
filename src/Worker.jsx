import React from "react";
import {  Route, Routes } from "react-router-dom";
import Controller from "./components/workerComponents/Controller";
export default () => {
  return (
    <div>
      <div>
     

        <Routes>

        <Route exact path="*" element={<Controller />} />

        </Routes>
      </div>
    </div>
  );
};
