"use client";

import { useRef } from "react";
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
import { usePageVisitLogger } from "@/hooks/usePageVisitLogger";

export default function ResultPage() {

  // 페이지 방문 로깅 설정
  usePageVisitLogger({
    pageType: "RESULT",
    getUserId: () => {
      const id = sessionStorage.getItem("userId");
      return id ? parseInt(id) : null;
    },
  });

  const user = useStoredUser();
  const testResult = useTestResult();
  const healingRoutine = useHealingRoutine();

  const mbtiRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null);
  const routineRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // 더미 데이터 생성 (데이터가 없을 때)
  const defaultTestResult = {
    id: 1,
    userId: 1,
    emotionType: {
      id: 1,
      name: "ENFP",
      description: "열정적인 창의가"
    },
    rhythmId: 1,
    rhythm: "Spark Flame",
    rhythmColor: "#FF6B6B",
    rhythmColorHex: "#FF6B6B",
    temperatureAnalysis: {
      temperature: 75,
      rhythmColor: "#FF6B6B",
      rhythmColorHex: "#FF6B6B"
    },
    answers: [],
    createdAt: new Date().toISOString()
  };

  const defaultHealingRoutine = {
    id: 1,
    mbtiId: 1,
    rhythmId: 1,
    keywords: ["창의성", "열정", "새로운 경험"],
    recommendedContent: [
      {
        id: 1,
        title: "창의성을 키우는 방법",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      }
    ],
    rhythmColor: "#FF6B6B",
    rhythmColorHex: "#FF6B6B"
  };

  // 데이터가 없으면 더미 데이터 사용
  const finalTestResult = testResult || defaultTestResult;
  const finalHealingRoutine = healingRoutine || defaultHealingRoutine;

  const sectionRefs = [mbtiRef, rhythmRef, tempRef, routineRef, endRef];

  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ResultContext.Provider
      value={{
        testResult: finalTestResult,
        healingRoutine: finalHealingRoutine,
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
