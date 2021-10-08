/* Import Redux Stack */

import { combineReducers } from "redux";

/* Import Data Weather Reducer */

import dataWeatherReducer from "./dataWeather/dataWeatherReducer";

/* Root Reducer */

const rootReducer = combineReducers({
    dataWeather: dataWeatherReducer,
});

export default rootReducer;
