import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.div<Partial<TextProps>>`
  background: ${(props) => (props.disabled ? "grey" : "papayawhip")};
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 1em;
  margin: auto;
  padding: 1em;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Text = (React.FC<TextProps> = ({
  content,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledText disabled={disabled} style={{ backgroundColor }}>
      {content}
    </StyledText>
  );
});

export default Text;
