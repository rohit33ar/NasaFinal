import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import intro from "../assets/videos/intro.mp4";
import planets from "../assets/images/planets.jpg";
import earth from "../assets/images/Earth1.jpg";
import vmoon from "../assets/images/vmoon.jpg";
import mars from "../assets/images/6_mars.jpg";
import spaceship from "../assets/images/spacetrip.jpg";
import Navbar from "../components/Navbar";
import { Navlinks } from "../components/NavItems.js";
export default function Home() {
  return (
    <>
      {/* 1st page of home */}
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={intro} type="video/mp4" />
        </video>
        {/* 1st of Home */}
        <div className="w-screen h-screen  text-white relative z-10 font-bold pt-7">
          {/* Navigation bar */}
          <div className="flex z-40 absolute justify-between h-[100px] w-screen">
            <div className="pl-[20px]">
              <div className="text-4xl font-bold">Star Trek</div>
              <span>Cosmic Adventure</span>
            </div>
            <nav className="h-[100px] w-[50vw] flex justify-around p-3">
              {Navlinks.map((ele) => {
                return <Navbar drop={ele} />;
              })}
              <button className="h-[40px] text-white py-1 mr-10 font-bold ">
                <a href="book">Book Now</a>
              </button>
            </nav>
          </div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-xl lg:text-3xl mb-4 lg:mb-8">WELCOME TO THE</h3>
            <h1 className="text-2xl lg:text-5xl">journey of planets</h1>
          </div>
        </div>

        {/* Second section */}
        <div className="relative w-screen h-auto text-white">
          <div className="absolute top-0 left-0 bg-black">
            <div className="mt-20 relative left-[5vw]">
              <h1 className="font-bold text-4xl mb-5">Let's Begin Journey</h1>
              <p className="w-[80vw] text-2xl">
                As of now, we are providing services for visiting the Moon,
                Mars, Earth's orbit, and space stations. In the future, we plan
                to upgrade these routes.
              </p>
            </div>
            <h1 className="mt-10 font-bold mb-10 text-center">
              Find your desired planetary destination
            </h1>
            {/* earth view */}
            <div className="flex">
              {/* <h3 className="text-4xl font-bold">SEE Earth from space</h3> */}
              <div className="w-[40vw]">
                <img
                  src={earth}
                  alt="earth"
                  className="relative left-[5vw] my-auto  w-[45vh] mt-10"
                />
              </div>
              <div className=" min-h-[50vh] w-[50vw]">
                <h1 className="relative left-10 min-h-[20px] mt-10 w-[50vw] font-bold">
                  Experience the view of Earth from space
                </h1>
                <div className="right-[10vw] break-words relative left-20 top-5 text-xl flex flex-col">
                  {/* <span className="font-bold text-2xl">Tour Details :</span>
                  <span className="mt-1 font-bold">Earth view from space</span>
                  <span className="font-bold"></span> */}
                  Experience the awe-inspiring sight of Earth from space, where
                  its vibrant blue oceans and lush green continents contrast
                  against the backdrop of the cosmos. This rare perspective
                  offers a profound appreciation for our planet's natural
                  beauty, a view cherished by only a fortunate few
                </div>
                <div className="relative top-10 left-20 text-black">
                  <button className="mr-10 bg-blue-200 border font-bold">
                    Tour Guide
                  </button>
                  <button className="font-bold bg-blue-200 border">
                    Trip Demo
                  </button>
                </div>
              </div>
              <hr />
            </div>
            {/* visit Monn */}
            <div className="flex mt-[70px]">
              <div className="w-[40vw] relative left-[15vw] mt-10">
                <h1 className="font-bold">Visit the Moon</h1>
                <p className="text-xl mt-5">
                  Elevate your vacation beyond the stars and set foot on the
                  lunar surface. Your escape to the Moon is not just a dream;
                  it's a reality waiting to be explored. Discover the
                  extraordinary, visit the Moon on your vacation, and create
                  memories that defy earthly boundaries
                </p>
                <div className="mt-5 text-black">
                  <button className="mr-10 bg-blue-200">Tour Guide</button>
                  <button className="bg-blue-200">Trip Demo</button>
                </div>
              </div>
              <div className="right-0 my-auto">
                {" "}
                <img
                  src={vmoon}
                  alt="moon"
                  className="w-[30vw] relative left-[16vw]"
                />
              </div>
            </div>
            {/* visit mars */}
            <div className=" flex mt-16">
              {/* <h3 className="text-4xl font-bold">SEE Earth from space</h3> */}
              <div className="left-0">
                <img
                  src={mars}
                  alt="earth"
                  className="w-[30vw] my-auto relative left-[12vw]"
                />
              </div>
              <div className="float-right relative left-[12vw]">
                <h1 className="relative left-10 mt-10 font-bold ">
                  Visit The Mars
                </h1>
                <p className="w-[40vw] relative left-20 top-5 text-xl justify content-end">
                  Take your vacation to new heights and step onto the Martian
                  landscape. Your journey to Mars is not a mere fantasy; it's a
                  tangible adventure waiting to unfold. Uncover the
                  extraordinary, visit Mars on your vacation, and craft memories
                  that transcend the boundaries of Earth
                </p>
                <div className=" relative top-10 left-20 text-black">
                  <button className="mr-10 bg-blue-200 border font-bold ">
                    Tour Guide
                  </button>
                  <button className="font-bold bg-blue-200 border">
                    Trip Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="w-screen h-screen top-10 bgm">
              <div className="mt-20 text-white font-bold">
                <h1 className="font-bold text-6xl text-center">
                  Journey Beyond the Stars
                </h1>
                <p className="text-2xl top-10 w-[80vw] m-10">
                  We are thrilled to extend this exclusive invitation to you for
                  an extraordinary cosmic adventure with our Planetary Tourism
                  Office.
                </p>
                <p className="text-2xl top-10 w-[80vw] ml-10">
                  <span className="text-black">
                    We prioritize your safety above all{" "}
                  </span>
                  else. Don't hesitate to embark on this extraordinary journey
                  <span className="text-black">
                    with us, where wonder and security go
                  </span>{" "}
                  hand in hand
                </p>
                <p className="text-2xl top-10 w-[80vw] m-10">
                  <span className="text-black">
                    {" "}
                    Simply place your booking and prepare for an interstellar
                  </span>
                  adventure that will leave you
                  <span className="text-black">
                    with memories of cosmic proportions. Limited slots
                    available, so
                  </span>{" "}
                  secure your seat among the stars today!
                </p>
              </div>
            </div>
            <footer>
              <div className="w-screen h-auto">
                <div className="flex gap-5 w-screen min-h-[15vh] bg-blue-600 relative p-10 items-center justify-between">
                  <div className=" pl-[15vw] md:pl-[5vw]">
                    <h2 className="text-2xl font-bold item-start ju">
                      NEWSLETTER
                    </h2>
                    <p className="text-x mt-3">
                      Join Space Trek Adventure newsletter for updates
                    </p>
                  </div>
                  <div className="pr-[15vw] md:pr-[5vw]">
                    {/* {" "} */}
                    {/* Added margin for spacing */}
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="w-[20em] md:w-[14em] md:text-lg md:h-[2em] h-[2.5em] px-[20px] text-xl placeholder:text-white border bg-transparent rounded-lg p-3 mr-3"
                    />
                    <button className=" bg-blue-700 font-bold">JOIN</button>
                  </div>
                </div>
                <div className=" min-h-[40vh] sm:left py-10">
                  <div className="flex pl-[10vw]">
                    <div className=" float-left w-[30vw]  mt-[15vh]">
                      <h1 className="font-bold text-2xl text-left">
                        STAR TREK
                      </h1>
                      <h4 className="font-bold mt-2">
                        Join to The STAR TREK NewsLetter
                      </h4>
                      <div className="mt-2 text-justify w-[70%]">
                        Stay informed about the latest NASA discoveries and
                        space insights through our newsletter. Explore the
                        universe's wonders one newsletter at a time
                      </div>
                      <button className="mt-5 w-[10vw] text-white font-bold bg-blue-700">
                        Join
                      </button>
                    </div>
                    <div className="float-right w-[30vw]  space-y-4 mt-10 border-r border-l pl-10">
                      <h6>spacecraft</h6>
                      <h6>astronaut suits</h6>
                      <h6>Become an Astronaunt</h6>
                      <h6>ISS</h6>
                      <h6>Visit Solor system</h6>
                      <h6>Explore Space</h6>
                      <h6>Space Hotel</h6>
                      <h6>Safety</h6>
                      <h6>Path Map</h6>
                    </div>
                    <div className="float-right space-y-4 ml-10 mt-10">
                      {" "}
                      <h6>Health</h6>
                      <h6>Food</h6>
                      <h6>Communication</h6>
                      <h6>Careers</h6>
                      <h6>Privacy & Policies</h6>
                      <h6>Contact</h6>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
