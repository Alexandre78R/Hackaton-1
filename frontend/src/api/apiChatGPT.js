// const { Configuration, OpenAIApi } = require("openai")
import { Configuration, OpenAIApi } from "openai";

export default {
 text : async (pays) => {
    const configuration = new Configuration({
        apiKey: "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", // Idéalement, vous aurez mis votre clé api dans l'env
      })
    const openai = new OpenAIApi(configuration)
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Donne moi 3 activité à faire en ${pays}` }],
      })
      

      return [completion.data.choices[0].message]
  }
}