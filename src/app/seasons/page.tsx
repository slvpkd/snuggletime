"use client";
import { motion } from "framer-motion";
import { AppData } from "../api/AppData";
import ImageButton from "@/components/imagebutton";
import Link from "next/link";
import { useAppContext } from "@/context";
import { Utils } from "../utils";
import Heading from "@/components/heading";
import Body from "@/components/body";
import PageLink from "@/components/pagelink";
import Divider from "@/components/divider";
import Steps from "@/components/steps";
import Step from "@/components/step";

const Seasons = () => {
  const { season, handleSeasonChange } = useAppContext();
  const data = Utils.getSeasonByName(season);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <Steps>
        <Step id={1} label="Season" active={true} />
        <Step id={2} label="Location" />
        <Step id={3} label="Character" />
        <Step id={4} label="Scenario" />
        <Step id={5} label="Complete" />
      </Steps>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Heading value={`Season (${data.label})`} />
        <Body
          value=" Every story has a beginning, and ours starts with the season. Select
            a season below to begin our magical journey together..."
        />

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
        <Body value={data.description ?? ""} />
        <Divider />

        <div className="flow-root">
          <p className="float-right">
            <PageLink href="/location" label=" Location" align="right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seasons;
