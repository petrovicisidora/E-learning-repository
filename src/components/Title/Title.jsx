//Title component

import React from "react";

import { StyledTitle, StyledTitleContainer } from "./Title.style.js";

function Title({ title }) {
  return (
    <StyledTitleContainer>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleContainer>
  );
}

export default Title;
