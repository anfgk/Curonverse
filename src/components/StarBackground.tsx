"use client"; // 클라이언트 컴포넌트로 지정

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 별 깜빡임 애니메이션
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

interface StarProps {
  delay: number;
  top: number;
  left: number;
  size: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    // 클라이언트에서만 실행됨
    const generatedStars = Array.from({ length: 250 }, () => ({
      delay: Math.random() * 3,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);
  }, []);

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
