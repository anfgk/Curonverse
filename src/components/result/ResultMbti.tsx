"use client";

import React from "react";
import styled from "styled-components";
import {
  TopSection as BaseTopSection,
  KeywordSection,
  KeywordContainer,
  KeywordCircle,
  KeywordLabel,
  AnalysisSection,
  CurationTitle,
  CurationItem,
  CurationIcon,
  CurationText,
  StyledBottomSection,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useResultContext } from "@/contexts/ResultContext";
import ResultHeader from "@/components/ResultHeader";

const TopSection = styled(BaseTopSection)<{ mbtiColor: string }>`
  background: ${(props) => props.mbtiColor};
  padding: 24px 20px 20px;
  transition: background 0.3s ease;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
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

const ResultMbti = () => {
  const { testResult, userName, scrollToSection } = useResultContext();
  const emotionType = testResult.emotionType;

  const handleNext = () => {
    scrollToSection(1); // ResultRhythm 페이지로 이동
  };

  return (
    <section>
      <TopSection mbtiColor={emotionType.hexCode}>
        <ResultHeader
          pageNumber="01"
          title={
            <>
              현재 {userName}님은,
              <br />'{emotionType.code}' 감정 성향을 <br />
              가지고 있어요.
            </>
          }
          description={emotionType.description}
        />
        <KeywordSection>
          <KeywordContainer>
            {emotionType.keywords.map((kw, index) => (
              <KeywordCircle
                key={kw.id}
                index={index}
                mbtiType={emotionType.code}
              >
                '{kw.keyword}'
              </KeywordCircle>
            ))}
          </KeywordContainer>
          <KeywordLabel>나의감정 카드</KeywordLabel>
        </KeywordSection>
      </TopSection>

      <FirstPageBottomSection>
        <AnalysisSection>
          <CurationTitle>나의 감정카드 설명</CurationTitle>
          {emotionType.keywords.map((kw) => (
            <CurationItem key={kw.id}>
              <CurationIcon>
                <FaArrowRightLong />
              </CurationIcon>
              <CurationText>
                {kw.keyword}
                <br />
                {kw.description}
              </CurationText>
            </CurationItem>
          ))}
        </AnalysisSection>
      </FirstPageBottomSection>
      <NextButton onClick={handleNext}>
        <FaChevronRight />
      </NextButton>
    </section>
  );
};

export default ResultMbti;
