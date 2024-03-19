"use client";

import { useAppContext } from "@/context";
import { AppData } from "../api/AppData";
import Link from "next/link";
import Heading from "@/components/heading";
import Body from "@/components/body";
import Divider from "@/components/divider";
import PageLink from "@/components/pagelink";
import Steps from "@/components/steps";
import Step from "@/components/step";

const Scenario = () => {
  const { scenario, handleScenarioChange } = useAppContext();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <Steps>
        <Step id={1} label="Season" active={true} />
        <Step id={2} label="Location" active={true} />
        <Step id={3} label="Character" active={true} />
        <Step id={4} label="Scenario" active={true} />
        <Step id={5} label="Complete" />
      </Steps>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Heading value="Scenario" />
        <Body value="Every hero needs a mission, choose your quest wisely..." />

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
                      className="w-16 aspect-square object-center transition duration-200 "
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
        <Divider />

        <div className="flow-root">
          <p className="float-left">
            <PageLink
              href="/primarycharacter"
              label="Character"
              align="left"
            />
          </p>
          <p className="float-right">
            <PageLink href="/story" className="bg-red-600 hover:bg-red-400" label=" Generate Story" align="right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scenario;
