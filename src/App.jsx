import React from "react";
import Worker from "./Worker";
import Admin from "./Admin";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="*" element={<Worker />} />
        <Route path="/Admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
