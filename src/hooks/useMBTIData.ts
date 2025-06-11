import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  mbtiKeywords,
  mbtiDescriptions,
  mbtiFullDescriptions,
  mbtiRhythms,
  mbtiRhythmDescriptions,
} from "../data/mbtiData";

export const useMBTIData = () => {
  const searchParams = useSearchParams();
  const [currentMBTI, setCurrentMBTI] = useState<string>("EPSA");
  const [openSections, setOpenSections] = useState<number[]>([]);

  useEffect(() => {
    const mbtiParam = searchParams.get("mbti");
    if (mbtiParam && Object.keys(mbtiKeywords).includes(mbtiParam)) {
      setCurrentMBTI(mbtiParam);
    }
  }, [searchParams]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // 현재 MBTI에 해당하는 키워드들
  const keywords = mbtiKeywords[currentMBTI] || ["고요", "안정", "관찰"];

  // 현재 MBTI에 해당하는 분석 데이터
  const analysisData = keywords.map((keyword: string) => ({
    title: keyword,
    content: mbtiDescriptions[currentMBTI]?.[keyword] || `${keyword}`,
  }));

  return {
    currentMBTI,
    keywords,
    analysisData,
    openSections,
    toggleSection,
    mbtiFullDescriptions,
    mbtiRhythms,
    mbtiRhythmDescriptions,
  };
};
