"use client";

import QuestionPage from "@/components/QuestionPage";

export default function Step2() {
  const questions = [
    {
      id: "question4",
      questionNumber: 4,
      firstText: "나는 감정을 말로 표현하는 것보다",
      secondText: "행동으로 표현하는 것이 편하다.",
    },
    {
      id: "question5",
      questionNumber: 5,
      firstText: "나는 감정을 표현할 때",
      secondText: "직접적으로 표현하는 편이다.",
    },
    {
      id: "question6",
      questionNumber: 6,
      firstText: "나는 감정을 표현하는 것에",
      secondText: "거리낌이 없는 편이다.",
    },
  ];

  return (
    <QuestionPage
      currentStep={2}
      questions={questions}
      previousPath="/step1"
      nextPath="/step3"
    />
  );
}
