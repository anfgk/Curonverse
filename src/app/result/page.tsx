"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { Container } from "../../styles/ResultPageStyles";
import ResultFirstPage from "../../components/ResultFirstPage";
import ResultSecondPage from "../../components/ResultSecondPage";
import { profileService } from "@/services/profile";
import {
  mbtiKeywords,
  mbtiDescriptions,
  mbtiFullDescriptions,
  mbtiRhythms,
} from "../../data/mbtiData";

interface PageContainerProps {
  mounted: boolean;
}

const PageContainer = styled(Container)<PageContainerProps>`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  width: 375px;
  height: 812px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const MBTISelector = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  padding: 10px;
  border-radius: 5px;
`;

const ResultPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [currentMBTI, setCurrentMBTI] = useState<string>("EPHU");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userName, setUserName] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const profile = profileService.getProfile();
    if (profile?.name) {
      setUserName(profile.name);
    }
    setMounted(true);
  }, []);

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
    content:
      mbtiDescriptions[currentMBTI]?.[keyword] ||
      `${keyword}에 대한 설명입니다.`,
  }));

  // 페이지 전환 함수
  const nextPage = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <PageContainer mounted={mounted}>
      <MBTISelector />
      {/* 페이지 렌더링 */}
      {currentPage === 1 ? (
        <ResultFirstPage
          userName={userName}
          currentMBTI={currentMBTI}
          keywords={keywords}
          mbtiFullDescriptions={mbtiFullDescriptions}
          analysisData={analysisData}
          openSections={openSections}
          toggleSection={toggleSection}
          currentPage={currentPage}
          nextPage={nextPage}
        />
      ) : (
        <ResultSecondPage
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          openSections={openSections}
          toggleSection={toggleSection}
          currentPage={currentPage}
          prevPage={prevPage}
        />
      )}
    </PageContainer>
  );
};

export default ResultPage;
