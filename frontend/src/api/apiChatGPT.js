// const { Configuration, OpenAIApi } = require("openai")
// import { Configuration, OpenAIApi } from "openai";

// export default {
//  text : (pays) => {
//     const configuration = new Configuration({
//         apiKey: "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", // Idéalement, vous aurez mis votre clé api dans l'env
//       })
//     const openai = new OpenAIApi(configuration)
//     const completion = openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: `Donne moi 3 activité à faire en ${pays}` }],
//       })
      

//       return [completion?.data?.choices[0].message]
//   }
// }


import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const api = async  (pays) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Donne moi 3  activité en liste à faire en  ${pays} , sans conclusion le tout écris en maximum de trois lignes.` }],
    });
    
    console.info(completion.data.choices[0].message);
    
    const test = completion.data.choices[0].message;
    return test;
}

export default api;