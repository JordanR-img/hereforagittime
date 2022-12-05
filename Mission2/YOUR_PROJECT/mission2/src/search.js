import Axios from "axios";
import { useState } from "react";
// const CognitiveServicesCredentials =
//   require("ms-rest-azure").CognitiveServicesCredentials;
// const WebSearchAPIClient = require("azure-cognitiveservices-websearch");
// require("dotenv").config();
const KEY2 = "";

const requestOptions = {
  method: "GET",
  headers: {
    "Ocp-Apim-Subscription-Key": KEY2,
  },
};

// hostname: 'api.bing.microsoft.com',
// path:     '/v7.0/search?q=' + encodeURIComponent(query),
// headers: { '0cp-Apim-Subscription-Key': KEY },

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

// module.exports = {
//     // Other rules...
//     plugins: [
//         new NodePolyfillPlugin()
//     ]
// }

// `https://api.bing.microsoft.com/v7.0/search?q=${value}`

export default function GetData() {
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");

  const results = () => {
    Axios.get(
      `https://api.bing.microsoft.com/v7.0/custom/images/search?q=${value}&customconfig=0de2bf47-4da4-49ac-87a5-865c00382456&mkt=en-US`,
      requestOptions
    ).then((res) => {
      console.log(res.data);
      setSearch([...res.data.value]);
    });
  };
  return (
    <div>
      {/* <input type="text" value={search}/> */}
      <input
        placeholder="search for car"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <span onClick={results}>Search</span> <br></br>
      {search.map((value, index) => {
        return <img key={index} src={value.thumbnailUrl} alt="car" />;
      })}
    </div>
  );
}
