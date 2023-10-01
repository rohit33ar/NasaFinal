import React from "react";
export default function Book() {
  return (
    <>
      <div className="w-screen relative bg-black p-5">
        <div className="w-screen text-white font-bold ml-5 ">
          <h1>Star Trek</h1>
          <span>Journey to Future</span>
        </div>
        <div className="font-bold text-black bg-yellow-300 w-[100vw] text-center  my-20 h-[20vh] p-10">
          <h1>BOOK YOUR DREAM PLANET TRIP</h1>
          <span className="text-2xl">
            Reserve Your seat in Cosmic Advanture
          </span>
        </div>
        <div className=" relative left-[20vw] bg-black h-auto text-white ">
          <h3 className="font-semibold text-4xl mb-10">Contact Details</h3>
          <div className="flex">
            <div className="float-left">
              <h3 className="font-bold mb-2">First Name</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
            <div className="float-right ml-14">
              <h3 className="font-bold mb-2">Last Name</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
          </div>
          <div className="mt-5 ">
            <h3 className="font-bold mb-2">Enter Email Address</h3>
            <input
              type="text"
              className="bg-black w-[54vw] h-10 border"
            ></input>
          </div>
          <div className="mt-5">
            <h3 className="font-bold mb-2">Phone Number</h3>
            <input
              type="number"
              className="w-[54vw] bg-black border h-10"
            ></input>
          </div>
          <div className="mt-5">
            <h3 className="font-bold mb-2">Enter Your Address</h3>
            <input
              type="text"
              className="bg-black w-[54vw] h-10 border"
            ></input>
          </div>
          <div className="flex mt-5">
            <div className="float-left">
              <h3 className="font-bold mb-2">City</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
            <div className="float-right ml-14">
              <h3 className="font-bold mb-2 ">State</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="float-left">
              <h3 className="font-bold mb-2">Zip/postal code</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
            <div className="float-right ml-14">
              <h3 className="font-bold mb-2 ">country</h3>
              <input
                type="text"
                className="w-[25vw] h-[5vh] border bg-black"
              ></input>
            </div>
          </div>
          <div className="mt-10 ">
            <h3 className="font-bold mb-2">Date of birth</h3>
            <input
              type="date"
              className="bg-black w-[54vw] h-10 border"
            ></input>
          </div>
          <div className="mt-10">
            <h4 className="font-bold text-4xl">Tell Us About You</h4>
            <p className="font-semibold my-2">
              In a few words, tell about yourself(500 characters or less).
            </p>
            <input
              type="text"
              className="bg-black w-[54vw] h-40 border"
            ></input>
          </div>
          <div>
            <h3 className="mt-5 font-bold mb-2">
              what other notable adventure have you experienced?
            </h3>
            <input
              type="text"
              className="w-[54vw] h-16 border bg-black"
            ></input>
          </div>
          <div className="mt-5">
            <h3 className="font-bold mb-2">
              Which adventurous cosmic journey do you want to undertake?
            </h3>
            <select className="bg-black text-white w-[54vw] h-14 border p-2">
              <option value="none">Select an option</option>
              <option value="earth">Earth sub-orbit</option>
              <option value="moon">Moon</option>
              <option value="mars">Mars</option>
            </select>
          </div>
          <div className="mt-10">
            <h3 className="font-semibold text-3xl">
              Help us Find the right time for You
            </h3>
            <h4 className="font-bold my-2">
              When are you interested for adventure
            </h4>
            <input
              type="date"
              className="w-[54vw] h-14 bg-black border font-bold"
            ></input>
          </div>
          <div>
            <h3 className="font-bold my-2">
              How many seats would you like to purchase together
            </h3>
            <input
              type="number"
              className="bg-black w-[54vw] h-12 border"
            ></input>
          </div>
          <div className="mt-5">
            <input type="checkbox" className="mr-2" />
            <label>
              Please click to confirm your consent to our{" "}
              <a href="">Privacy Plicy</a>, <a href="">Terms & conditions</a>
            </label>
          </div>
          <div className="item-center mb-5">
            <input
              type="submit"
              className="border w-40 p-2 mt-5 font-bold"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
