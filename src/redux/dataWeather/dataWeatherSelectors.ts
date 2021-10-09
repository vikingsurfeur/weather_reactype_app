/* Import Redux Stack */
import { Action, Dispatch } from "redux";
import handleApiFetchDataWeather from "../../conf/api.get.dataWeather";

/* Import Data Weather Actions */

import {
    fetchDataWeatherRequest,
    fetchDataWeatherSuccess,
    fetchDataWeatherFailure,
} from "./dataWeatherActions";

/* Import Geolocalisation Function */

import getGeoLocation from "../../utils/getGeoLocation";

/* Define API URL */

const { REACT_APP_API_URL_OPTIONS, REACT_APP_API_URL_KEY } = process.env;

/* Data Weather Selectors */

const fetchDataWeather = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch(fetchDataWeatherRequest());
            const { latitude, longitude } = await getGeoLocation();

            const response = await handleApiFetchDataWeather.get(
                `onecall?lat=${latitude}&lon=${longitude}&${REACT_APP_API_URL_OPTIONS}&appid=${REACT_APP_API_URL_KEY}`
            );

            if (response.status === 200) {
                dispatch(fetchDataWeatherSuccess(response.data));
            } else {
                dispatch(fetchDataWeatherFailure(response.statusText));
            }
        } catch (error: any) {
            dispatch(fetchDataWeatherFailure(error.message));
        }
    };
};

export default fetchDataWeather;
