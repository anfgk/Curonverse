import { RhythmName } from "./temperatureData";

// 각 리듬 원의 테두리 크기를 정의한 배열
export const CIRCLE_BORDERS = [220, 170, 120, 70];

export const RHYTHM_CIRCLES: Array<{
  top: string;
  left?: string;
  right?: string;
  color: string;
  rhythmName: RhythmName;
}> = [
  { top: "30px", left: "50%", color: "#A4D6A7", rhythmName: "QuietSync" },
  { top: "25px", left: "115px", color: "#FBC875", rhythmName: "WarmFlow" },
  { top: "200px", left: "105px", color: "#ECE8F3", rhythmName: "HiddenPearl" },
  { top: "70px", left: "85px", color: "#C3DCE9", rhythmName: "HealingLoop" },
  { top: "70px", right: "70px", color: "#F25C2A", rhythmName: "SparkFlame" },
  { top: "150px", right: "110px", color: "#BAADFA", rhythmName: "SilentEcho" },
];

export const STARS = [
  { top: "20px", left: "20px", size: "16px" },
  { top: "60px", right: "30px", size: "12px" },
  { bottom: "40px", left: "30px", size: "10px", content: "✦" },
  { bottom: "20px", right: "50px", size: "14px", content: "✦" },
  { bottom: "60px", right: "20px", size: "8px" },
];
