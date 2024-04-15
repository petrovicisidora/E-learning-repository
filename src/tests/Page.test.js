import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Page from "../page/Page";
import { mockData } from "../data/mockData";

const mockStore = configureStore([]);

let store;

beforeEach(() => {
  store = mockStore({ data: mockData });
});

test("renders page with correct content", () => {
  render(
    <Provider store={store}>
      <Page />
    </Provider>
  );

  expect(screen.getByRole("header")).toBeInTheDocument();
  expect(screen.getByText("Navigation")).toBeInTheDocument();
  expect(
    screen.getByText("Money Laundering and Fraud Prevention")
  ).toBeInTheDocument();
  expect(
    screen.getByText("It security and information security")
  ).toBeInTheDocument();
  expect(screen.getByText("Data Protection")).toBeInTheDocument();
  expect(screen.getByText("WpHG-Compliance")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("e-Learning Courses")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Intensification of money laundering prevention - private customer advice"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("WpHG compliance basics (V1.00.3)")
  ).toBeInTheDocument();
});

test("styles are correct", () => {
  render(
    <Provider store={store}>
      <Page />
    </Provider>
  );
  const header = screen.getByRole("header");
  const sidebarContainer = screen.getByTestId("sidebar-container");
  const contentHeader = screen.getByText("e-Learning Courses");

  expect(header).toHaveStyle("background-color: #135cc3eb");
  expect(sidebarContainer).toHaveStyle("margin-top: 20px");
  expect(contentHeader).toHaveStyle("color: gray");
});

test("matches snapshot", () => {
  const { container } = render(
    <Provider store={store}>
      <Page />
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
