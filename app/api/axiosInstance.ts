import axios from "axios";
import { LocalStorage } from "~/helpers/LocalStorage";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    contentType: "application/json",
    authorization: `Bearer ${LocalStorage.getItem("token") || ""}`,
  },
});
