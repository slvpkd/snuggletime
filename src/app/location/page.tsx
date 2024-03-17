"use client";
import { motion } from "framer-motion";
import { AppData } from "../api/AppData";
import ImageButton from "@/components/imagebutton";
import Link from "next/link";
import { useAppContext } from "@/context";
import { Utils } from "../utils";
import Heading from "@/components/heading";
import Body from "@/components/body";
import Divider from "@/components/divider";
import PageLink from "@/components/pagelink";

const Location = () => {
  const { location, handleLocationChange } = useAppContext();

  const data = Utils.getLocationByName(location);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Heading value={`Location (${data.label})`} />

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
          <Body value={data.description ?? ""} />
        </div>
        <Divider />

        <div className="flow-root">
          <p className="float-left">
            <PageLink href="/seasons" label="Previous: Season" />
          </p>
          <p className="float-right">
            <PageLink
              href="/primarycharacter"
              label="Next: Create a character"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
