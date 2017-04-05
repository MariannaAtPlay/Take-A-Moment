import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import {wrapStore} from 'react-chrome-redux';

import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            createLogger({collapsed: true})
        )
    )
);


wrapStore(store, {
  portName: 'example'
});


