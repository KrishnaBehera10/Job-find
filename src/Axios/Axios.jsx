import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-find-backend-sf45.onrender.com",
});

export default instance;
