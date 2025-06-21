"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import { nextButtonStyle } from "./styles";
import IconWrapper from "./IconWrapper";
import { ButtonProps } from "./types";

const StyledNextButton = styled.div<{ variant: ButtonProps["variant"] }>`
  ${nextButtonStyle}
  ${({ variant }) => variant}
`;

const NextButton = ({
  onClick,
  disabled = false,
  variant = "step",
  children = "다음",
}: ButtonProps) => {
  return (
    <StyledNextButton
      onClick={!disabled ? onClick : undefined}
      className={disabled ? "disabled" : ""}
      variant={variant}
    >
      <span>{children}</span>
      <IconWrapper>
        <FaArrowRight />
      </IconWrapper>
    </StyledNextButton>
  );
};

export default NextButton;
