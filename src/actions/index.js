export const types = {
    PASS_WEATHER_DATA: 'GET_INPUT',
    OUTPUT_RESULT: 'OUTPUT_RESULT',
    CITY_NAME: 'CITY_NAME'
}

export const passWeatherData = (data) => {
    console.log(data)
    return {
        type: types.PASS_WEATHER_DATA,
        data
    }
}

export const outputResult = (data) => {
    return {
        type: types.OUTPUT_RESULT,
        data
    }
}

export const cityName = (city) => {
    return {
        type: types.CITY_NAME,
        city
    }
}