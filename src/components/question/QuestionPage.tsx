"use client";

import React from "react";
import styled from "styled-components";
import QuesBadge from "@/components/question/QuesBadge";
import Question from "@/components/question/Question";
import CheckBox from "@/components/common/CheckBox";
import NextButton from "@/components/NextButton";
import BeforeButton from "@/components/question/BeforeButton";

const QuestionContainer = styled.div<{ isFocused: boolean; anyFieldFocused: boolean }>`
  width: 336px;
  height: 200px;
  margin: 44px auto 0;
  background: ${(props) => (props.isFocused ? "#FAFAFA" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.anyFieldFocused ? (props.isFocused ? 1 : 0.5) : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 40px 0 20px;
`;

interface Question {
  id: number;
  firstText: string;
  secondText: string;
  questionNumber: number;
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
    questions[0]?.id ?? 0
  );

  const handleAnswer = (questionId: number, score: number) => {
    onSaveAnswer(questionId, score);
    const currentIndex = questions.findIndex((q) => q.id === questionId);
    const nextQuestion = questions[currentIndex + 1];
    if (nextQuestion && !savedAnswers[nextQuestion.id]) {
      setFocusedQuestion(nextQuestion.id);
    }
  };

  const handleQuestionClick = (questionId: number, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".checkbox-group")) return;
    setFocusedQuestion(questionId);
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
            isFocused={isFocused}
            anyFieldFocused={!!focusedQuestion}
            onClick={(e) => handleQuestionClick(q.id, e)}
          >
            <QuesBadge
              currentQues={q.questionNumber}
              totalQues={12}
              isFocused={isFocused}
            />
            <Question
              firstText={q.firstText}
              secondText={q.secondText}
              isFocused={isFocused}
            />
            <CheckBoxGroup className="checkbox-group">
              {answerOptions.map((option) => (
                <CheckBox
                  key={option.score}
                  label={option.label}
                  isSelected={savedAnswers[q.id] === option.score}
                  onClick={() => handleAnswer(q.id, option.score)}
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
        <BeforeButton onClick={onPrev} />
        <NextButton onClick={onNext} disabled={!allAnswered} />
      </ButtonWrapper>
    </>
  );
}