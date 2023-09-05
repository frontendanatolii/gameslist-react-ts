import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d46c60002f649938a7920f73212dbb4",
  },
});
