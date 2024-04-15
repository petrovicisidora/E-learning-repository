//Content component that contains image and its children

import React from "react";

import {
  StyledChildrenContainer,
  StyledContentContainer,
  StyledImageContainer,
} from "./Content.style";

function Content({ image, children }) {
  return (
    <StyledContentContainer>
      <StyledImageContainer src={image} alt="Content Image" />
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContentContainer>
  );
}

export default Content;
