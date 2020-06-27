import { types } from '../actions/index';

const initialState = {
    weatherInfo: {}
}

export const weatherData = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_INPUT: {
            return {
                ...state,
                weatherInfo: action.value
            }
        }
        default: 
            return state;
    }
}