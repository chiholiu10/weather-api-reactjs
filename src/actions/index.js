export const types = {
	PASS_WEATHER_DATA: 'PASS_WEATHER_DATA',
	CITY_NAME: 'CITY_NAME',
	CLEAR_ARRAY: 'CLEAR_ARRAY'
};

export const clearArray = () => {
	return {
		type: types.CLEAR_ARRAY
	};
};

export const passWeatherData = (data) => {
	return {
		type: types.PASS_WEATHER_DATA,
		data
	};
};

export const cityName = (city) => {
	return {
		type: types.CITY_NAME,
		city
	};
};


