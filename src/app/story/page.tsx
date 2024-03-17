"use client";

import { Spinner } from "@/components/spinner";
import { useAppContext } from "@/context";
import OpenAI from "openai";
import { useEffect, useState } from "react";
import { generateStory } from "../api";

const Story = () => {
  const { storySynopsis } = useAppContext();
  const [story, setStory] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    generateStory(storySynopsis, (res: string) => {
      setStory(res);
      setLoading(false);
    });
  }, [storySynopsis]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {isLoading && <Spinner />}

        {!isLoading && (
          <h2 className="mb-4 whitespace-normal text-2xl font-bold text-gray-800 md:mb-8 lg:text-xl xl:mb-12">
            <pre className="whitespace-pre-line">{story}</pre>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Story;
