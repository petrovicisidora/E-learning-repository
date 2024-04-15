import React from "react";
import { render, screen } from "@testing-library/react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

test("renders breadcrumb correctly", () => {
  render(<Breadcrumb />);

  const breadcrumbContainer = screen.getByRole("navigation");
  const breadcrumbNavigation = screen.getByText(
    "Home Page > e-learning Courses"
  );
  const breadcrumbUser = screen.getByText("admin");

  expect(breadcrumbContainer).toBeInTheDocument();
  expect(breadcrumbNavigation).toBeInTheDocument();
  expect(breadcrumbUser).toBeInTheDocument();
});

test("renders breadcrumb's styles correctly", () => {
  render(<Breadcrumb />);

  const breadcrumbContainer = screen.getByRole("navigation");
  const breadcrumbNavigation = screen.getByText(
    "Home Page > e-learning Courses"
  );
  const breadcrumbUser = screen.getByText("admin");

  expect(breadcrumbContainer).toHaveStyle("margin-top: 20px");
  expect(breadcrumbNavigation).toHaveStyle("background-color: white");
  expect(breadcrumbUser).toHaveStyle("text-align: start");
});

test("matches snapshot", () => {
  const { container } = render(<Breadcrumb />);
  expect(container).toMatchSnapshot();
});
