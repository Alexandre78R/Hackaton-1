import { Configuration, OpenAIApi } from "openai";

export default {
  text: async (pays) => {
    const configuration = new Configuration({
      apiKey: "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", // Idéalement, vous aurez mis votre clé api dans l'env
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `3 activités à faire en ${pays}` }],
    });

    return [completion.data.choices[0].message];
  },
};
