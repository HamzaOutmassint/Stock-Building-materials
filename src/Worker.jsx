import React from "react";
import {  Route, Routes } from "react-router-dom";
import ChoseProject from "./components/workerComponents/ChoseProject";
export default () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="*" element={<ChoseProject />} />
        </Routes>
      </div>
    </div>
  );
};
