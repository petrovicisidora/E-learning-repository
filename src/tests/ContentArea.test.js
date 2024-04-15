import React from "react";
import { render, screen } from "@testing-library/react";

import Content from "../components/ContentArea/Content";
import ContentDetail from "../components/ContentArea/ContentDetail";

const contentAreaProps = {
  image: "/path/to/image.png",
  children: (
    <ContentDetail
      title="Test Title"
      time="Test Time"
      text="Test Text"
      progress={2}
    />
  ),
};

test("renders content's image correctly", () => {
  render(<Content {...contentAreaProps} />);
  const contentAreaImage = screen.getByAltText("Content Image");

  expect(contentAreaImage).toBeInTheDocument();
});

test("renders content's children (ContentDetail) correctly", () => {
  render(<Content {...contentAreaProps} />);
  const contentDetailTitle = screen.getByText("Test Title");
  const contentDetailTime = screen.getByText("Test Time");

  expect(contentDetailTitle).toBeInTheDocument();
  expect(contentDetailTime).toBeInTheDocument();
});

test("content has correct styles", () => {
  render(<Content {...contentAreaProps} />);
  const contentImage = screen.getByAltText("Content Image");

  expect(contentImage).toHaveStyle("float: left");
  expect(contentImage).toHaveStyle("margin-right: 15px");
});

test("content detail (children) has correct styles", () => {
  render(
    <ContentDetail
      title="Test Title"
      time="Test Time"
      text="Test Text"
      progress={2}
    />
  );
  const contentDetailTitle = screen.getByText("Test Title");

  expect(contentDetailTitle).toHaveStyle("color: #303330a6");
  expect(contentDetailTitle).toHaveStyle("font-size: 20px");
});

test("matches snapshot", () => {
  const { container } = render(<Content />);
  expect(container).toMatchSnapshot();
});
