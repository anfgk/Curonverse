"use client";

import { useMemo, useEffect, useState } from "react";
import { useStoredUser } from "@/hooks/useStoredUser";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import QuestionLayout from "@/components/question/QuestionLayout";
import QuestionPage from "@/components/question/QuestionPage";
import { useQuestionForm } from "@/hooks/useQuestionForm";
import { testService } from "@/services/testService";
import { useRouter } from "next/navigation";

export default function StepFlowPage() {
  const user = useStoredUser();
  const { step, answers, goNext, goPrev, saveAnswer, isLastStep } = useQuestionFlow();
  const { questionForm } = useQuestionForm(user?.id || 0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    const fetchQuestions = async () => {
      const result = await testService.getTestQuestions();
      console.log("Fetched questions:", result);
      setQuestions(result);
      setLoading(false);
    };

    fetchQuestions();
  }, [user]);

  const QUESTIONS_PER_STEP = 3;

  const stepQuestions = useMemo(() => {
    if (!questions || questions.length === 0) {
      console.log("No questions available");
      return {};
    }
    console.log("Processing questions:", questions);

    const result = questions.reduce((acc, question, index) => {
      const stepIndex = Math.floor(index / QUESTIONS_PER_STEP) + 1;
      if (!acc[stepIndex]) acc[stepIndex] = [];
      acc[stepIndex].push(question);
      return acc;
    }, {} as Record<number, typeof questions>);
    
    console.log("Step questions result:", result);
    return result;
  }, [questions]);

  const handleNext = async () => {
    if (isLastStep) {
      await questionForm(answers);
    } else {
      goNext();
    }
  };

  const handlePrev = async () => {
    if (step === 1) {
      router.push("/start");
    } else {
      goPrev();
    }
  };

  return (
    <QuestionLayout step={step} answeredCount={Object.keys(answers).length}>
      <QuestionPage
        step={step}
        questions={stepQuestions[step] || []}
        savedAnswers={answers[step] || {}}
        onSaveAnswer={(qid, score) => saveAnswer(step, qid, score)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </QuestionLayout>
  );
}