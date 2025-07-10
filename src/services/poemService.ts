const API_URL = "/api/poem";

// 클라이언트 사이드에서 사용할 더미 시 데이터
const dummyPoems = [
  {
    id: 1,
    title: "새로운 시작",
    content: "오늘도 새로운 하루가 시작되었습니다.\n희망과 꿈을 안고 앞으로 나아갑니다.",
    author: "익명",
    category: "희망",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "평온한 마음",
    content: "조용한 마음으로\n자연의 소리를 들어보세요.\n모든 것이 아름답습니다.",
    author: "익명",
    category: "평온",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "용기의 노래",
    content: "두려움을 이겨내고\n용기를 내어 한 걸음 내딛습니다.\n당신은 충분히 강합니다.",
    author: "익명",
    category: "용기",
    color: "#45B7D1"
  },
  {
    id: 4,
    title: "사랑의 메시지",
    content: "사랑은 가장 아름다운 선물입니다.\n자신을 사랑하고\n다른 사람도 사랑하세요.",
    author: "익명",
    category: "사랑",
    color: "#96CEB4"
  }
];

export const poemService = {
  async getPoems() {
    // 백엔드 API 호출 대신 더미 데이터 반환
    console.log("Fetching dummy poems");
    
    // 잠시 지연을 주어 실제 API 호출처럼 보이게 함
    await new Promise(resolve => setTimeout(resolve, 150));
    
    return {
      data: dummyPoems,
      statusCode: 200,
      message: "Poems fetched successfully"
    };
  },
};