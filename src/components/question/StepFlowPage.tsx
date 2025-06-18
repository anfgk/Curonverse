"use client";

import { useStoredUser } from "@/hooks/useStoredUser";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import { useQuestionForm } from "@/hooks/useQuestionForm";
import QuestionLayout from "@/components/question/QuestionLayout";
import QuestionPage from "@/components/question/QuestionPage";
import { stepQuestions } from "@/constants/stepQuestions";

export default function StepFlowPage() {
  const user = useStoredUser();
  const { step, answers, goNext, goPrev, saveAnswer, isLastStep } = useQuestionFlow();

  if (!user) return null;

  const { questionForm } = useQuestionForm(user?.id);

  const questions = stepQuestions[step] ?? [];

  const handleNext = async () => {
    if (isLastStep) {
      await questionForm(answers);
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
