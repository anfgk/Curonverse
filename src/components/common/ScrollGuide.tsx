"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowsAltV } from "react-icons/fa";

const fadeSlideDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const OuterWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const InnerBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  animation: ${fadeSlideDown} 1.5s ease-out 2s forwards;
`;

const Arrows = styled.div`
  font-size: 48px;
  line-height: 1.2;
`;

const Text = styled.div`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const ScrollGuide = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000); // 4초 후 완전히 사라짐
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <OuterWrapper>
      <InnerBox>
        <FaArrowsAltV />
        <Text>아래로 스크롤하세요</Text>
      </InnerBox>
    </OuterWrapper>
  );
};

export default ScrollGuide;
