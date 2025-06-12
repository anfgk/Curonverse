"use client";

import styled from "styled-components";
import StepHeader from "@/components/question/StepHeader";
import StepBadge from "@/components/question/StepBadge";
import Title from "@/components/Title";
import { ReactNode } from "react";

const Container = styled.div`
  width: 375px;
  height: 1106px;
  background: #393939;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

interface Props {
  step: number;
  answeredCount: number;
  children: ReactNode;
}

export default function QuestionLayout({ step, answeredCount, children }: Props) {
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
