"use client";

import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import QuesBadge from "@/components/question/QuesBadge";
import Question from "@/components/question/Question";
import CheckBox from "@/components/common/CheckBox";
import ButtonWrapper from "@/components/buttons/ButtonWrapper";
import NextButton from "@/components/buttons/NextButton";
import BeforeButton from "@/components/buttons/BeforeButton";

const QuestionContainer = styled.div<{
  $isFocused: boolean;
  $anyFieldFocused: boolean;
}>`
  width: 336px;
  height: 200px;
  margin: 44px auto 0;
  padding: 5px 24px;
  background: ${(props) => (props.$isFocused ? "#FAFAFA" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) =>
    props.$anyFieldFocused ? (props.$isFocused ? 1 : 0.5) : 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scroll-margin-top: 100px;

`;

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;

interface Question {
  id: number;
  text: string;
  dimension: string;
  orderIndex: number;
}

interface Props {
  step: number;
  questions: Question[];
  savedAnswers: Record<number, number>;
  onSaveAnswer: (id: number, score: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function QuestionPage({
  step,
  questions,
  savedAnswers,
  onSaveAnswer,
  onNext,
  onPrev,
}: Props) {
  const [focusedQuestion, setFocusedQuestion] = React.useState<number>(
    questions.length > 0 ? questions[0].id : 0
  );

  // 처음 렌더링 시 첫 번째 질문으로 스크롤
  useLayoutEffect(() => {
    if (questions.length === 0) return;
    const firstId = questions[0].id;
    const element = document.getElementById(`question-${firstId}`);
    if (element) {
      setFocusedQuestion(firstId);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step, questions]);

  const handleAnswer = (questionId: number, score: number) => {
    console.log("Answer selected:", questionId, score);
    onSaveAnswer(questionId, score);

    const currentIndex = questions.findIndex((q) => q.id === questionId);
    const nextQuestion = questions[currentIndex + 1];
    
    console.log("Current index:", currentIndex, "Next question:", nextQuestion);

    // 답변 후 바로 다음 질문으로 이동
    if (nextQuestion) {
      console.log("Moving to next question:", nextQuestion.id);
      
      // 즉시 포커스 변경
      setFocusedQuestion(nextQuestion.id);
      
      // 강제로 리렌더링을 위한 상태 업데이트
      setTimeout(() => {
        setFocusedQuestion(nextQuestion.id);
      }, 0);
      
      // 약간의 지연 후 스크롤 실행
      setTimeout(() => {
        const nextElement = document.getElementById(`question-${nextQuestion.id}`);
        if (nextElement) {
          nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      console.log("No next question available");
    }
  };

  const handleQuestionClick = (questionId: number, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".checkbox-group")) return;
    setFocusedQuestion(questionId);
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleCheckboxClick = (questionId: number) => {
    setFocusedQuestion(questionId);
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const allAnswered = questions.every((q) => savedAnswers[q.id] !== undefined);

  const answerOptions = [
    { label: "매우 아니다", score: 1, size: 36 },
    { label: "아니다", score: 2, size: 32 },
    { label: "보통이다", score: 3, size: 24 },
    { label: "그렇다", score: 4, size: 32 },
    { label: "매우 그렇다", score: 5, size: 36 },
  ];

  return (
    <>
      {questions.map((q) => {
        const isFocused = focusedQuestion === q.id;
        console.log(`Question ${q.id} focused:`, isFocused, "Current focusedQuestion:", focusedQuestion);

        return (
          <QuestionContainer
            key={q.id}
            id={`question-${q.id}`}
            $isFocused={isFocused}
            $anyFieldFocused={!!focusedQuestion}
            onClick={(e) => handleQuestionClick(q.id, e)}
          >
            <QuesBadge
              currentQues={q.id}
              totalQues={12}
              isFocused={isFocused}
            />
            <Question
              text={q.text}
              isFocused={isFocused}
            />
            <CheckBoxGroup className="checkbox-group">
              {answerOptions.map((option) => (
                <CheckBox
                  key={option.score}
                  label={option.label}
                  isSelected={savedAnswers[q.id] === option.score}
                  onClick={() => handleAnswer(q.id, option.score)}
                  onQuestionClick={() => handleCheckboxClick(q.id)}
                  size={option.size}
                  isFocused={isFocused}
                  hasAnySelection={!!savedAnswers[q.id]}
                />
              ))}
            </CheckBoxGroup>
          </QuestionContainer>
        );
      })}
      <ButtonWrapper>
        <BeforeButton
          onClick={onPrev}
          disabled={step === 0}
          variant="step"
        >
          {step === 1 ? "처음으로" : "이전"}
        </BeforeButton>
        <NextButton
          onClick={onNext}
          disabled={!allAnswered}
          variant="step"
        >
          {step === 4 ? "다음" : "다음"}
        </NextButton>
      </ButtonWrapper>
    </>
  );
}
