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

  useLayoutEffect(() => {
    const getQuestionInfo = () => {
      if (step === 1)
        return {
          questionId: "question-1",
          firstQuestionId: questions[0]?.id ?? 0,
        };
      if (step === 2)
        return {
          questionId: "question-4",
          firstQuestionId: questions[0]?.id ?? 0,
        };
      if (step === 3)
        return {
          questionId: "question-7",
          firstQuestionId: questions[0]?.id ?? 0,
        };
      if (step === 4)
        return {
          questionId: "question-10",
          firstQuestionId: questions[0]?.id ?? 0,
        };
      return {
        questionId: "question-1",
        firstQuestionId: questions[0]?.id ?? 0,
      };
    };

    const { questionId, firstQuestionId } = getQuestionInfo();
    const firstQuestion = document.getElementById(questionId);

    if (firstQuestion) {
      setFocusedQuestion(firstQuestionId);
      firstQuestion.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step, questions]);

  const handleAnswer = (questionId: number, score: number) => {
    onSaveAnswer(questionId, score);
    const currentIndex = questions.findIndex((q) => q.id === questionId);
    const nextQuestion = questions[currentIndex + 1];
    if (nextQuestion && !savedAnswers[nextQuestion.id]) {
      setFocusedQuestion(nextQuestion.id);
      const nextElement = document.getElementById(
        `question-${nextQuestion.id}`
      );
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
      {questions.map((q, index) => {
        const isFocused = focusedQuestion === q.id;
        let questionId;
        if (step === 1 && index === 0) questionId = "question-1";
        else if (step === 2 && index === 0) questionId = "question-4";
        else if (step === 3 && index === 0) questionId = "question-7";
        else if (step === 4 && index === 0) questionId = "question-10";
        else questionId = `question-${q.id}`;

        return (
          <QuestionContainer
            key={q.id}
            id={questionId}
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
