import { RhythmName } from "./types";

// 온도 범위별 색상 설정
export const temperatureColors = {
  low: {
    background: "#FFBC20",
    gradient: "linear-gradient(90deg, #FFD57E 0%, #FFBC20 100%)",
    range: { min: 35.0, max: 36.0 }
  },
  medium: {
    background: "#FF8126",
    gradient: "linear-gradient(90deg, #FFB68B 0%, #FF8126 100%)",
    range: { min: 36.1, max: 37.4 }
  },
  high: {
    background: "#FF5151",
    gradient: "linear-gradient(90deg, #FFA5A5 0%, #FF5151 100%)",
    range: { min: 37.5, max: 39.0 }
  }
};

// 온도 범위에 따른 색상 반환 함수
export const getTemperatureColor = (temperature: number) => {
  if (temperature >= 35.0 && temperature <= 36.0) {
    return temperatureColors.low;
  } else if (temperature >= 36.1 && temperature <= 37.4) {
    return temperatureColors.medium;
  } else if (temperature >= 37.5 && temperature <= 39.0) {
    return temperatureColors.high;
  }
  // 기본값
  return temperatureColors.medium;
};

// 온도 계산 함수 (질문 답변에 따른 수학적 계산)
export const calculateTemperature = (answers: number[]): number => {
  // 답변 점수들의 평균을 계산
  const averageScore = answers.reduce((sum, score) => sum + score, 0) / answers.length;
  
  // 평균 점수를 온도 범위로 매핑 (1-5점을 35.0-39.0도로 변환)
  const minScore = 1;
  const maxScore = 5;
  const minTemp = 35.0;
  const maxTemp = 39.0;
  
  const temperature = minTemp + ((averageScore - minScore) / (maxScore - minScore)) * (maxTemp - minTemp);
  
  // 소수점 첫째 자리까지 반올림
  return Math.round(temperature * 10) / 10;
};

export const getTemperaturePercentage = (temperature: number): number => {
  const min = 35;
  const max = 39;
  return ((temperature - min) / (max - min)) * 100;
};
