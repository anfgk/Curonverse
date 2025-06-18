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
  PageIndicator,
  PageIcon,
  PageText,
  CurationTitle,
  CurationItem,
  CurationIcon,
  CurationText,
  StyledBottomSection,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import ResultHeader from "@/components/ResultHeader";
import { EmotionType } from "@/data/types";

interface Props {
  emotionType: EmotionType;
  userName: string;
  nextPage: () => void;
}

const TopSection = styled(BaseTopSection)<{ mbtiColor: string }>`
  background: ${(props) => props.mbtiColor};
  padding: 24px 20px 20px;
  transition: background 0.3s ease;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

const ResultMbti: React.FC<Props> = ({
  emotionType,
  userName,
  nextPage
}) => {
  const { code, description, keywords, hexCode } = emotionType;

  return (
    <>
      <TopSection mbtiColor={hexCode}>
        <ResultHeader
          pageNumber="01"
          title={
            <>
              현재 {userName}님은,
              <br />'{code}' 감정 성향을 <br />
              가지고 있어요.
            </>
          }
          description={description}
        />
        <KeywordSection>
          <KeywordContainer>
            {keywords.map((kw, index) => (
              <KeywordCircle key={kw.id} index={index} mbtiType={code}>
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
          {keywords.map((kw) => (
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
          <PageIndicator>
            <PageIcon onClick={nextPage} style={{ cursor: "pointer" }} />
            <PageText>02</PageText>
          </PageIndicator>
        </AnalysisSection>
      </FirstPageBottomSection>
    </>
  );
};

export default ResultMbti;
