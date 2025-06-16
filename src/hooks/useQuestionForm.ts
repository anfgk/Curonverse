"use client";

import { useRouter } from "next/navigation";
import { testService } from "@/services/testService";

export function useQuestionForm(userId: number) {
  const router = useRouter();

  const questionForm = async (
    answers: Record<number, Record<number, number>>
  ) => {
    if (!userId) {
      alert("사용자 정보가 없습니다.");
      router.replace("/profile");
      return;
    }

    // 변환: step별 answer → 평탄화된 배열
    const flattened = Object.values(answers).flatMap((stepAnswers) =>
      Object.entries(stepAnswers).map(([questionId, score]) => {
        const id = Number(questionId);
        return {
          questionId: id,
          score,
        };
      })
    );

    try {
      await testService.submitTest({
        userId,
        type: "emotion",
        answers: flattened,
      });
      router.push("/onloading");
    } catch (error) {
      console.error("제출 중 오류 발생:", error);
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { questionForm };
}
