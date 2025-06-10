"use client";

import { useEffect, useState, useMemo, memo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import LoadingSpinner from "@/components/LoadingSpinner";
import { profileService } from "@/services/profile";
import { surveyService } from "@/services/survey";

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`;

const Container = styled.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  position: fixed;
  overflow: hidden;
  margin: 0 auto;
`;

const Star = memo(styled.div<{
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
  will-change: opacity;
  transform: translateZ(0);
`);

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const RocketImage = styled(Image)`
  margin-top: 100px;
  width: 86px !important;
  height: 86px !important;
  animation: ${twinkle} 2s ease-in-out infinite;
  display: block;
  margin-left: auto;
  margin-right: auto;
  will-change: transform, opacity;
  transform: translateZ(0);
`;

const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stars = memo(
  ({
    stars,
  }: {
    stars: Array<{ delay: number; top: number; left: number; size: number }>;
  }) => (
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
  )
);

Stars.displayName = "Stars";

export default function Loading() {
  const router = useRouter();
  const [userName, setUserName] = useState(() => {
    // 초기값을 함수로 설정하여 첫 렌더링 시 바로 사용자 이름을 가져옴
    const profile = profileService.getProfile();
    return profile?.name || "";
  });

  const stars = useMemo(
    () =>
      Array.from({ length: 250 }, (_, i) => ({
        delay: Math.random() * 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const mbtiResult = surveyService.calculateMBTI();
      router.push(`/result?mbti=${mbtiResult}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <Stars stars={stars} />
      <ContentWrapper>
        <Text text="수고하셨습니다." variant="subtitle" />
        <Title
          mainText={`${userName}님의 감정 행성으로`}
          highlightText="이동"
          subText="하고 있어요."
        />
        <RocketImage
          src="/images/rocket.svg"
          alt="rocket"
          width={86}
          height={86}
          priority
        />
        <TextContainer>
          <Text text="마음을 가다듬고," variant="loading" center />
          <Text
            text="내가 지닌 다양한 감정들을 떠올려보세요."
            variant="loading"
            center
          />
        </TextContainer>
        <LoadingSpinner />
      </ContentWrapper>
    </Container>
  );
}
