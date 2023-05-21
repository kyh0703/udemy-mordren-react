import { compose, createStore, applyMiddleware } from 'reduix';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
