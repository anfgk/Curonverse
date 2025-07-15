"use client";

import { useRouter } from "next/navigation";

export function useQuestionForm(userId: number) {
  const router = useRouter();

  const questionForm = async (
    answers: Record<number, Record<number, number>>
  ) => {
    console.log(userId, "userId");
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
      // 클라이언트 사이드에서 더미 데이터 생성
      const testResult = {
        data: {
          id: 1,
          userId: userId,
          type: "emotion",
          emotionType: {
            id: 1,
            name: "INFP",
            description: "열정적인 중재자"
          },
          rhythmId: 1,
          answers: flattened,
          createdAt: new Date().toISOString()
        }
      };

      const healingRoutine = {
        data: {
          id: 1,
          mbtiId: testResult.data.emotionType.id,
          rhythmId: testResult.data.rhythmId,
          routines: [
            {
              id: 1,
              title: "아침 명상",
              description: "10분간 조용히 앉아서 호흡에 집중하세요",
              time: "아침",
              duration: 10
            },
            {
              id: 2,
              title: "자연 산책",
              description: "공원이나 숲에서 30분간 산책하세요",
              time: "오후",
              duration: 30
            },
            {
              id: 3,
              title: "일기 쓰기",
              description: "하루의 감정과 생각을 정리해보세요",
              time: "저녁",
              duration: 15
            }
          ]
        }
      };

      sessionStorage.setItem("test", JSON.stringify(testResult.data));
      sessionStorage.setItem("healingRoutine", JSON.stringify(healingRoutine.data));
      
      // /result 페이지로 이동
      router.push("/result");
    } catch (error) {
      console.error("제출 중 오류 발생:", error);
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { questionForm };
}
