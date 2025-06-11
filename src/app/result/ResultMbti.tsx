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
import { mbtiColors, mbtiCurationData } from "@/data/mbtiData";
import { FaArrowRightLong } from "react-icons/fa6";
import ResultHeader from "@/components/ResultHeader";

interface ResultMbtiProps {
  userName: string;
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
  padding-bottom: 20px;
  transition: background 0.3s ease;
  min-height: 488px;
`;

const FirstPageBottomSection = styled(StyledBottomSection)`
  background-color: #393939;
`;

const ResultMbti: React.FC<ResultMbtiProps> = ({
  userName,
  currentMBTI,
  keywords,
  mbtiFullDescriptions,
  nextPage,
}) => {
  console.log("Current MBTI in ResultMbti:", currentMBTI);
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
          <KeywordLabel>나에게 필요한 감정 카드</KeywordLabel>
        </KeywordSection>
      </TopSection>

      <FirstPageBottomSection>
        <AnalysisSection>
          <CurationTitle>맞춤형 힐링 큐레이션</CurationTitle>

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
