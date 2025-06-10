import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
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

const Button = ({ onClick, children, disabled = false }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
