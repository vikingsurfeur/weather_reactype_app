/* Import Axios */
import axios from "axios";

/* Import .env Base URL */
const { API_URL } = process.env;

const apiGetData = () => {
    const response = axios.create({
        baseURL: API_URL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
};

export { apiGetData };