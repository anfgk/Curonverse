import React, { useEffect, useState } from "react";
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
import { mbtiColors, mbtiCurationData } from "@/data/mbtiData";
import { FaArrowRightLong } from "react-icons/fa6";
import ResultHeader from "@/components/ResultHeader";

interface ResultMbtiProps {
  currentMBTI: string;
  keywords: string[];
  mbtiFullDescriptions: Record<string, { title: string }>;
  nextPage: () => void;
}

interface TopSectionProps {
  mbtiColor: string;
}

const TopSection = styled(BaseTopSection)<TopSectionProps>`
  background: ${(props) => props.mbtiColor};
  padding: 24px 20px 20px;
  transition: background 0.3s ease;
  min-height: 488px;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

// ResultMbti 컴포넌트 정의
const ResultMbti: React.FC<ResultMbtiProps> = ({
  currentMBTI,
  keywords,
  mbtiFullDescriptions,
  nextPage,
}) => {
  const [userName, setUserName] = useState("사용자");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("userName");
      if (storedName) setUserName(storedName);
    }
  }, []);

  const mbtiColor = mbtiColors[currentMBTI];
  const curationItems =
    mbtiCurationData[currentMBTI] || mbtiCurationData["EPSA"];

  return (
    <>
      <TopSection mbtiColor={mbtiColor}>
        <ResultHeader
          pageNumber="01"
          title={
            <>
              현재 {userName}님은,
              <br />'{currentMBTI}' 감정 성향을
              <br />
              가지고 있어요.
            </>
          }
          description={mbtiFullDescriptions[currentMBTI]?.title}
        />

        <KeywordSection>
          <KeywordContainer>
            {keywords.map((keyword, index) => (
              <KeywordCircle key={keyword} index={index} mbtiType={currentMBTI}>
                '{keyword}'
              </KeywordCircle>
            ))}
          </KeywordContainer>
          <KeywordLabel>나의감정 카드</KeywordLabel>
        </KeywordSection>
      </TopSection>

      <FirstPageBottomSection>
        <AnalysisSection>
          <CurationTitle>나의 감정카드 설명</CurationTitle>

          {curationItems.map((item, index) => (
            <CurationItem key={index}>
              <CurationIcon>
                <FaArrowRightLong />
              </CurationIcon>
              <CurationText>
                {item[0]}
                <br />
                {item[1]}
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
