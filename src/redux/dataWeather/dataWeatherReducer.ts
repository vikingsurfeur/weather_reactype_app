/* Import REdux Stack */

import { PayloadAction } from "@reduxjs/toolkit";

/* Import Data Weather Actions */

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "./dataWeatherTypes";

/* Import Data Weather Initial State */

import initialStateDataWeather from "./dataInitialState";

/* Data Weather Reducer */

const dataWeatherReducer = (state = initialStateDataWeather, action: PayloadAction) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default dataWeatherReducer;
