import { AppData } from "../api/AppData";

export namespace Utils {
  export const getSeasonByName = (value: string) =>
    AppData.SEASONS.filter((item) => item.name === value)[0];

  export const getLocationByName = (value: string) =>
    AppData.LOCATIONS.filter((item) => item.name === value)[0];

  export const generateRandomName = () =>
    AppData.NAMES[Math.floor(Math.random() * AppData.NAMES.length)];

  export const getCharacterByName = (value: string) =>
    AppData.CHARACTERS.filter((item) => item.name === value)[0];

  export const getScenarioByName = (value: string) =>
    AppData.SCENARIO.filter((item) => item.name === value)[0];

  export const getCharacterTraitByName = (value: string) =>
    AppData.CHARACTER_TRAITS.filter((item) => item.name === value)[0];

  export const getGrammerPrefix = (character: string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character.toLocaleLowerCase()) ? "An" : "A";
  };

  export const generateSynopsis = (
    seasonId: string,
    locationId: string,
    characterNameId: string,
    characterTraitId: string,
    characterTypeId: string,
    scenario: string
  ) => {
    const seasonCritera = `It's ${seasonId} time.`;

    const locationPrefix = Utils.getGrammerPrefix(
      locationId[0]
    ).toLocaleLowerCase();
    const locationName =
      Utils.getLocationByName(locationId).label.toLocaleLowerCase();
    const locationCriteria = `In ${locationPrefix} ${locationName}.`;

    const characterName =
      characterNameId !== "" ? characterNameId : Utils.generateRandomName();
    const characterTrait =
      Utils.getCharacterTraitByName(characterTraitId).label.toLocaleLowerCase();
    const characterPrefix = Utils.getGrammerPrefix(
      characterTrait[0]
    ).toLocaleLowerCase();
    const characterType =
      Utils.getCharacterByName(characterTypeId).label.toLocaleLowerCase();
    const characterCriteria = `${characterName}, ${characterPrefix} ${characterTrait} ${characterType}.`;

    const scenarioCriteria = Utils.getScenarioByName(scenario).label;

    return `${seasonCritera} ${locationCriteria} ${characterCriteria} ${scenarioCriteria}`;
  };
}
