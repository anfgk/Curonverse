import { useState, useEffect } from "react";
import { TestResult } from "@/data/types";

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
