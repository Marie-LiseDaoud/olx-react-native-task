import axios from "axios";
import networkConfig from "../config/network";

const instance = axios.create({
  baseURL: networkConfig.WS_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
