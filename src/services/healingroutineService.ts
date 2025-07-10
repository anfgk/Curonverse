const API_URL = "/api/healing-routine";

interface HealingRoutineParams {
  mbtiId: number;
  rhythmId: number;
}

// 클라이언트 사이드에서 사용할 더미 힐링 루틴 데이터
const dummyHealingRoutines = {
  1: {
    id: 1,
    mbtiId: 1,
    rhythmId: 1,
    keywords: ["창의성", "열정", "새로운 경험"],
    recommendedContent: [
      {
        id: 1,
        title: "창의성을 키우는 방법",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      },
      {
        id: 2,
        title: "새로운 취미 시작하기",
        type: "article",
        url: "https://example.com/hobby",
        thumbnail: "https://via.placeholder.com/300x200"
      }
    ],
    rhythmColor: "#FF6B6B",
    rhythmColorHex: "#FF6B6B"
  },
  2: {
    id: 2,
    mbtiId: 2,
    rhythmId: 2,
    keywords: ["평온", "명상", "자기 성찰"],
    recommendedContent: [
      {
        id: 3,
        title: "명상 가이드",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      }
    ],
    rhythmColor: "#4ECDC4",
    rhythmColorHex: "#4ECDC4"
  }
};

export const healingRoutineService = {
  async getHealingRoutine(params: HealingRoutineParams) {
    // 백엔드 API 호출 대신 더미 데이터 반환
    console.log("Fetching healing routine for params:", params);
    
    // 잠시 지연을 주어 실제 API 호출처럼 보이게 함
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // 더미 데이터에서 랜덤하게 선택하거나 기본값 사용
    const routineId = Math.floor(Math.random() * 2) + 1;
    const routine = dummyHealingRoutines[routineId as keyof typeof dummyHealingRoutines];
    
    return {
      data: routine,
      statusCode: 200,
      message: "Healing routine fetched successfully"
    };
  },
};
