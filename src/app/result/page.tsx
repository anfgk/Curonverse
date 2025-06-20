"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { ResultContext } from "@/contexts/ResultContext";
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
  const router = useRouter();

  const mbtiRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null);
  const routineRef = useRef<HTMLDivElement>(null);

  if (!testResult) return null; // 또는 로딩 처리

  const sectionRefs = [mbtiRef, rhythmRef, tempRef, routineRef];

  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ResultContext.Provider
      value={{
        testResult,
        userName: user?.name || "사용자",
        scrollToSection,
      }}
    >
      <PageTransitionContainer mounted>
        <div ref={mbtiRef}>
          <ResultMbti />
        </div>
        <div ref={rhythmRef}>
          <ResultRhythm />
        </div>
        <div ref={tempRef}>
          <Temperature />
        </div>
        <div ref={routineRef}>
          <Routine onComplete={() => router.push("/end")} />
        </div>
      </PageTransitionContainer>
    </ResultContext.Provider>
  );
}