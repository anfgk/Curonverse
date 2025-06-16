"use client";

import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: "profile" | "step";
}

const ButtonContainer = styled.div<{ variant?: "profile" | "step" }>`
  position: ${(props) =>
    props.variant === "profile" ? "absolute" : "absolute"};
  top: ${(props) => (props.variant === "profile" ? "145%" : "105%")};
  left: ${(props) => (props.variant === "profile" ? "85%" : "75%")};
  transform: ${(props) =>
    props.variant === "profile" ? "translateX(-50%)" : "none"};
  width: 80px;
  height: 48px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &.disabled {
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: #ffffff;
  color: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = ({
  onClick,
  disabled = false,
  variant,
}: NextButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
      variant={variant}
    >
      다음
      <IconWrapper>
        <FaArrowRight />
      </IconWrapper>
    </ButtonContainer>
  );
};

export default NextButton;
