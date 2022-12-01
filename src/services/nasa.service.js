import axios from "axios";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=f9atKSAgFMclxbzHFSknrELiAwS70bhkbtI34aho";


class nasaService {
  getInfo() {
    return axios.get(API_URL);
  }



}

export default new nasaService();
