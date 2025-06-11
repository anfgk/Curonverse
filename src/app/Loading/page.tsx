"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import LoadingSpinner from "@/components/LoadingSpinner";
import StarBackground from "@/components/StarBackground";
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

// Loading 페이지 컴포넌트 정의
export default function Loading() {
  const router = useRouter();
  // 사용자 이름 상태 관리
  const [userName, setUserName] = useState(() => {
    // 프로필 정보 가져오기
    const profile = profileService.getProfile();
    // 프로필 정보가 있으면 사용자 이름 설정
    return profile?.name || "";
  });

  // 페이지 마운트 시 실행되는 효과
  useEffect(() => {
    // 1초 후에 결과 페이지로 이동
    const timer = setTimeout(() => {
      // MBTI 결과 계산
      const mbtiResult = surveyService.calculateMBTI();
      // 결과 페이지로 이동
      router.push(`/result?mbti=${mbtiResult}`);
      // 타이머 정리
    }, 1000);

    // 타이머 정리
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <StarBackground />
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
