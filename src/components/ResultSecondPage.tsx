import React from "react";
import styled from "styled-components";
import {
  Header,
  PageNumber,
  MainTitle,
  StyledBottomSection,
  AnalysisSection,
  AnalysisItem,
  AnalysisHeader,
  AnalysisTitle,
  AnalysisContent,
  AnalysisText,
  ArrowIcon,
  PageIcon,
} from "../styles/ResultPageStyles";
import { mbtiColors } from "../data/mbtiData";

interface GradientSectionProps {
  mbtiColor: string;
}

const GradientSection = styled.div<GradientSectionProps>`
  background: #18152a;
  min-height: 300px;
  position: relative;
  overflow: hidden;
`;

const WhitePageNumber = styled(PageNumber)`
  color: white;
`;

const WhiteMainTitle = styled(MainTitle)`
  color: white;
  font-size: 24px;
`;

const RhythmDescription = styled.div`
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MapContainer = styled.div`
  text-align: center;
  position: relative;
`;

const MapTitle = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const MapSubtitle = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;
`;

const CircleContainer = styled.div`
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleBorder = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SecondCircleBorder = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ThirdCircleBorder = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FourthCircleBorder = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface CircleProps {
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
  opacity: number;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transform: ${(props) => (props.left === "50%" ? "translateX(-50%)" : "none")};
`;

interface StarProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
}

const Star = styled.div<StarProps>`
  position: absolute;
  color: white;
  font-size: ${(props) => props.size};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

const AnalysisTitle2 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-left: 0;
`;

const AnalysisTitle3 = styled(AnalysisTitle)`
  font-size: 16px;
`;

const SecondPageBottomSection = styled(StyledBottomSection)`
  background-color: #18152a;
  padding: 20px;
  bottom: -100px;
`;

interface ResultSecondPageProps {
  userName: string;
  currentMBTI: string;
  mbtiRhythms: Record<string, string>;
  mbtiRhythmDescriptions: Record<string, string>;
  openSections: number[];
  toggleSection: (index: number) => void;
  currentPage: number;
  prevPage: () => void;
}

const ResultSecondPage: React.FC<ResultSecondPageProps> = ({
  userName,
  currentMBTI,
  mbtiRhythms,
  mbtiRhythmDescriptions,
  openSections,
  toggleSection,
  currentPage,
  prevPage,
}) => {
  const mbtiColor = mbtiColors[currentMBTI];

  return (
    <>
      <GradientSection mbtiColor={mbtiColor}>
        <Header>
          <WhitePageNumber>02</WhitePageNumber>
          <WhiteMainTitle>
            이러한 {userName}님의 감정은,
            <br />'{mbtiRhythms[currentMBTI]}' 리듬
            <br />
            위에 머무르고 있어요.
          </WhiteMainTitle>
          <RhythmDescription>
            {mbtiRhythmDescriptions[mbtiRhythms[currentMBTI]]}
          </RhythmDescription>
        </Header>

        <MapContainer>
          <MapTitle>CURONVERSE EMOTIONAL MAP</MapTitle>
          <MapSubtitle>Surface Level</MapSubtitle>

          <CircleContainer>
            <CircleBorder />
            <SecondCircleBorder />
            <ThirdCircleBorder />
            <FourthCircleBorder />
            <Circle
              top="30px"
              left="50%"
              size="35px"
              color="#AFFF6E"
              opacity={0.8}
            />
            <Circle
              top="80px"
              left="80px"
              size="35px"
              color="#FFBB00"
              opacity={0.9}
            />
            <Circle
              top="100px"
              left="140px"
              size="35px"
              color="#BAADFA"
              opacity={0.8}
            />
            <Circle
              top="80px"
              left="40px"
              size="35px"
              color="#4CC0D6"
              opacity={0.8}
            />
            <Circle
              top="140px"
              right="80px"
              size="35px"
              color="#FE7F7F"
              opacity={0.7}
            />
            <Circle
              top="120px"
              right="40px"
              size="35px"
              color="#CB59FF"
              opacity={0.6}
            />

            <Star top="20px" left="20px" size="16px">
              ★
            </Star>
            <Star top="60px" right="30px" size="12px">
              ★
            </Star>
            <Star bottom="40px" left="30px" size="10px">
              ✦
            </Star>
            <Star bottom="20px" right="50px" size="14px">
              ✦
            </Star>
            <Star bottom="60px" right="20px" size="8px">
              ★
            </Star>
          </CircleContainer>
        </MapContainer>
      </GradientSection>

      <SecondPageBottomSection>
        <AnalysisSection>
          <AnalysisTitle2>감정 리듬 상세 분석</AnalysisTitle2>

          <AnalysisItem>
            <AnalysisHeader onClick={() => toggleSection(10)}>
              <AnalysisTitle3>어떤 내음을 냄으면 좋을까요?</AnalysisTitle3>
              <ArrowIcon isOpen={openSections.includes(10)}>∨</ArrowIcon>
            </AnalysisHeader>
            <AnalysisContent isOpen={openSections.includes(10)}>
              <AnalysisText>생각해 봅시다.</AnalysisText>
            </AnalysisContent>
          </AnalysisItem>
        </AnalysisSection>
      </SecondPageBottomSection>
    </>
  );
};

export default ResultSecondPage;
