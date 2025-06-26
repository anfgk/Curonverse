import { RhythmName } from "./types";

// 리듬별 색상 설정 (그라데이션 색상은 여기서 수정하시면 됩니다)
export const rhythmColorGradient: Record<
  RhythmName,
  { main: string; gradient: string }
> = {
  "Spark Flame": {
    main: "#F25C2A",
    gradient: "linear-gradient(90deg, #fab59d 0%, #F25C2A 100%)",
  },
  "Warm Flow": {
    main: "#FBC875",
    gradient: "linear-gradient(90deg, #ffe7bf 0%, #FBC875 100%)",
  },
  "Healing Loop": {
    main: "#ECE8F3",
    gradient: "linear-gradient(90deg, #f5f5f5 0%, #ECE8F3 100%)",
  },
  "Quiet Sync": {
    main: "#A4D6A7",
    gradient: "linear-gradient(90deg, #bfdbc1 0%, #A4D6A7 100%)",
  },
  "Silent Echo": {
    main: "#BAADFA",
    gradient: "linear-gradient(90deg, #dfd9fc 0%, #BAADFA 100%)",
  },
  "Hidden Pearl": {
    main: "#C3DCE9",
    gradient: "linear-gradient(90deg, #d8e4eb 0%, #C3DCE9 100%)",
  },
};

export const getTemperaturePercentage = (temperature: number): number => {
  const min = 35;
  const max = 39;
  return ((temperature - min) / (max - min)) * 100;
};
