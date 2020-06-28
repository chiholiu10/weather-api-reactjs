import { weatherData } from './weatherData';

describe("weatherData reducer" , () => {
    it("should return the initial state", () => {
        expect(weatherData(undefined, {})).toEqual(
            {
                city: [],
                weatherInfo: []
            }
        )
    })
})