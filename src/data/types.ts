export interface User {
  id: number;
  email: string;
  name: string;
  gender: string;
  [key: string]: any; // 기타 필드 유연하게 허용
}

export type RhythmName =
  | "Spark Flame"
  | "Warm Flow"
  | "Healing Loop"
  | "Quiet Sync"
  | "Silent Echo"
  | "Hidden Pearl";

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

export interface HealingRoutine {
  title: string;
  description: string;
  link: string;
  setOrder: number;
}

export interface TestResult {
  testResultId: number;
  testSessionId: number;
  emotionType: EmotionType;
  rhythm: string;
  temperature: number;
  healingRoutines: HealingRoutine[];
  healingQuote: string;
  analysis: string;
  recommendedRoutine: string;
  percentTotal: number;
  percentGender: number;
  expressionPercentile: number;
  processingPercentile: number;
  connectionPercentile: number;
  awarenessPercentile: number;
}