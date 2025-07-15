"use client";

import { useEffect, useState } from "react";
import { Poem, HealingRoutine } from "@/data/types";
import { healingRoutineService } from "@/services/healingroutineService";

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
            rhythmId: parsedPoem.rhythmId,
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
