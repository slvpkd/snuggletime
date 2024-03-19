"use client";

import { Spinner } from "@/components/spinner";
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";
import Steps from "@/components/steps";
import Step from "@/components/step";
import { fetchRequest } from "../api";
import { Utils } from "../utils";



const Story = () => {
  const {
    season,
    location,
    primaryCharacter,
    primaryCharacterTrait,
    primaryCharacterName,
    scenario,
  } = useAppContext();

  const [story, setStory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isLoading, setLoading] = useState<boolean>(true);

  

  const synopsisString = Utils.generateSynopsis(
    season,
    location,
    primaryCharacterName,
    primaryCharacterTrait,
    primaryCharacter,
    scenario
  );

  useEffect(() => {
    setMessage("Generating Story...");

    if (story === "")
      fetchRequest(
        "Please generate a childrens short story which is five paragraphs long using the following synopsis: " +
          synopsisString,
        (res: string) => {
          setStory(res);
        }
      );
  });

  useEffect(() => {
    if (story.length > 0 && title == "") {
      console.log("fetch title");
      setMessage("Generating Title...");

      fetchRequest(
        "Please generate a title for this story, but just show the title: " +
          story,
        (res: string) => {
          setTitle(res);
          setLoading(false);
        }
      );
    }
  }, [story]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <Steps>
        <Step id={1} label="Season" active={true} />
        <Step id={2} label="Location" active={true} />
        <Step id={3} label="Character" active={true} />
        <Step id={4} label="Scenario" active={true} />
        <Step id={5} label="Complete" active={true} />
      </Steps>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {isLoading && <Spinner label={message} />}

        {!isLoading && (
          <div className="mb-4 whitespace-normal text-2xl font-bold text-gray-800 md:mb-8 lg:text-xl xl:mb-12">
            <pre className="text-4xl text-center py-8">{title}</pre>
            <pre className="whitespace-pre-line">{story}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;
