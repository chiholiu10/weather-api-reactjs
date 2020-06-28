import { createStore, applyMiddleware } from 'redux';
import weatherData from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
    weatherData,
    applyMiddleware(thunk)
);

