const fetch = require('node-fetch');
require('dotenv').config();
const NatLangUnderstanding = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const natLangUnderstanding = new NatLangUnderstanding({
  version: "2019-07-12",
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_API_KEY,
  }),
  serviceUrl: process.env.IBM_URL,
});

module.exports = {
  produceGif: async (req, res) => {
    const { submittedText } = req.body;
    const analyzeParameters = {
      text: submittedText,
      features: {
        keywords: {
          limit: 5,
        },
      },
    };
    natLangUnderstanding
      .analyze(analyzeParameters)
      .then((analysisResults) => {
        const results = JSON.parse(JSON.stringify(analysisResults, null, 2));
        if (!results.result.keywords.length) {
          return res.send({ Success:false, message:"Error: text was not analyzed."});
        }
        const oneKeyword = results.result.keywords[0].text;

        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=1&q=${oneKeyword}`
        )
          .then((res) => res.json())
          .then((data) => {
            const gifUrl = data.data[0].images.downsized.url;
            return res.send({
              success: true,
              message: "Success: gifUrl is received.",
              text: submittedText,
              gifUrl: gifUrl,
            });
          })
          .catch((e) => {
            console.log("Error:", e);
            return res.send({
              success: false,
              message: "Error: giphy could not get a gifUrl.",
            });
          });
      })
      .catch((e) => {
        console.log("error:", e);
      });
  },
};
