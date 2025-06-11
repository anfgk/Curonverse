import React from "react";
import styled, { keyframes } from "styled-components";

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

const StarBackground: React.FC = () => {
  const stars = Array.from({ length: 250 }, (_, i) => ({
    delay: Math.random() * 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
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
