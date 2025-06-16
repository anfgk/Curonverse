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

// Text 컴포넌트 정의
// React.FC<TextProps>를 사용하여 props 타입을 명시
const SubText = ({ text, variant = "subtitle", center = false }: TextProps) => {
  return (
    <StyledText variant={variant} center={center}>
      {text}
    </StyledText>
  );
};

export default SubText;
