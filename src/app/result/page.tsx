"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { ResultContext } from "@/contexts/ResultContext";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import ResultMbti from "@/components/result/ResultMbti";
import ResultRhythm from "@/components/result/ResultRhythm";
import Temperature from "@/components/result/Temperature";
import Routine from "@/components/result/Routine";
import ResultEnd from "@/components/result/ResultEnd";
import { useTestResult } from "@/hooks/useTestResult";
import { useStoredUser } from "@/hooks/useStoredUser";
import ResultPoem from "@/components/result/ResultPoem";
import { FaChevronRight } from "react-icons/fa";

export default function ResultPage() {
  const user = useStoredUser();
  const testResult = useTestResult();
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);

  const mbtiRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null);
  const poemRef = useRef<HTMLDivElement>(null);
  const routineRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  if (!testResult) return null;

  const sectionRefs = [
    mbtiRef,
    rhythmRef,
    tempRef,
    poemRef,
    routineRef,
    endRef,
  ];

  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(index);
  };

  const handleNext = () => {
    if (currentSection < sectionRefs.length - 1) {
      scrollToSection(currentSection + 1);
    }
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
        <div ref={poemRef}>
          <ResultPoem />
        </div>
        <div ref={routineRef}>
          <Routine />
        </div>
        <div ref={endRef}>
          <ResultEnd />
        </div>
      </PageTransitionContainer>
    </ResultContext.Provider>
  );
}
