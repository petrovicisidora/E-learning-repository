//Sidebar with image and course group name

import React from "react";

import {
  StyledSidebarContainer,
  StyledSidebarIcon,
  StyledSidebarTitle,
} from "./Sidebar.style.js";

function Sidebar({ image, title }) {
  return (
    <StyledSidebarContainer>
      <StyledSidebarIcon src={image} alt="Sidebar Icon" />
      <StyledSidebarTitle>{title}</StyledSidebarTitle>
    </StyledSidebarContainer>
  );
}

export default Sidebar;
