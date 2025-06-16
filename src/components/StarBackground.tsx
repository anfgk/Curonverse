import React from "react";
import styled, { keyframes } from "styled-components";

// 별 깜빡임 애니메이션 키프레임 정의
const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`;

const Star = styled.div<{
  delay: number;
  top: number;
  left: number;
  size: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: #f0e0fbb5;
  border-radius: 50%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${twinkle} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

// StarBackground 컴포넌트 정의
const StarBackground: React.FC = () => {
  // 250개의 별 객체를 생성하여 배열에 저장
  const stars = Array.from({ length: 250 }, (_, i) => ({
    // 랜덤 지연 시간 (0~3초)
    delay: Math.random() * 3,
    // 랜덤 위치 (0~100%)
    top: Math.random() * 100,
    left: Math.random() * 100,
    // 랜덤 크기 (1~3px)
    size: Math.random() * 2 + 1,
  }));

  return (
    <>
      {stars.map((star, i) => (
        <Star
          key={i}
          delay={star.delay}
          top={star.top}
          left={star.left}
          size={star.size}
        />
      ))}
    </>
  );
};

export default StarBackground;
