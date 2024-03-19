import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const instanceAxios = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

export default instanceAxios;
