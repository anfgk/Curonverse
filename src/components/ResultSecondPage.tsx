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
} from "../styles/ResultPageStyles";
import { mbtiColors } from "../data/mbtiData";
import { FaArrowRightLong } from "react-icons/fa6";

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
  font-weight: bold;
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
  isCurrentRhythm?: boolean;
  rhythmName?: string;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: ${(props) => (props.isCurrentRhythm ? 1 : 0.6)};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transform: ${(props) => (props.left === "50%" ? "translateX(-50%)" : "none")};
  box-shadow: ${(props) =>
    props.isCurrentRhythm
      ? `0 0 10px 5px ${props.color}60,
         0 0 20px 10px ${props.color}40,
         0 0 30px 15px ${props.color}20,
         0 0 40px 20px ${props.color}10`
      : `0 0 10px 5px rgba(255, 255, 255, 0.15),
         0 0 20px 10px rgba(255, 255, 255, 0.1),
         0 0 30px 15px rgba(255, 255, 255, 0.05)`};
  transition: all 0.3s ease;
  z-index: ${(props) => (props.isCurrentRhythm ? 2 : 1)};
  filter: ${(props) =>
    props.isCurrentRhythm ? "none" : "grayscale(0.7) brightness(0.8)"};

  &::after {
    content: ${(props) =>
      props.isCurrentRhythm ? `"${props.rhythmName}"` : "none"};
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: ${(props) => props.color};
    white-space: nowrap;
    text-shadow: 0 0 10px ${(props) => props.color}40;
  }
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
  padding-bottom: 10px;
  padding-left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AnalysisTitle3 = styled(AnalysisTitle)`
  font-size: 14px;
  display: flex;
  margin-top: 10px;
`;

const SecondPageBottomSection = styled(StyledBottomSection)`
  background-color: #18152a;
  padding: 20px;
  bottom: -100px;
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
  toggleSection,
}) => {
  const mbtiColor = mbtiColors[currentMBTI];
  const currentRhythm = mbtiRhythms[currentMBTI];

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
              color="#A4D6A7"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Quiet Sync"}
              rhythmName="Quiet Sync"
            />
            <Circle
              top="25px"
              left="115px"
              size="35px"
              color="#FBC875"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Warm Flow"}
              rhythmName="Warm Flow"
            />
            <Circle
              top="200px"
              left="105px"
              size="35px"
              color="#ECE8F3"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Hidden Pearl"}
              rhythmName="Hidden Pearl"
            />
            <Circle
              top="70px"
              left="85px"
              size="35px"
              color="#C3DCE9"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Healing Loop"}
              rhythmName="Healing Loop"
            />
            <Circle
              top="70px"
              right="70px"
              size="35px"
              color="#F25C2A"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Spark Flame"}
              rhythmName="Spark Flame"
            />
            <Circle
              top="150px"
              right="110px"
              size="35px"
              color="#BAADFA"
              opacity={1}
              isCurrentRhythm={currentRhythm === "Silent Echo"}
              rhythmName="Silent Echo"
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
    </>
  );
};

export default ResultSecondPage;
