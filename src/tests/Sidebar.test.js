import React from "react";
import { render, screen } from "@testing-library/react";

import Sidebar from "../components/Sidebar/Sidebar";

const sidebarProps = {
  image: "/path/to/image.png",
  title: "Test Sidebar",
};

test("renders sidebar title correctly", () => {
  render(<Sidebar {...sidebarProps} />);
  const sidebarTitle = screen.getByText(sidebarProps.title);

  expect(sidebarTitle).toBeInTheDocument();
});

test("renders sidebar icon correctly", () => {
  render(<Sidebar {...sidebarProps} />);
  const sidebarIcon = screen.getByAltText("Sidebar Icon");

  expect(sidebarIcon).toBeInTheDocument();
  expect(sidebarIcon).toHaveAttribute("src", sidebarProps.image);
});

test("renders sidebar title with correct styles", () => {
  render(<Sidebar {...sidebarProps} />);
  const sidebarElement = screen.getByText(sidebarProps.title);

  expect(sidebarElement).toHaveStyle("font-weight: bold");
});

test("renders sidebar icon with correct styles", () => {
  render(<Sidebar {...sidebarProps} />);
  const sidebarElement = screen.getByAltText("Sidebar Icon");

  expect(sidebarElement).toHaveStyle("height: 60px");
});

test("matches snapshot", () => {
  const { container } = render(<Sidebar />);
  expect(container).toMatchSnapshot();
});
