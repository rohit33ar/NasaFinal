import React from "react";
import appolo from "../assets/images/SpaceSuits/appolo.jpg";
import orion from "../assets/images/SpaceSuits/orion.jpg";
import xmeu from "../assets/images/SpaceSuits/xmeu.jpg";
import sokol from "../assets/images/SpaceSuits/sokol.jpg";
export default function SpaceSuits() {
  return (
    <>
      <div className="w-screen h-screen">
        <h1 className="font-bold text-4xl">Suits for space travel</h1>
        <p className="font-semibold text-xl m-5">
          Space suits, a vital component of our cosmic odyssey, serve
          indispensable roles in safeguarding astronauts and enabling
          exploration beyond our world
        </p>
        <div className="grid grid-cols-2 text-center">
          <div>
            <div className="mb-10">
              <h1 className="font-bold text-2xl">Space Suits</h1>
            </div>
            <div className="mb-10">
              <img
                src={appolo}
                alt=""
                className="w-[20vw] h-[40vh] flex items-center m-auto justify-center"
              />
            </div>
            <div>
              <span>
                <img
                  src={orion}
                  alt=""
                  className="w-[20vw] h-[40vh] flex items-center m-auto justify-center"
                />
              </span>
            </div>
            <div>
              <span>
                <img
                  src={sokol}
                  alt=""
                  className="w-[20vw] h-[40vh] flex items-center m-auto justify-center"
                />
              </span>
            </div>
            <div>
              <span>
                <img
                  src={xmeu}
                  alt=""
                  className="w-[20vw] h-[40vh] flex items-center m-auto justify-center"
                />
              </span>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="font-bold text-2xl">Space suits info</h1>
            <div>
              <div className="w-[40vw] h-[40vh] flex flex-col">
                <span className="font-bold text-xl">APOLLO 7-14 -EMU:</span>
                <span className=" text-xl">
                  <span className="font-bold text-xl">Name: </span>
                  Extravehicular Mobility Unit (EMU)
                </span>
                <span className="font-bold"> Manufacturer: </span>ILC
                Dover (Pressure Suit Assembly) and Hamilton Standard (Portable
                Life Support System) Missions: Apollo 7-14
                Function: Intra-vehicular activity
                (IVA), orbital Extra-vehicular activity (EVA), and terrestrial
                EVA Operating Pressure: 3.7 psi (25.5 kPa) IVA Suit Mass: 62 lb
                (28.1 kg) EVA Suit Mass: 76 lb (34.5 kg) Total EVA Suit
                Mass: 200 lb (91 kg) Primary Life Support: 6 hours Backup Life
                Support: 30 minutes
              </div>
              <div>suit 2</div>
              <div>suit 3</div>
              <div>suit 4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
