"use client";

import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import QuestionLayout from "@/components/question/QuestionLayout";
import QuestionPage from "@/components/question/QuestionPage";
import { stepQuestions } from "@/constants/stepQuestions";
import { useRouter } from "next/navigation";

export default function StepFlowPage() {
  const { step, answers, goNext, goPrev, saveAnswer, isLastStep } =
    useQuestionFlow();

  const router = useRouter();
  const questions = stepQuestions[String(step)];

  const handleNext = async () => {
    if (isLastStep) {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      router.push("/loading");
    } else {
      goNext();
    }
  };

  return (
    <QuestionLayout step={step} answeredCount={Object.keys(answers).length}>
      <QuestionPage
        step={step}
        questions={questions}
        savedAnswers={answers[step] || {}}
        onSaveAnswer={(id, score) => saveAnswer(step, id, score)}
        onNext={handleNext}
        onPrev={goPrev}
      />
    </QuestionLayout>
  );
}
