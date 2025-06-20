"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { useResultContext } from "@/contexts/ResultContext";
import { usePoemMeta } from "@/hooks/usePoemMeta";
import { RhythmName } from "@/data/types";
import ResultHeader from "@/components/ResultHeader";
import { poemData } from "@/data/poemData";

const Section = styled.section`
  width: 100%;
`;

const TopSection = styled.div<{ mbtiColor: string }>`
  padding-bottom: 40px;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 0 16px;
  margin-top: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PoemCard = styled.div<{ color: string; selected: boolean }>`
  flex: 0 0 280px;
  min-height: 340px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  scroll-snap-align: center;
  padding: 20px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${({ selected }) => (selected ? "4px solid white" : "none")};
  transform: ${({ selected }) => (selected ? "scale(1.05)" : "scale(1)")};
  box-shadow: ${({ selected }) =>
    selected ? "0 0 20px rgba(255, 255, 255, 0.6)" : "none"};
`;

const TypeTag = styled.div`
  font-size: 14px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 12px;
  color: white;
`;

const PoemText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  white-space: pre-wrap;
  margin-bottom: 20px;
`;

const PoemSource = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: auto;
`;

const CompleteButton = styled.button<{ disabled: boolean }>`
  margin-top: 24px;
  width: 90%;
  max-width: 320px;
  height: 48px;
  background: ${({ disabled }) => (disabled ? "#aaa" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#666" : "#000")};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  transition: background 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledBottomSection = styled.div`
  height: 80px;
`;

const ResultPoem = () => {
  const { testResult, userName } = useResultContext();
  const [selectedRhythm, setSelectedRhythm] = useState<RhythmName | null>(null);
  const poemEntries = Object.entries(poemData) as [RhythmName, typeof poemData[RhythmName]][];

  return (
    <Section>
      <TopSection mbtiColor={testResult.emotionType.hexCode}>
        <ResultHeader
          pageNumber="04"
          title={`${userName}님이 선택한 시를 통해\n나에게 맞는 감정 루틴을 추천해 드릴게요.`}
          description="오늘, 어떤 문장이 나의 감정을 일깨우나요?"
        />
        <ScrollWrapper>
            {poemEntries.map(([rhythmName, poem], idx) => (
                <PoemCard
                key={rhythmName}
                color={poem.color}
                selected={selectedRhythm === rhythmName}
                onClick={() => setSelectedRhythm(rhythmName)}
                >
              <TypeTag>{poem.tag}</TypeTag>
              <PoemText>{poem.content}</PoemText>
              <PoemSource>{poem.source}</PoemSource>
            </PoemCard>
          ))}
        </ScrollWrapper>
        <CompleteButton disabled={!selectedRhythm}>
          선택 완료
        </CompleteButton>
      </TopSection>
      <StyledBottomSection />
    </Section>
  );
};

export default ResultPoem;
