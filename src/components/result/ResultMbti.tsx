"use client";

import React from "react";
import styled from "styled-components";
import {
  TopSection as BaseTopSection,
  StyledBottomSection,
} from "@/styles/ResultPageStyles";

import { useResultContext } from "@/contexts/ResultContext";
import ResultHeader from "@/components/ResultHeader";

const TopSection = styled(BaseTopSection).withConfig({
  shouldForwardProp: (prop) => !["mbtiColor"].includes(prop),
})<{ $mbtiColor: string }>`
  background: ${(props) => props.$mbtiColor};
  padding: 24px 20px 20px;
  transition: background 0.3s ease;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

const ResultMbti = () => {
  const { testResult, userName, scrollToSection } = useResultContext();
  const emotionType = testResult.emotionType;

  return (
    <section>
      <TopSection $mbtiColor={testResult.rhythmColorHex}>
        <ResultHeader
          pageNumber="01"
          title={
            <>
              현재 {userName}님은,
              <br />'{emotionType.name}' 감정 성향을 <br />
              가지고 있어요.
            </>
          }
          description={emotionType.description}
        />
        {/* 키워드 및 감정카드 설명 섹션 제거 */}
      </TopSection>
      <FirstPageBottomSection>
        {/* 감정카드 설명 섹션 제거 */}
      </FirstPageBottomSection>
    </section>
  );
};

export default ResultMbti;
