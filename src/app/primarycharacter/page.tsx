"use client";

import CharacterModal from "@/components/charactermodal";
import { useAppContext } from "@/context";
import { AppData } from "../api/AppData";
import CharacterTraitModal from "@/components/charactertrait";
import Link from "next/link";
import { Utils } from "../utils";
import Heading from "@/components/heading";
import Body from "@/components/body";
import Divider from "@/components/divider";
import PageLink from "@/components/pagelink";
import Steps from "@/components/steps";
import Step from "@/components/step";

const PrimaryCharacter = () => {
  const {
    primaryCharacter,
    primaryCharacterTrait,
    primaryCharacterName,
    handlePrimaryCharacterNameChange,
  } = useAppContext();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <Steps>
        <Step id={1} label="Season" active={true} />
        <Step id={2} label="Location" active={true} />
        <Step id={3} label="Character" active={true} />
        <Step id={4} label="Scenario" />
        <Step id={5} label="Complete" />
      </Steps>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Heading value="Character" />
        <Body
          value=" Every story needs a hero character, here you can create your own and
            even give them a name..."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-lg">
            <div className="flex items-center gap-4">
              <img
                src={
                  "/assets/Character_Traits/" +
                  Utils.getCharacterTraitByName(primaryCharacterTrait).filename
                }
                alt=""
                className="size-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="text-lg uppercase text-gray-900 pt-4 pb-2">
                  Character Trait
                </h3>

                <p className="mt-0.5 text-gray-700">
                  <CharacterTraitModal />
                </p>
              </div>
            </div>
          </div>

          <div className="h-32 rounded-lg">
            <div className="flex items-center gap-4">
              <img
                src={
                  "/assets/Characters/" +
                  Utils.getCharacterByName(primaryCharacter).filename
                }
                alt=""
                className="size-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="text-lg text-gray-900 pt-4 pb-2 uppercase">Character</h3>

                <p className="mt-0.5 text-gray-700">
                  <CharacterModal />
                </p>
              </div>
            </div>
          </div>

          <div className="h-32 rounded-lg">
            <div className="flex items-center gap-4">
              <img
                src="data:image/png;base64,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"
                alt=""
                className=" h-24 "
              />

              <div>
                <div className="mt-0.5 text-gray-700">
                  <div className="relative">
                    <input
                      type="text"
                      className="pl-5 pr-8 py-2 border rounded-lg mb-2"
                      placeholder="Enter your name"
                      value={primaryCharacterName}
                      onChange={(e) =>
                        handlePrimaryCharacterNameChange(e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => {
                        handlePrimaryCharacterNameChange(
                          Utils.generateRandomName()
                        );
                      }}
                      className="bg-blue-600 hover:bg-blue-400 px-20 text-centeruppercase text-xs  text-white font-bold py-2 px-8 rounded inline-flex uppercase items-center"
                      >
                      <span className="sr-only">Randomise</span>
                      Randomise
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider />

        <div className="flow-root">
          <p className="float-left">
            <PageLink href="/location" label="Location" align="left" />
          </p>
          <p className="float-right">
            <PageLink href="/scenario" label=" Scenario" align="right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCharacter;
