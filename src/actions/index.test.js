import * as actions from "../actions/index";
import { types }from "../actions/index";
import { fixedCityApi } from "../mock/cityApi";
import { fixedApi } from "../mock/mockApi";

describe("actions", () => {
    it("should create an action and check if action named clearArray is being called", () => {
       const result = actions.clearArray();
        expect(result.type).toEqual(types.CLEAR_ARRAY);
    });
})

describe("actions", () => {
    it("should create an action and check if action named passWeatherData passed weather data", () => {
        const weatherApi = fixedApi
        const expectedAction = {
            type: types.PASS_WEATHER_DATA,
            weatherApi
        }
        expect(actions.passWeatherData(weatherApi)).toEqual(expectedAction)
    });
})

describe("actions", () => {
    it("should create an action and check if action named passWeatherData passed city name", () => {
        const cityApi = fixedCityApi
        const expectedAction = {
            type: types.CITY_NAME,
            cityApi
        }
        expect(actions.cityName(cityApi)).toEqual(expectedAction)
    });
})