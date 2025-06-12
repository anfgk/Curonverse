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

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: auto;
  margin-bottom: 20px;
`;

interface Question {
  id: string;
  firstText: string;
  secondText: string;
  questionNumber: number;
}

interface Props {
  step: number;
  questions: Question[];
  savedAnswers: Record<string, number>;
  onSaveAnswer: (id: string, score: number) => void;
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
  const [focusedQuestion, setFocusedQuestion] = React.useState<string>(
    questions[0]?.id || ""
  );

  const handleAnswer = (questionId: string, score: number) => {
    onSaveAnswer(questionId, score);
    const currentIndex = questions.findIndex((q) => q.id === questionId);
    if (
      currentIndex < questions.length - 1 &&
      !savedAnswers[questions[currentIndex + 1].id]
    ) {
      setFocusedQuestion(questions[currentIndex + 1].id);
    }
  };

  const handleQuestionClick = (questionId: string, e: React.MouseEvent) => {
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
      {questions.map((q) => (
        <QuestionContainer
          key={q.id}
          isFocused={focusedQuestion === q.id}
          anyFieldFocused={!!focusedQuestion}
          onClick={(e) => handleQuestionClick(q.id, e)}
        >
          <QuesBadge
            currentQues={q.questionNumber}
            totalQues={12}
            isFocused={focusedQuestion === q.id}
          />
          <Question
            firstText={q.firstText}
            secondText={q.secondText}
            isFocused={focusedQuestion === q.id}
          />
          <CheckBoxGroup className="checkbox-group">
            {answerOptions.map((option) => (
              <CheckBox
                key={option.score}
                label={option.label}
                isSelected={savedAnswers[q.id] === option.score}
                onClick={() => handleAnswer(q.id, option.score)}
                size={option.size}
                isFocused={focusedQuestion === q.id}
                hasAnySelection={!!savedAnswers[q.id]}
              />
            ))}
          </CheckBoxGroup>
        </QuestionContainer>
      ))}
      <ButtonWrapper>
        <BeforeButton onClick={onPrev} />
        <NextButton onClick={onNext} disabled={!allAnswered} />
      </ButtonWrapper>
    </>
  );
}
