"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";
import Description from "@/components/description";
import Button from "@/components/Button";

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`;

const floatLeft = keyframes`
  0% {
    transform: translate(-80%, -80%);
  }
  50% {
    transform: translate(-85%, -85%);
  }
  100% {
    transform: translate(-80%, -80%);
  }
`;

const floatRight = keyframes`
  0% {
    transform: translate(-80%, -80%);
  }
  50% {
    transform: translate(-75%, -75%);
  }
  100% {
    transform: translate(-80%, -80%);
  }
`;

const Container = styled.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  position: fixed;
  overflow: hidden;
  margin: 0 auto;
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

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BacklightLayer = styled.div`
  width: 320px;
  height: 320px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(147, 112, 219, 0.3) 30%,
    rgba(147, 112, 219, 0.1) 50%,
    rgba(147, 112, 219, 0) 70%
  );
  filter: blur(20px);
  z-index: 1;
`;

const StarImage = styled(Image)<{
  top: string;
  left?: string;
  right?: string;
  isLeft?: boolean;
  delay?: number;
}>`
  position: absolute;
  width: 35px !important;
  height: 38px !important;
  top: ${(props) => props.top};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  animation: ${(props) => (props.isLeft ? floatLeft : floatRight)} 4s
    ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  object-fit: contain;
  z-index: 1;
  opacity: 0.8;
  transition: all 0.3s ease;
  will-change: transform;
`;

const PlanetImage = styled(Image)<{ isLeft?: boolean; delay?: number }>`
  width: 280px !important;
  height: 280px !important;
  position: absolute;
  top: 60%;
  left: 73%;
  transform: translate(-50%, -50%);
  animation: ${(props) => (props.isLeft ? floatLeft : floatRight)} 6s
    ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  object-fit: contain;
  z-index: 2;
  will-change: transform;
`;

const TextImage = styled(Image)<{ isLeft?: boolean; delay?: number }>`
  width: 200px !important;
  height: 50px !important;
  position: absolute;
  bottom: 95px;
  left: 70%;
  transform: translateX(-50%);
  animation: ${(props) => (props.isLeft ? floatLeft : floatRight)} 5s
    ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  object-fit: contain;
  z-index: 1;
  will-change: transform;
`;

const RocketImage = styled(Image)`
  width: 80px !important;
  height: 80px !important;
  position: absolute;
  top: 60%;
  right: -10%;
  animation: ${floatLeft} 3s ease-in-out infinite;
  animation-delay: 1s;
  object-fit: contain;
  z-index: 1;
  will-change: transform;
`;

export default function Start() {
  const router = useRouter();
  const stars = Array.from({ length: 250 }, (_, i) => ({
    delay: Math.random() * 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  const handleStartClick = () => {
    window.location.href = "/onboarding";
  };

  return (
    <Container>
      {stars.map((star, i) => (
        <Star
          key={i}
          delay={star.delay}
          top={star.top}
          left={star.left}
          size={star.size}
        />
      ))}
      <ContentWrapper>
        <Text text="어서오세요." variant="subtitle" />
        <Title
          mainText="나의 감정은 현재"
          highlightText="어떤 행성"
          subText="에 머물고 있을까요?"
        />
        <Description
          firsttext="감정을 담는 그릇, 나만의 작은감정"
          secondtext="우주 탐색을 시작해보세요."
        />
        <ImgWrapper>
          <BacklightLayer />
          <StarImage
            src="/images/star1.svg"
            alt="star1"
            width={40}
            height={40}
            top="30%"
            left="90%"
            isLeft={true}
            loading="lazy"
          />
          <StarImage
            src="/images/star2.svg"
            alt="star2"
            width={20}
            height={20}
            top="25%"
            right="20%"
            isLeft={false}
            delay={0.5}
            loading="lazy"
          />
          <StarImage
            src="/images/star3.svg"
            alt="star3"
            width={35}
            height={38}
            top="35%"
            right="80%"
            isLeft={true}
            delay={1}
            loading="lazy"
          />
          <StarImage
            src="/images/star4.svg"
            alt="star4"
            width={60}
            height={60}
            top="40%"
            left="20%"
            isLeft={true}
            delay={1}
            loading="lazy"
          />
          <StarImage
            src="/images/star5.svg"
            alt="star5"
            width={35}
            height={38}
            top="60%"
            right="75%"
            isLeft={true}
            delay={1}
            loading="lazy"
          />
          <PlanetImage
            src="/images/main.svg"
            alt="main"
            width={280}
            height={280}
            priority
          />
          <RocketImage
            src="/images/rocket.svg"
            alt="rocket"
            width={80}
            height={80}
            loading="lazy"
          />
          <TextImage
            src="/images/maintext.svg"
            alt="maintext"
            width={200}
            height={50}
            priority
          />
        </ImgWrapper>
        <Button onClick={handleStartClick}>탐험 시작하기</Button>
      </ContentWrapper>
    </Container>
  );
}
