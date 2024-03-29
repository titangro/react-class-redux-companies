import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root';

let store;
export default function configureStore(initialState) {
    if (store) {
        return store;
    }
    store = createStore(
        rootReducer, 
        initialState,
        compose(
            applyMiddleware(thunk),
            typeof window !== 'undefined' && window.devToolsExtension
                ? window.devToolsExtension()
                : f => f
        )
    );
    return store;
}