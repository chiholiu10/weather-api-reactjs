import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from './App';
import { store } from "./Store";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";

test('App not crashing', () => {
	render(<Provider store={store}><AppComponent/></Provider>);
	const appComponent = screen.getByTestId("app-component");
	expect(appComponent).toBeInTheDocument();
});
