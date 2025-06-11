import React from "react";
import styled from "styled-components";
import { mbtiColors } from "@/data/mbtiData";
import EmotionalMap from "@/components/EmotionalMap";
import RhythmHeader from "@/components/RhythmHeader";
import RhythmAnalysis from "@/components/RhythmAnalysis";

interface GradientSectionProps {
  mbtiColor: string;
}

const GradientSection = styled.div<GradientSectionProps>`
  background: #18152a;
  min-height: 300px;
  position: relative;
  overflow: hidden;
`;

interface ResultRhythmProps {
  userName: string;
  currentMBTI: string;
  mbtiRhythms: Record<string, string>;
  mbtiRhythmDescriptions: Record<string, string>;
  openSections: number[];
  toggleSection: (index: number) => void;
}

const ResultRhythm: React.FC<ResultRhythmProps> = ({
  userName,
  currentMBTI,
  mbtiRhythms,
  mbtiRhythmDescriptions,
  openSections,
  toggleSection,
}) => {
  const mbtiColor = mbtiColors[currentMBTI];
  const currentRhythm = mbtiRhythms[currentMBTI];

  return (
    <>
      <GradientSection mbtiColor={mbtiColor}>
        <RhythmHeader
          userName={userName}
          currentMBTI={currentMBTI}
          mbtiRhythms={mbtiRhythms}
          mbtiRhythmDescriptions={mbtiRhythmDescriptions}
        />
        <EmotionalMap currentRhythm={currentRhythm} />
      </GradientSection>
      <RhythmAnalysis />
    </>
  );
};

export default ResultRhythm;
