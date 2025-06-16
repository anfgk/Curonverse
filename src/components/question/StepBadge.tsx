"use client";

import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 24px;
  margin-top: 31px;
  margin-left: 20px;
  padding: 14px 8px;
  border-radius: 10px;
  background: #fff;
`;

const HighlightText = styled.span`
  color: #cb59ff;
  font-size: 16px;
  font-weight: bold;
`;

const NormalText = styled.span`
  color: #111;
  font-size: 16px;
  font-weight: bold;
`;

interface StepBadgeProps {
  currentStep: string;
  totalSteps: string;
}

const StepBadge = ({ currentStep, totalSteps }: StepBadgeProps) => {
  return (
    <BadgeContainer>
      <HighlightText>{currentStep}</HighlightText>
      <NormalText>/{totalSteps}</NormalText>
    </BadgeContainer>
  );
};

export default StepBadge;
