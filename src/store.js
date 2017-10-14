'use strict';


// import rootReducer from 'reducers/index.js';

import thunk from 'redux-thunk';

import { applyMiddleware, createStore, compose } from 'redux';

import { enableBatching } from 'redux-batched-actions';
// import {persistStore, autoRehydrate, getStoredState} from 'redux-persist'

const store = createStore(
    enableBatching(rootReducer),
    undefined,
    compose(
        applyMiddleware(thunk),
        enableBatching,
        autoRehydrate({log: true})
    )
)

export default store;
