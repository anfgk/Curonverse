import { RhythmName } from "./types";

interface PoemData {
  tag: string;
  color: string;
  content: string;
  source: string;
}

export const poemData: Record<RhythmName, PoemData> = {
  "Spark Flame": {
    tag: "Spark | 즉발형 불꽃",
    color: "#00AACA",
    content: "꿰메어낸 것이 안니 살아내었음이였다. 은혜라 말하는 것은 이제야 숨 쉬는 것.",
    source: "결의 위에서, 은혜를 알다",
    },
  "Warm Flow": {
    tag: "Healing | 자기이해형",
    color: "#FF8C8C",
    content: "부족함도 아니었고 더해짐도 아니었네 내가 나를 허락하여 돌아온 내 따스함이여.",
    source: "온전함의 온도",
    },
  "Healing Loop": {
    tag: "Warm | 유연 조율형",
    color: "#71C95D",
    content: "이름 없는 숨소리 고요한 가운데 바람이 스치면 비치는 닿는 그 무언가.",
    source: "부르기 전의 너에게",
    },
  "Quiet Sync": {
    tag: "Queit | 감정자각형",
    color: "#FADE7E",
    content: "너는 그저 서있다. 바람곁에 흔들리는 궤의 흔적 드러내며",
    source: "감정을 받아들이는 일",
    },
  "Silent Echo": {
    tag: "Silent | 내면공명형",
    color: "#BAADFA",
    content: "거친결과 옫은 가시. 고요 속에 젖어들어 피어남을 그리운다.",
    source: "감정의 전시관",
  },
  "Hidden Pearl": {
    tag: "Hidden | 감정기억형",
    color: "#FFD257",
    content: "시선의 끝은 바깥에 닿았다. 투명한 유리창 너머에 무엇이 있을지는 알 수 없었다.",
    source: "내가보는 세계",
  },
};