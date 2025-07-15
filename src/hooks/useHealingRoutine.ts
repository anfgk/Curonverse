import { useState, useEffect } from "react";

// 더미 데이터에 맞는 HealingRoutine 타입 정의
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

export const useHealingRoutine = () => {
    const [healingRoutine, setHealingRoutine] = useState<HealingRoutine | null>(null);

    useEffect(() => {
        const storedRoutine = sessionStorage.getItem("healingRoutine");
        if (storedRoutine) {
            try {
                const parsed: HealingRoutine = JSON.parse(storedRoutine);
                setHealingRoutine(parsed);
            } catch (e) {
                console.error("Failed to parse healing routine from session storage:", e);
            }
        }
    }, []);

    return healingRoutine;
}