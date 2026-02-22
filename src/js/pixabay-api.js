import axios from "axios";

const keyAPI = "54745176-88cc855ad5905fcb142882934";
const urlAPI = "https://pixabay.com/api/";

export const  getImagesByQuery = query => {
      return axios.get(urlAPI, {params: {
        "key": keyAPI,
        "q": `${query}`,
        "image_type": "photo",
        "orientation": "horizontal",
        "safesearch": true
    }}).then(response => response.data.hits);
}