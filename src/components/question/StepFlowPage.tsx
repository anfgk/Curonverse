"use client";

import { useMemo, useEffect, useState } from "react";
import { useStoredUser } from "@/hooks/useStoredUser";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import QuestionLayout from "@/components/question/QuestionLayout";
import QuestionPage from "@/components/question/QuestionPage";
import { useQuestionForm } from "@/hooks/useQuestionForm";
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
    
    // 클라이언트 사이드에서 더미 질문 데이터 생성
    const dummyQuestions = [
      {
        id: 1,
        question: "스트레스를 받았을 때 나는 주로...",
        options: [
          { id: 1, text: "혼자만의 시간을 가지려 한다", score: 1 },
          { id: 2, text: "다른 사람과 대화하려 한다", score: 2 },
          { id: 3, text: "활동적인 일을 하려 한다", score: 3 },
          { id: 4, text: "계획을 세우고 정리하려 한다", score: 4 }
        ]
      },
      {
        id: 2,
        question: "새로운 환경에 적응할 때 나는...",
        options: [
          { id: 1, text: "천천히 관찰하고 적응한다", score: 1 },
          { id: 2, text: "즉시 적극적으로 참여한다", score: 2 },
          { id: 3, text: "다른 사람들의 도움을 받는다", score: 3 },
          { id: 4, text: "체계적으로 분석하고 접근한다", score: 4 }
        ]
      },
      {
        id: 3,
        question: "의사결정을 할 때 나는...",
        options: [
          { id: 1, text: "감정과 직감을 따른다", score: 1 },
          { id: 2, text: "논리와 사실을 따른다", score: 2 },
          { id: 3, text: "다른 사람의 의견을 듣는다", score: 3 },
          { id: 4, text: "체계적으로 분석한다", score: 4 }
        ]
      },
      {
        id: 4,
        question: "일을 처리할 때 나는...",
        options: [
          { id: 1, text: "마감일을 지키려 노력한다", score: 1 },
          { id: 2, text: "유연하게 처리한다", score: 2 },
          { id: 3, text: "즉시 시작한다", score: 3 },
          { id: 4, text: "충분히 계획한 후 시작한다", score: 4 }
        ]
      },
      {
        id: 5,
        question: "휴식을 취할 때 나는...",
        options: [
          { id: 1, text: "조용한 곳에서 혼자 시간을 보낸다", score: 1 },
          { id: 2, text: "친구들과 함께 시간을 보낸다", score: 2 },
          { id: 3, text: "활동적인 취미를 즐긴다", score: 3 },
          { id: 4, text: "새로운 것을 배우거나 계획한다", score: 4 }
        ]
      },
      {
        id: 6,
        question: "문제가 생겼을 때 나는...",
        options: [
          { id: 1, text: "감정적으로 반응한다", score: 1 },
          { id: 2, text: "논리적으로 분석한다", score: 2 },
          { id: 3, text: "다른 사람과 상의한다", score: 3 },
          { id: 4, text: "체계적으로 해결책을 찾는다", score: 4 }
        ]
      }
    ];

    setQuestions(dummyQuestions);
    setLoading(false);
  }, [user]);

  const QUESTIONS_PER_STEP = 3;

  const stepQuestions = useMemo(() => {
    if (!questions || questions.length === 0) return {};
    console.log("Step questions:", questions);

    return questions.reduce((acc, question, index) => {
      const stepIndex = Math.floor(index / QUESTIONS_PER_STEP) + 1;
      if (!acc[stepIndex]) acc[stepIndex] = [];
      acc[stepIndex].push(question);
      return acc;
    }, {} as Record<number, typeof questions>);
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