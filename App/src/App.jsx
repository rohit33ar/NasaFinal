import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Health from "./pages/Health";
import SpaceSuits from "./pages/SpaceSuits";
import CosmicClub from "./pages/CosmicClub";
import Book from "./pages/Book";
import SpaceCrafts from "./pages/SpaceCrafts";
import AstroTrain from "./pages/AstroTrain";
import Mars from "./pages/mars";

import Navbar from "./components/Navbar";
// import { NavLinks } from NavItems
import { Navlinks } from "./components/NavItems";
export default function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        {/* <div className="flex z-40 absolute justify-between h-[100px] w-screen bg-slate-300">
          <div className="pl-[20px]">
            <div className="font-3xl">Star Trek</div>
            <span>Cosmic Adventure</span>
          </div>
          <nav className="h-[100px] w-[50vw] flex justify-around p-3">
            {Navlinks.map((ele) => {
              return <Navbar drop={ele} />;
            })}
            <button className="h-[40px] text-white p-3 mr-10">Book Now</button>
          </nav>
        </div> */}
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/space" element={<SpaceSuits />} />
          <Route path="/cosmic" element={<CosmicClub />} />
          <Route path="/health" element={<Health />} />
          <Route path="/book" element={<Book />} />
          <Route path="/astro" element={<AstroTrain />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="crafts" element={<SpaceCrafts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
