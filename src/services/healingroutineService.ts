import { ApiResponse, HealingRoutine, HealingRoutineParams } from "@/data/types";

// 기본 힐링 루틴 데이터
const defaultHealingRoutines: Record<number, HealingRoutine> = {
  1: {
    rhythmId: 1,
    rhythmName: "Spark Flame",
    rhythmColor: "#FF6B35",
    rhythmColorHex: "#FF6B35",
    healingKeywords: ["에너지", "열정", "활력"],
    recommendedContents: [
      {
        title: "에너지 넘치는 운동",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
      },
      {
        title: "열정적인 음악",
        link: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
      },
      {
        title: "고강도 인터벌 트레이닝",
        link: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/ml6cT4AZdqI/hqdefault.jpg"
      }
    ]
  },
  2: {
    rhythmId: 2,
    rhythmName: "Warm Flow",
    rhythmColor: "#F39C12",
    rhythmColorHex: "#F39C12",
    healingKeywords: ["따뜻함", "조화", "평온"],
    recommendedContents: [
      {
        title: "따뜻한 차 마시기",
        link: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/8jLOx1hD3_o/hqdefault.jpg"
      },
      {
        title: "평온한 명상",
        link: "https://www.youtube.com/watch?v=inpok4MKVLM",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg"
      },
      {
        title: "따뜻한 재즈 음악",
        link: "https://www.youtube.com/watch?v=zqNTltOGh5c",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/zqNTltOGh5c/hqdefault.jpg"
      }
    ]
  },
  3: {
    rhythmId: 3,
    rhythmName: "Healing Loop",
    rhythmColor: "#9B59B6",
    rhythmColorHex: "#9B59B6",
    healingKeywords: ["치유", "회복", "성장"],
    recommendedContents: [
      {
        title: "자기 돌봄 루틴",
        link: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg"
      },
      {
        title: "치유 음악",
        link: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/lFcSrYw-ARY/hqdefault.jpg"
      },
      {
        title: "감정 회복 명상",
        link: "https://www.youtube.com/watch?v=O-6f5wQXSu8",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/O-6f5wQXSu8/hqdefault.jpg"
      }
    ]
  },
  4: {
    rhythmId: 4,
    rhythmName: "Quiet Sync",
    rhythmColor: "#2C3E50",
    rhythmColorHex: "#2C3E50",
    healingKeywords: ["조용함", "동기화", "균형"],
    recommendedContents: [
      {
        title: "조용한 독서",
        link: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/7NOSDKb0HlU/hqdefault.jpg"
      },
      {
        title: "자연 소리",
        link: "https://www.youtube.com/watch?v=q76bMs-NwRk",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/q76bMs-NwRk/hqdefault.jpg"
      },
      {
        title: "균형 잡기 요가",
        link: "https://www.youtube.com/watch?v=dAq0u5cX3qM",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/dAq0u5cX3qM/hqdefault.jpg"
      }
    ]
  },
  5: {
    rhythmId: 5,
    rhythmName: "Silent Echo",
    rhythmColor: "#34495E",
    rhythmColorHex: "#34495E",
    healingKeywords: ["침묵", "메아리", "깊이"],
    recommendedContents: [
      {
        title: "깊은 호흡",
        link: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/8jLOx1hD3_o/hqdefault.jpg"
      },
      {
        title: "명상 음악",
        link: "https://www.youtube.com/watch?v=lFcSrYw-ARY",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/lFcSrYw-ARY/hqdefault.jpg"
      },
      {
        title: "침묵 명상",
        link: "https://www.youtube.com/watch?v=inpok4MKVLM",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg"
      }
    ]
  },
  6: {
    rhythmId: 6,
    rhythmName: "Hidden Pearl",
    rhythmColor: "#3498DB",
    rhythmColorHex: "#3498DB",
    healingKeywords: ["숨겨진 보물", "발견", "가치"],
    recommendedContents: [
      {
        title: "자기 발견 활동",
        link: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg"
      },
      {
        title: "영감을 주는 음악",
        link: "https://www.youtube.com/watch?v=zqNTltOGh5c",
        type: "media",
        thumbnail: "https://img.youtube.com/vi/zqNTltOGh5c/hqdefault.jpg"
      },
      {
        title: "창의성 발현 활동",
        link: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
        type: "activity",
        thumbnail: "https://img.youtube.com/vi/7NOSDKb0HlU/hqdefault.jpg"
      }
    ]
  }
};

export const healingRoutineService = {
  async getHealingRoutine(params?: HealingRoutineParams): Promise<ApiResponse<HealingRoutine>> {
    if (!params?.rhythmId) {
      throw new Error("rhythmId is required and must be a number.");
    }

    // localStorage에서 힐링 루틴 데이터를 가져오거나 기본 데이터 사용
    if (typeof window !== "undefined") {
      const storedRoutines = localStorage.getItem("healingRoutines");
      if (storedRoutines) {
        const routines = JSON.parse(storedRoutines);
        const routine = routines[params.rhythmId];
        if (routine) {
          return {
            statusCode: 200,
            message: "Success",
            data: routine,
            timestamp: new Date().toISOString()
          };
        }
      }
    }

    // 기본 데이터 반환
    const defaultRoutine = defaultHealingRoutines[params.rhythmId] || defaultHealingRoutines[1];
    
    return {
      statusCode: 200,
      message: "Success",
      data: defaultRoutine,
      timestamp: new Date().toISOString()
    };
  },
};
