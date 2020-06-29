import React from "react"
import { render } from "@testing-library/react";
import { Result } from './index.js';
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";

import { fixedApi } from '../../mock/mockApi';
import { 
    emptyWeatherApi, 
    emptyCityApi 
} from '../../mock/emptyApi';

test("It should check if there is no data in Result component", () => {
    render(
        <Provider store={store}>
            <Result city={emptyCityApi} />
        </Provider>
    )
    const checkWeatherData = screen.getAllByTestId("empty-array");
    expect(checkWeatherData).toHaveLength(1);
});
