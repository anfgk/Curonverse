"use client";

import { useState, useEffect } from "react";

const TOTAL_STEPS = 4;

export function useQuestionFlow() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<
    Record<number, Record<string, number>>
  >({});

  // step이 변경될 때마다 해당 step의 답변을 초기화
  useEffect(() => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      // 현재 step의 답변만 초기화
      newAnswers[step] = {};
      return newAnswers;
    });

    // 각 step의 첫 번째 질문으로 스크롤
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
