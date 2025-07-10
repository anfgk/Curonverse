"use client";

import { useEffect, useState } from "react";
import { healingRoutineService } from "@/services/healingroutineService";

// 로컬 타입 정의
interface Poem {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  color: string;
  rhythmId?: number;
}

interface HealingRoutine {
  id: number;
  mbtiId: number;
  rhythmId: number;
  keywords: string[];
  recommendedContent: Array<{
    id: number;
    title: string;
    type: string;
    url: string;
    thumbnail: string;
  }>;
  rhythmColor: string;
  rhythmColorHex: string;
}

export const useSelectedPoem = (emotionId: number) => {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [healingRoutineFromPoem, setHealingRoutineFromPoem] = useState<HealingRoutine | null>(null);

  useEffect(() => {
    const fetchPoemData = async () => {
      const poemData = sessionStorage.getItem("selectedPoem");
      if (poemData) {
        try {
          const parsedPoem: Poem = JSON.parse(poemData);
          setSelectedPoem(parsedPoem);
          const routineRes = await healingRoutineService.getHealingRoutine({
            mbtiId: emotionId,
            rhythmId: parsedPoem.rhythmId || 1,
          });
          setHealingRoutineFromPoem(routineRes.data || null);
        } catch (error) {
          console.error("선택된 시 파싱 또는 루틴 가져오기 실패", error);
        }
      }
    };

    fetchPoemData();
  }, [emotionId]);

  return { selectedPoem, setSelectedPoem, healingRoutineFromPoem, setHealingRoutineFromPoem };
};

export default useSelectedPoem;
