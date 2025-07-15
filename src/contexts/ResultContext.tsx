import { createContext, useContext } from "react";

// 더미 데이터에 맞는 타입 정의
interface TestResult {
  id: number;
  userId: number;
  emotionType: {
    id: number;
    name: string;
    description: string;
  };
  rhythmId: number;
  rhythm: string;
  rhythmColor: string;
  rhythmColorHex: string;
  temperatureAnalysis: {
    temperature: number;
    rhythmColor: string;
    rhythmColorHex: string;
  };
  answers: Array<{
    questionId: number;
    score: number;
  }>;
  createdAt: string;
}

interface HealingRoutine {
  id: number;
  mbtiId: number;
  rhythmId: number;
  keywords: string[];
  recommendedContent: Array<{
    id: number;
    title: string;
    type: string;
    url: string;
    thumbnail: string;
  }>;
  rhythmColor: string;
  rhythmColorHex: string;
}

interface ResultContextProps {
  testResult: TestResult;
  healingRoutine: HealingRoutine;
  userName: string;
  scrollToSection: (section: number) => void;
};

export const ResultContext = createContext<ResultContextProps | null>(null);

export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (!context) throw new Error("ResultContext not found");
  return context;
};
