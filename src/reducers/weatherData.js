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
        case types.PASS_WEATHER_DATA: {
            return {
                ...state,
                weatherInfo: action.data
            }
        }
        case types.CITY_NAME: {
            return {
                ...state,
                city: action.city
            }
        }
        default: 
            return state;
    }
}


