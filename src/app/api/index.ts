import OpenAI from "openai";

export const fetchRequest = async (
  message: string,
  clb: (res: string) => void
) => {
  console.log("Fetching Story...");
  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
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
          content: message,
        },
      ],
    }),
  })
    .then((data) => data.json())
    .then((data) => clb(data.choices[0].message.content))
    .catch((e) => {
      console.log(e);
    });
};
