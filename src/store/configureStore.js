import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import instrumentsReducer from '../reducers/instruments';
import practicesReducer from '../reducers/practices';
import costsReducer from '../reducers/costs';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            costs: costsReducer,
            instruments: instrumentsReducer,
            practices: practicesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

