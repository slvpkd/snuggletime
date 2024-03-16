"use client";

import Link from "next/link";
import { AppData } from "../api/AppData";
import { useAppContext } from "@/context";
import { useEffect } from "react";

const Summary = () => {
  const {
    location,
    season,
    primaryCharacter,
    primaryCharacterName,
    primaryCharacterTrait,
    scenario,
    storySynopsis,
    handleStoryChange,
  } = useAppContext();

  const getLocation = () =>
    AppData.LOCATIONS.filter((e) => e.name === location)[0];

  const getSeason = () => AppData.SEASONS.filter((e) => e.name === season)[0];

  const getGrammerPrefix = (character: string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toLocaleLowerCase()) ? "An" : "A";
  };

 useEffect(()=> {
    const synopsis: string = `It's ${getSeason().label} time in 
    ${getGrammerPrefix(getLocation().label[0]).toLocaleLowerCase()}${" "}
    ${getLocation().label},${" "}
    ${primaryCharacterName},${" "}
    ${getGrammerPrefix(getPrimaryCharacter().trait.label[0])}${" "}
    ${getPrimaryCharacter().trait.label}${" "}
    ${getPrimaryCharacter().character.label} is ${getScenario().label}${" "}`;        
    
    handleStoryChange(synopsis)
 },[location,season,primaryCharacter,primaryCharacterName,primaryCharacterTrait,scenario])
  

  const generateCharacterProfile = (
    characterId: string,
    traitId: string,
    characterName: string
  ) => {
    const character = AppData.CHARACTERS.filter(
      (e) => e.name === characterId
    )[0];
    const trait = AppData.CHARACTER_TRAITS.filter((e) => e.name === traitId)[0];

    const prefix = getGrammerPrefix(trait.label[0]);
    const profile =
      characterName !== ""
        ? `${prefix} ${trait.label} ${character.label} called ${characterName}`
        : `${prefix} ${trait.label} ${character.label}`;
    return profile;
  };

  const getPrimaryCharacter = () => {
    const character = AppData.CHARACTERS.filter(
      (e) => e.name === primaryCharacter
    )[0];
    const trait = AppData.CHARACTER_TRAITS.filter(
      (e) => e.name === primaryCharacterTrait
    )[0];

    return {
      character: character,
      trait: trait,
      name: primaryCharacterName,
      description: generateCharacterProfile(
        primaryCharacter,
        primaryCharacterTrait,
        primaryCharacterName
      ),
    };
  };

  const getScenario = () =>
    AppData.SCENARIO.filter((e) => e.name === scenario)[0];

  const handleGeneration = () => {};

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
          Story Synopsis
        </h2>

        <div className="flex items-start justify-between gap-2 sm:items-center md:mb-8">
          <p className="max-w-screen-lg text-3xl text-gray-500 lg:text-3xl">
            {storySynopsis}
          </p>
        </div>
        

        <Link
            href="/story"
            className="inline-block rounded-lg mt-3 border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Next: Generate Story
          </Link>
      </div>
    </div>
  );
};

export default Summary;
