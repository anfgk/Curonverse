"use client";

import styled from "styled-components";

const StyledText = styled.div<{
  variant?: "loading" | "subtitle";
  center?: boolean;
}>`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-top: ${(props) => (props.variant === "loading" ? "13px" : "44px")};
  margin-left: ${(props) => (props.center ? "0" : "20px")};
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

interface TextProps {
  text: string;
  variant?: "loading" | "subtitle";
  center?: boolean;
}

const Text = ({ text, variant = "subtitle", center = false }: TextProps) => {
  return (
    <StyledText variant={variant} center={center}>
      {text}
    </StyledText>
  );
};

export default Text;
