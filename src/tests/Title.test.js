import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "../components/Title/Title";

test("renders title correctly", () => {
  const titleText = "Test title";
  render(<Title title={titleText} />);
  const titleElement = screen.getByText(titleText);

  expect(titleElement).toBeInTheDocument();
});

test("title has correct styles", () => {
  const titleText = "Test title";
  render(<Title title={titleText} />);
  const titleElement = screen.getByText(titleText);

  expect(titleElement).toHaveStyle("font-weight:bolder");
  expect(titleElement).toHaveStyle("padding-left:10px");
});

test("matches snapshot", () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});
