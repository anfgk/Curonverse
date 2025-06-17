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
import {
  temperatureData,
  RhythmName,
  RHYTHM_COLORS,
} from "@/data/temperatureData";
import TemperatureCard from "@/components/temperature/TemperatureCard";

interface TemperatureProps {
  userName: string;
  currentMBTI: string;
  mbtiRhythms: Record<string, RhythmName>;
  openSections: number[];
  toggleSection: (index: number) => void;
}

interface TopSectionProps {
  mbtiColor: string;
}

const TopSection = styled(BaseTopSection)<TopSectionProps>`
  background: #ff7c2f;
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
  currentMBTI,
  mbtiRhythms,
  toggleSection,
}) => {
  const currentRhythm = mbtiRhythms[currentMBTI];
  const data = temperatureData[currentRhythm];
  const rhythmColor = RHYTHM_COLORS[currentRhythm];

  const handlePageClick = () => {
    toggleSection(1);
  };

  return (
    <>
      <TopSection mbtiColor={rhythmColor.main}>
        <ResultHeader
          pageNumber="03"
          title={data.title}
          description={data.description}
        />
        <TemperatureCard
          temperature={data.temperature}
          rhythmName={currentRhythm}
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
              전체 감정탐험자 대비 상위 {data.analysis.expression}%로
              <br />
              감정 표현을 어려워해요.
            </CurationText>
          </CurationItem>
          <CurationItem>
            <CurationIcon>
              <FaArrowRightLong />
            </CurationIcon>
            <CurationText>
              전체 감정탐험자 대비 상위 {data.analysis.recognition}%로
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
