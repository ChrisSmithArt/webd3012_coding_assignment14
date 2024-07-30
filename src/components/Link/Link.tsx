import React from "react";
import styled from "styled-components";
import { LinkProps } from "./Link.types";

export interface LinkProps {
  label: string;
}

const StyledLink = styled.a<Partial<LinkProps>>`
  background: ${(props) => (props.disabled ? "grey" : "white")};
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  border: 2px solid #bf4f74;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  font-size: 1em;
  margin: 1em;
  padding: 0.5em;
  text-align: center;
  border-radius: 25px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Link = (React.FC<LinkProps> = ({
  title,
  backgroundColor,
  disabled,
  href,
}) => {
  return (
    <StyledLink disabled={disabled} style={{ backgroundColor }} href={href}>
      {title}
    </StyledLink>
  );
});

export default Link;
