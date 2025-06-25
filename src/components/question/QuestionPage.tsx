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
  isFocused: boolean;
  anyFieldFocused: boolean;
}>`
  width: 336px;
  height: 200px;
  margin: 44px auto 0;
  background: ${(props) => (props.isFocused ? "#FAFAFA" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) =>
    props.anyFieldFocused ? (props.isFocused ? 1 : 0.5) : 1};
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
    onSaveAnswer(questionId, score);

    const currentIndex = questions.findIndex((q) => q.id === questionId);
    const nextQuestion = questions[currentIndex + 1];

    if (nextQuestion && !savedAnswers[nextQuestion.id]) {
      setFocusedQuestion(nextQuestion.id);
      const nextElement = document.getElementById(`question-${nextQuestion.id}`);
      if (nextElement) {
        nextElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
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

        return (
          <QuestionContainer
            key={q.id}
            id={`question-${q.id}`}
            isFocused={isFocused}
            anyFieldFocused={!!focusedQuestion}
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
          {step === 4 ? "제출하기" : "다음"}
        </NextButton>
      </ButtonWrapper>
    </>
  );
}
