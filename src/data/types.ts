export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  timestamp: string;
  error?: string; // 에러 메시지 추가
}

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
  /* 감정 MBTI */
  emotionType: EmotionType;
  /* 감정리듬 */
  rhythmId: number;
  rhythm: string;
  rhythmAnalysis: string;
  rhythmDescription: string;
  /* 감정온도 */
  temperature: number;
  expressionPercentile: number;
  processingPercentile: number;
  connectionPercentile: number;
  awarenessPercentile: number;
  /* 힐링루틴 */
  healingQuote: string;
  recommendedRoutine: string;
  healingKeywords: string[];
  healingRoutines: HealingRoutine[];
  
  percentTotal: number;
  percentGender: number;
}

interface RecommendedContents {
  title: string;
  link: string;
  type: string;
}
export interface HealingRoutine {
  rhythmId: number;
  rhythmName: RhythmName;
  rhythmColor: string;
  rhythmColorHex: string;
  healingKeywords: string[];
  recommendedContents: RecommendedContents[];
}

export interface HealingRoutineParams {
  mbtiId: number;
  rhythmId: number;
}

export interface Poem {
  id: number;
  title: string;
  contents: string;
  iconUrl: string;
  rhythmId: number;
  rhythmName: RhythmName;
  rhythmType: string;
  rhythmColor: string;
  rhythmColorHex: string;
}