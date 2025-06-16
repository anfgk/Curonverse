"use client";

import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 0 20px 0 20px;
  margin-top: 56px;
`;

const ProgressContainer = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;

const ProgressBar = styled.div<{ isActive: boolean; isCompleted: boolean }>`
  height: 4px;
  flex: 1;
  background: ${(props) =>
    props.isCompleted
      ? "#CB59FF"
      : props.isActive
      ? "linear-gradient(to right, #CB59FF 50%, #666666 50%)"
      : "#666666"};
  border-radius: 2px;
  transition: background 0.3s ease;
`;

interface StepHeaderProps {
  currentStep: number; // 현재 스텝 (1-4)
  currentQuestion: number; // 현재 질문 번호 (1-12)
}

const StepHeader = ({ currentStep, currentQuestion }: StepHeaderProps) => {
  // 각 스텝당 3개의 질문이 있으므로, 현재 진행 중인 스텝의 진행도를 계산
  const getCurrentStepProgress = (step: number) => {
    if (step < currentStep) return true; // 완료된 스텝
    if (step > currentStep) return false; // 아직 시작하지 않은 스텝

    // 현재 스텝의 진행도 계산
    const questionsInCurrentStep =
      currentQuestion % 3 === 0 ? 3 : currentQuestion % 3;
    return questionsInCurrentStep > 0;
  };

  return (
    <HeaderContainer>
      <ProgressContainer>
        {/* 각 스텝의 진행도를 계산하여 표시 */}
        {[1, 2, 3, 4].map((step) => (
          // 각 스텝의 진행도를 계산하여 표시
          <ProgressBar
            key={step}
            isActive={step === currentStep}
            isCompleted={step < currentStep}
          />
        ))}
      </ProgressContainer>
    </HeaderContainer>
  );
};

export default StepHeader;
