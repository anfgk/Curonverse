"use client";

import { useState, useEffect } from "react";

const TOTAL_STEPS = 4;

export function useQuestionFlow() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<
    Record<number, Record<string, number>>
  >({});

  useEffect(() => {
    // step이 바뀔 때 첫 질문 위치로 스크롤
    setTimeout(() => {
      let questionId;
      switch (step) {
        case 1:
          questionId = "question-1";
          break;
        case 2:
          questionId = "question-4";
          break;
        case 3:
          questionId = "question-7";
          break;
        case 4:
          questionId = "question-10";
          break;
        default:
          questionId = "question-1";
      }
      const firstQuestion = document.getElementById(questionId);
      if (firstQuestion) {
        firstQuestion.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  }, [step]);

  const goNext = () => {
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const goPrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const saveAnswer = (stepId: number, questionId: number, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: {
        ...prev[stepId],
        [questionId]: score,
      },
    }));
  };

  return {
    step,
    answers,
    goNext,
    goPrev,
    saveAnswer,
    isLastStep: step === TOTAL_STEPS,
  };
}
