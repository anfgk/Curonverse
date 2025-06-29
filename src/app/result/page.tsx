"use client";

import { useRef, useState } from "react";
import { ResultContext } from "@/contexts/ResultContext";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import ResultMbti from "@/components/result/ResultMbti";
import ResultRhythm from "@/components/result/ResultRhythm";
import ResultTemperature from "@/components/result/ResultTemperature";
import ResultRoutine from "@/components/result/ResultRoutine";
import ResultEnd from "@/components/result/ResultEnd";
import { useStoredUser } from "@/hooks/useStoredUser";
import { useTestResult } from "@/hooks/useTestResult";
import { useHealingRoutine } from "@/hooks/useHealingRoutine";
import ScrollGuide from "@/components/common/ScrollGuide";

export default function ResultPage() {
  const user = useStoredUser();
  const testResult = useTestResult();
  const healingRoutine = useHealingRoutine();
  const [currentSection, setCurrentSection] = useState(0);
  
  const mbtiRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null);
  const routineRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  if (!testResult) return null;
  if (!healingRoutine) return null;

  const sectionRefs = [
    mbtiRef,
    rhythmRef,
    tempRef,
    routineRef,
    endRef,
  ];

  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  };

  return (
    <ResultContext.Provider
      value={{
        testResult,
        healingRoutine,
        userName: user?.name || "사용자",
        scrollToSection,
      }}
    >
      <ScrollGuide />
      <PageTransitionContainer mounted>
        <div ref={mbtiRef}>
          <ResultMbti />
        </div>
        <div ref={rhythmRef}>
          <ResultRhythm />
        </div>
        <div ref={tempRef}>
          <ResultTemperature />
        </div>
        <div ref={routineRef}>
          <ResultRoutine />
        </div>
        <div ref={endRef}>
          <ResultEnd />
        </div>
      </PageTransitionContainer>
    </ResultContext.Provider>
  );
}
