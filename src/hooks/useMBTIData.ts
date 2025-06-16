import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  mbtiKeywords,
  mbtiDescriptions,
  mbtiFullDescriptions,
  mbtiRhythms,
  mbtiRhythmDescriptions,
} from "../data/mbtiData";

// useMBTIData 훅 정의
export const useMBTIData = () => {
  // 현재 페이지의 URL 파라미터를 읽어오는 훅
  const searchParams = useSearchParams();
  // 현재 MBTI 상태를 관리하는 상태 변수
  const [currentMBTI, setCurrentMBTI] = useState<string>("EPSA");
  // 현재 열린 섹션 상태를 관리하는 상태 변수
  const [openSections, setOpenSections] = useState<number[]>([]);

  // 현재 MBTI 상태가 변경될 때마다 URL 파라미터 업데이트
  useEffect(() => {
    // URL 파라미터에서 mbti 값을 읽어옴
    const mbtiParam = searchParams.get("mbti");
    // 읽어온 mbti 값이 존재하고, mbtiKeywords 객체에 해당 값이 포함되어 있는지 확인
    if (mbtiParam && Object.keys(mbtiKeywords).includes(mbtiParam)) {
      // 현재 MBTI 상태 업데이트
      setCurrentMBTI(mbtiParam);
    }
    // searchParams가 변경될 때마다 실행
  }, [searchParams]);

  // 섹션 열기/닫기 함수 정의
  const toggleSection = (index: number) => {
    // 이미 열려있는 섹션인 경우 닫고, 닫혀있는 섹션인 경우 열기
    setOpenSections((prev) =>
      // 이미 열려있는 섹션인 경우 닫고, 닫혀있는 섹션인 경우 열기
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
