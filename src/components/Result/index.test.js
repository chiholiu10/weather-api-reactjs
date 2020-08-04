import React from "react";
import { render } from "@testing-library/react";
import { Result } from "./index";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";
import { fixedWeatherApi } from "../../mock/mockApi";
import { emptyWeatherApi } from "../../mock/emptyApi";

test("It should check if parameter named data is not undefined in Result component", () => {
	const emptyWeatherParameter = emptyWeatherApi.length; 
	render(
		<Provider store={store}>
			<Result data={emptyWeatherParameter}/>
		</Provider>
	);
	const checkWeatherData = screen.getAllByTestId("empty-array");
	expect(checkWeatherData).toHaveLength(1);
});

test("It should check if parameter named data is defined in Result component", () => {
	render(
		<Provider store={store}>
			<Result data={fixedWeatherApi}/>
		</Provider>
	);
	const checkWeatherData = screen.getAllByTestId("weather-array");
	expect(checkWeatherData).toHaveLength(1);
});
