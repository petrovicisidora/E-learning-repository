//Header

import React from "react";

import logo from "../../assets/logo.png";
import { StyledHeaderContainer, StyledHeaderLogo } from "./Header.style.js";

function Header() {
  return (
    <StyledHeaderContainer role="header">
      <div style={{ marginLeft: "auto" }}>
        <StyledHeaderLogo src={logo} alt="Logo" />
      </div>
    </StyledHeaderContainer>
  );
}

export default Header;
