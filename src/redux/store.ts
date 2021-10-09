/* Import Redux Stack */

import { createStore, applyMiddleware, compose, Middleware } from "redux";
import thunkMiddleware from "redux-thunk";

/* Import Root Reducer */

import rootReducer from "./rootReducer";

const middlewares: Middleware[] = [thunkMiddleware];

/* Create Store */

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
);

export default store;
