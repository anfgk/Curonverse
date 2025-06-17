export interface User {
  id: number;
  email: string;
  name: string;
  gender: string;
  [key: string]: any; // 기타 필드 유연하게 허용
}

export interface EmotionKeyword {
  id: number;
  keyword: string;
  description: string;
}

export interface EmotionType {
  id: number;
  code: string;
  title: string;
  description: string;
  color: string;
  hexCode: string;
  keywords: EmotionKeyword[];
}

export interface TestResult {
  testResultId: number;
  testSessionId: number;
  emotionType: EmotionType;
  rhythm: string;
  temperature: number;
  percentTotal: number;
  percentGender: number;
}
