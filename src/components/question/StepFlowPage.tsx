"use client";

import { useStoredUser } from "@/hooks/useStoredUser";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import QuestionLayout from "@/components/question/QuestionLayout";
import QuestionPage from "@/components/question/QuestionPage";
import { stepQuestions } from "@/constants/stepQuestions";
import { useQuestionForm } from "@/hooks/useQuestionForm";

export default function StepFlowPage() {
  const user = useStoredUser();
  const { step, answers, goNext, goPrev, saveAnswer, isLastStep } = useQuestionFlow();

  if (!user) return null;

  const { questionForm } = useQuestionForm(user?.id);

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
        questions={stepQuestions[step]}
        savedAnswers={answers[step] || {}}
        onSaveAnswer={(qid, score) => saveAnswer(step, qid, score)}
        onNext={handleNext}
        onPrev={goPrev}
      />
    </QuestionLayout>
  );
}