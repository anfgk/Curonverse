"use client";

import React, { useState } from "react";
import ResultHeader from "../ResultHeader";
import { styled } from "styled-components";
import {
  KeywordSection,
  KeywordContainer,
  KeywordLabel,
  KeywordCircle,
  ScrollWrapper,
  VideoWrapper,
  VideoThumbnail,
  EmptyVideo,
  StartButton,
} from "@/styles/ResultPageStyles";
import { useResultContext } from "@/contexts/ResultContext";
const PageWrapper = styled.div`
  background: #393939;
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

const RoutineCard = styled.div`
  flex: 0 0 280px;
  height: 340px;
  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
`;

const RoutineTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const RoutineTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RoutineDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const Routine = () => {
  const { testResult } = useResultContext();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const getYoutubeThumbnail = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : null;
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : null;
  };

  const togglePlayback = (index: number) => {
    // 클릭한 카드가 현재 재생 중이면 중단
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <section>
      <PageWrapper>
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
            {testResult.healingKeywords.map((kw, index) => (
              <KeywordCircle
                key={kw}
                index={index}
                mbtiType={testResult.emotionType.code}
              >
                '{kw}'
              </KeywordCircle>
            ))}
          </KeywordContainer>
          <KeywordLabel>나만의 힐링 감정카드</KeywordLabel>
        </KeywordSection>
        <div style={{ marginTop: "48px" }}>
          <SectionTitle>Contents</SectionTitle>
          <ScrollWrapper>
            {testResult.healingRoutines.map((routine, idx) => {
              const thumbnail = routine.link
                ? getYoutubeThumbnail(routine.link)
                : null;
              const embedUrl = routine.link
                ? getYoutubeEmbedUrl(routine.link)
                : null;

              return (
                <RoutineCard key={idx}>
                  {routine.link ? (
                    playingIndex === idx ? (
                      <VideoWrapper>
                        <iframe
                          width="100%"
                          height="100%"
                          src={embedUrl ?? ""}
                          title={routine.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </VideoWrapper>
                    ) : (
                      <VideoThumbnail imageUrl={thumbnail ?? undefined} />
                    )
                  ) : (
                    <EmptyVideo />
                  )}

                  <RoutineTextBox>
                    <RoutineTitle>{routine.title}</RoutineTitle>
                    <RoutineDescription>
                      {routine.description}
                    </RoutineDescription>
                    <StartButton
                      disabled={!routine.link}
                      onClick={() => {
                        if (routine.link) togglePlayback(idx);
                      }}
                    >
                      {playingIndex === idx ? "일시정지" : "시작하기"}
                    </StartButton>
                  </RoutineTextBox>
                </RoutineCard>
              );
            })}
          </ScrollWrapper>
        </div>
      </PageWrapper>
    </section>
  );
};

export default Routine;
