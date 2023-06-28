//import createstore

import { createStore, applyMiddleware, compose } from'redux';

//import rootReducers

import thunk from'redux-thunk';
import rootReducer from '../Reducers';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//export

export default store;