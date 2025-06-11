"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import BeforeButton from "@/components/BeforeButton";
import StepHeader from "@/components/StepHeader";
import StepBadge from "@/components/StepBadge";
import Question from "@/components/Question";
import QuesBadge from "@/components/QuesBadge";
import CheckBox from "@/components/CheckBox";
import { surveyService } from "@/services/survey";

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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: auto;
  margin-bottom: 20px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;

const QuestionContainer = styled.div<{
  isFocused: boolean;
  anyFieldFocused: boolean;
}>`
  width: 336px;
  height: 200px;
  margin-top: 44px;
  background: ${(props) => (props.isFocused ? "#FAFAFA" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) => {
    if (!props.anyFieldFocused) return 1;
    return props.isFocused ? 1 : 0.5;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

interface Question {
  id: string;
  firstText: string;
  secondText: string;
  questionNumber: number;
}

interface QuestionPageProps {
  currentStep: number;
  questions: Question[];
  previousPath: string;
  nextPath: string;
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  currentStep,
  questions,
  previousPath,
  nextPath,
}) => {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [focusedQuestion, setFocusedQuestion] = useState<string>(
    questions[0].id
  );

  const handleAnswer = (questionId: string, score: number) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);
    surveyService.saveAnswer(questionId, score);

    // 현재 질문의 인덱스 찾기
    const currentIndex = questions.findIndex((q) => q.id === questionId);

    // 다음 질문이 있고, 아직 답변하지 않은 경우 다음 질문으로 포커스 이동
    if (
      currentIndex < questions.length - 1 &&
      !answers[questions[currentIndex + 1].id]
    ) {
      setFocusedQuestion(questions[currentIndex + 1].id);
    }
  };

  const handleBeforeClick = () => {
    router.push(previousPath);
  };

  const handleNextClick = () => {
    if (Object.values(answers).every((answer) => answer !== undefined)) {
      router.push(nextPath);
    }
  };

  const handleQuestionClick = (questionId: string, event: React.MouseEvent) => {
    if ((event.target as HTMLElement).closest(".checkbox-group")) {
      return;
    }
    setFocusedQuestion(questionId);
  };

  const answeredQuestions = Object.values(answers).filter(
    (answer) => answer !== undefined
  ).length;

  const answerOptions = [
    { label: "매우 아니다", score: 1, size: 36 },
    { label: "아니다", score: 2, size: 32 },
    { label: "보통이다", score: 3, size: 24 },
    { label: "그렇다", score: 4, size: 32 },
    { label: "매우 그렇다", score: 5, size: 36 },
  ];

  return (
    <Container>
      <ContentWrapper>
        <StepHeader
          currentStep={currentStep}
          currentQuestion={answeredQuestions + ((currentStep - 1) * 3 + 1)}
        />
        <StepBadge currentStep={String(currentStep)} totalSteps="4" />
        <Title
          mainText="본인의 성향과 가장 가까운"
          highlightText="하나를 선택"
          subText="해주세요."
        />

        {questions.map((question) => (
          <QuestionContainer
            key={question.id}
            isFocused={focusedQuestion === question.id}
            anyFieldFocused={!!focusedQuestion}
            onClick={(e) => handleQuestionClick(question.id, e)}
          >
            <QuesBadge
              currentQues={question.questionNumber}
              totalQues={12}
              isFocused={focusedQuestion === question.id}
            />
            <Question
              firstText={question.firstText}
              secondText={question.secondText}
              isFocused={focusedQuestion === question.id}
            />
            <CheckBoxGroup className="checkbox-group">
              {answerOptions.map((option) => (
                <CheckBox
                  key={option.score}
                  label={option.label}
                  isSelected={answers[question.id] === option.score}
                  onClick={() => handleAnswer(question.id, option.score)}
                  size={option.size}
                  isFocused={focusedQuestion === question.id}
                  hasAnySelection={!!answers[question.id]}
                />
              ))}
            </CheckBoxGroup>
          </QuestionContainer>
        ))}

        <ButtonWrapper>
          <BeforeButton onClick={handleBeforeClick} />
          <NextButton
            onClick={handleNextClick}
            disabled={
              !Object.values(answers).every((answer) => answer !== undefined)
            }
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default QuestionPage;
