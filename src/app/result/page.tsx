"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import ResultMbti from "@/components/result/ResultMbti";
import ResultRhythm from "@/components/result/ResultRhythm";
import Temperature from "@/components/result/Temperature";
import Routine from "@/components/result/Routine";
import { useTestResult } from "@/hooks/useTestResult";
import { useStoredUser } from "@/hooks/useStoredUser";

export default function ResultPage() {
  const user = useStoredUser();
  const testResult = useTestResult();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  if (!testResult) return null; // 또는 로딩 처리

  return (
    <PageTransitionContainer mounted>
      {currentPage === 1 ? (
        <ResultMbti
          emotionType={testResult.emotionType}
          userName={user?.name || "사용자"}
          nextPage={() => setCurrentPage(2)}
        />
      ) : currentPage === 2 ? (
        <ResultRhythm
          testResult={testResult}
          userName={user?.name || "사용자"}
          nextPage={() => setCurrentPage(3)}
          toggleSection={(index) => setCurrentPage(index)}
        />
      ) : currentPage === 3 ? (
        <Temperature
          testResult={testResult}
          emotionType={testResult.emotionType}
          nextPage={() => setCurrentPage(4)}
          toggleSection={(index) => setCurrentPage(index)}
          openSections={[]} 
        />
      ) : currentPage === 4 ?(
        <Routine
          testResult={testResult}
          userName={user?.name || "사용자"}
          nextPage={() => router.push("/end")}
          toggleSection={(index) => setCurrentPage(index)}
        ></Routine>
        ) : null}
    </PageTransitionContainer>
  );
}
