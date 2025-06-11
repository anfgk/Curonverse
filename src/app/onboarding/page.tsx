"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import LoadingSpinner from "@/components/LoadingSpinner";
import StarBackground from "@/components/StarBackground";

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
  margin: 0 auto;
  overflow: hidden;
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
`;

const TextContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Onboarding() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/profile");
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
      <StarBackground />
      <ContentWrapper>
        <Text text="잠시만 기다려주세요." variant="subtitle" />
        <Title
          mainText="감정 로켓 탑승권을"
          highlightText="준비"
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
