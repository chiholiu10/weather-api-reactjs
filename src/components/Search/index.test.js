import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./index";
import { Provider } from "react-redux";
import { store } from "../../Store";

const setup = () => {
	const utils = render(
		<Provider store={store}>
			<Search/>
		</Provider>);
	const input = utils.getByLabelText("search-input");
	return {
		input,
		...utils
	};
};

test("It should check if input field get the value passed", () => {
	const { input } = setup();
	fireEvent.change(input, { target: { value: "search-bar-test" } });
	expect(input.value).toBe("search-bar-test");
});
