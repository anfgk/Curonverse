"use client";

import { memo } from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0) translateZ(0);
  } 
  40% { 
    transform: scale(1) translateZ(0);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 8px;
  will-change: transform;
`;

const Dot = styled.div<{ delay: number; color: string; opacity: number }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  will-change: transform;
  transform: translateZ(0);
`;

const LoadingSpinner = memo(() => {
  const dots = [
    { color: "#CB59FF", opacity: 0.5 }, // 가장 연한 보라
    { color: "#CB59FF", opacity: 0.6 },
    { color: "#CB59FF", opacity: 0.7 },
    { color: "#CB59FF", opacity: 0.8 },
    { color: "#CB59FF", opacity: 1.0 }, // 가장 진한 보라
  ];

  return (
    <SpinnerWrapper>
      {dots.map((dot, index) => (
        <Dot
          key={index}
          delay={index * 0.2}
          color={dot.color}
          opacity={dot.opacity}
        />
      ))}
    </SpinnerWrapper>
  );
});

// React DevTools 등에서 컴포넌트 이름을 명확하게 보여주기 위해
// LoadingSpinner 컴포넌트의 displayName을 "LoadingSpinner"로 설정
LoadingSpinner.displayName = "LoadingSpinner";

export default LoadingSpinner;
