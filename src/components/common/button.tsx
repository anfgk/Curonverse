import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void; // 버튼 클릭 시 실행될 함수 (선택적)
  children: React.ReactNode; // 버튼 안에 표시될 콘텐츠 (예: 텍스트, 아이콘 등)
  disabled?: boolean; // 버튼을 비활성화할지 여부 (선택적, 기본적으로 false로 간주됨)
}

const StyledButton = styled.button`
  width: 335px;
  height: 56px;
  background: #cb59ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Pretendard";
  margin-bottom: 32px;
  margin-left: 20px;
  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #a347cc;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// Button 컴포넌트를 정의하고, props로 onClick, children, disabled를 구조 분해 할당
// disabled는 기본값으로 false를 사용
const Button = ({ onClick, children, disabled = false }: ButtonProps) => {
  return (
    // StyledButton은 스타일이 적용된 커스텀 버튼 컴포넌트 (예: styled-components 사용)
    // onClick과 disabled 속성을 전달하여 실제 버튼 동작을 구현
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
