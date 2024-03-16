import { AppData } from "@/app/api/AppData";
import { createContext, useContext, ReactNode, useState } from "react";

type AppContextType = {
  location: string;
  handleLocationChange: (value: string) => void;
  season: string;
  handleSeasonChange: (value: string) => void;
  primaryCharacter: string;
  primaryCharacterName: string;
  primaryCharacterTrait: string;
  storySynopsis: string;
  handleStoryChange: (synopsis: string) => void;
  handlePrimaryCharacterChange: (character: string) => void;
  handlePrimaryCharacterNameChange: (characterName: string) => void;
  handlePrimaryCharacterTraitChange: (characterTrait: string) => void;
  scenario: string;
  handleScenarioChange: (value: string) => void;
};

const AppContextDefaultValue: AppContextType = {
  location: AppData.LOCATIONS[0].name,
  handleLocationChange: (value: string) => {},
  season: AppData.SEASONS[0].name,
  handleSeasonChange: (value: string) => {},
  handleStoryChange: (value: string) => {},
  primaryCharacter: AppData.CHARACTERS[0].name,
  primaryCharacterName: "Owen",
  storySynopsis: "",
  primaryCharacterTrait: AppData.CHARACTER_TRAITS[0].name,
  handlePrimaryCharacterChange: () => {},
  handlePrimaryCharacterTraitChange: () => {},
  handlePrimaryCharacterNameChange: () => {},
  scenario: AppData.SCENARIO[0].name,
  handleScenarioChange: () => {},
};

const AuthContext = createContext<AppContextType>(AppContextDefaultValue);

export function useAppContext() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AppDataProvider({ children }: Props) {
  const [location, setLocation] = useState<string>(
    AppContextDefaultValue.location
  );

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  const [season, setSeason] = useState<string>(AppContextDefaultValue.season);

  const handleSeasonChange = (value: string) => {
    setSeason(value);
  };

  const [storySynopsis, setStorySynopsis] = useState<string>(
    AppContextDefaultValue.storySynopsis
  );

  const [primaryCharacter, setPrimaryCharacter] = useState(
    AppContextDefaultValue.primaryCharacter
  );
  const [primaryCharacterName, setPrimaryCharacterName] = useState(
    AppContextDefaultValue.primaryCharacterName
  );
  const [primaryCharacterTrait, setPrimaryCharacterTrait] = useState(
    AppContextDefaultValue.primaryCharacterTrait
  );

  const handlePrimaryCharacterChange = (character: string) => {
    setPrimaryCharacter(character);
  };

  const handleStoryChange = (value: string) => {
    setStorySynopsis(value);
  };

  const handlePrimaryCharacterTraitChange = (characterTrait: string) => {
    setPrimaryCharacterTrait(characterTrait);
  };

  const handlePrimaryCharacterNameChange = (characterName: string) => {
    setPrimaryCharacterName(characterName);
  };

  const [scenario, setScenario] = useState(AppContextDefaultValue.scenario);

  const handleScenarioChange = (value: string) => {
    setScenario(value);
  };

  const value: AppContextType = {
    location,
    handleLocationChange,
    season,
    handleSeasonChange,
    primaryCharacter,
    primaryCharacterName,
    primaryCharacterTrait,
    storySynopsis,
    handleStoryChange,
    handlePrimaryCharacterChange,
    handlePrimaryCharacterNameChange,
    handlePrimaryCharacterTraitChange,
    scenario,
    handleScenarioChange,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
