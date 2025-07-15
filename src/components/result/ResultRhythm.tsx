"use client";

import React from "react";
import styled from "styled-components";
import {
  StyledBottomSection,
  AnalysisSection,
  AnalysisItem,
  AnalysisTitle,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import { useResultContext } from "@/contexts/ResultContext";
import ResultHeader from "@/components/ResultHeader";
import EmotionalMap from "@/components/EmotionalMap";

interface GradientSectionProps {
  mbtiColor: string;
}

const GradientSection = styled.div<GradientSectionProps>`
  background: #18152a;
  min-height: 300px;
  position: relative;
  padding: 24px 20px 20px;
  overflow: scroll;
`;

const AnalysisTitle2 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AnalysisTitle3 = styled(AnalysisTitle)`
  font-size: 14px;
  display: flex;
  margin-top: 10px;
`;

const CurationIcon = styled.span`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  color: #000;
  margin-right: 10px;
  padding: 3px;
  font-size: 14px;
`;

const SecondPageBottomSection = styled(StyledBottomSection)`
  background-color: #18152a;
  padding: 20px;
  bottom: -100px;
`;

const ResultRhythm = () => {
  const { testResult, userName, scrollToSection } = useResultContext();

  return (
    <section>
      <GradientSection mbtiColor={testResult.rhythmColor}>
        <ResultHeader
          pageNumber="02"
          title={
            <>
              이러한 {userName}님의 감정은,
              <br />'{testResult.rhythm}' 리듬 위에
              <br />
              머무르고 있어요.
            </>
          }
          description={testResult.rhythm}
          color="white"
        />
        <EmotionalMap currentRhythm={testResult.rhythm} />
      </GradientSection>
      <SecondPageBottomSection>
        <AnalysisSection>
          <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>리듬 설명</div>
          <div>{testResult.rhythm}</div>
        </AnalysisSection>
      </SecondPageBottomSection>
    </section>
  );
};

export default ResultRhythm;
