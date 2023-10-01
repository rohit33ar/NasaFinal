import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Mars1 from "../assets/images/planetMars/Mars1.jpg";
import mars2 from "../assets/images/planetMars/mars2.jpg";
export default function Mars() {
  return (
    <>
      <div>
        <div className="w-screen h-screen bg-[#d25c21] relative">
          <div className="flex">
            <div className="float-left w-[40%] relative">
              <img src={Mars1} alt="" />
            </div>
            <div className="float-right  w-[60vw] ">
              <h1 className="w-[60vw] font-bold text-5xl mt-10 ml-10">
                HELLO mr. MARS{" "}
              </h1>
              <div className="border w-[30vw] mt-10 ml-40 flex flex-col pl-5 pt-5 bg-[#EEEDED]">
                <h1 className="font-bold text-3xl p-0 mb-2">
                  Quick intro about mr.MARS
                </h1>
                <span className="font-bold">Day</span>
                <span>24.6 hours</span>
                <span className="font-bold">One Year</span>
                <span className="">687 Earth days</span>
                <span className="font-bold">Planet Type</span>
                <span className="">Terrestrial</span>
                <span className="font-bold">Moons</span>
                <span className="">2</span>
                <span className="font-bold">Size</span>
                <span>
                  mars is about half the size of{" "}
                  <span className="font-bold"> Earth</span>
                </span>
                <span className="font-bold">Atmosphere</span>
                Thin Atmosphere made up mostly corbon dioxide, nitrogen, & argon
                gases
                <span className="font-bold">Distance from earth</span>
                <span>228 million kilometers</span>
              </div>
            </div>
          </div>
          <div className="font-bold w-[80vw] flex items-center justify-center mx-auto mt-16">
            <h1 className="font-bold text-4xl text-left space-y-1 ">
              Absolutely! Let's dive into some fascinating facts about Mars and
              the groundbreaking inventions that have contributed to our
              understanding of the Red Planet.
            </h1>
          </div>
        </div>
        {/* page2 */}
      </div>
    </>
  );
}
// import React from "react";

// export const mars = () => {
//   return (
//     <div>
//       <a href="https://science.nasa.gov/mars/">Mars</a>
//     </div>
//   );
// };
// export default mars;
