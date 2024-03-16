"use client";

import { useAppContext } from "@/context";
import OpenAI from "openai";
import { useEffect, useState } from "react";

const Story = () => {
  const { storySynopsis } = useAppContext();
  const [ story, setStory ] = useState<string>();

  const openai = new OpenAI({
    apiKey: "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", // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
  });

  const call = async () => {
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "you are a helpful assistant",
          },
          {
            role: "user",
            content:
              "Please generate a childrens short story which is five paragraphs long using the following synopsis: " +
              storySynopsis,
          },
        ],
      }),
    })
      .then((data) => data.json())

      .then((data) => {
        const res = data.choices[0].message.content;
        setStory(res);
        console.log(res);
      });
  };

  useEffect(() => {
    call();
  }, [storySynopsis]);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 md:px-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-8 lg:text-6xl xl:mb-12">
          Story
        </h2>
        <h2 className="mb-4 whitespace-normal text-2xl font-bold text-gray-800 md:mb-8 lg:text-xl xl:mb-12">
        <pre className="whitespace-pre-line">{story}</pre>
        </h2>
        
      </div>
    </div>
  );
};

export default Story;
