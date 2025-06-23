// components/Buttons/styles.ts
import styled, { css } from "styled-components";

// 버튼 공통 스타일
export const baseButtonStyle = css`
  position: relative;
  width: 370px;
  height: 48px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  &.disabled {
    cursor: not-allowed;
  }

  @media (max-width: 360px) {
    top: 30px;
  }
`;

// 이전 버튼 전용 스타일
export const beforeButtonStyle = css`
  ${baseButtonStyle}
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

// 다음 버튼 전용 스타일
export const nextButtonStyle = css`
  ${baseButtonStyle}
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
