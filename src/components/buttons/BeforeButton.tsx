"use client";

import React from "react";
import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";
import { beforeButtonStyle } from "./styles";
import IconWrapper from "./IconWrapper";
import { ButtonProps } from "./types";

// variant에 따라 스타일 적용
const StyledBeforeButton = styled.div<{ variant: ButtonProps["variant"]; $hide?: boolean }>`
  ${beforeButtonStyle}
  ${({ variant }) => variant}
  ${({ $hide }) => $hide && "display: none; !important;"}
`;

const BeforeButton = ({
  onClick,
  disabled = false,
  variant = "step",
  children = "이전",
  $hide = false,
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
      $hide={$hide}
    >
      <IconWrapper>
        <FaArrowLeftLong />
      </IconWrapper>
      <span>{children}</span>
    </StyledBeforeButton>
  );
};

export default BeforeButton;
