import { RhythmName } from "./types";

interface TemperatureData {
  title: string;
  description: string;
  temperature: number;
  analysis: {
    expression: number;
    recognition: number;
  };
}

// 리듬별 온도 데이터
export const temperatureData: Record<RhythmName, TemperatureData> = {
  "Spark Flame": {
    title: "때문에, 감정은 과열된\n온도를 유지하고 있어요.",
    description:
      "내가 감정에 무감각하기 때문이에요.\n또한, 일상에서 크고 작은 기쁨을\n느끼기 어려워 조금 의욕적이지 못한 상태에요.",
    temperature: 37.3,
    analysis: {
      expression: 75,
      recognition: 82,
    },
  },
  "Warm Flow": {
    title: "때문에, 감정은 따뜻한\n온도를 유지하고 있어요.",
    description:
      "감정의 흐름이 부드럽고 안정적이에요.\n때로는 감정을 잘 표현하고,\n때로는 차분히 감정을 다스려요.",
    temperature: 36.9,
    analysis: {
      expression: 65,
      recognition: 70,
    },
  },
  "Healing Loop": {
    title: "때문에, 감정은 안정적인\n온도를 유지하고 있어요.",
    description:
      "감정을 반복적으로 되새기며\n회복하려는 경향이 있어요.\n감정 회복에 시간이 걸리지만 근본적 전환을 이끌어요.",
    temperature: 36.3,
    analysis: {
      expression: 60,
      recognition: 75,
    },
  },
  "Quiet Sync": {
    title: "때문에, 감정은 차분한\n온도를 유지하고 있어요.",
    description:
      "감정을 겉으로 드러내지 않고,\n주변 정서에 조율되며 반응해요.\n내면은 복잡하지만 표현은 절제되어 있어요.",
    temperature: 36.1,
    analysis: {
      expression: 45,
      recognition: 68,
    },
  },
  "Silent Echo": {
    title: "때문에, 감정은 낮은\n온도를 유지하고 있어요.",
    description:
      "감정의 표현이 거의 없지만,\n안에서는 깊고 무거운 정서가 메아리처럼 울려요.\n감정을 언어화하거나 즉시 인식하기 어려워요.",
    temperature: 35.9,
    analysis: {
      expression: 35,
      recognition: 55,
    },
  },
  "Hidden Pearl": {
    title: "때문에, 감정은 매우 낮은\n온도를 유지하고 있어요.",
    description:
      "섬세하고 조용한 감정이 내면 깊숙이 자리해요.\n말로 표현되지 않지만\n예술이나 상징적 방식으로 감정을 인식해요.",
    temperature: 35.7,
    analysis: {
      expression: 30,
      recognition: 50,
    },
  },
};

// 리듬별 색상 설정 (그라데이션 색상은 여기서 수정하시면 됩니다)
export const RHYTHM_COLORS: Record<RhythmName, { main: string; gradient: string }> = {
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

// 리듬에 따른 색상 정보 가져오기
export const getRhythmColor = (rhythmName: RhythmName) => {
  return RHYTHM_COLORS[rhythmName] || RHYTHM_COLORS["Healing Loop"];
};
