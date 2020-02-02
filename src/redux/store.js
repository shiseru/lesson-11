import {createStore, applyMiddleWare} from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleWare(...middleware));

export default store;