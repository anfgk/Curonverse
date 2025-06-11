import React from "react";
import styled from "styled-components";
import {
  StyledBottomSection,
  AnalysisSection,
  AnalysisItem,
  AnalysisTitle,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";

const SecondPageBottomSection = styled(StyledBottomSection)`
  background-color: #18152a;
  padding: 20px;
  bottom: -100px;
`;

const AnalysisTitle2 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
  padding-left: 0;
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

const RhythmAnalysis: React.FC = () => {
  return (
    <SecondPageBottomSection>
      <AnalysisSection>
        <AnalysisTitle2>감정 리듬 상세 분석</AnalysisTitle2>
        <AnalysisItem>
          <AnalysisTitle3>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            강한 감정 반응을 보이며 즉각적으로 표현하는 리듬. 분노, 열정, 좌절
            같은 고에너지 감정이 빠르게 타오름. 감정은 빨리 움직이고, 외부로
            쉽게 퍼져나간다.
          </AnalysisTitle3>
        </AnalysisItem>
      </AnalysisSection>
    </SecondPageBottomSection>
  );
};

export default RhythmAnalysis;
