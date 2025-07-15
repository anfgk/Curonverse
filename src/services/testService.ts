interface QuestionParams {
  dimension?: string;
  orderIndex?: number;
}

interface AnswerPayload {
  userId: number;
  type: string;
  answers: { questionId: number; score: number }[];
}

// MBTI 성격 유형 검사 질문 (4가지 선호 경향별로 3개씩)
const mockTestQuestions = [
  // E(외향성) vs I(내향성) - 에너지 방향
  {
    id: 1,
    text: "새로운 사람들과 만나는 것이 즐겁다",
    dimension: "EI",
    orderIndex: 1
  },
  {
    id: 2,
    text: "혼자 있는 시간이 필요하다",
    dimension: "EI", 
    orderIndex: 2
  },
  {
    id: 3,
    text: "사람들과 함께 있을 때 에너지가 생긴다",
    dimension: "EI",
    orderIndex: 3
  },
  
  // S(감각) vs N(직관) - 정보 수집
  {
    id: 4,
    text: "구체적이고 실용적인 정보를 선호한다",
    dimension: "SN",
    orderIndex: 4
  },
  {
    id: 5,
    text: "미래의 가능성과 아이디어에 관심이 많다",
    dimension: "SN",
    orderIndex: 5
  },
  {
    id: 6,
    text: "경험을 통해 배우는 것을 좋아한다",
    dimension: "SN",
    orderIndex: 6
  },
  
  // T(사고) vs F(감정) - 의사결정
  {
    id: 7,
    text: "논리적이고 객관적으로 판단한다",
    dimension: "TF",
    orderIndex: 7
  },
  {
    id: 8,
    text: "다른 사람의 감정을 고려한다",
    dimension: "TF",
    orderIndex: 8
  },
  {
    id: 9,
    text: "원칙과 기준에 따라 결정한다",
    dimension: "TF",
    orderIndex: 9
  },
  
  // J(판단) vs P(인식) - 생활 방식
  {
    id: 10,
    text: "계획을 세우고 그대로 실행한다",
    dimension: "JP",
    orderIndex: 10
  },
  {
    id: 11,
    text: "유연하고 즉흥적인 것을 선호한다",
    dimension: "JP",
    orderIndex: 11
  },
  {
    id: 12,
    text: "마감 시간을 지키는 것이 중요하다",
    dimension: "JP",
    orderIndex: 12
  }
];

export const testService = {
  async getTestQuestions(param?: QuestionParams) {
    // localStorage에서 질문 데이터를 가져오거나, 기본 데이터 사용
    if (typeof window !== "undefined") {
      const storedQuestions = localStorage.getItem("testQuestions");
      if (storedQuestions) {
        return JSON.parse(storedQuestions);
      }
    }
    
    // 기본 데이터 반환
    return mockTestQuestions;
  },

  async submitTest(data: AnswerPayload) {
    // localStorage에 테스트 결과 저장
    if (typeof window !== "undefined") {
      const testResult = {
        ...data,
        submittedAt: new Date().toISOString(),
        id: Date.now()
      };
      
      localStorage.setItem("testResult", JSON.stringify(testResult));
      return testResult;
    }
    
    return null;
  },
};
