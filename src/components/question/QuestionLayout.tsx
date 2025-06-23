"use client";

import styled from "styled-components";
import StepHeader from "@/components/question/StepHeader";
import StepBadge from "@/components/question/StepBadge";
import Title from "@/components/Title";
import { ReactNode } from "react";

const Container = styled.div`
  width: 375px;
  background: #393939;
  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 360px) {
    width: 100vw;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  padding: 20px 20px;
  gap: 20px;
  @media (max-width: 360px) {
    padding-bottom: 100px;
  }
`;

interface Props {
  step: number;
  answeredCount: number;
  children: ReactNode;
}

export default function QuestionLayout({
  step,
  answeredCount,
  children,
}: Props) {
  return (
    <Container>
      <ContentWrapper>
        <StepHeader
          currentStep={step}
          currentQuestion={answeredCount + ((step - 1) * 3 + 1)}
        />
        <StepBadge currentStep={String(step)} totalSteps="4" />
        <Title
          mainText="본인의 성향과 가장 가까운"
          highlightText="하나를 선택"
          subText="해주세요."
        />
        {children}
      </ContentWrapper>
    </Container>
  );
}
