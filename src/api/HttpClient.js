import axios from "axios";
import Config from "../config/config";

export const httpClient = axios.create({
    baseURL: Config.serverUrl
});