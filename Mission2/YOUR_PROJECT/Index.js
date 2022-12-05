const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');
const env = require('dotenv')
env.config()
const express = require("express")
const server = express()
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(3000, () => {
    console.log("i'm listening on port", PORT)
})



let credentials = new CognitiveServicesCredentials(process.env.KEY);
let webSearchApiClient = new WebSearchAPIClient(credentials);


webSearchApiClient.web.search('trees').then((result) => {
    let properties = ["images", "webPages", "news", "videos"];
    for (let i = 0; i < properties.length; i++) {
        if (result[properties[i]]) {
            console.log(result[properties[i]].value);
        } else {
            console.log(`No ${properties[i]} data`);
        }
    }
}).catch((err) => {
    throw err;
})

function searchValue() {
    console.log("ive been clicked")
}