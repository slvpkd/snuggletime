import OpenAI from "openai";

export const fetchRequest = async (
  message: string,
  clb: (res: string) => void
) => {
  console.log("Fetching Story...");
  // console.log(process.env.API_URL, process.env.API_KEY);

  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion.choices[0].message.content;
  }

  main()
    .then((res) => clb(res ?? ""))
    .catch((e) => {
      console.log(e);
    });

  // if (process.env.API_KEY!.length > 0)
    // await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content: "you are a helpful assistant",
    //       },
    //       {
    //         role: "user",
    //         content: message,
    //       },
    //     ],
    //   }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => clb(data.choices[0].message.content))
    //   .catch((e) => {
    //     console.log(e);
    //   });
};
