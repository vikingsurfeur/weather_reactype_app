/* Import Redux Stack */

import { Action, ActionCreator } from "redux";

/* Import Data Weather Types */

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "./dataWeatherTypes";

/* Import Interface Values */

import { IInitialStateDataWeather } from "../../interfaces/interfaceDataWeather";

/* Data Weather Actions */

export const fetchDataWeatherRequest: ActionCreator<Action> = () => {
    return {
        type: FETCH_DATA_REQUEST,
    };
};

export const fetchDataWeatherSuccess: ActionCreator<Action> = (
    data: IInitialStateDataWeather["data"]
) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDataWeatherFailure: ActionCreator<Action> = (
    error: IInitialStateDataWeather["error"]
) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};
