import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://13.60.81.237/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
