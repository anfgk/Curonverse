"use client";

import QuestionPage from "@/components/QuestionPage";

export default function Step3() {
  const questions = [
    {
      id: "question7",
      questionNumber: 7,
      firstText: "다른 사람의 감정 변화를",
      secondText: "잘 알아차리는 편이다.",
    },
    {
      id: "question8",
      questionNumber: 8,
      firstText: "타인의 감정에 쉽게",
      secondText: "공감하는 편이다.",
    },
    {
      id: "question9",
      questionNumber: 9,
      firstText: "주변 사람들의 기분을 잘",
      secondText: "맞춰주는 편이다.",
    },
  ];

  return (
    <QuestionPage
      currentStep={3}
      questions={questions}
      previousPath="/step2"
      nextPath="/step4"
    />
  );
}
