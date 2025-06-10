interface SurveyAnswers {
  [key: string]: number;
}

class SurveyService {
  private static instance: SurveyService;
  private answers: SurveyAnswers = {};

  private constructor() {}

  public static getInstance(): SurveyService {
    if (!SurveyService.instance) {
      SurveyService.instance = new SurveyService();
    }
    return SurveyService.instance;
  }

  // 답변 저장
  saveAnswer(questionId: string, score: number) {
    this.answers[questionId] = score;
  }

  // 답변 가져오기
  getAnswer(questionId: string): number {
    return this.answers[questionId] || 0;
  }

  // 특정 문항들의 평균 점수 계산
  private calculateAverageScore(questionIds: string[]): number {
    const sum = questionIds.reduce(
      (acc, id) => acc + (this.answers[id] || 0),
      0
    );
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
