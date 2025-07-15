import { useState, useEffect } from "react";

// 더미 데이터에 맞는 TestResult 타입 정의
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

export const useTestResult = () => {
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("test");
    if (data) {
      try {
        const parsed: TestResult = JSON.parse(data);
        setTestResult(parsed);
      } catch (e) {
        console.error("세션 저장 데이터 파싱 실패:", e);
      }
    }
  }, []);

  return testResult;
};
