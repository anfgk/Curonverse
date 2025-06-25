"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useResultContext } from "@/contexts/ResultContext";
import { Poem, RhythmName } from "@/data/types";
import ResultHeader from "@/components/ResultHeader";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { poemService } from "@/services/poemService";

const Section = styled.section<{ bg: string }>`
  background: ${({bg}) => bg};
  transition: background 0.5s ease;
  width: 100%;
  padding: 24px 20px 20px;
`;

const TopSection = styled.div`
  padding-bottom: 40px;
`;

const StyledScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding: 20px 16px;
  margin-top: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollWrapper = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledScrollWrapper id="scroll-wrapper" {...props} />
);

const PoemCard = styled.div<{ color: string; selected: boolean; }>`
  flex: 0 0 280px;
  min-height: 340px;
  border-radius: 20px;
  background: ${({ color }) =>
    `linear-gradient(to bottom, ${color} 0%, rgba(255,255,255,0.2) 100%)`};
  scroll-snap-align: center;
  padding: 20px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${({ color, selected }) => (selected ? "4px solid white" : "none")};
  transform: ${({ selected }) => (selected ? "scale(1.05)" : "scale(1)")};
  box-shadow: ${({ selected }) =>
    selected ? "0 0 20px rgba(255, 255, 255, 0.6)" : "1px 1px 10px rgba(255, 255, 255, 0.8)"};
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

const PoemIcon = styled.div`
  align-items: center;
  width: 100%;
`;

const IconImage = styled.img`
  width: 120px;
  object-fit: cover;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  display: block;
  margin: 0 auto;
  padding: 4px;
`;


const PoemText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  white-space: pre-wrap;
  margin-bottom: 20px;
  text-align: center;
`;

const PoemSource = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 80px;
  text-align: center;
`;

const CompleteButton = styled.button<{ disabled: boolean }>`
  margin-top: 36px;
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

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 365%;
  transform: translateY(-50%);
  background: rgb(197, 196, 196, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(197, 196, 196, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 365%;
  transform: translateY(-50%);
  background: rgb(197, 196, 196, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(197, 196, 196, 0.8);
    transform: translateY(-50%) scale(1.1);
  }
`;

const ResultPoem = () => {
  const { testResult, userName, scrollToSection } = useResultContext();
  const [selectedRhythm, setSelectedRhythm] = useState<RhythmName | null>(null);
  const [poemData, setPoemData] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState<string>("#F25C2A");

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const response = await poemService.getPoem();
        setPoemData(response.data);
      } catch (error) {
        console.error("Failed to fetch poem data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoem();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.left) - Math.abs(b.boundingClientRect.left))[0];

        if (visibleEntry) {
          const index = Number(visibleEntry.target.getAttribute("data-index"));
          const color = poemData[index]?.rhythmColorHex;
          if (color) setBgColor(color);
        }
      },
      {
        root: document.querySelector("#scroll-wrapper"),
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [poemData]);

  const handleSelect = (rhythmName: RhythmName) => {
    setSelectedRhythm(rhythmName);
  };

  const handleNext = () => {
    scrollToSection(4); // Routine 페이지로 이동
  };

  const handlePrev = () => {
    scrollToSection(2); // Temperature 페이지로 이동
  };

  return (
    <Section bg={bgColor}>
      <TopSection>
        <ResultHeader
          pageNumber="04"
          title={`${userName}님이 선택한 시를 통해\n나에게 맞는 감정 루틴을 추천해 드릴게요.`}
          description="오늘, 어떤 문장이 나의 감정을 일깨우나요?"
        />
        <ScrollWrapper>
          {poemData.map((data, idx) => (
            <>
              <PoemCard
                data-index={idx}
                key={data.rhythmName}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                color={data.rhythmColorHex}
                selected={selectedRhythm === data.rhythmName}
                onClick={() => setSelectedRhythm(data.rhythmName)}
              >
                <TypeTag>{data.rhythmType}</TypeTag>
                <PoemIcon>
                  <IconImage src={data.iconUrl}></IconImage>
                </PoemIcon>
                <PoemText>{data.contents}</PoemText>
                <PoemSource>{data.title}</PoemSource>
              </PoemCard>
            </>
          ))}
        </ScrollWrapper>
        <CompleteButton
          disabled={!selectedRhythm}
          onClick={() => handleSelect(selectedRhythm!)}
        >
          선택 완료
        </CompleteButton>
      </TopSection>
      <StyledBottomSection />
      <PrevButton onClick={handlePrev}>
        <FaChevronLeft />
      </PrevButton>
      <NextButton onClick={handleNext}>
        <FaChevronRight />
      </NextButton>
    </Section>
  );
};

export default ResultPoem;
