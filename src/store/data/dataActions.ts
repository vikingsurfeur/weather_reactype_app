/* Import Axios */
import axios from "axios";

/* Import Redux Stack */
import { Action, ActionCreator, Dispatch } from "redux";

/* Import Interfaces Values */
import { IInitialState } from "../../interface_type/interfaces";

/* Import Api Conf */
import { apiGetData } from "../../conf/api.url";

/* Import Actions Types */
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "./dataTypes";

export const fetchDataRequest: ActionCreator<Action> = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess: ActionCreator<Action> = (data: IInitialState["data"]) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure: ActionCreator<Action> = (error: any) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const fetchData = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            dispatch(fetchDataRequest());
            const response = await apiGetData.get("/");

            if (response.status === 200) {
                const data = response.data;
                console.log(data);
                dispatch(fetchDataSuccess(data));
            } else {
                dispatch(fetchDataFailure("Error"));
            }
        } catch (error: any) {
            const errorMessage = error.message;
            dispatch(fetchDataFailure(errorMessage));
        }
    };
};
