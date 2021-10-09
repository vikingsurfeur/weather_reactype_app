/* Import Axios */

import axios, { AxiosInstance } from "axios";

/* Define API URL */

const {
    REACT_APP_API_URL_BASE,
    REACT_APP_API_URL_VERSION,
} = process.env;

/* Create an Instance of Axios */

const handleApiFetchDataWeather: AxiosInstance = axios.create({
    baseURL: `${REACT_APP_API_URL_BASE}/${REACT_APP_API_URL_VERSION}`,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default handleApiFetchDataWeather;