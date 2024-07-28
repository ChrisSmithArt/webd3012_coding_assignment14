import React from "react";
import styled from "styled-components";
import { HeaderProps } from "./Header.types";

const StyledHeader = styled.header<Partial<HeaderProps>>`
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 5em;
  margin: 0.1em;
  padding: 0.25em 1em;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Header = (React.FC<HeaderProps> = ({
  title,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledHeader disabled={disabled} style={{ backgroundColor }}>
      {title}
    </StyledHeader>
  );
});

export default Header;
