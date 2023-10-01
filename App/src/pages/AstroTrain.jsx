import React from "react";
import AirBearing from "../assets/images/AstroTraining/Air-Bearing.jpg";
import Buoyancy from "../assets/images/AstroTraining/Buoyancy.jpg";
import Kc135 from "../assets/images/AstroTraining/Kc135.png";
import mockup from "../assets/images/AstroTraining/mockup.jpg";
export default function Training() {
  return (
    <>
      <div className="w-screen h-[150vh] relative top-0">
        <div className="relative ml-5 text-black">
          <h1 className="text-4xl font-bold mb-10 mt-2">Astronauts Training</h1>
          <p className="text-xl w-[95vw] font-semibold">
            Becoming a space traveler is not an ordinary achievement; it's a
            testament to dedication, perseverance, and a passion for the cosmos.
            From the moment you join our astronaut candidate program, the real
            work begins. Over the course of up to two intense training, you will
            transform into a fully qualified astronaut, ready to embark on
            journeys that most can only dream of.
          </p>
          <br />
          <div className="main">
            <div className="flex ml-10">
              <div className="float-left ">
                <h3 className="font-bold text-2xl">
                  From Astronomy to Medical Expertise
                </h3>
                <p className="text-xl m-3 w-[30vw]">
                  Astronauts go beyond science, learning about medical
                  procedures to handle health-related challenges during their
                  space missions.
                </p>
              </div>
              <div className="float-right ml-10">
                <h3 className="font-bold text-2xl">Masters of Communication</h3>
                <p className="text-xl m-3 w-[30vw]">
                  {" "}
                  Public speaking classes equip astronauts to effectively convey
                  their experiences and the significance of space exploration to
                  diverse audiences.
                </p>
              </div>
            </div>
            <div className="flex relative left-10 mt-10">
              <div className="float-left">
                <h4 className="font-bold text-2xl">
                  Survival in Extreme Conditions
                </h4>
                <p className="text-xl m-3 w-[30vw]">
                  {" "}
                  Rigorous survival training ensures astronauts can manage
                  emergencies in space and on celestial bodies, demonstrating
                  adaptability under pressure.
                </p>
              </div>
              <div className="float-right w-[40vw]">
                <h3 className="font-bold text-2xl">Ready for Any Challenge</h3>
                <p className="text-xl m-3 ">
                  {" "}
                  Comprehensive training transforms astronauts into adaptable
                  experts, prepared to handle the unexpected and thrive in the
                  space environment.
                </p>
              </div>
            </div>
            <div className="w-[40vw] relative left-20 mt-10">
              <h3 className="font-bold text-2xl ">
                Book Your Journey with Confidence
              </h3>
              <p className="text-xl m-3 w-[40vw]">
                Highlighting the importance of well-rounded training for safe
                and unforgettable space tourism experiences.
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-5">
              Space Vehical Mock-up{" "}
            </h3>
            {/* image1 */}
            <div className="flex w-full">
              <div className=" float-left">
                <img src={mockup} alt="" className="w-[30vw]" />
              </div>
              <div className="float-right ml-4">
                <h4 className="font-semibold text-l mb-5 w-[50vw]">
                  The image depicts astronauts practicing space activities in
                  the Space Vehicle Mockup Facility (SVMF), a crucial training
                  ground where they familiarize themselves with life-sized
                  models of spacecraft.
                </h4>
                <p className=" w-[50vw] text-l">
                  Astronauts use mock-ups in the SVMF to simulate space
                  missions, gaining practical experience on how to move and work
                  aboard the Space Shuttle Orbiter and the International Space
                  Station (ISS) before their actual missions.
                </p>
              </div>
            </div>
          </div>
          <h4 className="text-xl font-bold mt-10">
            Preparing for Microgravity
          </h4>
          <p className="text-xl mt-5 w-[90vw] ">
            How do Astronauts practice for being in space? There are many things
            to learn about being in the almost weightless condition known as
            microgravity
          </p>
          {/* image2 */}
          <div className="flex">
            <div className="float-left w-[70vw]">
              <h4 className="font-semibold text-xl m-5 ml-0">KC-135</h4>
              <p className="text-xl">
                {" "}
                Known as the "Weightless Wonder" or "Vomit Comet," this aircraft
                offers astronauts around 20-25 seconds of zero gravity during
                parabolic flight, though some may experience motion sickness,
                leading to one of its nicknames.
              </p>
            </div>
            <div className="float-right">
              <img src={Kc135} alt="" className="w-[30vw] mr-[10vw] mt-7" />
            </div>
          </div>
          {/* image3 */}
          <h3 className="text-xl font-bold mt-5">
            The Precision Air-Bearing Floor
          </h3>
          <div className="flex mt-10">
            <div className="float-left">
              <img src={AirBearing} alt="" className="w-[35vw]" />
            </div>
            <div className="float-right">
              <h3 className="text-xl font-semibold ml-2 w-[50vw]">
                The image shows astronauts training on the Precision Air-Bearing
                Floor, a specialized training tool used to simulate moving large
                objects in a frictionless environment like space.
              </h3>
              <p className="w-[50vw] ml-2 mt-5">
                Moving large objects in space presents unique challenges due to
                the absence of friction. Astronauts train on tools like the
                Precision Air-Bearing Floor to learn how to manage objects that
                can continue floating without restraint.
              </p>
            </div>
          </div>
          <p className="text-xl w-[90vw] mt-5">
            The Precision Air-Bearing Floor allows astronauts to move huge
            objects as they might in space. It is a large, smooth metal floor.
            The large objects have air forced through them. It is like a large
            air hockey table.
          </p>
          <h3 className="text-xl font-semibold mt-5">
            The Neutral Bruoyancy Laboratory
          </h3>
          <div className="flex pr-2 ">
            <div className="float-left">
              <h3 className="w-[60vw]">
                The image showcases astronauts using the Neutral Buoyancy
                Laboratory, where they practice extravehicular activities
                (spacewalks) to simulate the weightlessness of space
                environments.
              </h3>
              <p className="w-[65vw]">
                Astronauts undergo spacewalk training by submerging in the
                enormous Neutral Buoyancy Laboratory (NBL), a massive pool
                measuring 62 meters in length, 31 meters in width, and 12 meters
                in depth, containing 22.7 million liters (6.2 million gallons)
                of water. This underwater practice simulates the weightlessness
                of space and helps astronauts prepare for extravehicular
                activities.
              </p>
            </div>
            <div float-right>
              <img src={Buoyancy} alt="" className="w-[30vw]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
