"use client";

import { useAppContext } from "@/context";
import { AppData } from "../api/AppData";
import Link from "next/link";

const Scenario = () => {
  const { scenario, handleScenarioChange } = useAppContext();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
          Choose a scenario...
        </h2>

        <div className="flex items-start justify-between gap-2 sm:items-center md:mb-8">
          <p className="max-w-screen-lg text-sm text-gray-500 lg:text-base ">
            Every hero needs a mission, choose your quest wisely...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {AppData.SCENARIO.map((loc, index) => {
            return (
              <div key={index}>
                <div
                  className={`flex divide-x rounded-lg  bg-gray-50 hover:bg-slate-100 cursor-pointer  border-4 ${
                    loc.name === scenario ? "border-violet-500" : ""
                  }`}
                  onClick={() => handleScenarioChange(loc.name)}
                >
                  <div className="flex items-center p-4 text-indigo-500 md:p-6 ">
                    <img
                      src={"../../assets/Scenario/" + loc.filename}
                      loading="lazy"
                      alt={loc.label}
                      className="w-16  aspect-square object-center transition duration-200 "
                    />
                  </div>

                  <div className="p-4 md:p-6 ">
                    <p className="text-gray-500">{loc.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-black my-4"></span>
        </span>
        <div className="flex items-start justify-between gap-8 sm:items-center md:mb-8">
            <Link
              href="/summary"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Summary
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Scenario;
