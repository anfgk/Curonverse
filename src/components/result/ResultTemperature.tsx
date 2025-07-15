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
} from "react-icons/fa6";
import { useResultContext } from "@/contexts/ResultContext";
import ResultHeader from "@/components/ResultHeader";
import TemperatureCard from "@/components/temperature/TemperatureCard";
import { getTemperatureColor } from "@/data/temperatureData";

const TopSection = styled(BaseTopSection).withConfig({
  shouldForwardProp: (prop) => !["mbtiColor"].includes(prop),
})<{ $mbtiColor: string }>`
  background: ${(props) => props.$mbtiColor};
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

const Temperature = () => {
  const { testResult } = useResultContext();

  const emotionType = testResult.emotionType;
  const temperatureColor = getTemperatureColor(testResult.temperatureAnalysis.temperature);

  return (
    <>
    <section>
      <TopSection $mbtiColor={temperatureColor.background}>
        <ResultHeader
          pageNumber="03"
          title={`나의 감정 온도는 ${testResult.temperatureAnalysis.temperature}°C`}
          description={testResult.temperatureAnalysis.rhythmColor}
        />

        <TemperatureCard temperatureAnalysis={testResult.temperatureAnalysis as any} rhythm={testResult.rhythm as any} />
      </TopSection>
      <FirstPageBottomSection>
        <AnalysisSection>
          <AnalysisTitle>감정 온도 상세 분석</AnalysisTitle>
          <CurationItem>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <CurationText>
              전체 감정탐험자 대비 상위 0%로
              <br />
              감정 표현을 어려워해요.
            </CurationText>
          </CurationItem>
          <CurationItem>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <CurationText>
              전체 감정탐험자 대비 상위 0%로
              <br />
              감정 인지를 어려워해요.
            </CurationText>
          </CurationItem>
        </AnalysisSection>
      </FirstPageBottomSection>
    </section>
    </>
  );
};

export default Temperature;
