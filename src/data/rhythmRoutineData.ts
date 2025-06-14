export const rhythmRoutineData = {
  "Spark Flame": {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText:
        "즉각적인 표현은 좋지만,\n" +
        "감정의 불꽃을 다듬는 게 회복의 시작이에요.",
    },
    guide: "불타오르는 감정에 잠시 숨을 돌릴 틈을 주어야 해요.",
    routines: [
      {
        title: "3초 멈춤, 5초 호흡",
        desc: "감정이 터지기 전 짧게 숨을 멈추고, 내쉬어요.",
      },
      {
        title: "지금 감정을 한 단어로 말해보기",
        desc: "채팅창 또는 개인 노트에 떠오르는 감정 한 단어만 써도 괜찮아요.",
      },
    ],
    music: {
      title: "감정을 쏟는 드럼비트 음악 듣기",
      artist: "Ludovico Einaudi – Experience",
    },
  },
  // 다른 리듬도 필요시 추가
};
