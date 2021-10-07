/* Import Redux Stack */
import { combineReducers } from "redux";

/* Import Data Reducer */
import dataReducer from "./data/dataReducer";

/* Define the root reducer */
const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;
