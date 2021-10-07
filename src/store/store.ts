/* Import Redux Stack */
import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/* Define the Store */
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;