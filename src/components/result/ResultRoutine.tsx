"use client";

import React, { useState } from "react";
import ResultHeader from "../ResultHeader";
import { styled } from "styled-components";
import {
  KeywordSection,
  KeywordContainer,
  KeywordLabel,
  KeywordCircle,
} from "@/styles/ResultPageStyles";
import { useResultContext } from "@/contexts/ResultContext";
import RoutineCardList from "./RoutineCardList";
import useSelectedPoem from "@/hooks/useSelectedPoem";

const PageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["rhythmColorHex"].includes(prop),
})<{ $rhythmColorHex?: string }>`
  background: ${(props) => props.$rhythmColorHex || "#393939"};
  min-height: 812px;
  position: relative;
  padding: 24px 20px 20px;
  overflow: scroll;
`;

const SubText = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 80px;
  white-space: pre-line;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: white;
  margin-bottom: 12px;
  font-weight: bold;
`;

const Routine = () => {
  const { testResult, healingRoutine } = useResultContext();
  const { selectedPoem, healingRoutineFromPoem } = useSelectedPoem(testResult.emotionType.id);

  return (
    <>
      <section>
        <PageWrapper $rhythmColorHex={healingRoutine.rhythmColorHex}>
          <ResultHeader
            pageNumber="05"
            title={
              <>
                감정이 발생한다면, 잠시 멈춰,
                <br />
                `나에게 어떤 신호였을까?` 되묻는 성찰의 시간이 필요해요.
              </>
            }
          />
          <SubText>
            때문에, 지금 나에게 필요한 감정 카드는
            <br />
            다음과 같아요.
          </SubText>
          <KeywordSection>
            <KeywordContainer>
              {healingRoutine.healingKeywords.map((kw, index) => (
                <KeywordCircle
                  key={kw}
                  index={index}
                  $mbtiType={testResult.emotionType.code}
                >
                  '{kw}'
                </KeywordCircle>
              ))}
            </KeywordContainer>
            <KeywordLabel>나만의 힐링 감정카드</KeywordLabel>
          </KeywordSection>
          <div style={{ marginTop: "48px" }}>
            <SectionTitle>Contents</SectionTitle>
            <RoutineCardList routines={healingRoutine.recommendedContents}>
            </RoutineCardList>
          </div>
        </PageWrapper>
      </section>

      { selectedPoem && healingRoutineFromPoem && (selectedPoem.rhythmId !== healingRoutine.rhythmId) && (
      <section>
        <PageWrapper $rhythmColorHex={healingRoutineFromPoem.rhythmColorHex}>
          <ResultHeader
            pageNumber="05-1"
            title={
              <>
                감정이 발생한다면, 잠시 멈춰,
                <br />
                `나에게 어떤 신호였을까?` 되묻는 성찰의 시간이 필요해요.
              </>
            }
          />
          <SubText>
            때문에, 지금 나에게 필요한 감정 카드는
            <br />
            다음과 같아요.
          </SubText>
          <KeywordSection>
            <KeywordContainer>
              {healingRoutineFromPoem.healingKeywords.map((kw, index) => (
                <KeywordCircle
                  key={kw}
                  index={index}
                  $mbtiType={testResult.emotionType.code}
                >
                  '{kw}'
                </KeywordCircle>
              ))}
            </KeywordContainer>
            <KeywordLabel>나만의 힐링 감정카드</KeywordLabel>
          </KeywordSection>
          <div style={{ marginTop: "48px" }}>
            <SectionTitle>Contents</SectionTitle>
            <RoutineCardList routines={healingRoutineFromPoem.recommendedContents}>
            </RoutineCardList>
          </div>
        </PageWrapper>
      </section>
      )}
    </>
  );
};

export default Routine;
