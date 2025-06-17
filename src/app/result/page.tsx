"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResultMbti from "./ResultMbti";
import ResultRhythm from "./ResultRhythm";
import Temperature from "./Temperature";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import { userService } from "@/services/userService";
import { useMBTIData } from "@/hooks/useMBTIData";
import { usePageTransition } from "@/hooks/usePageTransition";
import { useSearchParams } from "next/navigation";

// MBTISelector 컴포넌트 정의
const MBTISelector = styled.div``;

// ResultPage 컴포넌트 정의
const ResultPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");

  const {
    currentMBTI,
    keywords,
    openSections,
    toggleSection,
    mbtiFullDescriptions,
    mbtiRhythms,
    mbtiRhythmDescriptions,
  } = useMBTIData();

  // 페이지 전환 관련 상태 관리 훅 사용
  const { currentPage, mounted, setMounted, nextPage, setCurrentPage } =
    usePageTransition();

  // URL 파라미터로 페이지 설정
  useEffect(() => {
    if (pageParam) {
      const pageNumber = parseInt(pageParam);
      if (pageNumber >= 1 && pageNumber <= 3) {
        setCurrentPage(pageNumber);
      }
    }
  }, [pageParam, setCurrentPage]);

  // 프로필 정보 가져오기
  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await userService.getProfile();
      // 프로필 정보가 있으면 사용자 이름 설정
      if (profile?.name) {
        // 사용자 이름 설정
        setUserName(profile.name);
      }
      // 페이지 마운트 상태 설정
      setMounted(true);
    };

    fetchProfile();
  }, [setMounted]);

  return (
    <PageTransitionContainer mounted={mounted}>
      <MBTISelector />
      {currentPage === 1 ? (
        <ResultMbti
          currentMBTI={currentMBTI}
          keywords={keywords}
          mbtiFullDescriptions={mbtiFullDescriptions}
          nextPage={nextPage}
        />
      ) : currentPage === 2 ? (
        <ResultRhythm
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          mbtiRhythmDescriptions={mbtiRhythmDescriptions}
          openSections={openSections}
          toggleSection={toggleSection}
          nextPage={nextPage}
        />
      ) : (
        <Temperature
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          openSections={openSections}
          toggleSection={toggleSection}
        />
      )}
    </PageTransitionContainer>
  );
};

export default ResultPage;
