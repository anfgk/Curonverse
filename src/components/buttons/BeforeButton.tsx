"use client";

import React from "react";
import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { beforeButtonStyle } from "./styles";
import IconWrapper from "./IconWrapper";
import { ButtonProps } from "./types";

// variant에 따라 스타일 적용
const StyledBeforeButton = styled.div<{ variant: ButtonProps["variant"] }>`
  ${beforeButtonStyle}
  ${({ variant }) => variant}
`;

const BeforeButton = ({
  onClick,
  disabled = false,
  variant = "step",
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <StyledBeforeButton
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
      variant={variant}
    >
      <IconWrapper>
        <FaArrowLeftLong />
      </IconWrapper>
      이전
    </StyledBeforeButton>
  );
};

export default BeforeButton;
