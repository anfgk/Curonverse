"use client";

import React, { useState } from "react";
import {
  ScrollWrapper,
  VideoWrapper,
  VideoThumbnail,
  EmptyVideo,
  StartButton,
} from "@/styles/ResultPageStyles";
import styled from "styled-components";

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
  color: #000;
  font-weight: bold;
`;

const RoutineDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

type RoutineItem = {
  title: string;
  link?: string;
  description?: string;
};

type Props = {
  routines: RoutineItem[];
};

const RoutineCardList: React.FC<Props> = ({ routines }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlayback = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

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

  return (
    <ScrollWrapper>
      {routines.map((routine, idx) => {
        const thumbnail = routine.link ? getYoutubeThumbnail(routine.link) : null;
        const embedUrl = routine.link ? getYoutubeEmbedUrl(routine.link) : null;

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
                <VideoThumbnail $imageUrl={thumbnail ?? undefined} />
              )
            ) : (
              <EmptyVideo />
            )}

            <RoutineTextBox>
              <RoutineTitle>{routine.title}</RoutineTitle>
              <RoutineDescription>{routine.description}</RoutineDescription>
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
  );
};

export default RoutineCardList;
