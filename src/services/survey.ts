interface SurveyAnswers {
  [key: string]: number;
}

// SurveyService 클래스 정의
class SurveyService {
  // 싱글톤 인스턴스를 관리하는 정적 변수
  private static instance: SurveyService;
  // 답변을 저장하는 객체
  private answers: SurveyAnswers = {};

  // 생성자를 private으로 설정하여 외부에서 인스턴스 생성 불가
  private constructor() {}

  // 싱글톤 인스턴스를 반환하는 정적 메서드
  public static getInstance(): SurveyService {
    // 인스턴스가 존재하지 않으면 새로 생성
    if (!SurveyService.instance) {
      // 인스턴스가 존재하지 않으면 새로 생성
      SurveyService.instance = new SurveyService();
    }
    // 싱글톤 인스턴스를 반환
    return SurveyService.instance;
  }

  // 답변 저장
  saveAnswer(questionId: string, score: number) {
    // 답변을 저장
    this.answers[questionId] = score;
  }

  // 답변 가져오기
  getAnswer(questionId: string): number {
    return this.answers[questionId] || 0;
  }

  // 특정 문항들의 평균 점수 계산
  private calculateAverageScore(questionIds: string[]): number {
    // 문항들의 점수 합계 계산
    const sum = questionIds.reduce(
      // 문항들의 점수 합계 계산
      (acc, id) => acc + (this.answers[id] || 0),
      // 초기값 0
      0
    );
    // 문항들의 점수 평균 계산
    return sum / questionIds.length;
  }

  // MBTI 계산
  calculateMBTI(): string {
    // E/R (1-3번 문항)
    const expressiveScore = this.calculateAverageScore([
      "question1",
      "question2",
      "question3",
    ]);
    const firstLetter = expressiveScore >= 3 ? "E" : "R";

    // P/H (4-6번 문항)
    const processingScore = this.calculateAverageScore([
      "question4",
      "question5",
      "question6",
    ]);
    const secondLetter = processingScore >= 3 ? "P" : "H";

    // S/I (7-9번 문항)
    const selfLedScore = this.getAnswer("question7");
    const interLinkedScore =
      (this.getAnswer("question8") + this.getAnswer("question9")) / 2;
    const thirdLetter = selfLedScore > interLinkedScore ? "S" : "I";

    // A/U (10-12번 문항)
    const awareScore = this.getAnswer("question10");
    const unawareScore =
      (this.getAnswer("question11") + this.getAnswer("question12")) / 2;
    const fourthLetter = awareScore > unawareScore ? "A" : "U";

    return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
  }

  // 모든 답변 초기화
  clearAnswers() {
    this.answers = {};
  }
}

export const surveyService = SurveyService.getInstance();
