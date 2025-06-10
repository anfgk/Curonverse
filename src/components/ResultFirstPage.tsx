import React from "react";
import styled from "styled-components";
import {
  TopSection as BaseTopSection,
  Header,
  PageNumber,
  MainTitle,
  SubTitle,
  KeywordSection,
  KeywordContainer,
  KeywordCircle,
  KeywordLabel,
  AnalysisSection,
  PageIndicator,
  PageDot,
  PageIcon,
  PageText,
  CurationTitle,
  CurationItem,
  CurationIcon,
  CurationText,
  StyledBottomSection,
} from "../styles/ResultPageStyles";
import { mbtiColors, mbtiCurationData } from "../data/mbtiData";

interface ResultFirstPageProps {
  userName: string;
  currentMBTI: string;
  keywords: string[];
  mbtiFullDescriptions: Record<string, { title: string; description: string }>;
  analysisData: Array<{ title: string; content: string }>;
  openSections: number[];
  toggleSection: (index: number) => void;
  currentPage: number;
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

const ResultFirstPage: React.FC<ResultFirstPageProps> = ({
  userName,
  currentMBTI,
  keywords,
  mbtiFullDescriptions,
  analysisData,
  openSections,
  toggleSection,
  currentPage,
  nextPage,
}) => {
  console.log("Current MBTI in ResultFirstPage:", currentMBTI);
  const mbtiColor = mbtiColors[currentMBTI];
  const curationItems =
    mbtiCurationData[currentMBTI] || mbtiCurationData["EPSA"];

  return (
    <>
      <TopSection mbtiColor={mbtiColor}>
        <Header>
          <PageNumber>01</PageNumber>
          <MainTitle>
            현재 {userName}님은,
            <br />'{currentMBTI}' 감정 성향을
            <br />
            가지고 있어요.
          </MainTitle>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "500",
              marginBottom: "15px",
              opacity: 0.95,
            }}
          >
            {mbtiFullDescriptions[currentMBTI]?.title}
          </div>
          <SubTitle>{mbtiFullDescriptions[currentMBTI]?.description}</SubTitle>
        </Header>

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

      <StyledBottomSection>
        <AnalysisSection>
          <CurationTitle>맞춤형 힐링 큐레이션</CurationTitle>

          {curationItems.map((item, index) => (
            <CurationItem key={index}>
              <CurationIcon>➜</CurationIcon>
              <CurationText>
                {item[0]}
                <br />
                {item[1]}
              </CurationText>
            </CurationItem>
          ))}
        </AnalysisSection>

        <PageIndicator>
          <PageDot active={currentPage === 1} />
          <PageDot active={currentPage === 2} />
          <PageIcon onClick={nextPage} style={{ cursor: "pointer" }} />
          <PageText>02</PageText>
        </PageIndicator>
      </StyledBottomSection>
    </>
  );
};

export default ResultFirstPage;
