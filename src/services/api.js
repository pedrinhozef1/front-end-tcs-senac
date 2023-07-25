import axios from "axios";


const api = axios.create({
  baseURL: "http://167.71.84.210:8080"
})

export default api;