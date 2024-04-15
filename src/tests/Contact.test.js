import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "../components/Contact/Contact";

const contactProps = {
  title: "Test Title",
  name: "Test Name",
  email: "test@email.com",
};

test("renders contact's elements correctly", () => {
  render(<Contact {...contactProps} />);
  const contactTitle = screen.getByText("Test Title");
  const contactName = screen.getByText("Test Name");
  const contactEmail = screen.getByText("test@email.com");

  expect(contactTitle).toBeInTheDocument();
  expect(contactName).toBeInTheDocument();
  expect(contactEmail).toBeInTheDocument();
});

test("contact has correct styled", () => {
  render(<Contact {...contactProps} />);
  const contactTitle = screen.getByText("Test Title");
  const contactName = screen.getByText("Test Name");

  expect(contactTitle).toHaveStyle("font-size: 14px");
  expect(contactTitle).toHaveStyle("color: gray");
  expect(contactName).toHaveStyle("margin: 5px 0");
});

test("matches snapshot", () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
