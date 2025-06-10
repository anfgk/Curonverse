"use client";

import QuestionPage from "@/components/QuestionPage";

export default function Step4() {
  const questions = [
    {
      id: "question10",
      questionNumber: 10,
      firstText: "나는 내가 느끼는 감정이",
      secondText: "정확히 무엇인지 잘 아는 편이다.",
    },
    {
      id: "question11",
      questionNumber: 11,
      firstText: "나는 감정의 변화를",
      secondText: "빠르게 알아차리는 편이다.",
    },
    {
      id: "question12",
      questionNumber: 12,
      firstText: "나는 내 감정의 원인을",
      secondText: "잘 파악하는 편이다.",
    },
  ];

  return (
    <QuestionPage
      currentStep={4}
      questions={questions}
      previousPath="/step3"
      nextPath="/Loading"
    />
  );
}
