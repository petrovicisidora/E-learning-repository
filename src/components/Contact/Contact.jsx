//Contact component with contact information

import React from "react";

import {
  StyledContactContainer,
  StyledContactEmail,
  StyledContactName,
  StyledContactTitle,
} from "./Contact.style";

function Contact({ title, name, email }) {
  return (
    <StyledContactContainer>
      <StyledContactTitle>{title}</StyledContactTitle>
      <StyledContactName>{name}</StyledContactName>
      <StyledContactEmail>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledContactEmail>
    </StyledContactContainer>
  );
}

export default Contact;
