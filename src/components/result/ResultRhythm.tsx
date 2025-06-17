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
import ResultHeader from "@/components/ResultHeader";
import EmotionalMap from "@/components/EmotionalMap";

const GradientSection = styled.div<{ mbtiColor: string }>`
  background: #18152a;
  min-height: 300px;
  position: relative;
  padding: 0 20px 20px;
  overflow: hidden;
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

interface Props {
  rhythm: string;
  temperature: number;
  emotionTypeColor: string;
  userName: string;
}

const ResultRhythm: React.FC<Props> = ({
  rhythm,
  temperature,
  emotionTypeColor,
  userName,
}) => {
  return (
    <>
      <GradientSection mbtiColor={emotionTypeColor}>
        <ResultHeader
          pageNumber="02"
          title={
            <>
              이러한 {userName}님의 감정은,
              <br />'{rhythm}' 리듬 위에
              <br />
              머무르고 있어요.
            </>
          }
          description={`현재 체온 ${temperature}°C로 측정되었어요.`}
          color="white"
        />
        <EmotionalMap currentRhythm={rhythm} />
      </GradientSection>

      <SecondPageBottomSection>
        <AnalysisSection>
          <AnalysisTitle2>감정 리듬 상세 분석</AnalysisTitle2>
          <AnalysisItem>
            <AnalysisTitle3>
              <CurationIcon>
                <FaArrowRightLong />
              </CurationIcon>
              예시: 감정이 고요하게 순환하며 깊은 자기 성찰과 안정감을 제공합니다.
            </AnalysisTitle3>
          </AnalysisItem>
        </AnalysisSection>
      </SecondPageBottomSection>
    </>
  );
};

export default ResultRhythm;
