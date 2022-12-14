import axios from "axios";
export default axios.create({
  baseURL: "https://63088416722029d9ddd0ff9f.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});