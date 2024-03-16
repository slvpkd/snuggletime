"use client";
import { motion } from "framer-motion";
import { AppData } from "../api/AppData";
import ImageButton from "@/components/imagebutton";
import Link from "next/link";
import { useAppContext } from "@/context";

const Location = () => {
  const { location, handleLocationChange } = useAppContext();

  const storage = AppData.LOCATIONS.filter((item) => item.name === location)[0];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
          Location ({storage.label})
        </h2>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mb-8 md:grid-cols-5 md:gap-2 xl:gap-2">
          {AppData.LOCATIONS.map((loc, index) => {
            return (
              <ImageButton
                key={index}
                clb={() => handleLocationChange(loc.name)}
                isSelected={loc.name === location}
                src={"/assets/Locations/" + loc.filename}
                title={loc.label}
                width="w-48"
              />
            );
          })}
        </div>
        <div className="flex items-start justify-between gap-8 sm:items-center md:mb-8">
          <p className="max-w-screen-lg text-sm text-gray-500 lg:text-base ">
            {storage.description}
          </p>

          
        </div>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-black my-4"></span>
        </span>
        <Link
            href="/primarycharacter"
            className="inline-block rounded-lg mt-3 border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Next: Create a character
          </Link>
      </div>
    </div>
  );
};

export default Location;
