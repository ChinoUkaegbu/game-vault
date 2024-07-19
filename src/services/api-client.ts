import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2d836ec05d65407fac7a3f7a1f7c61d3",
  },
});
