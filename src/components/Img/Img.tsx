import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<Partial<ImgProps>>`
  color: ${(props) => (props.disabled ? "light-grey" : "#BF4F74")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: auto;
  width: 50%;
  padding: 0.25em 1em;
  border-radius: 3%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1.0")};
`;

const Img = (React.FC<ImgProps> = ({ alt, src, width, disabled }) => {
  return (
    <StyledImg disabled={disabled} src={src} style={{ width }}>
      {alt}
    </StyledImg>
  );
});

export default Img;
