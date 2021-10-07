/* Import Redux Stack*/
import { PayloadAction } from "@reduxjs/toolkit";

/* Import Actions */
import {
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
} from "./dataTypes";

/* Import Interfaces */
import { IInitialState } from "../../interface_type/interfaces";

/* Define the initial state of the data store */
const initialState: IInitialState = {
    loading: false,
    data: [],
    error: null,
};

/* Define the Reducer */
const dataReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;
