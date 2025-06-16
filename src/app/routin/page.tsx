"use client";
import React, { useEffect, useState } from "react";
import { rhythmRoutineData as _rhythmRoutineData } from "@/data/rhythmRoutineData";
import RoutineCard from "@/components/RoutineCard";
import styled from "styled-components";
import ResultHeader from "@/components/ResultHeader";
import { CurationTitle } from "@/styles/ResultPageStyles";
import { CurationIcon } from "@/styles/ResultPageStyles";
import { FaArrowRightLong } from "react-icons/fa6";

// 타입 명시: string 인덱스 허용
const rhythmRoutineData: Record<
  string,
  (typeof _rhythmRoutineData)["Spark Flame"]
> = _rhythmRoutineData;

const PageWrapper = styled.div`
  background: #393939;
  min-height: 100vh;
  padding: 20px 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const SubText = styled.div`
  color: #fff;
  font-size: 16px;
  margin-bottom: 80px;
  white-space: pre-line;
`;

const GuideText = styled.div`
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: pre-line;
`;

const GuideWrapper = styled.div`
  display: flex;
  margin: 12px 0 16px 8px;
`;

export default function RhythmRoutinePage() {
  const [userName, setUserName] = useState("은지");
  const [rhythm, setRhythm] = useState<string>("Spark Flame");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("userName");
      const storedRhythm = localStorage.getItem("rhythm");
      if (storedName) setUserName(storedName);
      if (storedRhythm && rhythmRoutineData[storedRhythm])
        setRhythm(storedRhythm);
    }
  }, []);

  const data = rhythmRoutineData[rhythm];

  if (!data) return <div>루틴 데이터가 없습니다.</div>;

  return (
    <PageWrapper>
      <ResultHeader
        pageNumber="05"
        title={
          <>
            {userName}님을 위한 감정 관리 루틴을
            <br />
            추천해드려요.
          </>
        }
      />
      <SubText>{data.header.subText}</SubText>
      <CurationTitle>리듬 루틴 관리</CurationTitle>
      <GuideWrapper>
        <CurationIcon>
          <FaArrowRightLong />
        </CurationIcon>
        <GuideText>{data.guide}</GuideText>
      </GuideWrapper>
      <CardContainer>
        {data.routines.map((routine, idx) => (
          <RoutineCard
            key={idx}
            title={routine.title}
            desc={routine.desc}
            bgColor={idx === 0 ? "#54C0D8" : idx === 1 ? "#299BB4" : "#1B7184"}
          />
        ))}
      </CardContainer>
    </PageWrapper>
  );
}
