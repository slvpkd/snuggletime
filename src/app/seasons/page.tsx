"use client";
import { motion } from "framer-motion";
import { AppData } from "../api/AppData";
import ImageButton from "@/components/imagebutton";
import Link from "next/link";
import { useAppContext } from "@/context";

const Seasons = () => {
  const { season, handleSeasonChange } = useAppContext();

  const storage = AppData.SEASONS.filter((item) => item.name === season)[0];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
          Season ({storage.label})
        </h2>

        <div className="flex items-start justify-between gap-2 sm:items-center mb-8">
          <p className="max-w-screen-lg text-sm text-gray-500 lg:text-base ">
            Every story has a beginning, and ours starts with the season. Select
            a season below to begin our magical journey together...
          </p>

         
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
          {AppData.SEASONS.map((loc, index) => {
            return (
              <ImageButton
                key={index}
                clb={() => handleSeasonChange(loc.name)}
                isSelected={season === loc.name}
                src={"/assets/Seasons/" + loc.filename}
                title={loc.label}
                width="w-48"
              />
            );
          })}
        </div>
        <div className="flex items-start justify-between gap-2 sm:items-center md:mb-8">
          <p className="max-w-screen-lg text-sm text-gray-500 lg:text-base ">
           
            {storage.description}
          </p>

        
        </div>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-black my-4"></span>
        </span>
        <Link
            href="/location"
            className="inline-block rounded-lg mt-3 border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
           Next: Location
          </Link>
      </div>
    </div>
  );
};

export default Seasons;
