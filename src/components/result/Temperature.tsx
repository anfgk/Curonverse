"use client";

import React from "react";
import styled from "styled-components";
import {
  TopSection as BaseTopSection,
  AnalysisSection,
  PageIndicator,
  PageIcon,
  PageText,
  CurationItem,
  CurationIcon,
  CurationText,
  StyledBottomSection,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import ResultHeader from "@/components/ResultHeader";
import TemperatureCard from "@/components/temperature/TemperatureCard";
import { useTemperatureMeta } from "@/hooks/useTemperatureMeta";
import { TestResult, EmotionType, RhythmName } from "@/data/types";

interface TemperatureProps {
  testResult: TestResult;
  emotionType: EmotionType;
  openSections: number[];
  nextPage: () => void;
  toggleSection: (index: number) => void;
}

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

const Temperature: React.FC<TemperatureProps> = ({
  testResult,
  emotionType,
  nextPage,
  toggleSection,
}) => {
  const rhythmName = testResult.rhythm as RhythmName;
  const { percentTotal, percentGender } = testResult;
  const { hexCode } = emotionType;
  const temperatureMeta = useTemperatureMeta(rhythmName);

  const handlePageClick = () => {
    nextPage();
    toggleSection(4);
  };

  return (
    <>
      <TopSection mbtiColor={hexCode}>
        <ResultHeader
          pageNumber="03"
          title={temperatureMeta.temperatureInfo.title}
          description={temperatureMeta.temperatureInfo.description}
        />
        <TemperatureCard
          rhythmName={rhythmName}
        />
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
          <PageIndicator>
            <PageIcon onClick={handlePageClick} style={{ cursor: "pointer" }} />
            <PageText>04</PageText>
          </PageIndicator>
        </AnalysisSection>
      </FirstPageBottomSection>
    </>
  );
};

export default Temperature;
