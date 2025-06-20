"use client";

import React from "react";
import ResultHeader from "../ResultHeader";
import { styled } from "styled-components";
import {
  CurationTitle,
  CurationIcon,
} from "@/styles/ResultPageStyles";
import { useResultContext } from "@/contexts/ResultContext";
import { FaArrowRightLong } from "react-icons/fa6";
import RoutineCard from "@/components/RoutineCard";

const PageWrapper = styled.div`
  background: #393939;
  min-height: 812px;
  position: relative;
  padding: 24px 20px 20px;
  overflow: scroll;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SubText = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 80px;
  white-space: pre-line;
`;

const GuideText = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: pre-line;
`;

const GuideWrapper = styled.div`
  display: flex;
  margin: 12px 0 16px 8px;
`;

const Routine = () => {
  const { testResult, userName } = useResultContext();

  return (
    <section>
      <PageWrapper>
        <ResultHeader
          pageNumber="05"
          title={
            <>
              {userName}님을 위한 감정 관리 루틴을
              <br />
              추천해드려요.
            </>
          }
        />
        <SubText>{testResult.healingQuote}</SubText>
        <CurationTitle>리듬 루틴 관리</CurationTitle>
        <GuideWrapper>
          <CurationIcon>
            <FaArrowRightLong />
          </CurationIcon>
          <GuideText>{testResult.recommendedRoutine}</GuideText>
        </GuideWrapper>
        <CardContainer>
          {testResult.healingRoutines.map((routine, idx) => (
            <RoutineCard
              key={idx}
              title={routine.title}
              desc={routine.description}
              bgColor={
                idx === 0 ? "#54C0D8" : idx === 1 ? "#299BB4" : "#1B7184"
              }
            />
          ))}
        </CardContainer>
      </PageWrapper>
    </section>
  );
};

export default Routine;
