"use client";

import React from "react";
import styled from "styled-components";
import Text from "@/components/Text";
import Title from "@/components/Title";
import Description from "@/components/description";
import Button from "@/components/button";
import StarBackground from "@/components/StarBackground";
import SpaceScene from "@/components/SpaceScene";

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
`;

export default function Start() {
  const handleStartClick = () => {
    window.location.href = "/onboarding";
  };

  return (
    <Container>
      <StarBackground />
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
        <SpaceScene />
        <Button onClick={handleStartClick}>탐험 시작하기</Button>
      </ContentWrapper>
    </Container>
  );
}
