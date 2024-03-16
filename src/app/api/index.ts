import OpenAI from "openai";

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { answer: string; }): void; new(): any; }; }; }) {

    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
  
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: ""
    ,
    });
  
    res.status(200).json({ answer: response.choices[0].text });
  }