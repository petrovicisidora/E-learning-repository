import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../components/Header/Header";

test("renders header's logo correctly", () => {
  render(<Header />);
  const headerLogo = screen.getByAltText("Logo");

  expect(headerLogo).toBeInTheDocument();
});

test("renders header's blue background correctly", () => {
  render(<Header />);
  const headerContainer = screen.getByRole("header");

  expect(headerContainer).toHaveStyle("background-color: #135cc3eb");
});

test("matches snapshot", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
