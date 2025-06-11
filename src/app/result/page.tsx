"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResultMbti from "./ResultMbti";
import ResultRhythm from "./ResultRhythm";
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
    openSections,
    toggleSection,
    mbtiFullDescriptions,
    mbtiRhythms,
    mbtiRhythmDescriptions,
  } = useMBTIData();
  const { currentPage, mounted, setMounted, nextPage } = usePageTransition();

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
        <ResultMbti
          userName={userName}
          currentMBTI={currentMBTI}
          keywords={keywords}
          mbtiFullDescriptions={mbtiFullDescriptions}
          nextPage={nextPage}
        />
      ) : (
        <ResultRhythm
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          mbtiRhythmDescriptions={mbtiRhythmDescriptions}
          openSections={openSections}
          toggleSection={toggleSection}
        />
      )}
    </PageTransitionContainer>
  );
};

export default ResultPage;
