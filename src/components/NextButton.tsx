"use client";

import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const ButtonContainer = styled.div`
  position: absolute;
  top: 110%;
  right: 4%;
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

interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const NextButton = ({ onClick, disabled = false }: NextButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
    >
      다음
      <IconWrapper>
        <FaArrowRight />
      </IconWrapper>
    </ButtonContainer>
  );
};

export default NextButton;
