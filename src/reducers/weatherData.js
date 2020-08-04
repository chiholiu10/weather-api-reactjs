import { types } from '../actions/index';

const initialState = {
	weatherInfo: []
};

export const weatherData = (state = initialState, action) => {
	switch(action.type) {
	// in order to improve the UX I have created CLEAR_ARRAY so it will check if initialState weatherInfo contains data.  
	case types.CLEAR_ARRAY: {
		return {
			...state,
			weatherInfo: []
		};
	}
        
	case types.PASS_WEATHER_DATA: {
		return {
			...state,
			weatherInfo: action.data
		};
	}

	// also capturing the city name and output that in the app gives the user the useful information
	case types.CITY_NAME: {
		return {
			...state,
			city: action.city
		};
	}
	default: 
		return state;
	}
};


