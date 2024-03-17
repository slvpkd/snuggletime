import OpenAI from "openai";



export const generateStory = async (
  synopsis: string,
  clb: (res: string) => void
) => {
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
            synopsis,
        },
      ],
    }),
  })
    .then((data) => data.json())
    .then((data) => clb(data.choices[0].message.content));
};
