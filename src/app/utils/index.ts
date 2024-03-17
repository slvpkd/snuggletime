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

  export const getCharacterTraitByName = (value: string) =>
    AppData.CHARACTER_TRAITS.filter((item) => item.name === value)[0];
}
