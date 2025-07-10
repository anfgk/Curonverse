const API_URL = "/api/test";

interface QuestionParams {
  dimension?: string;
  orderIndex?: number;
}

interface AnswerPayload {
  userId: number;
  type: string;
  answers: Array<{
    questionId: number;
    score: number;
  }>;
}

// 클라이언트 사이드에서 사용할 더미 질문 데이터
const dummyQuestions = [
  { id: 1, text: "나는 새로운 사람들을 만나는 것을 좋아한다", dimension: "extraversion" },
  { id: 2, text: "혼자 있는 시간을 즐긴다", dimension: "introversion" },
  { id: 3, text: "계획을 세우고 그대로 실행한다", dimension: "judging" },
  { id: 4, text: "즉흥적으로 행동하는 것을 좋아한다", dimension: "perceiving" },
  { id: 5, text: "논리적으로 생각하는 것을 선호한다", dimension: "thinking" },
  { id: 6, text: "감정에 따라 결정을 내린다", dimension: "feeling" },
  { id: 7, text: "구체적인 사실을 선호한다", dimension: "sensing" },
  { id: 8, text: "새로운 아이디어를 추구한다", dimension: "intuition" },
  { id: 9, text: "안정적인 환경을 선호한다", dimension: "security" },
  { id: 10, text: "변화를 추구한다", dimension: "change" },
  { id: 11, text: "조용한 환경에서 일하는 것을 좋아한다", dimension: "quiet" },
  { id: 12, text: "활기찬 환경에서 일하는 것을 좋아한다", dimension: "energetic" }
];

export const testService = {
  async getTestQuestions(param?: QuestionParams) {
    // 백엔드 API 호출 대신 더미 데이터 반환
    console.log("Fetching dummy test questions");
    
    // 잠시 지연을 주어 실제 API 호출처럼 보이게 함
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return {
      data: dummyQuestions,
      statusCode: 200,
      message: "Success"
    };
  },

  async submitTest(data: AnswerPayload) {
    // 백엔드 API 호출 대신 클라이언트 사이드에서 처리
    console.log("Submitting test with data:", data);
    
    // 잠시 지연을 주어 실제 API 호출처럼 보이게 함
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 더미 테스트 결과 생성
    const mockResult = {
      data: {
        id: Math.floor(Math.random() * 1000000) + 1,
        userId: data.userId,
        emotionType: {
          id: Math.floor(Math.random() * 16) + 1,
          name: "ENFP",
          description: "열정적인 창의가"
        },
        rhythmId: Math.floor(Math.random() * 4) + 1,
        rhythm: "Spark Flame",
        rhythmColor: "#FF6B6B",
        rhythmColorHex: "#FF6B6B",
        temperatureAnalysis: {
          temperature: 75,
          rhythmColor: "#FF6B6B",
          rhythmColorHex: "#FF6B6B"
        },
        answers: data.answers,
        createdAt: new Date().toISOString()
      },
      statusCode: 200,
      message: "Test submitted successfully"
    };

    console.log("Test result generated:", mockResult);
    return mockResult;
  },
};
