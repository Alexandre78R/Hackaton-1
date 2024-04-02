import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "", // key dead
});
const openai = new OpenAIApi(configuration);

const api = async (pays) => {
    console.log("pays", pays)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Give me a list of 3 activites to do in ${pays} , without a conclusion and in a total of 3 ligns.`,
      },
    ],
  });

  console.info(completion.data.choices[0].message);

  const test = completion.data.choices[0].message;
  return test;
};

export default api;
