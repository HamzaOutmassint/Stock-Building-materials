import React from "react";
import Worker from "./Worker";
import Admin from "./Admin";
import {  Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="*" element={<Login />} />
        <Route exact path="/worker/*" element={<Worker />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
