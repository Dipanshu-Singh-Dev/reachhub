import axios from "axios";
const url = "http://localhost:3000";

export default axios.create({
    baseURL: url,
    timeout: 10000,
    withCredentials: true,
    }
)