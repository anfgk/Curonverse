"use client";

import QuestionPage from "@/components/QuestionPage";

export default function Step1() {
  const questions = [
    {
      id: "question1",
      questionNumber: 1,
      firstText: "나는 기분이 표정이나 말투로 쉽게",
      secondText: "드러나는 편이다.",
    },
    {
      id: "question2",
      questionNumber: 2,
      firstText: "감정이 생기면 누군가에게",
      secondText: "바로 말하고 싶어진다.",
    },
    {
      id: "question3",
      questionNumber: 3,
      firstText: "기쁘거나 슬플 때, 나도 모르게",
      secondText: "감정이 터져나온적이 많다.",
    },
  ];

  return (
    <QuestionPage
      currentStep={1}
      questions={questions}
      previousPath="/profile"
      nextPath="/step2"
    />
  );
}
