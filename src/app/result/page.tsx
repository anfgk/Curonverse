"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResultFirstPage from "../../components/ResultFirstPage";
import ResultSecondPage from "../../components/ResultSecondPage";
import PageTransitionContainer from "@/components/PageTransitionContainer";
import { profileService } from "@/services/profile";
import { useMBTIData } from "@/hooks/useMBTIData";
import { usePageTransition } from "@/hooks/usePageTransition";

const MBTISelector = styled.div``;

const ResultPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const {
    currentMBTI,
    keywords,
    analysisData,
    openSections,
    toggleSection,
    mbtiFullDescriptions,
    mbtiRhythms,
    mbtiRhythmDescriptions,
  } = useMBTIData();
  const { currentPage, mounted, setMounted, nextPage, prevPage } =
    usePageTransition();

  useEffect(() => {
    const profile = profileService.getProfile();
    if (profile?.name) {
      setUserName(profile.name);
    }
    setMounted(true);
  }, [setMounted]);

  return (
    <PageTransitionContainer mounted={mounted}>
      <MBTISelector />
      {currentPage === 1 ? (
        <ResultFirstPage
          userName={userName}
          currentMBTI={currentMBTI}
          keywords={keywords}
          mbtiFullDescriptions={mbtiFullDescriptions}
          nextPage={nextPage}
        />
      ) : (
        <ResultSecondPage
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          mbtiRhythmDescriptions={mbtiRhythmDescriptions}
          openSections={openSections}
          toggleSection={toggleSection}
          currentPage={currentPage}
          prevPage={prevPage}
        />
      )}
    </PageTransitionContainer>
  );
};

export default ResultPage;
