"use client";

import React, { useRef } from "react";
import styled from "styled-components";
import Title from "@/components/Title";
import StarBackground from "@/components/StarBackground";
import SubText from "@/components/SubText";
import {
  StyledBottomSection,
  AnalysisSection,
  CurationIcon,
  CurationText,
} from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";
import ResultImageExport from "./ResultImageExport";
import { useResultContext } from "@/contexts/ResultContext";

const Container = styled.div`
  width: 375px;
  height: 812px;
  background: transparent;
  margin: 0 auto;
  position: relative;
  background: #0f1227;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 360px) {
    width: 100vw;
    position: relative;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EtcButton = styled.div`
  display: flex;
  gap: 24px;
  margin: 44px 20px 0;
`;

const Send = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Down = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Icon = styled.div`
  background: #fff;
  color: #111;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const EndDescription = styled.div`
  display: flex;
  margin: 12px 0 0 20px;
  font-size: 12px;
  & > div:last-child {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 281px;
  height: 217px;
  display: block;
  margin: 60px 40px 75px;
`;

const BottomSection = styled(StyledBottomSection)`
  background-color: transparent;
  padding-top: 0px;
  @media (max-width: 375px) {
    position: relative;
    min-height: auto;
  }
`;

const StyledCurationItem = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: none;
`;

// ResultImageExport 이미지 안보이게 하기 위한 스타일
const HiddenImageWrapper = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -9999;
  width: 375px;
`;

export default function ResultEnd() {
  const { testResult, userName, scrollToSection } = useResultContext();
  const captureRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (captureRef.current) {
      try {
        const canvas = await html2canvas(captureRef.current, {
          backgroundColor: testResult.emotionType.hexCode,
          scale: 2,
        });
        const image = canvas.toDataURL("image/jpeg", 1.0);
        const link = document.createElement("a");
        link.href = image;
        link.download = "result-export.jpg";
        link.click();
      } catch (error) {
        console.error("이미지 저장 중 오류가 발생했습니다:", error);
      }
    }
  };

  const curationItems = [
    ["매일의 감정리듬카드로,", "감정을 진단해요."],
    ["움직이는 나의 감정우주와", "감성캘린더를 키워가요."],
    ["매일의 감정운세를 통해", "하루를 예측해요."],
  ];

  return (
    <Container>
      <StarBackground />
      <ContentWrapper>
        <HeaderContainer>
          <SubText text="마무리" variant="subtitle" />
          <EtcButton>
            <Send>
              <Icon>
                <RiSendPlaneFill size={16} />
              </Icon>
            </Send>
            <Down onClick={handleDownload}>
              <Icon>
                <FiDownload size={16} />
              </Icon>
            </Down>
          </EtcButton>
        </HeaderContainer>
        <Title
          mainText="앞으로 추가될 Curonverse의"
          highlightText="다양한 콘텐츠를"
          subText=" 기대해주세요."
        />
        <EndDescription>
          <div>꽃에 물을 주듯,</div>
          <div> 매일 하루 한잔 감정을 돌봐요.</div>
        </EndDescription>
        <Image src="/images/end.svg" alt="end" />
        <BottomSection>
          <AnalysisSection>
            {curationItems.map((item, index) => (
              <StyledCurationItem key={index}>
                <CurationIcon>
                  <FaArrowRightLong />
                </CurationIcon>
                <CurationText>
                  {item[0]}
                  <br />
                  {item[1]}
                </CurationText>
              </StyledCurationItem>
            ))}
          </AnalysisSection>
        </BottomSection>
      </ContentWrapper>
      <HiddenImageWrapper ref={captureRef}>
        <ResultImageExport
          userName={userName}
          emotionCode={testResult.emotionType.code}
          temperature={testResult.temperature}
          rhythmDescription={testResult.rhythmDescription}
          temperatureDescription={testResult.rhythmAnalysis}
        />
      </HiddenImageWrapper>
    </Container>
  );
}
