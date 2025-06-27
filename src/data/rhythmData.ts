import { RhythmName } from "./types";

// 각 리듬 원의 테두리 크기를 정의한 배열
export const CIRCLE_BORDERS = [220, 170, 120, 70];

export const RHYTHM_CIRCLES: Array<{
  top: string;
  left?: string;
  right?: string;
  color: string;
  rhythmName: RhythmName;
}> = [
  { top: "30px", left: "50%", color: "#6DD1FF", rhythmName: "Quiet Sync" },
  { top: "25px", left: "115px", color: "#FFD931", rhythmName: "Warm Flow" },
  { top: "200px", left: "105px", color: "#EDC7FF", rhythmName: "Hidden Pearl" },
  { top: "70px", left: "85px", color: "#16DA78", rhythmName: "Healing Loop" },
  { top: "70px", right: "70px", color: "#FF6A14", rhythmName: "Spark Flame" },
  { top: "150px", right: "110px", color: "#377EF1", rhythmName: "Silent Echo" },
];

export const STARS = [
  { top: "20px", left: "20px", size: "16px" },
  { top: "60px", right: "30px", size: "12px" },
  { bottom: "40px", left: "30px", size: "10px", content: "✦" },
  { bottom: "20px", right: "50px", size: "14px", content: "✦" },
  { bottom: "60px", right: "20px", size: "8px" },
];
