export const types = {
    getInput: 'GET_INPUT',
    outputResult: 'OUTPUT_RESULT',
    cityNmae: 'CITY_NAME'
}

export const getInput = (value) => {
    return {
        type: types.GET_INPUT,
        value
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