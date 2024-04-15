//Content Detail component with detailed information about each course

import React from "react";

import { renderCircles } from "./helper";
import {
  StyledContentDetailContainer,
  StyledContentProgress,
  StyledContentText,
  StyledContentTimeContainer,
  StyledContentTitle,
} from "./Content.style";

function ContentDetail({ title, time, text, progress }) {
  return (
    <StyledContentDetailContainer>
      <StyledContentTitle>{title}</StyledContentTitle>
      <StyledContentTimeContainer>
        <div>{time}</div>
        <div>To be done by:</div>
      </StyledContentTimeContainer>
      <div>
        <StyledContentProgress>{renderCircles(progress)}</StyledContentProgress>
        <StyledContentText>{text}</StyledContentText>
      </div>
    </StyledContentDetailContainer>
  );
}
export default ContentDetail;
