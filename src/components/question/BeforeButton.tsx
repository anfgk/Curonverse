"use client";

import styled from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

const ButtonContainer = styled.div`
  position: absolute;
  top: 110%;
  left: 4%;
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

// 컴포넌트에 전달될 props의 타입을 정의
interface BeforeButtonProps {
  onClick: () => void; // 버튼 클릭 시 실행될 함수
  disabled?: boolean; // 버튼이 비활성화 상태인지 나타내는 선택적(boolean) 값
}

// BeforeButton 컴포넌트를 정의
const BeforeButton = ({ onClick, disabled = false }: BeforeButtonProps) => {
  // 버튼 클릭 시 실행되는 함수 정의
  const handleClick = () => {
    // disabled가 false일 때만 onClick 함수 실행
    if (!disabled) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      className={disabled ? "disabled" : ""}
    >
      <IconWrapper>
        <FaArrowLeftLong />
      </IconWrapper>
      이전
    </ButtonContainer>
  );
};

export default BeforeButton;
