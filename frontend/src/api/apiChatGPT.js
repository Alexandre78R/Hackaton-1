import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const api = async (pays) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Donne moi 3  activité en liste à faire en  ${pays} , sans conclusion le tout écris en maximum de trois lignes.`,
      },
    ],
  });

  console.info(completion.data.choices[0].message);

  const test = completion.data.choices[0].message;
  return test;
};

export default api;
