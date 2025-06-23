"use client";

import React from "react";
import styled from "styled-components";
import {
  TopSection as BaseTopSection,
  AnalysisSection,
  CurationItem,
  CurationIcon,
  CurationText,
  StyledBottomSection,
} from "@/styles/ResultPageStyles";
import {
  FaArrowRightLong,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa6";
import { useResultContext } from "@/contexts/ResultContext";
import ResultHeader from "@/components/ResultHeader";
import TemperatureCard from "@/components/temperature/TemperatureCard";
import { useTemperatureMeta } from "@/hooks/useTemperatureMeta";
import { RhythmName } from "@/data/types";

const TopSection = styled(BaseTopSection)<{ mbtiColor: string }>`
  background: ${(props) => props.mbtiColor};
  padding: 20px 20px 20px;
  transition: background 0.3s ease;
  min-height: 488px;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

const AnalysisTitle = styled.div`
  font-size: 16px;
  color: white;
  padding: 12px 0;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 255%;
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
  top: 255%;
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

const Temperature = () => {
  const { testResult, userName, scrollToSection } = useResultContext();

  const emotionType = testResult.emotionType;
  const rhythmName = testResult.rhythm as RhythmName;
  const { percentTotal, percentGender } = testResult;
  const temperatureMeta = useTemperatureMeta(rhythmName);

  const handleNext = () => {
    scrollToSection(3); // ResultPoem 페이지로 이동
  };

  const handlePrev = () => {
    scrollToSection(1); // ResultRhythm 페이지로 이동
  };

  return (
    <section>
      <TopSection mbtiColor={emotionType.hexCode}>
        <ResultHeader
          pageNumber="03"
          title={temperatureMeta.temperatureInfo.title}
          description={temperatureMeta.temperatureInfo.description}
        />

        <TemperatureCard rhythmName={rhythmName} />
      </TopSection>
      <FirstPageBottomSection>
        <AnalysisSection>
          <AnalysisTitle>감정 온도 상세 분석</AnalysisTitle>
          <CurationItem>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <CurationText>
              전체 감정탐험자 대비 상위 {percentTotal}%로
              <br />
              감정 표현을 어려워해요.
            </CurationText>
          </CurationItem>
          <CurationItem>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <CurationText>
              전체 감정탐험자 대비 상위 {percentGender}%로
              <br />
              감정 인지를 어려워해요.
            </CurationText>
          </CurationItem>
        </AnalysisSection>
      </FirstPageBottomSection>
      <PrevButton onClick={handlePrev}>
        <FaChevronLeft />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <FaChevronRight />
      </NextButton>
    </section>
  );
};

export default Temperature;
