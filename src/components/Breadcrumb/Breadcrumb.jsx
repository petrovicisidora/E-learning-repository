//Breadcrumb

import React from "react";

import {
  StyledBreadcrumbContainer,
  StyledBreadcrumbNavigation,
  StyledBreadcrumbUser,
} from "./Breadcrumb.style";

function Breadcrumb() {
  return (
    <StyledBreadcrumbContainer role="navigation">
      <StyledBreadcrumbNavigation>
        Home Page &gt; e-learning Courses
      </StyledBreadcrumbNavigation>
      <StyledBreadcrumbUser>admin</StyledBreadcrumbUser>
    </StyledBreadcrumbContainer>
  );
}

export default Breadcrumb;
