import React from "react";
import Nav from "./NavAdmin";
export default function Controllerpage() {
  return (
    <div>
      <Nav />
      <div className="p-4">
        <section>
            <div>
                <div>
                    <input type="search" />
                </div>
                <div>
                    <label htmlFor="date">Date : </label>
                    <input type="date"  id="date" />
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
