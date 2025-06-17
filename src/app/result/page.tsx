"use client";

import { useState } from "react";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import ResultMbti from "@/components/result/ResultMbti";
import ResultRhythm from "@/components/result/ResultRhythm";
import { useTestResult } from "@/hooks/useTestResult";
import { useStoredUser } from "@/hooks/useStoredUser";

export default function ResultPage() {
  const user = useStoredUser();
  const testResult = useTestResult();
  const [currentPage, setCurrentPage] = useState(1);

  if (!testResult) return null; // 또는 로딩 처리

  return (
    <PageTransitionContainer mounted>
      {currentPage === 1 ? (
        <ResultMbti
          emotionType={testResult.emotionType}
          userName={user?.name || "사용자"}
          nextPage={() => setCurrentPage(2)}
        />
      ) : (
        <ResultRhythm
          rhythm={testResult.rhythm}
          temperature={testResult.temperature}
          emotionTypeColor={testResult.emotionType.hexCode}
          userName={user?.name || "사용자"}
        />
      )}
    </PageTransitionContainer>
  );
}
