import React from "react";
export default function Food() {
  return (
    <>
      <div className=" h-screen w-screen p-10 pt-2">
        <div className=" bg-white  ">
          <h1 className="font-bold text-4xl ">
            Feeding the Stars: A Journey into Space Food
          </h1>
          <p className="text-xl font-semibold mt-5">
            Space food is specially created for astronauts during space
            missions, designed to offer a balanced diet while being easy to
            store, prepare, and consume in weightless environments. Most space
            food is freeze-dried for extended shelf life.
          </p>
          <h3 className="text-xl font-bold">Types of Space Food</h3>
          <div className="">
            <p className="mt-2">
              Beverages (B): Freeze-dried drink mixes, such as coffee or tea,
              are provided in sealed pouches.{" "}
            </p>

            <p className="mt-2">
              Fresh Foods (FF): Perishable items likefruits, vegetables, and
              tortillas, delivered by resupply missions.
            </p>

            <p className="mt-2">
              {" "}
              Irradiated (I) Meat: Beef steak sterilized with ionizing radiation
              to prevent spoilage.
            </p>

            <p className="mt-2">
              {" "}
              Intermediate Moisture (IM): Foods like sausage and beef jerky with
              some moisture but not enough to spoil.
            </p>

            <p className="mt-2">
              {" "}
              Natural Form(NF): Shelf-stable commercial foods like nuts,
              cookies, and granola bars.{" "}
            </p>
            <p className="mt-2">
              {" "}
              Rehydratable (R) Foods: Dehydrated foods that are rehydrated with
              hot water before consumption.{" "}
            </p>
            <p className="mt-2">
              {" "}
              Thermostabilized (T): Foods heated to destroy pathogens and
              enzymes that cause spoilage.{" "}
            </p>
            <p className="mt-2">
              Extended Shelf-Life Bread Products: Special bread with a shelf
              life of up to 18 months. Staples and Condiments: Common items not
              classified, such as salt and pepper.
            </p>
            <h3 className="font-bold text-xl mt-10">Historical Overview:</h3>
            <p className="w-[80vw]">
              Early space food included cubes, freeze-dried powders, and thick
              liquids. Mercury missions featured aluminum tubes, which were
              later discontinued. Gemini missions improved packaging and
              introduced more variety. Skylab allowed for refrigeration and
              improved eating arrangements. Shuttle and ISS missions aimed for
              more acceptable and palatable food.
            </p>
            <h3 className="font-bold text-xl mt-5 w-[80vw]">
              Modern Space Food:
            </h3>
            <p>
              ISS astronauts enjoy a variety of main courses and personalized
              menus. Fresh fruits and vegetables are part of the diet. NASA
              focuses on thermostabilized foods due to limited water supply.
              Efforts are ongoing to develop food for long-duration missions and
              lunar exploration.
            </p>
            <h3 className="font-bold text-xl mt-5">
              International Space Food:
            </h3>

            <p className="w-[80vw]">
              Different countries offer their astronauts a variety of culturally
              specific space foods. Italy introduced espresso to the ISS with
              the ISSpresso machine. Japan, Korea, Russia, and China have their
              unique space food offerings. China's Tiangong station stores a
              range of food items for astronauts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
