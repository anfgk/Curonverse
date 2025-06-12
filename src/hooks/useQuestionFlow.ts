"use client";

import { useState } from "react";

const TOTAL_STEPS = 4;

export function useQuestionFlow() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, Record<string, number>>>({});

  const goNext = () => {
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const goPrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const saveAnswer = (stepId: number, questionId: string, score: number) => {
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