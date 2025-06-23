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
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
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

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 150%;
  transform: translateY(-50%);
  background: rgb(197, 196, 196, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(197, 196, 196, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 150%;
  transform: translateY(-50%);
  background: rgb(197, 196, 196, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(197, 196, 196, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
`;

const ResultRhythm = () => {
  const { testResult, userName, scrollToSection } = useResultContext();

  const handleNext = () => {
    scrollToSection(2); // Temperature 페이지로 이동
  };

  const handlePrev = () => {
    scrollToSection(0); // ResultMbti 페이지로 이동
  };

  return (
    <section>
      <GradientSection mbtiColor={testResult.emotionType.color}>
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
          description={testResult.rhythmDescription}
          color="white"
        />
        <EmotionalMap currentRhythm={testResult.rhythm} />
      </GradientSection>
      <SecondPageBottomSection>
        <AnalysisSection>
          <AnalysisTitle2>감정 리듬 상세 분석</AnalysisTitle2>
          <AnalysisItem>
            <AnalysisTitle3>
              <CurationIcon>
                <FaArrowRightLong />
              </CurationIcon>
              {testResult.rhythmAnalysis}
            </AnalysisTitle3>
          </AnalysisItem>
        </AnalysisSection>
      </SecondPageBottomSection>
      <PrevButton onClick={handlePrev}>
        <FaChevronLeft />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <FaChevronRight />
      </NextButton>
    </section>
  );
};

export default ResultRhythm;
