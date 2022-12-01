import axios from "axios";
//import authHeader from "./auth-header";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=f9atKSAgFMclxbzHFSknrELiAwS70bhkbtI34aho";


class nasaService {
  getInfo() {
    return axios.get(API_URL);
  }

  // addEvent(data) {
  //   return axios.post(API_URL + "event/add", data, { headers: authHeader() });
  // }


}

export default new nasaService();
