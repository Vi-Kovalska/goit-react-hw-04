import axios from "axios";
const myApiKey = "aUUFhV5qzOKkzPfoynscYskdBG7Pocuu1yonl_sGUaA";
axios.defaults.headers.common["Authorization"] = `Client-ID ${myApiKey}`;
axios.defaults.headers.common["Accept"] = "v1";

export const fetchImagesFromAPI = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
  );
  return response.data;
};
