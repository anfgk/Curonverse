// components/Buttons/styles.ts
import styled, { css } from "styled-components";

// 버튼 공통 스타일
export const baseButtonStyle = css`
  position: absolute;
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

  @media (max-width: 375px) {
    position: relative;
    width: 110px;
    height: 40px;
    font-size: 14px;
    gap: 8px;
    padding: 0 10px;
    margin-top: 20px;
  }
`;

// 아이콘 공통 스타일
export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: #ffffff;
  color: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
