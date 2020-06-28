export const types = {
    PASS_WEATHER_DATA: 'PASS_WEATHER_DATA',
    OUTPUT_RESULT: 'OUTPUT_RESULT',
    CITY_NAME: 'CITY_NAME',
    CHECK_LOAD_DATA: 'CHECK_LOAD_DATA',
    SUBMIT_INPUT: 'SUBMIT_INPUT'
}

export const submitInput = () => {
    console.log('submit');
    return {
        type: types.SUBMIT_INPUT
    }
}

export const passWeatherData = (data) => {
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